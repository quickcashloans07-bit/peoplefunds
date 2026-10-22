import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { sendLoanApplicationEmail } from "./emailService.js";

const app = express();
const port = process.env.PORT || 3001;

// Trust reverse proxy (Vercel, Render, Nginx, etc.)
app.set("trust proxy", 1);

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. server-to-server, curl, same-origin)
      if (!origin) return callback(null, true);
      // Allow any vercel deployment
      if (origin.endsWith(".vercel.app")) return callback(null, true);
      // Allow localhost
      if (origin.includes("localhost") || origin.includes("127.0.0.1")) return callback(null, true);
      // Allow explicitly configured origins
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    credentials: true,
  }),
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false },
});

app.use(limiter);

app.get(["/health", "/api/health"], (req, res) => {
  res.json({ status: "ok" });
});

app.post(["/api/submit-form", "/submit-form"], async (req, res) => {
  try {
    let data = req.body;

    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch {
        // ignore
      }
    }

    if (!data || typeof data !== "object") {
      return res.status(400).json({ message: "Invalid payload" });
    }

    delete data.ssn;
    delete data.account_number;
    delete data.routing;
    delete data.first_name;
    delete data.last_name;
    delete data.phone;
    delete data["Social Security Number"];
    delete data["Bank Account Number"];
    delete data["Bank Routing Number"];

    await sendLoanApplicationEmail(data);

    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission failed:", error);
    res.status(500).json({ 
      message: "Failed to submit form",
      error: error?.message || "Unknown error" 
    });
  }
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ 
    message: "Internal server error",
    error: err?.message || "Internal error" 
  });
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Loan application server running on port ${port}`);
  });
}

export default app;
