import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Tag } from 'lucide-react';

export const LightboxModal = ({ selectedImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, onClose]);

  if (!selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button top right */}
      <button 
        onClick={onClose} 
        aria-label="Close modal"
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 border border-white/20 hover:border-amber-500 text-white hover:text-slate-950 transition-all duration-200 flex items-center justify-center shadow-2xl z-20 cursor-pointer backdrop-blur-md"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal card */}
      <div 
        className="relative max-w-4xl w-full bg-[#0a192f] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image Container */}
        <div className="md:w-3/5 relative bg-slate-950 flex items-center justify-center min-h-[300px] max-h-[60vh] md:max-h-[80vh]">
          <img 
            src={selectedImage.image} 
            alt={selectedImage.caption} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right: Details Container */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#0a192f] to-[#060e20] text-white border-t md:border-t-0 md:border-l border-amber-500/20 overflow-y-auto">
          
          <div className="space-y-4">
            {/* Category Tag */}
            {selectedImage.categoryName && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 w-fit">
                <Tag className="w-3.5 h-3.5" />
                <span>{selectedImage.categoryName}</span>
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold font-serif-gold text-white leading-snug">
              {selectedImage.caption}
            </h3>

            {/* Date & Location */}
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs font-semibold text-white/70">
              {selectedImage.date && (
                <div className="flex items-center gap-2 text-amber-400">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>{selectedImage.date}</span>
                </div>
              )}
              {selectedImage.location && (
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  <span>{selectedImage.location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {selectedImage.desc && (
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed pt-2 border-t border-slate-800">
                {selectedImage.desc}
              </p>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-white/40 font-semibold">
            <span>ரோட்டரி கிளப் சாயல்குடி</span>
          </div>

        </div>

      </div>
    </div>
  );
};
