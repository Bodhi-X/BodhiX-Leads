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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // If on home page and NOT scrolled, use light text for the dark hero background.
  // CRITICAL FIX: If the mobile menu is open, we force it to false so the logo and X button turn black against the white overlay.
  const isDarkHeroContext = isHome && !isScrolled && !isOpen;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isOpen
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-stone-200' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center relative z-50"
            onClick={() => setIsOpen(false)}
          >
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
                {/* Helvetica Plain, No Bold, -45 Tracking */}
                <span 
                  className={`text-[15px] font-normal transition-colors duration-300 ${
                    isDarkHeroContext
                      ? 'text-white/90 group-hover:text-white'
                      : 'text-stone-600 group-hover:text-stone-900'
                  }`}
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    letterSpacing: "-0.045em"
                  }}
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
                isDarkHeroContext ? 'text-white' : 'text-stone-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown - Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-50 z-40 transition-transform duration-700 ease-[0.22,1,0.36,1] md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Right-aligned layout container */}
        <div className="flex flex-col items-end justify-center h-[100dvh] px-8 pb-20 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative overflow-hidden text-right"
              style={{
                transitionDelay: isOpen ? `${i * 50}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              {/* Massive, plain typography for mobile with -45 tracking */}
              <span 
                className="text-5xl sm:text-6xl font-normal text-stone-900 transition-colors duration-300 hover:text-orange-500 block py-1"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  letterSpacing: "-0.045em"
                }}
              >
                {link.name}
              </span>
              
              {/* Mobile Animated Live Underline (Right-to-Left scale) */}
              <span className="absolute right-0 bottom-0 w-full h-[2px] bg-orange-500 transform origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
          
          {/* Optional: Small mobile footer / contact info right-aligned */}
          <div 
            className="mt-12 flex flex-col items-end gap-2 text-right opacity-0 transition-opacity duration-700 delay-500"
            style={{ opacity: isOpen ? 1 : 0 }}
          >
            <span 
              className="text-xs font-normal text-stone-400"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                letterSpacing: "-0.02em"
              }}
            >
              Operational Standard
            </span>
            <a 
              href="mailto:hello@bodhix.com" 
              className="text-sm font-normal text-stone-600 hover:text-orange-500"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                letterSpacing: "-0.045em"
              }}
            >
              hello@bodhix.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;