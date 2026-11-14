import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useAnimationFrame, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, type AnimationPlaybackControls } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, FileText, Network, Pause, Play, Rocket } from "lucide-react";
import Workflow3D, { getWorkflowState } from "../components/prototype/Console3D";
import logo from "@/assets/bx-logo-new.png";
import "./prototype.css";
import "./prototype-3d.css";

const steps=[
  {name:"Brief",icon:FileText,target:0,title:"Your business needs become the brief.",detail:"An illustrative Field Supply project brings lead management, stock visibility and online sales into one brief."},
  {name:"Architecture",icon:Network,target:.38,title:"We design how everything connects.",detail:"The interface, API and data layer become one connected software architecture."},
  {name:"Build",icon:Code2,target:.79,title:"Features come together as working software.",detail:"Reusable code modules integrate authentication, data, leads, operations and commerce into the application."},
  {name:"Deploy",icon:Rocket,target:1,title:"One connected product, ready to use.",detail:"The assembled application reveals a unified workspace for leads, ERP and ecommerce. This is a conceptual deployment, not a live service."},
];

export default function Prototype3D(){
  const story=useRef<HTMLElement>(null);
  const reduced=!!useReducedMotion();
  const progress=useMotionValue(0);
  const scrollTarget=useRef(0);
  const playback=useRef<AnimationPlaybackControls|null>(null);
  const [playing,setPlaying]=useState(false);
  const [compact,setCompact]=useState(false);
  const [quantity,setQuantity]=useState(12);
  const [workflow,setWorkflow]=useState(()=>getWorkflowState(0));
  const {scrollYProgress}=useScroll({target:story,offset:["start start","end end"]});
  useMotionValueEvent(scrollYProgress,"change",value=>{scrollTarget.current=value;});
  useAnimationFrame((_time,delta)=>{
    if(playback.current||compact||reduced)return;
    const difference=scrollTarget.current-progress.get();
    if(Math.abs(difference)<.00001)return;
    // Normal scrolling tracks immediately; a sudden fling traverses every
    // intermediate state at a bounded speed instead of jumping chapters.
    const maxStep=Math.min(delta,40)/1000*.22;
    progress.set(progress.get()+Math.sign(difference)*Math.min(Math.abs(difference),maxStep));
  });
  useMotionValueEvent(progress,"change",value=>{const next=getWorkflowState(value,quantity);setWorkflow(previous=>previous.phase===next.phase&&previous.assembled===next.assembled&&previous.deployed===next.deployed&&previous.architectureReady===next.architectureReady&&previous.briefCaptured===next.briefCaptured?previous:next);});
  useEffect(()=>{const media=window.matchMedia("(max-height:600px)");const update=()=>setCompact(media.matches);update();media.addEventListener("change",update);return()=>media.removeEventListener("change",update);},[]);
  function stop(){playback.current?.stop();playback.current=null;setPlaying(false);}
  useEffect(()=>()=>playback.current?.stop(),[]);
  useEffect(()=>{if(reduced){playback.current?.stop();playback.current=null;setPlaying(false);}},[reduced]);
  useEffect(()=>{
    const interrupt=()=>{playback.current?.stop();playback.current=null;setPlaying(false);};
    const scroll=()=>{if(!compact)interrupt();};
    const key=(event:KeyboardEvent)=>{if(event.key==="Escape")interrupt();};
    const visibility=()=>{if(document.hidden)interrupt();};
    window.addEventListener("wheel",scroll,{passive:true});window.addEventListener("touchmove",scroll,{passive:true});window.addEventListener("keydown",key);document.addEventListener("visibilitychange",visibility);
    return()=>{window.removeEventListener("wheel",scroll);window.removeEventListener("touchmove",scroll);window.removeEventListener("keydown",key);document.removeEventListener("visibilitychange",visibility);};
  },[compact]);
  function run(target:number,restart=false,chapter=false){
    stop();if(reduced){progress.set(target);setWorkflow(getWorkflowState(target,quantity));return;}
    if(restart)progress.set(0);
    if(!compact&&restart)story.current?.scrollIntoView({behavior:"instant"});
    const top=story.current?story.current.getBoundingClientRect().top+window.scrollY:0;
    const distance=story.current?story.current.offsetHeight-window.innerHeight:0;
    setPlaying(true);
    const travel=Math.abs(target-progress.get());
    playback.current=animate(progress,target,{duration:chapter?Math.max(.6,Math.min(2.8,travel*6)):Math.max(1,travel*24),ease:"linear",onUpdate:value=>{if(!compact)window.scrollTo({top:top+distance*value,behavior:"instant"});},onComplete:()=>{playback.current=null;setPlaying(false);}});
  }
  const current=steps[workflow.phase];
  function changeQuantity(next:number){stop();setQuantity(next);scrollTarget.current=0;progress.set(0);setWorkflow(getWorkflowState(0,next));if(!compact)story.current?.scrollIntoView({behavior:"instant"});}
  return <div className="bx-prototype bx-three-prototype">
    <a className="bx-skip" href="#bx3-controls">Skip to workflow controls</a>
    <main><section ref={story} className={`bx3-story ${compact||reduced?"bx3-static":""}`} aria-label="Interactive 3D software development workflow">
      <div className="bx3-stage">
        <header className="bx3-nav"><Link to="/" aria-label="BodhiX homepage"><img src={logo} alt="BodhiX"/></Link><Link to="/prototype">Compare the interface study <ArrowUpRight size={13}/></Link><Link to="/contact">Let’s talk <ArrowUpRight size={15}/></Link></header>
        <div className="bx3-heading"><div><h1>Your idea.<br className="bx3-small-break"/> <span>Working software.</span></h1><p>From brief to build: software for ERP, lead management and ecommerce.</p></div><div className="bx3-action-controls"><div className="bx3-quantity" role="group" aria-label="Sample project scope"><span>Scope</span>{[6,12].map(count=><button key={count} aria-pressed={quantity===count} onClick={()=>changeQuantity(count)}>{count} modules</button>)}</div><button onClick={()=>playing?stop():run(1,workflow.deployed)} disabled={reduced}>{reduced?"Reduced motion":playing?"Pause build":workflow.deployed?"Replay build":workflow.briefCaptured?"Continue build":"Watch the build"}{playing?<Pause size={13}/>:<Play size={13}/>}</button></div></div>
        <div className="bx3-scene" aria-label="Four connected 3D stations: client brief, system architecture, code modules and deployed application"><Workflow3D progress={progress} reduced={reduced} active={workflow.phase} quantity={quantity}/></div>
        <dl className="bx3-live-ledger" aria-label="Current software project state"><div data-active={workflow.phase===0}><dt>Client brief</dt><dd>{workflow.briefCaptured?"Field Supply / captured":"Awaiting brief"}</dd></div><div data-active={workflow.phase===1}><dt>Architecture</dt><dd>{workflow.architectureReady?"Interface / API / data":"Awaiting design"}</dd></div><div data-active={workflow.phase===2}><dt>Modules integrated</dt><dd>{workflow.assembled} of {quantity} modules <small>({12-workflow.assembled} in library)</small></dd></div><div data-active={workflow.phase===3}><dt>Application</dt><dd>{workflow.deployed?"Deployed / preview":workflow.assembled>0?"Build in progress":"Awaiting build"}</dd></div></dl>
        <div className="bx3-bottom"><p aria-live="polite"><span>0{workflow.phase+1} / 04</span>{current.title}</p><nav id="bx3-controls" aria-label="Workflow chapters">{steps.map((step,index)=><button key={step.name} aria-pressed={workflow.phase===index} onClick={()=>run(step.target,false,true)}><step.icon size={14}/>{step.name}</button>)}</nav><span>Scroll to build <ArrowDown size={13}/></span></div>
        <p className="bx3-accessible-description">{current.detail}</p>
        <motion.div className="bx3-progress" style={{scaleX:progress}}/>
      </div>
    </section><footer className="bx3-footer"><span>Interactive 3D concept · Illustrative software project</span><Link to="/contact">Build your software <ArrowUpRight size={15}/></Link></footer></main>
  </div>;
}
