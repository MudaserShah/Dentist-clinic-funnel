'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Headphones, Volume2, VolumeX, Play, Pause, Send, CheckCircle2, Phone, RefreshCw } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  dialogue: {
    role: 'patient' | 'assistant';
    speaker: string;
    text: string;
  }[];
  triage: {
    category: string;
    severity: string;
    insurance: string;
    action: string;
  };
}

const DEMO_SCENARIOS: Scenario[] = [
  {
    id: 'emergency',
    title: 'EMERGENCY TOOTHACHE',
    description: 'Patient calling at 8:15 PM with severe throbbing molar pain.',
    dialogue: [
      {
        role: 'patient',
        speaker: 'CALLER (DAVID M.)',
        text: 'Hi, I woke up with severe throbbing in my lower left molar. It hurts when I drink cold water or bite down.',
      },
      {
        role: 'assistant',
        speaker: 'SARAH (AI RECEPTIONIST)',
        text: 'I am so sorry to hear you are dealing with that pain, David. We take severe toothaches very seriously at Dr. Thorne’s practice. Are you experiencing any facial swelling or fever along with the sensitivity?',
      },
      {
        role: 'patient',
        speaker: 'CALLER (DAVID M.)',
        text: 'No fever yet, but the pain is a steady 8 out of 10. Can I see someone today?',
      },
      {
        role: 'assistant',
        speaker: 'SARAH (AI RECEPTIONIST)',
        text: 'Understood. We have an emergency operatory block reserved with Dr. Thorne at 10:15 AM this morning. I will hold that for you immediately and text your digital medical intake right now.',
      },
    ],
    triage: {
      category: 'Acute Pulpitis / Molar Trauma',
      severity: 'Emergency (Same-Day Protocol)',
      insurance: 'Delta Dental Premier (Active)',
      action: 'Written to Dentrix Operatory 2 at 10:15 AM',
    },
  },
  {
    id: 'hygiene',
    title: 'NEW PATIENT & INSURANCE',
    description: 'New resident inquiring about preventive cleaning and MetLife coverage.',
    dialogue: [
      {
        role: 'patient',
        speaker: 'CALLER (ELENA R.)',
        text: 'Hello, I just moved into the neighborhood and need to schedule a routine cleaning. Do you accept MetLife Dental?',
      },
      {
        role: 'assistant',
        speaker: 'SARAH (AI RECEPTIONIST)',
        text: 'Welcome to the neighborhood, Elena! Yes, Dr. Thorne is an in-network preferred provider with MetLife PPO. Your preventive cleanings and bitewing X-rays are typically covered at 100% with zero copay.',
      },
      {
        role: 'patient',
        speaker: 'CALLER (ELENA R.)',
        text: 'That sounds perfect. Do you have anything available next Tuesday afternoon?',
      },
      {
        role: 'assistant',
        speaker: 'SARAH (AI RECEPTIONIST)',
        text: 'We have a 60-minute adult new patient hygiene opening with our hygienist Rachel next Tuesday at 3:00 PM. Shall I reserve that for you?',
      },
    ],
    triage: {
      category: 'Adult Comprehensive Hygiene',
      severity: 'Routine Elective',
      insurance: 'MetLife Dental PPO (100% Preventive In-Network)',
      action: 'Written to Open Dental Hygiene Chair 3 at 3:00 PM',
    },
  },
];

