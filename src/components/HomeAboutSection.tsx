import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import grImage from "../assets/GR.png"; 

const smoothEase = [0.22, 1, 0.36, 1];

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
  
  const HeaderTextContent = (
    <>
      <div className="flex items-center gap-2 mb-6 md:mb-10">
        <Terminal size={16} className="text-orange-500 shrink-0" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-300">
          Operational Standard
        </span>
      </div>

      {/* FIXED: Reduced the minimum clamp size to 1.8rem to ensure "UNCOMPROMISED" fits on 320px wide screens */}
      <h2 
        className="font-medium uppercase tracking-tighter text-[clamp(1.8rem,8.5vw,4rem)] md:text-7xl lg:text-[2.5rem] xl:text-5xl 2xl:text-6xl leading-[0.95] md:leading-[0.9] flex flex-col text-transparent bg-clip-text break-words w-full"
        style={{
          backgroundImage: "radial-gradient(circle at 95% 45%, #ffffff 0%, #e6e4df 25%, #a6a5a3 55%, #6d6e6e 85%, #333333 100%)",
        }}
      >
        <span className="block pb-1 md:pb-2">UNCOMPROMISED</span>
        <span className="block pb-1 md:pb-2">QUALITY &</span>
        <span className="block">PRECISION.</span>
      </h2>
    </>
  );

  return (
    <section className="w-full bg-stone-50 text-stone-900 font-sans border-y-[1.17px] border-stone-900 flex flex-col lg:flex-row relative">
      
      {/* LEFT COLUMN */}
      <div className="w-full lg:w-2/5 relative border-b-[1.17px] lg:border-b-0 lg:border-r-[1.17px] border-stone-900 bg-stone-950">
        
        {/* Mobile Wrapper */}
        <div className="lg:sticky lg:top-0 w-full min-h-[55dvh] lg:min-h-0 lg:h-[100dvh] flex flex-col justify-center relative z-0 overflow-hidden">
          
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${grImage})`,
              backgroundSize: "cover", 
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5, 
            }}
          />
          <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none" />

          {/* FIXED: Added pt-16 and pb-10 to give the text breathing room away from the top/bottom section borders */}
          <div className="relative z-10 w-full p-6 pt-16 pb-10 sm:p-8 md:p-12 lg:hidden">
            {HeaderTextContent}
          </div>
        </div>

        {/* DESKTOP SCROLL LAYER */}
        <div className="absolute top-0 left-0 w-full h-full z-10 hidden lg:block pointer-events-none">
          <div className="sticky top-32 p-8 xl:p-12 pointer-events-auto">
            {HeaderTextContent}
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col gap-20 lg:gap-32 bg-white relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-5"
        >
          <motion.div variants={fadeUp} custom={0} className="border-b-[1.17px] border-stone-900 pb-3">
            <span className="text-xs font-mono font-bold text-orange-500 tracking-widest">01 // AWAKENING</span>
          </motion.div>
          
          <motion.h3
            variants={fadeUp}
            custom={1}
            className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug text-transparent bg-clip-text break-words"
            style={{
              backgroundImage: "radial-gradient(ellipse at 100% 40%, #1a1a1a 0%, #4a4a4a 50%, #1c1917 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Understanding your business deeply first, before we write a single line of code.
          </motion.h3>
          
          <motion.p variants={fadeUp} custom={2} className="text-sm md:text-base text-stone-600 font-medium leading-relaxed">
            "Bodhi" means awakening. We bring that absolute clarity to every project. We map your architecture, identify bottlenecks, and build exactly what you need to scale effortlessly.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-5"
        >
          <motion.div variants={fadeUp} custom={0} className="border-b-[1.17px] border-stone-900 pb-3">
            <span className="text-xs font-mono font-bold text-stone-400 tracking-widest">02 // EXECUTION</span>
          </motion.div>
          
          <motion.h3
            variants={fadeUp}
            custom={1}
            className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug text-transparent bg-clip-text break-words"
            style={{
              backgroundImage: "radial-gradient(ellipse at 100% 40%, #1a1a1a 0%, #4a4a4a 50%, #1c1917 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            On time and on budget, with zero unnecessary complexity.
          </motion.h3>
          
          <motion.p variants={fadeUp} custom={2} className="text-sm md:text-base text-stone-600 font-medium leading-relaxed">
            From fast-moving startups to established enterprises, we deliver software that simply works. No bloated timelines. No over-engineered solutions. Just tangible, high-performance results.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} 
          custom={0}
          className="pt-6"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-5 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-stone-900 transition-colors hover:text-orange-500"
          >
            <span>Discover our approach</span>
            <div className="w-10 h-10 border-[0.36px] border-[#0e264d] flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeAboutSection;
