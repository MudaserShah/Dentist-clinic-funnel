'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, RefreshCw, Building2, User, Phone, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // Form State
  const [practiceName, setPracticeName] = useState('');
  const [pmsSystem, setPmsSystem] = useState('Dentrix');
  const [doctorName, setDoctorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!practiceName || !email || !phone) {
      setErrorMsg('Please fill in practice name, email, and direct phone number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          practiceName,
          doctorName: doctorName || 'Doctor / Office Manager',
          email,
          phone,
          pmsSystem,
        }),
      });

      if (res.ok) {
        setConfirmed(true);
      } else {
        setErrorMsg('Error submitting booking. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setConfirmed(false);
      setErrorMsg('');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-xl border border-zinc-800 bg-[#161719] p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-md hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#a3e635] mb-1">
                GET IN TOUCH
              </div>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                CLAIM YOUR DENTAL PHONE LINE
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                We will configure a live voice agent tailored to your dental clinic practice in under 24 hours.
              </p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block text-zinc-300 font-bold uppercase tracking-wider mb-1">
                  Dental Practice Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={practiceName}
                    onChange={(e) => setPracticeName(e.target.value)}
                    placeholder="e.g. Austin Family Dental Studio"
                    className="w-full bg-black border border-zinc-800 focus:border-[#a3e635] rounded-md pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-bold uppercase tracking-wider mb-1">
                  Primary Practice Management System (PMS)
                </label>
                <select
                  value={pmsSystem}
                  onChange={(e) => setPmsSystem(e.target.value)}
                  className="w-full bg-black border border-zinc-800 focus:border-[#a3e635] rounded-md px-3 py-2.5 text-white focus:outline-none"
                >
                  <option value="Dentrix">Dentrix (G6, G7, Ascend)</option>
                  <option value="Eaglesoft">Eaglesoft (Patterson)</option>
                  <option value="Open Dental">Open Dental</option>
                  <option value="Curve Dental">Curve Dental Cloud</option>
                  <option value="Denticon">Denticon (Planet DDS)</option>
                  <option value="Other">Other / Custom EHR</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 font-bold uppercase tracking-wider mb-1">
                  Doctor or Office Director Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    placeholder="Dr. Jordan Ellis, DDS"
                    className="w-full bg-black border border-zinc-800 focus:border-[#a3e635] rounded-md pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-bold uppercase tracking-wider mb-1">
                    Clinic Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@austindental.com"
                      className="w-full bg-black border border-zinc-800 focus:border-[#a3e635] rounded-md pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-300 font-bold uppercase tracking-wider mb-1">
                    Direct Phone / Cell *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555-0199"
                      className="w-full bg-black border border-zinc-800 focus:border-[#a3e635] rounded-md pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {errorMsg && <p className="text-xs text-rose-400 font-semibold">{errorMsg}</p>}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#a3e635] hover:bg-[#b2f73e] text-black font-black text-xs uppercase tracking-wider rounded-md shadow-xl shadow-[#a3e635]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>CONFIGURING LINE...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT & GET IN TOUCH</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#a3e635]/10 border border-[#a3e635]/40 text-[#a3e635] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              MESSAGE RECEIVED!
            </h3>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              We are setting up your custom dental voice demo for <strong className="text-white">{practiceName}</strong> ({pmsSystem}). A specialist will call you at <strong className="text-[#a3e635]">{phone}</strong> within 15 minutes.
            </p>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-[#a3e635] text-black font-black text-xs uppercase rounded-md cursor-pointer"
              >
                DONE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
