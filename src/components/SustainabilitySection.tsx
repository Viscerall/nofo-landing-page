import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Recycle, TreeDeciduous, Sun } from "lucide-react";

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const commitments = [
    {
      icon: TreeDeciduous,
      stat: "50,000+",
      label: "Trees Protected",
      description: "Through forest conservation partnerships",
    },
    {
      icon: Droplets,
      stat: "40%",
      label: "Water Saved",
      description: "Via efficient irrigation practices",
    },
    {
      icon: Recycle,
      stat: "Zero",
      label: "Plastic Waste",
      description: "Biodegradable packaging only",
    },
    {
      icon: Sun,
      stat: "100%",
      label: "Renewable Energy",
      description: "Solar-powered facilities",
    },
  ];

  return (
    <section id="sustainability" className="nofo-section bg-primary text-primary-foreground" ref={ref}>
      <div className="nofo-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-nofo-sage uppercase tracking-widest mb-3 sm:mb-5">
            Our Commitment
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-5">
            Sustainability in Action
          </h2>
          <p className="font-body text-base sm:text-lg text-primary-foreground/80 leading-relaxed px-4 sm:px-0">
            We don't just talk about sustainability—we measure it, report it, 
            and continuously improve. Here's how we're making a tangible difference
            for the planet.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {commitments.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-nofo-sage/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-nofo-sage" />
              </div>
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-nofo-sage mb-0.5 sm:mb-1">
                {item.stat}
              </p>
              <p className="font-semibold text-xs sm:text-sm lg:text-base text-primary-foreground mb-1 sm:mb-2">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/60 hidden sm:block">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10"
        >
          <blockquote className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium italic text-primary-foreground mb-4 sm:mb-6 leading-relaxed">
            "Our vision extends beyond today's harvest. We're building agricultural 
            systems that will nourish generations to come while restoring the 
            ecosystems that make life possible."
          </blockquote>
          <p className="font-body text-sm sm:text-base text-primary-foreground/60">
            — The NOFO Sustainability Pledge
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
