export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  standards: string[];
  image?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  iconName: string;
}

/**
 * The six product categories shown as filter pills across the catalog,
 * homepage cards, header and footer. Pilot Scale Plants is intentionally
 * kept out of this list because it has its own dedicated page.
 */
export const CATEGORIES: Category[] = [
  {
    name: "Paper Testing Instruments",
    slug: "paper-testing",
    description: "High-precision equipment for structural, optical, and physical property testing of paper and board.",
    iconName: "FileText",
  },
  {
    name: "Pulp Testing Instruments",
    slug: "pulp-testing",
    description: "Evaluates raw materials, fiber classification, pulp freeness, and standard sheet preparation.",
    iconName: "Activity",
  },
  {
    name: "Packaging Testing Instruments",
    slug: "packaging-testing",
    description: "Simulates transit, compression, and impact hazards on corrugated boxes and protective packaging.",
    iconName: "Box",
  },
  {
    name: "Surface Coating Instruments",
    slug: "surface-coating",
    description: "Coating application, calendering, and surface finish evaluation for paper and board.",
    iconName: "Layers",
  },
  {
    name: "Environmental Testing Instruments",
    slug: "environmental-testing",
    description: "Precision ovens, furnaces, and chambers simulating controlled temperature and environmental conditions.",
    iconName: "ThermometerSun",
  },
  {
    name: "Pharma Laboratory Instruments",
    slug: "pharma-lab",
    description: "GMP-compliant quality-control equipment for pharmaceutical and analytical laboratories.",
    iconName: "FlaskConical",
  },
];

// ---------------------------------------------------------------------------
// Structured source dataset: 6 categories with their full product listings.
// ---------------------------------------------------------------------------

interface CategoryConfig {
  name: string;
  slug: string;
  short: string;
  tagline: string;
  standards: string[];
  features: string[];
  specifications: Record<string, string>;
  products: string[];
}

