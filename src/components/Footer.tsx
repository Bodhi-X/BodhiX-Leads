import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Smooth parallax effect adjusted for the shorter footer height
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer 
      ref={footerRef} 
      // Removed the fixed height so it snaps tightly to the content
      className="relative w-full overflow-hidden text-white flex flex-col justify-between"
      style={{
        background: "linear-gradient(110deg, #000000 0%, #0000a0 25%, #3d0066 50%, #ff8000 80%, #e6e6e6 100%)"
      }}
    >
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-16 pt-12 pb-6 flex flex-col">
        
        {/* Top Minimal Navigation */}
        {/* Changed mb-32/flex-1 spacing to mb-8 for that "one enter key" look */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <nav className="flex flex-wrap gap-x-12 gap-y-4 font-mono text-[10px] tracking-[0.2em] uppercase">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href} 
                className="hover:text-orange-400 transition-colors flex items-center group"
              >
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">→</span> 
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="font-mono text-[10px] tracking-widest opacity-60 uppercase">
            © 2026 BODHIX TECHNOLOGIES / ALL RIGHTS RESERVED
          </div>
        </div>

        {/* The Hero Wordmark - Left Aligned */}
        <div className="flex justify-start items-center">
          <motion.div style={{ y, scale }}>
            <h1 className="text-[16vw] lg:text-[18vw] font-black tracking-tighter leading-none uppercase select-none 
                           text-transparent bg-clip-text bg-white opacity-95
                           drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                           ml-[-1vw]">
              BODHIX
            </h1>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;