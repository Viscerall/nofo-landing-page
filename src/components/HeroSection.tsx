import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-produce.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh sustainable produce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nofo-forest/95 via-nofo-forest/85 to-nofo-forest/70 md:from-nofo-forest/95 md:via-nofo-forest/80 md:to-nofo-forest/60" />
      </div>

      {/* Decorative Elements - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 right-10 w-48 md:w-64 h-48 md:h-64 bg-nofo-sage/20 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-20 left-10 w-32 md:w-48 h-32 md:h-48 bg-nofo-terracotta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-center md:text-left py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
          >
            <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-nofo-sage" />
            <span className="text-xs sm:text-sm font-medium text-primary-foreground/90">
              Sustainable Agribusiness
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
          >
            Nourishing Lives,{" "}
            <span className="text-nofo-sage block sm:inline">Nurturing Earth</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto md:mx-0 mb-6 sm:mb-8 leading-relaxed"
          >
            NOFO delivers fresh, ethically-sourced produce while championing 
            environmental responsibility and supporting local farmers. 
            Because sustainability isn't just a choice, it's our commitment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Button 
              variant="hero" 
              className="group bg-nofo-cream text-nofo-forest hover:bg-nofo-cream/90 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6"
            >
              Get Sustainable Product
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline"
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6"
            >
              Partner With Us
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start text-primary-foreground/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nofo-sage" />
              <span className="text-xs sm:text-sm">100% Sustainable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nofo-sage" />
              <span className="text-xs sm:text-sm">Ethically Sourced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nofo-sage" />
              <span className="text-xs sm:text-sm">Farm Fresh</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5 sm:p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
