'use client';

import React, { useState } from 'react';
import { ScaleIcon, WhatsAppIcon, ClockIcon, OilCanIcon, GrainStalkIcon } from './Icons';

interface CropOption {
  id: string;
  name: string;
  malayalam: string;
  ratePerKg: number;
  outputName: string;
  outputYieldPercentage: number;
  byproductName?: string;
  byproductPercentage?: number;
  minimumKg: number;
  timePerKgMinutes: number;
}

const CROPS: CropOption[] = [
  {
    id: 'wheat',
    name: 'Whole Grain Wheat',
    malayalam: 'ഗോതമ്പ്',
    ratePerKg: 10,
    outputName: 'Stone-Ground Whole Atta',
    outputYieldPercentage: 98,
    minimumKg: 1,
    timePerKgMinutes: 3,
  },
  {
    id: 'rice-raw',
    name: 'White Raw Rice (Pacharisi)',
    malayalam: 'പച്ചരി (അരിപ്പൊടി / പുട്ടുപൊടി)',
    ratePerKg: 10,
    outputName: 'Fine Rice Flour / Puttu Podi',
    outputYieldPercentage: 97,
    minimumKg: 1,
    timePerKgMinutes: 3,
  },
  {
    id: 'ragi',
    name: 'Finger Millet (Ragi)',
    malayalam: 'റാഗി',
    ratePerKg: 12,
    outputName: 'Milled Ragi Flour',
    outputYieldPercentage: 97,
    minimumKg: 1,
    timePerKgMinutes: 4,
  },
  {
    id: 'copra',
    name: 'Sun-Dried Copra (Coconut)',
    malayalam: 'ഉണക്ക കൊപ്ര (വെളിച്ചെണ്ണ)',
    ratePerKg: 18,
    outputName: 'Cold-Pressed Pure Coconut Oil',
    outputYieldPercentage: 63, // 630ml per kg
    byproductName: 'Copra Oil Cake (തേങ്ങാ പിണ്ണാക്ക്)',
    byproductPercentage: 35,
    minimumKg: 5,
    timePerKgMinutes: 6,
  },
  {
    id: 'chilli',
    name: 'Dried Red Chillies',
    malayalam: 'ഉണക്കമുളക്',
    ratePerKg: 20,
    outputName: 'Pure Chilli Powder',
    outputYieldPercentage: 96,
    minimumKg: 1,
    timePerKgMinutes: 5,
  },
  {
    id: 'turmeric',
    name: 'Whole Turmeric Fingers',
    malayalam: 'മഞ്ഞൾ',
    ratePerKg: 25,
    outputName: 'Curcumin Turmeric Powder',
    outputYieldPercentage: 95,
    minimumKg: 1,
    timePerKgMinutes: 6,
  },
  {
    id: 'coriander',
    name: 'Whole Coriander Seeds',
    malayalam: 'മല്ലി',
    ratePerKg: 20,
    outputName: 'Aromatic Coriander Powder',
    outputYieldPercentage: 96,
    minimumKg: 1,
    timePerKgMinutes: 4,
  },
];

