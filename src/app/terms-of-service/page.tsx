import React from 'react';
import Link from 'next/link';
import { MILL_INFO } from '@/data/millInfo';

export const metadata = {
  title: 'Terms of Service & Milling Policies | KR Flour Rice and Oil Mill',
  description: 'Retail grocery return policy, job-work custom grain milling batch terms, and pickup holding guidelines for KR Flour Rice and Oil Mill, Mullassery, Kerala.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-mill-cream py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-xs text-mill-muted font-serif">
          <Link href="/" className="hover:text-mill-terracotta underline">
            Home
          </Link>
          <span className="mx-2 text-mill-borderDark">/</span>
          <span>Terms of Service</span>
        </div>

        {/* Article Header */}
        <div className="border-b border-mill-border pb-6 mb-8">
          <span className="text-xs font-serif uppercase tracking-widest text-mill-terracotta mb-2 block font-semibold">
            Operational Governance &amp; Customer Agreement
          </span>
          <h1 className="fluid-section-title font-serif text-mill-ink font-bold mb-3">
            Terms of Service &amp; Custom Milling Policies
          </h1>
          <p className="text-xs font-mono text-mill-muted">
            Last Updated: January 2024 | Location: Mullassery, Thrissur District, Kerala
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm text-mill-muted leading-relaxed font-sans bg-mill-unbleached p-6 sm:p-10 border border-mill-border">
          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              1. General Mill Counter Operations
            </h2>
            <p>
              By purchasing packaged spices and flours or by engaging KR Flour Rice and Oil Mill for custom agricultural milling and oil expelling services at our Mullassery facility, you agree to abide by these operational policies established under Kerala state retail and agro-processing norms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              2. Retail Return Policy for Packaged Grocery Staples
            </h2>
            <p>
              Due to the perishable nature of fresh stone-ground flours (rice powder, puttu podi, whole wheat atta, ragi) and freshly ground pure spices, items that have been unsealed or removed from the retail counter cannot be returned, exchanged, or refunded. Returns are permitted exclusively in the rare event of verified packaging defect or tear presented at our counter on the same calendar day of purchase.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              3. Custom Job-Work Milling &amp; Batch Policies
            </h2>
            <p className="mb-2">
              When bringing your own harvested paddy, raw grains, whole spices, or sun-dried copra:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-mill-ink">
              <li>
                <strong>Raw Material Quality:</strong> The customer must ensure materials are thoroughly sun-dried and free from dampness, mould, stones, gravel, or insect infestation. The mill operator reserves the right to decline milling damp produce that could foul stone plates or expeller cages.
              </li>
              <li>
                <strong>Batch Separation:</strong> Custom lots are handled individually. Yield recovery depends entirely on the moisture level and grade of raw crops supplied by the customer.
              </li>
              <li>
                <strong>Oil Extraction:</strong> Minimum batch size for dedicated copra pressing is 5.0 kg dried copra. Oil and oil cake (തേങ്ങാ പിണ്ണാക്ക്) are weighed and handed over directly.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              4. Pickup Holding Timelines &amp; Unclaimed Lots
            </h2>
            <p>
              Processed grains, flours, and bottled oils must be collected within <strong>7 business days</strong> of notification. Due to limited hygiene-monitored holding space and risk of humidity spoiling freshly stone-milled flours, lots uncollected after 14 days will be cleared at the mill&apos;s discretion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-mill-ink mb-2">
              5. Pricing, Quotations &amp; Payment
            </h2>
            <p>
              Job-work processing charges are billed strictly on a per-kilogram basis according to our prominently displayed rate card. Payments must be settled in full upon collection via Cash or UPI.
            </p>
          </section>

          <section className="pt-6 border-t border-mill-border">
            <h2 className="font-serif text-base font-bold text-mill-ink mb-1">
              Contact Regarding Inquiries:
            </h2>
            <p className="text-xs">
              KR Flour Rice and Oil Mill, Main Road, Mullassery, Thrissur District, Kerala - 680509.<br />
              Telephone: {MILL_INFO.primaryPhone} | WhatsApp: {MILL_INFO.whatsappNumber}
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-2.5 text-xs font-serif font-semibold bg-mill-terracotta text-mill-cream hover:bg-mill-terracottaHover rounded-sm"
          >
            &larr; Return to Mill Homepage
          </Link>
        </div>

      </div>
    </main>
  );
}
