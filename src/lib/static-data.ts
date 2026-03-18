// Static dataset for HVACExpert Efficiency Engine
// Focus: Climate Control (Furnaces, AC Units, Heat Pumps, Thermostats)

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
  // HEATING & COOLING
  {
    id: "1",
    part_number: "TH8321U1008",
    name: "Honeywell VisionPRO 8000 Thermostat",
    description: "Multi-stage universal programmable thermostat with humidity control. Compatible with most residential HVAC systems.",
    brand: "Honeywell Home",
    category: "Controls",
    price: 189.99,
    oem_flag: true,
    fits: ["Carrier 38CKC", "Lennox G61MPV", "Trane XR15"],
    symptoms: [
      {
        description: "Display is blank or unresponsive",
        severity: "High",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check batteries", "Verify 24V at R and C terminals", "Check furnace door switch"]
      },
      {
        description: "Room temperature doesn't match setting",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Calibrate sensor", "Check for drafts near baseplate", "Verify heat/cool setpoints"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["Small flathead screwdriver", "Level", "Drill"],
      pro_tips: "Label your existing wires with the included stickers before removing the old thermostat.",
      common_mistakes: "Shorting R and C wires (blows furnace fuse), Not leveling the baseplate."
    },
    prices: [
      { retailer: "Amazon", price: 189.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "SupplyHouse", price: 176.50, shipping: 0, url: "https://supplyhouse.com" },
      { retailer: "Home Depot", price: 199.00, shipping: 0, url: "https://homedepot.com" }
    ]
  },
  {
    id: "2",
    part_number: "41-962",
    name: "Platinum Spark Plug",
    description: "OEM spark plugs for 5.3L and 6.2L Vortec engines. Platinum tip for extended life and consistent performance.",
    brand: "ACDelco",
    category: "Ignition",
    price: 8.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L", "2014-2019 GMC Sierra 1500 6.2L", "2014-2019 Chevy Silverado 1500 6.2L"],
    symptoms: [
      {
        description: "Engine misfire under load",
        severity: "High",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Scan for P0300-P0308 codes", "Check spark plug gap", "Inspect coil packs"]
      },
      {
        description: "Rough idle",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check for vacuum leaks", "Inspect spark plugs for fouling", "Test ignition coils"]
      },
      {
        description: "Poor fuel economy",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Check MPG vs normal", "Inspect spark plug condition", "Verify gap is 0.040\""]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 1.0,
      tools: ["Spark plug socket", "Torque wrench", "Spark plug gap tool", "Dielectric grease"],
      pro_tips: "Apply anti-seize to threads. Gap to exactly 0.040\". Use dielectric grease on coil boot.",
      common_mistakes: "Over-torquing (strip threads), Wrong gap, Not using anti-seize"
    },
    prices: [
      { retailer: "Amazon", price: 8.99, shipping: 0, url: "https://amazon.com/dp/B00ABC" },
      { retailer: "RockAuto", price: 6.50, shipping: 8.99, url: "https://rockauto.com" },
      { retailer: "AutoZone", price: 9.99, shipping: 0, url: "https://autozone.com" }
    ]
  },
  {
    id: "3",
    part_number: "UF-413",
    name: "Ignition Coil Pack",
    description: "Direct replacement ignition coil for 5.3L and 6.2L V8 engines. Individual coil-on-plug design.",
    brand: "ACDelco",
    category: "Ignition",
    price: 45.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L"],
    symptoms: [
      {
        description: "Cylinder misfire (P030X codes)",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Scan for specific cylinder misfire code", "Swap coil to different cylinder", "Retest"]
      },
      {
        description: "Hesitation on acceleration",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check for misfires under load", "Test coil resistance", "Inspect connectors"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["10mm socket", "Torque wrench", "Dielectric grease"],
      pro_tips: "Replace all coils at once for balanced performance. Use dielectric grease on boot.",
      common_mistakes: "Not torquing bolts properly, Forgetting dielectric grease, Mixing up coil locations"
    },
    prices: [
      { retailer: "Amazon", price: 45.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 38.50, shipping: 8.99, url: "https://rockauto.com" },
      { retailer: "O'Reilly", price: 52.99, shipping: 0, url: "https://oreilly.com" }
    ]
  },
  // FUEL SYSTEM
  {
    id: "4",
    part_number: "M100118",
    name: "Fuel Pump Module Assembly",
    description: "Complete fuel pump module with sending unit for GMC Sierra and Chevy Silverado 1500 models.",
    brand: "Delphi",
    category: "Fuel System",
    price: 189.99,
    oem_flag: false,
    fits: ["2014-2018 GMC Sierra 1500", "2014-2018 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Engine cranks but won't start",
        severity: "Critical",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Listen for fuel pump prime (2-second hum when key turned)", "Check fuel pressure at rail", "Test fuel pump relay"]
      },
      {
        description: "Loss of power under load",
        severity: "High",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check fuel pressure", "Test fuel pump flow rate", "Inspect fuel filter"]
      },
      {
        description: "Whining noise from fuel tank",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Listen for excessive pump noise", "Check fuel pressure", "Inspect for contamination"]
      }
    ],
    install: {
      difficulty: 4,
      skill_level: "Advanced",
      labor_hours: 3.0,
      tools: ["Fuel line disconnect tool", "Jack and stands", "Socket set", "Torque wrench", "Fuel pressure gauge"],
      pro_tips: "Relieve fuel pressure first. Keep work area ventilated. Replace fuel filter at same time.",
      common_mistakes: "Not relieving fuel pressure (sprays gas), Damaging fuel level sender, Contaminating new pump"
    },
    prices: [
      { retailer: "Amazon", price: 189.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 165.00, shipping: 15.99, url: "https://rockauto.com" },
      { retailer: "AutoZone", price: 219.99, shipping: 0, url: "https://autozone.com" }
    ]
  },
  {
    id: "5",
    part_number: "FG0358",
    name: "Fuel Pump Module",
    description: "OE-quality fuel pump module with strainer and gasket included.",
    brand: "Delphi",
    category: "Fuel System",
    price: 149.99,
    oem_flag: false,
    fits: ["2014-2018 GMC Sierra 1500", "2014-2018 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Long crank time before start",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check fuel pressure bleed-off", "Test check valve", "Inspect for leaks"]
      },
      {
        description: "Stalling at idle",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check fuel pressure at idle", "Test fuel pump relay", "Inspect electrical connections"]
      }
    ],
    install: {
      difficulty: 4,
      skill_level: "Advanced",
      labor_hours: 2.5,
      tools: ["Fuel line tool", "Jack and stands", "Socket set", "Torque wrench"],
      pro_tips: "Clean tank before installing. Replace strainer. Check wiring harness.",
      common_mistakes: "Installing without cleaning tank, Reusing old gasket, Not checking wiring"
    },
    prices: [
      { retailer: "Amazon", price: 149.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 128.50, shipping: 12.99, url: "https://rockauto.com" }
    ]
  },
  // COOLING SYSTEM
  {
    id: "6",
    part_number: "252-845",
    name: "Water Pump",
    description: "OEM water pump with gasket for 5.3L and 6.2L Vortec engines. Includes all necessary hardware.",
    brand: "ACDelco",
    category: "Cooling",
    price: 89.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L", "2014-2019 GMC Sierra 1500 6.2L", "2014-2019 Chevy Silverado 1500 6.2L"],
    symptoms: [
      {
        description: "Engine overheating",
        severity: "Critical",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check coolant level", "Inspect for leaks", "Test thermostat", "Check water pump weep hole"]
      },
      {
        description: "Coolant leak from front of engine",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Inspect water pump weep hole", "Check gasket area", "Pressure test cooling system"]
      },
      {
        description: "Grinding noise from water pump",
        severity: "High",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Listen for bearing noise", "Check for shaft play", "Inspect pulley alignment"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 2.0,
      tools: ["Socket set", "Torque wrench", "Coolant drain pan", "Gasket scraper", "RTV sealant"],
      pro_tips: "Replace thermostat at same time. Use new bolts. Torque to spec in sequence.",
      common_mistakes: "Not cleaning gasket surface, Wrong torque sequence, Reusing old bolts"
    },
    prices: [
      { retailer: "Amazon", price: 89.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 72.50, shipping: 9.99, url: "https://rockauto.com" },
      { retailer: "O'Reilly", price: 99.99, shipping: 0, url: "https://oreilly.com" }
    ]
  },
  {
    id: "7",
    part_number: "15-11105",
    name: "Radiator",
    description: "Direct-fit aluminum radiator for GMC Sierra and Chevy Silverado 1500 models.",
    brand: "Spectra Premium",
    category: "Cooling",
    price: 189.99,
    oem_flag: false,
    fits: ["2014-2018 GMC Sierra 1500", "2014-2018 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Coolant leaking from radiator",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Inspect radiator tanks and core", "Pressure test system", "Check for cracks"]
      },
      {
        description: "Overheating at idle but not at speed",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check fan operation", "Inspect radiator fins", "Test coolant flow"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 2.5,
      tools: ["Socket set", "Pliers", "Coolant drain pan", "Torque wrench"],
      pro_tips: "Flush system before installing. Use new hoses. Check fan shroud alignment.",
      common_mistakes: "Not flushing system, Reusing old hoses, Overfilling coolant"
    },
    prices: [
      { retailer: "Amazon", price: 189.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 156.00, shipping: 18.99, url: "https://rockauto.com" }
    ]
  },
  // BRAKE SYSTEM
  {
    id: "8",
    part_number: "17D1367CH",
    name: "Ceramic Brake Pads (Front)",
    description: "Premium ceramic brake pads with hardware kit. Low dust, quiet operation.",
    brand: "ACDelco",
    category: "Brakes",
    price: 59.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500", "2014-2019 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Squealing noise when braking",
        severity: "Low",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check pad thickness", "Inspect wear indicators", "Look for glazing"]
      },
      {
        description: "Grinding noise when braking",
        severity: "Critical",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check if pads are metal-to-metal", "Inspect rotors for damage", "Measure pad thickness"]
      },
      {
        description: "Soft brake pedal",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check brake fluid level", "Inspect for leaks", "Test master cylinder"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 1.0,
      tools: ["C-clamp or brake caliper tool", "Socket set", "Torque wrench", "Brake cleaner"],
      pro_tips: "Compress caliper piston before installing. Bed brakes properly. Check brake fluid.",
      common_mistakes: "Not compressing piston, Getting grease on pads, Not bedding brakes"
    },
    prices: [
      { retailer: "Amazon", price: 59.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 45.50, shipping: 8.99, url: "https://rockauto.com" },
      { retailer: "AutoZone", price: 69.99, shipping: 0, url: "https://autozone.com" }
    ]
  },
  {
    id: "9",
    part_number: "18A1705A",
    name: "Brake Rotor (Front)",
    description: "Premium ventilated brake rotor with corrosion-resistant coating.",
    brand: "ACDelco",
    category: "Brakes",
    price: 79.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500", "2014-2019 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Steering wheel vibration when braking",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check rotor runout", "Inspect for warping", "Measure thickness"]
      },
      {
        description: "Pulsating brake pedal",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check rotor thickness variation", "Inspect for hot spots", "Measure runout"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 1.0,
      tools: ["Socket set", "Torque wrench", "Brake cleaner", "Wire brush"],
      pro_tips: "Clean hub surface before installing. Torque wheels properly. Bed new rotors.",
      common_mistakes: "Not cleaning hub, Overtorquing wheels, Not bedding brakes"
    },
    prices: [
      { retailer: "Amazon", price: 79.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 62.50, shipping: 12.99, url: "https://rockauto.com" }
    ]
  },
  // STARTER
  {
    id: "10",
    part_number: "12645298",
    name: "Starter Motor",
    description: "OEM starter motor for 5.3L and 6.2L V8 engines. Includes solenoid.",
    brand: "ACDelco",
    category: "Electrical",
    price: 149.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L", "2014-2019 GMC Sierra 1500 6.2L", "2014-2019 Chevy Silverado 1500 6.2L"],
    symptoms: [
      {
        description: "Clicking noise when turning key",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check battery voltage", "Test starter solenoid", "Check connections"]
      },
      {
        description: "Engine cranks slowly",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check battery charge", "Test starter amp draw", "Inspect cables"]
      },
      {
        description: "No crank, no start",
        severity: "Critical",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check battery voltage", "Test starter relay", "Check neutral safety switch"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 1.5,
      tools: ["Socket set", "Torque wrench", "Jack and stands", "Multimeter"],
      pro_tips: "Disconnect battery first. Support starter when removing bolts. Check flywheel teeth.",
      common_mistakes: "Not disconnecting battery, Dropping starter, Not checking flywheel"
    },
    prices: [
      { retailer: "Amazon", price: 149.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 125.00, shipping: 12.99, url: "https://rockauto.com" },
      { retailer: "O'Reilly", price: 169.99, shipping: 0, url: "https://oreilly.com" }
    ]
  },
  // OXYGEN SENSORS
  {
    id: "11",
    part_number: "213-4768",
    name: "Oxygen Sensor (Upstream)",
    description: "OEM upstream O2 sensor for bank 1. Pre-catalytic converter.",
    brand: "ACDelco",
    category: "Emissions",
    price: 89.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L"],
    symptoms: [
      {
        description: "Check engine light P0131/P0135",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Scan for O2 sensor codes", "Check sensor voltage", "Test heater circuit"]
      },
      {
        description: "Poor fuel economy",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Check fuel trims", "Monitor O2 sensor response", "Inspect for contamination"]
      },
      {
        description: "Rough idle",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check short term fuel trims", "Test O2 sensor response time", "Inspect wiring"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["O2 sensor socket", "Torque wrench", "Anti-seize compound"],
      pro_tips: "Use O2 sensor socket to avoid damaging wires. Apply anti-seize to threads.",
      common_mistakes: "Using wrong socket (damages wires), Not using anti-seize, Cross-threading"
    },
    prices: [
      { retailer: "Amazon", price: 89.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 72.50, shipping: 8.99, url: "https://rockauto.com" }
    ]
  },
  {
    id: "12",
    part_number: "213-4769",
    name: "Oxygen Sensor (Downstream)",
    description: "OEM downstream O2 sensor for bank 1. Post-catalytic converter.",
    brand: "ACDelco",
    category: "Emissions",
    price: 79.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L"],
    symptoms: [
      {
        description: "P0420 catalytic converter efficiency",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check downstream O2 sensor readings", "Compare to upstream", "Test cat efficiency"]
      },
      {
        description: "Failed emissions test",
        severity: "High",
        urgency: "ASAP",
        drivable: true,
        diagnostic_steps: ["Check all O2 sensors", "Test catalytic converter", "Inspect for exhaust leaks"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["O2 sensor socket", "Torque wrench", "Anti-seize"],
      pro_tips: "Downstream sensor is after cat. May be harder to access. Use penetrating oil.",
      common_mistakes: "Confusing upstream/downstream, Not waiting for exhaust to cool"
    },
    prices: [
      { retailer: "Amazon", price: 79.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 65.00, shipping: 8.99, url: "https://rockauto.com" }
    ]
  },
  // SUSPENSION
  {
    id: "13",
    part_number: "CK620054",
    name: "Control Arm and Ball Joint Assembly",
    description: "Complete front lower control arm with ball joint and bushings.",
    brand: "Moog",
    category: "Suspension",
    price: 129.99,
    oem_flag: false,
    fits: ["2014-2019 GMC Sierra 1500", "2014-2019 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Clunking noise over bumps",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Inspect ball joint play", "Check control arm bushings", "Test with pry bar"]
      },
      {
        description: "Steering wheel shimmy",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check for loose components", "Inspect bushings", "Check alignment"]
      },
      {
        description: "Uneven tire wear",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Check alignment", "Inspect bushings for wear", "Measure tire wear pattern"]
      }
    ],
    install: {
      difficulty: 4,
      skill_level: "Advanced",
      labor_hours: 2.0,
      tools: ["Ball joint press", "Socket set", "Torque wrench", "Jack and stands", "Alignment tool"],
      pro_tips: "Get alignment after install. Use ball joint press, not hammer. Torque to spec.",
      common_mistakes: "Using hammer on ball joint, Not getting alignment, Wrong torque on bolts"
    },
    prices: [
      { retailer: "Amazon", price: 129.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 108.50, shipping: 15.99, url: "https://rockauto.com" },
      { retailer: "O'Reilly", price: 149.99, shipping: 0, url: "https://oreilly.com" }
    ]
  },
  {
    id: "14",
    part_number: "K750155",
    name: "Ball Joint (Lower)",
    description: "Heavy-duty lower ball joint with improved greaseable design.",
    brand: "Moog",
    category: "Suspension",
    price: 49.99,
    oem_flag: false,
    fits: ["2014-2019 GMC Sierra 1500", "2014-2019 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Knocking noise when turning",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check ball joint play", "Inspect boot for tears", "Test with pry bar"]
      },
      {
        description: "Steering feels loose",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check all steering components", "Test ball joint play", "Inspect tie rods"]
      }
    ],
    install: {
      difficulty: 4,
      skill_level: "Advanced",
      labor_hours: 1.5,
      tools: ["Ball joint press", "Socket set", "Torque wrench", "Jack and stands"],
      pro_tips: "Use proper ball joint press. Support lower control arm. Grease after install.",
      common_mistakes: "Hammering on ball joint, Not using press, Wrong installation orientation"
    },
    prices: [
      { retailer: "Amazon", price: 49.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 42.00, shipping: 8.99, url: "https://rockauto.com" }
    ]
  },
  // AC SYSTEM
  {
    id: "15",
    part_number: "15-20941",
    name: "AC Compressor",
    description: "OEM AC compressor with clutch for GMC Sierra and Chevy Silverado.",
    brand: "ACDelco",
    category: "AC",
    price: 289.99,
    oem_flag: true,
    fits: ["2014-2018 GMC Sierra 1500", "2014-2018 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "AC not blowing cold",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Check refrigerant level", "Test compressor clutch", "Check for leaks"]
      },
      {
        description: "AC clutch not engaging",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check refrigerant pressure", "Test clutch coil", "Check fuse and relay"]
      },
      {
        description: "Loud noise from AC compressor",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Listen for bearing noise", "Check clutch operation", "Inspect for damage"]
      }
    ],
    install: {
      difficulty: 4,
      skill_level: "Advanced",
      labor_hours: 3.0,
      tools: ["AC manifold gauge set", "Vacuum pump", "Socket set", "Torque wrench"],
      pro_tips: "Must evacuate system first. Replace receiver drier. Vacuum before charging.",
      common_mistakes: "Not evacuating system, Not replacing drier, Overcharging system"
    },
    prices: [
      { retailer: "Amazon", price: 289.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 245.00, shipping: 18.99, url: "https://rockauto.com" },
      { retailer: "O'Reilly", price: 329.99, shipping: 0, url: "https://oreilly.com" }
    ]
  },
  // THERMOSTAT
  {
    id: "16",
    part_number: "131-180",
    name: "Thermostat",
    description: "OEM 195°F thermostat with gasket for 5.3L and 6.2L engines.",
    brand: "ACDelco",
    category: "Cooling",
    price: 24.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L", "2014-2019 GMC Sierra 1500 6.2L", "2014-2019 Chevy Silverado 1500 6.2L"],
    symptoms: [
      {
        description: "Engine overheating",
        severity: "Critical",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check coolant level", "Test thermostat opening", "Check for flow"]
      },
      {
        description: "Heater not working properly",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check coolant level", "Test thermostat", "Check for air pockets"]
      },
      {
        description: "Engine takes long time to warm up",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Check thermostat stuck open", "Monitor temp gauge", "Test in hot water"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 1.0,
      tools: ["Socket set", "Drain pan", "Gasket scraper", "RTV sealant"],
      pro_tips: "Use new gasket. Clean housing surface. Bleed air after refill.",
      common_mistakes: "Reusing old gasket, Wrong thermostat temp, Not bleeding air"
    },
    prices: [
      { retailer: "Amazon", price: 24.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 18.50, shipping: 8.99, url: "https://rockauto.com" },
      { retailer: "AutoZone", price: 29.99, shipping: 0, url: "https://autozone.com" }
    ]
  },
  // SERPENTINE BELT
  {
    id: "17",
    part_number: "K060841",
    name: "Serpentine Belt",
    description: "Premium serpentine drive belt for 5.3L and 6.2L engines with AC.",
    brand: "Gates",
    category: "Belts",
    price: 34.99,
    oem_flag: false,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L", "2014-2019 GMC Sierra 1500 6.2L", "2014-2019 Chevy Silverado 1500 6.2L"],
    symptoms: [
      {
        description: "Squealing noise from engine",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Inspect belt for cracks", "Check tensioner", "Look for glazing"]
      },
      {
        description: "Belt slipping off pulleys",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Check pulley alignment", "Inspect tensioner", "Look for damaged pulleys"]
      },
      {
        description: "Visible cracks on belt",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Inspect rib count", "Check for missing chunks", "Measure wear"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["Serpentine belt tool", "Socket set"],
      pro_tips: "Draw belt routing before removal. Check tensioner while belt is off.",
      common_mistakes: "Wrong belt routing, Not checking tensioner, Wrong belt size"
    },
    prices: [
      { retailer: "Amazon", price: 34.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 28.50, shipping: 8.99, url: "https://rockauto.com" },
      { retailer: "AutoZone", price: 39.99, shipping: 0, url: "https://autozone.com" }
    ]
  },
  // MASS AIR FLOW SENSOR
  {
    id: "18",
    part_number: "213-4223",
    name: "Mass Air Flow Sensor",
    description: "OEM MAF sensor for 5.3L and 6.2L Vortec engines.",
    brand: "ACDelco",
    category: "Emissions",
    price: 129.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L"],
    symptoms: [
      {
        description: "Check engine light P0101",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Scan for MAF codes", "Check sensor readings", "Clean or replace"]
      },
      {
        description: "Poor acceleration",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check MAF readings at WOT", "Test for contamination", "Inspect air filter"]
      },
      {
        description: "Rough idle",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check idle MAF readings", "Clean sensor", "Test with scan tool"]
      }
    ],
    install: {
      difficulty: 1,
      skill_level: "Beginner",
      labor_hours: 0.25,
      tools: ["Torx bit set", "MAF cleaner (optional)"],
      pro_tips: "Try cleaning first with MAF cleaner. Don't touch sensor wires. Check air filter.",
      common_mistakes: "Touching sensor element, Using wrong cleaner, Not checking air filter"
    },
    prices: [
      { retailer: "Amazon", price: 129.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 108.00, shipping: 8.99, url: "https://rockauto.com" }
    ]
  },
  // THROTTLE BODY
  {
    id: "19",
    part_number: "217-3106",
    name: "Throttle Body",
    description: "Electronic throttle body with actuator for 5.3L and 6.2L engines.",
    brand: "ACDelco",
    category: "Fuel System",
    price: 189.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500 5.3L", "2014-2019 Chevy Silverado 1500 5.3L"],
    symptoms: [
      {
        description: "Reduced engine power warning",
        severity: "High",
        urgency: "ASAP",
        drivable: true,
        diagnostic_steps: ["Scan for throttle codes", "Test throttle position", "Check for carbon buildup"]
      },
      {
        description: "Hesitation on acceleration",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check throttle response", "Clean throttle body", "Test TPS"]
      },
      {
        description: "High idle",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check for vacuum leaks", "Clean throttle body", "Relearn idle"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Intermediate",
      labor_hours: 1.0,
      tools: ["Socket set", "Throttle body cleaner", "Torque wrench"],
      pro_tips: "Clean old gasket surface. Use new gasket. Perform throttle relearn after install.",
      common_mistakes: "Not cleaning surface, Not performing relearn, Damaging electrical connector"
    },
    prices: [
      { retailer: "Amazon", price: 189.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 158.00, shipping: 12.99, url: "https://rockauto.com" }
    ]
  },
  // EVAP CANISTER
  {
    id: "20",
    part_number: "215-464",
    name: "Vapor Canister Vent Solenoid",
    description: "EVAP canister vent solenoid valve for emissions system.",
    brand: "ACDelco",
    category: "Emissions",
    price: 49.99,
    oem_flag: true,
    fits: ["2014-2019 GMC Sierra 1500", "2014-2019 Chevy Silverado 1500"],
    symptoms: [
      {
        description: "Check engine light P0449",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Scan for EVAP codes", "Test vent solenoid", "Check for blockage"]
      },
      {
        description: "Hard to fill gas tank",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check vent valve operation", "Inspect for blockage", "Test with scan tool"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["Socket set", "Pliers"],
      pro_tips: "Located near canister by fuel tank. Check hoses for cracks. Clear codes after install.",
      common_mistakes: "Breaking plastic lines, Not clearing codes, Wrong solenoid"
    },
    prices: [
      { retailer: "Amazon", price: 49.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "RockAuto", price: 38.50, shipping: 8.99, url: "https://rockauto.com" }
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
