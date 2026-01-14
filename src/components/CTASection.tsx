import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="nofo-section-compact bg-background" ref={ref}>
      <div className="nofo-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary p-6 sm:p-8 md:p-10 lg:p-14 xl:p-20"
        >
          {/* Decorative Elements - Hidden on mobile */}
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
                <Button 
                  variant="hero" 
                  className="bg-nofo-cream text-nofo-forest hover:bg-nofo-cream/90 group text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6"
                >
                  Get Sustainable Product
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="heroOutline"
                  className="text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6"
                >
                  Become a Partner
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-nofo-sage/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-nofo-sage" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-primary-foreground/60 mb-0.5 sm:mb-1">Email Us</p>
                  <p className="font-medium text-sm sm:text-base text-primary-foreground">nofoagri@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-nofo-sage/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-nofo-sage" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-primary-foreground/60 mb-0.5 sm:mb-1">Call Us</p>
                  <p className="font-medium text-sm sm:text-base text-primary-foreground">+62 851-2296-9330</p>
                </div>
              </div>

              <p className="text-center text-xs sm:text-sm text-primary-foreground/50">
                We respond within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
