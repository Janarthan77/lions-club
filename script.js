// Lions Club & Tamil Nadu Vanigar Sangam - Interactive JavaScript

// Translation Dictionary (English & Tamil)
const translations = {
  en: {
    // Navigation
    "nav.brand": "LIONS CLUB",
    "nav.subbrand": "Tamil Nadu Vanigar Sangam",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.bearers": "Office Bearers",
    "nav.membership": "Membership",
    "nav.events": "Events & Projects",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.login": "Member Login",
    
    // Hero Section
    "hero.badge": "Service with Integrity • அறம் செய்ய விரும்பு",
    "hero.title1": "Tamil Nadu",
    "hero.title2": "Vanigar Sangam & Lions Club",
    "hero.description": "Empowering business leaders, fostering community growth, and serving humanity through dedicated fellowship and social welfare initiatives across Tamil Nadu.",
    "hero.becomeMember": "Become a Member",
    "hero.contactUs": "Contact Us",
    "hero.stat1": "5,000+",
    "hero.stat1Label": "Active Members",
    "hero.stat2": "120+",
    "hero.stat2Label": "Service Projects",
    "hero.stat3": "45+",
    "hero.stat3Label": "District Chapters",
    "hero.stat4": "35+",
    "hero.stat4Label": "Years of Leadership",

    // About Section
    "about.title": "About Our Organization",
    "about.subtitle": "Dedicated to Business Excellence & Humanitarian Service",
    "about.historyTab": "Our History",
    "about.historyContent": "Founded with a vision to unite merchants, entrepreneurs, and community leaders across Tamil Nadu, our organization has grown into a powerful force for social good, trade advocacy, and community empowerment over the past three decades.",
    "about.visionTab": "Our Vision",
    "about.visionContent": "To build a thriving, ethical commercial ecosystem that protects merchant rights while driving sustainable community welfare and charitable initiatives statewide.",
    "about.missionTab": "Our Mission",
    "about.missionContent": "Providing unified representation for business owners, supporting underprivileged communities through healthcare and education, and fostering leadership among the youth.",

    // Office Bearers
    "bearers.title": "Executive Leadership",
    "bearers.subtitle": "Guiding Our Vision & Serving Our Members",
    "bearers.role1": "State President",
    "bearers.role2": "General Secretary",
    "bearers.role3": "Treasurer",
    "bearers.role4": "Vice President",

    // Membership Section
    "membership.title": "Join Our Prestigious Network",
    "membership.subtitle": "Unlock exclusive business opportunities, legal guidance, and community service initiatives.",
    "membership.tier1": "Executive Member",
    "membership.tier2": "Life Member",
    "membership.tier3": "Patron Member",
    "membership.popular": "Most Popular",
    "membership.applyBtn": "Apply for Membership",

    // Events Section
    "events.title": "Events & Service Projects",
    "events.subtitle": "Making a real impact in our communities every day",
    "events.filterAll": "All Projects",
    "events.filterService": "Community Service",
    "events.filterBusiness": "Business Meets",
    "events.filterMedical": "Health Camps",

    // Gallery Section
    "gallery.title": "Photo & Video Gallery",
    "gallery.subtitle": "Moments of service, celebration, and merchant unity",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have questions or want to partner with us? Reach out today.",
    "contact.addressTitle": "Headquarters Office",
    "contact.address": "124, Sangam Plaza, Anna Salai, Chennai, Tamil Nadu 600002",
    "contact.phoneTitle": "Phone Helpline",
    "contact.emailTitle": "Email Us",
    "contact.sendMsg": "Send Message",
    "contact.nameLabel": "Your Name",
    "contact.phoneLabel": "Phone Number",
    "contact.emailLabel": "Email Address",
    "contact.messageLabel": "Your Message",

    // Footer
    "footer.desc": "Tamil Nadu Vanigar Sangam & Lions Club - United for merchant growth, community service, and state development.",
    "footer.quickLinks": "Quick Links",
    "footer.rights": "All Rights Reserved.",
    "footer.privacy": "Privacy Policy & Terms"
  },
  ta: {
    // Navigation
    "nav.brand": "லயன்ஸ் கிளப்",
    "nav.subbrand": "தமிழ்நாடு வணிகர் சங்கம்",
    "nav.home": "முகப்பு",
    "nav.about": "எங்களைப் பற்றி",
    "nav.bearers": "நிருவாகிகள்",
    "nav.membership": "உறுப்பினர் சேர்க்கை",
    "nav.events": "நிகழ்ச்சிகள்",
    "nav.gallery": "புகைப்படங்கள்",
    "nav.contact": "தொடர்புகொள்ள",
    "nav.login": "உறுப்பினர் உள்நுழைவு",

    // Hero Section
    "hero.badge": "அறம் செய்ய விரும்பு • சமூக சேவை மற்றும் வணிக வளர்ச்சி",
    "hero.title1": "தமிழ்நாடு",
    "hero.title2": "வணிகர் சங்கம் & லயன்ஸ் கிளப்",
    "hero.description": "தமிழகம் முழுவதும் வணிகர்களின் நலன்களைப் பாதுகாக்கவும், ஏழை எளிய மக்களுக்கு மருத்துவ, கல்வி மற்றும் சமூக நல உதவிகளை வழங்கவும் இயங்கும் முன்னோடி அமைப்பு.",
    "hero.becomeMember": "உறுப்பினராக இணைய",
    "hero.contactUs": "தொடர்பு கொள்ள",
    "hero.stat1": "5,000+",
    "hero.stat1Label": "சிறப்பு உறுப்பினர்கள்",
    "hero.stat2": "120+",
    "hero.stat2Label": "சேவை திட்டங்கள்",
    "hero.stat3": "45+",
    "hero.stat3Label": "மாவட்ட கிளைகள்",
    "hero.stat4": "35+",
    "hero.stat4Label": "ஆண்டுகள் சேவை",

    // About Section
    "about.title": "எங்கள் அமைப்பைப் பற்றி",
    "about.subtitle": "வணிக சிறப்பு மற்றும் மனிதநேய சேவைக்காக அர்ப்பணிக்கப்பட்டது",
    "about.historyTab": "எங்கள் வரலாறு",
    "about.historyContent": "தமிழக வணிகர்களையும் சமூக தலைவர்களையும் ஒன்றுபடுத்தும் நோக்கத்துடன் தொடங்கப்பட்ட எங்கள் அமைப்பு, கடந்த மூன்று தசாப்தங்களாக வணிக உரிமைப் பாதுகாப்பு மற்றும் மக்கள் சேவையில் முன்னணியில் திகழ்கிறது.",
    "about.visionTab": "எங்கள் நோக்கம்",
    "about.visionContent": "வணிகர்களின் உரிமைகளைப் பாதுகாத்து, நேர்மையான வணிகச் சூழலை உருவாக்குவதுடன், மாநிலம் தழுவிய சமூக நலத் திட்டங்களை தடையின்றி செயல்படுத்துவது.",
    "about.missionTab": "எங்கள் பணி",
    "about.missionContent": "வணிகர்களுக்கு உடனடி சட்ட மற்றும் வணிக வழிகாட்டுதல் அளித்தல், நலிவடைந்த மக்களுக்கு கல்வி மற்றும் மருத்துவ உதவிகள் வழங்குதல், இளைஞர்களிடையே தலைமையை வளர்த்தல்.",

    // Office Bearers
    "bearers.title": "மாநில நிருவாகிகள்",
    "bearers.subtitle": "எங்கள் அமைப்பை சிறப்பாக வழிநடத்தும் நிருவாகக் குழு",
    "bearers.role1": "மாநிலத் தலைவர்",
    "bearers.role2": "பொதுச் செயலாளர்",
    "bearers.role3": "பொருளாளர்",
    "bearers.role4": "துணைத் தலைவர்",

    // Membership Section
    "membership.title": "எங்கள் மதிப்பிற்குரிய அமைப்பில் இணையுங்கள்",
    "membership.subtitle": "வணிக வளர்ச்சி, சிறப்பு வழிகாட்டுதல் மற்றும் சமூக சேவைகளில் பங்குபெறும் நல்வாய்ப்பு.",
    "membership.tier1": "செயற்குழு உறுப்பினர்",
    "membership.tier2": "ஆயுள் கால உறுப்பினர்",
    "membership.tier3": "காப்பாளர் உறுப்பினர்",
    "membership.popular": "மிகவும் பிரபலம்",
    "membership.applyBtn": "உறுப்பினராக விண்ணப்பிக்க",

    // Events Section
    "events.title": "நிகழ்ச்சிகள் & சேவைத் திட்டங்கள்",
    "events.subtitle": "தினசரி சமூகத்தில் நேர்மறையான மாற்றங்களை உருவாக்குகிறோம்",
    "events.filterAll": "அனைத்து திட்டங்கள்",
    "events.filterService": "சமூக சேவை",
    "events.filterBusiness": "வணிக மாநாடுகள்",
    "events.filterMedical": "மருத்துவ முகாம்கள்",

    // Gallery Section
    "gallery.title": "புகைப்படக் கேலரி",
    "gallery.subtitle": "எங்கள் சமூக சேவை மற்றும் வணிகர் நிகழ்வுகளின் பொன்னான தருணங்கள்",

    // Contact Section
    "contact.title": "தொடர்பு கொள்ள",
    "contact.subtitle": "எங்களுடன் இணைய அல்லது கேள்விகளுக்கு எங்களை தொடர்பு கொள்ளுங்கள்.",
    "contact.addressTitle": "தலைமை அலுவலகம்",
    "contact.address": "124, சங்கம் பிளாசா, அண்ணா சாலை, சென்னை, தமிழ்நாடு 600002",
    "contact.phoneTitle": "தொலைபேசி எண்",
    "contact.emailTitle": "மின்னஞ்சல்",
    "contact.sendMsg": "செய்தி அனுப்பவும்",
    "contact.nameLabel": "உங்கள் பெயர்",
    "contact.phoneLabel": "தொலைபேசி எண்",
    "contact.emailLabel": "மின்னஞ்சல் முகவரி",
    "contact.messageLabel": "உங்கள் செய்தி",

    // Footer
    "footer.desc": "தமிழ்நாடு வணிகர் சங்கம் & லயன்ஸ் கிளப் - வணிகர் வளர்ச்சி மற்றும் சமூக சேவைக்கான ஒருங்கிணைந்த சங்கம்.",
    "footer.quickLinks": "விரைவு இணைப்புகள்",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "footer.privacy": "தனியுரிமைக் கொள்கை & விதிகள்"
  }
};

