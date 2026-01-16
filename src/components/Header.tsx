import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const whatsappUrl = "https://wa.me/6285122969330?text=Hello%20NOFO%2C%20I%20would%20like%20to%20inquire%20about%20your%20agribusiness%20services.";

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Offerings", href: "#offerings" },
    { name: "Team", href: "#team" },
    { name: "Sustainability", href: "#sustainability" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    commodity: "",
    quantity: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Partnership Inquiry - NOFO Official");
    const body = encodeURIComponent(
      `Dear NOFO Team,\n\nI am interested in becoming a partner. Here are my details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Commodity: ${formData.commodity}\n` +
      `Quantity per Week: ${formData.quantity}\n\n` +
      `Please contact me for further discussion.`
    );
    window.location.href = `mailto:nofoagri@gmail.com?subject=${subject}&body=${body}`;
    setIsFormOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm py-3" 
            : "bg-transparent py-5" // Benar-benar transparan sesuai permintaan
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <img 
                src={isScrolled ? "favicon.ico" : "logoputih.png"} 
                alt="Logo NOFO" 
                className="w-8 h-8 object-contain" 
              />
              <span className={`font-display text-xl font-semibold ${isScrolled ? "text-nofo-forest" : "text-white"}`}>
                NOFO
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-nofo-sage ${
                    isScrolled ? "text-foreground/80" : "text-white/90"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`transition-all ${
                    isScrolled 
                      ? "border-nofo-forest text-nofo-forest hover:bg-nofo-forest hover:text-white" 
                      : "border-white text-white bg-transparent hover:bg-white hover:text-nofo-forest"
                  }`}
                >
                  Contact Us
                </Button>
              </a>
              <Button 
                size="sm" 
                onClick={() => setIsFormOpen(true)}
                className={`${isScrolled ? "bg-nofo-forest text-white" : "bg-white text-nofo-forest hover:bg-nofo-cream"}`}
              >
                Partner With Us
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={isScrolled ? "text-foreground" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-foreground" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[64px] bg-white z-[90] border-b border-border shadow-xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-nofo-forest hover:text-nofo-sage transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-border/50" />
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline"
                  className="w-full border-nofo-forest text-nofo-forest py-6"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  Contact Us
                </Button>
                <Button 
                  className="w-full bg-nofo-forest text-white py-6"
                  onClick={() => { setIsFormOpen(true); setIsMenuOpen(false); }}
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partnership Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }} 
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-nofo-forest">Partner With Us</h3>
                <button onClick={() => setIsFormOpen(false)}><X className="w-6 h-6 text-muted-foreground hover:text-red-500" /></button>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-nofo-forest block mb-1">Full Name</label>
                  <input required type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" placeholder="John Doe" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-nofo-forest block mb-1">Email</label>
                    <input required type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" placeholder="john@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-nofo-forest block mb-1">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" placeholder="+62..." onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-nofo-forest block mb-1">Commodity Type</label>
                  <input required type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" placeholder="e.g. Chili, Potato, etc." onChange={(e) => setFormData({...formData, commodity: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold text-nofo-forest block mb-1">Weekly Quantity</label>
                  <input required type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" placeholder="e.g. 500kg or 2 Tons" onChange={(e) => setFormData({...formData, quantity: e.target.value})} />
                </div>
                <Button type="submit" className="w-full bg-nofo-forest hover:bg-nofo-forest/90 text-white py-6 text-lg mt-2">Send Inquiry via Email</Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;