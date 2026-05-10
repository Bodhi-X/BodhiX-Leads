import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";

const CTASection = () => {
  return (
    // Edge-to-edge container with exactly 3px top/bottom dark navy borders.
    <section className="w-full bg-stone-100 text-stone-900 font-sans border-y-[3px] border-blue-950 flex flex-col lg:flex-row overflow-hidden">
      
      {/* LEFT COLUMN: The Hero Text (65% width) */}
      <div className="relative w-full lg:w-[65%] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-blue-950 p-6 md:p-8 flex flex-col justify-end overflow-hidden group bg-stone-50">
        
        {/* The RGB Corner Triangle */}
        <div 
          className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 z-0 opacity-90"
          style={{
            background: "linear-gradient(135deg, #FF0000 0%, #00FF00 50%, #0000FF 100%)",
            // Draws a perfect triangle anchored to the top-right corner
            clipPath: "polygon(0 0, 100% 0, 100% 100%)"
          }}
        />

        {/* Clean, Massive Typography - Dark Silver with Radial Shine from Right */}
        <h2
          // Tightened line-height to 0.85 for a tighter stack
          className="relative z-10 font-black uppercase tracking-tighter text-[9.5vw] sm:text-[8.5vw] md:text-[9vw] lg:text-[6.5vw] xl:text-[7.5vw] 2xl:text-[8.5vw] leading-[0.85] flex flex-col mt-6 md:mt-8 text-transparent bg-clip-text whitespace-nowrap"
          style={{
            // The Radial Shine Effect: Bright on the right edge, fading into dark silver/charcoal on the left
            backgroundImage: "radial-gradient(ellipse at 100% 50%, #ffffff 0%, #a8a29e 25%, #44403c 65%, #1c1917 100%)"
          }}
        >
          {/* Removed the bottom padding (pb-1/pb-2) to bring the words flush together */}
          <span className="block">
            PURPOSE.
          </span>
          <span className="block">
            BALANCE.
          </span>
          <span className="block">
            PERFORMANCE.
          </span>
        </h2>
      </div>

      {/* RIGHT COLUMN: Content & Actions (35% width) */}
      <div className="w-full lg:w-[35%] flex flex-col bg-white">
        
        {/* Context Box */}
        <div className="p-6 md:p-8 border-b-[3px] border-blue-950 flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Code2 size={16} className="text-orange-500" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-500">Architecture & Scale</span>
          </div>
          <p className="text-base md:text-lg text-stone-600 font-medium leading-relaxed">
            Overcome technical debt and sluggish performance. We engineer reliable, efficient software systems designed to scale seamlessly with your business.
          </p>
        </div>

        {/* Contact Links Grid (Tightly packed, 2 columns) */}
        <div className="grid grid-cols-2 border-b-[3px] border-blue-950 bg-stone-50">
          <div className="p-6 border-r-[3px] border-blue-950 flex flex-col gap-2 hover:bg-stone-100 transition-colors">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-400">Email</span>
            <a href="mailto:bodhi.x@yahoo.com" className="text-sm md:text-base font-semibold text-stone-800 hover:text-orange-500 transition-colors truncate">
              bodhi.x@yahoo.com
            </a>
          </div>
          <div className="p-6 flex flex-col gap-2 hover:bg-stone-100 transition-colors">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-400">Direct Line</span>
            <a href="tel:+917069012440" className="text-sm md:text-base font-semibold text-stone-800 hover:text-orange-500 transition-colors truncate">
              +91 70690 12440
            </a>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/contact"
          className="group relative flex items-center justify-between p-6 md:p-8 bg-stone-900 overflow-hidden"
        >
          {/* Hover Fill Effect */}
          <div className="absolute inset-0 bg-orange-500 transform origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-x-100" />
          
          <span className="relative z-10 text-white text-xl md:text-2xl font-bold uppercase tracking-widest">
            LET'S DISCUSS
          </span>
          
          <ArrowRight 
            size={28} 
            className="relative z-10 text-white group-hover:translate-x-4 transition-transform duration-500 ease-out" 
          />
        </Link>

      </div>
    </section>
  );
};

export default CTASection;