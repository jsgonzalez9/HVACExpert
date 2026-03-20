// Static dataset for HVACExpert Efficiency Engine
// Focus: Climate Control (Furnaces, AC Units, Heat Pumps)

export interface StaticPart {
  id: string;
  part_number: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  oem_flag: boolean;
  fits: string[];
  symptoms: {
    description: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    urgency: 'DIY' | 'Soon' | 'ASAP';
    drivable: boolean;
    diagnostic_steps: string[];
  }[];
  install: {
    difficulty: 1 | 2 | 3 | 4 | 5;
    skill_level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
    labor_hours: number;
    tools: string[];
    pro_tips: string;
    common_mistakes: string;
  };
  prices: {
    retailer: string;
    price: number;
    shipping: number;
    url: string;
  }[];
}

export const STATIC_PARTS: StaticPart[] = [
  // AIR CONDITIONING
  {
    id: "hvac-101",
    part_number: "CAP050350440R",
    name: "Dual Run Capacitor (35+5 uF, 440V)",
    description: "Multi-functional capacitor that starts and runs the compressor and outdoor fan motor. Common point of failure in AC units.",
    brand: "Titan Pro",
    category: "Air Conditioning",
    price: 18.50,
    oem_flag: false,
    fits: ["Carrier 2-ton AC", "Goodman GSX Series", "Lennox Merit Series"],
    symptoms: [
      {
        description: "AC outdoor unit humming but fan won't spin",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Visually inspect for 'bulged' or leaking top", "Test capacitance using MFD setting on multimeter"]
      },
      {
        description: "AC capacitor making clicking or buzzing sound",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check terminals for corrosion", "Test under load"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Intermediate",
      labor_hours: 0.5,
      tools: ["5/16 nut driver", "Insulated pliers", "Multimeter"],
      pro_tips: "DISCHARGE the capacitor before touching terminals. Short the terminals with an insulated screwdriver.",
      common_mistakes: "Wiring 'Herm' to 'Fan' terminals (reverses poles), Not discharging voltage."
    },
    prices: [
      { retailer: "Amazon", price: 18.50, shipping: 0, url: "https://amazon.com" },
      { retailer: "SupplyHouse", price: 14.99, shipping: 8.99, url: "https://supplyhouse.com" }
    ]
  },
  {
    id: "hvac-102",
    part_number: "HN51KC024",
    name: "AC Contactor (Single Pole, 30 Amp)",
    description: "Heavy-duty relay that connects high voltage to the compressor and fan motor when the thermostat calls for cooling.",
    brand: "Carrier",
    category: "Air Conditioning",
    price: 32.00,
    oem_flag: true,
    fits: ["Carrier Payne Bryant AC Units"],
    symptoms: [
      {
        description: "Outdoor unit won't stop running even when thermostat is off",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check for welded/pitted contact pads", "Check for ants or debris stuck in the contactor"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 0.5,
      tools: ["1/4 nut driver", "Needle nose pliers"],
      pro_tips: "Look for 'pitted' silver contacts. If they look black or burnt, replace immediately to save the compressor.",
      common_mistakes: "Connecting 24V coil wires to the high voltage terminals."
    },
    prices: [
      { retailer: "Amazon", price: 32.00, shipping: 0, url: "https://amazon.com" },
      { retailer: "PartsHn", price: 28.50, shipping: 0, url: "https://partshn.com" }
    ]
  },
  // FURNACE
  {
    id: "hvac-201",
    part_number: "LH33WZ515",
    name: "Furnace Hot Surface Ignitor",
    description: "Silicon Carbide ignitor used to light the gas burners in residential furnaces.",
    brand: "Lennox",
    category: "Heating",
    price: 49.99,
    oem_flag: true,
    fits: ["Lennox G40", "Lennox G41", "Lennox G51"],
    symptoms: [
      {
        description: "Furnace blower runs but no heat",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Look for orange glow during startup", "Measure ohms (zero or infinity means broken)"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 0.5,
      tools: ["1/4 nut driver", "Clean gloves"],
      pro_tips: "NEVER touch the black tip with your bare hands. Skin oils will cause it to burn out in days.",
      common_mistakes: "Touching the element, Cracking the fragile ceramic base."
    },
    prices: [
      { retailer: "Amazon", price: 49.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RepairClinic", price: 54.00, shipping: 0, url: "https://repairclinic.com" }
    ]
  },
  {
    id: "hvac-202",
    part_number: "SEN01114",
    name: "Furnace Flame Sensor",
    description: "Safety sensor that detects if the gas has ignited. Shuts off gas if no flame is found to prevent explosions.",
    brand: "Trane",
    category: "Heating",
    price: 15.99,
    oem_flag: true,
    fits: ["Trane XE80", "Trane XR95", "American Standard Freedom"],
    symptoms: [
      {
        description: "Furnace fires up and then shuts off after 3-5 seconds",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Clean the rod with steel wool", "Check for cracked ceramic insulator"]
      }
    ],
    install: {
      difficulty: 1,
      skill_level: "Beginner",
      labor_hours: 0.2,
      tools: ["1/4 nut driver", "Steel wool"],
      pro_tips: "Sometimes just cleaning the soot off the rod with steel wool (NOT sandpaper) fix the issue.",
      common_mistakes: "Using sandpaper which leaves grit that burns into the rod."
    },
    prices: [
      { retailer: "Amazon", price: 15.99, shipping: 0, url: "https://amazon.com" }
    ]
  },
  // CONTROLS
  {
    id: "hvac-301",
    part_number: "TH8321U1008",
    name: "VisionPRO 8000 Programmable Thermostat",
    description: "Multi-stage touchscreen thermostat with WiFi capability and humidity control.",
    brand: "Honeywell Home",
    category: "Controls",
    price: 175.00,
    oem_flag: true,
    fits: ["Universal Compatibility"],
    symptoms: [
      {
        description: "HVAC system short cycling",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check C-wire connection", "Verify cycle-per-hour settings"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["Screwdriver", "Level"],
      pro_tips: "Connect the 'C' (Common) wire for advanced features and to avoid battery drain.",
      common_mistakes: "Not labeling wires, resulting in blown fuses on the control board."
    },
    prices: [
      { retailer: "Amazon", price: 175.00, shipping: 0, url: "https://amazon.com" },
      { retailer: "SupplyHouse", price: 168.00, shipping: 0, url: "https://supplyhouse.com" }
    ]
  }
];

// Export helper functions
export const getPartByNumber = (partNumber: string): StaticPart | undefined => {
  return STATIC_PARTS.find(p => p.part_number.toLowerCase() === partNumber.toLowerCase());
};

export const getPartsByCategory = (category: string): StaticPart[] => {
  return STATIC_PARTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getPartsBySymptom = (symptomQuery: string): StaticPart[] => {
  const query = symptomQuery.toLowerCase();
  return STATIC_PARTS.filter(p => 
    p.symptoms.some(s => s.description.toLowerCase().includes(query))
  );
};

export const getAllPartNumbers = (): string[] => {
  return STATIC_PARTS.map(p => p.part_number);
};

export const getCategories = (): string[] => {
  return [...new Set(STATIC_PARTS.map(p => p.category))];
};