const CATALOG_DATASET: CategoryConfig[] = [
  {
    name: "Paper Testing Instruments",
    slug: "paper-testing",
    short: "paper testing",
    tagline: "Accurate evaluation of paper physical and optical properties",
    standards: ["ISO 536", "TAPPI T-410", "ASTM D646", "BS 3432"],
    features: [
      "Rugged construction with precision-machined contact surfaces",
      "High-resolution digital display with peak-hold function",
      "Calibrated against certified reference standards",
      "Simple, repeatable specimen clamping and alignment",
      "Low-maintenance design for continuous laboratory use",
    ],
    specifications: {
      Display: "Backlit digital LCD",
      Resolution: "High precision (as per model)",
      "Power Supply": "220V AC, 50Hz, Single Phase",
      Construction: "Steel / Stainless Steel contact parts",
    },
    products: [
      "Quadrant Scale",
      "Digital Grammage Scale",
      "Digital Weighing Scale",
      "Paper Circular Cutter",
      "Thickness Micrometer (Manual Dial Type)",
      "Thickness Micrometer (Motorised Dial Type)",
      "Tensile Strength Tester (Electromechanical Type)",
      "Tensile Strength Tester (Digital Type)",
      "Tensile Strength Tester (Microprocessor Type)",
      "Paper Strip Cutter",
      "Folding Endurance Tester (Kohler Mohlin Type)",
      "Folding Endurance Tester (Schopper Type)",
      "Tearing Resistance Tester (Elmendroff Type)",
      "Electronics Tearing Resistance Tester",
      "Punch & Die Cutter",
      "Bursting Strength Tester (Motorized)",
      "Bursting Strength Tester (Digital)",
      "Bursting Strength Tester (Digital Pneumatic Type)",
      "Paper Electric Incinerator",
      "Gurley Densometer",
      "Smoothness & Porosity Tester (Bendtsen Type)",
      "Fluff Tester",
      "Taber Stiffness Tester",
      "Cobb Sizing Tester",
      "Paper Curl Tester",
      "Internal Ply Bond Tester",
      "Lab Crush Tester",
      "Oil Penetration Tester",
      "Short Span Compression Tester",
      "Water Absorption Tester",
      "Moisture Meter",
      "Rapid Sheet Dryer",
      "ISO Brightness Tester",
      "Filler Abrasion Tester",
      "Brightness, Opacity & Gloss Tester (Photovolt Type)",
      "Surface Oil Absorbency Tester",
    ],
  },
  {
    name: "Pulp Testing Instruments",
    slug: "pulp-testing",
    short: "pulp testing",
    tagline: "Standardized pulp preparation and quality evaluation",
    standards: ["ISO 5263", "TAPPI T-205", "SCAN C-18", "ISO 5267"],
    features: [
      "Corrosion-resistant stainless steel wetted parts",
      "Consistent, standardized processing for reliable pulp evaluation",
      "Heavy-duty drive system for continuous operation",
      "Easy-clean design with quick drainage and wash-out",
      "Digital control for repeatable test cycles",
    ],
    specifications: {
      "Contact Material": "High-grade Stainless Steel",
      Drive: "Heavy-duty induction motor",
      "Power Supply": "220V / 415V AC, 50Hz",
      Control: "Digital timer / counter with auto-stop",
    },
    products: [
      "Laboratory Sheet Press",
      "Beating & Freeness Tester",
      "Canadian Freeness Tester",
      "Pulp Colour Reversion Tester",
      "Fiber Classifier",
      "Fibre Fractionator",
      "Flotation Cell",
      "Hand Sheet Former",
      "Hollander Beater",
      "Lab Disc Refiner",
      "Lab Hydrapulper",
      "Lab Mechanical Crusher",
      "Lab Valley Beater",
      "Pulp Disintegrator",
      "Laboratory Pulping Unit",
      "Rotary Digester",
      "Sheet Drying Cabinet",
      "Sheet Drying Cylinder",
      "Wood Chip Classifier",
      "Wood Chipper",
      "Consistency Determination Apparatus",
    ],
  },
  {
    name: "Packaging Testing Instruments",
    slug: "packaging-testing",
    short: "packaging testing",
    tagline: "Transit, compression, and impact resistance evaluation",
    standards: ["ISO 12048", "ASTM D642", "TAPPI T-804", "IS 7028"],
    features: [
      "Heavy-duty steel structure for high-load stability",
      "Microprocessor control with digital load and deflection readout",
      "High-accuracy load cell with overload protection",
      "Repeatable specimen positioning fixtures",
      "Safety guarding for operator protection",
    ],
    specifications: {
      Structure: "Heavy-duty welded steel frame",
      "Load Cell Accuracy": "±1% of indicated value",
      "Power Supply": "220V AC, 50Hz, Single Phase",
      Readout: "Digital display with peak-hold",
    },
    products: [
      "Abrasion Tester",
      "Automatic Drop Tester",
      "Electronic Box Compression Tester",
      "Incline Impact Tester",
      "Paper Core Compression Strength Tester",
      "Puncture Resistance Tester",
      "Scuff Tester",
      "Concora Medium Fluter",
    ],
  },
  {
    name: "Surface Coating Instruments",
    slug: "surface-coating",
    short: "surface coating",
    tagline: "Coating application and surface finish evaluation",
    standards: ["ISO 535", "TAPPI T-441", "ASTM D3285"],
    features: [
      "Precision-engineered application and finishing surfaces",
      "Adjustable settings for coat weight and surface uniformity",
      "Robust drive mechanism for consistent results",
      "Easy setup and cleaning between samples",
      "Durable construction for repeated laboratory use",
    ],
    specifications: {
      "Working Width": "Configurable to specimen size",
      Adjustment: "Micrometer / geared control",
      "Power Supply": "220V AC, 50Hz, Single Phase",
      Construction: "Stainless steel and hardened rollers",
    },
    products: ["Air Knife Coater", "Bar Coater", "Laboratory Calender", "Paper Testing Waxes"],
  },
  {
    name: "Environmental Testing Instruments",
    slug: "environmental-testing",
    short: "environmental testing",
    tagline: "Controlled temperature and environmental simulation",
    standards: ["ISO 9227", "ASTM B117", "IS 14142"],
    features: [
      "Double-walled insulated chamber for thermal stability",
      "Microprocessor PID controller with digital display",
      "Forced air circulation for uniform conditions",
      "Safety thermostat and over-temperature protection",
      "Corrosion-resistant stainless steel interior",
    ],
    specifications: {
      "Inner Chamber": "Stainless Steel (SS-304)",
      Controller: "Microprocessor PID with digital display",
      "Power Supply": "220V AC, 50Hz, Single Phase",
      Safety: "Over-temperature cut-off thermostat",
    },
    products: ["Hot Air Oven", "Muffle Furnace", "BOD Incubator", "pH Meter", "Environmental Chamber"],
  },
  {
    name: "Pharma Laboratory Instruments",
    slug: "pharma-lab",
    short: "pharma laboratory",
    tagline: "GMP-compliant pharmaceutical quality control",
    standards: ["USP <711>", "EP 2.9.3", "IP Specifications"],
    features: [
      "GMP-compliant construction and finish",
      "Microprocessor control with digital display",
      "High-precision sensors for accurate measurement",
      "Stainless steel contact parts for easy cleaning",
      "Safety interlocks and audible alarms",
    ],
    specifications: {
      Compliance: "GMP / Pharmacopoeia specifications",
      Controller: "Microprocessor based with digital display",
      "Power Supply": "220V AC, 50Hz, Single Phase",
      "Contact Parts": "Electropolished Stainless Steel",
    },
    products: [
      "Autoclaves",
      "BOD Incubator",
      "Vacuum Oven",
      "Hot Air Oven",
      "Muffle Furnace",
      "Deep Freezers",
      "Motorized Analytical Balance",
      "Digital Weighing Balance",
      "High Precision Balance",
      "Rectangular Hot Plate",
      "Air Curtain",
      "Digital Bomb Calorimeter",
      "Conductivity Meter",
      "pH Meter Microprocessor Based",
      "Dissolved Oxygen Meter Bench Type",
      "Dissolved Oxygen Meter Portable",
      "U.V. Cabinet",
      "Digital Glass Bead Sterilizer",
      "Vacuum Pump",
    ],
  },
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Build the full product list from the structured dataset. IDs are prefixed
// with the category slug so names that appear in more than one category
// (e.g. "Hot Air Oven", "BOD Incubator") remain unique.
const DATASET_PRODUCTS: Product[] = CATALOG_DATASET.flatMap((config) =>
  config.products.map((name) => ({
    id: `${config.slug}-${slugify(name)}`,
    name,
    category: config.name,
    categorySlug: config.slug,
    tagline: config.tagline,
    description: `The ${name} is a laboratory-grade ${config.short} instrument manufactured by Angels Instruments. Built with robust, corrosion-resistant components and precision-calibrated parts, it delivers accurate and repeatable results in line with recognised international testing standards. Each unit is configurable to your specimen sizes, capacities, and standard requirements.`,
    features: config.features,
    specifications: config.specifications,
    standards: config.standards,
  }))
);

// Pilot Scale Plants keep their own detailed entries and dedicated page.
const PILOT_PRODUCTS: Product[] = [
  {
    id: "mvr-evaporator-pilot",
    name: "Mechanical Vapor Recompression Evaporator",
    category: "Pilot Scale Plants",
    categorySlug: "pilot-plants",
    tagline: "Energy-saving MVR evaporator for lab / pilot scale (Model AI-0199)",
    description:
      "MVR (Mechanical Vapor Recompression) Evaporators have been rapidly and widely adopted across pharmaceuticals, chemicals, and environmental protection thanks to their low energy consumption, low operating costs, and compact footprint.\n\nWorking Principle: MVR compresses the secondary steam generated by the evaporator to a higher saturation temperature using a steam compressor. The compressed steam is then returned as the heating source for the evaporator, replacing most of the live steam required in the process.",
    image: "/pilot/mvr-evaporator.png",
    features: [
      "Low energy consumption and low operating costs",
      "Small footprint with fewer utility requirements",
      "No need for primary / live steam",
      "Stable operation with a high degree of automation",
      "Suitable for heat-sensitive materials",
      "Touch-screen control with all-system stainless steel structure",
    ],
    specifications: {
      Model: "AI-0199 (Lab / Pilot Scale)",
      "Evaporator Tank Capacity": "60 Liters (customisable)",
      "Water Tank Capacity": "120 Liters",
      Control: "Touch-screen control box, low-temperature high-vacuum system",
      Construction: "All-system stainless steel structure",
      Applications: "Pharma, Chemical, Food, Environmental Protection, R&D",
    },
    standards: ["Custom pilot-scale build", "As per customer requirement"],
  },
  {
    id: "causticizer-pilot",
    name: "Causticizer",
    category: "Pilot Scale Plants",
    categorySlug: "pilot-plants",
    tagline: "Pilot Scale Lab Causticizer – complete green-to-white liquor plant",
    description:
      "A complete pilot scale lab causticizing plant that simulates the industrial recovery cycle of converting green liquor to white liquor. The system integrates dissolving, clarifying, slaking, and causticizing tanks with automatic pneumatic valves, transfer pumps, and a semi-automated PLC control panel. All tanks and structure are fabricated in SS 304.",
    image: "/pilot/causticizer.png",
    features: [
      "Dissolving / Storage Tank for Green Liquor with agitator (50 L)",
      "Green Liquor & White Liquor Clarifier Tanks for settling",
      "Slaker Tank with grits collecting port for lime + water mixing",
      "Four Causticizer Tanks (4 × 50 L) with temperature control to 105°C",
      "Semi-automated PLC control panel with touch operation & adjustable retention time",
      "Jacketed heaters on all causticizer tanks via imported PID controller",
    ],
    specifications: {
      "Green Liquor Tanks": "50 Liters (SS 304)",
      "Causticizer Tanks": "4 × 50 Liters (SS 304)",
      "White Liquor Tanks": "150 Liters (SS 304)",
      "Mud Slurry Tank": "50 Liters (SS 304)",
      Control: "Semi-automated PLC panel, Auto / Manual operation",
      "Transfer Pumps": "50 LPM with automatic pneumatic actuator valves",
    },
    standards: ["Custom pilot-scale build", "As per customer requirement"],
  },
  {
    id: "biomass-reactor-pilot",
    name: "Biomass Reactor for Pre-Hydrolysis",
    category: "Pilot Scale Plants",
    categorySlug: "pilot-plants",
    tagline: "Pre-hydrolysis biomass reactor for pulping, cooking & washing",
    description:
      "A pilot scale biomass reactor engineered for pre-hydrolysis research, integrating pulping, cooking, and washing operations in a single controllable unit. The heavy-duty stainless steel assembly features a jacketed cooking vessel, top filling point, and an integrated control panel for monitoring temperature and pressure during batch cycles.",
    image: "/pilot/biomass-reactor.png",
    features: [
      "Combined pulping, cooking, and washing operations",
      "Jacketed cooking vessel with top filling point",
      "Heavy-duty stainless steel structure with access platform and stairs",
      "Integrated control panel with digital indicators",
      "Suitable for pre-hydrolysis and chemical pulping research",
      "Customisable capacity as per customer requirement",
    ],
    specifications: {
      Operations: "Pulping · Cooking · Washing",
      "Cooking Vessel": "Jacketed, stainless steel",
      Construction: "Heavy-duty SS structure with platform",
      Control: "Integrated control panel with digital display",
      Capacity: "Customisable to laboratory / pilot requirement",
    },
    standards: ["Custom pilot-scale build", "As per customer requirement"],
  },
];

// All products in the system (catalog dataset + pilot plants). Used by the
// product detail pages and static param generation.
export const PRODUCTS: Product[] = [...DATASET_PRODUCTS, ...PILOT_PRODUCTS];

// Products shown in the main catalog grid / filter pills (excludes pilot
// plants, which live on their own dedicated page).
export const CATALOG_PRODUCTS: Product[] = DATASET_PRODUCTS;
