
import React from 'react';
import { OrbState } from '../types';
import Orb from './Orb';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full border-t border-white/10 py-20 px-6 mt-auto bg-[#2C0D36] relative z-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-white">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <Orb size={24} state={OrbState.IDLE} />
            <span className="font-didot text-xl font-bold">veira</span>
          </div>
          <p className="text-white/40 max-w-sm font-light leading-relaxed">
            The best POS system Kenya for retail owners seeking complete control and inventory visibility. Buy POS system Kenya today.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Twitter</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
          </div>
          <div className="pt-6">
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-3">Service Locations</h5>
             <p className="text-[11px] text-white/30 leading-relaxed">Nairobi • Mombasa • Kisumu • Nakuru • Eldoret • Thika • Malindi</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-white/50">POS Solutions</h4>
          <ul className="space-y-2 text-sm text-white/70 font-light">
            <li><a href="#retail-pos-system-kenya" className="hover:text-purple-300 transition-colors">Retail POS Software</a></li>
            <li><a href="#retail-pos-system-kenya" className="hover:text-purple-300 transition-colors">Restaurant POS System</a></li>
            <li><a href="#cloud-pos-system-kenya" className="hover:text-purple-300 transition-colors">Cloud POS Software</a></li>
            <li><a href="#enterprise-pos-solution" className="hover:text-purple-300 transition-colors">Supermarket POS Kenya</a></li>
            <li><a href="#retail-pos-system-kenya" className="hover:text-purple-300 transition-colors">POS Machine Price Kenya</a></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-white/50">Company</h4>
          <ul className="space-y-2 text-sm text-white/70 font-light">
            <li><a href="#our-story" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">POS Suppliers Kenya</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
        <div className="flex items-center gap-4">
          <span>&copy; 2024 Veira Systems Kenya.</span>
          <span className="hidden md:block text-white/10">|</span>
          <span className="text-purple-400/50">Buy the Best POS System in Nairobi</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white/50">POS System Kenya Cost & Comparison</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
