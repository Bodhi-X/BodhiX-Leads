import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Premium easing curves
const ease = [0.25, 1, 0.5, 1];
const modalEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1 + (i || 0) * 0.1,
      ease,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// --- DATA SPLIT ---

// 6 Products (Optical CRM remains first with structural highlight)
const productsList = [
  {
    title: "Retail Optical CRM",
    isFeatured: true, // Triggers the subtle navy border and distinct background
    description: "A full-stack enterprise resource planning system built exclusively for optical retail and manufacturing businesses to manage every operational, financial, and clinical workflow from customer prescriptions and workshop job tracking to GST-compliant billing, B2B wholesale, double-entry accounting, and staff attendance in one unified, deeply customised platform owned entirely by the business.",
    features: ["Multi-branch Customer and Prescription Management", "GST-Compliant Sales, Billing, and B2B Challan Bifurcation", "Workshop QR Job Tracking with Six-Stage Kanban Pipeline","Inventory with Inter-Branch Transfers and Dead Stock Reporting","Face Punch Biometric Attendance and Shift Management","On-Frame OCR Specification Scanner","AI-Powered Dashboard Insights and 30-Day Revenue Forecast","WhatsApp and SMS Automated Communication Engine","Role-Based Access Control with PostgreSQL Row-Level Security"],
    fullDescription: "A specialized CRM built for optical shops to manage patient records, eyewear prescriptions, frame and lens inventory, and appointment scheduling in one unified, highly refined digital platform.",
    useCases: "Built for multi-branch optical retail chains, optical manufacturing units, and wholesale frame and lens distributors who have outgrown generic SaaS tools and need a system that matches the exact complexity of their business — with full data ownership, no recurring licence fees, and the flexibility to extend as the business grows."
  },
  {
    title: "AI Voice Agents",
    description: "Human-like AI conversational agents capable of handling inbound and outbound calls 24/7.",
    features: ["Voice Synthesis", "NLP Engine", "Instant Reply"],
    fullDescription: "Deploy intelligent voice assistants that speak naturally with your customers. They book appointments, answer FAQs, and route complex queries over the phone, acting as an indefatigable extension of your front-desk or sales team.",
    useCases: "Ideal for high-volume customer support, outbound sales qualification, and automated front-desk operations."
  },
  {
    title: "ATS Parsers",
    description: "High-accuracy resume parsing infrastructure to automatically extract and structure candidate data.",
    features: ["Data Extraction", "AI Powered", "Bulk Processing"],
    fullDescription: "Our ATS parsers utilize advanced natural language processing to read CVs and resumes in any format. They instantly convert unstructured documents into clean, searchable database profiles, eliminating manual data entry.",
    useCases: "Essential for recruitment agencies, HR tech startups, and enterprise HR departments needing to process applications efficiently."
  },
  {
    title: "Lead Management Systems",
    description: "End-to-end lead tracking with a 100% data security guarantee for your sensitive pipeline.",
    features: ["100% Secure", "Lead Tracker", "Encrypted Databases"],
    fullDescription: "A robust lead management and tracking system built from the ground up with military-grade encryption. Capture, route, and monitor leads through your sales funnel with the absolute guarantee that your proprietary data remains strictly confidential.",
    useCases: "Crucial for B2B enterprises, financial services, and healthcare providers requiring strict compliance and data sovereignty."
  },
  {
    title: "On-Chain Certification",
    description: "Tamper-proof digital credential platforms utilizing on-chain signatures and MetaMask integration.",
    features: ["MetaMask Ready", "On-Chain Proof", "Immutable Records"],
    fullDescription: "We build decentralized certification platforms that issue verifiable, tamper-proof credentials directly to the blockchain. Users can securely authenticate, claim, and display their digital certificates using web3 wallets like MetaMask, ensuring cryptographic proof of authenticity.",
    useCases: "Ideal for educational institutions, professional licensing bodies, digital academies, and enterprise training programs wanting fraud-proof credentialing."
  },
  {
    title: "Real Estate Infrastructure",
    description: "End-to-end digital pipelines designed to capture, nurture, and convert real estate leads.",
    features: ["Lead Capture", "Automated Nurturing", "Pipeline Analytics"],
    fullDescription: "Tailored infrastructure for real estate professionals that tracks the entire buyer and seller journey. From high-converting landing pages to automated follow-up SMS and email sequences, transforming cold traffic into closed portfolios.",
    useCases: "Designed for premium real estate brokerages, luxury property developers, and top-tier agents."
  }
];

