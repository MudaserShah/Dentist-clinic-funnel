'use client';

import React, { useState } from 'react';
import { Headphones, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenDemoAudio: () => void;
}

export default function Navbar({ onOpenBooking, onOpenDemoAudio }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#121212]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Zone: Hexagon Icon + HEXA PICKS */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Hexagon shape SVG */}
            <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#a3e635] fill-current">
              <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" fill="#18191b" stroke="#a3e635" strokeWidth="6" />
            </svg>
            {/* Audio wave bars inside hexagon */}
            <div className="absolute inset-0 flex items-center justify-center gap-1">
              <span className="w-1 h-3.5 bg-[#a3e635] rounded-full" />
              <span className="w-1 h-5 bg-[#a3e635] rounded-full" />
              <span className="w-1 h-2.5 bg-[#a3e635] rounded-full" />
            </div>
          </div>
          <span className="text-xl font-black tracking-tight text-white uppercase flex items-center gap-1.5">
            HEXA <span className="text-[#a3e635]">PICKS</span>
          </span>
        </a>

        {/* Center Nav: SOLUTIONS, INCLUDED, WHAT YOU GET, PRICING */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider text-zinc-300 uppercase">
          <a href="#solutions" className="hover:text-[#a3e635] transition-colors">
            SOLUTIONS
          </a>
          <a href="#included" className="hover:text-[#a3e635] transition-colors">
            INCLUDED
          </a>
          <a href="#what-you-get" className="hover:text-[#a3e635] transition-colors">
            WHAT YOU GET
          </a>
          <a href="#pricing" className="hover:text-[#a3e635] transition-colors">
            PRICING
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Hear Demo outline button with headphones */}
          <button
            onClick={onOpenDemoAudio}
            className="flex items-center gap-2 px-4 py-1.5 border border-white/80 hover:border-[#a3e635] bg-black text-left rounded-md transition-all hover:bg-zinc-900 cursor-pointer"
          >
            <Headphones className="w-4 h-4 text-white" />
            <div className="text-[10px] leading-tight font-bold uppercase tracking-wider">
              <span className="block text-zinc-400 text-[9px]">HEAR THE DEMO</span>
              <span className="text-white text-xs tracking-normal font-mono font-bold">(800) 555-0199</span>
            </div>
          </button>

          {/* Solid Neon Lime GET IN TOUCH Button */}
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase tracking-wider rounded-md shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18191b] border-b border-zinc-800 px-6 py-5 space-y-4">
          <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-wider text-zinc-300">
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#a3e635]">
              SOLUTIONS
            </a>
            <a href="#included" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#a3e635]">
              INCLUDED
            </a>
            <a href="#what-you-get" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#a3e635]">
              WHAT YOU GET
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#a3e635]">
              PRICING
            </a>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoAudio();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-white bg-black text-white rounded-md text-xs font-bold uppercase"
            >
              <Headphones className="w-4 h-4 text-[#a3e635]" />
              <span>HEAR THE DEMO (800) 555-0199</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#a3e635] text-black text-xs font-black uppercase tracking-wider rounded-md"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
