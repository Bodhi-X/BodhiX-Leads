import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
// Adjust the relative path to match your folder structure if your component isn't one level deep
import grImage from "../assets/GR.png"; 

// Premium, buttery ease-out curve
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
  
  // Extracting the header text into a reusable block so we can render it cleanly
  // for both the mobile stack layout and the desktop scrolling overlay.
  const HeaderTextContent = (
    <>
      <div className="flex items-center gap-2 mb-6 md:mb-10">
        <Terminal size={16} className="text-orange-500" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-300">
          Operational Standard
        </span>
      </div>

      {/* Brutalist Massive Typography */}
      <h2 
        className="font-medium uppercase tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-[2.5rem] xl:text-5xl 2xl:text-6xl leading-[0.95] md:leading-[0.9] flex flex-col text-transparent bg-clip-text whitespace-nowrap"
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
      
      {/* LEFT COLUMN: Relative wrapper that matches the full height of the section */}
      <div className="w-full lg:w-2/5 relative border-b-[1.17px] lg:border-b-0 lg:border-r-[1.17px] border-stone-900 bg-stone-950">
        
        {/* IMAGE LAYER: Frozen/Sticky on Desktop, Static on Mobile */}
        <div className="lg:sticky lg:top-0 w-full min-h-[50vh] lg:min-h-0 lg:h-screen flex flex-col justify-center relative z-0">
          
          {/* Edge-to-Edge Background graphic - Changed to 'cover' to prevent squishing */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${grImage})`,
              backgroundSize: "cover", // Forces the image to fill without compressing/distorting
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5, // Base image opacity
            }}
          />
          {/* Dark filter overlay for text contrast */}
          <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none" />

          {/* MOBILE TEXT: Renders directly inside so it flows naturally on small screens */}
          <div className="relative z-10 w-full p-6 sm:p-8 md:p-12 lg:hidden">
            {HeaderTextContent}
          </div>
        </div>

        {/* DESKTOP TEXT SCROLL LAYER: Absolute container that allows the text to scroll 
            down the entire height of the left column, sticking at top-32 as it goes. */}
        <div className="absolute top-0 left-0 w-full h-full z-10 hidden lg:block pointer-events-none">
          <div className="sticky top-32 p-8 xl:p-12 pointer-events-auto">
            {HeaderTextContent}
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Scrolling Content */}
      <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col gap-20 lg:gap-32 bg-white relative z-10">
        
        {/* Block 01 */}
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
            className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug text-transparent bg-clip-text"
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

        {/* Block 02 */}
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
            className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug text-transparent bg-clip-text"
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

        {/* Action Link */}
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
            
            {/* Architectural Arrow Container */}
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