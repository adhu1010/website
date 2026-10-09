export interface MillingService {
  id: string;
  title: string;
  malayalamTitle: string;
  category: "grain-milling" | "oil-expelling" | "spice-pulverizing";
  serviceRate: string;
  minimumBatch: string;
  turnaroundTime: string;
  yieldBenchmark: string;
  processSteps: {
    stepNumber: number;
    stepTitle: string;
    description: string;
  }[];
  customerPreparationGuide: string[];
  sanitationStandard: string;
}

export const MILLING_SERVICES: MillingService[] = [
  {
    id: "stone-flour-processing",
    title: "Stone-Ground Flour Processing",
    malayalamTitle: "ധാന്യങ്ങൾ പൊടിക്കൽ (കല്ല് മിൽ)",
    category: "grain-milling",
    serviceRate: "Rs. 10 per kg (Wheat, Rice, Ragi, Corn)",
    minimumBatch: "1.0 kg minimum lot",
    turnaroundTime: "15 to 45 minutes (Same-day walk-in service)",
    yieldBenchmark: "Approx. 97% to 98% flour recovery (minimal mechanical loss)",
    processSteps: [
      {
        stepNumber: 1,
        stepTitle: "Grain Inspection & Moisture Check",
        description: "Customer-brought grains are inspected on the stainless grading bench. Grains must be adequately sun-dried and free from moisture to prevent stone caking.",
      },
      {
        stepNumber: 2,
        stepTitle: "De-dusting & Magnetic Grit Separation",
        description: "Grain passes through a pre-cleaner hopper equipped with high-intensity neodymium magnets to capture accidental iron grit and loose husks.",
      },
      {
        stepNumber: 3,
        stepTitle: "Slow-Speed Stone Chakki Grinding",
        description: "Milled between dressed vertical granite millstones. The operator adjusts stone clearance to achieve the exact coarseness you specify (fine pathiri powder, medium chapati atta, or coarse puttu texture).",
      },
      {
        stepNumber: 4,
        stepTitle: "Vibratory Sifting & Clean Packaging",
        description: "Freshly milled flour is sifted through calibrated stainless mesh and deposited directly into the customer's cloth bag, steel container, or food-grade mill pouch.",
      },
    ],
    customerPreparationGuide: [
      "Ensure wheat, rice, or ragi has been sun-dried for at least 4 to 6 hours prior to bringing.",
      "Remove small stones and paddy chaff at home for faster processing.",
      "Bring clean, breathable cotton bags or food-grade containers to collect hot, freshly milled flour.",
    ],
    sanitationStandard: "Chambers are vacuum-brushed and wiped dry between differing grain batches to prevent cross-contamination.",
  },
  {
    id: "copra-oil-expelling",
    title: "Cold-Pressed Copra Oil Expelling",
    malayalamTitle: "കൊപ്ര ആട്ടി വെളിച്ചെണ്ണ എടുക്കൽ",
    category: "oil-expelling",
    serviceRate: "Rs. 18 per kg of dried copra (or oil deduction option)",
    minimumBatch: "5.0 kg dried copra (for dedicated individual batch extraction)",
    turnaroundTime: "1 to 2 hours depending on lot size",
    yieldBenchmark: "Approx. 620ml to 650ml pure coconut oil per kg of prime dry copra + oil cake (പിണ്ണാക്ക്)",
    processSteps: [
      {
        stepNumber: 1,
        stepTitle: "Copra Crispness & Dryness Verification",
        description: "Dried coconut halves (copra) are weighed and inspected. Copra must snap crisply with under 6% moisture content for maximum cold-press yield.",
      },
      {
        stepNumber: 2,
        stepTitle: "Rotary Knife Cutting",
        description: "Large copra cups pass through a heavy steel cutter that dices the dried meat into uniform 10mm flakes, ensuring even pressure distribution in the press barrel.",
      },
      {
        stepNumber: 3,
        stepTitle: "Continuous Screw Press Extraction",
        description: "Flakes are fed into our heavy cast-iron expeller barrel. Slow continuous mechanical pressure expresses virgin, amber-clear coconut oil without external steam or chemical solvents.",
      },
      {
        stepNumber: 4,
        stepTitle: "Multi-Cloth Gravity Filtration & Bottling",
        description: "Expressed oil flows through natural dual-layer cotton filter cloths to remove micro-sediment, resulting in crystal-clear fragrant oil. Copra oil cake (തേങ്ങാ പിണ്ണാക്ക്) is packaged separately for cattle feed.",
      },
    ],
    customerPreparationGuide: [
      "Copra must be thoroughly cured and dried in direct sunlight (should snap cleanly without rubbery elasticity).",
      "Reject mouldy, darkened, or damp copra pieces to protect oil taste and longevity.",
      "Bring clean, dry cans or glass flagons. Water droplets inside cans will cause oil to spoil.",
    ],
    sanitationStandard: "Stainless steel oil collection troughs are cleaned daily; expeller barrel undergoes regular hot-water washouts during weekend maintenance.",
  },
  {
    id: "custom-spice-pulverizing",
    title: "Dry Spice Pulverizing (Chillies, Turmeric, Coriander)",
    malayalamTitle: "മുളക്, മഞ്ഞൾ, മല്ലി പൊടിക്കൽ",
    category: "spice-pulverizing",
    serviceRate: "Rs. 20 per kg (Dry Chillies & Coriander) / Rs. 25 per kg (Hard Turmeric)",
    minimumBatch: "1.0 kg dried spice",
    turnaroundTime: "20 to 40 minutes",
    yieldBenchmark: "Approx. 96% fine spice yield",
    processSteps: [
      {
        stepNumber: 1,
        stepTitle: "Stalk & Moisture Verification",
        description: "Operator inspects dried chillies or turmeric roots. Damp spices clog hammers and burn; thorough sun-drying is verified.",
      },
      {
        stepNumber: 2,
        stepTitle: "Coarse Crushing in Rotary Hammer Mill",
        description: "Heavy alloy hammers break tough fibrous rhizomes and chillies into coarse fragments inside a sealed steel enclosure.",
      },
      {
        stepNumber: 3,
        stepTitle: "Fine Screen Pulverization",
        description: "Secondary high-speed pass through micron screens produces uniform spice powder without scorch marks or aroma loss.",
      },
      {
        stepNumber: 4,
        stepTitle: "Cooling & Sealed Container Transfer",
        description: "Powder is allowed to rest on clean stainless cooling tables before packing to prevent condensation inside containers.",
      },
    ],
    customerPreparationGuide: [
      "Pluck stems from red chillies before bringing for superior color and taste.",
      "Turmeric roots should be sun-baked until brittle like porcelain.",
      "Bring sealable tins or thick polythene bags to preserve volatile spice vapors.",
    ],
    sanitationStandard: "Separate dedicated hammer mill units are maintained for pungent chillies vs aromatic flours to eliminate cross-flavoring.",
  },
];