export default function JobWorkEstimator() {
  const [selectedCropId, setSelectedCropId] = useState<string>('wheat');
  const [weightKg, setWeightKg] = useState<number>(5);
  const [coarseness, setCoarseness] = useState<string>('Standard Chapati / Cooking');

  const selectedCrop = CROPS.find((c) => c.id === selectedCropId) || CROPS[0];

  const effectiveWeight = Math.max(weightKg, selectedCrop.minimumKg);
  const totalCost = effectiveWeight * selectedCrop.ratePerKg;

  const estimatedYieldKg = ((effectiveWeight * selectedCrop.outputYieldPercentage) / 100).toFixed(2);
  const estimatedByproductKg = selectedCrop.byproductPercentage
    ? ((effectiveWeight * selectedCrop.byproductPercentage) / 100).toFixed(2)
    : null;

  const estimatedMinutes = Math.min(Math.max(effectiveWeight * selectedCrop.timePerKgMinutes, 15), 180);

  const whatsappInquiryText = `Hello KR Mill, I have ${effectiveWeight} kg of ${selectedCrop.name} (${selectedCrop.malayalam}) for custom milling. Estimated charge: Rs. ${totalCost}. When is a good time to drop by?`;
  const whatsappUrl = `https://wa.me/919447281042?text=${encodeURIComponent(whatsappInquiryText)}`;

  return (
    <section id="rate-calculator" className="w-full py-12 md:py-20 bg-mill-cream border-t border-mill-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-serif uppercase tracking-widest text-mill-terracotta mb-2 block font-semibold">
            Transparent Kilogram-Based Rates
          </span>
          <h2 className="fluid-section-title font-serif text-mill-ink font-bold mb-3">
            Custom Job-Work Milling Cost &amp; Yield Estimator
          </h2>
          <p className="text-sm sm:text-base text-mill-muted leading-relaxed">
            Planning to bring your own grains, dried spices, or copra? Select your raw crop and input the weight in kilograms to see the exact mill fee, expected yield recovery, and turnaround time.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="border border-mill-border bg-mill-unbleached p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Select Crop */}
              <div>
                <label className="block font-serif text-sm font-semibold text-mill-ink mb-2">
                  1. Select Raw Material Brought by Customer:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CROPS.map((crop) => (
                    <button
                      key={crop.id}
                      type="button"
                      onClick={() => {
                        setSelectedCropId(crop.id);
                        if (weightKg < crop.minimumKg) {
                          setWeightKg(crop.minimumKg);
                        }
                      }}
                      className={`p-3 text-left border transition-colors duration-150 rounded-none ${
                        selectedCropId === crop.id
                          ? 'bg-mill-cream border-mill-terracotta text-mill-ink font-semibold'
                          : 'bg-mill-paper border-mill-border text-mill-muted hover:bg-mill-cream hover:text-mill-ink'
                      }`}
                    >
                      <div className="text-sm font-serif text-mill-ink">{crop.name}</div>
                      <div className="text-xs text-mill-terracotta font-serif">{crop.malayalam}</div>
                      <div className="text-[11px] text-mill-muted mt-1">
                        Rs. {crop.ratePerKg} / kg (Min {crop.minimumKg}kg)
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight in KG */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="weight-input" className="font-serif text-sm font-semibold text-mill-ink">
                    2. Quantity in Kilograms (KG):
                  </label>
                  <span className="text-xs font-mono text-mill-muted">
                    Min required: {selectedCrop.minimumKg} kg
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    id="weight-input"
                    type="range"
                    min={selectedCrop.minimumKg}
                    max={100}
                    step={1}
                    value={effectiveWeight}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="flex-1 accent-mill-terracotta cursor-pointer"
                  />
                  <div className="w-24 px-3 py-2 bg-mill-cream border border-mill-borderDark text-center font-mono font-bold text-sm text-mill-ink">
                    {effectiveWeight} KG
                  </div>
                </div>

                {/* Quick select buttons */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {[selectedCrop.minimumKg, 5, 10, 20, 35, 50].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setWeightKg(preset)}
                      className={`px-2.5 py-1 text-xs border font-mono transition-colors duration-150 rounded-none ${
                        effectiveWeight === preset
                          ? 'bg-mill-terracotta text-mill-cream border-mill-terracotta'
                          : 'bg-mill-cream text-mill-muted border-mill-border hover:bg-mill-paper'
                      }`}
                    >
                      {preset} kg
                    </button>
                  ))}
                </div>
              </div>

              {/* Texture selection */}
              <div>
                <label className="block font-serif text-sm font-semibold text-mill-ink mb-2">
                  3. Requested Output Texture / Sifting Mesh:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'Fine Mesh (Appam / Pathiri / Smooth)',
                    'Standard Chapati / Cooking',
                    'Coarse Granular (Puttu / Dosa Podi)',
                  ].map((textureOption) => (
                    <button
                      key={textureOption}
                      type="button"
                      onClick={() => setCoarseness(textureOption)}
                      className={`p-2.5 text-left border transition-colors duration-150 rounded-none ${
                        coarseness === textureOption
                          ? 'bg-mill-cream border-mill-borderDark text-mill-ink font-semibold'
                          : 'bg-mill-paper border-mill-border text-mill-muted hover:bg-mill-cream'
                      }`}
                    >
                      {textureOption}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculated Estimate Slip (5 cols) */}
            <div className="lg:col-span-5 bg-mill-cream border border-mill-borderDark p-6">
              <div className="border-b border-mill-border pb-4 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-mill-muted block mb-1">
                  KR Mill Job-Work Calculation Slip
                </span>
                <h3 className="font-serif text-lg font-bold text-mill-ink">
                  {selectedCrop.name}
                </h3>
                <span className="text-xs text-mill-terracotta font-serif">
                  {selectedCrop.malayalam}
                </span>
              </div>

              {/* Breakdown Table */}
              <div className="space-y-3 text-xs mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-mill-border/50">
                  <span className="text-mill-muted">Batch Weight:</span>
                  <span className="font-mono font-bold text-mill-ink">{effectiveWeight} Kilograms</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-mill-border/50">
                  <span className="text-mill-muted">Milling Rate:</span>
                  <span className="font-mono text-mill-ink">Rs. {selectedCrop.ratePerKg} / kg</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-mill-border/50">
                  <span className="text-mill-muted">Selected Coarseness:</span>
                  <span className="font-medium text-mill-ink">{coarseness}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-mill-border/50">
                  <span className="text-mill-muted">Expected {selectedCrop.id === 'copra' ? 'Pure Oil' : 'Flour'} Output:</span>
                  <span className="font-mono font-bold text-mill-leaf">
                    ~ {estimatedYieldKg} {selectedCrop.id === 'copra' ? 'Liters/KG' : 'KG'}
                  </span>
                </div>

                {estimatedByproductKg && (
                  <div className="flex items-center justify-between pb-2 border-b border-mill-border/50">
                    <span className="text-mill-muted">Copra Oil Cake:</span>
                    <span className="font-mono font-medium text-mill-burlap">
                      ~ {estimatedByproductKg} KG (returned to customer)
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pb-2 border-b border-mill-border/50">
                  <span className="text-mill-muted">Estimated Wait Time:</span>
                  <span className="font-mono text-mill-ink">
                    ~ {estimatedMinutes} Minutes
                  </span>
                </div>
              </div>

              {/* Total Fee Highlight */}
              <div className="bg-mill-unbleached p-4 border border-mill-border mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-mill-muted block font-serif">
                    Estimated Processing Fee:
                  </span>
                  <div className="font-serif text-2xl font-bold text-mill-terracotta">
                    Rs. {totalCost}
                  </div>
                </div>
                <div className="text-right text-[11px] text-mill-muted">
                  Paid at collection counter.<br />No advance needed.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-serif font-semibold bg-mill-leaf hover:bg-mill-leafHover text-mill-cream flex items-center justify-center gap-2 transition-colors duration-150 rounded-sm"
                >
                  <WhatsAppIcon size={14} />
                  <span>Send This Estimate via WhatsApp</span>
                </a>

                <div className="text-center text-[11px] text-mill-muted pt-1">
                  Walk-in directly with raw goods during regular operating hours.
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
