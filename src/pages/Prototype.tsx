import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type AnimationPlaybackControls } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Bell, Check, ChevronDown, ChevronRight, CircleHelp, Command, LayoutGrid, Mail, MoreHorizontal, Package, Pause, Play, Search, ShoppingBag, Users } from "lucide-react";
import logo from "@/assets/bx-logo-new.png";
import "./prototype.css";
import { MotionStage } from "../components/prototype/MotionStage";
import "./prototype-variants.css";

const chapters = [
  { name: "Capture", system: "Lead management", title: "A connection becomes an opportunity.", event: "Enquiry received", detail: "Alex Morgan is now in your pipeline", icon: Users },
  { name: "Convert", system: "Ecommerce", title: "An opportunity becomes an order.", event: "Order confirmed", detail: "Customer and sales records connected", icon: ShoppingBag },
  { name: "Deliver", system: "ERP & operations", title: "An order sets everything in motion.", event: "Ready for dispatch", detail: "Stock allocated. Fulfilment connected.", icon: Package },
];
const flowEase = [.22, 1, .36, 1] as const;

export function LeadView() {
  return <div className="bx-lead-view">
    <div className="bx-pipeline"><div className="bx-panel-heading"><span>Sales pipeline</span><span>All opportunities <ChevronDown size={13}/></span></div>
      <div className="bx-pipeline-columns">{["New enquiries", "In conversation", "Qualified"].map((label, column) => <div className="bx-pipeline-column" key={label}><div className="bx-column-heading"><i/>{label}<span>{[3, 2, 1][column]}</span></div>
        {(column === 0 ? ["Alex Morgan", "Riya Shah", "Daniel Lee"] : column === 1 ? ["Noor Patel", "Studio North"] : ["Atelier & Co."]).map((name, row) => <div key={name} className={`bx-opportunity ${name === "Alex Morgan" ? "bx-opportunity-selected" : ""}`}><span className="bx-opportunity-tag">{column === 2 ? "Proposal ready" : row === 0 ? "Website enquiry" : "Referral"}</span><strong>{name}</strong><span>{name === "Alex Morgan" ? "Field Supply Co." : ["Retail & commerce", "Custom operations", "Growing business"][row]}</span><div><span>{name === "Alex Morgan" ? "Interest · 12 notebooks" : "Discovery conversation"}</span><ArrowUpRight size={12}/></div></div>)}
      </div>)}</div>
      <div className="bx-next-action"><span className="bx-task-check"><Check size={12}/></span><div><strong>Send the Field collection proposal</strong><span>Alex Morgan · 12 notebooks · Follow up today</span></div><span className="bx-assignee">MS</span></div>
    </div>
    <div className="bx-customer"><div className="bx-customer-avatar">AM</div><h3>Alex Morgan</h3><p>Field Supply Co.</p><span className="bx-tag">New opportunity</span><div className="bx-customer-message"><Mail size={17}/><p>“We’re looking for a better way to manage our growing orders.”</p></div><dl><div><dt>Source</dt><dd>Website enquiry</dd></div><div><dt>Next step</dt><dd>Send proposal</dd></div><div className="bx-added-detail"><dt>Assigned to</dt><dd>Maya Shah</dd></div></dl><div className="bx-internal-action">Customer context captured <Check size={14}/></div></div>
  </div>;
}
export function CommerceView() {
  return <div className="bx-commerce-view"><div className="bx-shop"><div className="bx-shop-nav"><strong>FIELD<span>®</span></strong><span>Objects for everyday life.</span><ShoppingBag size={17}/></div><div className="bx-shop-product"><div className="bx-product-art" aria-label="Illustrative Field notebook product"><div className="bx-notebook"><span>FIELD</span><div>ROOM FOR<br/>WHAT’S NEXT.</div><small>NOTES / IDEAS / POSSIBILITIES</small></div><div className="bx-notebook bx-notebook-back"/></div><div className="bx-product-copy"><span>The everyday collection</span><h3>A fresh<br/>perspective.</h3><p>The Field Notebook<br/>Navy / Ruled / A5</p><strong>₹1,200 <small>per item</small></strong><div className="bx-order-quantity"><span>Quantity</span><strong>12</strong></div><div className="bx-internal-action">Added to order <Check size={14}/></div></div></div></div>
    <div className="bx-order-summary"><div className="bx-panel-heading"><span>Order confirmed</span><Check size={17}/></div><span className="bx-order-id">#FD–2048</span><div className="bx-order-customer"><span className="bx-small-avatar">AM</span><div><strong>Alex Morgan</strong><span>Field Supply Co.</span></div></div><dl><div><dt>Field Notebook × 12</dt><dd>₹14,400</dd></div><div><dt>Customer record</dt><dd className="bx-green">Connected</dd></div><div><dt>Inventory</dt><dd className="bx-green">Available</dd></div><div className="bx-added-detail"><dt>Payment</dt><dd>Paid online</dd></div><div className="bx-order-total"><dt>Order total</dt><dd>₹14,400</dd></div></dl><p><Check size={13}/> Sales and operations notified</p><div className="bx-order-receipt"><span>Invoice INV–2048</span><span>Receipt issued <Check size={11}/></span></div></div>
  </div>;
}
function OperationsView() {
  return <div className="bx-operations-view"><div className="bx-fulfilment-map"><div className="bx-panel-heading"><span>Order #FD–2048</span><span className="bx-green">Ready for dispatch</span></div><div className="bx-dispatch-flow">{[{title:"Order received",detail:"12 × Field Notebook",icon:ShoppingBag},{title:"Stock allocated",detail:"Mumbai · Bay A–12",icon:LayoutGrid},{title:"Ready to ship",detail:"Alex Morgan",icon:Package}].map((step, i) => <div className="bx-dispatch-step" key={step.title}><div className="bx-dispatch-icon"><step.icon size={30}/><span><Check size={11}/></span></div><span className="bx-step-index">0{i+1}</span><h3>{step.title}</h3><p>{step.detail}</p></div>)}</div><div className="bx-inventory-table"><div><span>Item / SKU</span><span>Location</span><span>Ordered</span><span>Allocation</span></div><div><strong>Field Notebook <small>FLD–NB–NV</small></strong><span>Mumbai / A–12</span><strong>12 units</strong><span className="bx-tag">Reserved</span></div><div><strong>Customer record</strong><span>Alex Morgan</span><span>FD–2048</span><span className="bx-green">Synced <Check size={12}/></span></div><div className="bx-added-detail"><strong>Invoice INV–2048</strong><span>Accounts / Sales</span><span>₹14,400</span><span className="bx-tag">Paid</span></div></div><div className="bx-shipping-summary"><Package size={15}/><div><strong>Shipping to Bengaluru</strong><span>Field Supply Co. · Standard delivery</span></div><span>Label prepared <Check size={12}/></span></div></div><div className="bx-activity"><div className="bx-panel-heading">Activity log <MoreHorizontal size={17}/></div>{[{time:"Just now",title:"Dispatch prepared",text:"Fulfilment task created"},{time:"A moment ago",title:"Inventory updated",text:"12 units reserved in Mumbai"},{time:"A moment ago",title:"Order confirmed",text:"Customer record linked"},{time:"Journey started",title:"Enquiry captured",text:"Alex Morgan · Field Supply Co."}].map(item => <div className="bx-log" key={item.title}><i/><small>{item.time}</small><strong>{item.title}</strong><p>{item.text}</p></div>)}</div></div>;
}

