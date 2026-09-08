import { Link } from "react-router-dom";
import { Shield, Lock, Award, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-bg pt-20 pb-10" style={{ background: "hsl(142 76% 12%)", color: "white" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity mb-6 inline-block">
              <div className="bg-white px-3 py-2 rounded-xl inline-block shadow-lg">
                <img src="/logo.png" alt="People Fund" className="h-16 w-auto object-contain" />
              </div>
            </Link>
            
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Empowering your financial future with fast, secure, and transparent lending solutions since 2009.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" style={{ color: "hsl(142 71% 45%)" }} />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Call Us Today</p>
                  <a href="tel:+18032658598" className="text-white hover:text-accent font-semibold transition-colors">+1 (803)-265-8598</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" style={{ color: "hsl(142 71% 45%)" }} />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Email Us</p>
                  <a href="mailto:matthewdavis02365@gmail.com" className="text-white hover:text-accent font-semibold transition-colors">matthewdavis02365@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" style={{ color: "hsl(142 71% 45%)" }} />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Branches</p>
                  <div className="text-white/80 text-sm space-y-2 mt-1">
                    <div>
                      <span className="font-semibold text-white">ADDRESS:</span><br/>
                      SOUTH CAROLINA, UNITED STATES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/banking-partners" className="text-white/60 hover:text-white transition-colors text-sm">Banking Partners</Link></li>
              <li><Link to="/faq" className="text-white/60 hover:text-white transition-colors text-sm">FAQs</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact Support</Link></li>
              <li><Link to="/login" className="text-white/60 hover:text-white transition-colors text-sm">Customer Login</Link></li>
            </ul>
          </div>

          {/* Loan Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Services</h3>
            <ul className="space-y-3">
              <li><Link to="/apply/personal" className="text-white/60 hover:text-white transition-colors text-sm">Personal Loans</Link></li>
              <li><Link to="/bank-authentication" className="text-white/60 hover:text-white transition-colors text-sm">Bank Authentication</Link></li>
              <li><Link to="/get-started" className="text-accent font-semibold hover:text-white transition-colors text-sm pt-2" style={{ color: "hsl(142 71% 45%)" }}>Apply Now →</Link></li>
            </ul>
          </div>
          
          {/* Trust & Security */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Security</h3>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Your data is protected. We use bank-level encryption to ensure your personal and financial information remains completely secure.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Shield className="w-6 h-6" style={{ color: "hsl(142 71% 45%)" }} />
                <span className="text-sm font-semibold text-white/90">256-bit SSL Secure</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Lock className="w-6 h-6" style={{ color: "hsl(142 71% 45%)" }} />
                <span className="text-sm font-semibold text-white/90">Bank-Level Encryption</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Award className="w-6 h-6" style={{ color: "hsl(142 71% 60%)" }} />
                <span className="text-sm font-semibold text-white/90">A+ BBB Accredited</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Disclaimers & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="text-xs text-white/40 leading-relaxed mb-6 space-y-4">
            <p>
              * Annual Percentage Rates (APR), loan term and monthly payments are estimated based on analysis of information provided by you, data provided by lenders, and publicly available information. All loan requests are subject to approval. Rate and terms are subject to change without notice. Not all applicants will qualify. 
            </p>
            <p>
              People Fund does not act as a lender in all instances, but rather as a marketplace to connect borrowers with participating lenders.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 border-t border-white/10 pt-6">
            <p>&copy; {new Date().getFullYear()} People Fund. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
