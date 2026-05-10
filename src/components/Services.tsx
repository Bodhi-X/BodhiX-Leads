import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, 
  LayoutDashboard, 
  Code2, 
  Target, 
  Server,
  ArrowRight, 
  ArrowUpRight, 
  Globe, 
  Zap, 
  Lock, 
  Database, 
  Activity, 
  Shield, 
  Terminal, 
  Cpu, 
  Layers, 
  TrendingUp, 
  MousePointerClick, 
  Megaphone,
  Bot,
  Binary,
  KeyRound,
  Fingerprint,
  Link as LinkIcon,
  Cpu as ChipIcon,
  SearchCode,
  BrainCircuit,
  Orbit,
  Repeat,
  Store,
  X,
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Premium easing curves
const ease = [0.25, 1, 0.5, 1];
const modalEase = [0.22, 1, 0.36, 1];

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.15,
      ease,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.1,
      ease,
    },
  }),
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  // 9 Services sorted alphabetically by title
  const services = [
    {
      icon: Server,
      title: "API-as-a-Service",
      description: "Secure, highly available endpoints that power your digital tools and connect your platforms effortlessly.",
      features: [
        { icon: Globe, label: "Global Connect" },
        { icon: Zap, label: "Fast Speeds" },
        { icon: Lock, label: "Secure Data" }
      ],
      fullDescription: "We build secure, invisible bridges that allow your software tools to talk to each other seamlessly. We make sure your data moves instantly and safely, without interruptions.",
      useCases: "Perfect for businesses that need to share data between different platforms, build mobile apps, or offer data access to partners."
    },
    {
      icon: BrainCircuit,
      title: "Autonomous Decision Engines",
      description: "Advanced machine learning models that learn from trial and error to solve complex optimization problems.",
      features: [
        { icon: Repeat, label: "Self-Learning" },
        { icon: Orbit, label: "Optimization" },
        { icon: Cpu, label: "Neural Compute" }
      ],
      fullDescription: "Our Autonomous Decision Engines leverage Reinforcement Learning (RL) to provide you with agents that learn optimal behaviors through interaction with their environment. We build the training loops and deployment pipelines needed for systems to improve themselves automatically over time.",
      useCases: "Essential for dynamic pricing engines, supply chain logistics, automated trading systems, and personalized recommendation loops that need to adapt to changing human behavior."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable online environments so your website or application stays fast and never goes down.",
      features: [
        { icon: Database, label: "Safe Storage" },
        { icon: Activity, label: "Auto-Scaling" },
        { icon: Shield, label: "DDoS Protection" }
      ],
      fullDescription: "We set up and manage secure cloud servers for your business. Instead of paying for expensive physical hardware, we build environments that automatically adjust to your traffic so you only pay for what you use.",
      useCases: "Ideal for growing businesses that need reliable, fast, and secure online spaces for their websites, apps, or customer portals."
    },
    {
      icon: Code2,
      title: "Custom Software & Dashboards",
      description: "Purpose-built applications and real-time command centers tailored exactly to your operational workflows.",
      features: [
        { icon: Terminal, label: "Clean Code" },
        { icon: LayoutDashboard, label: "Clear Views" },
        { icon: Layers, label: "Scalable" }
      ],
      fullDescription: "Instead of forcing your team to use generic, clunky tools, we build custom software designed specifically for your unique daily routine. We pair this with interactive screens that pull from scattered data sources, transforming mess into absolute clarity so you can track performance at a glance.",
      useCases: "Perfect for businesses outgrowing current tools, paying excessive software fees, or needing a unified, easy-to-read command center for their daily operations."
    },
    {
      icon: Binary,
      title: "DApps",
      description: "Decentralized applications that provide transparency, security, and trustless transactions on the blockchain.",
      features: [
        { icon: LinkIcon, label: "Blockchain" },
        { icon: Lock, label: "Immutable" },
        { icon: Globe, label: "Decentralized" }
      ],
      fullDescription: "We build Decentralized Applications (DApps) that leverage blockchain technology. These apps ensure data integrity, eliminate single points of failure, and allow for peer-to-peer interactions without middlemen.",
      useCases: "Ideal for fintech startups, supply chain transparency, voting systems, or any platform where trust and security are paramount."
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description: "Targeted online ad campaigns focused entirely on getting you real customers and a clear return on investment.",
      features: [
        { icon: TrendingUp, label: "Real Growth" },
        { icon: MousePointerClick, label: "More Clicks" },
        { icon: Megaphone, label: "Get Noticed" }
      ],
      fullDescription: "We run smart, data-driven advertising campaigns on Google and social media. We skip the vanity metrics and focus entirely on getting your phone to ring and bringing in highly qualified leads.",
      useCases: "Designed for businesses ready to grow their revenue, get more foot traffic, or acquire new clients online predictably."
    },
    {
      icon: Bot,
      title: "Intelligent Autonomy (AI Agents)",
      description: "Autonomous digital workers that handle complex tasks, customer support, and logic-based workflows 24/7.",
      features: [
        { icon: ChipIcon, label: "Smart Logic" },
        { icon: Zap, label: "Real-time" },
        { icon: Layers, label: "Scalable" }
      ],
      fullDescription: "We develop sophisticated autonomous systems that don't just follow scripts, but understand context and business logic. These systems manage schedules, automate customer interactions, and perform complex data processing without human intervention.",
      useCases: "Perfect for companies looking to scale operations without increasing headcount, providing 24/7 customer support, or automating repetitive administrative tasks."
    },
    {
      icon: KeyRound,
      title: "Security Libraries",
      description: "FIPS-compliant encryption and authentication modules built for seamless integration into high-security apps.",
      features: [
        { icon: Fingerprint, label: "Biometrics" },
        { icon: Shield, label: "FIPS-Ready" },
        { icon: SearchCode, label: "Audit-Ready" }
      ],
      fullDescription: "We engineer specialized software libraries focused on encryption and authentication. Our code is designed to meet rigorous security standards like FIPS, ensuring your user data and access points remain impenetrable.",
      useCases: "Essential for healthcare apps, banking software, or government contractors who require high-level security compliance and robust authentication logic."
    },
    {
      icon: Store,
      title: "Shopify Design & Development",
      description: "High-converting, visually striking e-commerce experiences engineered to maximize your online retail sales.",
      features: [
        { icon: LayoutDashboard, label: "Custom Themes" },
        { icon: Zap, label: "Fast Checkout" },
        { icon: Target, label: "Conversion" }
      ],
      fullDescription: "We design and develop premium Shopify storefronts that don't just look beautiful, but are strategically engineered to maximize conversions. From bespoke custom theme development to complex backend app integrations, we build highly scalable e-commerce machines.",
      useCases: "Perfect for retail brands, direct-to-consumer (DTC) companies, and creators looking to scale their sales with a robust, custom-tailored online shopping experience."
    }
  ];

  return (
    <section
      id="services"
      className="bg-white text-zinc-900 relative py-16 lg:py-20 font-sans overflow-hidden"
    >
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
        /* Custom scrollbar for modal */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-medium uppercase leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl flex flex-col gap-1 md:gap-2"
          >
            <div className="overflow-hidden py-1">
              <motion.span 
                custom={0} 
                variants={textReveal} 
                className="block will-change-transform text-black"
              >
                OUR CORE
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span 
                custom={1} 
                variants={textReveal} 
                className="block will-change-transform bg-gradient-to-r from-black via-blue-900 to-orange-400 bg-clip-text text-transparent animate-live-gradient"
              >
                SOLUTIONS.
              </motion.span>
            </div>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={2}
            className="max-w-sm pb-1 md:pb-2"
          >
            <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed">
              Engineering high-performance digital solutions across our specialized core disciplines.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="border-t border-zinc-200">
          {services.map((service, index) => {
            const isActive = selectedService === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease }}
                onClick={() => setSelectedService(index)}
                className="group cursor-pointer border-b border-zinc-200 py-6 lg:py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 transition-all duration-500 relative px-4 -mx-4 rounded-xl overflow-hidden hover:bg-zinc-50/50"
              >
                <div className="flex items-center gap-6 lg:w-1/4 shrink-0">
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500 w-6">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center transition-all duration-500 group-hover:bg-zinc-200 group-hover:scale-110">
                    <service.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-1 grid md:grid-cols-2 gap-4 lg:gap-10 items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 mb-2 transition-colors duration-500 group-hover:text-zinc-600">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-row md:justify-end items-center gap-3 lg:pr-12">
                    <div className="flex gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="relative group/tooltip flex justify-center">
                          <div className="w-8 h-8 rounded-full border border-zinc-100 text-zinc-400 flex items-center justify-center transition-all duration-500 cursor-help group-hover:text-zinc-900 group-hover:border-zinc-300 group-hover:bg-white group-hover:shadow-sm">
                            <feature.icon size={14} strokeWidth={1.5} />
                          </div>
                          
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-[9px] font-medium tracking-widest uppercase rounded flex items-center justify-center opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-300 whitespace-nowrap z-20 shadow-xl translate-y-1 group-hover/tooltip:translate-y-0">
                            {feature.label}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-zinc-900" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 transition-all duration-500 hidden lg:block group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="text-zinc-900" size={20} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Sharp & Compact Popup Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: modalEase }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm"
            />
            
            {/* Modal Container - Downsized to max-w-lg and ZERO border radius */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.4, ease: modalEase }}
              className="w-full max-w-lg bg-white rounded-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative z-10 overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Close Button - Sharp edges */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-5 md:right-5 z-20 w-8 h-8 rounded-none bg-zinc-50 hover:bg-zinc-200 border border-zinc-200/50 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-all duration-300"
              >
                <X size={16} strokeWidth={2} />
              </button>

              {/* Scrollable Modal Content - Reduced padding */}
              <div className="overflow-y-auto hide-scrollbar p-6 md:p-8">
                
                {/* Compact Sharp Header Icon */}
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-orange-200 blur-lg opacity-60"></div>
                  <div className="relative w-12 h-12 rounded-none bg-white border border-zinc-100 shadow-sm flex items-center justify-center z-10">
                    {(() => {
                      const Icon = services[selectedService].icon;
                      return <Icon size={20} className="text-zinc-800" strokeWidth={1.5} />
                    })()}
                  </div>
                </div>
                
                {/* Titles & Desc - Smaller text sizes */}
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 mb-3 leading-tight">
                  {services[selectedService].title}
                </h3>
                
                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed mb-5">
                  {services[selectedService].fullDescription}
                </p>

                {/* Feature Badges - Sharp edges, smaller text */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {services[selectedService].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-zinc-50 border border-zinc-100">
                      <feature.icon size={12} className="text-zinc-400" strokeWidth={2} />
                      <span className="text-[11px] uppercase tracking-wide font-medium text-zinc-600">{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Who is this for Section - Sharp edges, scaled down */}
                <div className="mt-2 bg-zinc-50/80 border border-zinc-100 rounded-none p-4 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-900 to-orange-400 opacity-80" />
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
                    <UserCheck size={12} /> Ideal Profile
                  </h4>
                  <p className="text-xs md:text-sm font-medium text-zinc-700 leading-relaxed">
                    {services[selectedService].useCases}
                  </p>
                </div>

                {/* Downsized CTA Button - Sharp edges */}
                <div className="mt-8 flex items-center">
                  <Link 
                    to="/contact" 
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-black text-white rounded-none transition-all duration-300 group shadow-sm shadow-zinc-900/10 hover:shadow-md hover:shadow-zinc-900/20"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-widest">
                      Discuss Project
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;