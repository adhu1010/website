'use client';

import React from 'react';
import Link from 'next/link';
import { MILL_INFO } from '@/data/millInfo';
import { PhoneIcon, MapPinIcon, WhatsAppIcon, ShieldVerifiedIcon } from './Icons';

interface FooterProps {
  onOpenLegalModal: (type: 'tos' | 'privacy') => void;
}

export default function Footer({ onOpenLegalModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-mill-unbleached border-t border-mill-border text-mill-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-mill-border">
          
          {/* Brand & Identity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-mill-ink block leading-tight">
                {MILL_INFO.businessName}
              </span>
              <span className="font-serif text-sm text-mill-terracotta block mt-0.5">
                {MILL_INFO.malayalamName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-mill-muted leading-relaxed max-w-md">
              Serving the households, caterers, and small businesses of Mullassery, Venkitangu, and Pavaratty with slow-ground grain flours, pure cold-pressed coconut oil, and single-origin ground spices.
            </p>

            {/* Operational Status Indicator */}
            <div className="inline-flex items-center gap-2 p-2.5 bg-mill-cream border border-mill-border text-xs">
              <span className="w-2.5 h-2.5 bg-mill-leaf shrink-0" />
              <span className="text-mill-ink font-medium">Operational Status: </span>
              <span className="text-mill-muted">Counter Active Mon - Sat (7:30 AM to 7:00 PM)</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-mill-ink uppercase tracking-wider">
              Mill Sections
            </h4>
            <ul className="space-y-2 text-xs font-serif text-mill-muted">
              <li>
                <a href="#hero" className="hover:text-mill-terracotta transition-colors duration-150">
                  Home &amp; Overview
                </a>
              </li>
              <li>
                <a href="#branded-products" className="hover:text-mill-terracotta transition-colors duration-150">
                  Our Branded Products
                </a>
              </li>
              <li>
                <a href="#custom-services" className="hover:text-mill-terracotta transition-colors duration-150">
                  Custom Milling Services
                </a>
              </li>
              <li>
                <a href="#machinery-view" className="hover:text-mill-terracotta transition-colors duration-150">
                  3D Machinery Rig
                </a>
              </li>
              <li>
                <a href="#rate-calculator" className="hover:text-mill-terracotta transition-colors duration-150">
                  Job-Work Cost Estimator
                </a>
              </li>
              <li>
                <a href="#location-hours" className="hover:text-mill-terracotta transition-colors duration-150">
                  Location &amp; Operating Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Counter Contacts & Verification (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-mill-ink uppercase tracking-wider">
              Direct Contact &amp; GPS
            </h4>
            <div className="space-y-2.5 text-xs text-mill-muted">
              <div className="flex items-start gap-2">
                <MapPinIcon size={14} className="text-mill-terracotta mt-0.5 shrink-0" />
                <span>
                  {MILL_INFO.addressFull}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} className="text-mill-terracotta shrink-0" />
                <a href={MILL_INFO.phoneDial} className="hover:text-mill-ink font-mono font-medium">
                  {MILL_INFO.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon size={14} className="text-mill-leaf shrink-0" />
                <a
                  href={MILL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-mill-ink font-mono font-medium text-mill-leaf"
                >
                  WhatsApp: {MILL_INFO.whatsappNumber}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={MILL_INFO.googleMapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-mill-terracotta hover:underline font-serif font-medium"
                >
                  View on Google Business Map &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mill-muted">
          <div>
            &copy; {currentYear} {MILL_INFO.businessName}, Mullassery, Thrissur District, Kerala. All rights reserved.
          </div>

          {/* Legal Links (Modals + Full Pages) */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-serif">
            <button
              type="button"
              onClick={() => onOpenLegalModal('tos')}
              className="hover:text-mill-ink underline"
            >
              Terms of Service
            </button>
            <span className="text-mill-borderDark">|</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-mill-ink underline"
            >
              Privacy Policy
            </button>
            <span className="text-mill-borderDark">|</span>
            <Link href="/terms-of-service" className="hover:text-mill-ink">
              Dedicated TOS Page
            </Link>
            <span className="text-mill-borderDark">|</span>
            <Link href="/privacy-policy" className="hover:text-mill-ink">
              Dedicated Privacy Page
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
