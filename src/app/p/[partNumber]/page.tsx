import { STATIC_PARTS, getPartByNumber } from "@/lib/static-data";
import { notFound } from "next/navigation";
import { PriceComparison } from "@/components/PriceComparison";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Shield, AlertTriangle, CheckCircle, Wrench, Clock } from "lucide-react";

import { Metadata } from "next";

interface PartPageProps {
  params: Promise<{
    partNumber: string;
  }>;
}

export async function generateMetadata({ params }: PartPageProps): Promise<Metadata> {
  const { partNumber } = await params;
  const part = getPartByNumber(partNumber);
  
  if (!part) return { title: 'Component Not Found' };

  const title = `${part.part_number} ${part.brand} ${part.name} - HVAC Replacement Component`;
  const description = `Buy ${part.brand} ${part.name} (${part.part_number}). Compare prices, check compatibility, and find symptoms of failure. HVAC Pro verified parts.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hvacexpert.com/p/${partNumber}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://hvacexpert.com/p/${partNumber}`,
    }
  };
}

export async function generateStaticParams() {
  return STATIC_PARTS.map((part) => ({
    partNumber: part.part_number,
  }));
}

export default async function PartPage({ params }: PartPageProps) {
  const { partNumber } = await params;
  const part = getPartByNumber(partNumber);

  if (!part) {
    notFound();
  }

  const bestPrice = part.prices.sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping))[0];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-[#333333] bg-[#1a1a1a]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              HVAC<span className="text-[#f96706]">Expert</span>
            </a>
          </div>
        </div>
      </header>

      {/* Product Detail */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Product Info */}
          <div>
            <div className="bg-[#1e1e1e] border border-[#333333] rounded-lg p-8 mb-6">
              <div className="h-80 bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-700">
                  {part.part_number.slice(0, 4)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{part.part_number}</span>
                {part.oem_flag && (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    OEM
                  </Badge>
                )}
                <Badge className="bg-[#333333] text-gray-300">{part.brand}</Badge>
              </div>

              <h1 className="text-3xl font-bold">{part.name}</h1>

              <p className="text-gray-400">{part.description}</p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Truck size={18} />
                  <span className="text-sm">Priority HVAC Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Shield size={18} />
                  <span className="text-sm">Industrial Grade Components</span>
                </div>
              </div>

              {/* Symptoms Section */}
              {part.symptoms.length > 0 && (
                <div className="mt-6 p-4 bg-[#1e1e1e] border border-[#333333] rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="text-amber-500" size={20} />
                    System Diagnostics
                  </h3>
                  <div className="space-y-3">
                    {part.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-[#2a2a2a] rounded">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          symptom.severity === 'Critical' ? 'bg-red-500' :
                          symptom.severity === 'High' ? 'bg-orange-500' :
                          symptom.severity === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium">{symptom.description}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                            <span className={`
                              ${symptom.urgency === 'ASAP' ? 'text-red-400' : ''}
                              ${symptom.urgency === 'Soon' ? 'text-yellow-400' : ''}
                              ${symptom.urgency === 'DIY' ? 'text-green-400' : ''}
                            `}>
                              {symptom.urgency}
                            </span>
                            <span>{symptom.drivable ? '✓ System Operable' : '✗ Shut Down Immediately'}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Install Info */}
              <div className="mt-6 p-4 bg-[#1e1e1e] border border-[#333333] rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Wrench className="text-[#f96706]" size={20} />
                  Installation Guide
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Tech Level</p>
                    <p className="font-medium">{part.install.skill_level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Labor</p>
                    <p className="font-medium flex items-center gap-1">
                      <Clock size={14} /> {part.install.labor_hours} hours
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">Tools needed:</p>
                  <p className="text-sm">{part.install.tools.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Price & Actions */}
          <div className="space-y-6">
            <div className="bg-[#1e1e1e] border border-[#333333] rounded-lg p-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-[#f96706]">
                  ${part.price.toFixed(2)}
                </span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Bulk Pricing Available
                </Badge>
              </div>

              <Button className="w-full bg-[#f96706] hover:bg-orange-600 text-white h-12 text-lg mb-4">
                <ShoppingCart className="mr-2" size={20} />
                Find Best Price
              </Button>

              <a 
                href={bestPrice?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="outline"
                  className="w-full border-[#333333] text-white hover:bg-[#2a2a2a] h-12"
                >
                  Check {bestPrice?.retailer || 'Distributors'}
                </Button>
              </a>
            </div>

            <PriceComparison prices={part.prices} />

            {/* HVAC Pro Lead Gen */}
            <div className="bg-gradient-to-br from-[#f96706]/20 to-[#f96706]/5 border border-[#f96706]/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Need an HVAC Pro?</h3>
              <p className="text-sm text-gray-400 mb-4">
                Get free installation quotes from licensed HVAC technicians for {part.name}
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter ZIP code"
                  className="w-full bg-[#121212] border border-[#333333] rounded px-4 py-3 text-white placeholder:text-gray-500"
                />
                <select className="w-full bg-[#121212] border border-[#333333] rounded px-4 py-3 text-white"
                >
                  <option>System Type</option>
                  <option>Residential AC/Heat</option>
                  <option>Commercial HVAC</option>
                  <option>Heat Pump / Mini-Split</option>
                </select>
                <Button className="w-full bg-white text-black hover:bg-gray-200 h-12">
                  Find Local HVAC Pros
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Average contractor response: 8 minutes
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
