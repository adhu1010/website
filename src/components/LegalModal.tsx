'use client';

import React from 'react';
import { CloseIcon, DocumentTextIcon, ShieldVerifiedIcon } from './Icons';
import { MILL_INFO } from '@/data/millInfo';

interface LegalModalProps {
  type: 'tos' | 'privacy' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mill-ink/75"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[85vh] bg-mill-cream border border-mill-borderDark overflow-y-auto p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-mill-border">
          <div className="flex items-center gap-2">
            {type === 'tos' ? (
              <DocumentTextIcon size={20} className="text-mill-terracotta" />
            ) : (
              <ShieldVerifiedIcon size={20} className="text-mill-leaf" />
            )}
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-mill-ink">
              {type === 'tos' ? 'Terms of Service & Milling Policies' : 'Customer Privacy Policy'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 border border-mill-border bg-mill-paper hover:bg-mill-unbleached text-mill-ink rounded-sm"
            aria-label="Close dialog"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Modal Body Content */}
        {type === 'tos' ? (
          <div className="space-y-6 text-xs sm:text-sm text-mill-muted leading-relaxed font-sans">
            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                1. Retail Packaged Staples &amp; Return Policy
              </h3>
              <p>
                As our food products (spices, flours, and cold-pressed coconut oil) are freshly milled without chemical preservatives, opened packs cannot be returned or refunded once taken outside the mill counter, except in the rare instance of verified packaging seal failure upon immediate inspection.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                2. Custom Job-Work Milling Batch Policies
              </h3>
              <p>
                Customers are solely responsible for inspecting their raw grains, paddy, or copra prior to depositing them in our feed hoppers. KR Mill will not accept liability for reduced flour yield or darkened oil caused by damp, mouldy, insect-infested, or improperly sun-cured agricultural crops.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                3. Pickup Holding Timelines &amp; Storage
              </h3>
              <p>
                Processed flour bags and bottled copra oil must be collected within <strong>7 business days</strong> of job completion. Due to limited storage space and the perishable nature of unpreserved stone-ground grains, items uncollected after 14 days will be safely cleared.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                4. Machinery Hygiene &amp; Allergen Separation
              </h3>
              <p>
                While our grain chakki, spice hammer mills, and copra expellers are maintained in dedicated bays, customers with severe gluten, mustard, or grain allergies must notify our operator before initiating a dedicated milling run.
              </p>
            </div>

            <div className="pt-4 border-t border-mill-border text-xs text-mill-ink">
              Effective from January 2024. For questions, contact {MILL_INFO.businessName}, {MILL_INFO.location}, Kerala ({MILL_INFO.primaryPhone}).
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-xs sm:text-sm text-mill-muted leading-relaxed font-sans">
            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                1. Information We Collect
              </h3>
              <p>
                KR Flour Rice and Oil Mill collects customer contact details (such as your phone number or name) exclusively when you telephone our counter, send a WhatsApp inquiry, or place a bulk order for grocery staples.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                2. Zero Third-Party Advertising Tracking
              </h3>
              <p>
                We do not sell, rent, monetize, or transmit your contact data to third-party advertisers, data brokers, or marketing networks. Your phone number is strictly used to notify you when your custom milling batch is ready for pickup or to confirm delivery details.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                3. Direct WhatsApp &amp; External Navigation
              </h3>
              <p>
                When using WhatsApp or Google Maps links on this website, interactions are governed by the respective privacy policies of WhatsApp LLC and Google LLC. We do not place tracking cookies on your device.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-mill-ink mb-1">
                4. Contacting the Mill Regarding Data
              </h3>
              <p>
                If you wish to have your contact number removed from our manual counter registers or WhatsApp contact list, simply inform the mill proprietor in person or via telephone at {MILL_INFO.primaryPhone}.
              </p>
            </div>

            <div className="pt-4 border-t border-mill-border text-xs text-mill-ink">
              Privacy Standard maintained for KR Flour Rice and Oil Mill, Mullassery, Thrissur District, Kerala.
            </div>
          </div>
        )}

        {/* Modal Close Button */}
        <div className="mt-8 pt-4 border-t border-mill-border flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-serif font-semibold bg-mill-ink hover:bg-mill-muted text-mill-cream rounded-sm"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