export default function Prototype() {
  const story = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const playback = useRef<AnimationPlaybackControls | null>(null);
  const [playing, setPlaying] = useState(false);
  const progress = useMotionValue(0);
  // Direct scroll mapping: no spring catch-up, with brief readable rests at each view.
  const sceneProgress = progress;
  const sceneX = useTransform(sceneProgress,[0,.04,.48,.52,.96,1],["0%","0%","-33.333333%","-33.333333%","-66.666667%","-66.666667%"]);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState(0);
  const staticMode = !!reduced || compact;
  useEffect(() => {
    const query = window.matchMedia("(max-width: 760px), (max-height: 600px)");
    const update = () => setCompact(query.matches);
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: story, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", value => { if (!staticMode && !playback.current) progress.set(value); });
  useMotionValueEvent(sceneProgress, "change", value => setActive(value<.26?0:value<.74?1:2));
  useEffect(() => () => playback.current?.stop(), []);
  useEffect(() => { if (reduced) { playback.current?.stop(); playback.current = null; setPlaying(false); } }, [reduced]);
  useEffect(() => {
    if (!playing) return;
    const interrupt = () => { playback.current?.stop(); playback.current = null; setPlaying(false); };
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") interrupt(); };
    window.addEventListener("wheel", interrupt, {passive:true});
    window.addEventListener("touchstart", interrupt, {passive:true});
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("wheel", interrupt); window.removeEventListener("touchstart", interrupt); window.removeEventListener("keydown", key); };
  }, [playing]);
  const chapter = chapters[active];
  function stopPlayback() {
    playback.current?.stop();
    playback.current = null;
    setPlaying(false);
  }
  function runTimeline(target: number, duration: number, restart = false) {
    stopPlayback();
    if (restart) { progress.set(0); sceneProgress.jump(0); setActive(0); }
    setPlaying(true);
    if (staticMode || restart) story.current?.scrollIntoView({ behavior: "instant", block: "start" });
    const sectionTop = story.current ? story.current.getBoundingClientRect().top + window.scrollY : 0;
    const scrollDistance = story.current ? story.current.offsetHeight - window.innerHeight : 0;
    playback.current = animate(progress, target, {duration,ease:"linear",onUpdate:value=>{if(!staticMode)window.scrollTo({top:sectionTop+scrollDistance*value,behavior:"instant"});},onComplete:()=>{ playback.current = null; setPlaying(false); }});
  }
  function playMotion() {
    if (playing) { stopPlayback(); return; }
    if (!reduced) runTimeline(1,20,true);
  }
  function goTo(index: number) {
    const target = [0,.5,1][index];
    if(reduced) { stopPlayback(); progress.set(target); sceneProgress.jump(target); setActive(index); return; }
    runTimeline(target,Math.max(1.2,Math.abs(target-progress.get())*10));
  }
  return <div className="bx-prototype bx-continuous-experience">
    <a className="bx-skip" href="#bx-controls">Skip to chapter controls</a>
    <main><section id="bx-story" ref={story} className={`bx-story ${staticMode ? "bx-static" : ""}`} aria-label="Connected business software demonstration">
      <div className={`bx-stage bx-chapter-${active}`}>
        <header className="bx-nav"><Link to="/" aria-label="BodhiX homepage"><img src={logo} alt="BodhiX"/></Link><nav className="bx-site-links" aria-label="Main navigation"><Link to="/services">What we build</Link><Link to="/about">About BodhiX</Link></nav><Link to="/contact">Let’s talk <ArrowUpRight size={16}/></Link></header>
        <div className="bx-stage-heading"><div className="bx-heading-copy"><h1>Your business. <span>In sync.</span></h1><p>Lead management. Commerce. Operations.<br/>Software that connects the whole journey.</p></div><button className="bx-play-motion" onClick={playMotion} disabled={!!reduced}>{reduced ? "Reduced motion enabled" : playing ? "Pause journey" : "Play the journey"}{playing ? <Pause size={13}/> : <Play size={13}/>}</button></div>
        <div className="bx-world">
          <svg className="bx-orbit-track" viewBox="0 0 1440 700" aria-hidden="true"><ellipse cx="720" cy="350" rx="625" ry="190"/><ellipse cx="720" cy="350" rx="470" ry="275"/></svg>
          <svg className="bx-network" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true"><path d="M0 420 H110 Q150 420 150 380 V160 Q150 120 190 120 H1250 Q1290 120 1290 160 V500 Q1290 540 1330 540 H1440"/><path d="M0 540 H180 Q220 540 220 500 V220 H1220 V360 Q1220 400 1260 400 H1440"/><motion.path className="bx-network-active" d="M0 420 H110 Q150 420 150 380 V160 Q150 120 190 120 H1250 Q1290 120 1290 160 V500 Q1290 540 1330 540 H1440" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:staticMode?0:2.5,ease:flowEase}}/><circle cx="150" cy="300" r="5"/><circle cx="1290" cy="420" r="5"/></svg>
          <div className="bx-edge-label bx-edge-left"><span>INPUT</span><Mail size={18}/><strong>One enquiry.</strong></div><div className="bx-edge-label bx-edge-right"><span>OUTPUT</span><Package size={18}/><strong>Possibility.</strong></div>
          <div className="bx-camera">
            <MotionStage>
              <div className="bx-device">
                <div className="bx-device-top"><div className="bx-window-controls" aria-hidden="true"><i/><i/><i/></div><div className="bx-window-address"><Command size={12}/><span>Field Supply</span><ChevronRight size={10}/><strong>{["Relationships","Commerce","Operations"][active]}</strong></div><div className="bx-window-tools" aria-hidden="true"><Search size={14}/><Bell size={14}/><span className="bx-user-avatar">AM</span></div></div>
                <div className="bx-device-body"><aside className="bx-app-sidebar"><div className="bx-workspace-name"><span>F.</span><div>Field Supply<small>Business workspace</small></div></div><div className="bx-sidebar-heading">WORKSPACE</div>{chapters.map((item, index) => <button key={item.name} aria-pressed={active===index} onClick={()=>goTo(index)}><item.icon size={17}/>{["Relationships","Commerce","Operations"][index]}{active===index&&<ChevronRight size={13}/>}</button>)}<div className="bx-sidebar-bottom"><CircleHelp size={15}/><span>Sample workspace</span></div></aside>
                  <div className="bx-app-main"><div className="bx-app-title"><div><span>WORKSPACE / {chapter.system.toUpperCase()}</span><h2>Your business workspace.</h2></div><span className="bx-demo-indicator"><i/> Demo</span></div><div className="bx-app-view"><motion.div className="bx-view-track" style={{x:reduced ? ["0%","-33.333333%","-66.666667%"][active] : sceneX}}>{[<LeadView key="lead"/>,<CommerceView key="commerce"/>,<OperationsView key="operations"/>].map((view,index)=><div key={index} className="bx-view-scene" aria-hidden={index!==active} ref={node=>{if(node)node.inert=index!==active;}}>{view}</div>)}</motion.div></div><div className="bx-app-status"><span><i/> All systems connected</span><span>Illustrative data · FD–2048</span></div></div>
                </div>
              </div>
              <div className="bx-event" aria-live="polite"><span className="bx-event-icon"><Check size={19}/></span><div><strong>{chapter.event}</strong><span>{chapter.detail}</span></div><ArrowUpRight size={17}/></div>
            </MotionStage>
          </div>
        </div>
        <div className="bx-stage-bottom"><div className="bx-story-caption"><span>0{active+1} / 03</span><p>{chapter.title}</p></div><nav id="bx-controls" className="bx-chapters" aria-label="Workflow chapters">{chapters.map((item,index)=><button key={item.name} aria-pressed={active===index} onClick={()=>goTo(index)}><span>0{index+1}</span>{item.name}<ArrowUpRight size={14}/></button>)}</nav><span className="bx-scroll-hint">{playing?"Playing preview":staticMode?"Choose a chapter":"Scroll to connect"}<ArrowDown size={15}/></span></div>
        <motion.div className="bx-scroll-progress" style={{scaleX:sceneProgress}}/>
      </div>
    </section>
    <section className="bx-outro"><div className="bx-outro-intro"><span>BodhiX</span><p>Custom software. Connected thinking.</p></div><h2>Your business has<br/>its own rhythm.<br/><em>Let’s build for it.</em></h2><div className="bx-outro-bottom"><p>ERP. Lead management. Ecommerce.<br/>Built around the way you work.</p><Link to="/contact">Start a conversation <ArrowUpRight size={23}/></Link></div><footer><Link to="/">Back to BodhiX <ArrowRight size={13}/></Link><span>Concept prototype · All data illustrative</span><button onClick={()=>{if(reduced)goTo(0);else runTimeline(1,20,true);story.current?.scrollIntoView({behavior:"instant"});}}>Replay the connection <ArrowUpRight size={13}/></button></footer></section></main>
  </div>;
}
