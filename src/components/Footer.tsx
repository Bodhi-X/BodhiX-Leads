import { Link } from "react-router-dom";
import bannerBg from "../assets/banner.jpg";

const Footer = () => {
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer 
      // Added min-h-[400px] lg:min-h-[500px] to restore the old height 
      // so the background image has plenty of space to be visible
      className="relative w-full min-h-[400px] lg:min-h-[500px] overflow-hidden text-white flex flex-col justify-between"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 w-full h-full flex-1 max-w-[1800px] mx-auto px-8 lg:px-16 pt-12 pb-6 flex flex-col">
        
        {/* Top Minimal Navigation */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
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

        {/* Empty space that pushes the height to ensure the background image shows properly */}
        <div className="flex-1"></div>
        
      </div>
    </footer>
  );
};

export default Footer;
