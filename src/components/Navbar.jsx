import React, { useState, useEffect } from 'react';
import { Award, Menu, X } from 'lucide-react';
import { TopMarquee } from './TopMarquee';

const navItems = [
  { id: 'home', label: 'முகப்பு' },
  { id: 'bearers', label: 'நிர்வாகிகள்' },
  { id: 'events', label: 'நிகழ்ச்சிகள்' },
  { id: 'gallery', label: 'புகைப்படங்கள்' },
  { id: 'contact', label: 'தொடர்பு' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracking for active tab
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-xl shadow-slate-900/10">
      {/* Top Announcements Marquee */}
      <TopMarquee />

      {/* Main Navbar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'py-2.5 bg-white/95 border-b border-amber-500/30 backdrop-blur-xl shadow-md' 
            : 'py-4 bg-white/90 border-b border-slate-200/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo — Clean & Bold */}
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0a192f] rounded-[14px] flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-gold text-lg sm:text-xl font-extrabold tracking-tight text-[#0a192f] leading-none">
                  ரோட்டரி கிளப் சாயல்குடி
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-5 py-2 rounded-full text-xs font-black transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#0a192f] text-amber-400 shadow-md scale-105'
                      : 'text-slate-700 hover:text-amber-700 hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-900 hover:bg-amber-50 hover:text-amber-700 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 border-b border-amber-500/30 px-4 py-5 space-y-3 shadow-2xl backdrop-blur-xl animate-fadeIn mt-2">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-extrabold transition-all ${
                    activeSection === item.id
                      ? 'bg-[#0a192f] text-amber-400'
                      : 'text-slate-800 hover:bg-amber-50 hover:text-amber-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
