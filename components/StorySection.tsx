import React from 'react';
import { COLORS, Icons } from '../constants.tsx';
import { OrbState } from '../types';
import Orb from './Orb';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="flex flex-col items-start p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-all">
    <div className="mb-6 text-purple-400">
      {icon}
    </div>
    <h4 className="text-xl font-playfair mb-3">{title}</h4>
    <p className="text-sm text-white/50 leading-relaxed font-light">{description}</p>
  </div>
);

const StorySection: React.FC = () => {
  return (
    <div id="story" className="relative z-10 w-full bg-[#2C0D36] border-t border-white/5">
      {/* Why Veira Exists */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400">Purpose</div>
              <h2 className="text-5xl md:text-7xl font-playfair leading-tight">Why Veira Exists</h2>
            </div>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              <p>
                Businesses are powerful. They move money, shape communities, and create stability. But most technology stops at efficiency and profit.
              </p>
              <p>
                Veira exists to do more. We give retail owners complete control, visibility, and certainty over their operations so they can focus on growth, not guesswork.
              </p>
              <p className="text-white font-medium italic">
                "We believe that when businesses are run better, they do more than generate revenue—they create safer, more stable communities."
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
             <Orb size={400} state={OrbState.ACTIVE} className="opacity-90" />
          </div>
        </div>
      </section>

      {/* Our Commitment - The 10% Pledge */}
      <section className="relative py-32 px-6 bg-black/40">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Structural Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair">Our Commitment</h2>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-purple-200 font-light leading-relaxed">
              We dedicate <span className="text-white font-bold">10% of our annual net profit</span> to organizations that work to prevent gender-based violence and support survivors.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-white/40 uppercase tracking-widest font-bold">
              <span>Not a one-off donation</span>
              <span className="hidden md:block">•</span>
              <span>Not a campaign</span>
              <span className="hidden md:block">•</span>
              <span className="text-purple-400">An ongoing structural commitment</span>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              The better Veira performs, the more we can fund prevention and support efforts. Our growth is directly tied to the safety and stability of the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-5xl font-playfair">Our Values</h2>
             <p className="text-white/50 max-w-xl mx-auto">Our actions are guided by the principles that define Veira, embedded in every product and interaction.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ValueCard 
              title="Be Kind"
              description="Empathy drives every interaction. We remain calm, human, and respectful even under pressure."
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              }
            />
            <ValueCard 
              title="Be Trusted"
              description="Security, reliability, and the absolute protection of our users' data is non-negotiable."
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              }
            />
            <ValueCard 
              title="Be Clear"
              description="Communicate simply, honestly, and directly. No ambiguity, no complex jargon."
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              }
            />
            <ValueCard 
              title="Be Bold"
              description="Innovate fearlessly and challenge the norm to deliver decisions that change businesses."
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              }
            />
            <ValueCard 
              title="Be Helpful"
              description="Anticipate problems before they are felt and deliver solutions that truly empower people."
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* How We Make an Impact */}
      <section className="relative py-32 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-playfair">How We Make an Impact</h2>
            <p className="text-white/50 text-lg font-light leading-relaxed">
              Veira’s growth directly fuels social good. When you grow with Veira, you’re not just building a better business—you’re contributing to a system that protects people.
            </p>
          </div>
          <div className="flex-1 grid gap-8">
            <div className="p-8 border-l border-purple-500/50 space-y-3">
              <h4 className="font-bold">Partnering for Change</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">Collaborating with organizations that prevent GBV and support survivors across Kenya and beyond.</p>
            </div>
            <div className="p-8 border-l border-purple-500/50 space-y-3">
              <h4 className="font-bold">Radical Transparency</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">Ensuring accountability in all our donations with public reporting tied to our business performance.</p>
            </div>
            <div className="p-8 border-l border-purple-500/50 space-y-3">
              <h4 className="font-bold">Purpose by Design</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">Embedding social responsibility into the way we design products and support our enterprise clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Message */}
      <section className="relative py-40 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <Orb size={64} state={OrbState.IDLE} className="mx-auto mb-12" />
          <h2 className="text-4xl md:text-5xl font-playfair leading-tight italic">
            Veira is more than a tool. <br />
            It’s a team, a system, and a mission.
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            We help businesses thrive and turn their success into lasting social impact.
          </p>
          <div className="pt-12">
            <button 
              className="px-12 py-5 font-bold text-white rounded text-lg shadow-xl transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: COLORS.ctaTeal }}
            >
              Join Our Mission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorySection;