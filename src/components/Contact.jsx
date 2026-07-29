import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-white border-t border-slate-100">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-serif-gold text-[#0a192f] mb-4 leading-tight">
            தொடர்பு <span className="gold-text-gradient">கொள்ள</span>
          </h2>
          <p className="text-slate-500 text-base font-medium leading-relaxed">
            சாயல்குடி ரோட்டரி சங்கம் — எங்களை தொடர்புகொள்ளும் விவரங்கள்
          </p>
          <div className="w-24 h-1 mx-auto rounded-full gold-gradient-bg mt-5" />
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left: Unified Contact Info Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm flex flex-col justify-center space-y-8">

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100/70 border border-amber-300 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-amber-700">முகவரி</p>
                <p className="text-base font-extrabold text-[#0a192f] leading-snug">ரோட்டரி கிளப் சாயல்குடி</p>
                <p className="text-sm font-semibold text-slate-600">மதுரை மாவட்டம், தமிழ்நாடு — 623 516</p>
              </div>
            </div>

            <div className="h-px bg-slate-200/80" />

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 border border-emerald-300 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="space-y-1 flex flex-col">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">தொலைபேசி</p>
                <a href='tel:+919876543210' title='+91 98765 43210' className="text-base font-extrabold text-[#0a192f]">+91 98765 43210</a>
                <a href='tel:+914428543210' title='+91 44 2854 3210' className="text-sm font-semibold text-slate-600">+91 44 2854 3210</a>
              </div>
            </div>

            <div className="h-px bg-slate-200/80" />

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100/70 border border-blue-300 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <div className="space-y-1 flex flex-col">
                <p className="text-xs font-black uppercase tracking-widest text-blue-700">மின்னஞ்சல்</p>
                <a href='mailto:sayalgudi@rotary.org' title='sayalgudi@rotary.org' className="text-base font-extrabold text-[#0a192f]">sayalgudi@rotary.org</a>
                <a href='mailto:info@rotarysayalgudi.org' title='info@rotarysayalgudi.org' className="text-sm font-semibold text-slate-600">info@rotarysayalgudi.org</a>
              </div>
            </div>

          </div>

          {/* Right: Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 min-h-[380px]">
            <iframe
              title="Sayalgudi Map"
              src="https://maps.google.com/maps?q=Sayalkudi,Tamil+Nadu&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
