import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom easing for buttery-smooth, premium transitions
const smoothEase = [0.22, 1, 0.36, 1];

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
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background min-h-screen py-32 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Seamless Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-foreground/10"></div>
            <h1 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/40 font-medium">
              Operational Inquiries
            </h1>
          </div>
          
          {/* Scaled down heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] tracking-tight mb-6">
            Clarity on execution.
          </h2>
          
          {/* Scaled down paragraph */}
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
            Detailed parameters regarding our engineering methodology, technical infrastructure capabilities, and engagement frameworks.
          </p>
        </motion.div>

        {/* Borderless Open Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: smoothEase, delay: 0.1 }}
          className="w-full overflow-x-auto"
        >
          <table className="w-full min-w-[1000px] border-collapse text-left bg-transparent">
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="border-b border-r border-border/20 p-12 lg:p-16 w-1/2 align-top hover:bg-foreground/[0.015] transition-colors duration-700 ease-out group">
                  <div className="flex justify-between items-start mb-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium group-hover:text-foreground/60 transition-colors duration-500">
                      {faqs[0].category}
                    </p>
                    <span className="text-2xl font-light text-foreground/10">01</span>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs[0].questions.map((item, index) => (
                      <AccordionItem key={index} value={`req-0-${index}`} className="border-border/20">
                        {/* Scaled down trigger text to text-base */}
                        <AccordionTrigger className="text-foreground font-light text-base text-left hover:no-underline py-4 group/trigger">
                          <span className="group-hover/trigger:translate-x-1 transition-transform duration-500 ease-out">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        {/* Scaled down content text to text-sm */}
                        <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5 text-sm">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </td>

                <td className="border-b border-border/20 p-12 lg:p-16 w-1/2 align-top hover:bg-foreground/[0.015] transition-colors duration-700 ease-out group">
                  <div className="flex justify-between items-start mb-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium group-hover:text-foreground/60 transition-colors duration-500">
                      {faqs[1].category}
                    </p>
                    <span className="text-2xl font-light text-foreground/10">02</span>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs[1].questions.map((item, index) => (
                      <AccordionItem key={index} value={`req-1-${index}`} className="border-border/20">
                        <AccordionTrigger className="text-foreground font-light text-base text-left hover:no-underline py-4 group/trigger">
                          <span className="group-hover/trigger:translate-x-1 transition-transform duration-500 ease-out">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5 text-sm">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="border-b border-r border-border/20 p-12 lg:p-16 w-1/2 align-top hover:bg-foreground/[0.015] transition-colors duration-700 ease-out group">
                  <div className="flex justify-between items-start mb-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium group-hover:text-foreground/60 transition-colors duration-500">
                      {faqs[2].category}
                    </p>
                    <span className="text-2xl font-light text-foreground/10">03</span>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs[2].questions.map((item, index) => (
                      <AccordionItem key={index} value={`req-2-${index}`} className="border-border/20">
                        <AccordionTrigger className="text-foreground font-light text-base text-left hover:no-underline py-4 group/trigger">
                          <span className="group-hover/trigger:translate-x-1 transition-transform duration-500 ease-out">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5 text-sm">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </td>

                <td className="border-b border-border/20 p-12 lg:p-16 w-1/2 align-top hover:bg-foreground/[0.015] transition-colors duration-700 ease-out group">
                  <div className="flex justify-between items-start mb-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium group-hover:text-foreground/60 transition-colors duration-500">
                      {faqs[3].category}
                    </p>
                    <span className="text-2xl font-light text-foreground/10">04</span>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs[3].questions.map((item, index) => (
                      <AccordionItem key={index} value={`req-3-${index}`} className="border-border/20">
                        <AccordionTrigger className="text-foreground font-light text-base text-left hover:no-underline py-4 group/trigger">
                          <span className="group-hover/trigger:translate-x-1 transition-transform duration-500 ease-out">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5 text-sm">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </td>
              </tr>

              {/* Row 3: Call to Action */}
              <tr>
                <td colSpan={2} className="p-12 lg:p-16 hover:bg-foreground/[0.015] transition-colors duration-700 ease-out">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-4xl mx-auto text-center md:text-left">
                    <div>
                      {/* Scaled down text elements here */}
                      <h3 className="text-xl text-foreground font-light mb-2">Require further clarification?</h3>
                      <p className="text-sm text-muted-foreground font-light">Initiate a direct dialogue with our engineering team.</p>
                    </div>
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-transparent border border-foreground/20 text-foreground text-[10px] md:text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-all duration-500 ease-out rounded-none"
                    >
                      Commence Dialogue
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        
      </div>
    </section>
  );
};

export default FAQ;