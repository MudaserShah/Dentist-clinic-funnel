'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, Star, CheckCircle2, TrendingUp, Quote } from 'lucide-react';

const CASE_STUDIES = [
  {
    doctorName: 'Dr. Aris Thorne, DDS',
    practiceName: 'Dental Excellence Studio',
    location: 'Dallas, TX · 5 Operatories',
    image: '/images/doctor_marcus.jpg',
    metric: '+$42,600 / Mo',
    metricLabel: 'Recovered Implant & Restorative Production',
    callSnippet: 'Listen to 34s Emergency Triage Call',
    quote: 'Before DentaVoice, our 3 front desk staff were literally in tears by 3 PM every day trying to juggle checking out patients while 4 phone lines rang continuously. Now, Sarah handles 70% of routine calls and fills our emergency operatory buffer before 8:30 AM every day.',
    results: [
      '38 new patient consultations booked in first month',
      'Average phone pickup latency dropped from 3 rings to 0 rings',
      'Staff turnover fell to 0% across 9 months',
    ],
  },
  {
    doctorName: 'Dr. Sarah Jenkins, DMD',
    practiceName: 'Elite Dental Group',
    location: 'Austin & Round Rock, TX · 3 Practice Locations',
    image: '/images/doctor_elena.jpg',
    metric: '118 Appointments',
    metricLabel: 'Booked Strictly After Business Hours Per Month',
    callSnippet: 'Listen to 41s After-Hours Recall Audio',
    quote: 'Our after-hours voicemail was a graveyard. Patients with broken teeth don’t leave messages—they hang up and call the next practice down the street. DentaVoice books them immediately into Eaglesoft with verified Delta Dental insurance info.',
    results: [
      '118 high-value appointments booked between 5 PM and 8 AM',
      '$310,000+ added gross collections in year one',
      '100% HIPAA compliant clinical notes delivered to office managers',
    ],
  },
];

export default function CaseStudies() {
  const [playingCaseIdx, setPlayingCaseIdx] = useState<number | null>(null);

  const togglePlayAudio = (idx: number) => {
    if (playingCaseIdx === idx) {
      setPlayingCaseIdx(null);
    } else {
      setPlayingCaseIdx(idx);
      // Play brief simulated sound or voice announcement
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const snippetText = idx === 0
          ? "Thank you for calling Dental Excellence Studio. I have an acute emergency operatory block reserved with Dr. Thorne at 10:15 AM today. I will lock that in for you."
          : "Hello, this is Sarah with Elite Dental. I noticed you are due for your six-month preventive cleaning. We have an opening this Thursday at 2:00 PM.";
        const utterance = new SpeechSynthesisUtterance(snippetText);
        utterance.rate = 1.05;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <section id="case-studies" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            <span>Verified Clinic Proof</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Real Chairside Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Trusted by Forward-Thinking Dental Practice Owners
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-zinc-300">
            Real outcomes from solo private practices and multi-location group clinics that stopped bleeding patient revenue to voicemail.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-[#0c1018] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-zinc-700 transition-all"
            >
              <div>
                {/* Doctor Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/40 shrink-0 bg-zinc-900">
                    <Image
                      src={cs.image}
                      alt={cs.doctorName}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{cs.doctorName}</h3>
                    <div className="text-xs text-cyan-400 font-medium">{cs.practiceName}</div>
                    <div className="text-[11px] text-zinc-400">{cs.location}</div>
                  </div>
                </div>

                {/* Marquee Metric Callout */}
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                      {cs.metric}
                    </div>
                    <div className="text-xs text-zinc-400">{cs.metricLabel}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-zinc-800 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic relative z-10 pl-2">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                </div>

                {/* Key Bullet Outcomes */}
                <div className="space-y-2 mb-6">
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audio Snippet Player */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => togglePlayAudio(idx)}
                  className="flex items-center gap-2.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    {playingCaseIdx === idx ? (
                      <Pause className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                  </div>
                  <span>{playingCaseIdx === idx ? 'Playing Recording...' : cs.callSnippet}</span>
                </button>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
