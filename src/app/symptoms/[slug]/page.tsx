import { getSEOPage } from "@/lib/supabase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Wrench, ArrowRight, ShieldAlert, MapPin, Database } from "lucide-react";
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
  
  try {
    const page = await getSEOPage(slug);
    if (!page) return { title: 'Symptom Not Found' };

    return {
      title: page.seo_title,
      description: page.seo_description,
    };
  } catch (error) {
    return { title: 'HVAC Troubleshooting' };
  }
}

export default async function SymptomPage({ params }: SymptomPageProps) {
  const { slug } = await params;
  
  let page;
  try {
    page = await getSEOPage(slug);
  } catch (error) {
    console.error('Error fetching symptom page:', error);
    notFound();
  }

  if (!page) {
    notFound();
  }

  const parts = page.seo_page_parts?.map((p: any) => p.parts) || [];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100 selection:text-orange-900">
      <header className="border-b border-zinc-100 bg-white/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600">
            HVAC<span className="text-zinc-900 uppercase">Expert</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
              <AlertTriangle className="text-orange-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight capitalize">{page.h1_title}</h1>
              <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">HVAC Diagnostic Protocol</p>
            </div>
          </div>

          <div className="prose max-w-none text-lg text-zinc-600 mb-12 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: page.content_body }} />

          {/* Lead Gen Box */}
          <div className="mb-16 bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-white border-l-8 border-orange-600">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Professional HVAC Service Required?</h2>
                <p className="text-zinc-400 text-sm mb-0 font-sans">
                  Connect with licensed HVAC technicians for advanced diagnostic verification and component installation.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button className="bg-orange-600 text-white hover:bg-orange-700 font-bold h-11 px-8 flex items-center gap-2 uppercase tracking-widest text-[10px]">
                  <MapPin size={16} />
                  Find technician
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-8 flex items-center gap-3 uppercase tracking-tighter">
            <Wrench className="text-orange-600" size={20} />
            System Performance Components
          </h2>

          <div className="grid gap-8 font-sans">
            {parts.map((part: any) => (
              <div key={part.id} className="bg-zinc-50 border border-zinc-100 rounded-xl p-8 hover:border-orange-200 transition-all border-l-4 border-l-zinc-300">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest bg-white px-2 py-1 rounded border border-zinc-100 font-bold">{part.brand}</span>
                      <Badge variant="outline" className="text-zinc-400 border-zinc-200 font-bold uppercase text-[9px] tracking-widest">{part.category}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-zinc-900 uppercase tracking-tight">{part.name}</h3>
                    
                    <p className="text-zinc-500 mb-8 leading-relaxed">
                      {part.description}
                    </p>
                  </div>

                  <div className="md:w-64 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-zinc-100 pt-8 md:pt-0 md:pl-8">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1 font-bold">ESTIMATED PRICE</p>
                    <p className="text-3xl font-bold mb-8 tracking-tighter text-zinc-900 font-mono">${part.price?.toFixed(2) || '0.00'}</p>
                    <Link href={`/p/${part.part_number}`} className="w-full">
                      <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 font-black h-12 rounded-none tracking-widest text-[10px] uppercase">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-100 mt-32 py-16 bg-zinc-50 text-center">
        <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.4em] font-bold">HVACExpert :: Service Protocol v3.1</p>
      </footer>
    </div>
  );
}
