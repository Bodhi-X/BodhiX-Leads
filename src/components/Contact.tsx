import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1];

const contactInfo = [
  { icon: Mail, label: "Email", value: "bodhi.x@yahoo.com", href: "mailto:bodhi.x@yahoo.com" },
  { icon: Phone, label: "Phone", value: "+91 70690 12440", href: "tel:+917069012440" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
  { icon: Clock, label: "Response", value: "Within 24 hours", href: null },
];

const requirementTypes = [
  "New Project",
  "System Architecture",
  "Platform Integration",
  "Other"
];

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    requirement: "New Project",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      if (!SCRIPT_URL || SCRIPT_URL === "undefined") throw new Error("Backend synchronization failure.");

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      toast({ title: "Message Sent", description: "We'll be in touch soon." });
      setContactForm({ name: "", email: "", company: "", requirement: "New Project", message: "", consent: false });
    } catch (error) {
      toast({ title: "Error", description: error.message || "Failed to send message.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-stone-50 min-h-screen py-24 md:py-32 px-6 font-sans text-stone-900">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase mb-6 md:mb-8 text-stone-900">
            Let's build <br />
          </h2>
          <p className="text-sm md:text-base text-stone-500 max-w-xl leading-relaxed">
            Tell us about your project. We'll review your details and get back to you as soon as possible to discuss how we can help.
          </p>
        </motion.div>

        {/* Form Section - Light Theme with 1px border grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: smoothEase }}
          className="w-full"
        >
          <form 
            onSubmit={handleContactSubmit} 
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-stone-200 border border-stone-200 shadow-lg"
          >
            
            {/* Cell: Name */}
            <div className="flex flex-col bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="border-b border-stone-100 px-6 md:px-8 py-4 flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Name</label>
                <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">*Required</span>
              </div>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full h-full bg-transparent border-0 px-6 md:px-8 py-6 md:py-8 text-stone-900 font-medium text-base md:text-lg focus:ring-0 placeholder:text-stone-300 outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Cell: Email */}
            <div className="flex flex-col bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="border-b border-stone-100 px-6 md:px-8 py-4 flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Email</label>
                <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">*Required</span>
              </div>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full h-full bg-transparent border-0 px-6 md:px-8 py-6 md:py-8 text-stone-900 font-medium text-base md:text-lg focus:ring-0 placeholder:text-stone-300 outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Cell: Company */}
            <div className="flex flex-col bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="border-b border-stone-100 px-6 md:px-8 py-4 flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Company</label>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Optional</span>
              </div>
              <input
                type="text"
                value={contactForm.company}
                onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                className="w-full h-full bg-transparent border-0 px-6 md:px-8 py-6 md:py-8 text-stone-900 font-medium text-base md:text-lg focus:ring-0 placeholder:text-stone-300 outline-none"
                placeholder="Your company name"
              />
            </div>

            {/* Cell: Info Block 1 */}
            <div className="bg-stone-100 px-6 md:px-8 py-8 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {contactInfo.slice(0, 2).map((info, idx) => (
                  <div key={idx} className="border-l-2 border-stone-300 pl-4 flex flex-col gap-1.5">
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-stone-800 hover:text-orange-500 transition-colors truncate">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-stone-800 truncate">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cell: Message & Requirement Bifurcation */}
            <div className="flex flex-col md:col-span-2 bg-white focus-within:bg-stone-50 transition-colors duration-500 group">
              <div className="border-b border-stone-100 px-6 md:px-8 py-4 flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Requirement & Message</label>
                <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">*Required</span>
              </div>
              
              {/* Requirement Selection Pills */}
              <div className="px-6 md:px-8 pt-6 pb-2 flex flex-wrap gap-2 md:gap-3">
                {requirementTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setContactForm({ ...contactForm, requirement: type })}
                    className={`px-4 py-2 md:px-5 md:py-2.5 text-[11px] tracking-wider uppercase font-bold transition-all duration-300 ${
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
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-transparent border-0 px-6 md:px-8 py-6 text-stone-900 font-medium text-base md:text-lg focus:ring-0 resize-none placeholder:text-stone-300 outline-none"
                placeholder="How can we help you?"
              />
            </div>

            {/* Cell: Info Block 2 */}
            <div className="bg-stone-100 px-6 md:px-8 py-8 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {contactInfo.slice(2).map((info, idx) => (
                  <div key={idx} className="border-l-2 border-stone-300 pl-4 flex flex-col gap-1.5">
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">{info.label}</p>
                    <p className="text-sm font-medium text-stone-800">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cell: Action Wrapper (Consent + Button) */}
            <div className="flex flex-col w-full h-full bg-white">
              
              {/* Consent Checkbox */}
              <div className="px-6 md:px-8 py-6 md:py-8 flex items-start gap-4 border-b border-stone-100">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={contactForm.consent}
                    onChange={(e) => setContactForm({ ...contactForm, consent: e.target.checked })}
                    className="w-4 h-4 appearance-none border border-stone-300 cursor-pointer checked:bg-stone-900 checked:border-stone-900 transition-colors peer"
                  />
                  <svg className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <label htmlFor="consent" className="text-[11px] tracking-widest uppercase text-stone-500 font-bold cursor-pointer select-none leading-relaxed">
                  I agree to the{' '}
                  <Link to="/privacy-policy" className="text-stone-900 hover:text-orange-500 underline decoration-stone-300 underline-offset-4 transition-colors">
                    Privacy Policy
                  </Link>{' '}
                  and data processing terms.
                </label>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 w-full min-h-[80px] md:min-h-[90px] px-6 md:px-8 flex items-center justify-between group bg-stone-900 text-white hover:bg-orange-500 hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-[12px] uppercase tracking-widest font-bold">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-3 transition-transform duration-500 ease-out" />
              </button>
            </div>

          </form>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;