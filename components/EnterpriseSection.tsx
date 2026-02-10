
import React, { useState } from 'react';
import { COLORS, Icons } from '../constants.tsx';
import { OrbState } from '../types';
import Orb from './Orb';

const AgentCard: React.FC<{ name: string; role: string; points: string[]; orbState: OrbState }> = ({ name, role, points, orbState }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
    <div className="flex items-center gap-4 mb-6">
      <Orb size={48} state={orbState} />
      <div>
        <h4 className="text-xl font-playfair font-bold">{name}</h4>
        <div className="text-xs uppercase tracking-widest text-purple-400 font-bold">{role}</div>
      </div>
    </div>
    <ul className="space-y-4">
      {points.map((p, i) => (
        <li key={i} className="flex gap-3 text-sm text-white/70 leading-relaxed font-light">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 flex-shrink-0" />
          {p}
        </li>
      ))}
    </ul>
  </div>
);

const UseCaseCard: React.FC<{ title: string; description: string; benefits: string[] }> = ({ title, description, benefits }) => (
  <div className="p-8 border-l border-white/10 hover:border-purple-500/50 transition-colors">
    <h4 className="text-xl font-playfair mb-3">{title}</h4>
    <p className="text-sm text-white/60 mb-6 font-light">{description}</p>
    <ul className="space-y-2">
      {benefits.map((b, i) => (
        <li key={i} className="text-xs text-purple-300/80 flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-400 rounded-full" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-purple-300 transition-colors"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-white/60 leading-relaxed text-sm max-w-4xl">{answer}</p>
      </div>
    </div>
  );
};

const EnterpriseSection: React.FC = () => {
  return (
    <div id="enterprise" className="relative z-10 w-full bg-[#2C0D36]">
      {/* Hero / Intro */}
      <section className="relative py-32 px-6 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-8 text-left">
            <h2 className="font-playfair text-5xl md:text-7xl leading-tight">
              Run complex organizations with <span className="italic">clarity, control, and confidence.</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl">
              Whether you operate multiple offices, service centers, factories, or logistics networks in Kenya, Veira gives leaders full visibility, accountability, and actionable insights. Scale without losing control.
            </p>
            <button 
              className="group flex items-center gap-3 px-10 py-5 font-bold text-white rounded text-lg shadow-xl transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: COLORS.ctaTeal }}
            >
              Talk to Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="flex-1 relative flex justify-center">
            <Orb state={OrbState.IDLE} size={450} className="opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="200" width="100" height="150" stroke="white" strokeWidth="1" rx="4" />
                <rect x="200" y="100" width="120" height="250" stroke="white" strokeWidth="1" rx="4" />
                <rect x="400" y="150" width="100" height="200" stroke="white" strokeWidth="1" rx="4" />
                <path d="M100 200 Q300 50 500 150" stroke={COLORS.softWavePurple} strokeWidth="1" strokeDasharray="5 5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why Veira for Enterprise */}
      <section className="relative z-10 bg-black/20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-5xl font-playfair">Why Veira for Enterprise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Orb size={32} state={OrbState.ACTIVE} className="mb-4" />
              <h3 className="text-xl font-bold font-playfair">Centralized Oversight</h3>
              <p className="text-white/60 text-sm leading-relaxed">Monitor multiple sites, departments, or teams in real time with consolidated data on performance, resources, and outcomes.</p>
            </div>
            <div className="space-y-4">
              <Orb size={32} state={OrbState.SYNCING} className="mb-4" />
              <h3 className="text-xl font-bold font-playfair">AI-Driven Decisions</h3>
              <p className="text-white/60 text-sm leading-relaxed">Glenn and Achi handle calls, leads, and orders at scale while increasing efficiency automatically.</p>
            </div>
            <div className="space-y-4">
              <Orb size={32} state={OrbState.IDLE} className="mb-4" />
              <h3 className="text-xl font-bold font-playfair">Reliable Cloud Sync</h3>
              <p className="text-white/60 text-sm leading-relaxed">Secure, real-time synchronization ensures your data is accurate and protected across all Kenya locations instantly.</p>
            </div>
            <div className="space-y-4">
              <Orb size={32} state={OrbState.SUCCESS} className="mb-4" />
              <h3 className="text-xl font-bold font-playfair">Operational Certainty</h3>
              <p className="text-white/60 text-sm leading-relaxed">Automated reporting and workflow guidance reduce dependency on manual checks, keeping your expansion smooth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI Agents for Enterprise */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400">Intelligence Layers</div>
            <h2 className="text-4xl md:text-5xl font-playfair">AI Agents for Enterprise</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Enterprise-exclusive capabilities handling calls and leads to reduce workload and increase satisfaction.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <AgentCard 
              name="Glenn" 
              role="AI Operations Agent" 
              orbState={OrbState.ACTIVE}
              points={[
                "Resolves operational issues without constant oversight",
                "Supports staff with workflows, training, and guidance",
                "Guides teams in real time across multiple sites"
              ]} 
            />
            <AgentCard 
              name="Achi" 
              role="AI Sales & Marketing" 
              orbState={OrbState.SUCCESS}
              points={[
                "Follows up leads via calls, messages, or emails",
                "Optimizes revenue and tracks ROI per location",
                "Automates campaigns across departments"
              ]} 
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-playfair text-purple-200">Exclusive Voice & Call Management</h3>
              <p className="text-white/70 font-light">Reduce human workload while increasing responsiveness. Our AI agents handle inbound inquiries and outbound follow-ups across your entire organization.</p>
              <ul className="text-sm space-y-3 text-white/60">
                <li className="flex items-center gap-2">✓ Automated appointment scheduling & order confirmation</li>
                <li className="flex items-center gap-2">✓ Seamless call tracking and conversation syncing</li>
                <li className="flex items-center gap-2">✓ 24/7 lead engagement at enterprise scale</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full border border-purple-500/30 flex items-center justify-center animate-pulse">
                   <Icons.Sync className="text-purple-400 w-8 h-8" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Inbound AI</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full border border-purple-500/30 flex items-center justify-center">
                   <Icons.Sync className="text-purple-400 w-8 h-8 rotate-180" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Outbound AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cloud for Enterprise */}
      <section className="relative z-10 bg-white text-black py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-purple-600">Enterprise Core</div>
              <h2 className="text-4xl md:text-5xl font-playfair">Cloud for Enterprise</h2>
              <h3 className="text-2xl font-playfair text-gray-400 italic">Always Synced, Always Secure</h3>
            </div>
            <p className="text-xl text-gray-500 leading-relaxed">Veira Cloud connects all locations, teams, and devices into one reliable system. Consolidate your data without manual entry or delays.</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-sm uppercase mb-3 border-b pb-1">Key Benefits</h4>
                <ul className="text-sm text-gray-500 space-y-3">
                  <li>• Real-time synchronization</li>
                  <li>• Automatic backups & recovery</li>
                  <li>• Role-based access security</li>
                  <li>• Remote dashboard access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase mb-3 border-b pb-1">Use Cases</h4>
                <ul className="text-sm text-gray-500 space-y-3">
                  <li>• Multi-site consolidation</li>
                  <li>• Real-time compliance alerts</li>
                  <li>• Inventory & financial risk mitigation</li>
                  <li>• Global leadership access</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1">
             <div className="relative bg-gray-50 rounded-3xl p-12 border border-gray-100 shadow-sm flex items-center justify-center">
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M200 80 Q250 80 260 110 Q300 110 300 150 Q300 190 260 190 L140 190 Q100 190 100 150 Q100 110 140 110 Q150 80 200 80Z" stroke={COLORS.darkRoyalPurple} strokeWidth="2" fill={`${COLORS.darkRoyalPurple}10`} />
                  <rect x="50" y="240" width="40" height="60" rx="2" stroke="currentColor" />
                  <rect x="180" y="240" width="40" height="60" rx="2" stroke="currentColor" />
                  <rect x="310" y="240" width="40" height="60" rx="2" stroke="currentColor" />
                  <path d="M70 240 L120 160" stroke={COLORS.softWavePurple} strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_4s_infinite]" />
                  <path d="M200 240 L200 190" stroke={COLORS.softWavePurple} strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
                  <path d="M330 240 L280 160" stroke={COLORS.softWavePurple} strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_5s_infinite]" />
                </svg>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Apps for Enterprise */}
      <section className="relative z-10 bg-gray-50 text-black py-32 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-playfair">Apps for Enterprise</h2>
              <h3 className="text-2xl font-playfair text-gray-400 italic">Modern, Maintained, and Fully Managed</h3>
            </div>
            <p className="text-xl text-gray-500">Veira builds, modernizes, and maintains apps for your enterprise, so you never worry about updates, security, or usability.</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-white shadow-sm flex items-center justify-center font-bold text-purple-600">01</div>
                <div>
                  <h4 className="font-bold">Owner App</h4>
                  <p className="text-sm text-gray-500">Full oversight, alerts, remote approvals, and performance summaries.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-white shadow-sm flex items-center justify-center font-bold text-purple-600">02</div>
                <div>
                  <h4 className="font-bold">Staff App</h4>
                  <p className="text-sm text-gray-500">Fast, intuitive workflows with built-in guidance from Glenn.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-white shadow-sm flex items-center justify-center font-bold text-purple-600">03</div>
                <div>
                  <h4 className="font-bold">Customer App</h4>
                  <p className="text-sm text-gray-500">Loyalty programs, order tracking, and notifications powered by Achi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-[600px] flex items-center justify-center">
            <div className="absolute w-64 h-[500px] bg-white border border-gray-200 rounded-[3rem] shadow-2xl p-4 -rotate-12 translate-x-[-80px] z-0">
               <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden flex flex-col p-6">
                  <div className="w-8 h-8 rounded-full bg-purple-200 mb-4" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                  </div>
               </div>
            </div>
            <div className="absolute w-64 h-[500px] bg-white border border-gray-200 rounded-[3rem] shadow-2xl p-4 rotate-0 z-10">
               <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
                  <div className="h-48 bg-purple-600 flex items-center justify-center">
                    <Orb size={64} state={OrbState.ACTIVE} />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-1/2 bg-gray-100 rounded" />
                    <div className="h-20 w-full bg-gray-50 rounded" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Enterprise Use Cases */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-5xl font-playfair">Enterprise Use Cases</h2>
             <p className="text-white/60">Practical applications of Veira technology across large-scale operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-0 border border-white/10">
            <UseCaseCard 
              title="Multi-Site Oversight" 
              description="Monitor performance across offices, branches, service centers, or factories."
              benefits={["Consolidated daily insights", "Compare branch KPIs", "Identify risks instantly"]}
            />
            <UseCaseCard 
              title="Risk and Compliance" 
              description="Glenn flags irregular activity or compliance issues automatically via requests."
              benefits={["Audit-ready records", "Anomaly detection", "Corrective staff guidance"]}
            />
            <UseCaseCard 
              title="Sales & Lead Engagement" 
              description="Achi automates campaigns, calls, and follow-ups for higher ROI."
              benefits={["Real-time performance tracking", "Increased client engagement", "Automated marketing follow-ups"]}
            />
            <UseCaseCard 
              title="Voice & Call Management" 
              description="AI handles inbound and outbound calls for leads and partners."
              benefits={["Seamless interaction tracking", "Reduce human call-load", "Schedule appointments via AI"]}
            />
            <UseCaseCard 
              title="Remote Management" 
              description="Leaders view insights and exceptions from anywhere in the world."
              benefits={["Cloud-reliable data", "Real-time dashboards", "Off-site decision making"]}
            />
            <UseCaseCard 
              title="Logistics & Scaling" 
              description="Grow from 5 to 50 locations without doubling operational staff."
              benefits={["Automated logistics sync", "Centralized stock monitoring", "Scalable data architecture"]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section (SEO Optimized) */}
      <section className="relative z-10 py-32 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-playfair">Frequently Asked Questions</h2>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Everything you need to know about Veira Enterprise</p>
          </div>
          <div className="space-y-0">
            <FAQItem 
              question="What is the best POS system for multiple locations in Kenya?" 
              answer="Veira Enterprise is purpose-built for multi-location operations across Kenya. Unlike traditional POS systems, Veira's cloud infrastructure syncs inventory, sales, and staff data across all sites in real time. Glenn (our AI Operations Agent) guides teams across locations without constant oversight, making it ideal for retail chains, restaurant franchises, and logistics networks operating in Nairobi, Mombasa, Kisumu, and beyond."
            />
            <FAQItem 
              question="How much does a POS system cost in Kenya for enterprise businesses?" 
              answer="Veira Enterprise pricing starts at KES 15,000/month for small multi-location setups and scales with your operations. Unlike competitors charging per-terminal or per-register, Veira charges per-location or per-user, making it cost-effective as you grow. No setup fees, no hidden charges. AI automation saves staff hours and reduces errors, paying for itself through efficiency gains."
            />
            <FAQItem 
              question="Can I integrate a cloud POS system with my existing Kenya business tools?" 
              answer="Yes. Veira Cloud connects seamlessly with accounting software, CRM platforms, and payment gateways common in Kenya (M-Pesa, Pesapal, Equity Bank integration). Our API supports custom integrations, and Glenn automates workflows with your existing staff systems to ensure no disruption to operations."
            />
            <FAQItem 
              question="Which POS system is best for restaurants and bars in Kenya?" 
              answer="For restaurant chains and bars, Veira excels because Achi (our AI Sales Agent) automates reservations, order confirmations, and customer follow-ups via calls or WhatsApp. Real-time inventory sync prevents stockouts across multiple venues, and automated performance reports help you compare branch profitability in seconds."
            />
            <FAQItem 
              question="How do I choose between Veira and other POS software in Kenya?" 
              answer="Key differences include: (1) Real-time Cloud Sync across all locations, (2) Built-in AI Agents saving 20-30 staff hours/week, (3) Compliance-ready for KRA and local regulations, (4) No per-device fees, and (5) Native Mobile + Desktop apps that are always updated."
            />
            <FAQItem 
              question="Does Veira handle inbound and outbound sales calls in Kenya?" 
              answer="Yes. Achi (AI Sales Agent) makes and receives calls from customers, leads, and partners—all integrated into your POS. It confirms order details, schedules pickups, and logs interactions automatically, reducing manual entry for busy retail or restaurant staff."
            />
            <FAQItem 
              question="Is Veira suitable for small businesses scaling to enterprise in Kenya?" 
              answer="Perfect. Many Veira customers start with 1–2 locations and scale to 10+. The platform grows with you without requiring a re-implementation. AI agents mean you don't need to hire proportionally as you grow, keeping overhead low during expansion."
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-playfair">
            Scale your operations with clarity, protect your resources, empower your people.
          </h2>
          <button 
            className="px-16 py-6 font-bold text-white rounded text-xl shadow-xl transition-all hover:brightness-110 active:scale-95 mx-auto"
            style={{ backgroundColor: COLORS.ctaTeal }}
          >
            Talk to Us →
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSection;
