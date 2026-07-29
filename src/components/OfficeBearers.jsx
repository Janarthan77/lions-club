import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const bearersData = [
  {
    name: "Rtn. முனைவர் K. சிவகுமார்",
    role: "மாவட்ட ஆளுநர்",
    roleEn: "DISTRICT GOVERNOR",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    accentColor: "#d97706",
    tags: ["மருத்துவர்", "சமூக சேவகர்", "கல்வியாளர்"],
    history: [
      "20+ ஆண்டுகள் மருத்துவ மற்றும் சமூக சேவை அனுபவம் கொண்டவர்.",
      "சாயல்குடி வட்டார இலவச கண் சிகிச்சை மற்றும் இரத்ததான முகாம் அமைப்பாளர்.",
      "கிராமப்புற மாணவர்களுக்கான கல்வி அறக்கட்டளை நிறுவனர்."
    ]
  },
  {
    name: "Rtn. M. இராமச்சந்திரன்",
    role: "கிளப் தலைவர்",
    roleEn: "CLUB PRESIDENT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    accentColor: "#2563eb",
    tags: ["தொழிலதிபர்", "ரோட்டரியன்", "தொண்டு வழிகாட்டி"],
    history: [
      "சாயல்குடி பகுதியில் 15+ ஆண்டுகள் முன்னணி வர்த்தகர் மற்றும் தொழிலதிபர்.",
      "ரோட்டரி சங்கம் மூலமாக 50+ சமூக நல்வாழ்வு திட்டங்களை வெற்றிகரமாக செயல்படுத்தியவர்.",
      "இளைஞர் திறன் மேம்பாட்டு மையத்தின் முதன்மை ஒருங்கிணைப்பாளர்."
    ]
  },
  {
    name: "Rtn. S. சுப்பிரமணியன்",
    role: "கிளப் செயலாளர்",
    roleEn: "CLUB SECRETARY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    accentColor: "#059669",
    tags: ["வழக்கறிஞர்", "நிர்வாகி", "பொது நல ஆர்வலர்"],
    history: [
      "சென்னை உயர்நீதிமன்ற வழக்கறிஞர் மற்றும் சட்ட ஆலோசகர்.",
      "ரோட்டரி மாவட்ட அளவிலான நிர்வாகக் குழுவின் முக்கிய பொறுப்பாளர்.",
      "சுற்றுச்சூழல் பாதுகாப்பு மற்றும் மரக்கன்று நடுதல் இயக்கத்தின் தலைவர்."
    ]
  },
  {
    name: "Rtn. திருமதி. P. இலட்சுமி",
    role: "கிளப் பொருளாளர்",
    roleEn: "CLUB TREASURER",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    accentColor: "#e11d48",
    tags: ["தணிக்கையாளர்", "பெண் उद्योमी", "கல்வி ஆர்வலர்"],
    history: [
      "சான்றளிக்கப்பட்ட கணக்குத் தணிக்கையாளர் (Chartered Accountant).",
      "பெண்கள் சுயஉதவிக் குழுக்களுக்கு நிதி மற்றும் தொழில் வழிகாட்டுதல் வழங்குபவர்.",
      "ரோட்டரி நிதி நிர்வாகத்தை துல்லியமாக பராமரித்து வரும் சேவை ஆர்வலர்."
    ]
  },
  {
    name: "Rtn. A. குமாரசாமி",
    role: "துணைத் தலைவர்",
    roleEn: "VICE PRESIDENT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    accentColor: "#7c3aed",
    tags: ["பொறியாளர்", "கட்டிடக்கலைஞர்", "சமூக ஆர்வலர்"],
    history: [
      "25+ ஆண்டுகள் அனுபவம் வாய்ந்த சிவில் பொறியாளர்.",
      "சாயல்குடி பகுதியில் பல்வேறு அரசுப் பள்ளி உள்கட்டமைப்பு பணிகளுக்கு பங்களித்தவர்.",
      "ரோட்டரி விளையாட்டு மற்றும் இளைஞர் நலக் குழுவின் தலைவர்."
    ]
  },
  {
    name: "Rtn. T. மணிகண்டன்",
    role: "செயற்குழு உறுப்பினர்",
    roleEn: "EXECUTIVE MEMBER",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    accentColor: "#0891b2",
    tags: ["வேளாண் வல்லுநர்", "இயற்கை விவசாயி", "ஆராய்ச்சியாளர்"],
    history: [
      "இயற்கை விவசாயம் மற்றும் நீர் மேலாண்மை குறித்த விழிப்புணர்வு பயிற்சியாளர்.",
      "சாயல்குடி விவசாயிகள் கூட்டுறவு சங்கத்தின் முன்னாள் ஆலோசகர்.",
      "ரோட்டரி பசுமை கிராமம் திட்டத்தின் திட்ட இயக்குநர்."
    ]
  }
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
