import React, { useState } from 'react';
import { MapPin, Clock, Users, Tag, CheckCircle2, Calendar } from 'lucide-react';

const eventsList = [
  {
    status: "upcoming",
    statusText: "வரவிருக்கும் நிகழ்வு",
    date: "ஆகஸ்ட் 15, 2026",
    month: "AUG",
    day: "15",
    tag: "நிகழ்ச்சி",
    tagBg: "#eff6ff",
    tagColor: "#1d4ed8",
    tagBorder: "#93c5fd",
    title: "End Polio Now — போலியோ விழிப்புணர்வு பேரணி",
    desc: "10,000-க்கும் மேற்பட்ட ரோட்டரியன்கள் மற்றும் பொதுமக்கள் பங்கேற்கும் மாபெரும் போலியோ ஒழிப்பு விழிப்புணர்வு பேரணி.",
    location: "சாயல்குடி நகர் மைதானம்",
    time: "காலை 7:00 — 11:00",
    participants: "5,000+ பேர்",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    accent: "#1d4ed8",
    stripFrom: "#1d4ed8",
    stripTo: "#3b82f6",
  },
  {
    status: "upcoming",
    statusText: "வரவிருக்கும் நிகழ்வு",
    date: "செப்டம்பர் 05, 2026",
    month: "SEP",
    day: "05",
    tag: "மருத்துவ சேவை",
    tagBg: "#ecfdf5",
    tagColor: "#065f46",
    tagBorder: "#6ee7b7",
    title: "இலவச மெகா கண் மருத்துவ முகாம் & இரத்ததான முகாம்",
    desc: "1,500 ஏழை பொதுமக்களுக்கு இலவச கண் பரிசோதனை, கண்புரை அறுவை சிகிச்சை மற்றும் இலவச மருந்துகள் வழங்குதல்.",
    location: "சாயல்குடி அரசு மருத்துவமனை",
    time: "காலை 9:00 — மாலை 4:00",
    participants: "1,500+ பேர்",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    accent: "#059669",
    stripFrom: "#065f46",
    stripTo: "#10b981",
  },
  {
    status: "upcoming",
    statusText: "வரவிருக்கும் நிகழ்வு",
    date: "அக்டோபர் 12, 2026",
    month: "OCT",
    day: "12",
    tag: "கல்வி சேவை",
    tagBg: "#fffbeb",
    tagColor: "#92400e",
    tagBorder: "#fcd34d",
    title: "ரோட்டரி தூய்மை நீர் & பள்ளி வளர்ச்சி திட்டம்",
    desc: "50 அரசுப் பள்ளிகளில் குடிநீர் சுத்திகரிப்பு ஆலைகள் நிறுவுதல் மற்றும் ஏழை மாணவர்களுக்கு இலவச கல்வி உபகரணங்கள் வழங்குதல்.",
    location: "சாயல்குடி & சுற்றியுள்ள கிராமங்கள்",
    time: "காலை 10:00 — பிற்பகல் 3:00",
    participants: "2,000+ பேர்",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    accent: "#d97706",
    stripFrom: "#b45309",
    stripTo: "#f59e0b",
  },
  {
    status: "completed",
    statusText: "நிறைவடைந்தது",
    date: "ஜூன் 20, 2026",
    month: "JUN",
    day: "20",
    tag: "பசுமை திட்டம்",
    tagBg: "#f0fdf4",
    tagColor: "#15803d",
    tagBorder: "#86efac",
    title: "1,000 மரக்கன்றுகள் நடும் விழா & சுற்றுச்சூழல் பாதுகாப்பு",
    desc: "சாயல்குடி ஒன்றியம் முழுவதும் 1,000 மரக்கன்றுகள் நட்டு பராமரிக்கும் பசுமை சாயல்குடி திட்டத் தொடக்க விழா.",
    location: "சாயல்குடி பேருந்து நிலையம் மற்றும் சாலை ஓரங்கள்",
    time: "காலை 8:00 — 12:00",
    participants: "800+ பயன்பெற்றோர்",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    accent: "#16a34a",
    stripFrom: "#15803d",
    stripTo: "#22c55e",
  },
  {
    status: "completed",
    statusText: "நிறைவடைந்தது",
    date: "மே 10, 2026",
    month: "MAY",
    day: "10",
    tag: "இளைஞர் மேம்பாடு",
    tagBg: "#faf5ff",
    tagColor: "#7e22ce",
    tagBorder: "#d8b4fe",
    title: "இளைஞர்களுக்கான தலைமைத்துவ & தொழில் வழிகாட்டு முகாம்",
    desc: "100+ கல்லூரி மாணவர்களுக்கு வேலைவாய்ப்புத் திறன், ஆளுமை வளர்ச்சி மற்றும் நேர்முகத் தேர்வு பயிற்சிகள்.",
    location: "சாயல்குடி சமூக நலக் கூடம்",
    time: "காலை 9:30 — மாலை 4:30",
    participants: "120 மாணவர்கள்",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    accent: "#9333ea",
    stripFrom: "#7e22ce",
    stripTo: "#a855f7",
  }
];

