import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // WhatsApp Config
  const whatsappUrl = "https://wa.me/6285122969330?text=Halo%20NOFO%2C%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20layanan%20Agribusiness%20Anda.";

  // Form State
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    komoditas: "",
    kuantitas: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Partnership Inquiry - NOFO Agribusiness");
    const body = encodeURIComponent(
      `Halo Tim NOFO,\n\nSaya tertarik untuk menjadi partner. Berikut data saya:\n\n` +
      `Nama: ${formData.nama}\n` +
      `Email: ${formData.email}\n` +
      `Komoditas: ${formData.komoditas}\n` +
      `Kuantitas per Minggu: ${formData.kuantitas}\n\n` +
      `Mohon segera hubungi saya kembali.`
    );
    
    // Membuka aplikasi email user
    window.location.href = `mailto:nofoagri@gmail.com?subject=${subject}&body=${body}`;
    setIsFormOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#offerings", label: "What We Offer" },
    { href: "#why-nofo", label: "Why NOFO" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#team", label: "Our Team" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-22">
            
            <a href="#" className="flex items-center gap-2">
              <img src={isScrolled ? "favicon.ico" : "logoputih.png"} alt="Logo NOFO" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <span className={`font-display text-lg sm:text-xl font-semibold ${isScrolled ? "text-foreground" : "text-white"}`}>NOFO</span>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={`text-sm font-medium ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>{link.label}</a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className={!isScrolled ? "bg-transparent text-white border-white hover:bg-white hover:text-black" : ""}>Contact Us</Button>
              </a>
              <Button size="sm" onClick={() => setIsFormOpen(true)}>Partner With Us</Button>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className={isScrolled ? "text-foreground" : "text-white"} /> : <Menu className={isScrolled ? "text-foreground" : "text-white"} />}
            </button>
          </div>
        </div>
      </header>

      {/* MODAL FORM PARTNERSHIP */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl border border-border"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-foreground">Partner With Us</h3>
                <button onClick={() => setIsFormOpen(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Nama Lengkap</label>
                  <input required type="text" className="w-full px-3 py-2 border rounded-md" onChange={(e) => setFormData({...formData, nama: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <input required type="email" className="w-full px-3 py-2 border rounded-md" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Komoditas yang Disediakan</label>
                  <input required type="text" placeholder="Contoh: Cabai, Jagung, dll" className="w-full px-3 py-2 border rounded-md" onChange={(e) => setFormData({...formData, komoditas: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Kuantitas per Minggu (Kg/Ton)</label>
                  <input required type="text" className="w-full px-3 py-2 border rounded-md" onChange={(e) => setFormData({...formData, kuantitas: e.target.value})} />
                </div>
                <Button type="submit" className="w-full">Kirim via Email</Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;