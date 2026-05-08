import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { 
    title: "API-as-a-Service", 
    description: "Enterprise-grade API development and management. We build secure, highly available endpoints that power scalable ecosystems.", 
    number: "01" 
  },
  { 
    title: "Cloud Infrastructure", 
    description: "Robust, auto-scaling environments. We deploy secure server architectures designed for maximum uptime and operational efficiency.", 
    number: "02" 
  },
  { 
    title: "Custom Dashboards", 
    description: "Centralized data visualization. We build bespoke interfaces that aggregate complex metrics into clear, real-time command centers.", 
    number: "03" 
  },
  { 
    title: "Custom Software", 
    description: "Purpose-built applications tailored to your exact workflows. We engineer resilient systems that off-the-shelf SaaS cannot match.", 
    number: "04" 
  },
  { 
    title: "Digital Marketing", 
    description: "Data-driven acquisition across Meta and Google platforms. We focus on measurable ROI and targeted visibility over vanity metrics.", 
    number: "05" 
  },
  { 
    title: "Graphic & 3D Design", 
    description: "Precision-crafted visual identities and 3D assets. We bridge the gap between engineering and aesthetics for premium brand positioning.", 
    number: "06" 
  },
  { 
    title: "System Integration", 
    description: "Connecting disparate tools into a cohesive ecosystem. Automated workflows that eliminate manual data handling and reduce friction.", 
    number: "07" 
  },
  { 
    title: "Web & Landing Pages", 
    description: "High-performance web assets engineered for conversion. Clean code, rapid load times, and intuitive user experiences.", 
    number: "08" 
  },
];

// Smoother, professional easing curve
const ease = [0.25, 1, 0.5, 1];

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease,
    },
  }),
};

const FeaturesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtler parallax for the header
  const headerY = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 lg:py-24 bg-white text-zinc-900 relative overflow-hidden font-sans"
    >
      {/* Broadened Container: Increased max-w and adjusted horizontal padding */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        
        {/* Refined Header */}
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16 will-change-transform"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-medium leading-tight tracking-tight text-5xl md:text-6xl lg:text-7xl flex flex-col gap-1 uppercase"
          >
            <div className="overflow-hidden py-1">
              <motion.span custom={0} variants={textReveal} className="block">
                WHAT
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span custom={1} variants={textReveal} className="block text-zinc-400">
                WE DO.
              </motion.span>
            </div>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-200 text-sm font-medium text-zinc-900 hover:border-zinc-900 transition-colors duration-300 uppercase tracking-wider"
            >
              All Services
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Clean, Minimalist Accordion */}
        <div className="border-t border-zinc-200">
          {services.map((service, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease }}
                className="border-b border-zinc-200 group"
              >
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : index)}
                  className="w-full py-8 lg:py-10 flex items-center justify-between text-left cursor-pointer transition-colors duration-300 hover:bg-zinc-50/50 px-4 -mx-4 rounded-xl"
                >
                  <div className="flex items-center gap-8 lg:gap-16">
                    <span className="text-base font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors w-8 shrink-0">
                      {service.number}
                    </span>
                    
                    <h3 className={`text-3xl md:text-4xl font-medium tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Refined Plus/Minus Icon */}
                  <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                    <div className={`absolute w-full h-[1.5px] bg-zinc-900 transition-transform duration-500 ease-[0.25,1,0.5,1] ${isOpen ? "rotate-180" : "rotate-0"}`} />
                    <div className={`absolute w-full h-[1.5px] bg-zinc-900 transition-transform duration-500 ease-[0.25,1,0.5,1] ${isOpen ? "rotate-180 opacity-0" : "rotate-90 opacity-100"}`} />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      {/* Broadened Content Area: Increased max-w to 4xl/5xl */}
                      <div className="pl-4 md:pl-[6rem] lg:pl-[8.5rem] pb-10 max-w-4xl xl:max-w-5xl">
                        <p className="text-lg text-zinc-500 leading-relaxed font-light mb-8">
                          {service.description}
                        </p>
                        <Link
                          to="/services"
                          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-zinc-900 transition-colors hover:text-zinc-500"
                        >
                          <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-900 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
                            View Details
                          </span>
                          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;