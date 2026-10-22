import { sendLoanApplicationEmail } from "../server/emailService.js";

export default async function handler(req, res) {
  // CORS setup
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    let data = req.body;

    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch {
        // keep as is
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

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission failed:", error);
    return res.status(500).json({ 
      message: "Failed to submit form",
      error: error?.message || "Unknown error" 
    });
  }
}
