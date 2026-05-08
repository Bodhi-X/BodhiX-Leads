import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

// Premium, buttery ease-out curve
const smoothEase = [0.22, 1, 0.36, 1];

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: i * 0.15,
      ease: smoothEase,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2 + i * 0.1,
      ease: smoothEase,
    },
  }),
};

const HomeAboutSection = () => {
  return (
    // Note: Removed overflow-hidden from parent because it breaks CSS 'sticky' behavior
    <section className="w-full bg-stone-50 text-stone-900 font-sans border-y-[1.17px] border-stone-900 flex flex-col lg:flex-row relative">
      
      {/* LEFT COLUMN: Sticky Header (50% width) */}
      <div className="w-full lg:w-1/2 border-b-[1.17px] lg:border-b-0 lg:border-r-[1.17px] border-stone-900 p-8 md:p-12 lg:p-16 bg-stone-100">
        
        {/* Sticky Container */}
        <div className="lg:sticky lg:top-32 flex flex-col justify-center">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8 md:mb-12"
          >
            <Terminal size={16} className="text-orange-500" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-500">
              Operational Standard
            </span>
          </motion.div>

          {/* Brutalist Massive Typography */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="font-medium uppercase tracking-tighter text-[11vw] lg:text-[6vw] leading-[0.95] flex flex-col text-transparent bg-clip-text"
            style={{
              backgroundImage: "radial-gradient(circle at 95% 45%, #fbf8f2 0%, #d7d5d0 25%, #9b9a98 55%, #5f6060 85%, #1a1a1a 100%)",
            }}
          >
            <div className="overflow-hidden py-1">
              <motion.span custom={0} variants={textReveal} className="block">
                UNCOMPROMISED
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span custom={1} variants={textReveal} className="block">
                QUALITY &
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span custom={2} variants={textReveal} className="block">
                PRECISION.
              </motion.span>
            </div>
          </motion.h2>
        </div>
      </div>

      {/* RIGHT COLUMN: Scrolling Content (50% width) */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col gap-20 lg:gap-32 bg-white">
        
        {/* Block 01 */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} custom={0} className="border-b-[1.17px] border-stone-900 pb-4">
            <span className="text-sm font-mono font-bold text-orange-500 tracking-widest">01 // AWAKENING</span>
          </motion.div>
          
          <motion.h3
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug text-transparent bg-clip-text"
            style={{
              backgroundImage: "radial-gradient(ellipse at 100% 40%, #ffffff 0%, #d1d1ce 20%, #8a8986 50%, #45413f 80%, #1c1917 100%)",
            }}
          >
            Understanding your business deeply first, before we write a single line of code.
          </motion.h3>
          
          <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-stone-600 font-medium leading-relaxed">
            "Bodhi" means awakening. We bring that absolute clarity to every project. We map your architecture, identify bottlenecks, and build exactly what you need to scale effortlessly.
          </motion.p>
        </motion.div>

        {/* Block 02 */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} custom={0} className="border-b-[1.17px] border-stone-900 pb-4">
            <span className="text-sm font-mono font-bold text-stone-400 tracking-widest">02 // EXECUTION</span>
          </motion.div>
          
          <motion.h3
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug text-transparent bg-clip-text"
            style={{
              backgroundImage: "radial-gradient(ellipse at 100% 40%, #ffffff 0%, #d1d1ce 20%, #8a8986 50%, #45413f 80%, #1c1917 100%)",
            }}
          >
            On time and on budget, with zero unnecessary complexity.
          </motion.h3>
          
          <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-stone-600 font-medium leading-relaxed">
            From fast-moving startups to established enterprises, we deliver software that simply works. No bloated timelines. No over-engineered solutions. Just tangible, high-performance results.
          </motion.p>
        </motion.div>

        {/* Action Link */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} 
          custom={0}
          className="pt-8"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-6 text-sm md:text-base font-bold uppercase tracking-[0.2em] text-stone-900 transition-colors hover:text-orange-500"
          >
            <span>Discover our approach</span>
            
            {/* Architectural Arrow Container */}
            <div className="w-12 h-12 border-[0.36px] border-[#0e264d] flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default HomeAboutSection;