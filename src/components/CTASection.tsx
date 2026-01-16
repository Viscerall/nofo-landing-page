import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const whatsappUrl = "https://wa.me/6285122969330?text=Hello%20NOFO%2C%20I'm%20interested%20in%20your%20sustainable%20products.";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    commodity: "",
    quantity: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Partnership Inquiry - CTA Section");
    const body = encodeURIComponent(
      `Hello NOFO Team,\n\nI want to become a partner. Here is my profile:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Commodity: ${formData.commodity}\n` +
      `Estimated Quantity: ${formData.quantity}\n\n` +
      `Thank you.`
    );
    window.location.href = `mailto:nofoagri@gmail.com?subject=${subject}&body=${body}`;
    setIsFormOpen(false);
  };

  return (
    <>
      <section className="nofo-section-compact bg-background" ref={ref}>
        <div className="nofo-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-14 lg:p-20">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
                  Ready to Make a <span className="text-nofo-sage">Difference</span>?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Whether you're a conscious consumer seeking fresh produce or a business looking for an ethical supplier—we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" className="bg-nofo-cream text-nofo-forest hover:bg-nofo-cream/90 group px-8 py-6 w-full">
                      Get Sustainable Product <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <Button variant="heroOutline" onClick={() => setIsFormOpen(true)} className="px-8 py-6">Become a Partner</Button>
                </div>
              </div>

              <div className="space-y-6">
                <a href="mailto:nofoagri@gmail.com" className="block p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all">
                  <div className="flex items-center gap-4">
                    <Mail className="text-nofo-sage w-6 h-6" />
                    <div>
                      <p className="text-xs text-primary-foreground/60">Email Us</p>
                      <p className="font-medium text-primary-foreground">nofoagri@gmail.com</p>
                    </div>
                  </div>
                </a>
                <a href="https://wa.me/6285122969330" target="_blank" className="block p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all">
                  <div className="flex items-center gap-4">
                    <Phone className="text-nofo-sage w-6 h-6" />
                    <div>
                      <p className="text-xs text-primary-foreground/60">Call/WA Us</p>
                      <p className="font-medium text-primary-foreground">+62 851-2296-9330</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORM MODAL (Same as Header for consistency) */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
              <div className="flex justify-between items-center mb-6 text-nofo-forest">
                <h3 className="text-2xl font-bold">Partnership Inquiry</h3>
                <button onClick={() => setIsFormOpen(false)}><X className="w-6 h-6" /></button>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-nofo-sage" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="email" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-nofo-sage" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input required type="tel" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-nofo-sage" placeholder="Phone Number" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-nofo-sage" placeholder="Commodity Type (e.g. Corn)" onChange={(e) => setFormData({...formData, commodity: e.target.value})} />
                <input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-nofo-sage" placeholder="Quantity per Week" onChange={(e) => setFormData({...formData, quantity: e.target.value})} />
                <Button type="submit" className="w-full bg-nofo-forest text-white py-6">Submit Partnership Request</Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CTASection;