'use client';

import React from 'react';
import Image from 'next/image';

export default function CallAnsweringSection() {
  return (
    <section className="py-20 md:py-28 bg-[#121212] border-b border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category tag */}
            <div className="text-xs font-black uppercase tracking-wider text-[#a3e635]">
              CALL ANSWERING FOR DENTAL CLINICS
            </div>

            {/* Massive 3-line Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.08]">
              EVERY CALL ANSWERED. <br />
              EVERY LEAD CAPTURED. <br />
              <span className="text-[#a3e635]">EVERY CHAIR FILLED.</span>
            </h2>

            {/* Subhead */}
            <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
              A call answering system built so no patient ever reaches voicemail.
            </p>

            {/* Descriptive Body Copy */}
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              <p>
                When a tooth breaks or severe dental pain strikes, people don&apos;t leave messages. They call the next dental practice on Google. If you&apos;re chairside performing a root canal, in sterilization, or closed for the weekend, that patient goes to a competitor, and you never find out it happened.
              </p>
              <p>
                Our service answers every call within seconds, day or night. It gets the caller&apos;s name, phone, tooth problem, and dental insurance, then texts you the details so you can review the chart and close high-value production. Emergencies are flagged right away.
              </p>
              <p className="text-white font-semibold pt-1">
                This is the difference between having a phone number and having a phone line that works for you.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Card with 24/7 Always Answering badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#16171a] p-3 shadow-2xl">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/dental_captured_phone.jpg"
                  alt="Dental emergency patient captured on phone"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Top overlay text */}
                <div className="absolute top-4 left-4 right-4 z-10 text-right">
                  <div className="inline-block bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-right">
                    <span className="block text-[11px] font-black uppercase text-white tracking-wider">
                      EVERY CALL ANSWERED.
                    </span>
                    <span className="block text-[10px] font-black uppercase text-[#a3e635] tracking-wider">
                      EVERY LEAD CAPTURED.
                    </span>
                  </div>
                </div>

                {/* Bottom Right Lime Badge: 24/7 ALWAYS ANSWERING */}
                <div className="absolute bottom-4 right-4 z-10 bg-[#a3e635] text-black px-5 py-3 rounded-xl shadow-2xl">
                  <div className="text-2xl font-black leading-none">24/7</div>
                  <div className="text-[10px] font-black uppercase tracking-wider leading-tight mt-0.5">
                    ALWAYS ANSWERING
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
