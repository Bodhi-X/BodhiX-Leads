import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

const textReveal = {
  hidden: { y: "120%", opacity: 0, rotate: 1 },
  visible: (i) => ({
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
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.6 + i * 0.12,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  }),
};

// --- ULTRA-PREMIUM: Fast, Dark Orange & Navy Aurora ---
const BackgroundAurora = () => {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      normX.set((e.clientX / window.innerWidth) * 2 - 1);
      normY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, normX, normY]);

  // Smoother springs
  const heavySpring = { damping: 30, stiffness: 60, mass: 1 };
  const smoothNormX = useSpring(normX, heavySpring);
  const smoothNormY = useSpring(normY, heavySpring);

  const lightSpring = { damping: 25, stiffness: 120, mass: 0.1 };
  const smoothMouseX = useSpring(mouseX, lightSpring);
  const smoothMouseY = useSpring(mouseY, lightSpring);

  // Depth multipliers for natural 3D feeling
  const layer1X = useTransform(smoothNormX, [-1, 1], [-40, 40]);
  const layer1Y = useTransform(smoothNormY, [-1, 1], [-20, 20]);

  const layer2X = useTransform(smoothNormX, [-1, 1], [60, -60]);
  const layer2Y = useTransform(smoothNormY, [-1, 1], [30, -30]);

  const layer3X = useTransform(smoothNormX, [-1, 1], [-80, 80]);
  const layer3Y = useTransform(smoothNormY, [-1, 1], [-40, 40]);

  const layer4X = useTransform(smoothNormX, [-1, 1], [30, -30]);
  const layer4Y = useTransform(smoothNormY, [-1, 1], [15, -15]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
      
      {/* 1. Base Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#020617]/60 via-[#050505] to-[#050505]" />

      {/* 2. The Aurora Ribbons - High Speed Oscillation */}
      <div className="absolute inset-0 mix-blend-screen opacity-[0.9]">
        
        {/* Ribbon 1: Deep Dark Navy (Base Anchor) */}
        <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute top-[10%] left-[-20%] w-[140vw] h-[50vh] origin-center will-change-transform">
          <motion.div
            animate={{
              scaleY: [0.8, 1.3, 0.8],
              rotate: [-10, -5, -10],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full will-change-transform"
            style={{ background: 'radial-gradient(ellipse at center, rgba(15,23,42,0.85) 0%, rgba(30,58,138,0.3) 40%, rgba(0,0,0,0) 70%)' }}
          />
        </motion.div>

        {/* Ribbon 2: Dark Burnt Orange (Main Wave) */}
        <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute top-[30%] left-[-15%] w-[130vw] h-[40vh] origin-center will-change-transform">
          <motion.div
            animate={{
              scaleY: [1.1, 0.7, 1.1],
              rotate: [-5, -12, -5],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full will-change-transform"
            style={{ background: 'radial-gradient(ellipse at center, rgba(154,52,18,0.8) 0%, rgba(124,45,18,0.4) 40%, rgba(0,0,0,0) 70%)' }}
          />
        </motion.div>

        {/* Ribbon 3: Intense Midnight Core (Center Swirl) */}
        <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute top-[45%] left-[0%] w-[100vw] h-[35vh] origin-center will-change-transform">
          <motion.div
            animate={{
              scaleY: [0.9, 1.4, 0.9],
              rotate: [-15, -5, -15],
              opacity: [0.4, 0.7, 0.4],
              x: ["-5%", "5%", "-5%"]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full will-change-transform"
            style={{ background: 'radial-gradient(ellipse at center, rgba(2,6,23,0.95) 0%, rgba(15,23,42,0.6) 40%, rgba(0,0,0,0) 70%)' }}
          />
        </motion.div>

        {/* Ribbon 4: Accent Deep Rust Swoosh (Top edge wave) */}
        <motion.div style={{ x: layer4X, y: layer4Y }} className="absolute top-[-10%] right-[-10%] w-[100vw] h-[30vh] origin-center will-change-transform">
          <motion.div
            animate={{
              scaleY: [1, 1.6, 1],
              rotate: [5, -5, 5],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full will-change-transform"
            style={{ background: 'radial-gradient(ellipse at center, rgba(124,45,18,0.7) 0%, rgba(67,20,7,0.3) 40%, rgba(0,0,0,0) 70%)' }}
          />
        </motion.div>

      </div>

      {/* 3. Interactive Silver Cursor Spotlight (Significantly Reduced Radius) */}
      <motion.div
        style={{ x: smoothMouseX, y: smoothMouseY }}
        // Shrunk from 400px to 150px and adjusted margins to keep it perfectly centered on the cursor
        className="fixed top-0 left-0 w-[150px] h-[150px] -ml-[75px] -mt-[75px] rounded-full mix-blend-screen z-10 hidden md:block pointer-events-none will-change-transform"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E2E8F0]/10 via-[#94A3B8]/5 to-transparent rounded-full" />
      </motion.div>

    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);

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
      /* CHANGED: min-h-screen to min-h-[100dvh] to fix mobile browser UI cutoffs */
      className="min-h-[100dvh] flex flex-col justify-between bg-[#050505] relative overflow-hidden font-sans"
    >
      {/* Background Aurora */}
      <BackgroundAurora />
      
      {/* Top/Bottom gradient to ensure nav & bottom text readability */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#050505]/90 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#050505]/90 to-transparent" />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 pt-20 relative z-20 -mt-12 lg:-mt-24">
        <div className="w-full max-w-[1600px] mx-auto">
          
          <h1 className="font-normal leading-[0.85] tracking-[-0.04em] uppercase select-none flex flex-col gap-0 text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] xl:text-[8vw] break-words pointer-events-none">
            
            {/* LINE 1 - Wrapped in a parent motion.div for scroll parallax to unblock the text reveal */}
            <motion.div style={{ y: line1Y }} className="will-change-transform">
              <div className="overflow-hidden py-1 md:py-2 flex flex-wrap items-end gap-x-3 md:gap-x-5">
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="block pb-1 text-transparent bg-clip-text bg-gradient-to-br from-[#F4F0EA] via-[#F4F0EA] to-[#0F172A] will-change-transform origin-bottom-left drop-shadow-sm"
                >
                  SAAS &
                </motion.span>
                <motion.span
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="block pb-1 text-transparent bg-clip-text bg-gradient-to-br from-[#F8D5C4] via-[#F8D5C4] to-[#0F172A] will-change-transform origin-bottom-left drop-shadow-sm"
                >
                  CUSTOM APPS.
                </motion.span>
              </div>
            </motion.div>

            {/* LINE 2 - Wrapped in a parent motion.div for scroll parallax */}
            <motion.div style={{ y: line2Y }} className="will-change-transform">
              <div className="overflow-hidden py-1 md:py-2">
                <motion.span
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="block pb-1 text-transparent bg-clip-text bg-gradient-to-br from-[#F4F0EA] via-[#F4F0EA] to-[#0F172A] will-change-transform origin-bottom-left drop-shadow-sm"
                >
                  WEB SOLUTIONS.
                </motion.span>
              </div>
            </motion.div>
            
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        style={{ opacity: bottomOpacity, y: bottomY }}
        /* CHANGED: Increased bottom padding from pb-6 to pb-8 to give safe area spacing */
        className="px-6 lg:px-12 pb-24 lg:pb-12 relative z-20 will-change-transform"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base md:text-lg text-[#F4F0EA]/80 font-light max-w-xl leading-relaxed pointer-events-none drop-shadow-sm"
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
              className="group inline-flex items-center gap-3 bg-[#F8D5C4] text-[#121110] px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#F4F0EA] transition-colors duration-300 shadow-[0_0_40px_rgba(248,213,196,0.15)]"
            >
              EXPLORE SERVICES
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#F4F0EA]/90 transition-colors hover:text-[#F8D5C4]"
            >
              <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#F8D5C4] after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 drop-shadow-sm">
                GET IN TOUCH
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
