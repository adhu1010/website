import React from 'react';
import Link from 'next/link';
import { MILL_INFO } from '@/data/millInfo';

export const metadata = {
  title: 'Privacy Policy | KR Flour Rice and Oil Mill',
  description: 'Realistic privacy policy outlining customer phone number and inquiry data handling without third-party tracking for KR Flour Rice and Oil Mill, Kerala.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-mill-cream py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-xs text-mill-muted font-serif">
          <Link href="/" className="hover:text-mill-terracotta underline">
            Home
          </Link>
          <span className="mx-2 text-mill-borderDark">/</span>
          <span>Privacy Policy</span>
        </div>

        {/* Article Header */}
        <div className="border-b border-mill-border pb-6 mb-8">
          <span className="text-xs font-serif uppercase tracking-widest text-mill-leaf mb-2 block font-semibold">
            Customer Information &amp; Data Privacy
          </span>
          <h1 className="fluid-section-title font-serif text-mill-ink font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-mill-muted">
            Last Updated: January 2024 | Location: Mullassery, Thrissur District, Kerala
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm text-mill-muted leading-relaxed font-sans bg-mill-unbleached p-6 sm:p-10 border border-mill-border">
          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              1. Overview
            </h2>
            <p>
              KR Flour Rice and Oil Mill values customer trust and respects your personal privacy. We do not engage in online data harvesting, tracking scripts, behavioral surveillance, or digital advertisement networks. This policy explains how we handle customer contact information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              2. What Information We Receive
            </h2>
            <p className="mb-2">
              We collect information strictly when you voluntarily reach out to us:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-mill-ink">
              <li>
                <strong>Phone &amp; WhatsApp Communications:</strong> Your phone number and name provided when booking milling job work, requesting bulk supply quotes, or asking for driving directions.
              </li>
              <li>
                <strong>In-Person Counter Registers:</strong> Token receipts or contact slips used to match your custom batch sack of grain or oil flagon during collection.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              3. How Your Information Is Used
            </h2>
            <p>
              Customer contact information is used strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-mill-ink mt-2">
              <li>Notify you when your stone-ground flours or expressed copra oil batches are ready for collection.</li>
              <li>Coordinate wholesale grocery deliveries to local catering units and grocery merchants.</li>
              <li>Provide direct customer support via phone or WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              4. Zero Third-Party Advertising Sharing
            </h2>
            <p>
              We never sell, rent, monetize, or distribute customer telephone numbers or purchase records to third parties, advertising firms, or marketing agencies under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              5. Third-Party Services (Google Maps &amp; WhatsApp)
            </h2>
            <p>
              Our website links directly to Google Maps for turn-by-turn navigation and WhatsApp for real-time messaging. When clicking these links, interactions are subject to the independent privacy terms of Google LLC and WhatsApp LLC.
            </p>
          </section>

          <section className="pt-6 border-t border-mill-border">
            <h2 className="font-serif text-base font-bold text-mill-ink mb-1">
              Data Privacy Officer / Proprietor Contact:
            </h2>
            <p className="text-xs">
              KR Flour Rice and Oil Mill, Main Road, Mullassery, Thrissur District, Kerala - 680509.<br />
              Direct Line: {MILL_INFO.primaryPhone}
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-2.5 text-xs font-serif font-semibold bg-mill-ink text-mill-cream hover:bg-mill-muted rounded-sm"
          >
            &larr; Return to Mill Homepage
          </Link>
        </div>

      </div>
    </main>
  );
}
