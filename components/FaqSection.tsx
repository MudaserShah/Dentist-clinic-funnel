'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How does DentaVoice handle complex or unusual clinical questions?',
    a: 'Sarah is strictly guardrailed to never provide unlicensed medical or surgical diagnoses. When a patient asks about drug interactions or surgical complications, she reassures them calmly, notes the exact inquiry in the triage digest, and seamlessly warm-transfers to your office staff or triggers an urgent SMS alert to the on-call dentist.',
  },
  {
    q: 'Will this cause double-booking errors in Dentrix, Eaglesoft, or Open Dental?',
    a: 'No. DentaVoice executes a sub-second atomic lock on your provider calendar before committing any appointment slot. It strictly adheres to your configured operatory duration buffers (e.g. 60-min new patient prophy, 45-min emergency exam) and provider chair preferences.',
  },
  {
    q: 'Is DentaVoice 100% HIPAA compliant and do you sign a BAA?',
    a: 'Yes. We sign a formal Business Associate Agreement (BAA) with every single practice before connecting telephony. All audio streams and clinical transcripts are encrypted end-to-end via 256-bit AES encryption across SOC-2 Type II audited healthcare infrastructure.',
  },
  {
    q: 'How does the voice agent handle thick accents or elderly patients?',
    a: 'Sarah utilizes high-fidelity acoustic speech models trained on diverse dental interactions. She handles pauses, background noise, and varying speech tempos without interrupting the patient or cutting them off.',
  },
  {
    q: 'Can my clinic keep its existing phone number and phone system?',
    a: 'Yes. You do not change your phone number. DentaVoice connects via standard conditional call forwarding from systems like Weave, Mango Voice, RingCentral, or Vonage. You choose whether it answers 24/7 or only after 5 rings and when your clinic is closed.',
  },
  {
    q: 'What is the 14-day practice pilot guarantee?',
    a: 'Test DentaVoice risk-free in your practice for 14 days. If it does not capture at least 5 high-production new patient appointments or emergency visits you otherwise would have missed, you pay nothing.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-24 border-b border-zinc-800/80 bg-[#090d15]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Clinical Peace of Mind</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Everything Dentists Ask Before Going Live
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-zinc-800 bg-[#0c111c] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-850">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
