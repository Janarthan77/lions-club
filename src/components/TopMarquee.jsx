import React from 'react';
import { Bell, Sparkles, Calendar } from 'lucide-react';

const announcements = [
  {
    tag: "சிறப்பு முகாம்",
    text: "இலவச மாபெரும் இரத்த தான முகாம் - 15 ஆகஸ்ட் 2026, இடம்: அரசினர் மேல்நிலைப்பள்ளி, சாயல்குடி.",
    highlight: "அனைவரும் வருக!",
  },
  {
    tag: "லட்சியம்",
    text: "Service Above Self • சுயநலமற்ற சமுதாய சேவை மற்றும் மக்கள் பணி.",
    highlight: "Rotary Club of Sayalgudi",
  },
  {
    tag: "கல்வி உதவி",
    text: "2026-2027 கல்வியாண்டிற்கான ஏழை மாணவர்களுக்கான உதவித்தொகை விண்ணப்பங்கள் வரவேற்பு.",
    highlight: "உடனே விண்ணப்பிக்கவும்",
  },
  {
    tag: "பசுமை திட்டம்",
    text: "1,000+ மரக்கன்றுகள் நட்டு சாயல்குடி ரோட்டரி கிளப் சாதனை!",
    highlight: "பசுமை சாயல்குடி",
  },
  {
    tag: "தொடர்புகளுக்கு",
    text: "அவசர உதவி & புதிய உறுப்பினர்கள் சேர: +91 98765 43210 / info@rotarysayalgudi.org",
    highlight: "தொடர்பு கொள்க",
  }
];

export const TopMarquee = () => {
  return (
    <div className="bg-[#060e20] text-slate-100 border-b border-amber-500/35 text-xs py-1.5 px-2 sm:py-2 sm:px-3 relative z-50 overflow-hidden shadow-lg select-none">
      {/* Subtle ambient gold shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3">
        
        {/* Left Fixed Badge / Label */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-[#060e20] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-black shadow-md shadow-amber-500/20 shrink-0 z-20 border border-amber-200/50 tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
          </span>
          <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider whitespace-nowrap">
            செய்திகள்
          </span>
        </div>

        {/* Subtle Vertical Divider */}
        <div className="hidden sm:block h-4 w-[1px] bg-amber-500/30 shrink-0 z-20" />

        {/* Marquee Track Container */}
        <div className="relative overflow-hidden w-full flex-1 flex items-center">
          
          {/* Left Gradient Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-[#060e20] to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee Content */}
          <div className="animate-marquee flex items-center gap-6 sm:gap-10 whitespace-nowrap py-0.5 hover:[animation-play-state:paused] cursor-pointer">
            {/* Render list twice for smooth 100% infinite looping */}
            {[...announcements, ...announcements].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 group/item transition-all">
                <span className="px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[9px] sm:text-[10px] font-extrabold tracking-wide uppercase group-hover/item:bg-amber-400 group-hover/item:text-slate-950 transition-colors">
                  {item.tag}
                </span>
                <span className="font-medium text-slate-200 text-[11px] sm:text-[12px] group-hover/item:text-white transition-colors">
                  {item.text}
                </span>
                {item.highlight && (
                  <span className="font-extrabold text-amber-300 text-[11px] sm:text-[12px] group-hover/item:text-amber-200 transition-colors underline underline-offset-2 decoration-amber-400/40">
                    {item.highlight}
                  </span>
                )}
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400/70 ml-1.5 inline-block shrink-0 group-hover/item:text-amber-300 group-hover/item:scale-110 transition-all" />
              </div>
            ))}
          </div>

          {/* Right Gradient Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-l from-[#060e20] to-transparent z-10 pointer-events-none" />
        </div>

        {/* Right Info Tag */}
        <div className="hidden lg:flex items-center gap-1.5 shrink-0 z-20 text-[11px] text-amber-300/90 font-bold bg-white/5 px-3 py-1 rounded-full border border-amber-500/20">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>சாயல்குடி ரோட்டரி சங்கம்</span>
        </div>

      </div>
    </div>
  );
};
