'use client';

import dynamic from 'next/dynamic';
import SkeletonFallback from './SkeletonFallback';

const DynamicMillCanvas = dynamic(() => import('./MillCanvas'), {
  ssr: false,
  loading: () => <SkeletonFallback />,
});

export default function MachineViewer3D() {
  return (
    <section id="machinery-view" className="w-full py-12 md:py-16 border-t border-mill-border bg-mill-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-serif uppercase tracking-widest text-mill-terracotta mb-2 font-semibold">
            Traditional Machinery & Engineering
          </div>
          <h2 className="fluid-section-title font-serif text-mill-ink font-bold mb-3">
            Real Workshop Machinery: Stone Chakki & Cold Expeller Press
          </h2>
          <p className="text-sm sm:text-base text-mill-muted leading-relaxed">
            Unlike modern industrial high-heat pulverizers that scorch grain enzymes and burn delicate volatile oils, KR Mill operates slow-turning granite chakki stones and mechanical cast-iron screw presses. Rotate the 3D workshop assembly below to inspect our traditional extraction setup.
          </p>
        </div>

        {/* Dynamic 3D Viewer with Skeleton Fallback */}
        <div className="w-full">
          <DynamicMillCanvas />
        </div>

        {/* Operational Specification Bar */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-mill-muted bg-mill-unbleached p-4 border border-mill-border">
          <div>
            <span className="font-serif font-semibold text-mill-ink block mb-0.5">
              Natural Cold Extraction:
            </span>
            Operates under 45 degrees Celsius to retain natural antioxidants, lauric acid, and coconut fragrance.
          </div>
          <div>
            <span className="font-serif font-semibold text-mill-ink block mb-0.5">
              Granite Stone Chakki:
            </span>
            Slow vertical stone shearing leaves wheat germ, bran layers, and natural sweetness unburned.
          </div>
          <div>
            <span className="font-serif font-semibold text-mill-ink block mb-0.5">
              Daily Sanitation:
            </span>
            Continuous mechanical dusting and dedicated machinery lines for spices versus flours.
          </div>
        </div>
      </div>
    </section>
  );
}
