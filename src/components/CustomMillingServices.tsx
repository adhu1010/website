'use client';

import React, { useState } from 'react';
import { MILLING_SERVICES, MillingService } from '@/data/services';
import { MILL_INFO } from '@/data/millInfo';
import { ScaleIcon, ClockIcon, ShieldVerifiedIcon, GrainStalkIcon, OilCanIcon, WhatsAppIcon, PhoneIcon } from './Icons';

export default function CustomMillingServices() {
  const [activeServiceId, setActiveServiceId] = useState<string>(MILLING_SERVICES[0].id);

  const activeService = MILLING_SERVICES.find((s) => s.id === activeServiceId) || MILLING_SERVICES[0];

  return (
    <section id="custom-services" className="w-full py-12 md:py-20 bg-mill-unbleached border-t border-mill-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-serif uppercase tracking-widest text-mill-terracotta mb-2 block font-semibold">
            Job-Work Grain &amp; Copra Processing
          </span>
          <h2 className="fluid-section-title font-serif text-mill-ink font-bold mb-3">
            Custom Milling &amp; Cold Oil Extraction Services
          </h2>
          <p className="text-sm sm:text-base text-mill-muted leading-relaxed">
            Customers and farming families can bring their own harvested paddy, raw wheat, home-dried copra, and sun-dried spices. We process your materials separately to ensure you take back 100% of your own produce, milled exactly to your requested texture.
          </p>
        </div>

        {/* Service Type Selection Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-mill-paper border border-mill-border mb-8">
          {MILLING_SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveServiceId(service.id)}
              className={`p-3 text-left transition-colors duration-150 rounded-none border ${
                activeServiceId === service.id
                  ? 'bg-mill-cream border-mill-borderDark text-mill-ink'
                  : 'bg-transparent border-transparent text-mill-muted hover:text-mill-ink'
              }`}
            >
              <div className="font-serif text-sm font-bold flex items-center gap-2">
                {service.category === 'grain-milling' && <GrainStalkIcon size={14} className="text-mill-terracotta" />}
                {service.category === 'oil-expelling' && <OilCanIcon size={14} className="text-mill-turmeric" />}
                {service.category === 'spice-pulverizing' && <ScaleIcon size={14} className="text-mill-burlap" />}
                <span>{service.title}</span>
              </div>
              <div className="text-xs text-mill-muted mt-0.5 font-serif">
                {service.malayalamTitle}
              </div>
            </button>
          ))}
        </div>

        {/* Active Service Workflow Card */}
        <div className="border border-mill-border bg-mill-cream p-6 sm:p-8">
          
          {/* Header of Active Service */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-mill-border">
            <div>
              <div className="flex items-center gap-2 text-xs font-serif text-mill-terracotta font-semibold uppercase mb-1">
                <span>{activeService.malayalamTitle}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-mill-ink">
                {activeService.title}
              </h3>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="bg-mill-unbleached px-3 py-2 border border-mill-border">
                <span className="text-mill-muted block">Milling Charge:</span>
                <span className="font-serif font-bold text-sm text-mill-terracotta">
                  {activeService.serviceRate}
                </span>
              </div>
              <div className="bg-mill-unbleached px-3 py-2 border border-mill-border">
                <span className="text-mill-muted block">Minimum Lot Size:</span>
                <span className="font-serif font-semibold text-sm text-mill-ink">
                  {activeService.minimumBatch}
                </span>
              </div>
              <div className="bg-mill-unbleached px-3 py-2 border border-mill-border">
                <span className="text-mill-muted block">Turnaround Time:</span>
                <span className="font-serif font-semibold text-sm text-mill-ink">
                  {activeService.turnaroundTime}
                </span>
              </div>
            </div>
          </div>

          {/* Sequential Narrative Workflow Steps */}
          <div className="py-8">
            <h4 className="font-serif text-base font-bold text-mill-ink mb-6">
              Sequential Processing Workflow:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeService.processSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-mill-unbleached p-4 border border-mill-border flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-mill-cream bg-mill-terracotta px-2 py-0.5 rounded-none">
                        Step 0{step.stepNumber}
                      </span>
                      <span className="text-[11px] font-mono text-mill-muted">
                        Verified SOP
                      </span>
                    </div>
                    <h5 className="font-serif text-sm font-bold text-mill-ink mb-2">
                      {step.stepTitle}
                    </h5>
                    <p className="text-xs text-mill-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines, Yield & Hygiene Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-mill-border">
            
            {/* Customer Preparation Advice */}
            <div className="bg-mill-paper/70 p-5 border border-mill-border">
              <h5 className="font-serif text-sm font-bold text-mill-ink mb-3 flex items-center gap-2">
                <ShieldVerifiedIcon size={15} className="text-mill-leaf" />
                <span>Customer Pre-Arrival Instructions:</span>
              </h5>
              <ul className="space-y-2 text-xs text-mill-muted">
                {activeService.customerPreparationGuide.map((guide, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-mill-terracotta font-semibold mt-0.5">{idx + 1}.</span>
                    <span>{guide}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yield & Sanitation Standard */}
            <div className="bg-mill-paper/70 p-5 border border-mill-border flex flex-col justify-between">
              <div>
                <h5 className="font-serif text-sm font-bold text-mill-ink mb-2">
                  Expected Output &amp; Yield Benchmark:
                </h5>
                <p className="text-xs text-mill-ink font-serif mb-4 bg-mill-cream p-2.5 border border-mill-border">
                  {activeService.yieldBenchmark}
                </p>

                <h5 className="font-serif text-sm font-bold text-mill-ink mb-1">
                  Hygiene &amp; Machine Maintenance Standard:
                </h5>
                <p className="text-xs text-mill-muted">
                  {activeService.sanitationStandard}
                </p>
              </div>

              {/* Direct Inquiry Bar */}
              <div className="mt-4 pt-3 border-t border-mill-border flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/919447281042?text=Hello%20KR%20Mill,%20I%20have%20questions%20regarding%20job%20work%20for%20${encodeURIComponent(
                    activeService.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-serif font-medium bg-mill-leaf text-mill-cream hover:bg-mill-leafHover transition-colors duration-150 inline-flex items-center gap-1.5 rounded-sm"
                >
                  <WhatsAppIcon size={13} />
                  <span>Ask Job-Work Question</span>
                </a>
                <a
                  href={MILL_INFO.phoneDial}
                  className="px-4 py-2 text-xs font-serif font-medium bg-mill-cream border border-mill-borderDark text-mill-ink hover:bg-mill-unbleached transition-colors duration-150 inline-flex items-center gap-1.5 rounded-sm"
                >
                  <PhoneIcon size={13} />
                  <span>Call Machine Operator</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
