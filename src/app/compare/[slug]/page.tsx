import { COMPARISONS } from "@/lib/comparison-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Star, ArrowRight, ShieldCheck, TrendingUp, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ComparePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = COMPARISONS.find(c => c.slug === slug);
  
  if (!comparison) return { title: 'Comparison Not Found' };

  return {
    title: comparison.title,
    description: comparison.description,
    alternates: {
      canonical: `https://hvacexpert.com/compare/${slug}`,
    },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: 'article',
      url: `https://hvacexpert.com/compare/${slug}`,
    }
  };
}

export async function generateStaticParams() {
  return COMPARISONS.map(c => ({
    slug: c.slug
  }));
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { slug } = await params;
  const comparison = COMPARISONS.find(c => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  const winner = comparison.products.find(p => p.name.includes(comparison.winner || '')) || comparison.products[0];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-100 bg-white/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600">
            HVAC<span className="text-zinc-900">EXPERT</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <Badge className="bg-orange-100 text-orange-600 border-none mb-4 uppercase tracking-widest px-4 py-1 font-bold">
              High-Efficiency Comparison
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
              {comparison.title}
            </h1>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">
              "{comparison.description}"
            </p>
          </div>

          {/* Above the Fold: Winner Summary */}
          <div className="bg-zinc-900 rounded-3xl p-1 shadow-2xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={200} className="text-white" />
            </div>
            <div className="bg-zinc-900 rounded-[22px] p-8 md:p-12 text-white relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                    <Star size={14} fill="currentColor" />
                    Overall Winner: Premium HVAC Component
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-4">
                    {winner.brand} {winner.name}
                  </h2>
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    {comparison.verdict}
                  </p>
                  
                  {/* Conversion Micro-copy */}
                  <div className="flex flex-wrap gap-4 mb-8 text-sm font-bold">
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1.5 rounded-lg border border-green-400/20">
                      <CheckCircle2 size={16} />
                      ⚡ In stock — ships today
                    </div>
                    <div className="flex items-center gap-2 text-orange-400 bg-orange-400/10 px-3 py-1.5 rounded-lg border border-orange-400/20">
                      <ShieldCheck size={16} />
                      ✔ HVAC Pro Verified
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href={winner.affiliateUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-white text-zinc-900 hover:bg-zinc-100 font-black h-16 px-10 text-xl shadow-xl hover:scale-[1.02] transition-transform">
                        Check Price on Amazon
                        <ArrowRight className="ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="md:w-72 w-full bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-4">Lowest Price Today</p>
                  <p className="text-5xl font-black mb-6">${winner.price.toFixed(2)}</p>
                  <div className="space-y-3">
                    {winner.vendorPrices.map((v, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-zinc-400">{v.retailer}</span>
                        <span className="font-bold">${v.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="mb-20">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <TrendingUp className="text-orange-600" size={24} />
              Side-by-Side Analysis
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-y border-zinc-200">
                    <th className="p-6 text-left text-xs font-black uppercase tracking-widest text-zinc-400 w-1/3">Feature</th>
                    {comparison.products.map((p, i) => (
                      <th key={i} className="p-6 text-center text-lg font-black">{p.brand}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="p-6 font-bold text-zinc-500">Price (Approx)</td>
                    {comparison.products.map((p, i) => (
                      <td key={i} className="p-6 text-center font-black text-xl">${p.price.toFixed(2)}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-zinc-500">Expert Rating</td>
                    {comparison.products.map((p, i) => (
                      <td key={i} className="p-6 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star fill="orange" className="text-orange-500" size={16} />
                          <span className="font-black">{p.rating}/5</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  {Object.keys(comparison.products[0].specs).map(spec => (
                    <tr key={spec}>
                      <td className="p-6 font-bold text-zinc-500 capitalize">{spec.replace('_', ' ')}</td>
                      {comparison.products.map((p, i) => (
                        <td key={i} className="p-6 text-center font-medium">{p.specs[spec]}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-6"></td>
                    {comparison.products.map((p, i) => (
                      <td key={i} className="p-6 text-center">
                        <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="font-bold bg-zinc-900 text-white w-full">View Details</Button>
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros & Cons Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {comparison.products.map((p, i) => (
              <div key={i} className="border-2 border-zinc-100 rounded-3xl p-8 hover:border-orange-200 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-2xl font-black">{p.brand} {p.name}</h4>
                  <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest">{p.brand}</Badge>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-green-600 mb-4 flex items-center gap-2">
                       <CheckCircle2 size={14} /> The Good
                    </p>
                    <ul className="space-y-3">
                      {p.pros.map((pro, j) => (
                        <li key={j} className="text-zinc-600 text-sm flex gap-3 font-medium">
                          <span className="text-green-500 flex-shrink-0">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-4 flex items-center gap-2">
                       <XCircle size={14} /> The Bad
                    </p>
                    <ul className="space-y-3">
                      {p.cons.map((con, j) => (
                        <li key={j} className="text-zinc-600 text-sm flex gap-3 font-medium">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compatibility Bridge */}
          <div className="bg-zinc-50 rounded-3xl p-12 text-center border-2 border-zinc-100">
            <Info className="mx-auto text-zinc-300 mb-6" size={48} />
            <h3 className="text-3xl font-black mb-4">Not sure which one fits?</h3>
            <p className="text-zinc-500 text-lg mb-8 max-w-2xl mx-auto">
              Use our system compatibility engine to verify these components against your specific HVAC model and tonnage before ordering.
            </p>
            <Link href="/">
              <Button className="bg-orange-600 hover:bg-orange-700 font-black h-14 px-12 text-lg">
                Verify My System
              </Button>
            </Link>
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
