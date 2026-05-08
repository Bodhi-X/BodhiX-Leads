import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const textReveal = {
  hidden: { y: "120%", opacity: 0, rotate: 1 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      delay: 0.1 + i * 0.15,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.6 + i * 0.12,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  }),
};

// --- OPTIMIZED: High-Performance, Darker Light Trails ---
const BackgroundTrails = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="w-full h-full opacity-80"
      >
        {/* --- AMBIENT TRACKS (Static/Slow fading background lines) --- */}
        {/* These act as the faint "trunks" that the light beams travel down */}
        
        <motion.path
          d="M -200 813 C 170 813, 520 200, 1200 100" // Upper-Mid Gap
          fill="none" stroke="#1E293B" strokeWidth="8"
          initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M -200 820 C 200 820, 600 400, 1200 300" // Middle
          fill="none" stroke="#431407" strokeWidth="10"
          initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.path
          d="M -200 823 C 210 823, 580 500, 1200 500" // Mid-Lower Gap 1
          fill="none" stroke="#431407" strokeWidth="8"
          initial={{ opacity: 0 }} animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.path
          d="M -200 826 C 230 826, 620 600, 1200 650" // Mid-Lower Gap 2
          fill="none" stroke="#0F172A" strokeWidth="8"
          initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.path
          d="M -200 830 C 250 830, 600 750, 1200 800" // Lower
          fill="none" stroke="#172554" strokeWidth="8"
          initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* --- MOVING BEAMS --- */}

        {/* 1. Upper Branch - Deep Orange Trail */}
        <motion.path
          d="M -200 810 C 150 810, 500 100, 1200 -100"
          fill="none" stroke="#9A3412" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M -200 810 C 150 810, 500 100, 1200 -100"
          fill="none" stroke="#7C2D12" strokeWidth="8" strokeLinecap="round"
          initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.3, 0.3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* 1.5 NEW GAP FILLER - Soft White Trail */}
        <motion.path
          d="M -200 813 C 170 813, 520 200, 1200 100"
          fill="none" stroke="#F4F0EA" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.5, 0.5, 0] }} // Kept opacity slightly lower so it doesn't overpower
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 2.5 }}
        />
        <motion.path
          d="M -200 813 C 170 813, 520 200, 1200 100"
          fill="none" stroke="#D6D3D1" strokeWidth="6" strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.15, 0.15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 2.5 }}
        />

        {/* 2. Middle Branch - Dark Royal Blue Trail */}
        <motion.path
          d="M -200 820 C 200 820, 600 400, 1200 300"
          fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
        />
        <motion.path
          d="M -200 820 C 200 820, 600 400, 1200 300"
          fill="none" stroke="#172554" strokeWidth="6" strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
        />

        {/* 2.3 NEW GAP FILLER - Dark Orange Trail */}
        <motion.path
          d="M -200 823 C 210 823, 580 500, 1200 500"
          fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <motion.path
          d="M -200 823 C 210 823, 580 500, 1200 500"
          fill="none" stroke="#9A3412" strokeWidth="7" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.25, 0.25, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 5 }}
        />

        {/* 2.6 NEW GAP FILLER - Navy Blue Trail */}
        <motion.path
          d="M -200 826 C 230 826, 620 600, 1200 650"
          fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.path
          d="M -200 826 C 230 826, 620 600, 1200 650"
          fill="none" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round"
          initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.3, 0.3, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        {/* 3. Lower Branch - Golden Amber Trail */}
        <motion.path
          d="M -200 830 C 250 830, 600 750, 1200 800"
          fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 6 }}
        />
        <motion.path
          d="M -200 830 C 250 830, 600 750, 1200 800"
          fill="none" stroke="#92400E" strokeWidth="7" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.2, 0.2, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 6 }}
        />

        {/* ADDITIONAL FILLER TRAILS - Soft Colors */}
        
        {/* Filler 1 - Between Upper and Upper-Mid (811.5) */}
        <motion.path
          d="M -200 811.5 C 155 811.5, 505 150, 1200 0"
          fill="none" stroke="#F4F0EA" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 11.5, repeat: Infinity, ease: "linear", delay: 0.8 }}
        />
        <motion.path
          d="M -200 812.3 C 162 812.3, 510 175, 1200 25"
          fill="none" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.35, 0.35, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />

        {/* Filler 2 - Between Upper-Mid and Middle (816) */}
        <motion.path
          d="M -200 816 C 180 816, 550 275, 1200 200"
          fill="none" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.11, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.45, 0.45, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.path
          d="M -200 817.5 C 190 817.5, 570 330, 1200 250"
          fill="none" stroke="#F8D5C4" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.11, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 11.8, repeat: Infinity, ease: "linear", delay: 2.7 }}
        />
        <motion.path
          d="M -200 818.8 C 195 818.8, 595 360, 1200 270"
          fill="none" stroke="#172554" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.38, 0.38, 0] }}
          transition={{ duration: 12.3, repeat: Infinity, ease: "linear", delay: 3.2 }}
        />

        {/* Filler 3 - Between Middle and Mid-Lower Gap 1 (821.5) */}
        <motion.path
          d="M -200 821.5 C 205 821.5, 590 450, 1200 400"
          fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.11, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.42, 0.42, 0] }}
          transition={{ duration: 12.5, repeat: Infinity, ease: "linear", delay: 3.8 }}
        />
        <motion.path
          d="M -200 822.3 C 208 822.3, 575 475, 1200 425"
          fill="none" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.11, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 4.2 }}
        />

        {/* Filler 4 - Between Mid-Lower Gaps (824.5) */}
        <motion.path
          d="M -200 824.5 C 220 824.5, 600 550, 1200 575"
          fill="none" stroke="#7C2D12" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.43, 0.43, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 4.5 }}
        />
        <motion.path
          d="M -200 825.2 C 225 825.2, 610 575, 1200 600"
          fill="none" stroke="#F4F0EA" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.38, 0.38, 0] }}
          transition={{ duration: 14.5, repeat: Infinity, ease: "linear", delay: 5.2 }}
        />

        {/* Filler 5 - Between Mid-Lower Gap 2 and Lower (827.5) */}
        <motion.path
          d="M -200 827.5 C 240 827.5, 610 675, 1200 725"
          fill="none" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.44, 0.44, 0] }}
          transition={{ duration: 13.8, repeat: Infinity, ease: "linear", delay: 5.5 }}
        />
        <motion.path
          d="M -200 828.8 C 245 828.8, 605 715, 1200 760"
          fill="none" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.11, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.41, 0.41, 0] }}
          transition={{ duration: 14.2, repeat: Infinity, ease: "linear", delay: 6.1 }}
        />
        <motion.path
          d="M -200 829.5 C 248 829.5, 603 730, 1200 780"
          fill="none" stroke="#F8D5C4" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0.11, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 0.39, 0.39, 0] }}
          transition={{ duration: 14.6, repeat: Infinity, ease: "linear", delay: 6.5 }}
        />

        {/* DENSE FILLER TRAILS - 500+ Trails in Orange & Navy Blue */}
        
        {/* Dense trails filling entire vertical space with orange and navy shades only */}
        {[...Array(500)].map((_, i) => {
          const yPos = 810 + (i * 0.04); // Tighter spacing for complete fill
          
          // Orange shades: dark, medium, light
          const orangeShades = ['#9A3412', '#C2410C', '#D97706', '#EA580C', '#F97316', '#F8D5C4'];
          // Navy shades: very dark, dark, medium-dark, medium
          const navyShades = ['#0F172A', '#172554', '#1E3A8A', '#1E40AF', '#2D4A7B'];
          
          // Combine and cycle through both color families
          const allColors = [...orangeShades, ...navyShades];
          const color = allColors[i % allColors.length];
          
          const delay = (i * 0.08) % 6; // Faster delay cycling
          const duration = 6 + (i % 5); // Speedy: 6-10 seconds
          const opacity = 0.12 + ((i % 7) * 0.07);
          
          return (
            <motion.path
              key={`trail-${i}`}
              d={`M -200 ${yPos} C ${200 + (i % 200)} ${yPos}, ${620 + (i % 200)} ${240 + (i % 380)}, 1200 ${330 + (i % 420)}`}
              fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round"
              initial={{ pathLength: 0.08 + ((i % 5) * 0.02), pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: 1, opacity: [0, opacity, opacity, 0] }}
              transition={{ duration, repeat: Infinity, ease: "linear", delay }}
            />
          );
        })}
      </svg>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const line1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const bottomOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bottomY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-between bg-[#0A0A0A] relative overflow-hidden font-sans"
    >
      {/* Background Lighting & Trails */}
      <BackgroundTrails />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 pt-20 relative z-10 -mt-12 lg:-mt-24">
        <div className="w-full max-w-[1600px] mx-auto">
          
          <h1 className="font-normal leading-[0.8] tracking-[-0.04em] uppercase select-none flex flex-col gap-0 text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw]">
            
            {/* LINE 1 */}
            <div className="overflow-hidden py-2 md:py-4 flex flex-wrap items-end gap-x-3 md:gap-x-5">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                style={{ y: line1Y }}
                className="block pb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#F4F0EA] via-[#F4F0EA] to-[#0F172A] will-change-transform origin-bottom-left whitespace-nowrap"
              >
                SAAS &
              </motion.span>
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                style={{ y: line1Y }}
                className="block pb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#F8D5C4] via-[#F8D5C4] to-[#0F172A] will-change-transform origin-bottom-left whitespace-nowrap"
              >
                CUSTOM APPS.
              </motion.span>
            </div>

            {/* LINE 2 */}
            <div className="overflow-hidden py-2 md:py-4">
              <motion.span
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                style={{ y: line2Y }}
                className="block pb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#F4F0EA] via-[#F4F0EA] to-[#0F172A] will-change-transform origin-bottom-left"
              >
                WEB SOLUTIONS.
              </motion.span>
            </div>
            
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        style={{ opacity: bottomOpacity, y: bottomY }}
        className="px-6 lg:px-12 pb-6 lg:pb-10 relative z-10 will-change-transform"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base md:text-lg text-[#F4F0EA]/70 font-light max-w-xl leading-relaxed"
          >
            Engineering bespoke software, dynamic SaaS platforms, and high-performance web applications. We transform complex business workflows into intuitive, scalable digital architectures designed to accelerate your growth.
          </motion.p>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6 md:gap-10 shrink-0"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-[#F8D5C4] text-[#121110] px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#F4F0EA] transition-colors duration-300"
            >
              EXPLORE SERVICES
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#F4F0EA]/80 transition-colors hover:text-[#F8D5C4]"
            >
              <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#F8D5C4] after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
                GET IN TOUCH
              </span>a
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;