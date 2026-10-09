'use client';

import React from 'react';
import { ArrowRight, Check, Sparkles, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

interface WhatYouGetProps {
  onOpenBooking: () => void;
}

export default function WhatYouGetSection({ onOpenBooking }: WhatYouGetProps) {
  return (
    <section id="what-you-get" className="py-20 md:py-28 bg-[#121212] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-black uppercase tracking-wider text-[#a3e635]">
              DELIVERABLES & OUTCOMES
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              WHAT YOU GET <br />
              <span className="text-[#a3e635]">DAY ONE</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              When HexaPicks goes live on your dental lines, your practice transforms immediately:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a3e635] text-black flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">0% MISSED CALL RATE</h4>
                  <p className="text-xs text-zinc-400">Every single ring answered in under 2 seconds, whether at 2 PM on a Tuesday or 11 PM on a Sunday.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a3e635] text-black flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">CHAIRSIDE STAFF FREED FROM PHONE CALLS</h4>
                  <p className="text-xs text-zinc-400">Your in-office receptionists focus 100% on patients standing at the counter, checking them in and collecting balances.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a3e635] text-black flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">AUTOMATIC PRODUCTION TEXT DIGEST</h4>
                  <p className="text-xs text-zinc-400">Instant notification to doctor/manager cell with caller name, insurance carrier, tooth condition, and booked slot.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase tracking-wider rounded-lg shadow-xl shadow-[#a3e635]/20 cursor-pointer"
              >
                CLAIM YOUR PRACTICE LINE
              </button>
            </div>
          </div>

          {/* Right Column: Visual Summary Box */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border-2 border-[#a3e635]/40 bg-[#161719] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-xs font-black uppercase text-white tracking-wider">
                  SAMPLE PATIENT DISPATCH TEXT
                </span>
                <span className="text-[10px] font-mono text-[#a3e635] font-bold">
                  SENT IN 0.8s
                </span>
              </div>

              {/* Text Message Mock */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-black border border-zinc-800 text-zinc-300 space-y-2">
                  <div className="text-[#a3e635] font-bold text-xs uppercase flex items-center justify-between">
                    <span>🚨 NEW PATIENT EMERGENCY BOOKED</span>
                    <span>10:42 PM</span>
                  </div>
                  <div><strong>Patient:</strong> Marcus Vance</div>
                  <div><strong>Phone:</strong> (512) 555-0198</div>
                  <div><strong>Issue:</strong> Fractured lower left premolar, acute biting pain</div>
                  <div><strong>Insurance:</strong> Delta Dental PPO (Subscriber ID captured)</div>
                  <div><strong>Action:</strong> Booked into Dentrix Op 2 &bull; Tomorrow 9:30 AM</div>
                  <div className="pt-2 text-[10px] text-zinc-500 border-t border-zinc-900">
                    Audio recording & SOAP summary synced to office dashboard.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-between text-xs">
                <span className="text-white font-bold uppercase">Estimated Case Value:</span>
                <span className="text-xl font-black text-[#a3e635] font-mono">$1,450.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
