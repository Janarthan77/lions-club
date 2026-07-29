import React, { useState } from 'react';
import { BookOpen, Eye, Target, CheckCircle } from 'lucide-react';

export const About = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <section id="about" class="relative py-24 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-gold text-[#0a192f]">
            ரோட்டரி அமைப்பைப் பற்றி
          </h2>
          <p class="text-slate-600 text-sm sm:text-base font-medium">
            ‘Service Above Self’ — சுயநலமற்ற மனிதநேய சேவைக்காக அர்ப்பணிக்கப்பட்ட உலகளாவிய இயக்கம்
          </p>
          <div class="w-32 h-1.5 mx-auto rounded-full gold-gradient-bg mt-4"></div>
        </div>

        {/* Tab Switcher Buttons */}
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
          <button 
            onClick={() => setActiveTab('history')}
            class={`px-8 py-4 rounded-2xl font-extrabold text-sm flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
              activeTab === 'history' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/30 border-2 border-amber-400' 
                : 'bg-slate-50 text-slate-800 hover:text-amber-900 hover:bg-amber-50 border-2 border-amber-500/30'
            }`}
          >
            <BookOpen class="w-5 h-5" />
            <span>ரோட்டரி வரலாறு</span>
          </button>

          <button 
            onClick={() => setActiveTab('vision')}
            class={`px-8 py-4 rounded-2xl font-extrabold text-sm flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
              activeTab === 'vision' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/30 border-2 border-amber-400' 
                : 'bg-slate-50 text-slate-800 hover:text-amber-900 hover:bg-amber-50 border-2 border-amber-500/30'
            }`}
          >
            <Eye class="w-5 h-5" />
            <span>எங்கள் நோக்கம்</span>
          </button>

          <button 
            onClick={() => setActiveTab('mission')}
            class={`px-8 py-4 rounded-2xl font-extrabold text-sm flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
              activeTab === 'mission' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/30 border-2 border-amber-400' 
                : 'bg-slate-50 text-slate-800 hover:text-amber-900 hover:bg-amber-50 border-2 border-amber-500/30'
            }`}
          >
            <Target class="w-5 h-5" />
            <span>7 முக்கிய சேவைகள்</span>
          </button>
        </div>

        {/* Tab Content Cards */}
        <div class="bg-slate-50 p-8 sm:p-12 rounded-3xl border-2 border-amber-500/40 shadow-2xl relative">
          
          {activeTab === 'history' && (
            <div class="space-y-6">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div class="lg:col-span-7 space-y-5">
                  <h3 class="text-2xl sm:text-3xl font-extrabold font-serif-gold text-[#0a192f]">120+ ஆண்டுகள் சர்வதேச மனிதநேய சேவை பாரம்பரியம்</h3>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    1905-ஆம் ஆண்டு அமெரிக்காவின் சிகாகோ நகரில் திரு. பால் ஹாரிஸ் என்பவரால் தொடங்கப்பட்ட ரோட்டரி இயக்கம், இன்று உலகின் 200-க்கும் மேற்பட்ட நாடுகளில் 1.4 மில்லியனுக்கும் அதிகமான தொண்டர்களைக் கொண்ட உலகின் முன்னணி சர்வதேச மனிதநேய சேவை அமைப்பாகும்.
                  </p>
                  <p class="text-slate-700 leading-relaxed text-sm font-medium">
                    தமிழகத்தில் ரோட்டரி மாவட்டம் 3232, கடந்த 40 ஆண்டுகளுக்கும் மேலாக போலியோ ஒழிப்பு, இலவச கண் அறுவை சிகிச்சைகள், மருத்துவ நிதியுதவி மற்றும் கிராமப்புற குடிநீர் திட்டங்களை முன்னின்று நடத்தி வருகிறது.
                  </p>
                  <ul class="space-y-3 pt-2">
                    <li class="flex items-center gap-3 text-slate-900 text-sm font-bold">
                      <CheckCircle class="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>1905-இல் சர்வதேச அளவில் தொடங்கப்பட்ட மாபெரும் மக்கள் இயக்கம்</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-900 text-sm font-bold">
                      <CheckCircle class="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>உலகளவில் போலியோ நோயை 99.9% ஒழித்த வரலாற்று பெருமை</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-900 text-sm font-bold">
                      <CheckCircle class="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>மாவட்ட அளவில் 60-க்கும் மேற்பட்ட ரோட்டரி கிளப்கள் & 4,500+ உறுப்பினர்கள்</span>
                    </li>
                  </ul>
                </div>
                
                {/* Large Royal Image Frame */}
                <div class="lg:col-span-5 relative group">
                  <div class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div class="relative rounded-3xl overflow-hidden border-4 border-amber-500/60 shadow-2xl h-80 sm:h-96">
                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop" alt="Rotary History" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div class="space-y-6">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div class="lg:col-span-7 space-y-5">
                  <h3 class="text-2xl sm:text-3xl font-extrabold font-serif-gold text-[#0a192f]">ரோட்டரி தொலைநோக்கு (Vision)</h3>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    "நாம் அனைவரும் இணைந்து, உலகளவில் நீடித்த நேர்மறை மாற்றங்களை உருவாக்கி, மக்கள் நல்வாழ்விற்காக தமக்கென வாழாது பிறர்க்கென வாழும் சமுதாயத்தை உருவாக்குவதே ரோட்டரியின் அடிப்படை தொலைநோக்கு."
                  </p>
                  <p class="text-slate-700 leading-relaxed text-sm font-medium">
                    ரோட்டரியின் 4-வழி சோதனை (The Four-Way Test):
                    1. இது உண்மையானதா? 
                    2. இது அனைவருக்கும் நியாயமானதா? 
                    3. இது நல்லெண்ணத்தையும் நட்பையும் வளர்க்குமா? 
                    4. இது அனைவருக்கும் பயனளிக்குமா?
                  </p>
                  <ul class="space-y-3 pt-2">
                    <li class="flex items-center gap-3 text-slate-900 text-sm font-bold">
                      <CheckCircle class="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>சாதிகள், மதங்கள் மற்றும் எல்லைகளைக் கடந்த மனிதநேயப் பிணைப்பு</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-900 text-sm font-bold">
                      <CheckCircle class="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>சமூக மாற்றத்திற்கான இளம் தொழில்முனைவோர் உருவாக்கம்</span>
                    </li>
                  </ul>
                </div>
                
                {/* Large Royal Image Frame */}
                <div class="lg:col-span-5 relative group">
                  <div class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div class="relative rounded-3xl overflow-hidden border-4 border-amber-500/60 shadow-2xl h-80 sm:h-96">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" alt="Rotary Vision" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mission' && (
            <div class="space-y-6">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div class="lg:col-span-7 space-y-5">
                  <h3 class="text-2xl sm:text-3xl font-extrabold font-serif-gold text-[#0a192f]">ரோட்டரியின் 7 முக்கிய சேவைத் துறைகள் (Areas of Focus)</h3>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    1. அமைதி மற்றும் மோதல்கள் தடுப்பு (Peacebuilding & Conflict Prevention)
                  </p>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    2. நோய்த்தடுப்பு மற்றும் சிகிச்சை (Disease Prevention & Treatment - Polio Eradication)
                  </p>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    3. தூய்மை நீர் மற்றும் சுகாதாரம் (Water, Sanitation & Hygiene)
                  </p>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    4. தாய் மற்றும் சேய் நலம் (Maternal & Child Health)
                  </p>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    5. அடிப்படை கல்வி மற்றும் எழுத்தறிவு (Basic Education & Literacy)
                  </p>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    6. சமூக பொருளாதார வளர்ச்சி (Community Economic Development)
                  </p>
                  <p class="text-slate-700 leading-relaxed text-base font-medium">
                    7. சுற்றுச்சூழல் பாதுகாப்பு (Supporting the Environment)
                  </p>
                </div>
                
                {/* Large Royal Image Frame */}
                <div class="lg:col-span-5 relative group">
                  <div class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div class="relative rounded-3xl overflow-hidden border-4 border-amber-500/60 shadow-2xl h-80 sm:h-96">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" alt="Rotary Mission" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
