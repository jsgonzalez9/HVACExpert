import { STATIC_PARTS } from "@/lib/static-data";
import { slugify } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Wrench, ArrowRight, ShieldAlert, Clock, Phone, MapPin, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";


interface SymptomPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: SymptomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const matchedParts = STATIC_PARTS.filter(part => 
    part.symptoms.some(s => slugify(s.description) === slug)
  );

  if (matchedParts.length === 0) return { title: 'Symptom Not Found' };

  const firstPart = matchedParts[0];
  const symptom = firstPart.symptoms.find(s => slugify(s.description) === slug)?.description || slug;
  
  const title = `${symptom} - HVAC System Fix & Cost`;
  const description = `Is your HVAC system experiencing ${symptom}? Learn the likely causes, estimated repair costs, and symptoms of a failing component. Fix it today.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hvacexpert.com/symptom/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://hvacexpert.com/symptom/${slug}`,
    }
  };
}

export async function generateStaticParams() {
  const allSymptoms = new Set<string>();
  STATIC_PARTS.forEach(part => {
    part.symptoms.forEach(s => allSymptoms.add(s.description));
  });

  return Array.from(allSymptoms).map(description => ({
    slug: slugify(description)
  }));
}

export default async function SymptomPage({ params }: SymptomPageProps) {
  const { slug } = await params;
  
  const matchedParts = STATIC_PARTS.filter(part => 
    part.symptoms.some(s => slugify(s.description) === slug)
  );

  if (matchedParts.length === 0) {
    notFound();
  }

  const firstPart = matchedParts[0];
  const symptomData = firstPart.symptoms.find(s => slugify(s.description) === slug);
  const symptomName = symptomData?.description || slug;

  const relatedSymptoms = firstPart.symptoms
    .filter(s => slugify(s.description) !== slug)
    .slice(0, 1);
  
  const otherRelatedSymptoms = STATIC_PARTS
    .filter(p => !matchedParts.includes(p))
    .flatMap(p => p.symptoms)
    .filter(s => slugify(s.description) !== slug)
    .slice(0, 1);

  // Lead Gen Injection Metadata (LocalBusiness Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Local HVAC Repair Specialist",
    "description": `Professional diagnosis and repair for ${symptomName} on residential and commercial HVAC systems. Same-day service available.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "ST"
    },
    "telephone": "1-800-REPAIR-NOW",
    "priceRange": "$$$"
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-zinc-100 bg-white/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600">
            HVAC<span className="text-zinc-900">EXPERT</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
              {symptomName} Diagnosis Guide
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl">
              Professional HVAC diagnostic guide. Identify the failure point, estimated repair costs, and verified replacement components.
            </p>
          </div>

          {/* Tech Verdict Box */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 bg-zinc-50 border-2 border-zinc-900 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6 text-orange-600">
                <ShieldAlert size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">HVAC Pro Analysis</span>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Severity</p>
                  <p className={`text-lg font-bold ${symptomData?.severity === 'Critical' ? 'text-red-600' : 'text-zinc-900'}`}>
                    {symptomData?.severity || 'Medium'}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">System Operable</p>
                  <p className="text-lg font-bold">{symptomData?.drivable ? 'Yes (Reduced Efficiency)' : 'No - System Lockout'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Likely Cause</p>
                  <p className="text-lg font-bold">{firstPart.name}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Estimated Cost</p>
                  <p className="text-lg font-bold">${firstPart.price} - ${firstPart.price + 250}</p>
                </div>
              </div>
            </div>

            {/* Recommended Fix CTA Card */}
            <div className="bg-orange-600 rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl mb-2">Recommended Fix</h3>
                <p className="text-orange-100 text-sm mb-6">
                  Verified {firstPart.brand} replacement {firstPart.category.toLowerCase()} component.
                </p>
              </div>
              <Link href={`/p/${firstPart.part_number}`}>
                <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold h-14 text-lg">
                  Check price
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Lead Gen Injection: Get Help Near You */}
          <div className="mb-16 bg-zinc-900 rounded-2xl p-8 text-white border-l-8 border-orange-600">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Need an HVAC Specialist?</h2>
                <p className="text-zinc-400 mb-0">
                  {symptomData?.severity === 'Critical' 
                    ? "Warning: Operating your system with this failure can lead to compressor burnout. Secure a professional diagnostic today."
                    : "Low on time? Get professional installation and system optimization from a licensed local HVAC contractor."}
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button className="bg-orange-600 hover:bg-orange-700 font-bold h-12 px-8 flex items-center gap-2">
                  <MapPin size={18} />
                  Find an HVAC pro near you
                </Button>
                <a href="tel:1-800-REPAIR-NOW" className="flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors py-2 font-bold border border-zinc-700 rounded-lg">
                  <Phone size={18} />
                  Call now for a quote
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Wrench className="text-orange-600" size={24} />
            Diagnostic Protocol & Replacement Components
          </h2>

          <div className="grid gap-8">
            {matchedParts.map(part => {
              const matchedSymptom = part.symptoms.find(s => slugify(s.description) === slug);
              return (
                <div key={part.id} className="border-2 border-zinc-100 rounded-2xl p-8 hover:border-orange-200 transition-all group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="border-zinc-200 text-zinc-500 uppercase tracking-widest text-[10px]">{part.brand}</Badge>
                        <Badge className="bg-orange-100 text-orange-600 border-none px-3 py-1 font-bold">{matchedSymptom?.urgency}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                        {part.name}
                      </h3>
                      
                      <p className="text-zinc-500 mb-6 leading-relaxed">
                        A <Link href={`/p/${part.part_number}`} className="text-zinc-900 font-bold border-b-2 border-orange-200 hover:border-orange-500 transition-all capitalize">failing {part.name}</Link> is a common cause for this issue. High-precision components are required to maintain system SEER ratings and efficiency.
                      </p>

                      <div className="space-y-4">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Step-by-Step Diagnostic</p>
                        {matchedSymptom?.diagnostic_steps.map((step, i) => (
                          <div key={i} className="flex gap-3 text-sm text-zinc-600">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center font-bold text-xs">{i + 1}</span>
                            <p>{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-64">
                      <div className="bg-zinc-50 rounded-xl p-6 text-center">
                        <p className="text-zinc-400 text-xs mb-1 uppercase font-bold tracking-widest">Est. Part Price</p>
                        <p className="text-3xl font-black mb-6">${part.price.toFixed(2)}</p>
                        <Link href={`/p/${part.part_number}`}>
                          <Button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold h-12">
                            View compatible parts
                          </Button>
                        </Link>
                        <a href={part.prices[0]?.url || "#"} target="_blank" className="text-[10px] text-zinc-400 mt-4 block underline uppercase tracking-widest font-bold">
                          Check Distributor Stock
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Related Troubleshooting */}
          <div className="mt-8 bg-zinc-900 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Related Troubleshooting</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[...relatedSymptoms, ...otherRelatedSymptoms].map((s, i) => (
                <Link key={i} href={`/symptom/${slugify(s.description)}`} className="flex items-center justify-between p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors">
                  <span className="font-medium">{s.description}</span>
                  <ArrowRight size={18} className="text-zinc-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-zinc-50 py-16 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">HVACExpert Service Network © 2026</p>
        </div>
      </footer>
    </div>
  );
}

