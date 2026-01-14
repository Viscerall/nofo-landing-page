import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar berubah warna setelah scroll 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup menu mobile saat layar diperbesar ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#offerings", label: "What We Offer" },
    { href: "#why-nofo", label: "Why NOFO" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#team", label: "Our Team" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-22">
          
          {/* --- LOGO SECTION --- */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              // PERUBAHAN DISINI:
              // Jika scroll (background putih) -> favicon.ico (Hijau)
              // Jika di atas (transparan) -> logoputih.png (Putih)
              src={isScrolled ? "/favicon.ico" : "/logoputih.png"} 
              alt="Logo NOFO" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300" 
            />
            <span 
              className={`font-display text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              NOFO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Button 
              variant="outline" 
              size="sm"
              // Tombol contact us juga menyesuaikan warna border/text saat transparan
              className={`transition-colors duration-300 ${
                !isScrolled 
                  ? "bg-transparent text-white border-white hover:bg-white hover:text-black hover:border-white" 
                  : ""
              }`}
            >
              Contact Us
            </Button>
            <Button size="sm">Partner With Us</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="px-4 sm:px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-300 py-3 px-3 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
                <Button variant="outline" className="w-full justify-center">
                  Contact Us
                </Button>
                <Button className="w-full justify-center">Partner With Us</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;