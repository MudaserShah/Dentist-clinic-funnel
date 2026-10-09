'use client';

import React from 'react';

const JOURNEY_STEPS = [
  {
    num: '1',
    title: 'THE TOOTH FAILS',
    description: 'Acute pulpitis, cracked crown, or severe sensitivity strikes after hours or during busy clinic hours.',
  },
  {
    num: '2',
    title: 'THEY SEARCH',
    description: 'The patient grabs their phone and types "emergency dentist near me" or searches your practice name.',
  },
  {
    num: '3',
    title: 'THEY CALL',
    description: 'They dial your office. They are anxious, in pain, and expect an immediate human or voice response.',
  },
  {
    num: '4',
    title: 'YOU GET THE LEAD',
    description: 'Sarah answers within 1 second, pre-qualifies their insurance, triages the symptom, and books the chair.',
  },
  {
    num: '5',
    title: 'YOU CLOSE THE JOB',
    description: 'Patient details and SOAP notes text straight to you. The patient walks through your clinic doors.',
  },
];

export default function PatientJourneySection() {
  return (
    <section className="py-20 md:py-28 bg-[#121212] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-black uppercase tracking-wider text-[#a3e635] mb-2">
            THE CUSTOMER JOURNEY
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            WHAT HAPPENS WHEN A <span className="text-[#a3e635]">TOOTH BREAKS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            Most patients don&apos;t spend weeks researching. The whole journey takes minutes, and every step is a chance to win or lose the patient.
          </p>
        </div>

        {/* 5-Step Horizontal Grid with solid lime green circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {JOURNEY_STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-start space-y-3">
              {/* Solid Lime Circle */}
              <div className="w-14 h-14 rounded-full bg-[#a3e635] text-black font-black text-2xl flex items-center justify-center shadow-lg shadow-[#a3e635]/20 shrink-0">
                {step.num}
              </div>

              {/* Step Title in bold uppercase */}
              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
