import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bannerBg from "../assets/banner.jpg";

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
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-16 pt-12 pb-6 flex flex-col">
        
        {/* Top Minimal Navigation */}
        {/* FIX 1: Added `relative z-20` to force links above the giant text box */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
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
      </div>
    </footer>
  );
};

export default Footer;
