'use client';

import React from 'react';
import { MILL_INFO } from '@/data/millInfo';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, CloseIcon, ScaleIcon } from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mill-ink/75"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-mill-cream border border-mill-borderDark p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-mill-border">
          <div>
            <h2 className="font-serif text-xl font-bold text-mill-ink">
              Direct Counter Order &amp; Inquiry
            </h2>
            <span className="text-xs text-mill-muted font-serif">
              {MILL_INFO.businessName}, Mullassery
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 border border-mill-border bg-mill-paper hover:bg-mill-unbleached text-mill-ink rounded-sm"
            aria-label="Close dialog"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Option 1: WhatsApp */}
          <a
            href={MILL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-mill-unbleached border border-mill-border hover:border-mill-borderDark transition-colors duration-150 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-mill-leaf text-mill-cream">
                <WhatsAppIcon size={18} />
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-mill-ink block group-hover:text-mill-leaf">
                  Order via WhatsApp Message
                </span>
                <span className="text-xs text-mill-muted block">
                  Send your product requirements or grain pickup questions.
                </span>
              </div>
            </div>
            <span className="text-xs font-serif font-medium text-mill-leaf underline">
              Open Chat &rarr;
            </span>
          </a>

          {/* Option 2: Phone call */}
          <a
            href={MILL_INFO.phoneDial}
            className="p-4 bg-mill-unbleached border border-mill-border hover:border-mill-borderDark transition-colors duration-150 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-mill-terracotta text-mill-cream">
                <PhoneIcon size={18} />
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-mill-ink block group-hover:text-mill-terracotta">
                  Call Counter ({MILL_INFO.primaryPhone})
                </span>
                <span className="text-xs text-mill-muted block">
                  Speak directly with the mill operator or counter staff.
                </span>
              </div>
            </div>
            <span className="text-xs font-serif font-medium text-mill-terracotta underline">
              Call Now &rarr;
            </span>
          </a>

          {/* Option 3: Navigation */}
          <a
            href={MILL_INFO.googleMapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-mill-unbleached border border-mill-border hover:border-mill-borderDark transition-colors duration-150 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-mill-paper border border-mill-border text-mill-ink">
                <MapPinIcon size={18} className="text-mill-terracotta" />
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-mill-ink block">
                  Get Driving Directions
                </span>
                <span className="text-xs text-mill-muted block">
                  Open Google Maps for turn-by-turn guidance to our mill.
                </span>
              </div>
            </div>
            <span className="text-xs font-serif font-medium text-mill-muted underline">
              View Map &rarr;
            </span>
          </a>
        </div>

        {/* Operating Hours Note */}
        <div className="mt-6 pt-4 border-t border-mill-border text-xs text-mill-muted text-center">
          Counter intake open Monday through Saturday: 7:30 AM to 7:00 PM.
        </div>
      </div>
    </div>
  );
}
