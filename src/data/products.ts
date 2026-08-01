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
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  iconName: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Paper Testing Instruments",
    slug: "paper-testing",
    description: "High-precision testing equipment for structural, optical, and physical properties of paper.",
    iconName: "FileText",
  },
  {
    name: "Pulp Testing Instruments",
    slug: "pulp-testing",
    description: "Evaluates raw materials, fiber classification, pulp freeness, and quality standard preparation.",
    iconName: "Activity",
  },
  {
    name: "Packaging Testing Instruments",
    slug: "packaging-testing",
    description: "Simulates transit and compression hazards on corrugated boxes and protective packaging.",
    iconName: "Box",
  },
  {
    name: "Surface Coating & Textile",
    slug: "surface-textile",
    description: "Tests rub-fastness, GSM properties, and air permeability of textiles and laminates.",
    iconName: "Layers",
  },
  {
    name: "Environmental Testing",
    slug: "environmental-testing",
    description: "Precision temperature chambers, salt spray testers, and ovens simulating harsh conditions.",
    iconName: "ThermometerSun",
  },
  {
    name: "Pharma Lab Instruments",
    slug: "pharma-lab",
    description: "GMP-compliant quality control equipment for solid dosage testing and tablet dissolution.",
    iconName: "FlaskConical",
  },
  {
    name: "Pilot Scale Plants",
    slug: "pilot-plants",
    description: "Small-scale continuous and batch processing machinery for R&D labs and chemical processing.",
    iconName: "Cpu",
  },
];

