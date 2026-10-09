'use client';

import React from 'react';
import { MILL_INFO } from '@/data/millInfo';
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon, ExternalLinkIcon } from './Icons';

export default function LocationAndHours() {
  return (
    <section id="location-hours" className="w-full py-12 md:py-20 bg-mill-cream border-t border-mill-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-serif uppercase tracking-widest text-mill-terracotta mb-2 block font-semibold">
            Mullassery &amp; Venkitangu Link Road
          </span>
          <h2 className="fluid-section-title font-serif text-mill-ink font-bold mb-3">
            Location, Operating Hours &amp; Direct Counter Contact
          </h2>
          <p className="text-sm sm:text-base text-mill-muted leading-relaxed">
            Conveniently situated along the main link corridor connecting Mullassery with Venkitangu and Pavaratty in Thrissur District. Walk-in milling intake is available throughout the day.
          </p>
        </div>

        {/* Side-by-side practical block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Operating Schedule & Contact Details (6 cols) */}
          <div className="lg:col-span-6 bg-mill-unbleached border border-mill-border p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Timings Block */}
              <div className="border-b border-mill-border pb-6">
                <h3 className="font-serif text-lg font-bold text-mill-ink mb-4 flex items-center gap-2">
                  <ClockIcon size={18} className="text-mill-terracotta" />
                  <span>Operating Schedule &amp; Mill Shifts</span>
                </h3>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 bg-mill-cream border border-mill-border">
                    <span className="font-medium text-mill-ink">Monday to Saturday:</span>
                    <span className="font-mono font-bold text-mill-terracotta">
                      {MILL_INFO.openingHours.morningEvening}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-mill-paper/70 border border-mill-border text-mill-muted">
                    <span>Machinery Rest &amp; Cleaning:</span>
                    <span className="font-mono">
                      {MILL_INFO.openingHours.lunchBreak}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-mill-paper/70 border border-mill-border text-mill-muted">
                    <span>Weekly Maintenance Holiday:</span>
                    <span className="font-serif font-medium text-mill-ink">
                      {MILL_INFO.openingHours.closedDay}
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact Postal Address & Landmark Directions */}
              <div className="border-b border-mill-border pb-6">
                <h3 className="font-serif text-lg font-bold text-mill-ink mb-3 flex items-center gap-2">
                  <MapPinIcon size={18} className="text-mill-terracotta" />
                  <span>Postal Address &amp; Landmarks</span>
                </h3>

                <p className="font-serif text-sm font-semibold text-mill-ink mb-1">
                  {MILL_INFO.businessName}
                </p>
                <p className="text-xs text-mill-muted leading-relaxed mb-2">
                  {MILL_INFO.addressFull}
                </p>
                <p className="text-xs text-mill-ink bg-mill-paper p-2.5 border border-mill-border">
                  <span className="font-semibold">Landmark Guide: </span>
                  {MILL_INFO.landmark}
                </p>
              </div>

              {/* Direct Phones & WhatsApp */}
              <div>
                <h3 className="font-serif text-lg font-bold text-mill-ink mb-3">
                  Direct Mill Communications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href={MILL_INFO.phoneDial}
                    className="p-3 bg-mill-cream border border-mill-borderDark hover:bg-mill-paper transition-colors duration-150 flex items-center gap-3"
                  >
                    <div className="p-2 bg-mill-terracotta text-mill-cream">
                      <PhoneIcon size={15} />
                    </div>
                    <div>
                      <span className="text-[11px] text-mill-muted block">Direct Phone Call</span>
                      <span className="font-mono font-bold text-mill-ink">{MILL_INFO.primaryPhone}</span>
                    </div>
                  </a>

                  <a
                    href={MILL_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-mill-cream border border-mill-borderDark hover:bg-mill-paper transition-colors duration-150 flex items-center gap-3"
                  >
                    <div className="p-2 bg-mill-leaf text-mill-cream">
                      <WhatsAppIcon size={15} />
                    </div>
                    <div>
                      <span className="text-[11px] text-mill-muted block">WhatsApp Orders</span>
                      <span className="font-mono font-bold text-mill-leaf">{MILL_INFO.whatsappNumber}</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Counter Notice */}
            <div className="mt-6 pt-4 border-t border-mill-border text-[11px] text-mill-muted flex items-center justify-between">
              <span>Payment modes accepted: Cash &amp; UPI (Google Pay, PhonePe, Paytm).</span>
              <span className="font-mono">PIN: {MILL_INFO.pincode}</span>
            </div>
          </div>

          {/* Column 2: Interactive Google Maps Iframe Block (6 cols) */}
          <div className="lg:col-span-6 bg-mill-unbleached border border-mill-border p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-mill-border">
              <div>
                <h3 className="font-serif text-lg font-bold text-mill-ink">
                  Interactive Mill Navigation Map
                </h3>
                <span className="text-xs text-mill-muted font-serif">
                  Mullassery - Venkitangu Corridor, Thrissur
                </span>
              </div>
              <a
                href={MILL_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-serif font-medium bg-mill-terracotta hover:bg-mill-terracottaHover text-mill-cream transition-colors duration-150 inline-flex items-center gap-1.5 rounded-sm"
              >
                <span>Open in Google Maps App</span>
                <ExternalLinkIcon size={12} />
              </a>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[320px] sm:h-[380px] border border-mill-border overflow-hidden bg-mill-paper">
              <iframe
                title="Google Maps Location for KR Flour Rice and Oil Mill"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15688.750533595568!2d76.05943!3d10.56475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795790a8a6cf7%3A0x6b490d18f5049c6d!2sMullassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[95%]"
              />
            </div>

            {/* Route Guidelines below Map */}
            <div className="mt-4 p-3 bg-mill-paper border border-mill-border text-xs text-mill-muted">
              <strong className="text-mill-ink font-serif block mb-0.5">
                Driving Directions:
              </strong>
              From Venkitangu Junction, head north towards Mullassery on the main link road (approx. 2.5 km). Parking space is available in front of the mill for two-wheelers, auto-rickshaws, and mini-trucks for grain sack loading.
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-mill-muted font-mono text-[11px]">
                Google Maps ID: share.google/nl9I2yxKnEdPUa9R5
              </span>
              <a
                href={MILL_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mill-terracotta hover:underline font-serif font-medium"
              >
                Direct GPS Link &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
