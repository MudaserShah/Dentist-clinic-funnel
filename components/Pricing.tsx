'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenBooking: () => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#121212] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-black uppercase tracking-wider text-[#a3e635] mb-2">
            PRICING & PLANS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            SIMPLE, FLAT <span className="text-[#a3e635]">PRICING</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal">
            No per-minute penalties, no contracts. Just complete dental call coverage.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-xl border border-zinc-800 bg-[#161719] p-7 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="text-xs font-black uppercase text-zinc-400 mb-2">
                AFTER-HOURS ONLY
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2">
                NIGHTS & WEEKENDS
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Captures every patient who calls after your clinic closes for the day.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white font-mono">$790</span>
                <span className="text-xs text-zinc-400">/ month</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-zinc-850 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>5:00 PM – 8:00 AM & Weekend Coverage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Dentrix / Eaglesoft Calendar 2-Way Sync</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Emergency Triage & Instant SMS Alerts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>HIPAA BAA Agreement Included</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-850">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-[#121212] hover:bg-white hover:text-black border border-white text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Card 2: Most Popular (Featured with Lime) */}
          <div className="rounded-xl border-2 border-[#a3e635] bg-[#161d14] p-7 flex flex-col justify-between shadow-2xl shadow-[#a3e635]/15 relative scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a3e635] text-black text-[10px] font-black uppercase px-4 py-0.5 rounded-full tracking-wider">
              MOST POPULAR
            </div>

            <div>
              <div className="text-xs font-black uppercase text-[#a3e635] mb-2">
                COMPLETE COVERAGE
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2">
                24/7 FULL PRACTICE
              </h3>
              <p className="text-xs text-zinc-300 mb-6">
                24/7/365 coverage. Overflow during busy clinic hours + nights and weekends.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white font-mono">$1,490</span>
                <span className="text-xs text-zinc-400">/ month</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-zinc-800 text-xs text-zinc-200">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span className="font-bold text-white">24/7/365 Zero-Hold Call Answering</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Direct 2-Way Calendar Booking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Insurance Pre-Qualification (Delta, MetLife, Cigna)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Bilingual English & Spanish Switching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Instant SMS Text Dispatch to Clinic Staff</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Automated Hygiene Recall Campaigns</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase tracking-wider rounded-lg shadow-xl shadow-[#a3e635]/20 transition-all cursor-pointer"
              >
                START 14-DAY TRIAL
              </button>
            </div>
          </div>

          {/* Card 3: DSO Enterprise */}
          <div className="rounded-xl border border-zinc-800 bg-[#161719] p-7 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="text-xs font-black uppercase text-zinc-400 mb-2">
                DSO & GROUPS
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2">
                MULTI-LOCATION
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Centralized routing across multiple clinic locations and phone lines.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white font-mono">$2,990</span>
                <span className="text-xs text-zinc-400">/ month</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-zinc-850 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Unlimited Phone Lines & Operatories</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Intelligent Multi-Clinic Routing by ZIP</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Custom EHR API Connectors</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#a3e635] stroke-[3] shrink-0" />
                  <span>Dedicated Senior Dental Solutions Engineer</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-850">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-[#121212] hover:bg-white hover:text-black border border-white text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                TALK TO FOUNDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
