import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Apple, Carrot, Milk, ChevronRight, List, X } from "lucide-react";

interface Offering {
  icon: any;
  title: string;
  description: string;
  images: string[];
  allProducts: string[];
}

const OfferingsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const offerings: Offering[] = [
    {
      icon: Carrot,
      title: "Vegetables",
      description: "Organic leafy greens and seasonal favorites daily.",
      images: ["veg-1.jpg", "veg-2.jpg", "veg-3.jpg", "veg-4.jpg"],
      allProducts: ["Spinach", "Carrots", "Lettuce", "Tomatoes", "Cabbage", "Peppers", "Broccoli", "Kale"],
    },
    {
      icon: Apple,
      title: "Fresh Fruits",
      description: "Sun-ripened tropical and orchard classics.",
      images: ["fruit-1.jpg", "fruit-2.jpg", "fruit-3.jpg", "fruit-4.jpg"],
      allProducts: ["Bananas", "Avocado", "Oranges", "Mangosteen", "Dragon Fruit", "Grapes", "Papaya", "Mango"],
    },
    {
      icon: Milk,
      title: "Others",
      description: "Fresh farm produce including dairy, eggs, and local honey.",
      images: ["other-1.jpg", "other-2.jpg", "other-3.jpg", "other-4.jpg"],
      allProducts: ["Fresh Milk", "Free-range Eggs", "Wild Honey", "Fresh Yogurt", "Artisan Cheese", "Farm Butter"],
    },
  ];

  return (
    <section id="offerings" className="nofo-section bg-secondary/30 py-20 overflow-visible" ref={ref}>
      <div className="nofo-container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-3 block">Selection</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">Our Offerings</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {offerings.map((offering, index) => (
            <OfferingCard 
              key={offering.title} 
              offering={offering} 
              index={index} 
              isInView={isInView}
              isActive={activeCard === offering.title}
              isAnyActive={activeCard !== null}
              onToggle={() => setActiveCard(activeCard === offering.title ? null : offering.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferingCard = ({ offering, index, isInView, isActive, isAnyActive, onToggle }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = offering.images.length;

  useEffect(() => {
    if (isActive) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
    }, 4500); // Sedikit lebih lambat agar transisi terlihat dinikmati
    return () => clearInterval(interval);
  }, [isActive, slideCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { 
        opacity: isAnyActive && !isActive ? 0.4 : 1, 
        scale: isActive ? 1.05 : (isAnyActive ? 0.95 : 1),
        y: 0,
        zIndex: isActive ? 40 : 1
      } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Bezier curve lebih smooth
      onClick={onToggle}
      className={`group relative flex flex-col h-full bg-white rounded-[2rem] border transition-all duration-500 cursor-pointer 
        ${isActive ? 'shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-primary/20' : 'shadow-sm border-border/40'}`}
    >
      {/* Hero Section */}
      <div className="relative h-64 sm:h-72 m-2 rounded-[1.6rem] bg-muted overflow-hidden">
        {/* Menggunakan mode="popLayout" atau mematikan wait untuk crossfade murni */}
        <AnimatePresence initial={false}>
          <motion.img
            key={offering.images[currentSlide]}
            src={offering.images[currentSlide]}
            initial={{ opacity: 0, scale: 1.1 }} // Mulai dari agak besar
            animate={{ opacity: 1, scale: 1 }}    // Mengecil perlahan (Ken Burns)
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 1.2, ease: "easeOut" } 
            }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={offering.title}
          />
        </AnimatePresence>

        {/* Catalog Overlay */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-primary/95 z-40 p-5 flex flex-col rounded-[inherit]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <List className="w-3 h-3 text-white/60" />
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Catalog</span>
                </div>
                <button onClick={onToggle} className="p-1 hover:bg-white/10 rounded-full text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-1.5 overflow-y-auto max-h-full no-scrollbar pb-4">
                {offering.allProducts.map((p: string, i: number) => (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    key={p} 
                    className="px-2.5 py-1 bg-white/10 border border-white/10 rounded-lg text-white text-[10px] font-medium"
                  >
                    {p}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicators */}
        {!isActive && (
          <div className="absolute bottom-3 left-0 right-0 px-8 flex gap-1.5 z-20">
            {offering.images.map((_, i) => (
              <div key={i} className="h-1 flex-grow rounded-full bg-white/20 overflow-hidden">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: currentSlide === i ? "100%" : "0%" }}
                  transition={{ 
                    duration: currentSlide === i ? 4.5 : 0.5, 
                    ease: "linear" 
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center">
            <offering.icon className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">
            {offering.title}
          </h3>
        </div>

        <AnimatePresence>
          {!isActive && (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="font-body text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2"
            >
              {offering.description}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4 border-t border-border/40 flex justify-between items-center group/btn">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest transition-all">
            {isActive ? "Close" : "Collection"}
          </span>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-primary text-white rotate-90 shadow-lg shadow-primary/30' : 'bg-primary/5 text-primary group-hover/btn:bg-primary group-hover/btn:text-white'}`}>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferingsSection;