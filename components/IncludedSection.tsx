'use client';

import React from 'react';
import { Check, Phone, MessageSquare, Database, Shield, Zap, Sparkles } from 'lucide-react';

const INCLUDED_ITEMS = [
  {
    title: 'CUSTOM DENTAL VOICE AGENT',
    desc: 'Trained on your clinic name, doctor credentials, operating hours, accepted insurance networks, and clinical protocols.',
  },
  {
    title: 'DENTRIX / EAGLESOFT / OPEN DENTAL CONNECTOR',
    desc: 'Two-way integration with your current PMS schedule. Appointments booked directly into your operatory buffer.',
  },
  {
    title: 'INSTANT PATIENT DISPATCH TEXTS',
    desc: 'Every call summary sent straight to your office manager & doctor phone with caller details and booked time.',
  },
  {
    title: 'EMERGENCY PROTOCOL ESCALATION',
    desc: 'Severe swelling, trauma, and acute pediatric emergencies flagged and warm-transferred to on-call surgeon.',
  },
  {
    title: 'SIGNED HIPAA BAA AGREEMENT',
    desc: 'Full regulatory compliance, 256-bit AES audio encryption, and healthcare privacy safeguards.',
  },
  {
    title: 'DEDICATED PRACTICE SUCCESS DIRECTOR',
    desc: 'Weekly call quality audits, schedule calibration, and ongoing script optimization.',
  },
];

export default function IncludedSection() {
  return (
    <section id="included" className="py-20 md:py-28 bg-[#121212] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-black uppercase tracking-wider text-[#a3e635] mb-2">
            COMPLETE PACKAGE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            EVERYTHING <span className="text-[#a3e635]">INCLUDED</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal">
            No hidden setup fees, no complex third-party software licenses. We handle the entire engineering and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUDED_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-zinc-800 bg-[#161719] flex flex-col justify-between hover:border-[#a3e635]/40 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#a3e635] mb-4">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <h3 className="text-sm font-black uppercase text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
