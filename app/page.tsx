'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CallAnsweringSection from '@/components/CallAnsweringSection';
import AdDifferenceSection from '@/components/AdDifferenceSection';
import PatientJourneySection from '@/components/PatientJourneySection';
import VoiceDemo from '@/components/VoiceDemo';
import Solutions from '@/components/Solutions';
import IncludedSection from '@/components/IncludedSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleOpenDemoAudio = () => {
    const el = document.getElementById('voice-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col font-sans selection:bg-[#a3e635] selection:text-black">
      {/* Exact HexaPicks Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenDemoAudio={handleOpenDemoAudio}
      />

      <main className="flex-1">
        {/* Exact Screenshot 1: Complete Call Coverage Hero */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenDemoAudio={handleOpenDemoAudio}
        />

        {/* Exact Screenshot 2: Every Call Answered. Every Lead Captured. Every Chair Filled */}
        <CallAnsweringSection />

        {/* Exact Screenshot 3 Top: What Answering Every Call Does To Your Ads */}
        <AdDifferenceSection />

        {/* Exact Screenshot 3 Bottom: What Happens When A Tooth Breaks (5 Lime Circles) */}
        <PatientJourneySection />

        {/* Live Audio / Phone Demo Line */}
        <VoiceDemo />

        {/* HexaPicks #solutions */}
        <Solutions />

        {/* HexaPicks #included */}
        <IncludedSection />

        {/* HexaPicks #what-you-get */}
        <WhatYouGetSection onOpenBooking={handleOpenBooking} />

        {/* HexaPicks #pricing */}
        <Pricing onOpenBooking={handleOpenBooking} />
      </main>

      {/* HexaPicks Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenDemoAudio={handleOpenDemoAudio}
      />

      {/* Get in Touch / Claim Line Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
