'use client';

import React from 'react';
import { Headphones } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenDemoAudio: () => void;
}

export default function Footer({ onOpenBooking, onOpenDemoAudio }: FooterProps) {
  return (
    <footer className="bg-[#0e0f11] border-t border-zinc-850 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-800">
          {/* Logo & Headline */}
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#a3e635] fill-current">
                <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" fill="#18191b" stroke="#a3e635" strokeWidth="6" />
              </svg>
              <span className="text-xl font-black tracking-tight text-white uppercase">
                HEXA <span className="text-[#a3e635]">PICKS</span>
              </span>
            </a>
            <p className="text-xs text-zinc-400 max-w-sm">
              Complete call coverage and 24/7 AI reception for dental clinics. Every call answered. Every lead captured.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider text-zinc-300">
            <a href="#solutions" className="hover:text-[#a3e635] transition-colors">SOLUTIONS</a>
            <a href="#included" className="hover:text-[#a3e635] transition-colors">INCLUDED</a>
            <a href="#what-you-get" className="hover:text-[#a3e635] transition-colors">WHAT YOU GET</a>
            <a href="#pricing" className="hover:text-[#a3e635] transition-colors">PRICING</a>
          </div>

          {/* Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase tracking-wider rounded-md"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} HexaPicks Technologies. All rights reserved. Built for dental clinics.
          </div>
          <div className="flex items-center gap-4">
            <span>HIPAA BAA Compliant</span>
            <span>&bull;</span>
            <span>24/7 Phone Line Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