export const Events = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hovered, setHovered] = useState(null);

  const filteredEvents = eventsList.filter(evt => {
    if (activeTab === 'upcoming') return evt.status === 'upcoming';
    if (activeTab === 'completed') return evt.status === 'completed';
    return true;
  });

  return (
    <section id="events" className="relative py-14 sm:py-24 bg-slate-50 border-t border-slate-100">

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-gold text-[#0a192f] mb-3 sm:mb-4 leading-tight">
            நிகழ்ச்சிகள் & <span className="gold-text-gradient">சேவைத் திட்டங்கள்</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-base font-medium leading-relaxed">
            சாயல்குடி மக்களுக்கு சமூகத்தில் நிலைபேறான மாற்றங்களை உருவாக்கும் ரோட்டரியின் பிரதான சேவைப் பணிகள்
          </p>
          <div className="w-20 sm:w-24 h-1 mx-auto rounded-full gold-gradient-bg mt-4 sm:mt-5" />
        </div>

        {/* Filter Tabs (All / Upcoming / Completed) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0a192f] text-amber-400 shadow-lg scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            அனைத்தும் ({eventsList.length})
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              activeTab === 'upcoming'
                ? 'bg-amber-500 text-slate-950 shadow-lg scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            வரவிருப்பவை ({eventsList.filter(e => e.status === 'upcoming').length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              activeTab === 'completed'
                ? 'bg-emerald-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            நிறைவடைந்தவை ({eventsList.filter(e => e.status === 'completed').length})
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {filteredEvents.map((evt, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white transition-all duration-400 cursor-pointer border border-slate-200"
              style={{
                boxShadow: hovered === idx
                  ? `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${evt.accent}44`
                  : '0 4px 15px rgba(0,0,0,0.04)',
                transform: hovered === idx ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1.5 sm:gap-2">
                  <span
                    className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1.5 shadow-md backdrop-blur-sm ${
                      evt.status === 'upcoming'
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-emerald-500 text-white'
                    }`}
                  >
                    {evt.status === 'upcoming' ? (
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-950 animate-ping" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    )}
                    <span>{evt.statusText}</span>
                  </span>

                  {/* Category Tag */}
                  <span
                    className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold inline-flex items-center gap-1 shadow-sm w-fit"
                    style={{ background: 'white', color: evt.tagColor, border: `1px solid ${evt.tagBorder}` }}
                  >
                    <Tag className="w-3 h-3" />
                    <span>{evt.tag}</span>
                  </span>
                </div>

                {/* Date box */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2 text-center shadow min-w-[45px] sm:min-w-[50px]">
                  <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest" style={{ color: evt.accent }}>{evt.month}</div>
                  <div className="text-xl sm:text-2xl font-black leading-none text-slate-900">{evt.day}</div>
                </div>
              </div>

              {/* Colored top strip */}
              <div
                className="h-1.5"
                style={{ background: `linear-gradient(90deg, ${evt.stripFrom}, ${evt.stripTo})` }}
              />

              {/* Content */}
              <div className="flex-1 flex flex-col p-5 sm:p-6 gap-3 sm:gap-4">
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <h3
                    className="text-base sm:text-lg font-extrabold font-serif-gold leading-snug transition-colors duration-300"
                    style={{ color: hovered === idx ? evt.accent : '#0a192f' }}
                  >
                    {evt.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{evt.desc}</p>
                </div>

                {/* Meta details */}
                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: evt.accent }} />
                    <span className="truncate">{evt.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: evt.accent }} />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: evt.accent }} />
                    <span>{evt.participants}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
