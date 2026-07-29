import React, { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';

const galleryCategories = [
  { id: 'all', name: 'அனைத்தும்' },
  { id: 'medical', name: 'மருத்துவ முகாம்' },
  { id: 'education', name: 'கல்வி உதவிகள்' },
  { id: 'environment', name: 'பசுமை & மரங்கள்' },
  { id: 'conference', name: 'மாநாடு & விழாக்கள்' },
];

const galleryItems = [
  {
    id: 1,
    category: 'medical',
    categoryName: 'மருத்துவ முகாம்',
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    caption: "இலவச கண் மருத்துவ முகாம் & சர்க்கரை நோய் பரிசோதனை",
    date: "ஜூன் 15, 2026",
    location: "சாயல்குடி அரசு மேல்நிலைப் பள்ளி",
    desc: "1,500 ஏழை பொதுமக்களுக்கு இலவச கண் பரிசோதனை மற்றும் கண்புரை அறுவை சிகிச்சைக்கான மருத்துவ ஆலோசனைகள் வழங்கப்பட்டன."
  },
  {
    id: 2,
    category: 'conference',
    categoryName: 'மாநாடு & விழாக்கள்',
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
    caption: "ரோட்டரி மாவட்ட மாநாடு & நிர்வாகிகள் பதவியேற்பு விழா",
    date: "ஜூலை 01, 2026",
    location: "ரோட்டரி மாவட்ட அரங்கம், மதுரை",
    desc: "ரோட்டரி ஆளுநர் தலைமையில் புதிய நிர்வாகிகள் பதவியேற்பு மாநாடு மிக விமரிசையாக நடைபெற்றது."
  },
  {
    id: 3,
    category: 'education',
    categoryName: 'கல்வி உதவிகள்',
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    caption: "ஏழை மாணவர்களுக்கு இலவச கணினி & கல்வி உபகரணங்கள்",
    date: "மே 20, 2026",
    location: "சாயல்குடி ஊராட்சி ஒன்றிய பள்ளி",
    desc: "50 மாணவ மாணவிகளுக்கு கல்வி உதவித்தொகை மற்றும் ஸ்மார்ட் வகுப்பறைக்கான கணினிகள் வழங்கி கவுரவிக்கப்பட்டது."
  },
  {
    id: 4,
    category: 'environment',
    categoryName: 'பசுமை & மரங்கள்',
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    caption: "பசுமை சாயல்குடி — 1,000 மரக்கன்றுகள் நடுதல் இயக்கம்",
    date: "ஏப்ரல் 22, 2026",
    location: "சாயல்குடி கிழக்கு கடற்கரை சாலை",
    desc: "பூமி தினத்தை முன்னிட்டு பொதுமக்கள் மற்றும் மாணவர்களுடன் இணைந்து 1,000 நிழல் தரும் மரக்கன்றுகள் நடப்பட்டன."
  },
  {
    id: 5,
    category: 'medical',
    categoryName: 'மருத்துவ முகாம்',
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
    caption: "மாபெரும் இரத்ததான முகாம் — 200 யூனிட் சேகரிப்பு",
    date: "மார்ச் 10, 2026",
    location: "சாயல்குடி ரோட்டரி சேவை மையம்",
    desc: "ரோட்டரி இளைஞர் விங் சார்பாக நடத்தப்பட்ட இரத்ததான முகாமில் 200 குருதிக்கொடைக் கொடையாளர்கள் பங்கேற்றனர்."
  },
  {
    id: 6,
    category: 'conference',
    categoryName: 'மாநாடு & விழாக்கள்',
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    caption: "End Polio Now — போலியோ ஒழிப்பு விழிப்புணர்வு பேரணி",
    date: "பிப்ரவரி 14, 2026",
    location: "சாயல்குடி நகர் வீதிகள்",
    desc: "போலியோ இல்லாத உலகை உருவாக்க விழிப்புணர்வு பேரணி மற்றும் சுவரொட்டி பிரச்சாரம் முன்னெடுக்கப்பட்டது."
  },
  {
    id: 7,
    category: 'education',
    categoryName: 'கல்வி உதவிகள்',
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    caption: "மாணவர் அறிவியல் திறன் கண்காட்சி & பரிசு கூப்பன்கள்",
    date: "ஜனவரி 26, 2026",
    location: "சாயல்குடி விவேகானந்தா அரங்கம்",
    desc: "15 கிராமப்புற அரசுப் பள்ளி மாணவர்களின் இளம் கண்டுபிடிப்புகளுக்கு பரிசு மற்றும் சான்றிதழ்கள் வழங்கப்பட்டன."
  },
  {
    id: 8,
    category: 'conference',
    categoryName: 'மாநாடு & விழாக்கள்',
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    caption: "சாயல்குடி ரோட்டரி நிர்வாகிகள் ஆலோசனைக் கூட்டம்",
    date: "ஜனவரி 10, 2026",
    location: "சாயல்குடி கிளப் ஹவுஸ்",
    desc: "ஆண்டு திட்டங்கள் மற்றும் சமூக சேவை பட்ஜெட் குறித்த நிர்வாகிகள் கலந்தாய்வுக் கூட்டம் சிறப்பாக நடைபெற்றது."
  }
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = galleryItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="relative py-14 sm:py-24 bg-white border-t border-slate-100">

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-gold text-[#0a192f] mb-3 sm:mb-4 leading-tight">
            புகைப்படக் <span className="gold-text-gradient">கேலரி</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-base font-medium leading-relaxed">
            சாயல்குடி ரோட்டரி சங்கத்தின் வரலாற்றுச் சிறப்புமிக்க சேவைகள் மற்றும் விழா பொன்னான தருணங்கள்
          </p>
          <div className="w-20 sm:w-24 h-1 mx-auto rounded-full gold-gradient-bg mt-4 sm:mt-5" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12 flex-wrap">
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0a192f] text-amber-400 shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-800 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-opacity duration-300 filter brightness-105" 
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Category Tag Top Left */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold text-amber-400 bg-black/40 backdrop-blur-md border border-amber-400/40 uppercase tracking-widest flex items-center gap-1 shadow-sm">
                  <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                  <span>{item.categoryName}</span>
                </span>
              </div>

              {/* Caption & Date Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-bold text-amber-400/90">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white font-serif-gold leading-snug line-clamp-2 group-hover:text-amber-300 transition-colors">
                  {item.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
