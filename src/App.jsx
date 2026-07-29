import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OfficeBearers } from './components/OfficeBearers';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      <main>
        <Hero />
        <OfficeBearers />
        <Events />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
