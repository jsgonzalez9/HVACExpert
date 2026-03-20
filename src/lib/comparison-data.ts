export interface ComparisonProduct {
  name: string;
  brand: string;
  price: number;
  rating: number;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  affiliateUrl: string;
  vendorPrices: { retailer: string; price: number; url: string }[];
}

export interface ComparisonPage {
  slug: string;
  type: 'best' | 'vs';
  title: string;
  category: string;
  description: string;
  winner?: string;
  products: ComparisonProduct[];
  verdict: string;
}

export const COMPARISONS: ComparisonPage[] = [
  {
    slug: 'best-ac-dual-run-capacitors-titan-vs-amrad',
    type: 'best',
    title: 'Titan PRO vs Amrad: Best AC Run Capacitors for 2026',
    category: 'Capacitor',
    description: 'Stop the summer "dead-start" issue. We compared the leading dual-run capacitors for reliability in extreme heat.',
    winner: 'Amrad Turbo200 Universal',
    verdict: 'The Amrad Turbo200 is the best overall capacitor due to its USA-made reliability and "never-stock-out" universal fit design.',
    products: [
      {
        name: 'Turbo200 Universal Capacitor',
        brand: 'Amrad',
        price: 68.00,
        rating: 5.0,
        pros: ['Made in USA', 'Universal replacement up to 67.5 MFD', 'Hand-tested at factory'],
        cons: ['Highest price in class'],
        specs: { material: 'Film/Foil', life: '60,000 Hours', tolerance: '+/- 5%' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 68.00, url: '#' },
          { retailer: 'HVACStore', price: 72.50, url: '#' }
        ]
      },
      {
        name: 'Titan PRO Dual Run',
        brand: 'Titan',
        price: 18.50,
        rating: 4.7,
        pros: ['Very budget friendly', 'Readily available', 'Compact size'],
        cons: ['Shorter lifespan in high heat'],
        specs: { material: 'E-Coated', life: '15,000 Hours', tolerance: '+/- 10%' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 18.50, url: '#' },
          { retailer: 'SupplyHouse', price: 16.99, url: '#' }
        ]
      }
    ]
  },
  {
    slug: 'best-hvac-contactor-emerson-honeywell',
    type: 'best',
    title: 'Top Rated HVAC Contactors for Condenser Units',
    category: 'Contactor',
    description: 'Fix the "Humming but no start" issue with these heavy-duty contactors designed for thousands of cycles.',
    winner: 'Emerson SureSwitch',
    verdict: 'The Emerson SureSwitch uses a microprocessor to prevent contact welding—the #1 cause of contactor failure.',
    products: [
      {
        name: 'SureSwitch Universal Contactor',
        brand: 'Emerson',
        price: 42.00,
        rating: 4.9,
        pros: ['Silent operation', 'Protects against welding', 'Microprocessor controlled'],
        cons: ['More expensive than standard mechanical'],
        specs: { amp: '40A', poles: '1-1/2 Pole', warranty: '5 Year' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 42.00, url: '#' }]
      }
    ]
  },
  {
    slug: 'best-furnace-ignition-control-boards',
    type: 'best',
    title: 'Best Furnace Ignition Control Boards (Honeywell vs White-Rodgers)',
    category: 'Control Board',
    description: 'Restore heating reliability with the best universal ignition boards for modern furnaces.',
    winner: 'Honeywell ST9120U1011 Universal',
    verdict: 'Honeywell is the preferred choice for HVAC pros due to its vast compatibility and easier configuration dip-switches.',
    products: [
      {
        name: 'Universal Electronic Fan Timer',
        brand: 'Honeywell',
        price: 135.00,
        rating: 4.8,
        pros: ['Fits hundreds of models', 'Clear LED error codes', 'Superior build quality'],
        cons: ['Higher upfront cost'],
        specs: { type: 'Universal', ignition: 'Hot Surface / Direct Spark', warranty: '1 Year' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 135.00, url: '#' }]
      }
    ]
  }
];
