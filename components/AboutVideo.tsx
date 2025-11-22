import React from 'react';
import { Button, PlaceholderImage } from './UI';
import { Play, ArrowRight, Waves } from 'lucide-react';

export const AboutVideo: React.FC = () => {
  return (
    <section className="bg-[#111827] py-16 md:py-32 text-white relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        
        {/* Left Text */}
        <div className="text-left">
          <div className="inline-block bg-[#06b6d4] text-white text-sm font-bold px-4 py-1.5 mb-6 md:mb-10 rounded shadow-[0_0_15px_rgba(6,182,212,0.5)] tracking-wider">
            Our Mission
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-10 leading-[0.95] tracking-tighter text-white">
            Making Pool Ownership Carefree & Enjoyable
          </h2>
          <p className="text-slate-300 mb-6 md:mb-8 text-lg md:text-xl leading-relaxed font-medium">
             We understand that maintaining a swimming pool can often be a daunting task, which is why we dedicate ourselves to providing exceptional cleaning, maintenance, and repair services.
          </p>
          <p className="text-white mb-8 md:mb-12 text-lg md:text-xl leading-relaxed font-bold border-l-4 border-[#06b6d4] pl-6 md:pl-8">
             With our experienced team and commitment to quality, we strive to ensure your pool remains pristine and inviting throughout the year, allowing you to focus on what truly matters — having fun and relaxing.
          </p>
          <Button variant="primary" size="lg" className="w-full md:w-auto px-10 text-lg">Get Your Price Now <ArrowRight className="ml-2" size={20} strokeWidth={3}/></Button>
        </div>

        {/* Right Video Placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group cursor-pointer border-4 border-slate-800">
          <div className="w-full h-[300px] md:h-[500px]">
            <PlaceholderImage icon={Waves} label="Our Mission" subLabel="Watch Video" />
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-16 h-12 md:w-24 md:h-16 bg-[#06b6d4] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play fill="white" size={24} className="md:w-8 md:h-8 text-white ml-1" />
            </div>
          </div>

          {/* Video Controls Overlay Mockup */}
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-white/90 text-xs md:text-sm font-bold z-20 pointer-events-none">
             <div className="flex items-center gap-2 md:gap-4">
                 <Play size={14} className="md:w-4 md:h-4" fill="currentColor" />
                 <span>1:30</span>
                 <div className="w-32 md:w-56 h-1.5 bg-white/30 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-[#06b6d4]"></div>
                 </div>
             </div>
             <div className="flex items-center gap-3">
                 <span className="tracking-wide text-[10px] md:text-xs opacity-80 uppercase">ProActive Pool Solutions</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};