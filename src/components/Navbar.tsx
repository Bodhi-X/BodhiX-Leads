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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // If on home page and NOT scrolled, use light text for the dark hero background.
  // When mobile menu is open, force this to false so the logo and X turn dark against the white top bar.
  const isDarkHeroContext = isHome && !isScrolled && !isOpen;

  return (
    <>
      {/* --- 1. TOP NAVBAR (Tighter padding) --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isOpen
            ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-stone-200' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
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
                className={`h-7 md:h-9 w-auto transition-all duration-500 ${
                  isDarkHeroContext ? 'brightness-0 invert' : ''
                }`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group relative py-1.5 flex items-center"
                >
                  <span 
                    className={`text-[14px] font-normal transition-colors duration-300 ${
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
                className={`p-1.5 transition-colors duration-300 ${
                  isDarkHeroContext ? 'text-white' : 'text-stone-900'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- 2. MOBILE MENU DRAWER (Reduced heights and gaps) --- */}
      <div 
        className={`fixed top-0 left-0 right-0 z-40 bg-stone-50 border-b border-stone-200 transition-all duration-700 ease-[0.22,1,0.36,1] md:hidden flex flex-col pt-[72px] pb-5 px-5 ${
          isOpen 
            ? 'translate-y-0 opacity-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] pointer-events-auto' 
            : '-translate-y-full opacity-0 shadow-none pointer-events-none'
        }`}
      >
        {/* Tighter gap-2 between rows */}
        <div className="w-full max-w-sm mx-auto flex flex-col gap-2">
          
          {/* ROW 1: First 3 Links (Home, Services, About) */}
          <div 
            className="grid grid-cols-3 gap-2 w-full"
            style={{
              transitionDelay: isOpen ? '100ms' : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                // Tighter inner padding (py-2.5)
                className="px-2 py-2.5 bg-white border border-stone-200 rounded-none shadow-sm text-stone-800 font-medium text-[12px] sm:text-[13px] flex items-center justify-start hover:border-orange-500 hover:text-orange-500 transition-colors"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ROW 2: Next 2 Links (FAQ, Contact) */}
          <div 
            className="grid grid-cols-2 gap-2 w-full"
            style={{
              transitionDelay: isOpen ? '150ms' : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {navLinks.slice(3, 5).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                // Tighter inner padding (py-2.5)
                className="px-3 py-2.5 bg-white border border-stone-200 rounded-none shadow-sm text-stone-800 font-medium text-[13px] flex items-center justify-start hover:border-orange-500 hover:text-orange-500 transition-colors"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* ROW 3: Footer / Mail Button */}
          <div 
            className="flex flex-col items-start gap-1 pt-3 mt-1 border-t border-stone-200/60 w-full"
            style={{
              transitionDelay: isOpen ? '200ms' : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <span 
              className="text-[10px] font-medium text-stone-400 uppercase tracking-widest px-1"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Mail us at
            </span>
            <a 
              href="mailto:bodhi.x@yahoo.com" 
              // Tighter inner padding (py-2.5)
              className="mt-0.5 px-3 py-2.5 bg-stone-900 text-white rounded-none shadow-md font-medium text-[13px] w-full flex items-center justify-start hover:bg-orange-500 transition-colors"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              bodhi.x@yahoo.com
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
