import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, Heart, Droplets, BookOpen } from 'lucide-react';

const heroSlidesData = [
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1920&auto=format&fit=crop",
    badge: "Service Above Self • சுயநலமற்ற மக்கள் சேவை",
    title: "ரோட்டரி கிளப் ஆஃப்",
    subtitle: "சாயல்குடி",
    tagline: "Rotary Club of Sayalgudi",
  },
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop",
    badge: "Community Care • சமூக நலன்",
    title: "ஏழை எளியோருக்கு",
    subtitle: "உதவும் கரங்கள்",
    tagline: "Helping Hands for the Needy",
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1920&auto=format&fit=crop",
    badge: "Youth Development • இளைஞர் மேம்பாடு",
    title: "இளைஞர்களின்",
    subtitle: "வாழ்வை மலரச் செய்வோம்",
    tagline: "Empowering Tomorrow's Leaders",
  },
];

const statsData = [
  { icon: Users, end: 500, suffix: '+', label: 'உறுப்பினர்கள்', sublabel: 'Active Members' },
  { icon: Heart, end: 1000, suffix: '+', label: 'சேவை நிகழ்வுகள்', sublabel: 'Service Events' },
  { icon: Droplets, end: 50, suffix: '+', label: 'இரத்ததான முகாம்கள்', sublabel: 'Blood Donation Camps' },
  { icon: BookOpen, end: 200, suffix: '+', label: 'கல்வி உதவிகள்', sublabel: 'Educational Support' },
];

// Count-up hook
function useCountUp(end, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [end, duration, started]);
  return count;
}

// Individual stat card with count-up
const StatCard = ({ stat, index, started }) => {
  const count = useCountUp(stat.end, 1800 + index * 150, started);
  const IconComp = stat.icon;

  return (
    <div className="group relative flex flex-col items-center justify-center py-5 px-2 sm:py-8 sm:px-6 overflow-hidden cursor-default select-none transition-all duration-300 hover:bg-amber-50">

      {/* Hover gold top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl gold-gradient-bg flex items-center justify-center mb-2 sm:mb-4 shadow-lg shadow-amber-300/30 group-hover:scale-110 group-hover:shadow-amber-400/40 transition-all duration-300">
        <IconComp className="w-4 h-4 sm:w-6 sm:h-6 text-[#0a192f]" strokeWidth={2.5} />
      </div>

      {/* Count */}
      <div className="flex items-end gap-0.5 mb-0.5 sm:mb-1">
        <span
          className="font-black text-[#0a192f] leading-none tabular-nums"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}
        >
          {count.toLocaleString()}
        </span>
        <span className="text-amber-500 font-black text-lg sm:text-2xl leading-none mb-0.5">{stat.suffix}</span>
      </div>

      {/* Tamil label */}
      <p className="text-[#0a192f] font-extrabold text-xs sm:text-sm text-center tracking-wide">{stat.label}</p>
      {/* English sublabel */}
      <p className="text-slate-400 font-semibold text-[10px] sm:text-xs text-center mt-0.5 tracking-wider">{stat.sublabel}</p>

      {/* Hover glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);

  // Trigger count-up when stats bar is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentIdx + 1) % heroSlidesData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const handleSlideChange = (newIdx) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIdx(newIdx);
      setIsAnimating(false);
    }, 350);
  };

  const nextSlide = () => handleSlideChange((currentIdx + 1) % heroSlidesData.length);
  const prevSlide = () => handleSlideChange((currentIdx - 1 + heroSlidesData.length) % heroSlidesData.length);

  const currentSlide = heroSlidesData[currentIdx];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-slate-900">

      {/* Background Image */}
      <div
        key={currentIdx}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${currentSlide.image}')`, transform: 'scale(1.03)' }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(5,10,30,0.78) 0%, rgba(5,10,30,0.55) 45%, rgba(5,10,30,0.25) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{
          background: 'linear-gradient(to top, rgba(5,10,30,0.95) 0%, transparent 100%)'
        }} />
      </div>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center z-10 pt-28 sm:pt-36 lg:pt-32 pb-12 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="max-w-5xl"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateY(18px)' : 'translateY(0)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-amber-400/50 text-amber-300 text-[11px] sm:text-xs font-extrabold tracking-wide shadow-lg mb-5 sm:mb-7">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
              <span className="truncate">{currentSlide.badge}</span>
            </div>

            {/* Tagline */}
            <p className="text-white/70 text-xs sm:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-3 drop-shadow">
              {currentSlide.tagline}
            </p>

            {/* Main Title */}
            <h1 className="font-serif-gold leading-tight drop-shadow-2xl">
              <span className="block font-extrabold text-white leading-snug" style={{ fontSize: 'clamp(1.35rem, 5vw, 3.8rem)' }}>
                {currentSlide.title}
              </span>
              <span className="block font-black gold-text-bright leading-tight mt-1" style={{ fontSize: 'clamp(1.7rem, 6.5vw, 4.8rem)', letterSpacing: '-0.01em' }}>
                {currentSlide.subtitle}
              </span>
            </h1>

          </div>
        </div>
      </div>

      {/* ─── Premium Stats Bar ─── */}
      <div ref={statsRef} className="relative z-20">
        {/* Gold top accent line */}
        <div className="relative h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600">
          
          {/* Mobile Navigation Arrows & Dots Centered Directly on the Orange Line */}
          <div className="sm:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-3 z-30 pointer-events-none">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="pointer-events-auto w-10 h-10 rounded-full bg-[#0a192f] border-2 border-amber-400 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center justify-center shadow-xl shadow-slate-950/60 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Mobile Slide Dots inside glass badge */}
            <div className="pointer-events-auto flex items-center gap-2 bg-[#0a192f]/90 px-3 py-1 rounded-full border border-amber-400/50 backdrop-blur-md shadow-lg">
              {heroSlidesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideChange(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentIdx ? '22px' : '6px',
                    height: '6px',
                    borderRadius: '99px',
                    background: idx === currentIdx ? '#f59e0b' : 'rgba(255,255,255,0.4)',
                    boxShadow: idx === currentIdx ? '0 0 10px rgba(245,158,11,0.8)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="pointer-events-auto w-10 h-10 rounded-full bg-[#0a192f] border-2 border-amber-400 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center justify-center shadow-xl shadow-slate-950/60 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

        <div className="bg-white shadow-2xl">
          {/* Subtle top tint overlay */}
          <div className="absolute inset-x-0 top-1 h-24 pointer-events-none" style={{
            background: 'linear-gradient(to bottom, rgba(251,191,36,0.04), transparent)'
          }} />

          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
              {statsData.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} started={statsStarted} />
              ))}
            </div>
          </div>

          {/* Subtle bottom shadow line */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
        </div>
      </div>

      {/* Desktop Slider Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 border border-white/25 text-white hover:bg-amber-500 hover:border-amber-500 hover:text-slate-950 transition-all items-center justify-center shadow-2xl cursor-pointer backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 border border-white/25 text-white hover:bg-amber-500 hover:border-amber-500 hover:text-slate-950 transition-all items-center justify-center shadow-2xl cursor-pointer backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Desktop Slide Dots */}
      <div className="hidden sm:flex absolute bottom-36 left-1/2 -translate-x-1/2 z-20 gap-2.5">
        {heroSlidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSlideChange(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentIdx ? '32px' : '8px',
              height: '8px',
              borderRadius: '99px',
              background: idx === currentIdx ? '#f59e0b' : 'rgba(255,255,255,0.35)',
              boxShadow: idx === currentIdx ? '0 0 12px rgba(245,158,11,0.7)' : 'none',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
};
