'use client';

import React from 'react';
import { PhoneCall, CalendarCheck, ShieldCheck, HeartHandshake, Globe2, FileText, CheckCircle2 } from 'lucide-react';

const SOLUTIONS = [
  {
    index: '01',
    title: '24/7 DENTAL CALL ANSWERING',
    subtitle: 'Every evening, weekend, and lunch-hour call answered in 1 second.',
    description: 'When patients call outside 8 AM – 5 PM with sudden toothaches, broken crowns, or bleeding gums, they never hit voicemail. Our dental voice agent answers instantly and books the next open emergency block.',
    metric: '100% CALLS ANSWERED',
  },
  {
    index: '02',
    title: 'DIRECT 2-WAY PMS SCHEDULING',
    subtitle: 'Native calendar write access into Dentrix, Eaglesoft & Open Dental.',
    description: 'No double-booking or manual staff re-entry. Sarah reads real-time provider chair availability and books directly into your hygiene and doctor operatory columns respecting procedure durations.',
    metric: 'SUB-SECOND PMS SYNC',
  },
  {
    index: '03',
    title: 'INSURANCE PRE-QUALIFICATION',
    subtitle: 'Captures subscriber ID, group number, and verifies in-network carriers.',
    description: 'Answers patient questions about Delta Dental, MetLife, Cigna, Guardian, and Aetna. Explains standard preventive 100% cleanings and estimates copays before the patient arrives.',
    metric: '92% INTAKE ACCURACY',
  },
  {
    index: '04',
    title: 'INSTANT TEXT TO CLINIC STAFF',
    subtitle: 'Full patient summary texted straight to your phone and email.',
    description: 'Every interaction generates an immediate intake notification: patient name, callback number, chief complaint, symptom severity, and booked appointment time.',
    metric: 'INSTANT SMS DISPATCH',
  },
  {
    index: '05',
    title: 'BILINGUAL ENGLISH & SPANISH',
    subtitle: 'Fluid code-switching without robotic phone number menus.',
    description: 'Instantly speaks fluent, compassionate Spanish if a caller prefers. Eliminates language barriers for diverse metropolitan patient bases with zero accent friction.',
    metric: 'NATIVE FLUENCY',
  },
  {
    index: '06',
    title: 'HIPAA BAA CERTIFIED SECURITY',
    subtitle: 'Healthcare-grade encrypted voice pipeline with signed BAA.',
    description: 'Full audio encryption, signed Business Associate Agreements, and automated clinical SOAP summaries delivered straight to your practice manager dashboard.',
    metric: '100% HIPAA COMPLIANT',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#121212] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-black uppercase tracking-wider text-[#a3e635] mb-2">
            HEXA PICKS DENTAL SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            BUILT FOR <span className="text-[#a3e635]">DENTAL PRACTICES</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Everything your dental clinic needs to stop losing emergency calls and new hygiene patients to voicemail.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((item) => (
            <div
              key={item.index}
              className="rounded-xl border border-zinc-800 bg-[#17181a] p-7 flex flex-col justify-between hover:border-[#a3e635]/60 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-black text-[#a3e635]">
                    {item.index}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-black bg-[#a3e635] px-2.5 py-0.5 rounded">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase text-white mb-1 group-hover:text-[#a3e635] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-zinc-400 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-xs text-zinc-300 font-normal leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-[#a3e635] font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                <span>Live Practice Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
