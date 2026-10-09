'use client';

import React from 'react';
import { Phone, PhoneCall, PhoneMissed, PhoneOff, Check, X, Crown, Sparkles } from 'lucide-react';

export default function AdDifferenceSection() {
  return (
    <section className="py-20 md:py-28 bg-[#121212] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-black uppercase tracking-wider text-[#a3e635]">
              THE DIFFERENCE
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.08]">
              WHAT ANSWERING EVERY CALL <span className="text-[#a3e635]">DOES TO YOUR ADS</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              <p className="text-base text-white font-semibold">
                Don&apos;t pay for clicks on Google Ads that end in voicemail.
              </p>
              <p>
                &ldquo;Dentist near me&rdquo; and &ldquo;emergency tooth extraction&rdquo; searches turn into answered appointments, not missed opportunities.
              </p>
              <p>
                Patients who find you through Google Local Services Ads, SEO, or referrals get picked up in 1 ring, triaged by Sarah, and booked directly into your operatory calendar.
              </p>
            </div>
          </div>

          {/* Right Column: 3-Phone Competitor Comparison */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              {/* Competitor A */}
              <div className="rounded-xl border border-zinc-800 bg-[#17181a] p-4 flex flex-col justify-between text-center opacity-80">
                <div>
                  <h4 className="text-xs font-black uppercase text-zinc-300 mb-1">COMPETITOR A</h4>
                  <div className="text-[10px] font-semibold text-rose-400 flex items-center justify-center gap-1 mb-4">
                    <X className="w-3 h-3 text-rose-500 stroke-[3]" />
                    <span>Slow / Endless Ringing</span>
                  </div>

                  {/* Phone Screen Mock */}
                  <div className="aspect-[9/14] w-full rounded-lg bg-black border border-zinc-800 p-3 flex flex-col justify-between items-center text-center">
                    <span className="text-[10px] font-mono text-zinc-500">RINGING...</span>
                    <PhoneMissed className="w-8 h-8 text-rose-500 animate-pulse my-auto" />
                    <div className="text-[9px] text-zinc-500">No answer &bull; Voicemail</div>
                  </div>
                </div>
              </div>

              {/* Competitor B */}
              <div className="rounded-xl border border-zinc-800 bg-[#17181a] p-4 flex flex-col justify-between text-center opacity-80">
                <div>
                  <h4 className="text-xs font-black uppercase text-zinc-300 mb-1">COMPETITOR B</h4>
                  <div className="text-[10px] font-semibold text-rose-400 flex items-center justify-center gap-1 mb-4">
                    <X className="w-3 h-3 text-rose-500 stroke-[3]" />
                    <span>Unresponsive / Missed</span>
                  </div>

                  {/* Phone Screen Mock */}
                  <div className="aspect-[9/14] w-full rounded-lg bg-black border border-zinc-800 p-3 flex flex-col justify-between items-center text-center">
                    <span className="text-[10px] font-mono text-zinc-500">RINGING...</span>
                    <PhoneOff className="w-8 h-8 text-zinc-600 my-auto" />
                    <div className="text-[9px] text-zinc-500">Hang-up / Patient Lost</div>
                  </div>
                </div>
              </div>

              {/* YOUR CLINIC (HexaPicks) */}
              <div className="rounded-xl border-2 border-[#a3e635] bg-gradient-to-b from-[#182315] to-[#121612] p-4 flex flex-col justify-between text-center shadow-2xl shadow-[#a3e635]/20 relative scale-[1.02]">
                <div>
                  <div className="flex items-center justify-center gap-1 text-xs font-black uppercase text-white mb-0.5">
                    <span>YOUR CLINIC</span>
                    <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                  <div className="text-[10px] font-black uppercase text-[#a3e635] flex items-center justify-center gap-1 mb-4">
                    <span>★ BEST & FASTEST ★</span>
                  </div>

                  {/* Phone Screen Mock with glowing green */}
                  <div className="aspect-[9/14] w-full rounded-lg bg-black border border-[#a3e635]/60 p-3 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-inner">
                    <div className="text-[10px] font-mono text-[#a3e635] font-bold">
                      Connected: 0.4s
                    </div>

                    <div className="my-auto space-y-2 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#a3e635] flex items-center justify-center shadow-lg shadow-[#a3e635]/40 animate-pulse">
                        <PhoneCall className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                        Answered
                      </span>
                      <div className="flex items-center gap-1 justify-center">
                        <span className="w-1 h-3 bg-[#a3e635] rounded-full animate-bounce" />
                        <span className="w-1 h-4 bg-[#a3e635] rounded-full animate-bounce [animation-delay:0.1s]" />
                        <span className="w-1 h-2 bg-[#a3e635] rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1 h-5 bg-[#a3e635] rounded-full animate-bounce [animation-delay:0.3s]" />
                      </div>
                    </div>

                    <div className="text-[9px] font-bold text-[#a3e635] uppercase bg-[#a3e635]/15 py-1 px-2 rounded border border-[#a3e635]/30">
                      ✓ Booked into Dentrix
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
