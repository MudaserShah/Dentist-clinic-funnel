'use client';

import React from 'react';
import { Headphones } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenDemoAudio: () => void;
}

export default function Hero({ onOpenBooking, onOpenDemoAudio }: HeroProps) {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-[#121212] text-center overflow-hidden border-b border-zinc-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Top 5-star rating pill with lime green border */}
        <div className="inline-flex flex-col items-center justify-center px-6 py-2 rounded-full bg-[#18191b] border border-[#a3e635]/50 shadow-sm mb-10 hover:border-[#a3e635] transition-colors">
          <div className="flex items-center gap-1 text-[#f59e0b] text-xs mb-0.5">
            {'★'.repeat(5)}
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide">
            24/7 call answering for dental clinics
          </span>
        </div>

        {/* Headline: ALL CAPS, BOLD, EXACT HEXAPICKS PALETTE */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-black tracking-tight leading-[1.08] uppercase text-white max-w-4xl [text-wrap:balance]">
          COMPLETE CALL COVERAGE <br />
          <span className="text-[#a3e635]">FOR DENTAL CLINICS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
          Every call answered. Every lead captured. Texted straight to you.
        </p>

        {/* Dual Stacked Action Buttons */}
        <div className="mt-10 flex flex-col items-center gap-3.5 w-full max-w-xs">
          {/* Green Primary Demo Button */}
          <button
            onClick={onOpenDemoAudio}
            className="w-full py-3.5 px-6 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase tracking-wider rounded-lg shadow-xl shadow-[#a3e635]/15 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col items-center justify-center leading-snug"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-bold">
              <Headphones className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>CALL THE DEMO LINE</span>
            </div>
            <span className="font-mono text-xs font-black tracking-normal">(800) 555-0199</span>
          </button>

          {/* Outline Secondary Button */}
          <button
            onClick={onOpenBooking}
            className="w-full py-3 px-6 bg-[#121212] hover:bg-white hover:text-black border border-white text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
}
