
import React, { useState } from 'react';
import { COLORS, Icons } from '../constants.tsx';
import { SaleRecord } from '../types';

const CapabilityItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="py-6 border-b border-gray-100 last:border-0">
    <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-black">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const UseCaseItem: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 h-full">
    <div className="text-[10px] font-bold text-purple-600 uppercase tracking-[0.2em] mb-3">Use Case 0{number}</div>
    <h4 className="font-bold mb-2 text-black">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const POSView: React.FC = () => {
  const [sales] = useState<SaleRecord[]>([
    { id: 'TX-1029', timestamp: '14:21:05', items: 'Leather Satchel × 1', total: 189.00, status: 'synced' },
    { id: 'TX-1030', timestamp: '14:25:32', items: 'Cotton Scarf × 2', total: 45.50, status: 'synced' },
    { id: 'TX-1031', timestamp: '14:30:11', items: 'Silver Ring × 1', total: 120.00, status: 'pending' },
  ]);

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <div className="max-w-4xl w-full text-center mb-16 md:mb-24 space-y-8 px-6 relative z-10">
        <h2 className="text-4xl md:text-7xl font-playfair leading-tight text-black">
          Best POS Software for <br />
          <span className="italic text-purple-600">Supermarkets & Retail.</span>
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
          <p>Looking for an <strong>affordable POS system in Nairobi</strong>? Veira records every sale, payment, and stock movement, turning retail data into business intelligence.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-black pt-4">
            <span className="px-4 py-2 bg-gray-50 rounded">Mpesa Integrated POS</span>
            <span className="px-4 py-2 bg-gray-50 rounded">Live Inventory Management</span>
            <span className="px-4 py-2 bg-gray-50 rounded">Offline POS System Kenya</span>
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-6 md:p-12 rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 max-w-5xl w-[calc(100%-3rem)] md:w-full font-neue mb-32 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Cloud POS Solution</h2>
            <p className="text-gray-400 text-sm">Location: Nairobi CBD • Station: REG-01</p>
          </div>
          <div className="flex items-center gap-3 text-[10px] md:text-xs text-green-600 font-bold tracking-widest bg-green-50 px-4 py-2 rounded-full border border-green-100 shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            MPESA LINKED & SECURED
          </div>
        </div>

        <div className="space-y-4">
          <div className="hidden md:grid grid-cols-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-4">
            <div>Transaction ID</div>
            <div>Description</div>
            <div className="text-right">Total Price (KES)</div>
            <div className="text-right">Cloud Status</div>
          </div>

          <div className="space-y-2">
            {sales.map(sale => (
              <div key={sale.id} className="grid grid-cols-2 md:grid-cols-4 items-center p-4 rounded-xl border border-gray-50 md:border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-all duration-300 gap-2 md:gap-0">
                <div className="font-mono text-xs md:text-sm font-medium text-gray-500 order-1">{sale.id}</div>
                <div className="text-sm font-semibold order-3 md:order-2 col-span-2 md:col-span-1">{sale.items}</div>
                <div className="text-right font-bold text-base md:text-lg order-2 md:order-3">KES {sale.total.toLocaleString()}</div>
                <div className="text-right flex justify-end items-center gap-2 order-4">
                  <span className={`text-[8px] md:text-[9px] px-2 py-1 rounded font-bold uppercase tracking-widest ${sale.status === 'synced' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-400'}`}>
                    {sale.status}
                  </span>
                  {sale.status === 'synced' && <Icons.Sync className="w-3.5 h-3.5 text-purple-400 hidden md:block" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="w-full md:w-auto text-left">
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em] mb-2">Total Sales (Today)</div>
            <div className="text-4xl md:text-5xl font-bold tracking-tighter">KES 428,250</div>
          </div>
          
          <button 
            className="w-full md:w-auto px-10 md:px-16 py-5 md:py-6 font-bold text-white rounded shadow-2xl transition-all hover:brightness-110 active:scale-95 text-base md:text-lg"
            style={{ backgroundColor: COLORS.ctaTeal }}
          >
            BUY POS SYSTEM
          </button>
        </div>
        
        <p className="text-center text-[10px] text-gray-300 mt-8 md:mt-12 font-medium">
          Best POS system for retail shop Kenya. All-in-one POS system for cafe and restaurant management.
        </p>
      </div>

      <div className="max-w-7xl w-full px-6 mb-24 md:mb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h3 className="text-3xl font-playfair mb-6 text-black">Point of Sale System Features</h3>
              <p className="text-gray-500 leading-relaxed font-light">Veira offers the most advanced <strong>retail management system in Kenya</strong>, combining sales, stock, and staff activity.</p>
            </div>
            <div className="divide-y divide-gray-100">
              <CapabilityItem title="Mpesa Integration Kenya" description="Automated Mpesa reconciliation prevents theft and speeds up the checkout process for your customers." />
              <CapabilityItem title="POS system with inventory management" description="Track stock levels in real-time. Receive low-stock alerts and manage suppliers across Nairobi." />
              <CapabilityItem title="Cheap POS system for retail shop Kenya" description="Scale your business without high upfront costs. Veira works on existing tablets and phones." />
              <CapabilityItem title="Best POS software for supermarket" description="High-speed barcode scanning and multi-register support for high-traffic supermarkets in Kenya." />
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            <h3 className="text-3xl font-playfair text-black">Why Businesses Choose Veira</h3>
            <div className="grid gap-4 md:gap-6">
              <UseCaseItem number={1} title="Small Business Scaling" description="Best POS system for small business in Kenya looking to grow into multi-location enterprises." />
              <UseCaseItem number={2} title="Restaurant Management" description="Cloud-based POS system for restaurants in Nairobi with table management and kitchen display." />
              <UseCaseItem number={3} title="Offline Support" description="A POS system that works offline Kenya. Sales continue even when KPLC or Safaricom is down." />
              <UseCaseItem number={4} title="Inventory Control" description="Wireless POS machine for sale in Kenya with integrated inventory tracking to prevent shrinkage." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSView;
