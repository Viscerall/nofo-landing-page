import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ArrowRight, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  // WhatsApp Config
  const whatsappNumber = "6285122969330";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Halo NOFO, saya ingin memesan produk berkelanjutan. Bisa kirimkan daftar harga atau katalognya?"
  )}`;

  // Form State untuk Partnership
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    komoditas: "",
    kuantitas: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Partnership Inquiry - NOFO CTA Section");
    const body = encodeURIComponent(
      `Halo Tim NOFO,\n\nSaya ingin bergabung menjadi partner. Berikut data profil saya:\n\n` +
      `Nama: ${formData.nama}\n` +
      `Email: ${formData.email}\n` +
      `Komoditas: ${formData.komoditas}\n` +
      `Estimasi Kuantitas: ${formData.kuantitas}\n\n` +
      `Terima kasih.`
    );
    window.location.href = `mailto:nofoagri@gmail.com?subject=${subject}&body=${body}`;
    setIsFormOpen(false);
  };

  return (
    <>
      <section className="nofo-section-compact bg-background" ref={ref}>
        <div className="nofo-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary p-6 sm:p-8 md:p-10 lg:p-14 xl:p-20"
          >
            {/* Decorative Elements */}
            <div className="hidden sm:block absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-nofo-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="hidden sm:block absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-nofo-terracotta/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 sm:mb-6 leading-tight">
                  Ready to Make a <span className="text-nofo-sage">Difference</span>?
                </h2>
                <p className="font-body text-sm sm:text-base lg:text-lg text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                  Whether you're a conscious consumer seeking fresh, sustainable produce 
                  or a business looking to partner with an ethical supplier—we'd love 
                  to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="hero" 
                      className="bg-nofo-cream text-nofo-forest hover:bg-nofo-cream/90 group text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 w-full"
                    >
                      Get Sustainable Product
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  
                  <Button 
                    variant="heroOutline"
                    onClick={() => setIsFormOpen(true)}
                    className="text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6"
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                <a href="mailto:nofoagri@gmail.com" className="block group">
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-colors group-hover:bg-primary-foreground/10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-nofo-sage/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-nofo-sage" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-primary-foreground/60 mb-0.5 sm:mb-1">Email Us</p>
                      <p className="font-medium text-sm sm:text-base text-primary-foreground">nofoagri@gmail.com</p>
                    </div>
                  </div>
                </a>

                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-colors group-hover:bg-primary-foreground/10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-nofo-sage/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-nofo-sage" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-primary-foreground/60 mb-0.5 sm:mb-1">Call Us</p>
                      <p className="font-medium text-sm sm:text-base text-primary-foreground">+62 851-2296-9330</p>
                    </div>
                  </div>
                </a>

                <p className="text-center text-xs sm:text-sm text-primary-foreground/50">
                  We respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL FORM PARTNERSHIP */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-border"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-nofo-forest">Become a Partner</h3>
                <button onClick={() => setIsFormOpen(false)}><X className="w-5 h-5 text-muted-foreground hover:text-red-500" /></button>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-nofo-forest mb-1 block">Nama Lengkap</label>
                  <input required type="text" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" onChange={(e) => setFormData({...formData, nama: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold text-nofo-forest mb-1 block">Email</label>
                  <input required type="email" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold text-nofo-forest mb-1 block">Komoditas</label>
                  <input required type="text" placeholder="Cabai, Kentang, dll" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" onChange={(e) => setFormData({...formData, komoditas: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold text-nofo-forest mb-1 block">Kuantitas per Minggu</label>
                  <input required type="text" placeholder="Misal: 500kg atau 2 Ton" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nofo-sage outline-none" onChange={(e) => setFormData({...formData, kuantitas: e.target.value})} />
                </div>
                <Button type="submit" className="w-full bg-nofo-forest hover:bg-nofo-forest/90 text-white py-6">Kirim Proposal via Email</Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CTASection;