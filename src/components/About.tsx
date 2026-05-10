import { motion } from "framer-motion";
import { 
  Compass, 
  Network, 
  Zap, 
  Eye, 
  ShieldCheck, 
  Cloud, 
  Lock, 
  Globe,
  Infinity
} from "lucide-react";

// Smoother, premium easing curve
const ease = [0.25, 1, 0.5, 1];

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

const About = () => {
  // Animation variants for staggered grid loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section id="about" className="bg-white text-zinc-900 min-h-screen py-16 md:py-20 px-6 font-sans overflow-hidden flex justify-center">
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

      <div className="w-full max-w-5xl flex flex-col gap-10 md:gap-14">
        
        {/* Adjusted Hero Section with reduced title size */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // Reduced size: from 5xl/6xl/5rem down to 4xl/5xl/4rem
            className="font-medium uppercase leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-[4rem] flex flex-col gap-0.5"
          >
            <div className="overflow-hidden py-1">
              <motion.span 
                custom={0} 
                variants={textReveal} 
                className="block will-change-transform text-black"
              >
                ABOUT
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span 
                custom={1} 
                variants={textReveal} 
                className="block will-change-transform bg-gradient-to-r from-black via-blue-900 to-orange-400 bg-clip-text text-transparent animate-live-gradient tracking-[-2px] md:tracking-[-3px]"
              >
                BODHIX.
              </motion.span>
            </div>
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={2}
            className="max-w-sm pb-1 md:pb-2"
          >
            <p className="text-sm md:text-[15px] text-zinc-500 font-light leading-relaxed">
              Engineering robust solutions for complex environments. We represent the intersection of technical precision and strategic thinking.
            </p>
          </motion.div>
        </div>

        {/* CSS Grid Layout - Compact & User Friendly */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-zinc-200 rounded-2xl overflow-hidden ring-1 ring-zinc-200 shadow-lg">
            
            {/* Cell 1: Philosophy */}
            <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 transition-colors hover:bg-zinc-50 flex flex-col h-full group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2.5 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  <Compass size={18} strokeWidth={1.5} />
                  <p className="text-[11px] md:text-xs uppercase tracking-widest font-medium">Philosophy</p>
                </div>
                <span className="text-2xl md:text-3xl font-light text-zinc-200 group-hover:text-zinc-300 transition-colors">01</span>
              </div>
              <div className="mt-auto">
                <p className="text-xl md:text-2xl text-zinc-900 font-medium tracking-tight leading-relaxed mb-2.5">
                  Purpose-driven engineering.
                </p>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  We focus on writing efficient, maintainable code. Our approach prioritizes architectural integrity and direct alignment with your core business requirements over superficial features.
                </p>
              </div>
            </motion.div>
            
            {/* Cell 2: Methodology */}
            <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 transition-colors hover:bg-zinc-50 flex flex-col h-full group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2.5 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  <Network size={18} strokeWidth={1.5} />
                  <p className="text-[11px] md:text-xs uppercase tracking-widest font-medium">Methodology</p>
                </div>
                <span className="text-2xl md:text-3xl font-light text-zinc-200 group-hover:text-zinc-300 transition-colors">02</span>
              </div>
              <div className="mt-auto">
                <p className="text-xl md:text-2xl text-zinc-900 font-medium tracking-tight leading-relaxed mb-2.5">
                  Strategic implementation.
                </p>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Our process begins with a comprehensive analysis of your operational workflows, ensuring the systems we deploy are uniquely tailored to resolve your specific organizational challenges.
                </p>
              </div>
            </motion.div>

            {/* Cell 3: Pillars */}
            <motion.div variants={itemVariants} className="bg-white flex flex-col">
              <div className="grid grid-cols-1 divide-y divide-zinc-100 h-full">
                {[
                  { icon: Zap, title: "Efficiency", desc: "Focusing on core functionality and optimal resource allocation." },
                  { icon: Eye, title: "Transparency", desc: "Maintaining clear, objective communication throughout the project lifecycle." },
                  { icon: ShieldCheck, title: "Reliability", desc: "Delivering stable systems engineered for high-availability environments." },
                ].map((value, idx) => (
                  <div key={idx} className="p-5 md:p-6 transition-colors hover:bg-zinc-50 flex flex-col justify-center flex-1 group">
                    <div className="flex items-center gap-2.5 mb-1.5 text-zinc-900">
                      <value.icon size={16} strokeWidth={1.5} className="text-zinc-400 group-hover:text-orange-400 transition-colors" />
                      <h3 className="font-medium text-base tracking-tight">{value.title}</h3>
                    </div>
                    <p className="text-zinc-500 text-[13px] font-light leading-relaxed pl-6">{value.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cell 4: Framed Image */}
            <motion.div variants={itemVariants} className="bg-zinc-50 p-6 md:p-8 flex flex-col items-center justify-center min-h-[250px] md:min-h-[300px] overflow-hidden group">
              <img 
                src="/src/assets/XP.jpeg" 
                alt="BodhiX Environment"
                className="max-w-[200px] md:max-w-[240px] w-full h-auto object-cover rounded-xl ring-1 ring-zinc-200 shadow-xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl"
              />
            </motion.div>

            {/* Cell 5: Ecosystem */}
            <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 transition-colors hover:bg-zinc-50 flex flex-col h-full group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2.5 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  <Cloud size={18} strokeWidth={1.5} />
                  <p className="text-[11px] md:text-xs uppercase tracking-widest font-medium">Ecosystem</p>
                </div>
                <span className="text-2xl md:text-3xl font-light text-zinc-200 group-hover:text-zinc-300 transition-colors">03</span>
              </div>
              
              <div className="space-y-5 mt-auto">
                <div className="flex flex-col gap-1.5 border-l-[1.5px] border-zinc-200 pl-4 group-hover:border-zinc-900 transition-colors">
                  <div className="flex items-center gap-2">
                    <Cloud size={14} className="text-zinc-400" />
                    <h4 className="text-zinc-900 text-sm font-medium tracking-tight">Cloud-Native Infrastructure</h4>
                  </div>
                  <p className="text-[13px] text-zinc-500 font-light leading-relaxed">
                    Deploying containerized, resilient microservices across distributed environments to guarantee maximum uptime.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 border-l-[1.5px] border-zinc-200 pl-4 group-hover:border-zinc-900 transition-colors">
                  <div className="flex items-center gap-2">
                    <Lock size={14} className="text-zinc-400" />
                    <h4 className="text-zinc-900 text-sm font-medium tracking-tight">Zero-Trust Architecture</h4>
                  </div>
                  <p className="text-[13px] text-zinc-500 font-light leading-relaxed">
                    Implementing rigorous identity verification and end-to-end encrypted data pipelines at every critical node.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 border-l-[1.5px] border-zinc-200 pl-4 group-hover:border-zinc-900 transition-colors">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-zinc-400" />
                    <h4 className="text-zinc-900 text-sm font-medium tracking-tight">API-First Interoperability</h4>
                  </div>
                  <p className="text-[13px] text-zinc-500 font-light leading-relaxed">
                    Designing standardized, well-documented interfaces that ensure seamless communication across your entire software stack.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cell 6: Commitment */}
            <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 transition-colors hover:bg-zinc-50 flex flex-col h-full justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2.5 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    <Infinity size={18} strokeWidth={1.5} />
                    <p className="text-[11px] md:text-xs uppercase tracking-widest font-medium">Commitment</p>
                  </div>
                  <span className="text-2xl md:text-3xl font-light text-zinc-200 group-hover:text-zinc-300 transition-colors">04</span>
                </div>
                <h3 className="text-2xl md:text-3xl text-zinc-900 font-medium tracking-tight leading-tight mb-3">
                  Built to last.<br />Engineered to scale.
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                  We do not chase temporary technical trends. Our focus is strictly on building sustainable software systems that minimize technical debt and adapt to your evolving enterprise demands over decades.
                </p>
              </div>
              
              <div className="flex items-center gap-3 mt-6">
                 <div className="h-[1px] flex-1 bg-zinc-200 group-hover:bg-zinc-300 transition-colors"></div>
                 <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Future-Proof</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Technical Metrics / Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 pt-6 border-t border-zinc-200"
        >
          {[
            { metric: "99.99%", label: "System Uptime Architecture" },
            { metric: "< 50ms", label: "Target Latency Optimization" },
            { metric: "Zero", label: "Trust Security Model" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-zinc-900">{item.metric}</span>
              <span className="text-[10px] md:text-xs text-zinc-400 font-semibold uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;