'use client';

import React from 'react';
import { MILL_INFO } from '@/data/millInfo';
import { ShieldVerifiedIcon, ExternalLinkIcon, MapPinIcon } from './Icons';

export default function OperationalFacts() {
  const verifiedFacts = [
    {
      parameter: 'Extraction Temperature',
      traditionalStandard: 'Below 45 degrees Celsius (cold screw expelling)',
      industrialAlternative: '80 to 110 degrees Celsius (chemical heat pressing)',
      operationalSignificance: 'Protects natural antioxidants, delicate vitamin E, and natural coconut aroma without scorching.',
    },
    {
      parameter: 'Stone Milling Speed',
      traditionalStandard: 'Gentle RPM vertical granite chakki',
      industrialAlternative: 'High-speed metal hammer mills (3000+ RPM)',
      operationalSignificance: 'Preserves the living wheat germ and bran fiber without burning natural cereal sweetness.',
    },
    {
      parameter: 'Spice Formulation',
      traditionalStandard: '100% whole sun-dried spices',
      industrialAlternative: 'Extracted oleoresins, spent powder, and red dyes',
      operationalSignificance: 'Zero artificial coloring (no Sudan red), zero starch filler, zero synthetic aroma additives.',
    },
    {
      parameter: 'Copra Selection',
      traditionalStandard: 'Shed-cured dried coconut halves (under 6% moisture)',
      industrialAlternative: 'Sulfur-fumigated industrial copra scraps',
      operationalSignificance: 'Guarantees crystal-clear oil with extended shelf stability and no sour rancidity.',
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-mill-unbleached border-t border-mill-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-mill-border">
          <div className="max-w-2xl">
            <span className="text-xs font-serif uppercase tracking-widest text-mill-terracotta mb-2 block font-semibold">
              Operational Standards &amp; Verification
            </span>
            <h2 className="fluid-section-title font-serif text-mill-ink font-bold mb-2">
              Verified Mill Standards vs Industrial Processing
            </h2>
            <p className="text-sm sm:text-base text-mill-muted">
              We do not present fabricated star ratings or marketing claims. Here are the verifiable operational facts of how your grains, spices, and copra are processed at KR Mill.
            </p>
          </div>

          {/* External Google Business Link */}
          <a
            href={MILL_INFO.googleMapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-serif font-medium bg-mill-cream hover:bg-mill-paper border border-mill-borderDark text-mill-ink transition-colors duration-150 self-start md:self-auto rounded-sm"
          >
            <MapPinIcon size={14} className="text-mill-terracotta" />
            <span>Verify on Google Business Profile</span>
            <ExternalLinkIcon size={12} className="text-mill-muted" />
          </a>
        </div>

        {/* Ledger Comparison Table */}
        <div className="overflow-x-auto border border-mill-border">
          <table className="mill-table">
            <thead>
              <tr>
                <th className="w-1/4">Processing Parameter</th>
                <th className="w-1/4 text-mill-terracotta">KR Mill Traditional Standard</th>
                <th className="w-1/4 text-mill-muted">Commercial Supermarket Staple</th>
                <th className="w-1/4">Culinary &amp; Health Outcome</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {verifiedFacts.map((fact, index) => (
                <tr key={index}>
                  <td className="font-serif font-bold text-mill-ink">
                    {fact.parameter}
                  </td>
                  <td className="font-medium text-mill-ink bg-mill-cream/50">
                    <div className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 bg-mill-leaf mt-1.5 shrink-0" />
                      <span>{fact.traditionalStandard}</span>
                    </div>
                  </td>
                  <td className="text-mill-muted">
                    {fact.industrialAlternative}
                  </td>
                  <td className="text-mill-ink">
                    {fact.operationalSignificance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Verified Notice Footnote */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-mill-muted p-4 bg-mill-paper/50 border border-mill-border">
          <div className="flex items-center gap-2">
            <ShieldVerifiedIcon size={16} className="text-mill-leaf" />
            <span>Facility inspected and compliant with food hygiene and safe milling protocols.</span>
          </div>
          <span className="font-mono text-[11px]">
            Station: Mullassery, Chavakkad Taluk, Kerala
          </span>
        </div>

      </div>
    </section>
  );
}
