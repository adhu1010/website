export interface ProductItem {
  id: string;
  nameEnglish: string;
  nameMalayalam: string;
  category: "spices" | "flours";
  shortDescription: string;
  detailedNotes: string;
  ingredients: string;
  packSizes: string[];
  retailRatePerKg: string;
  shelfLife: string;
  storageGuideline: string;
  imageUrl: string;
  imageAlt: string;
}

export const PRODUCTS_LIST: ProductItem[] = [
  // Category A: Pure Ground Spices & Masalas
  {
    id: "chilli-powder",
    nameEnglish: "Chilli Powder",
    nameMalayalam: "മുളകുപൊടി",
    category: "spices",
    shortDescription: "Sun-dried selected red chillies, slow-pulverized without artificial colors or added oils.",
    detailedNotes: "Prepared from premium whole dried red chillies sourced directly from regional farming hubs. Cleaned by hand, stalk-removed, naturally sun-dried on clean mats, and finely ground to retain natural capsaicin punch and deep red hue.",
    ingredients: "100% Pure Dried Red Chillies (No synthetic colors, zero fillers, zero starch).",
    packSizes: ["250g", "500g", "1kg", "5kg Bulk Sack"],
    retailRatePerKg: "Rs. 320 / kg",
    shelfLife: "9 months from milling date",
    storageGuideline: "Store in a dry, airtight steel or glass container away from direct sunlight.",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Authentic whole dried red chillies and freshly ground red chilli powder",
  },
  {
    id: "turmeric-powder",
    nameEnglish: "Turmeric Powder",
    nameMalayalam: "മഞ്ഞൾപ്പൊടി",
    category: "spices",
    shortDescription: "Pure Salem and Alleppey finger turmeric, slow-milled with natural curcumin oil intact.",
    detailedNotes: "Whole dried turmeric fingers undergo double sorting to remove soil residue before hammer-mill processing. High curcumin content provides authentic aroma, antibacterial properties, and deep natural gold color.",
    ingredients: "100% Pure Cured Turmeric Rhizomes (No lead chromate, zero chemical polishing).",
    packSizes: ["250g", "500g", "1kg", "5kg Bulk Sack"],
    retailRatePerKg: "Rs. 260 / kg",
    shelfLife: "12 months from milling date",
    storageGuideline: "Keep in a dark, moisture-free container to prevent light degradation of curcumin.",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Real cured whole turmeric roots and stone-ground yellow turmeric powder",
  },
  {
    id: "coriander-powder",
    nameEnglish: "Coriander Powder",
    nameMalayalam: "മല്ലിപ്പൊടി",
    category: "spices",
    shortDescription: "Gently roasted, aromatic whole coriander seeds, batch ground for balanced curries.",
    detailedNotes: "High-grade coriander seeds (dhaniya) undergo light pan drying before milling to liberate essential aromatic oils without scorching the husk. Imparts the classic Kerala curry base flavor.",
    ingredients: "100% Whole Cleaned Coriander Seeds (No spent seeds, zero flour adulteration).",
    packSizes: ["250g", "500g", "1kg", "5kg Bulk Sack"],
    retailRatePerKg: "Rs. 240 / kg",
    shelfLife: "6 months from milling date",
    storageGuideline: "Seal immediately after use to retain natural volatile aromatic oils.",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Whole roasted coriander seeds in burlap before milling",
  },
  {
    id: "masala-powder",
    nameEnglish: "Traditional Kerala Masala Powder",
    nameMalayalam: "നാടൻ മസാലപ്പൊടി",
    category: "spices",
    shortDescription: "Heritage spice formulation ground with cinnamon, cloves, cardamom, fennel, and pepper.",
    detailedNotes: "Hand-blended according to time-tested Thrissur regional recipes. Ideal for chicken, mutton, egg, fish, and authentic Kerala vegetable stews.",
    ingredients: "Black Pepper, Fennel, Cinnamon bark, Cloves, Green Cardamom, Star Anise, Nutmeg, Cumin.",
    packSizes: ["100g", "250g", "500g", "1kg"],
    retailRatePerKg: "Rs. 480 / kg",
    shelfLife: "6 months from milling date",
    storageGuideline: "Airtight glass jar recommended to preserve delicate floral and spicy aroma notes.",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Authentic Kerala whole spices blended for traditional curry masala",
  },

  // Category B: Fresh Milled Flours
  {
    id: "rice-powder",
    nameEnglish: "Rice Powder (Raw White Rice)",
    nameMalayalam: "അരിപ്പൊടി",
    category: "flours",
    shortDescription: "Cleaned white raw rice milled to ultra-fine silkiness for pathiri, appam, and idiyappam.",
    detailedNotes: "Selected raw white rice is washed, drained, and ground in high-speed micro-pulverizers. Sifted through fine mesh sieves for silky, lump-free dough preparation.",
    ingredients: "100% Sorted White Raw Rice (No chalk powder, zero bleaching agents).",
    packSizes: ["500g", "1kg", "2kg", "5kg Bulk Bag"],
    retailRatePerKg: "Rs. 58 / kg",
    shelfLife: "3 months from milling date",
    storageGuideline: "Keep in a cool dry bin. Protect from humidity and moisture.",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Paddy grains and pure milled silky white rice flour",
  },
  {
    id: "puttu-podi",
    nameEnglish: "Puttu Podi (Coarse Roasted Rice)",
    nameMalayalam: "പുട്ടുപൊടി",
    category: "flours",
    shortDescription: "Coarsely ground and steam-roasted rice flour formulated for soft, layered Kerala puttu.",
    detailedNotes: "Milled with granular texture to allow steam to permeate evenly in the puttu maker. Pre-roasted to eliminate raw starch taste and guarantee non-sticky, airy cylinders.",
    ingredients: "100% White Rice (Grain-sifted, dry-roasted at controlled temperature).",
    packSizes: ["500g", "1kg", "2kg", "5kg Bulk Bag"],
    retailRatePerKg: "Rs. 62 / kg",
    shelfLife: "4 months from milling date",
    storageGuideline: "Store dry. Rehydrate with light salted warm water prior to cooking.",
    imageUrl: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Evenly textured granular roasted rice flour for traditional puttu",
  },
  {
    id: "wheat-flour",
    nameEnglish: "Whole Wheat Atta (Stone-Ground)",
    nameMalayalam: "ഗോതമ്പുപൊടി (ആട്ട)",
    category: "flours",
    shortDescription: "100% whole grain wheat, stone-ground with outer bran and wheat germ intact.",
    detailedNotes: "Milled using traditional vertical stone chakki plates running at gentle speeds. Slow stone milling prevents high friction heat, preserving dietary fiber, vitamins, and natural wheat sweetness for soft chapatis.",
    ingredients: "100% Whole Hard Wheat Grains (Zero Maida, zero refined starch dilution).",
    packSizes: ["1kg", "2kg", "5kg", "10kg Jute Sack"],
    retailRatePerKg: "Rs. 52 / kg",
    shelfLife: "2 months from milling date",
    storageGuideline: "Contains natural wheat germ oil; consume within 60 days of purchase.",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Whole wheat grain berries and traditional stone-ground atta flour",
  },
  {
    id: "ragi-flour",
    nameEnglish: "Ragi Flour (Finger Millet)",
    nameMalayalam: "റാഗിപ്പൊടി",
    category: "flours",
    shortDescription: "Nutrient-dense finger millet powder milled for baby porridge, puttu, and healthy dosas.",
    detailedNotes: "Small cleaned red ragi grains dried and ground to fine texture. High in calcium, iron, and dietary fiber, ideal for traditional nutrition.",
    ingredients: "100% Cleaned Finger Millet (Zero grain adulteration).",
    packSizes: ["500g", "1kg", "2kg"],
    retailRatePerKg: "Rs. 75 / kg",
    shelfLife: "3 months from milling date",
    storageGuideline: "Store in an airtight container in a dry pantry cupboard.",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pure ground dark finger millet ragi powder",
  },
];
