'use client';

import React from 'react';
import { Database, RefreshCw, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const PMS_LIST = [
  {
    name: 'Dentrix',
    versions: 'G6, G7 & Dentrix Ascend Cloud',
    status: 'Native Bi-Directional API',
    description: 'Instant read/write for provider operatory blocks, multi-location clinics, and fee schedules.',
  },
  {
    name: 'Eaglesoft',
    versions: 'v19 – v23 Patterson Dental',
    status: 'Direct On-Prem & Cloud Bridge',
    description: 'Continuous schedule synchronization with instant patient chart match and insurance plan checks.',
  },
  {
    name: 'Open Dental',
    versions: 'Native API & Web Sched Bridge',
    status: 'Real-Time Webhook Certified',
    description: 'Sub-second calendar write access respecting operatory color codes and hygienist blocks.',
  },
  {
    name: 'Curve Dental',
    versions: 'Curve Hero Cloud Ecosystem',
    status: 'Modern Cloud REST API',
    description: 'Full multi-chair scheduling with real-time digital intake and patient medical history sync.',
  },
  {
    name: 'Denticon',
    versions: 'Planet DDS DSO Suite',
    status: 'Enterprise DSO Direct Link',
    description: 'Built for multi-location dental groups with regional routing and centralized call audits.',
  },
  {
    name: 'Carestream Dental',
    versions: 'CS Ortho & PracticeWorks',
    status: 'Clinical Database Bridge',
    description: 'Synchronizes imaging records, restorative consultation slots, and patient demographics.',
  },
];

export default function PmsIntegrations() {
  return (
    <section id="integrations" className="py-20 md:py-24 border-b border-zinc-800/80 bg-[#090d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            <span>PMS Compatibility</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Zero Workflow Disruption</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Seamless Bi-Directional Dental PMS Sync
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-zinc-300">
            You don&apos;t need to change your existing clinical practice software. DentaVoice plugs directly into your practice management system in less than 20 minutes with zero downtime.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PMS_LIST.map((pms, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-zinc-800 bg-[#0c111a] hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{pms.name}</h3>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">
                    {pms.status}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-mono mb-2">{pms.versions}</div>
                <p className="text-xs text-zinc-300 leading-relaxed">{pms.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>2-Way Calendar Certified</span>
                </span>
                <span className="font-mono text-zinc-400">1.2s Sync</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sync Process Row */}
        <div className="mt-12 p-6 rounded-2xl border border-zinc-800 bg-[#0a0e17] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Using a custom or legacy dental database?</h4>
              <p className="text-xs text-zinc-400">
                Our clinical engineers provide tailored bridge connectors and webhooks for private practice groups and DSOs.
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>Inquire About Custom EHR Bridge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