// 9 Services
const servicesList = [
  {
    title: "API-as-a-Service",
    description: "Secure, highly available endpoints that power your digital tools and connect platforms.",
    features: ["Global Connectivity", "High-Speed Relays", "Secure Data Transfer"],
    fullDescription: "We build secure, invisible bridges that allow your software tools to talk to each other seamlessly. We ensure your data architectures communicate instantly and safely, without interruption.",
    useCases: "Perfect for enterprises needing to syndicate data between platforms or offer proprietary data access to premium partners."
  },
  {
    title: "Autonomous Decision Engines",
    description: "Advanced machine learning models that learn from trial and error to solve optimization problems.",
    features: ["Self-Learning Loops", "Process Optimization", "Neural Compute"],
    fullDescription: "Leveraging Reinforcement Learning (RL) to provide agents that learn optimal behaviors through environmental interaction. We build the training loops and deployment pipelines needed for self-improving systems.",
    useCases: "Essential for dynamic pricing engines, automated high-frequency trading systems, and personalized recommendation loops."
  },
  {
    title: "Cloud Infrastructure",
    description: "Reliable, globally distributed online environments so your applications stay resilient.",
    features: ["Safe Storage", "Auto-Scaling", "DDoS Protection"],
    fullDescription: "Bespoke setup and management of secure cloud architecture. We architect environments that automatically scale dynamically to your traffic patterns, ensuring highly efficient resource utilization.",
    useCases: "Ideal for scaling enterprises requiring fault-tolerant, fast, and secure operational environments."
  },
  {
    title: "Custom Software & Dashboards",
    description: "Purpose-built applications and real-time command centers tailored to operational workflows.",
    features: ["Clean Architecture", "Clear Data Views", "Highly Scalable"],
    fullDescription: "We design custom software strictly aligned with your unique operational workflows. Paired with minimalist interactive screens that pull from disparate data sources, transforming complexity into absolute clarity.",
    useCases: "Perfect for firms outgrowing off-the-shelf tools, requiring a unified, executive-level command center."
  },
  {
    title: "DApps (Decentralized Apps)",
    description: "Decentralized applications providing transparency, security, and trustless transactions on the blockchain.",
    features: ["Smart Contracts", "Immutable Logic", "Decentralized Nodes"],
    fullDescription: "We architect custom Decentralized Applications (DApps) leveraging smart contracts and blockchain technology. These apps ensure data integrity, eliminate single points of failure, and allow for peer-to-peer interactions without middlemen.",
    useCases: "Ideal for fintech startups, supply chain transparency, decentralized finance (DeFi) protocols, or trustless transaction platforms."
  },
  {
    title: "Digital Marketing",
    description: "Targeted online ad campaigns focused entirely on acquiring premium clientele and ROI.",
    features: ["Real Growth Metrics", "Precision Targeting", "Brand Visibility"],
    fullDescription: "Data-driven advertising campaigns executed on leading search and social platforms. We bypass vanity metrics, focusing entirely on high-intent lead acquisition and predictable revenue scaling.",
    useCases: "Designed for established brands ready to elevate their market positioning and acquire high-net-worth clientele."
  },
  {
    title: "Intelligent Autonomy",
    description: "Autonomous digital workers that handle complex tasks, support, and logic-based workflows.",
    features: ["Smart Logic Routing", "Real-time Processing", "Workforce Scalability"],
    fullDescription: "Sophisticated autonomous systems that understand deep context and business logic. These systems manage schedules, automate complex client interactions, and process logic-heavy data without human intervention.",
    useCases: "Perfect for companies looking to scale operations exponentially while maintaining a lean human workforce."
  },
  {
    title: "Security Libraries",
    description: "FIPS-compliant encryption and authentication modules built for seamless integration.",
    features: ["Biometric Ready", "FIPS-Compliant", "Audit-Ready Code"],
    fullDescription: "Specialized software libraries focused on encryption and authentication. Engineered to meet rigorous security standards like FIPS, ensuring your user data and architectural access points remain impenetrable.",
    useCases: "Essential for healthcare applications, private banking software, or government compliance requirements."
  },
  {
    title: "Shopify Development",
    description: "High-converting, visually striking e-commerce experiences engineered for luxury retail.",
    features: ["Bespoke UI Design", "Peak Performance", "Conversion Optimized"],
    fullDescription: "We architect premium Shopify storefronts that merge striking aesthetics with strategic conversion engineering. From headless commerce builds to complex backend integrations, we build elite retail experiences.",
    useCases: "Perfect for luxury retail brands, DTC companies, and high-end creators scaling their global sales presence."
  }
];

