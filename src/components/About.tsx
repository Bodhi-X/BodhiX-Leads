import { motion } from "framer-motion";

const About = () => {
  // Animation variants for staggered grid loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="bg-background min-h-screen py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Sober Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-16 bg-foreground/20"></div>
            <h1 className="text-sm uppercase tracking-widest text-foreground/60 font-medium">
              About BodhiX
            </h1>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-foreground leading-[1.2] mb-8">
            Engineering robust solutions for complex environments.
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            BodhiX represents the intersection of technical precision and strategic thinking. We build reliable digital infrastructure designed to scale seamlessly alongside your operations.
          </p>
        </motion.div>

        {/* CSS Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border/50 rounded-3xl overflow-hidden ring-1 ring-border/50 shadow-sm">
            
            {/* Cell 1: Philosophy */}
            <motion.div variants={itemVariants} className="bg-background p-10 md:p-14 transition-colors hover:bg-foreground/[0.01] flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Philosophy</p>
                <span className="text-3xl font-light text-primary/40">01</span>
              </div>
              <div className="mt-auto">
                <p className="text-2xl text-foreground font-light leading-relaxed mb-6">
                  Purpose-driven engineering.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We focus on writing efficient, maintainable code. Our approach prioritizes architectural integrity and direct alignment with your core business requirements over superficial features.
                </p>
              </div>
            </motion.div>
            
            {/* Cell 2: Methodology */}
            <motion.div variants={itemVariants} className="bg-background p-10 md:p-14 transition-colors hover:bg-foreground/[0.01] flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Methodology</p>
                <span className="text-3xl font-light text-primary/40">02</span>
              </div>
              <div className="mt-auto">
                <p className="text-2xl text-foreground font-light leading-relaxed mb-6">
                  Strategic implementation.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our process begins with a comprehensive analysis of your operational workflows, ensuring the systems we deploy are uniquely tailored to resolve your specific organizational challenges.
                </p>
              </div>
            </motion.div>

            {/* Cell 3: Pillars */}
            <motion.div variants={itemVariants} className="bg-background flex flex-col">
              <div className="grid grid-cols-1 divide-y divide-border/50 h-full">
                {[
                  { title: "Efficiency", desc: "Focusing on core functionality and optimal resource allocation." },
                  { title: "Transparency", desc: "Maintaining clear, objective communication throughout the project lifecycle." },
                  { title: "Reliability", desc: "Delivering stable systems engineered for high-availability environments." },
                ].map((value, idx) => (
                  <div key={idx} className="p-10 md:p-12 transition-colors hover:bg-foreground/[0.01] flex flex-col justify-center flex-1">
                    <h3 className="text-foreground font-medium text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cell 4: Framed Image */}
            <motion.div variants={itemVariants} className="bg-foreground/[0.005] p-10 md:p-14 flex flex-col items-center justify-center min-h-[400px]">
              <img 
                src="/src/assets/XP.jpeg" 
                alt="BodhiX Environment"
                className="max-w-[280px] md:max-w-[340px] w-full h-auto object-cover rounded-xl ring-1 ring-border/50 shadow-md transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>

            {/* Cell 5: Ecosystem (Updated with 3rd Point) */}
            <motion.div variants={itemVariants} className="bg-background p-10 md:p-14 transition-colors hover:bg-foreground/[0.01] flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Ecosystem</p>
                <span className="text-3xl font-light text-primary/40">03</span>
              </div>
              
              <div className="space-y-6 mt-auto">
                <div className="flex flex-col gap-2 border-l-2 border-foreground/20 pl-6">
                  <h4 className="text-foreground font-medium text-lg">Cloud-Native Infrastructure</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Deploying containerized, resilient microservices across distributed environments to guarantee maximum uptime.
                  </p>
                </div>
                <div className="flex flex-col gap-2 border-l-2 border-foreground/20 pl-6">
                  <h4 className="text-foreground font-medium text-lg">Zero-Trust Architecture</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Implementing rigorous identity verification and end-to-end encrypted data pipelines at every critical node.
                  </p>
                </div>
                {/* New 3rd Point */}
                <div className="flex flex-col gap-2 border-l-2 border-foreground/20 pl-6">
                  <h4 className="text-foreground font-medium text-lg">API-First Interoperability</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Designing standardized, well-documented interfaces that ensure seamless communication across your entire software stack.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cell 6: Commitment */}
            <motion.div variants={itemVariants} className="bg-background p-10 md:p-14 transition-colors hover:bg-foreground/[0.01] flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Commitment</p>
                  <span className="text-3xl font-light text-primary/40">04</span>
                </div>
                <h3 className="text-3xl md:text-4xl text-foreground font-light leading-tight mb-6">
                  Built to last.<br />Engineered to scale.
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  We do not chase temporary technical trends. Our focus is strictly on building sustainable software systems that minimize technical debt and adapt to your evolving enterprise demands over decades.
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-12">
                 <div className="h-[1px] flex-1 bg-border/50"></div>
                 <span className="text-xs uppercase tracking-widest text-foreground/40 font-medium">Future-Proof</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Technical Metrics / Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-border/50"
        >
          {[
            { metric: "99.99%", label: "System Uptime Architecture" },
            { metric: "< 50ms", label: "Target Latency Optimization" },
            { metric: "Zero", label: "Trust Security Model" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-3xl font-light text-foreground">{item.metric}</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;