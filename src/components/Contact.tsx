import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1];

// Premium animation for the heading
const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.15,
      ease: smoothEase,
    },
  }),
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "bodhi.x@yahoo.com", href: "mailto:bodhi.x@yahoo.com" },
  { icon: Phone, label: "Phone", value: "+91 70690 12440", href: "tel:+917069012440" },
  { icon: MapPin, label: "Location", value: "Gujarat, INDIA", href: null },
  { icon: Clock, label: "Response", value: "Within 24 hours", href: null },
];

const requirementTypes = [
  "API-as-a-Service",
  "Autonomous Decision Engines",
  "Cloud Infrastructure",
  "Custom Software & Dashboards",
  "DApps",
  "Digital Marketing",
  "Intelligent Autonomy (AI Agents)",
  "Security Libraries",
  "Shopify Design & Development",
  "Other"
];

const Contact = () => {
  const { toast } = useToast();
  const [countries, setCountries] = useState([]);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    company: "",
    requirement: "Custom Software & Dashboards", 
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch all countries and dial codes dynamically
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        
        const formattedCountries = data
          .filter(country => country.idd && country.idd.root)
          .map(country => {
            const suffix = country.idd.suffixes?.length === 1 ? country.idd.suffixes[0] : "";
            const dialCode = `${country.idd.root}${suffix}`;
            return {
              name: country.name.common,
              code: dialCode,
              cca2: country.cca2
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name));
          
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([
          { name: "United States", code: "+1", cca2: "US" },
          { name: "United Kingdom", code: "+44", cca2: "GB" },
          { name: "India", code: "+91", cca2: "IN" },
        ]);
      }
    };

    fetchCountries();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim() || !contactForm.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields and agree to the privacy policy.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      if (!SCRIPT_URL || SCRIPT_URL === "undefined") throw new Error("Backend synchronization failure. Check your .env file.");

      // 1. Prepare the exact payload
      const payload = {
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone ? `${contactForm.countryCode} ${contactForm.phone}` : "",
        company: contactForm.company,
        requirement: contactForm.requirement,
        message: contactForm.message,
        consent: contactForm.consent ? "Yes" : "No"
      };

      // 2. Convert it to a URL Encoded string for Google Apps Script compatibility
      const formBody = new URLSearchParams(payload).toString();

      // 3. Send the request with the specific header
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody, 
      });

      toast({ title: "Message Sent", description: "We'll be in touch soon." });
      setContactForm({ name: "", email: "", countryCode: "+1", phone: "", company: "", requirement: "Custom Software & Dashboards", message: "", consent: false });
    } catch (error) {
      toast({ title: "Error", description: error.message || "Failed to send message.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-stone-50 min-h-screen py-20 md:py-24 px-6 md:px-12 text-stone-900 flex justify-center relative overflow-hidden"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      {/* Live Gradient Styles */}
      <style>{`
        @keyframes liquid-gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: -200% 50%; }
        }
        .animate-live-gradient {
          background: linear-gradient(to right, #000000, #1e3a8a, #fb923c, #1e3a8a, #000000);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: liquid-gradient 6s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-5xl flex flex-col gap-10 md:gap-14 z-10">
        
        {/* Premium Animated Header Section */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="font-medium uppercase leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-7xl flex flex-col gap-1 md:gap-2"
          >
            <div className="overflow-hidden py-1">
              <motion.span 
                custom={0} 
                variants={textReveal} 
                className="block will-change-transform text-black"
              >
                LET'S
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span 
                custom={1} 
                variants={textReveal} 
                className="block will-change-transform bg-gradient-to-r from-black via-blue-900 to-orange-400 bg-clip-text text-transparent animate-live-gradient"
              >
                BUILD.
              </motion.span>
            </div>
          </motion.h2>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
            className="text-sm font-normal text-stone-500 max-w-lg leading-relaxed"
          >
            Tell us about your project. We'll review your details and get back to you as soon as possible to discuss how we can help.
          </motion.p>
        </div>

        {/* User's Exact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
          className="w-full"
        >
          <form 
            onSubmit={handleContactSubmit} 
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-stone-200 border border-stone-200 shadow-lg rounded-xl overflow-hidden"
          >
            
            {/* Cell: Name */}
            <div className="flex flex-col bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="bg-stone-100/70 border-b border-stone-100 px-5 md:px-6 py-2.5 flex justify-between items-center transition-colors group-focus-within:bg-stone-100">
                <label className="text-[10px] uppercase tracking-widest text-stone-900 font-medium flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Name
                </label>
                <span className="text-[9px] text-orange-500 uppercase tracking-widest font-medium">*Required</span>
              </div>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full h-full bg-transparent border-0 px-5 md:px-6 py-4 md:py-5 text-stone-900 font-normal text-sm md:text-base focus:ring-0 placeholder:text-stone-300 outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Cell: Email */}
            <div className="flex flex-col bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="bg-stone-100/70 border-b border-stone-100 px-5 md:px-6 py-2.5 flex justify-between items-center transition-colors group-focus-within:bg-stone-100">
                <label className="text-[10px] uppercase tracking-widest text-stone-900 font-medium flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Email
                </label>
                <span className="text-[9px] text-orange-500 uppercase tracking-widest font-medium">*Required</span>
              </div>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full h-full bg-transparent border-0 px-5 md:px-6 py-4 md:py-5 text-stone-900 font-normal text-sm md:text-base focus:ring-0 placeholder:text-stone-300 outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Cell: Phone */}
            <div className="flex flex-col bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="bg-stone-100/70 border-b border-stone-100 px-5 md:px-6 py-2.5 flex justify-between items-center transition-colors group-focus-within:bg-stone-100">
                <label className="text-[10px] uppercase tracking-widest text-stone-900 font-medium flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                  Phone
                </label>
                <span className="text-[9px] text-stone-400 uppercase tracking-widest font-medium">Optional</span>
              </div>
              <div className="flex w-full h-full relative">
                <div className="relative flex items-center border-r border-stone-100">
                  <select
                    value={contactForm.countryCode}
                    onChange={(e) => setContactForm({ ...contactForm, countryCode: e.target.value })}
                    className="h-full w-[110px] md:w-[130px] bg-transparent border-0 pl-5 md:pl-6 pr-6 py-4 md:py-5 text-stone-500 font-normal text-sm md:text-base focus:ring-0 outline-none appearance-none cursor-pointer hover:text-stone-900 transition-colors truncate"
                  >
                    {countries.length === 0 ? (
                      <option value="+1">Loading...</option>
                    ) : (
                      countries.map((country) => (
                        <option key={country.cca2} value={country.code}>
                          {country.name} ({country.code})
                        </option>
                      ))
                    )}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-3 pointer-events-none"/>
                </div>
                <input
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="flex-1 w-full h-full bg-transparent border-0 px-4 md:px-5 py-4 md:py-5 text-stone-900 font-normal text-sm md:text-base focus:ring-0 outline-none"
                  placeholder="" 
                />
              </div>
            </div>

            {/* Cell: Company */}
            <div className="flex flex-col bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="bg-stone-100/70 border-b border-stone-100 px-5 md:px-6 py-2.5 flex justify-between items-center transition-colors group-focus-within:bg-stone-100">
                <label className="text-[10px] uppercase tracking-widest text-stone-900 font-medium flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                  Company
                </label>
                <span className="text-[9px] text-stone-400 uppercase tracking-widest font-medium">Optional</span>
              </div>
              <input
                type="text"
                value={contactForm.company}
                onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                className="w-full h-full bg-transparent border-0 px-5 md:px-6 py-4 md:py-5 text-stone-900 font-normal text-sm md:text-base focus:ring-0 placeholder:text-stone-300 outline-none"
                placeholder="Your company name"
              />
            </div>

            {/* Cell: Requirement & Message */}
            <div className="flex flex-col md:col-span-2 bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="bg-stone-100/70 border-b border-stone-100 px-5 md:px-6 py-2.5 flex justify-between items-center transition-colors group-focus-within:bg-stone-100">
                <label className="text-[10px] uppercase tracking-widest text-stone-900 font-medium flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Requirement & Message
                </label>
                <span className="text-[9px] text-orange-500 uppercase tracking-widest font-medium">*Required</span>
              </div>
              
              {/* Requirement Selection Pills */}
              <div className="px-5 md:px-6 pt-5 pb-2 flex flex-wrap gap-2">
                {requirementTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setContactForm({ ...contactForm, requirement: type })}
                    className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] tracking-wider uppercase font-medium transition-all duration-300 rounded-sm ${
                      contactForm.requirement === type
                        ? "bg-stone-900 text-white border border-stone-900"
                        : "bg-transparent text-stone-500 border border-stone-300 hover:border-stone-500 hover:text-stone-800"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Textarea */}
              <textarea
                rows={3}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-transparent border-0 px-5 md:px-6 py-4 text-stone-900 font-normal text-sm md:text-base focus:ring-0 resize-none placeholder:text-stone-300 outline-none"
                placeholder="How can we help you?"
              />
            </div>

            {/* Cell: Combined Info Block */}
            <div className="bg-stone-100 px-5 md:px-6 py-6 flex flex-col justify-center h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="border-l-2 border-stone-300 pl-3.5 flex flex-col gap-1">
                    <p className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-xs md:text-sm font-normal text-stone-800 hover:text-orange-500 transition-colors truncate">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xs md:text-sm font-normal text-stone-800 truncate">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cell: Action Wrapper (Consent + Button) */}
            <div className="flex flex-col w-full h-full bg-white">
              
              {/* Consent Checkbox */}
              <div className="px-5 md:px-6 py-5 flex items-start gap-3 border-b border-stone-100 flex-grow">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={contactForm.consent}
                    onChange={(e) => setContactForm({ ...contactForm, consent: e.target.checked })}
                    className="w-3.5 h-3.5 appearance-none border border-stone-300 rounded-sm cursor-pointer checked:bg-stone-900 checked:border-stone-900 transition-colors peer"
                  />
                  <svg className="absolute w-2 h-2 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <label htmlFor="consent" className="text-[10px] md:text-[11px] tracking-widest uppercase text-stone-500 font-normal cursor-pointer select-none leading-relaxed">
                  I agree to the{' '}
                  <Link className="text-stone-900 hover:text-orange-500 underline decoration-stone-300 underline-offset-4 transition-colors" to="/privacy-policy">
                    Privacy Policy
                  </Link>{' '}
                  and data processing terms.
                </label>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[60px] md:min-h-[70px] px-5 md:px-6 flex items-center justify-between group bg-stone-900 text-white hover:bg-orange-500 hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <span className="text-[11px] md:text-[12px] uppercase tracking-widest font-medium">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-500 ease-out"/>
              </button>
            </div>

          </form>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;