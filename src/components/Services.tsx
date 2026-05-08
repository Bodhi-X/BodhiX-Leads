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
  BarChart, 
  LineChart, 
  PieChart,
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
  Repeat
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Smoother, premium easing curve
const ease = [0.25, 1, 0.5, 1];

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
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
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.1,
      ease,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const dialogItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Exactly 9 Services sorted alphabetically by title
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
      title: "Autonomous Decision Engines (RL Systems & Optimization)",
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
      icon: LayoutDashboard,
      title: "Custom Dashboards",
      description: "Clear, real-time command centers that gather all your important business numbers into one easy view.",
      features: [
        { icon: BarChart, label: "Track Metrics" },
        { icon: LineChart, label: "Spot Trends" },
        { icon: PieChart, label: "Clear Views" }
      ],
      fullDescription: "We transform scattered, messy data into absolute clarity. We build custom screens that pull from your different tools, giving you an instant, easy-to-read snapshot of how your business is performing today.",
      useCases: "Great for business owners, sales teams, and managers who need to track their daily progress at a quick glance."
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Purpose-built applications tailored exactly to how your team works day-to-day.",
      features: [
        { icon: Terminal, label: "Clean Code" },
        { icon: Cpu, label: "Smooth Usage" },
        { icon: Layers, label: "Grows With You" }
      ],
      fullDescription: "Instead of forcing your team to use clunky, generic tools, we build custom software designed specifically for your unique daily routine. It works exactly the way you want it to.",
      useCases: "Perfect for businesses that are outgrowing their current tools, paying too much in monthly software fees, or wanting to launch their own digital product."
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
      title: "Intelligent Autonomy",
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
    }
  ];

  return (
    <section
      id="services"
      className="bg-white text-zinc-900 relative py-20 lg:py-24 font-sans overflow-hidden"
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
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 lg:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-medium uppercase leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] flex flex-col gap-1 md:gap-2"
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
                className="block will-change-transform bg-gradient-to-r from-black via-blue-900 to-orange-400 bg-clip-text text-transparent"
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
            className="max-w-sm pb-2 md:pb-4"
          >
            <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
              Engineering high-performance digital solutions across nine specialized core disciplines.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="border-t border-zinc-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease }}
              onClick={() => setSelectedService(index)}
              className="group cursor-pointer border-b border-zinc-200 py-6 lg:py-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 hover:bg-zinc-50 transition-all duration-500 relative px-4 -mx-4 rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-6 lg:w-1/4 shrink-0">
                <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-900 transition-colors duration-500 w-6">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-200 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-5 h-5 text-zinc-900" strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex-1 grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-3 transition-colors duration-500 group-hover:text-zinc-600">
                    {service.title}
                  </h3>
                  <p className="text-base text-zinc-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex flex-row md:justify-end items-center gap-3 lg:pr-12">
                  <div className="flex gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="relative group/tooltip flex justify-center">
                        <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 group-hover:border-zinc-300 group-hover:bg-white group-hover:shadow-sm transition-all duration-500 cursor-help">
                          <feature.icon size={16} strokeWidth={1.5} />
                        </div>
                        
                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-900 text-white text-[10px] font-medium tracking-widest uppercase rounded flex items-center justify-center opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-300 whitespace-nowrap z-20 shadow-xl translate-y-1 group-hover/tooltip:translate-y-0">
                          {feature.label}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-zinc-900" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden lg:block">
                <ArrowUpRight size={24} className="text-zinc-900" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto bg-white border-zinc-200 rounded-2xl p-8 lg:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            {selectedService !== null && (
              <motion.div
                key={selectedService}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <DialogHeader className="mb-8">
                  <motion.div variants={dialogItem} className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center shadow-sm">
                      {(() => {
                        const Icon = services[selectedService].icon;
                        return <Icon className="w-6 h-6 text-zinc-900" strokeWidth={1.5} />
                      })()}
                    </div>
                    <DialogTitle className="text-3xl font-medium tracking-tight text-zinc-900">
                      {services[selectedService].title}
                    </DialogTitle>
                  </motion.div>
                  <motion.div variants={dialogItem}>
                    <DialogDescription className="text-base font-light text-zinc-600 leading-relaxed">
                      {services[selectedService].fullDescription}
                    </DialogDescription>
                  </motion.div>
                </DialogHeader>

                <div className="space-y-8">
                  <motion.div variants={dialogItem}>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-3">Who is this for?</h4>
                    <p className="text-sm font-light text-zinc-600 leading-relaxed bg-zinc-50 rounded-lg p-5 border border-zinc-100">
                      {services[selectedService].useCases}
                    </p>
                  </motion.div>

                  <motion.div variants={dialogItem} className="border-t border-zinc-100 pt-8 pb-2">
                    <Link 
                      to="/contact" 
                      onClick={() => setSelectedService(null)}
                      className="inline-flex items-center justify-between w-full sm:w-auto gap-8 bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-zinc-800 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-zinc-900/20 group"
                    >
                      LET'S TALK
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                        <ArrowRight size={14} className="text-white group-hover:text-zinc-900 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;