import { Shield, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Pre-Legal Recovery", href: "#services" },
    { label: "Legal Support", href: "#services" },
    { label: "Skip Tracing", href: "#services" },
    { label: "Field Collections", href: "#services" },
    { label: "Analytics", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Data Protection", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cream/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight">RecoveryPro</span>
            </a>
            <p className="text-cream/60 mb-6 max-w-sm leading-relaxed">
              Leading debt recovery BPO providing compliant, ethical loan collection 
              services to banks and financial institutions across India.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-cream">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-cream">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-5 text-cream">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/50">
              © {currentYear} RecoveryPro. All rights reserved.
            </p>
            <p className="text-xs text-cream/40 text-center md:text-right max-w-xl leading-relaxed">
              <strong className="text-cream/50">Disclaimer:</strong> All collection activities are conducted in strict compliance 
              with RBI guidelines, SARFAESI Act, and applicable debt collection laws. We follow 
              ethical practices and respect debtor rights as mandated by regulatory authorities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
