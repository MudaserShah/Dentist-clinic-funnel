'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Users, Clock } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export default function RoiCalculator({ onOpenBooking }: RoiCalculatorProps) {
  const [missedCallsPerDay, setMissedCallsPerDay] = useState(12);
  const [avgPatientValue, setAvgPatientValue] = useState(1450);
  const [conversionRate, setConversionRate] = useState(30);

  // Math:
  // Missed calls per month = missedCallsPerDay * 22 working days + weekend calls (~4 per weekend * 8 weekend days = 32)
  const monthlyMissedCalls = missedCallsPerDay * 22 + 28;
  const potentialNewPatientsPerMonth = Math.round(monthlyMissedCalls * (conversionRate / 100));
  const monthlyRecoveredProduction = potentialNewPatientsPerMonth * avgPatientValue;
  const annualRecoveredProduction = monthlyRecoveredProduction * 12;
  const reclaimedHours = Math.round((monthlyMissedCalls * 4.5) / 60); // 4.5 mins per call triage

  return (
    <section id="roi-calculator" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#090d15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            <span>Production Audit</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Real Financial Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Calculate Your Clinic&apos;s Recoverable Production
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-zinc-300">
            See how much high-value chairside production slips through the cracks when calls ring out to voicemail during busy clinic hours or after 5 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d121c] rounded-2xl border border-zinc-800 p-6 sm:p-10 shadow-2xl">
          {/* Controls: Sliders */}
          <div className="lg:col-span-7 space-y-7">
            {/* Slider 1: Missed Calls per Day */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-zinc-200">
                  Unanswered / After-Hours Calls per Day:
                </span>
                <span className="font-mono text-cyan-400 font-bold text-base tabular-nums">
                  {missedCallsPerDay} calls/day
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="35"
                step="1"
                value={missedCallsPerDay}
                onChange={(e) => setMissedCallsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>3 calls</span>
                <span>Industry Avg: ~14</span>
                <span>35 calls</span>
              </div>
            </div>

            {/* Slider 2: Average New Patient Value */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-zinc-200">
                  Average New Patient 1st-Year Case Value:
                </span>
                <span className="font-mono text-cyan-400 font-bold text-base tabular-nums">
                  ${avgPatientValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="3500"
                step="50"
                value={avgPatientValue}
                onChange={(e) => setAvgPatientValue(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>$600 (Preventive)</span>
                <span>$1,450 (Standard Restorative)</span>
                <span>$3,500+ (Implant/Cosmetic)</span>
              </div>
            </div>

            {/* Slider 3: Conversion Rate */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-zinc-200">
                  New Patient Inbound Booking Conversion:
                </span>
                <span className="font-mono text-cyan-400 font-bold text-base tabular-nums">
                  {conversionRate}%
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="55"
                step="5"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>15% (Low)</span>
                <span>30% (Standard Benchmark)</span>
                <span>55% (High)</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 pt-2 border-t border-zinc-800">
              *Calculated based on standard 22 clinical operating days plus after-hours weekend call volume benchmarks across ADA dental surveys.
            </p>
          </div>

          {/* Outputs: Projected Recovery Card */}
          <div className="lg:col-span-5 rounded-xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 via-zinc-950/80 to-zinc-950 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Projected Practice Growth</span>
              </div>

              <div>
                <span className="text-xs text-zinc-400 block mb-1">Annual Recoverable Production</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  ${annualRecoveredProduction.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1">
                  +${monthlyRecoveredProduction.toLocaleString()}/month chairside revenue
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] mb-1">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>New Patients / Mo</span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono tabular-nums">
                    +{potentialNewPatientsPerMonth}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Staff Hours Saved</span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono tabular-nums">
                    ~{reclaimedHours} hrs/mo
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-850">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Lock In Your Projected Recovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
