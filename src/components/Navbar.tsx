'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MILL_INFO } from '@/data/millInfo';
import { PhoneIcon, MapPinIcon, MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Branded Products', href: '/#branded-products' },
    { label: 'Milling Services', href: '/#custom-services' },
    { label: 'Machinery 3D', href: '/#machinery-view' },
    { label: 'Rate Estimator', href: '/#rate-calculator' },
    { label: 'Location & Timings', href: '/#location-hours' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-mill-cream border-b border-mill-border">
      {/* Top operational announcement strip */}
      <div className="bg-mill-paper border-b border-mill-border text-xs text-mill-muted py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-serif text-mill-ink font-semibold">
              {MILL_INFO.location}, {MILL_INFO.district}
            </span>
            <span className="hidden sm:inline text-mill-borderDark">|</span>
            <span className="hidden sm:inline">
              Open Mon to Sat: 7:30 AM to 7:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <a
              href={MILL_INFO.googleMapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-mill-muted hover:text-mill-ink transition-colors duration-150"
            >
              <MapPinIcon size={13} className="text-mill-terracotta" />
              <span>Google Maps Link</span>
            </a>
            <span className="text-mill-borderDark">|</span>
            <a
              href={MILL_INFO.phoneDial}
              className="inline-flex items-center gap-1 font-medium text-mill-terracotta hover:text-mill-terracottaHover transition-colors duration-150"
            >
              <PhoneIcon size={13} />
              <span>{MILL_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Persistent Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Title (Left) */}
          <Link href="/" className="group flex flex-col justify-center">
            <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-mill-ink tracking-tight leading-tight group-hover:text-mill-terracotta transition-colors duration-150">
              {MILL_INFO.businessName}
            </span>
            <span className="text-xs text-mill-muted font-serif tracking-normal mt-0.5">
              Mullassery, Thrissur District, Kerala
            </span>
          </Link>

          {/* Desktop Center/Right Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-serif text-mill-ink">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-mill-terracotta transition-colors duration-150 py-2 border-b-2 border-transparent hover:border-mill-terracotta"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={MILL_INFO.googleMapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-serif font-medium bg-mill-unbleached border border-mill-border text-mill-ink hover:bg-mill-paper transition-colors duration-150 rounded-sm"
              title="Navigate to KR Mill via Google Maps"
            >
              <MapPinIcon size={14} className="text-mill-terracotta" />
              <span>Get Directions</span>
            </a>

            <a
              href={MILL_INFO.phoneDial}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-serif font-semibold bg-mill-terracotta hover:bg-mill-terracottaHover text-mill-cream transition-colors duration-150 rounded-sm"
              title="Call KR Mill directly via landline/mobile"
            >
              <PhoneIcon size={14} />
              <span>Call Mill Directly</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={MILL_INFO.phoneDial}
              className="p-2 border border-mill-border bg-mill-unbleached text-mill-terracotta rounded-sm"
              aria-label="Call Mill directly"
            >
              <PhoneIcon size={18} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-mill-border bg-mill-unbleached text-mill-ink rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer (Flat warm-cream background, no glassmorphism) */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-mill-cream border-t border-mill-border px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-serif text-mill-ink hover:bg-mill-paper border-b border-mill-border/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-2">
            <a
              href={MILL_INFO.phoneDial}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-serif font-semibold bg-mill-terracotta text-mill-cream rounded-sm"
            >
              <PhoneIcon size={14} />
              <span>Call Mill Directly ({MILL_INFO.primaryPhone})</span>
            </a>
            <a
              href={MILL_INFO.googleMapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-serif font-medium bg-mill-unbleached border border-mill-border text-mill-ink rounded-sm"
            >
              <MapPinIcon size={14} className="text-mill-terracotta" />
              <span>Open in Google Maps App</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
