import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import thalaivarImg from '../assets/thalaivar.jpg';

const bearersData = [
  {
    name: "Rtn. குரு முருகன்",
    role: "சங்கத் தலைவர்",
    roleEn: "CLUB PRESIDENT",
    image: thalaivarImg,
    accentColor: "#d97706",
    tags: ["சங்கத் தலைவர்", "20+ வருட வணிக அனுபவம்", "முன்னாள் வணிகர் சங்கத் தலைவர்"],
    history: [
      "20+ ஆண்டுகள் வணிகத் துறையில் சாதனை படைத்த சாயல்குடி ரோட்டரி சங்கத்தின் மதிப்பிற்குரிய தலைவர்.",
      "குரு முருகன் காய்கறி மொத்த வியாபாரம், குரு முருகன் டிரான்ஸ்போர்ட் & குரு முருகன் ஜூவல்லரி நிறுவனங்களின் நிறுவனர்.",
      "முன்னாள் வணிகர் சங்கத் தலைவராக வணிகர்கள் மற்றும் பொதுமக்களின் நலனுக்காகத் தொடர்ந்து பாடுபட்டவர்."
    ]
  },



  {
    name: "Rtn. டாக்டர் கண்ணன்",
    role: "செயலாளர்",
    roleEn: "CLUB SECRETARY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    accentColor: "#059669",
    tags: ["செயலாளர்", "மருத்துவர்", "பொதுநல ஆர்வலர்"],
    history: [
      "சாயல்குடி ரோட்டரி சங்கத்தின் நிருவாக செயலாளர் மற்றும் மருத்துவர்.",
      "இலவச கண் மற்றும் மெகா மருத்துவ முகாம்களின் தலைமை ஒருங்கிணைப்பாளர்.",
      "கிராமப்புற சுகாதார விழிப்புணர்வு திட்டங்களின் முன்னோடி."
    ]
  },
  {
    name: "Rtn. ராஜேந்திரன்",
    role: "பொருளாளர்",
    roleEn: "CLUB TREASURER",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    accentColor: "#e11d48",
    tags: ["பொருளாளர்", "தணிக்கையாளர்", "நிர்வாகி"],
    history: [
      "சாயல்குடி ரோட்டரி சங்கத்தின் நிதி நிருவாகப் பொருளாளர்.",
      "சங்கத்தின் சமூக சேவை திட்டங்களின் நிதி நிர்வாகத்தை செவ்வனே பராமரிப்பவர்.",
      "ரோட்டரி சேவைப் பணிகளின் வெளிப்படையான நிதி நிர்வாக ஆர்வலர்."
    ]
  },
  {
    name: "Rtn. RVPP முத்துசாமி",
    role: "தொழிலதிபர் & உறுப்பினர்",
    roleEn: "EXECUTIVE MEMBER",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    accentColor: "#7c3aed",
    tags: ["தொழிலதிபர்", "முன்னணி உறுப்பினர்", "சமூக ஆர்வலர்"],
    history: [
      "சாயல்குடி வட்டாரத்தின் முன்னணி தொழிலதிபர் மற்றும் ரோட்டரி உறுப்பினர்.",
      "கல்வி மற்றும் ஏழை எளியோருக்கான நிதியுதவி திட்டங்களின் ஆதரவாளர்.",
      "கிராமப்புற வளர்ச்சிப் பணிகளில் தொடர்ந்து பங்களித்து வருபவர்."
    ]
  },
  {
    name: "Rtn. முத்துசெல்வம்",
    role: "தொழிலதிபர் & உறுப்பினர்",
    roleEn: "EXECUTIVE MEMBER",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    accentColor: "#0891b2",
    tags: ["தொழிலதிபர்", "சேவை உறுப்பினர்", "வர்த்தகர்"],
    history: [
      "சாயல்குடி பகுதியில் முன்னணி வர்த்தகர் மற்றும் ரோட்டரி நிருவாக உறுப்பினர்.",
      "இளைஞர் திறன் மேம்பாடு மற்றும் வேலைவாய்ப்பு முகாம் அமைப்பாளர்.",
      "சுற்றுச்சூழல் பாதுகாப்பு மற்றும் மரக்கன்று நடும் பணிகளில் ஆர்வம் கொண்டவர்."
    ]
  },
];

export const OfficeBearers = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -410, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 410, behavior: 'smooth' });
  };

  return (
    <section id="bearers" className="relative py-20 bg-slate-50/50 border-t border-slate-100 overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-gold text-[#0a192f] leading-tight">
              ரோட்டரி <span className="gold-text-gradient">நிர்வாகிகள்</span>
            </h2>
            <div className="w-16 h-1 rounded-full gold-gradient-bg mt-3" />
          </div>

          {/* Scroll controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Left & Right gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50/80 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-7 overflow-x-auto pb-6 pt-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bearersData.map((bearer, idx) => (
              <div
                key={idx}
                className="group flex-shrink-0 flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-slate-200"
                style={{ width: '380px' }}
              >
                {/* Extra Big & Grand Photo Container */}
                <div className="relative overflow-hidden bg-slate-100" style={{ height: '440px' }}>
                  <img
                    src={bearer.image}
                    alt={bearer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    style={{ filter: 'brightness(1.06) contrast(1.03)' }}
                  />
                  {/* Subtle bottom shadow overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-1 bg-white">

                  {/* Name */}
                  <h3 className="text-xl font-extrabold text-[#0a192f] font-serif-gold leading-snug mb-1 text-center">
                    {bearer.name}
                  </h3>

                  {/* Role / Designation */}
                  <p
                    className="text-xs font-black uppercase tracking-[0.15em] text-center mb-5"
                    style={{ color: bearer.accentColor }}
                  >
                    {bearer.role} • <span className="opacity-80">{bearer.roleEn}</span>
                  </p>

                  {/* Tags Pills */}
                  <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                    {bearer.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Checkmark Bullet Points (Professional History) */}
                  <div className="space-y-3 pt-4 border-t border-slate-100 flex-1">
                    {bearer.history.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: bearer.accentColor }}
                        />
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
