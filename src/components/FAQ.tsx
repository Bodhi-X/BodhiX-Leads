import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Terminal, Plus, Minus } from "lucide-react";

// Premium ease-out curve
const smoothEase = [0.22, 1, 0.36, 1];

// 9 Categories: Original Operations + Service-Specific
const faqs = [
  {
    category: "Initiation",
    questions: [
      {
        q: "How is a new project initiated?",
        a: "We begin with a strategic discovery session to evaluate your operational challenges and technical requirements. This informs a comprehensive proposal detailing system architecture, timelines, and resource allocation."
      },
      {
        q: "What prerequisites are required from our team?",
        a: "We require clear business objectives, a mapping of existing legacy systems, and identified operational friction points. Comprehensive context enables precise architectural planning."
      },
      {
        q: "What are typical delivery timeframes?",
        a: "Timelines scale strictly with architectural complexity. Focused system integrations deploy in 4-6 weeks, while enterprise-grade platforms require 3-6 months of engineering."
      }
    ]
  },
  {
    category: "Methodology",
    questions: [
      {
        q: "What defines the BodhiX engineering approach?",
        a: "Rigorous elimination of the unnecessary. We engineer systems focused entirely on core functionality, prioritizing stability, security, and measurable operational outcomes over superficial features."
      },
      {
        q: "Do you service early-stage ventures?",
        a: "We partner with both emerging ventures building foundational architecture and established enterprises executing complex system modernizations."
      },
      {
        q: "How is communication structured?",
        a: "Direct, unmediated access to the engineering team. We eliminate intermediary management layers to maintain technical fidelity and operational speed."
      }
    ]
  },
  {
    category: "Infrastructure",
    questions: [
      {
        q: "Which technology stacks do you deploy?",
        a: "We utilize proven, resilient technologies tailored to specific system requirements—typically leveraging React, Node.js, Python, and scalable cloud infrastructure to ensure long-term maintainability."
      },
      {
        q: "Is post-deployment infrastructure maintained?",
        a: "Yes. We provide structured maintenance protocols covering security patching, performance optimizations, and iterative architectural scaling."
      },
      {
        q: "Do you integrate with existing legacy environments?",
        a: "Yes. A core competency is engineering secure middleware and robust API integrations to unify disparate operational workflows and data silos."
      }
    ]
  },
  {
    category: "Engagements",
    questions: [
      {
        q: "How are engagements structured financially?",
        a: "We utilize fixed-price models for strictly defined scopes, and time-and-materials frameworks for dynamic engineering environments requiring agile, ongoing adaptation."
      },
      {
        q: "What is the standard payment protocol?",
        a: "Capital allocation is tied strictly to developmental milestones, ensuring investment aligns directly with tangible technical deliverables."
      },
      {
        q: "How are structural scope variations managed?",
        a: "With absolute transparency. Modifications to system requirements are evaluated openly against resource and timeline impacts prior to implementation."
      }
    ]
  },
  {
    category: "Systems & Architecture",
    questions: [
      {
        q: "How do you ensure custom software integrates with legacy systems?",
        a: "We engineer robust API-as-a-Service layers that act as secure middleware. This seamlessly connects your existing disparate tools, ensuring reliable, instant data flow without disrupting current operations."
      },
      {
        q: "What cloud infrastructure do you recommend for scaling?",
        a: "We deploy auto-scaling environments tailored to your specific traffic demands. This guarantees maximum uptime and operational efficiency, ensuring you only pay for the server resources you actively utilize."
      },
      {
        q: "What are the typical timeframes for custom software delivery?",
        a: "Timelines scale strictly with architectural complexity. Focused dashboard integrations deploy in 4-6 weeks, while comprehensive enterprise platforms require 3-6 months of precision engineering."
      }
    ]
  },
  {
    category: "Data & Autonomy",
    questions: [
      {
        q: "How do Autonomous Decision Engines differ from standard automation?",
        a: "Standard automation follows rigid, pre-defined rules. Our Reinforcement Learning (RL) systems continuously learn from environmental interactions, optimizing their own logic to solve complex, dynamic problems over time."
      },
      {
        q: "Can you aggregate metrics from multiple disconnected platforms?",
        a: "Absolutely. We build bespoke Custom Dashboards that pull data from various external APIs into a single, real-time command center, transforming scattered data into actionable operational clarity."
      },
      {
        q: "Where is Intelligent Autonomy most effectively deployed?",
        a: "Intelligent digital workers excel in managing 24/7 complex logic workflows, contextual customer interactions, and high-volume data processing without the need for human intervention or oversight."
      }
    ]
  },
  {
    category: "Security & Web3",
    questions: [
      {
        q: "What compliance standards do your Security Libraries meet?",
        a: "We engineer specialized encryption and authentication modules designed to meet rigorous standards like FIPS. This ensures impenetrable data security for high-compliance environments like healthcare and banking."
      },
      {
        q: "How do Decentralized Applications (DApps) benefit our operations?",
        a: "DApps leverage blockchain technology to provide immutable data integrity, eliminate single points of failure, and enable trustless peer-to-peer transactions without relying on centralized intermediaries."
      },
      {
        q: "Is biometric authentication supported in your security builds?",
        a: "Yes. Our security architecture seamlessly integrates robust biometric verification protocols and cryptographic keys to fortify your user access points against unauthorized breaches."
      }
    ]
  },
  {
    category: "Growth & Acquisition",
    questions: [
      {
        q: "How is your Digital Marketing approach different from standard agencies?",
        a: "We engineer data-driven acquisition engines across Meta and Google. We strictly prioritize measurable ROI, targeted visibility, and highly qualified lead generation over superficial engagement metrics."
      },
      {
        q: "Do you optimize web assets and landing pages for conversion?",
        a: "Yes. High-performance campaigns require equally performant landing pages. We build web assets with clean code, rapid load times, and intuitive UX to maximize your conversion rates."
      },
      {
        q: "How is marketing performance tracked and reported?",
        a: "Campaign metrics are integrated directly into customized analytics dashboards, providing absolute transparency into your cost-per-acquisition, conversion rates, and overall revenue impact in real-time."
      }
    ]
  },
  {
    category: "Interface & Experience",
    questions: [
      {
        q: "How do you approach User Experience (UX) design?",
        a: "We prioritize cognitive ease and operational speed. Our interfaces are stripped of superficial ornamentation, focusing entirely on data hierarchy, intuitive navigation, and frictionless user workflows."
      },
      {
        q: "Do you integrate advanced visual assets like 3D or WebGL?",
        a: "Yes. We bridge the gap between heavy engineering and premium brand positioning by incorporating precision-crafted visual identities, WebGL interactions, and 3D assets where they serve a definitive functional purpose."
      },
      {
        q: "How is accessibility factored into your front-end builds?",
        a: "Compliance is engineered from the ground up. We adhere strictly to WCAG standards, ensuring interfaces are navigable, highly legible, and performant across all devices and assistive technologies."
      }
    ]
  }
];

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: i * 0.1, ease: smoothEase },
  }),
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="w-full bg-stone-50 flex flex-col border-y-[3px] border-blue-900"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      
      {/* Edge-to-Edge Hero Section */}
      <div className="w-full border-b-[3px] border-blue-900 bg-stone-100 p-6 md:p-10 lg:p-12">
        <div className="max-w-[1600px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <Terminal size={16} className="text-blue-900" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900">
              Operational Inquiries
            </span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-black uppercase tracking-tighter text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.85] flex flex-col text-black"
            >
              <div className="overflow-hidden py-1">
                <motion.span custom={0} variants={textReveal} className="block will-change-transform">
                  FAQ
                </motion.span>
              </div>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
              className="text-sm md:text-base text-gray-700 font-normal leading-relaxed max-w-md pb-2 tracking-[-0.045em]"
            >
              Detailed parameters regarding our engineering methodology, technical infrastructure capabilities, and engagement frameworks.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Brutalist Grid Layout */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-white">
        {faqs.map((category, catIndex) => {
          // The 9th item spans both columns
          const isLastItem = catIndex === faqs.length - 1;
          
          return (
            <div 
              key={catIndex}
              className={`p-6 md:p-8 lg:p-10 flex flex-col group transition-colors duration-700 hover:bg-stone-50
                ${isLastItem ? "md:col-span-2" : (catIndex % 2 === 0 ? "md:border-r-[3px] border-blue-900" : "")} 
                border-b-[3px] border-blue-900
              `}
            >
              {/* Category Header */}
              <div className="flex justify-between items-start mb-6 border-b-2 border-stone-200 pb-4">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-black">
                  {category.category}
                </h3>
                <span className="text-xs font-bold text-blue-900 tracking-widest">
                  0{catIndex + 1}
                </span>
              </div>

              {/* Custom Accordion Items */}
              <div className={`flex flex-col ${isLastItem ? "md:grid md:grid-cols-3" : ""}`}>
                {category.questions.map((item, qIndex) => {
                  const id = `${catIndex}-${qIndex}`;
                  const isOpen = openId === id;

                  // Dynamic classes to create clean vertical dividers for the 9th item on desktop
                  let columnClasses = "border-b border-stone-200 last:border-b-0";
                  if (isLastItem) {
                    columnClasses = "border-b md:border-b-0 border-stone-200 last:border-b-0";
                    if (qIndex === 0) columnClasses += " md:border-r md:pr-6 lg:pr-8";
                    if (qIndex === 1) columnClasses += " md:border-r md:px-6 lg:px-8";
                    if (qIndex === 2) columnClasses += " md:pl-6 lg:pl-8";
                  }

                  return (
                    <div key={qIndex} className={columnClasses}>
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full py-4 flex items-start justify-between text-left group/trigger"
                      >
                        {/* Changed font-black to font-medium here */}
                        <span className={`text-sm md:text-base font-medium tracking-[-0.045em] transition-all duration-500 ease-out pr-6 ${isOpen ? "text-blue-900" : "text-black group-hover/trigger:translate-x-2 group-hover/trigger:text-blue-900"}`}>
                          {item.q}
                        </span>
                        <span className="mt-1 text-gray-400 group-hover/trigger:text-blue-900 transition-colors shrink-0">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: smoothEase }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-gray-600 font-normal leading-relaxed pb-6 pr-4 tracking-[-0.045em]">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Row */}
      <div className="w-full bg-black text-white border-b-[3px] border-blue-900">
        <div className="max-w-[1600px] mx-auto p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-1">Require further clarification?</h3>
            <p className="text-sm text-gray-400 font-normal tracking-[-0.045em]">Initiate a direct dialogue with our engineering team.</p>
          </div>
          
          <a
            href="/contact"
            className="group relative flex items-center justify-between px-6 py-4 border-[2px] border-white overflow-hidden bg-transparent"
          >
            {/* Navy Blue Hover Fill */}
            <div className="absolute inset-0 bg-blue-900 transform origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-x-100" />
            
            <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-white">
              Commence Dialogue
            </span>
            <ArrowRight size={16} className="relative z-10 text-white ml-6 group-hover:translate-x-2 transition-transform duration-500" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default FAQ;