export const PRODUCTS: Product[] = [
  // Paper Testing
  {
    id: "bursting-strength-tester-paper",
    name: "Digital Bursting Strength Tester",
    category: "Paper Testing Instruments",
    categorySlug: "paper-testing",
    tagline: "Microprocessor-controlled hydraulic bursting strength evaluator",
    description: "Designed for measuring the bursting strength of paper, paperboard, and corrugated board. It features a digital readout with peak hold, pneumatic clamping of specimens, and automatic calculation of burst factor and burst index.",
    features: [
      "Microprocessor control with high-precision pressure transducer",
      "Pneumatic clamping system with adjustable clamping pressure",
      "Auto-calibration facility via key commands",
      "Digital peak hold function to lock the maximum bursting value",
      "RS232 interface for PC connectivity and data logging"
    ],
    specifications: {
      "Measuring Range": "0 to 40 kg/cm²",
      "Resolution": "0.01 kg/cm²",
      "Pumping Rate": "95 ± 5 ml/min",
      "Clamping Force": "Adjustable (Pneumatic)",
      "Power Supply": "220V AC, 50Hz, Single Phase"
    },
    standards: ["ISO 2758", "TAPPI T-403", "ASTM D3786", "BS 3137"]
  },
  {
    id: "cobb-sizing-tester",
    name: "Cobb Sizing Tester",
    category: "Paper Testing Instruments",
    categorySlug: "paper-testing",
    tagline: "Standardized equipment for water absorption evaluation",
    description: "Determines the liquid absorptiveness (Cobb Value) of sized paper and board under standard conditions. Features a sturdy stainless steel construction with a quick-release clamping handle and a calibrated heavy metal roller.",
    features: [
      "Precision-machined stainless steel cylinder and test plate",
      "100 cm² cross-sectional area as per international standards",
      "Polished heavy steel roller (10 kg ± 0.5 kg) included",
      "Quick clamping lever mechanism for spill-proof sealing",
      "Includes stopwatch and graduated cylinder for water dosing"
    ],
    specifications: {
      "Test Area": "100 cm²",
      "Cylinder Height": "25 mm",
      "Roller Weight": "10.0 kg ± 0.5 kg",
      "Roller Width": "200 mm",
      "Material": "Corrosion-resistant Stainless Steel (SS-314)"
    },
    standards: ["ISO 535", "TAPPI T-441", "ASTM D3285", "BS EN 20535"]
  },
  {
    id: "elmendorf-tear-tester",
    name: "Elmendorf Tear Strength Tester",
    category: "Paper Testing Instruments",
    categorySlug: "paper-testing",
    tagline: "Pendulum-based tearing resistance evaluator",
    description: "Measures the force required to propagate a single-rip tear starting from a cut in paper, paperboard, or plastic films. Relies on gravity pendulum displacement with interchangeable augment weights.",
    features: [
      "Precision friction-free bearings for maximum pendulum accuracy",
      "Interchangeable pendulums/augment weights for various testing capacities",
      "Built-in specimen cutting template and cutting knife",
      "Pneumatic specimen clamping for repeatable alignment",
      "Digital display of tearing resistance and tear index"
    ],
    specifications: {
      "Basic Capacity": "8000 mN (can expand to 16000 mN & 32000 mN)",
      "Clamping Pressure": "4 to 6 bar",
      "Scale Reading": "Direct percentage of pendulum capacity",
      "Construction": "Cast iron heavy base for stability"
    },
    standards: ["ISO 1974", "TAPPI T-414", "ASTM D689", "SCAN P-11"]
  },
  {
    id: "tensile-strength-tester",
    name: "Digital Tensile Strength Tester (Horizontal)",
    category: "Paper Testing Instruments",
    categorySlug: "paper-testing",
    tagline: "High-precision strength, elongation, and TEA analyzer",
    description: "A microprocessor-driven horizontal tensile tester designed to measure tensile strength, elongation, and tensile energy absorption (TEA) of paper, tissue, and light board. Combines precision stepper motor drive with high-resolution load cell.",
    features: [
      "Horizontal configuration prevents sample sagging during setup",
      "High-precision load cell with accuracy better than ±0.5% of value",
      "Variable testing speed control from 1 to 200 mm/min",
      "Automatic clamp return after sample failure",
      "Onboard software calculates breaking length, Tensile Index, and TEA"
    ],
    specifications: {
      "Force Range": "0 to 500 N / 1000 N",
      "Speed Range": "1 to 200 mm/min (stepless)",
      "Elongation Resolution": "0.01 mm",
      "Sample Width": "15 mm (standard) or 25/50 mm options",
      "Clamping Mechanism": "Pneumatic or manual mechanical clamps"
    },
    standards: ["ISO 1924-2", "TAPPI T-494", "SCAN P-44", "APPITA/AS 1301"]
  },
  {
    id: "brightness-opacity-tester",
    name: "Brightness, Opacity & Color Tester",
    category: "Paper Testing Instruments",
    categorySlug: "paper-testing",
    tagline: "Diffuse blue reflectance & spectrophotometer",
    description: "Measures ISO Brightness (R457), Opacity, Whiteness, and Color coordinates of pulp, paper, and paperboard. Incorporates a d/0° optical geometry integration sphere with microcomputer processing.",
    features: [
      "Conforms strictly to d/0° (diffuse illumination / normal observation) geometry",
      "Long-lasting solid state LED light sources",
      "Direct measurement of ISO Brightness (R457) and Whiteness (CIE)",
      "Automatic calculation of opacity, scattering, and absorption coefficients",
      "Thermal printer integrated into the front panel for instant reports"
    ],
    specifications: {
      "Wavelength Range": "400 - 700 nm",
      "Measurement Area": "30 mm diameter",
      "Resolution": "0.01%",
      "Display": "Vibrant LCD touchscreen",
      "Calibration Standards": "Includes working black and white standards"
    },
    standards: ["ISO 2469", "ISO 2470", "TAPPI T-452", "TAPPI T-525"]
  },
  {
    id: "digital-thickness-micrometer",
    name: "Digital Thickness Micrometer",
    category: "Paper Testing Instruments",
    categorySlug: "paper-testing",
    tagline: "Dead-weight type digital micrometer",
    description: "Measures thickness of paper, board, and plastic films with specified pressure and anvil sizes. Uses a dead-weight system to ensure constant, repeatable contact pressure.",
    features: [
      "Dead-weight design eliminates operator-dependent pressure variations",
      "High-precision capacitive sensor",
      "Digital indicator with zero-setting, mm/inch toggle, and peak hold",
      "Hardened steel anvils with parallelism polished to within 1 micron",
      "Foot switch trigger for hands-free operations"
    ],
    specifications: {
      "Measuring Range": "0 to 10.000 mm",
      "Least Count (Resolution)": "0.001 mm (1 µm)",
      "Anvil Diameter": "16.0 mm (standard paper anvil)",
      "Contact Pressure": "50 kPa (standard paper pressure)",
      "Display": "Backlit LCD panel"
    },
    standards: ["ISO 534", "TAPPI T-411", "ASTM D645", "SCAN P-7"]
  },

  // Pulp Testing
  {
    id: "valley-beater",
    name: "Valley Beater",
    category: "Pulp Testing Instruments",
    categorySlug: "pulp-testing",
    tagline: "Standard laboratory beater for pulp refining evaluation",
    description: "Simulates commercial beating or refining of pulp under standardized conditions. The beaten pulp is then used to prepare test sheets to analyze the physical strength development of fiber.",
    features: [
      "Sturdy cast-iron tub lined with acid-resistant coating (or full stainless steel option)",
      "Precision-machined roll bars and bedplate bars in stainless steel",
      "Controlled beating pressure via a calibrated weight and lever arm",
      "Integrated wash-out drain and spray nozzle for quick cleaning",
      "Digital motor timer to automatically shut down the beater"
    ],
    specifications: {
      "Pulp Capacity": "360 grams oven-dry pulp (23 liters slurry)",
      "Concentration": "1.57% consistency",
      "Roll Speed": "500 ± 10 rpm",
      "Drive Motor": "1.0 HP, 3-phase, 1440 rpm",
      "Material": "Contact parts in high-grade stainless steel"
    },
    standards: ["TAPPI T-200", "ISO 5264-1", "SCAN C-25"]
  },
  {
    id: "standard-pulp-disintegrator",
    name: "Standard Pulp Disintegrator",
    category: "Pulp Testing Instruments",
    categorySlug: "pulp-testing",
    tagline: "Wet separation of pulp fibers without modification",
    description: "Designed for wet-disintegration of pulp samples. It separates interlaced fibers in a water suspension without altering their structural properties, preparing the pulp for freeness testing or sheet forming.",
    features: [
      "Corrosion-resistant stainless steel container with internal baffles",
      "High-speed propeller driven by a heavy-duty induction motor",
      "Pre-set digital revolution counter with automatic stop",
      "Interlocking safety switch (motor runs only when container is locked in place)",
      "Quick-release container mechanism for ease of pouring"
    ],
    specifications: {
      "Container Volume": "3.0 Liters",
      "Propeller Speed": "3000 ± 90 rpm",
      "Digital Counter Range": "0 to 999,999 revolutions",
      "Power Supply": "220V AC, 50Hz, Single Phase"
    },
    standards: ["ISO 5263", "TAPPI T-205", "SCAN C-18", "PAPTAC C.6"]
  },
  {
    id: "freeness-tester-csf",
    name: "Canadian Standard Freeness (CSF) Tester",
    category: "Pulp Testing Instruments",
    categorySlug: "pulp-testing",
    tagline: "Standard drainability of pulp suspensions",
    description: "Determines the rate of drainage of a dilute pulp suspension in water (freeness). An excellent indicator of the amount of mechanical treatment (refining) applied to the pulp fibers.",
    features: [
      "Sturdy wall-mounted bracket or optional table-top stand",
      "Chrome-plated brass drainage chamber and funnel assembly",
      "Calibrated nozzle and side orifice for precise water splitting",
      "Includes standard screens calibrated against certified reference screens",
      "Supplied with a graduated measuring cylinder (1000 ml)"
    ],
    specifications: {
      "Chamber Capacity": "1000 ml",
      "Bottom Cone Angle": "60 degrees",
      "Orifice Spacing": "Calibrated side and bottom discharge",
      "Overall Weight": "Approx. 25 kg",
      "Material": "Brass and Stainless Steel"
    },
    standards: ["ISO 5267-2", "TAPPI T-227", "SCAN C-21", "CPPA C.1"]
  },
  {
    id: "sheet-former-rapid-koethen",
    name: "Rapid-Koethen Sheet Former",
    category: "Pulp Testing Instruments",
    categorySlug: "pulp-testing",
    tagline: "Semi-automatic laboratory hand sheet maker",
    description: "Used to produce standardized hand sheets of pulp for physical testing. Features integrated vacuum drainage, dilution water inlet, aeration system, and heated drying chambers.",
    features: [
      "Fully integrated sheet-forming cylinder, dilution tank, and vacuum pump",
      "Automatic water filling and air agitation cycle",
      "Steam or electrical heating in drying chambers with high vacuum",
      "Produces flat, stress-free, and uniform paper sheets",
      "Water-saving recirculation loop configuration"
    ],
    specifications: {
      "Sheet Diameter": "200 mm",
      "Forming Screen Mesh": "150 mesh / 120 mesh options",
      "Drying Temperature": "93°C to 97°C (adjustable)",
      "Vacuum Level": "approx. -0.8 bar",
      "Drying Time": "Approx. 5 - 10 minutes per sheet"
    },
    standards: ["ISO 5269-2", "DIN 54358", "Zellcheming V/8/76"]
  },

  // Packaging Testing
  {
    id: "box-compression-tester",
    name: "Box Compression Tester",
    category: "Packaging Testing Instruments",
    categorySlug: "packaging-testing",
    tagline: "Stacking and compression resistance evaluator for cartons",
    description: "Evaluates the compressive strength of corrugated and solid fiberboard boxes. Simulates the actual loads applied to packaging cartons when stacked in warehouses or during transport.",
    features: [
      "Heavy-duty steel structure with twin ball screw driving mechanism",
      "Microprocessor control unit with digital readout of load and deflection",
      "High-precision load cells with overload protection limit switches",
      "Selectable test modes: Peak Force, Hold Value, and Stack Test",
      "Can connect to computer for compression curve graph plotting"
    ],
    specifications: {
      "Capacity Options": "500 kg, 1000 kg, 2000 kg, 5000 kg",
      "Platen Size": "600 x 600 mm or 1000 x 1000 mm",
      "Testing Speed": "10 ± 3 mm/min (or variable speed drive)",
      "Return Speed": "100 mm/min (fast return)",
      "Load Cell Accuracy": "±1% of indicated value"
    },
    standards: ["ISO 12048", "TAPPI T-804", "ASTM D642", "IS 7028"]
  },
  {
    id: "ring-crush-tester-rct",
    name: "Ring Crush Tester (RCT/FCT/ECT/PAT)",
    category: "Packaging Testing Instruments",
    categorySlug: "packaging-testing",
    tagline: "Multi-functional crush strength tester",
    description: "A highly versatile test machine to measure structural strength of paper, paperboard, and corrugated board. Performs Ring Crush Test (RCT), Edge Crush Test (ECT), Flat Crush Test (FCT), Pin Adhesion Test (PAT), and Concora Crush Test (CCT).",
    features: [
      "Precision load measurement using high-linearity load transducer",
      "Platen speed controlled by stepper motor for zero slippage",
      "Interchangeable test fixtures for RCT, ECT, FCT, PAT",
      "Large digital screen displays real-time load, peak load, and crush curve",
      "Automatic return to initial test height on sample failure"
    ],
    specifications: {
      "Force Range": "0 to 5000 N",
      "Resolution": "1 N (0.1 kg)",
      "Platen Size": "110 mm diameter",
      "Compression Speed": "12.5 ± 2.5 mm/min",
      "Stroke Distance": "80 mm max"
    },
    standards: ["ISO 12192 (RCT)", "ISO 3037 (ECT)", "ISO 3035 (FCT)", "TAPPI T-822", "TAPPI T-811"]
  },
  {
    id: "pneumatic-drop-tester",
    name: "Pneumatic Drop Tester",
    category: "Packaging Testing Instruments",
    categorySlug: "packaging-testing",
    tagline: "Free-fall impact tester for packaged cartons",
    description: "Evaluates the ability of filled packages, shipping containers, and transport bags to withstand vertical drops during manual handling, sorting, and warehouse stacking.",
    features: [
      "Pneumatically operated swing arm drop mechanism",
      "Drop height setting scale with precise pointer and lock",
      "Ensures exact flat, edge, or corner drop alignment",
      "Foot switch control for operator safety during drop release",
      "Heavy steel foundation base with safety protection guard fence"
    ],
    specifications: {
      "Drop Height Range": "300 mm to 1500 mm",
      "Max Payload Weight": "60 kg / 100 kg options",
      "Drop Arm Type": "Pneumatic split wing type",
      "Power & Air": "220V AC & 6 bar compressed air"
    },
    standards: ["ISO 2248", "ASTM D5276", "IS 7028 (Part IV)"]
  },
  {
    id: "puncture-resistance-tester",
    name: "Puncture Resistance Tester",
    category: "Packaging Testing Instruments",
    categorySlug: "packaging-testing",
    tagline: "GE-type pendulum puncture resistance tester",
    description: "Measures the energy required to puncture corrugated board and container boards using a triangular puncture head attached to a pendulum arm.",
    features: [
      "Sturdy cast-iron frame with a safety release latch",
      "Triangular puncture point conforming to international GE standards",
      "Graduated scale ring with frictionless pointer showing energy in Joules",
      "Interchangeable weights to test multiple grades of board",
      "Clamping plates with pneumatic activation for secure grip"
    ],
    specifications: {
      "Measuring Units": "0 - 48 Joules (GE Units)",
      "Pendulum Arm Angle": "90 degrees release",
      "Clamping Force": "Adjustable",
      "Puncture Head Specs": "Three-sided triangular pyramid"
    },
    standards: ["ISO 3036", "TAPPI T-803", "ASTM D781", "DIN 53142"]
  },

  // Surface Coating & Textile
  {
    id: "gsm-cutter-balance",
    name: "GSM Cutter & Precision Balance",
    category: "Surface Coating & Textile",
    categorySlug: "surface-textile",
    tagline: "Evaluates Grammage (Grams per Square Meter) of sheets",
    description: "A combination kit containing a circular specimen cutter that cuts exactly 100 cm² samples and a high-accuracy laboratory balance that displays weight directly in GSM (g/m²).",
    features: [
      "Circular cutter cuts exactly 100 cm² area (113 mm diameter)",
      "Includes 4 heavy-duty German double-edge cutting blades",
      "Safety lock switch on cutter prevents accidental cuts",
      "Electronic balance with draft shield, leveling bubble, and RS232 output",
      "Balance features a direct GSM calculation software mode"
    ],
    specifications: {
      "Sample Cut Area": "100 cm²",
      "Balance Capacity": "300 g / 600 g",
      "Balance Readability": "0.01 g / 0.001 g (for GSM precision)",
      "Cutting Pad Size": "300 x 300 mm self-healing rubber pad"
    },
    standards: ["ISO 536", "TAPPI T-410", "ASTM D646", "BS 3432"]
  },
  {
    id: "motorized-crockmeter",
    name: "Motorized Crockmeter",
    category: "Surface Coating & Textile",
    categorySlug: "surface-textile",
    tagline: "Measures color transfer from rubbing",
    description: "Determines the resistance of dyed textiles, leather, or printed surfaces to color transfer when rubbed with dry or wet cropping cloths. Features an automated stroke counter.",
    features: [
      "Reciprocating straight-line action with a fixed stroke distance",
      "Motorized drive with automatic stop at pre-set stroke counts",
      "Stainless steel crocking finger with standardized downward force",
      "Easy clamp-on mechanism for test specimens and crocking cloth",
      "Corrosion-resistant steel casing and acrylic safety cover"
    ],
    specifications: {
      "Stroke Length": "104 ± 3 mm",
      "Rubbing Finger": "16 mm diameter",
      "Downward Force": "9 N (approx. 900 grams)",
      "Speed": "60 cycles per minute",
      "Counter": "Digital pre-set up to 9999 cycles"
    },
    standards: ["ISO 105-X12", "AATCC 8", "AATCC 165", "BS 1006"]
  },

  // Environmental Testing
  {
    id: "bod-incubator-humidity",
    name: "BOD Incubator & Humidity Chamber",
    category: "Environmental Testing",
    categorySlug: "environmental-testing",
    tagline: "Controlled temperature and relative humidity chamber",
    description: "Provides highly stable and controlled environmental conditions for shelf-life testing, biological oxygen demand (BOD) analysis, and moisture absorption properties of packaging material.",
    features: [
      "Double-walled stainless steel (SS-304) inner chamber, powder-coated exterior",
      "Microprocessor PID temperature and humidity controller with digital display",
      "High-efficiency hermetically sealed refrigeration system",
      "Steam injection humidifier and forced air circulation for uniform parameters",
      "Safety thermostat for over-temperature protection"
    ],
    specifications: {
      "Temperature Range": "5°C to 60°C (± 0.5°C)",
      "Humidity Range": "40% to 95% RH (± 3% RH)",
      "Chamber Capacity": "150, 250, or 450 Liters",
      "Shelves": "Adjustable wire mesh SS shelves",
      "Inner Glass Door": "Full-view tempered glass door for internal inspection"
    },
    standards: ["IS 14142", "ASTM D4332", "TAPPI T-402"]
  },
  {
    id: "salt-spray-chamber",
    name: "Salt Spray Corrosion Chamber",
    category: "Environmental Testing",
    categorySlug: "environmental-testing",
    tagline: "Simulates marine and corrosive atmospheres",
    description: "Evaluates the corrosion resistance of protective coatings, paint finishes, electroplated layers, and metal components in a continuous saline mist environment.",
    features: [
      "Corrosion-proof FRP (Fiber-Reinforced Plastic) or composite construction",
      "Acrylic atomizing nozzle with adjustable spray rate and spread",
      "Tower-type salt mist atomizing system for uniform fog distribution",
      "PID temperature controller for saturator tower and test chamber",
      "Pneumatically operated hood opening for safe sample access"
    ],
    specifications: {
      "Chamber Temp": "35°C ± 1°C / 50°C ± 1°C",
      "Saturator Temp": "47°C ± 1°C",
      "pH Range": "6.5 to 7.2 (Neutral Salt Spray)",
      "Chamber Volume": "250 Liters / 450 Liters",
      "Compressed Air": "1.0 to 1.5 bar filtered air supply"
    },
    standards: ["ISO 9227", "ASTM B117", "DIN 50021", "JIS Z2371"]
  },

  // Pharma Laboratory
  {
    id: "tablet-dissolution-tester",
    name: "Tablet Dissolution Tester (8 Vessel)",
    category: "Pharma Lab Instruments",
    categorySlug: "pharma-lab",
    tagline: "8-vessel GMP-compliant dissolution tester",
    description: "Evaluates the release rate of active pharmaceutical ingredients from solid dosage forms (tablets, capsules) in simulated gastrointestinal fluids. Microprocessor controls water bath heating and stir speed.",
    features: [
      "Conforms strictly to USP, EP, and BP pharmacopeia specifications",
      "8-vessel setup (6 active tests + 2 blanks/standards)",
      "Sturdy water bath made of clear acrylic, heated by PID circulator",
      "Interchangeable paddles and baskets in electropolished SS-316",
      "Motorized lifting mechanism for stir assembly heads"
    ],
    specifications: {
      "Speed Range": "20 to 200 rpm (accuracy ±1 rpm)",
      "Temperature Range": "30°C to 40°C (accuracy ±0.1°C)",
      "Vessel Capacity": "1000 ml glass vessels (USP certified)",
      "Timer": "Multi-interval programmable alarm settings",
      "Interface": "LCD touchscreen with multi-user log"
    },
    standards: ["USP Chapter <711>", "EP Chapter 2.9.3", "IP Specifications"]
  },
  {
    id: "tablet-disintegration-tester",
    name: "Tablet Disintegration Tester (Double Basket)",
    category: "Pharma Lab Instruments",
    categorySlug: "pharma-lab",
    tagline: "GMP-compliant disintegration time analyzer",
    description: "Determines whether tablets or capsules disintegrate within the prescribed time when placed in a liquid medium under standard operating conditions. Accommodates two baskets.",
    features: [
      "Independent basket operation with separate timers",
      "Meets all USP, IP, and EP standards",
      "Auto-parking of baskets at the highest position when test completes",
      "Molded acrylic water bath with constant temperature circulation pump",
      "Removable USP tubes with fluted plastic discs for capsule testing"
    ],
    specifications: {
      "Stroke Frequency": "30 to 32 strokes per minute",
      "Stroke Height": "55 ± 2 mm",
      "Temp Control": "37.0°C ± 0.5°C",
      "Baskets": "2 independent baskets with 6 tubes each"
    },
    standards: ["USP Chapter <701>", "EP Chapter 2.9.1", "IP Specifications"]
  },

  // Pilot Scale Plants
  {
    id: "rotary-digester-pulping",
    name: "Rotary Digester (Lab Scale)",
    category: "Pilot Scale Plants",
    categorySlug: "pilot-plants",
    tagline: "Rotary autoclave digester for chemical/semi-chemical pulping",
    description: "A small-scale digestion autoclave used for pulping wood chips, agricultural residues, or grass in research laboratories. Relies on electric heating and continuous rotation for uniform cooking.",
    features: [
      "High-pressure autoclave container in SS-316",
      "Continuous 360-degree rotation driven by geared motor",
      "Programmable heating curves via PID temperature profile programmer",
      "Equipped with needle valves, pressure gauges, and safety blow-off valves",
      "Dual heating jackets for efficient energy distribution"
    ],
    specifications: {
      "Chamber Capacity": "10 Liters / 15 Liters options",
      "Design Pressure": "15 kg/cm²",
      "Max Temperature": "200°C",
      "Rotation Speed": "2 to 3 rpm",
      "Power Rating": "6.0 kW heating elements"
    },
    standards: ["TAPPI Useful Methods", "ISO Standard Pulping Research guidelines"]
  },
  {
    id: "bleaching-reactor-pulp",
    name: "Pulp Bleaching Reactor",
    category: "Pilot Scale Plants",
    categorySlug: "pilot-plants",
    tagline: "Simulates industrial bleaching sequences (C-E-H-D-P)",
    description: "Designed to perform chlorine dioxide, oxygen, ozone, and peroxide bleaching stages on raw chemical pulp under controlled temperature, agitation, and chemical feed.",
    features: [
      "Pressurized reaction vessel in titanium or special Hastelloy alloy",
      "High-shear impeller for uniform pulp consistency and chemical mixing",
      "Dosing ports for gaseous and liquid bleaching agents",
      "Water jacketed temperature control connected to a thermostatic bath",
      "Sampling valve for monitoring reaction progress under pressure"
    ],
    specifications: {
      "Pulp Consistency": "3% to 15% (Medium Consistency)",
      "Reactor Volume": "5.0 Liters",
      "Operating Temp": "Up to 95°C",
      "Stirring Speed": "100 to 1200 rpm (variable drive)"
    },
    standards: ["Research Laboratory Standards for Pulp Bleaching"]
  },
  {
    id: "pilot-scale-paper-machine",
    name: "Fourdrinier Paper Maker Pilot Plant",
    category: "Pilot Scale Plants",
    categorySlug: "pilot-plants",
    tagline: "Complete laboratory scale continuous paper making line",
    description: "A continuous scale pilot plant designed for research institutes and mill laboratories. Incorporates headbox, wire section, press section, dry cylinders, and size press to produce a continuous paper web.",
    features: [
      "Complete continuous process replicating industrial Fourdrinier line",
      "Automated control console for pump speed, roll speeds, and heat profile",
      "Stainless steel wire table with adjustable tensioners",
      "Electric or gas-heated drying drums with automatic web threading helpers",
      "Integrated chemical dosing systems to evaluate wet-end additives"
    ],
    specifications: {
      "Trim Width": "300 mm",
      "Machine Speed": "0.5 to 5.0 meters per minute",
      "Basis Weight Range": "40 to 150 g/m²",
      "Total Length": "Approx. 6.5 meters",
      "Drying Drum Temps": "Up to 120°C"
    },
    standards: ["Industrial R&D Pilot Line standards"]
  }
];
