import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Globe } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const values = [
    {
      icon: Heart,
      title: "Purpose-Driven",
      description: "Every decision we make centers on people, planet, and purpose.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We uplift farmers, empower communities, and create shared value.",
    },
    {
      icon: Globe,
      title: "Planet Positive",
      description: "Our practices actively contribute to environmental regeneration.",
    },
  ];

  return (
    <section id="about" className="nofo-section bg-background" ref={ref}>
      <div className="nofo-container">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-3 sm:mb-4">
              Our Story
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
              Not Only For Ourselves
            </h2>
            <div className="space-y-3 sm:space-y-4 font-body text-muted-foreground">
              <p className="text-base sm:text-lg leading-relaxed">
                NOFO was born from a simple yet powerful belief: the food we eat 
                should nourish not just our bodies, but also the communities that 
                grow it and the planet that sustains us all.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our name—<strong className="text-foreground">Not Only For Ourselves</strong>—reflects 
                our core philosophy. We understand that true sustainability goes 
                beyond personal benefit. It's about creating systems that benefit 
                farmers, consumers, and future generations equally.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Through ethical partnerships, transparent practices, and an unwavering 
                commitment to environmental stewardship, we're proving that business 
                can be a force for good—delivering fresh, quality produce while 
                healing the earth.
              </p>
            </div>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-5 order-1 lg:order-2"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="nofo-card flex items-start gap-4 sm:gap-5 p-5 sm:p-6 md:p-8"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
