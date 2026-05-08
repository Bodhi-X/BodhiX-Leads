import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import bxLogo from "@/assets/bx-logo-new.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Handle scroll detection for background and color changes
  useEffect(() => {
    const handleScroll = () => {
      // Trigger the scrolled state after 50px of scrolling
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize state on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // If on home page and NOT scrolled, use light text for the dark hero background.
  // Otherwise, use the standard dark text for the light theme.
  const isDarkHeroContext = isHome && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-stone-200' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50">
            <img 
              src={bxLogo} 
              alt="BodhiX" 
              className={`h-8 md:h-10 w-auto transition-all duration-500 ${
                isDarkHeroContext ? 'brightness-0 invert' : ''
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group relative py-2 flex items-center"
              >
                <span 
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
                    isDarkHeroContext
                      ? 'text-white/80 group-hover:text-white'
                      : 'text-stone-500 group-hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </span>
                
                {/* Animated Live Underline */}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[1.5px] transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    isDarkHeroContext ? 'bg-white' : 'bg-orange-500'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                isDarkHeroContext && !isOpen ? 'text-white' : 'text-stone-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {/* Kept out of the normal document flow so it slides down gracefully */}
      <div 
        className={`absolute top-0 left-0 w-full bg-white border-b border-stone-200 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100 py-20' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative overflow-hidden"
            >
              <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-stone-600 transition-colors duration-300 group-hover:text-stone-900 block py-1">
                {link.name}
              </span>
              {/* Mobile Animated Live Underline */}
              <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-orange-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;