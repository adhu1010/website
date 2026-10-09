'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MachineViewer3D from '@/components/MachineViewer3D';
import BrandedProducts from '@/components/BrandedProducts';
import CustomMillingServices from '@/components/CustomMillingServices';
import JobWorkEstimator from '@/components/JobWorkEstimator';
import OperationalFacts from '@/components/OperationalFacts';
import LocationAndHours from '@/components/LocationAndHours';
import Footer from '@/components/Footer';
import LegalModal from '@/components/LegalModal';
import ContactModal from '@/components/ContactModal';

export default function HomePage() {
  const [legalModalType, setLegalModalType] = useState<'tos' | 'privacy' | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-mill-cream text-mill-ink">
      {/* Persistent Flat Warm-Cream Topbar Navigation */}
      <Navbar onOpenOrderModal={() => setIsContactModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrderModal={() => setIsContactModalOpen(true)} />

        {/* 3D Interactive Milling Machinery Rig */}
        <MachineViewer3D />

        {/* Dedicated Section: Our Branded Packaged Products */}
        <BrandedProducts />

        {/* Dedicated Section: Custom Milling & Extraction Services */}
        <CustomMillingServices />

        {/* Real-World Practical Tool: Job-Work Rate & Yield Estimator */}
        <JobWorkEstimator />

        {/* Verified Operational Facts Ledger Table */}
        <OperationalFacts />

        {/* Location, Operating Hours & Embedded Interactive Google Map */}
        <LocationAndHours />
      </main>

      {/* Heritage Footer */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* In-Page Legal Reader Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Direct Order / Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
