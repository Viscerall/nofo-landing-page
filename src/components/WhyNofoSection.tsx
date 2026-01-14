import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Handshake, Shield, Eye } from "lucide-react";

const WhyNofoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const reasons = [
    {
      icon: Leaf,
      title: "Eco-Friendly Practices",
      description:
        "From regenerative farming partnerships to biodegradable packaging, every aspect of our operation prioritizes environmental health.",
    },
    {
      icon: Handshake,
      title: "Ethical Farmer Partnerships",
      description:
        "We pay fair prices, provide training, and build long-term relationships that empower farming communities to thrive.",
    },
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description:
        "Rigorous quality checks at every stage ensure only the freshest, safest produce reaches your table.",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description:
        "Know exactly where your food comes from. We share our sourcing journey, farming practices, and impact metrics openly.",
    },
  ];

  return (
    <section id="why-nofo" className="nofo-section bg-background" ref={ref}>
      <div className="nofo-container">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 xl:gap-28">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-3 sm:mb-4">
              Why Choose NOFO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
              Where Quality Meets Conscience
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Choosing NOFO means choosing a food system that works for everyone. 
              We've reimagined what agribusiness can be—prioritizing people 
              and planet without compromising on quality.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-primary-foreground">∞</span>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base text-foreground">Infinite Impact</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Every purchase creates ripples of positive change
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Reasons */}
          <div className="space-y-4 sm:space-y-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                    {reason.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNofoSection;