let currentLang = 'ta'; // Default to Tamil as requested for TN Vanigar Sangam

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ta' : 'en';
  updateLanguageUI();
}

function updateLanguageUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  const langToggleBtn = document.getElementById('langToggleText');
  if (langToggleBtn) {
    langToggleBtn.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
  }
}

// Hero Slider Data & Logic
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1920&auto=format&fit=crop",
    titleKey: "hero.title2",
    descKey: "hero.description"
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop",
    titleKey: "hero.title2",
    descKey: "hero.description"
  },
  {
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920&auto=format&fit=crop",
    titleKey: "hero.title2",
    descKey: "hero.description"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop",
    titleKey: "hero.title2",
    descKey: "hero.description"
  }
];

let currentSlideIdx = 0;
let slideInterval = null;

function initHeroSlider() {
  const sliderBg = document.getElementById('heroBgSlide');
  const slideDotsContainer = document.getElementById('heroDots');

  if (!sliderBg) return;

  // Create dot indicators
  if (slideDotsContainer) {
    slideDotsContainer.innerHTML = heroSlides.map((_, idx) => `
      <button onclick="goToSlide(${idx})" class="w-3 h-3 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-amber-400 w-8' : 'bg-slate-500/50 hover:bg-slate-300'}" aria-label="Slide ${idx + 1}"></button>
    `).join('');
  }

  showSlide(0);
  startSlideTimer();
}

