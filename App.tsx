
import React, { useState, useEffect } from 'react';
import { COLORS, Icons } from './constants.tsx';
import { OrbState } from './types';
import Orb from './components/Orb';
import WaveBackground from './components/WaveBackground';
import POSView from './components/POSView';
import EnterpriseSection from './components/EnterpriseSection';
import CloudSection from './components/CloudSection';
import StorySection from './components/StorySection';
import AgentsSection from './components/AgentsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [orbState, setOrbState] = useState<OrbState>(OrbState.IDLE);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    
    const sequence = [
      { state: OrbState.SYNCING, delay: 1500 },
      { state: OrbState.ACTIVE, delay: 4000 }
    ];

    sequence.forEach((step, i) => {
      setTimeout(() => setOrbState(step.state), step.delay);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center bg-[#2C0D36] selection:bg-teal-500/30">
      <WaveBackground opacity={scrolled ? 0.05 : 0.12} />

      <header className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 py-6 ${scrolled ? 'bg-white/95 backdrop-blur-xl translate-y-0 shadow-sm' : 'bg-transparent translate-y-2'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            className={`flex items-center gap-3 group cursor-pointer transition-colors duration-500 text-black`}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <Orb size={32} state={orbState} interactive={false} />
            <span className="font-didot text-2xl tracking-tighter font-bold lowercase">veira</span>
          </div>
          
          <nav className={`hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-500 text-black/60`}>
            <a href="#retail-pos-system-kenya" className="hover:text-purple-600 transition-colors">POS</a>
            <a href="#agents" className="hover:text-purple-600 transition-colors">AI Agents</a>
            <a href="#cloud-pos-system-kenya" className="hover:text-purple-600 transition-colors">Cloud</a>
            <a href="#enterprise-pos-solution" className="hover:text-purple-600 transition-colors">Enterprise</a>
            <a href="#our-story" className="hover:text-purple-600 transition-colors">Our Story</a>
            <a 
              href="#contact" 
              className={`px-6 py-2 rounded-full border transition-all border-black/10 hover:bg-black text-white bg-black`}
            >
              Get Started
            </a>
          </nav>
          
          <div className={`lg:hidden text-black`}>
            <Icons.Menu className="w-6 h-6" />
          </div>
        </div>
      </header>

      <main className="w-full relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-purple-100/40 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="max-w-5xl space-y-10 relative z-10">
            <h1 className="font-playfair text-6xl md:text-9xl tracking-tight leading-[0.9] text-black">
              Best POS System <br /> in <span className="italic text-purple-600 font-didot">Kenya.</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto font-light leading-relaxed">
              Buy the leading <strong>retail POS system in Kenya</strong>. Veira gives owners complete visibility and certainty over sales, profits, and operations in Nairobi and beyond.
            </p>
            
            <div className="pt-10">
              <button 
                className="px-14 py-6 font-bold text-white rounded-full text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto"
                style={{ backgroundColor: COLORS.ctaTeal }}
              >
                BUY POS SYSTEM NOW
                <Icons.ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-16 flex flex-col items-center gap-6 transition-opacity duration-1000 delay-500">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">As Featured on Product Hunt</span>
              <a href="https://www.producthunt.com/products/veira-kenya/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-veira&#0045;kenya" target="_blank" className="hover:opacity-80 transition-opacity">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1151101&theme=neutral" alt="Veira Kenya - The POS system with inventory management Kenya | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
            <div className="w-px h-12 bg-black" />
          </div>
        </section>

        <section id="retail-pos-system-kenya" className="bg-white text-black py-40 flex flex-col items-center px-6">
          <POSView />
        </section>

        <section id="agents" className="scroll-mt-20">
          <AgentsSection />
        </section>
        
        <section id="cloud-pos-system-kenya" className="scroll-mt-20">
          <CloudSection />
        </section>

        <section id="enterprise-pos-solution" className="scroll-mt-20">
          <EnterpriseSection />
        </section>

        <section id="our-story" className="scroll-mt-20">
          <StorySection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
