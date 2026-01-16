import { Leaf, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Careers", href: "#" },
    ],
    offerings: [
      { label: "Fresh Vegetables", href: "#offerings" },
      { label: "Fresh Fruits", href: "#offerings" },
      { label: "Business Partners", href: "#" },
      { label: "Community Programs", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Delivery Info", href: "#" },
      { label: "Quality Promise", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-nofo-charcoal text-nofo-cream/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 sm:mb-6">
              {/* Logo Tanpa Background Hijau */}
              <img
                src="logoputih.png"
                alt="Logo NOFO"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
              />
              <span className="font-display text-xl sm:text-2xl font-semibold text-nofo-cream tracking-tight">
                NOFO
              </span>
            </a>
            <p className="font-display text-base sm:text-lg text-nofo-cream mb-1 sm:mb-2">
              Not Only For Ourselves
            </p>
            <p className="font-body text-xs sm:text-sm text-nofo-cream/60 max-w-sm mb-4 sm:mb-6 leading-relaxed">
              Nourishing lives, nurturing earth. We're building a sustainable 
              food system that works for farmers, consumers, and the planet.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-nofo-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold text-nofo-cream mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-nofo-sage transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold text-nofo-cream mb-3 sm:mb-4">
              Offerings
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.offerings.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-nofo-sage transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-base sm:text-lg font-semibold text-nofo-cream mb-3 sm:mb-4">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-nofo-sage transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nofo-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-5 sm:py-6 lg:py-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-nofo-cream/50 text-center sm:text-left">
            © {currentYear} NOFO - Not Only For Ourselves. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-nofo-cream/50">
            <a href="#" className="hover:text-nofo-sage transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-nofo-sage transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;