function showSlide(index) {
  currentSlideIdx = (index + heroSlides.length) % heroSlides.length;
  const sliderBg = document.getElementById('heroBgSlide');
  
  if (sliderBg) {
    sliderBg.style.backgroundImage = `url('${heroSlides[currentSlideIdx].image}')`;
  }

  // Update dots
  const dots = document.querySelectorAll('#heroDots button');
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIdx) {
      dot.className = "w-8 h-3 rounded-full bg-amber-400 transition-all duration-300 shadow-md shadow-amber-400/50";
    } else {
      dot.className = "w-3 h-3 rounded-full bg-slate-500/50 hover:bg-slate-300 transition-all duration-300";
    }
  });
}

function goToSlide(idx) {
  showSlide(idx);
  resetSlideTimer();
}

function nextSlide() {
  showSlide(currentSlideIdx + 1);
  resetSlideTimer();
}

function prevSlide() {
  showSlide(currentSlideIdx - 1);
  resetSlideTimer();
}

function startSlideTimer() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 6000);
}

function resetSlideTimer() {
  clearInterval(slideInterval);
  startSlideTimer();
}

// About Us Tab Logic
function switchAboutTab(tabId) {
  const tabs = ['history', 'vision', 'mission'];
  tabs.forEach(id => {
    const tabBtn = document.getElementById(`tabBtn-${id}`);
    const tabContent = document.getElementById(`tabContent-${id}`);

    if (tabBtn && tabContent) {
      if (id === tabId) {
        tabBtn.className = "px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2.5 transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 cursor-pointer";
        tabContent.classList.remove('hidden');
        tabContent.classList.add('block');
      } else {
        tabBtn.className = "px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2.5 transition-all duration-300 bg-slate-900/60 text-slate-300 hover:text-amber-400 hover:bg-slate-800/80 border border-amber-500/20 cursor-pointer";
        tabContent.classList.remove('block');
        tabContent.classList.add('hidden');
      }
    }
  });
}