export default function VoiceDemo() {
  const [activeScenarioId, setActiveScenarioId] = useState('emergency');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);
  const [isCallingApi, setIsCallingApi] = useState(false);

  const activeScenario = DEMO_SCENARIOS.find((s) => s.id === activeScenarioId) || DEMO_SCENARIOS[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      if (currentStep < activeScenario.dialogue.length) {
        const currentLine = activeScenario.dialogue[currentStep];
        if (!isMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(currentLine.text);
          utterance.rate = 1.05;
          utterance.pitch = currentLine.role === 'assistant' ? 1.15 : 0.95;
          window.speechSynthesis.speak(utterance);
        }

        timerRef.current = setTimeout(() => {
          if (currentStep + 1 >= activeScenario.dialogue.length) {
            setIsPlaying(false);
          }
          setCurrentStep((prev) => prev + 1);
        }, 4200);
      }
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentStep, activeScenario, isMuted]);

  const handleSelectScenario = (id: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setActiveScenarioId(id);
    setCurrentStep(0);
    setIsPlaying(false);
    setCustomAnswer(null);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (currentStep >= activeScenario.dialogue.length) {
        setCurrentStep(0);
      }
      setIsPlaying(true);
    }
  };

  const handleAskCustom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim() || isCallingApi) return;

    setIsCallingApi(true);
    setCustomAnswer(null);

    try {
      const res = await fetch('/api/receptionist-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: customQuestion,
          history: [],
        }),
      });

      const data = await res.json();
      const reply = data.reply || "Thank you for reaching out! We would be delighted to assist you at our dental studio.";
      setCustomAnswer(reply);

      if (!isMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(reply);
        utterance.rate = 1.05;
        utterance.pitch = 1.15;
        window.speechSynthesis.speak(utterance);
      }
    } catch (err) {
      setCustomAnswer("I'd be glad to look into your appointment options with Dr. Thorne. Would morning or afternoon suit your schedule?");
    } finally {
      setIsCallingApi(false);
    }
  };

  return (
    <section id="voice-demo" className="py-20 md:py-28 bg-[#121212] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-black uppercase tracking-wider text-[#a3e635] mb-2">
            LIVE VOICE AGENT SIMULATOR
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            HEAR HOW <span className="text-[#a3e635]">SARAH ANSWERS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal">
            Real 450ms human cadence. Zero lag, zero robotic pauses.
          </p>

          <div className="flex justify-center gap-3 mt-6">
            {DEMO_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                onClick={() => handleSelectScenario(sc.id)}
                className={`px-5 py-2 text-xs font-black uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeScenarioId === sc.id
                    ? 'bg-[#a3e635] text-black shadow-lg shadow-[#a3e635]/20'
                    : 'bg-[#18191b] border border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Audio Console */}
          <div className="lg:col-span-7 rounded-xl border border-zinc-800 bg-[#161719] p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a3e635] text-black flex items-center justify-center font-black">
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">
                    SARAH · AI DENTAL RECEPTIONIST
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">DEMO LINE: (800) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-zinc-400 hover:text-white rounded-md bg-zinc-900 border border-zinc-800"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-[#a3e635]" />}
                </button>
                <button
                  onClick={handleTogglePlay}
                  className="px-4 py-2 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase tracking-wider rounded-md flex items-center gap-1.5 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'PAUSE' : 'PLAY AUDIO'}</span>
                </button>
              </div>
            </div>

            {/* Neon Green Audio Waveform */}
            <div className="h-12 w-full bg-black rounded-lg border border-zinc-800 px-4 flex items-center justify-between gap-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                {isPlaying ? 'VOICE STREAMING' : 'READY'}
              </span>
              <div className="flex items-center gap-1 h-7 flex-1 justify-center max-w-xs">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-200 ${
                      isPlaying ? 'bg-[#a3e635]' : 'bg-zinc-800'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.min(100, (Math.sin(i * 0.8 + currentStep) + 1.2) * 45)}%` : '18%',
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-[#a3e635] font-bold">24kHz HD</span>
            </div>

            {/* Live Chat Stream */}
            <div className="space-y-3 min-h-[200px]">
              {activeScenario.dialogue.slice(0, currentStep + 1).map((item, idx) => {
                const isAssistant = item.role === 'assistant';
                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-lg border text-xs leading-relaxed ${
                      isAssistant
                        ? 'bg-[#1a2316] border-[#a3e635]/40 text-white'
                        : 'bg-black border-zinc-800 text-zinc-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-black uppercase mb-1">
                      <span className={isAssistant ? 'text-[#a3e635]' : 'text-zinc-400'}>
                        {item.speaker}
                      </span>
                    </div>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Custom Interactive Testing Prompt Form */}
            <form onSubmit={handleAskCustom} className="pt-4 border-t border-zinc-800 space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                TEST SARAH WITH YOUR OWN QUESTION:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="e.g. Do you accept Delta Dental and have appointments this Friday?"
                  className="flex-1 bg-black border border-zinc-800 focus:border-[#a3e635] rounded-md px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isCallingApi || !customQuestion.trim()}
                  className="px-4 py-2 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase rounded-md transition-colors disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
                >
                  {isCallingApi ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <span>ASK</span>}
                </button>
              </div>
              {customAnswer && (
                <div className="mt-2 p-3 rounded-md bg-[#1a2316] border border-[#a3e635]/50 text-xs text-white">
                  <span className="text-[10px] font-black uppercase text-[#a3e635] block mb-1">SARAH:</span>
                  &ldquo;{customAnswer}&rdquo;
                </div>
              )}
            </form>
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-5 rounded-xl border border-zinc-800 bg-[#161719] p-6 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#a3e635]">
              LIVE INTAKE DISPATCH
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase block mb-0.5">SYMPTOM CLASSIFICATION</span>
                <span className="font-bold text-white">{activeScenario.triage.category}</span>
              </div>
              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase block mb-0.5">SEVERITY</span>
                <span className="font-bold text-[#a3e635]">{activeScenario.triage.severity}</span>
              </div>
              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase block mb-0.5">INSURANCE STATUS</span>
                <span className="font-bold text-white">{activeScenario.triage.insurance}</span>
              </div>
              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase block mb-0.5">PMS ACTION</span>
                <span className="font-bold text-[#a3e635]">{activeScenario.triage.action}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
