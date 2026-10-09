'use client';

import React from 'react';
import { Check, X, ShieldAlert, Zap } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Call Answer Rate During Peak Rush',
    traditional: '68% (Overwhelmed by in-office check-ins)',
    dentaVoice: '100% (Instant answer within 2 rings)',
  },
  {
    feature: 'After-Hours & Weekend Triage',
    traditional: 'Voicemail (Patient calls next dentist on Google)',
    dentaVoice: '24/7/365 active clinical triage & booking',
  },
  {
    feature: 'PMS Calendar Sync (Dentrix, Eaglesoft)',
    traditional: 'Manual notes, high double-booking risk',
    dentaVoice: 'Direct 2-way API write in 1.2 seconds',
  },
  {
    feature: 'Insurance & Copay Pre-Qualification',
    traditional: '15-20 min manual phone queues with payers',
    dentaVoice: 'Instant in-network verification on the call',
  },
  {
    feature: 'Monthly Investment Per Operatory',
    traditional: '$4,200 – $5,800 salary + benefits + PTO',
    dentaVoice: 'Fraction of single front-desk salary',
  },
  {
    feature: 'Staff Turnover & Retraining Downtime',
    traditional: '38% annual front-office turnover rate',
    dentaVoice: 'Zero turnover, permanent clinical memory',
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-24 border-b border-zinc-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            <span>Direct Comparison</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Why Practices Switch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Traditional Receptionist vs DentaVoice AI
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            DentaVoice isn&apos;t designed to replace your beloved in-clinic team—it frees them from phone prison so they can deliver 5-star chairside hospitality.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-[#0a0e17] shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/60">
                <th className="py-4 px-6 text-xs font-semibold text-zinc-400 uppercase tracking-wider w-1/3">
                  Practice Capability
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-rose-400 uppercase tracking-wider w-1/3">
                  Traditional Front Desk Alone
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-cyan-400 uppercase tracking-wider w-1/3 bg-cyan-950/20">
                  DentaVoice AI Co-Pilot
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-850 text-xs sm:text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-zinc-400 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{row.traditional}</span>
                  </td>
                  <td className="py-4 px-6 font-medium text-cyan-200 bg-cyan-950/10">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{row.dentaVoice}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
