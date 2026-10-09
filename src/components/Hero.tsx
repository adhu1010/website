'use client';

import React from 'react';
import Image from 'next/image';
import { MILL_INFO } from '@/data/millInfo';
import { MapPinIcon, PhoneIcon, WhatsAppIcon, DocumentTextIcon, ScaleIcon } from './Icons';

interface HeroProps {
  onOpenOrderModal?: () => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  return (
    <section id="hero" className="w-full bg-mill-cream border-b border-mill-border py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Grounded Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Heritage Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mill-paper border border-mill-border text-xs font-serif text-mill-muted mb-6 w-fit rounded-sm">
              <span className="w-2 h-2 bg-mill-terracotta" />
              <span>Mullassery &amp; Venkitangu, Thrissur District</span>
              <span className="text-mill-borderDark">|</span>
              <span className="font-medium text-mill-ink">Established Local Mill</span>
            </div>

            {/* Main Grounded Headline */}
            <h1 className="fluid-hero-title font-serif text-mill-ink font-bold tracking-tight mb-6">
              Traditional Grain Milling, Pure Cold-Pressed Oils &amp; Fresh Ground Spices.
            </h1>

            {/* Malayalam Name Sub-Header */}
            <div className="text-base sm:text-lg font-serif text-mill-terracotta font-medium mb-4">
              {MILL_INFO.malayalamName}
            </div>

            {/* Subtitle Body Copy */}
            <p className="text-base sm:text-lg text-mill-muted leading-relaxed mb-8 max-w-2xl">
              KR Flour Rice and Oil Mill serves households, local catering cooks, and small business kitchens across Mullassery and Venkitangu with unadulterated food staples. We mill custom grain batches on traditional granite stones and express pure copra coconut oil without chemical refining, bleaching, or synthetic additives.
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#branded-products"
                className="px-6 py-3.5 text-sm font-serif font-semibold bg-mill-terracotta hover:bg-mill-terracottaHover text-mill-cream transition-colors duration-150 rounded-sm inline-flex items-center gap-2"
              >
                <DocumentTextIcon size={16} />
                <span>Check Product List</span>
              </a>

              <a
                href={MILL_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-serif font-medium bg-mill-unbleached hover:bg-mill-paper text-mill-ink border border-mill-borderDark transition-colors duration-150 rounded-sm inline-flex items-center gap-2"
              >
                <MapPinIcon size={16} className="text-mill-terracotta" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={MILL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-serif font-medium bg-mill-paper hover:bg-mill-unbleached text-mill-leaf border border-mill-border transition-colors duration-150 rounded-sm inline-flex items-center gap-2"
              >
                <WhatsAppIcon size={16} className="text-mill-leaf" />
                <span>WhatsApp Mill</span>
              </a>
            </div>

            {/* Grounded Operational Bullet Points */}
            <div className="border-t border-mill-border pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-mill-muted">
              <div>
                <strong className="block font-serif text-mill-ink text-sm font-medium mb-1">
                  Custom Batch Processing
                </strong>
                Bring your sun-dried paddy, wheat berries, ragi, or dried copra for custom grinding.
              </div>
              <div>
                <strong className="block font-serif text-mill-ink text-sm font-medium mb-1">
                  Zero Preservatives
                </strong>
                Flours and spices ground fresh weekly. No chalk powders, starch fillers, or artificial dyes.
              </div>
              <div>
                <strong className="block font-serif text-mill-ink text-sm font-medium mb-1">
                  Walk-In Counter
                </strong>
                Direct counter service open Monday through Saturday starting at 7:30 AM.
              </div>
            </div>

          </div>

          {/* Right Column: Documentary-Style Authentic Photograph (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="border border-mill-border bg-mill-unbleached p-2">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden border border-mill-border">
                <Image
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional grain bags, harvested rice, and natural agro-milling staples"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>

              {/* Documentary Caption Bar */}
              <div className="mt-3 px-2 pb-1 text-xs text-mill-muted flex items-start justify-between gap-3">
                <span className="font-serif italic">
                  Cleaned paddy grains and whole staples prepared for stone chakki milling.
                </span>
                <span className="font-mono text-[11px] text-mill-ink whitespace-nowrap">
                  Mullassery Unit
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
