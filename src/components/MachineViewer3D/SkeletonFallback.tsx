import React from 'react';

export default function SkeletonFallback() {
  return (
    <div className="w-full h-[420px] md:h-[520px] bg-mill-unbleached border border-mill-border p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Top schematic bar */}
      <div className="flex items-center justify-between border-b border-mill-border pb-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-mill-terracotta animate-pulse" />
          <span className="font-serif text-sm text-mill-ink tracking-wide font-medium">
            3D Workshop Machinery View
          </span>
        </div>
        <div className="text-xs text-mill-muted font-mono uppercase tracking-wider">
          Initializing Engine...
        </div>
      </div>

      {/* Schematic outline blueprint */}
      <div className="flex-1 flex flex-col items-center justify-center my-6">
        <div className="w-full max-w-md border border-dashed border-mill-borderDark p-8 text-center bg-mill-paper/50">
          <div className="w-20 h-20 mx-auto mb-4 border border-mill-borderDark flex items-center justify-center relative">
            <div className="w-12 h-12 border border-mill-muted animate-spin" style={{ animationDuration: '6s' }} />
            <div className="w-2 h-2 bg-mill-turmeric absolute" />
          </div>
          <p className="font-serif text-base text-mill-ink font-medium">
            Loading Traditional Cast-Iron Mill Machinery
          </p>
          <p className="text-xs text-mill-muted mt-1 max-w-xs mx-auto">
            Rendering copra oil expeller screw, granite stone chakki, and belt drive pulleys.
          </p>
        </div>
      </div>

      {/* Bottom control skeleton bar */}
      <div className="border-t border-mill-border pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-mill-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-mill-muted/40" />
          <span>Touch or drag with mouse to orbit 360 degrees</span>
        </div>
        <div className="font-mono text-[11px] text-mill-muted">
          R3F WebGL Canvas
        </div>
      </div>
    </div>
  );
}
