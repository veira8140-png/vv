
import React from 'react';
import { COLORS, Icons } from '../constants.tsx';
import { OrbState } from '../types';
import Orb from './Orb';

const AgentCard: React.FC<{ 
  name: string; 
  title: string; 
  role: string;
  description: string; 
  handles: string[]; 
  useCases: { title: string; scenario: string; solution: string }[];
  orbState: OrbState;
  colorClass: string;
  icon: React.ReactNode;
}> = ({ name, title, role, description, handles, useCases, orbState, colorClass, icon }) => (
  <div className="flex flex-col bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 lg:p-12 hover:bg-white/[0.05] transition-all group h-full">
    <div className="flex items-center gap-6 mb-10">
      <div className="relative">
        <Orb size={80} state={orbState} />
        <div className={`absolute inset-0 flex items-center justify-center text-white ${colorClass}`}>
          {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 stroke-[1.5]" })}
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-playfair font-bold">{name}</h3>
        <p className={`text-[10px] uppercase tracking-[0.3em] font-bold ${colorClass}`}>{title}</p>
        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{role}</p>
      </div>
    </div>
    
    <div className="space-y-12 flex-grow">
      <div>
        <p className="text-xl text-white/90 font-light leading-relaxed mb-6">
          {description}
        </p>
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-6">What {name} does</h4>
        <ul className="grid gap-4">
          {handles.map((item, i) => (
            <li key={i} className="flex gap-4 text-sm text-white/60 font-light items-start">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-current ${colorClass}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-10 border-t border-white/5">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-8">{name} Use Cases</h4>
        <div className="space-y-8">
          {useCases.map((uc, i) => (
            <div key={i} className="group/item">
              <div className="text-xs font-bold text-white/80 mb-2">{uc.title}</div>
              <p className="text-xs text-white/40 leading-relaxed italic mb-2">"{uc.scenario}"</p>
              <p className="text-sm text-white/70 leading-relaxed">{uc.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AgentsSection: React.FC = () => {
  return (
    <section id="agents" className="relative z-10 w-full bg-[#2C0D36] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="max-w-4xl mb-32 space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="text-xs font-bold tracking-[0.4em] uppercase text-purple-400">The Intelligence Core</div>
            <h2 className="text-5xl md:text-8xl font-playfair leading-[1.1]">
              Veira is not <br />
              <span className="italic text-purple-300">just software.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-xl text-white/60 leading-relaxed font-light">
              <p>Veira is not a POS. It is not accounting software. It is not a dashboard you must check every day.</p>
              <p>Veira runs your business through three AI agents, each with a clear responsibility, all working from the same source of truth.</p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-white text-xl font-medium border-l-2 border-purple-500/30 pl-8 py-2">
                They do not wait for instructions. <br />
                They observe, act, and report automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-40 relative z-10">
          <AgentCard 
            name="Glenn"
            title="AI Support Agent"
            role="Keeps the business running"
            description="Glenn handles day to day operational friction so the business does not slow down."
            orbState={OrbState.ACTIVE}
            colorClass="text-purple-400"
            icon={<Icons.Support />}
            handles={[
              "Answers staff questions about products, pricing, workflows, and system usage",
              "Helps new employees learn faster without constant supervision",
              "Responds to customer inquiries on WhatsApp and internal tools",
              "Explains alerts and issues raised by Tiri in simple language",
              "Reduces mistakes caused by misunderstanding or poor training"
            ]}
            useCases={[
              { 
                title: "New cashier on day one", 
                scenario: "A new staff member is unsure how to apply a discount or process a return.", 
                solution: "Glenn guides them step by step, no manager needed." 
              },
              { 
                title: "Staff confusion during rush hour", 
                scenario: "During peak hours, staff ask repetitive questions.", 
                solution: "Glenn answers instantly, keeping the line moving." 
              },
              { 
                title: "Owner unavailable", 
                scenario: "The owner is away.", 
                solution: "Staff still get answers, support continues, operations do not stall." 
              }
            ]}
          />

          <AgentCard 
            name="Achi"
            title="AI Sales and Marketing Agent"
            role="Makes the business grow"
            description="Achi is responsible for revenue growth, customer engagement, and follow ups."
            orbState={OrbState.SUCCESS}
            colorClass="text-teal-400"
            icon={<Icons.Growth />}
            handles={[
              "Runs promotions and campaigns",
              "Follows up leads and customers automatically on WhatsApp",
              "Encourages repeat visits and upsells",
              "Analyzes sales trends and suggests what to push",
              "Helps create marketing messages that convert"
            ]}
            useCases={[
              { 
                title: "Dormant customers", 
                scenario: "Customers who have not visited in 30 days.", 
                solution: "Automatically receive a WhatsApp message with a targeted offer." 
              },
              { 
                title: "Slow moving products", 
                scenario: "Achi detects items not selling.", 
                solution: "Launches a promotion to move them before they expire or go stale." 
              },
              { 
                title: "Lead follow up", 
                scenario: "A customer asks for prices but does not buy.", 
                solution: "Achi follows up politely and converts interest into sales." 
              }
            ]}
          />

          <AgentCard 
            name="Tiri"
            title="AI Manager Agent"
            role="Watches and protects the money"
            description="Tiri monitors the entire business continuously and reports directly to the owner on WhatsApp."
            orbState={OrbState.SYNCING}
            colorClass="text-purple-300"
            icon={<Icons.Protection />}
            handles={[
              "Sends daily sales reports on WhatsApp automatically",
              "Breaks down cash vs digital payments",
              "Tracks performance trends and anomalies",
              "Detects fraud, theft, and suspicious behavior",
              "Monitors inventory movement and shrinkage",
              "Flags compliance and reporting risks"
            ]}
            useCases={[
              { 
                title: "Daily WhatsApp sales report", 
                scenario: "Every evening, the owner receives a summary on WhatsApp.", 
                solution: "Shows sales, payment breakdown, comparison to yesterday, and red flags." 
              },
              { 
                title: "Cash leakage detection", 
                scenario: "Tiri notices sales activity without corresponding cash entries.", 
                solution: "She flags it immediately before losses grow." 
              },
              { 
                title: "Inventory theft", 
                scenario: "Stock is reducing faster than sales justify.", 
                solution: "Tiri alerts the owner and explains where the mismatch started." 
              }
            ]}
          />
        </div>

        {/* How they work together */}
        <div className="bg-black/30 rounded-[3rem] p-12 lg:p-20 border border-white/5 relative overflow-hidden mb-32">
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-playfair mb-12">How the agents work together</h3>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-16">
              Veira agents are not separate tools. They share context and reinforce each other, creating a closed loop of support, growth, and control.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="space-y-4 relative">
                <div className="text-xs font-bold text-purple-300 uppercase tracking-widest">01. Monitor</div>
                <p className="text-sm text-white/50 leading-relaxed">Tiri detects a risk or abnormal behavior in the system.</p>
              </div>
              <div className="space-y-4 relative">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-widest">02. Correct</div>
                <p className="text-sm text-white/50 leading-relaxed">Glenn helps staff correct it on the ground in real-time.</p>
              </div>
              <div className="space-y-4 relative">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-widest">03. Optimize</div>
                <p className="text-sm text-white/50 leading-relaxed">Achi adjusts campaigns based on real performance data.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What this means for owners */}
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h3 className="text-3xl md:text-5xl font-playfair">What this means for business owners</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              "You get daily sales on WhatsApp without asking",
              "You detect fraud early instead of after losses",
              "You grow revenue without constant marketing effort",
              "You stop micromanaging staff",
              "You stay in control even when you are not present"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span className="text-white/80 font-light">{text}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-8 pt-12">
            <p className="text-2xl font-playfair italic text-white/70">
              "Veira does not give you more work. It removes it."
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.3em]">
              <span className="text-purple-400">Glenn runs operations</span>
              <span className="text-teal-400">Achi drives growth</span>
              <span className="text-purple-300">Tiri protects and reports</span>
            </div>
            <p className="text-white text-lg max-w-2xl mx-auto font-light">
              Veira is not software you use. It is a system that runs your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