// Modal Handlers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Gallery Lightbox Modal
function openGalleryLightbox(imgSrc, title) {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (lightbox && lightboxImg) {
    lightboxImg.src = imgSrc;
    if (lightboxCaption) lightboxCaption.textContent = title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenuDrawer');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border transition-all duration-300 transform translate-y-10 opacity-0 ${
    type === 'success' ? 'bg-slate-900 border-amber-500/60 text-amber-400' : 'bg-red-950 border-red-500/60 text-red-300'
  }`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 text-amber-400"></i>
    <span class="font-medium text-sm text-slate-100">${message}</span>
  `;
  document.body.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Form Submit Event Handlers
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Initialize Language
  updateLanguageUI();

  // Initialize Hero Slider
  initHeroSlider();

  // Form Submissions
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('loginModal');
      showToast(currentLang === 'ta' ? 'வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்!' : 'Logged in successfully!');
    });
  }

  const memberForm = document.getElementById('becomeMemberForm');
  if (memberForm) {
    memberForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('memberModal');
      showToast(currentLang === 'ta' ? 'உங்கள் விண்ணப்பம் பெறப்பட்டது! விரைவில் தொடர்பு கொள்கிறோம்.' : 'Application submitted successfully! We will contact you soon.');
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
      showToast(currentLang === 'ta' ? 'உங்கள் செய்தி அனுப்பப்பட்டது. நன்றி!' : 'Your message has been sent. Thank you!');
    });
  }

  // ESC Key listener to close active modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = 'auto';
    }
  });

  // Header Blur on Scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbarHeader');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-slate-950/95', 'shadow-2xl', 'shadow-amber-500/5', 'border-amber-500/30');
        navbar.classList.remove('bg-slate-950/70');
      } else {
        navbar.classList.remove('bg-slate-950/95', 'shadow-2xl', 'shadow-amber-500/5');
        navbar.classList.add('bg-slate-950/70');
      }
    }
  });
});