const ServicesAndProducts = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  const activeData = activeTab === "products" ? productsList : servicesList;

  return (
    <section id="portfolio" className="bg-white text-slate-900 min-h-screen py-16 md:py-24 px-6 font-sans overflow-hidden flex justify-center selection:bg-slate-200 selection:text-slate-900">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="w-full max-w-6xl flex flex-col gap-14 md:gap-20">
        
        {/* Header - Simplified for guaranteed visibility and extreme minimalism */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-slate-900 leading-[0.95] uppercase"
          >
            Our<br />Solutions.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={1}
            className="max-w-sm pb-1 flex flex-col gap-8"
          >
            <p className="text-sm md:text-[15px] text-slate-500 font-light leading-relaxed">
              Proprietary systems and core digital services built for high-performance environments. Select a division below.
            </p>

            {/* Tab Navigation */}
            <div className="flex gap-8 border-b border-slate-200 relative">
              {["products", "services"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-[11px] md:text-xs font-semibold tracking-widest uppercase transition-colors duration-500 relative z-10 ${
                    activeTab === tab ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabIndicatorSolutions"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                      transition={{ duration: 0.6, ease }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CSS Grid Layout - Pure Typography, Minimal Colors */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
              
              {activeData.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants} 
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  className={`relative p-8 md:p-10 transition-colors flex flex-col h-full group cursor-pointer justify-between min-h-[280px] ${
                    item.isFeatured 
                      ? "bg-slate-50 hover:bg-slate-100/70" 
                      : "bg-white hover:bg-slate-50"
                  }`}
                >
                  {/* Highlight Feature Line (Navy Accent) */}
                  {item.isFeatured && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900" />
                  )}

                  <div>
                    <h3 className="text-2xl font-light tracking-tight text-slate-900 leading-snug mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 font-light leading-relaxed mb-6 line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Subtle Explore CTA */}
                  <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-slate-400 transition-colors mt-auto pt-4 group-hover:text-slate-900">
                    Explore Details
                    <ArrowRight size={12} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technical Metrics / Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-slate-200"
        >
          {[
            { metric: "Bespoke", label: "Architectural Design" },
            { metric: "Scalable", label: "Enterprise Deployment" },
            { metric: "Secure", label: "End-to-End Encryption" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <span className="text-xl md:text-2xl font-light tracking-tight text-slate-900">{item.metric}</span>
              <span className="text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Pure Typography Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: modalEase }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-white/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: modalEase }}
              className="w-full max-w-2xl bg-white border border-slate-200 shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-0 right-0 z-20 w-16 h-16 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors duration-300 border-b border-l border-slate-100"
              >
                <X size={18} strokeWidth={1} />
              </button>

              <div className="overflow-y-auto hide-scrollbar p-8 md:p-14">
                
                <div className="mb-12 pr-8">
                  <h3 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 leading-tight mb-4">
                    {selectedItem.title}
                  </h3>
                </div>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2">
                      Overview
                    </h4>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {selectedItem.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2">
                      Key Capabilities
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {selectedItem.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          {/* Minimal Orange Dot Accent */}
                          <div className="w-1 h-1 rounded-full bg-orange-500"></div>
                          <span className="text-sm font-medium text-slate-700 tracking-wide">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2">
                      Ideal Application
                    </h4>
                    <p className="text-sm font-light text-slate-500 leading-relaxed italic">
                      {selectedItem.useCases}
                    </p>
                  </div>
                </div>

                <div className="mt-14 pt-8 border-t border-slate-100">
                  <Link 
                    to="/contact" 
                    onClick={() => setSelectedItem(null)}
                    className="inline-flex items-center justify-between w-full p-5 bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-300 group"
                  >
                    <span className="text-xs font-semibold tracking-widest uppercase">
                      Inquire About {activeTab === 'products' ? 'Integration' : 'Consultation'}
                    </span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 group-hover:text-orange-500 transition-all duration-300" strokeWidth={1} />
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

export default ServicesAndProducts;
