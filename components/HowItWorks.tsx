'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Headphones, Database, PhoneCall } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

const STEPS = [
  {
    step: '01',
    title: 'Clinical Workflow & PMS Audit',
    timeframe: 'Day 1 – 2',
    description: 'We audit your operatory capacities, procedure duration blocks (D0140 emergency, D0150 prophy, D2740 crowns), provider schedules, and accepted insurance networks.',
    features: ['EHR/PMS calendar permission setup', 'Provider buffer rules mapping', 'Emergency escalation guidelines'],
  },
  {
    step: '02',
    title: 'Custom Voice Cloning & Scripting',
    timeframe: 'Day 3 – 4',
    description: 'We calibrate Sarah’s voice persona, greeting, and clinical knowledge base to match your practice philosophy. Warm, poised, and medically informed.',
    features: ['Practice custom name & doctor greetings', 'Bilingual English/Spanish fine-tuning', 'Common patient FAQ training'],
  },
  {
    step: '03',
    title: 'Zero-Downtime Telephony Bridge',
    timeframe: 'Day 5',
    description: 'Connect your existing phone lines (Weave, Mango, RingCentral, Vonage) with simple rollover forwarding. Active only when your lines are busy or clinic is closed.',
    features: ['Keep existing clinic phone numbers', 'Configurable ring-count rollover', 'Staff backup emergency transfer button'],
  },
  {
    step: '04',
    title: 'Go-Live & Weekly Production Review',
    timeframe: 'Day 6 – 7',
    description: 'Your AI receptionist begins handling calls. Review incoming appointments directly in your Dentrix or Eaglesoft schedule alongside daily audio digests.',
    features: ['Instant SMS & email appointment alerts', 'Weekly revenue recovery reporting', 'Dedicated dental account director'],
  },
];

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#090d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            <span>7-Day Implementation</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Zero In-Office Disruption</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            From Onboarding to Live Calls in Under 7 Days
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-zinc-300">
            Our specialized dental engineering team handles 100% of the technical setup, script calibration, and PMS integrations for you.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-[#0c111a] p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-cyan-400">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded">
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-850 space-y-1.5 text-[11px] text-zinc-400">
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below steps */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <span>Request Practice Setup Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
