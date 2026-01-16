import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Droplets, CloudRain, Heart, Apple, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group overflow-hidden rounded-[1.5rem] shadow-xl aspect-[16/10] bg-nofo-sage/5">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

      {/* Navigation - Only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 border border-white/20">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 border border-white/20">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className="group py-1">
                <div 
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === currentIndex ? "w-6 bg-nofo-sage" : "w-1.5 bg-white/50"
                  }`} 
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const activities = [
    {
      title: "Sustainable Innovation with Hanponic Farm",
      subtitle: "Smart Irrigation",
      description: "Partnering with Hanponic Farm, we implement advanced hydroponic systems using rainwater harvesting. This innovation significantly reduces groundwater reliance while ensuring premium quality, pesticide-free produce.",
      images: ["hanponic-1.webp", "hanponic-2.webp", "hanponic-3.webp"],
      features: [
        { icon: CloudRain, text: "Rainwater Harvesting" },
        { icon: CheckCircle2, text: "Eco-Friendly Growth" }
      ],
      reverse: false
    },
    {
      title: "Fueling the IPBallers Community",
      subtitle: "Social Contribution",
      description: "Sustainability is also about supporting people. We provide fresh fruits and infused water for the IPBallers basketball community, promoting healthy lifestyles for the next generation of athletes.",
      images: ["ballers-1.webp", "ballers-2.webp"], // Hanya 2 foto sesuai permintaan
      features: [
        { icon: Apple, text: "Fresh Fruit Support" },
        { icon: Heart, text: "Healthy Community" }
      ],
      reverse: true
    }
  ];

  return (
    <section id="sustainability" className="nofo-section bg-white py-16 md:py-24 lg:py-32" ref={ref}>
      <div className="nofo-container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-nofo-sage font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Sustainability & Community
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-nofo-forest mb-6">
            Our Sustainable Journey
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging eco-innovation and community wellness to create a lasting impact on our environment and society.
          </p>
        </motion.div>

        {/* Activities Content */}
        <div className="space-y-20 lg:space-y-32">
          {activities.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
            >
              {/* Slider - Lebar dioptimalkan */}
              <motion.div 
                className="w-full lg:w-[50%]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ImageSlider images={item.images} />
              </motion.div>

              {/* Text - Lebar dioptimalkan agar seimbang */}
              <motion.div 
                className="w-full lg:w-[50%] space-y-6 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="space-y-2">
                  <span className="text-nofo-sage font-semibold uppercase text-xs tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-nofo-forest leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-nofo-sage/5 border border-nofo-sage/10">
                      <feature.icon className="w-4 h-4 text-nofo-sage" />
                      <span className="text-xs font-semibold text-nofo-forest">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Compact Pledge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mt-24 lg:mt-32 p-10 bg-nofo-forest rounded-[2rem] text-center text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h4 className="font-display text-xl md:text-2xl font-bold mb-4">
              "Building systems that nourish generations while restoring the Earth."
            </h4>
            <div className="w-12 h-1 bg-nofo-sage mx-auto mb-4" />
            <p className="text-nofo-sage text-[10px] font-bold tracking-[0.3em] uppercase">The NOFO Sustainability Pledge</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.03] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;