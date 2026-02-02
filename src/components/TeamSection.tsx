import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const leadership = [
    {
      name: "Fadilla Mahardika Wibowo",
      role: "Founder & CEO",
      bio: "Visionary leader focus on sustainable growth.",
      image: "/placeholder.svg", // Ganti jadi "/namafile.jpg" jika sudah ada di folder public
    },
    {
      name: "Nizar Adi Saputra",
      role: "Co-Founder & CFO",
      bio: "Expert in agricultural technology and systems.",
      image: "/placeholder.svg",
    },
    {
      name: "Sayyid Nabiel Mubarak",
      role: "Co-Founder & COO",
      bio: "Specializing in operational excellence and logistics.",
      image: "/placeholder.svg",
    },
  ];

  const coreTeam = [
    {
      name: "NaN", /* Muhammad Dzaky Andifitra*/
      role: "Head of Marketing",
      bio: "NaN", /* 15+ years in supply chain optimization, now dedicated to building efficient networks.*/
      image: "/placeholder.svg",
    },
    {
      name: "NaN", /* Muhammad Tristan Prasetyo */
      role: "Head of Business Strategy",
      bio: "NaN", /* Environmental policy expert ensuring global sustainability standards. */
      image: "/placeholder.svg",
    },
    {
      name: "NaN", /*Farrel Putra Rizfara */
      role: "Creative Director",
      bio: "NaN", /* Building fair, long-term relationships with farming communities. */
      image: "/placeholder.svg",
    },
    {
      name: "NaN", /* Daffa Ari Nabighah */
      role: "Head of Field Control",
      bio: "NaN", /*  Food scientist with a passion for freshness and quality control. */
      image: "/placeholder.svg", /* omdapuks.jpg */ 
    },
  ];

  return (
    <section id="team" className="nofo-section bg-secondary/30" ref={ref}>
      <div className="nofo-container px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5">
            The People Behind the Purpose
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Meet the passionate individuals driving NOFO's mission forward.
          </p>
        </motion.div>

        {/* Leadership Spotlight (Founders) */}
        <div className="grid grid-cols-1 gap-8 mb-20">
          {leadership.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="nofo-card p-6 md:p-10 bg-white rounded-3xl shadow-sm border border-border/50"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Image Section - FIXED LOGIC */}
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-nofo-sage/30 overflow-hidden relative">
                    {person.image && person.image !== "/placeholder.svg" ? (
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                        <span className="text-4xl md:text-6xl font-display font-bold text-primary/30">
                          {person.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 text-center md:text-left">
                  <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-2">
                    Leadership
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-1">
                    {person.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{person.role}</p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {person.bio}
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Linkedin className="w-5 h-5 text-primary cursor-pointer hover:opacity-70 transition-opacity" />
                    <Twitter className="w-5 h-5 text-primary cursor-pointer hover:opacity-70 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Team Grid */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-12">Core Team</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="nofo-card p-6 text-center bg-white rounded-2xl border border-border/50 shadow-sm"
              >
                {/* Image Section - FIXED LOGIC */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-nofo-sage/20 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                  {member.image && member.image !== "/placeholder.svg" ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-bold text-primary/30">{member.name.charAt(0)}</span>
                  )}
                </div>
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div> 
      </div>
    </section>
  );
};

export default TeamSection;