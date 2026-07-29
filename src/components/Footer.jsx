import React from 'react';
import { Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 relative">

      {/* Top gold bar accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">

          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl gold-gradient-bg p-0.5 shadow-sm">
              <div className="w-full h-full bg-[#0a192f] rounded-[9px] flex items-center justify-center">
                <Award className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div>
              <span className="font-serif-gold text-sm font-extrabold text-[#0a192f] block leading-tight">
                ரோட்டரி கிளப் சாயல்குடி
              </span>
              <span className="text-[10px] font-bold text-amber-600 tracking-wider uppercase block">
                சாயல்குடி
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 font-semibold text-center sm:text-right">
            <p>© {new Date().getFullYear()} ரோட்டரி கிளப் சாயல்குடி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
