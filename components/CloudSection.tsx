
import React from 'react';
import { COLORS, Icons } from '../constants.tsx';
import { OrbState } from '../types';
import Orb from './Orb';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-all group">
    <div className="mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h4 className="text-xl font-playfair mb-3">{title}</h4>
    <p className="text-sm text-white/50 leading-relaxed font-light">{description}</p>
  </div>
);

const CloudSection: React.FC = () => {
  return (
    <section id="cloud" className="relative z-10 w-full bg-[#2C0D36] py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section of Cloud */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400">Backbone Infrastructure</div>
              <h2 className="text-5xl md:text-7xl font-playfair leading-tight">
                Veira Cloud <br />
                <span className="italic text-purple-300">Your Business Always Connected</span>
              </h2>
            </div>
            <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl">
              Veira Cloud is the backbone of your business. It keeps your operations seamless, your data secure, and your business ready to grow. With Veira Cloud, your shop works online or offline, anywhere, anytime.
            </p>
            <div className="pt-4">
              <button 
                className="px-10 py-5 font-bold text-white rounded text-lg shadow-xl transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: COLORS.ctaTeal }}
              >
                JOIN THE WAITLIST
              </button>
            </div>
          </div>
          <div className="flex-1 relative flex justify-center items-center">
            {/* Cloud Visualization */}
            <div className="relative">
              <Orb state={OrbState.SYNCING} size={380} className="z-10" />
              <div className="absolute -inset-10 opacity-20 animate-[spin_30s_linear_infinite] pointer-events-none">
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
                  <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="0.5" strokeDasharray="5 20" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Why Cloud Matters */}
        <div className="bg-black/20 p-12 md:p-20 rounded-[3rem] border border-white/5 mb-32 relative z-10">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-playfair mb-6">Why Veira Cloud Matters</h3>
            <p className="text-lg text-white/60 leading-relaxed font-light">
              Most POS systems tie you to a single device or location. Veira Cloud frees you from those limits. It gives you real-time insights, automatic backups, and multi-device access so you can manage your business on your terms.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 relative z-10">
          <FeatureCard 
            title="Automatic Cloud Backup"
            description="Never lose a sale or a record. Your data is always safe and recoverable with multi-region redundancy."
            icon={<Icons.Sync className="w-8 h-8" />}
          />
          <FeatureCard 
            title="Online and Offline Access"
            description="Sell even when the internet is down. Veira Cloud syncs automatically when you reconnect, preserving every transaction."
            icon={<Icons.Cloud className="w-8 h-8" />}
          />
          <FeatureCard 
            title="Multi-Device & Multi-User"
            description="Access your business data from any device and control staff permissions effortlessly from one central hub."
            icon={<Icons.Dashboard className="w-8 h-8" />}
          />
          <FeatureCard 
            title="Seamless Integration"
            description="Works natively with Glenn, Achi, and Tiri. Your AI tools always have the data they need to keep you moving."
            icon={<Icons.Sync className="w-8 h-8 rotate-90" />}
          />
          <FeatureCard 
            title="Security You Can Trust"
            description="Encryption, tamper-proof records, and compliance-ready storage ensure your business is audit-ready."
            icon={<Icons.Protection className="w-8 h-8 opacity-50" />}
          />
           <FeatureCard 
            title="Global Performance"
            description="Powered by a global network to ensure sub-millisecond latency for your staff and customers."
            icon={<Icons.Sync className="w-8 h-8 animate-pulse" />}
          />
        </div>

        {/* Agent Interaction Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-playfair mb-8">How Veira Cloud Powers Intelligence</h3>
              <p className="text-white/50 font-light leading-relaxed">Veira Cloud is not just storage. It is the central nervous system for your business. It makes your data accessible, actionable, and secure for Glenn, Achi, and Tiri to process.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Icons.Protection className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Tiri</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Tiri uses cloud data to provide accurate daily performance reports and detect fraud trends across all locations instantly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black/40 rounded-[2rem] p-12 border border-white/5 relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h4 className="text-2xl font-playfair">The Veira Cloud Difference</h4>
              <p className="text-white/60 leading-relaxed font-light">
                Allows your business to scale, stay compliant, and remain in control without extra effort. It turns simple data into competitive intelligence.
              </p>
              <div className="h-px w-full bg-white/10 my-8" />
              <div className="flex justify-between items-center">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-purple-400">System Integrity: 100%</div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse delay-150" />
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSection;
