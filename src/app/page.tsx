"use client";

import React, { useState } from 'react';
import PlatformLayout from "@/components/PlatformLayout";
import CompatibilitySearch from "@/components/CompatibilitySearch";
import PartList from "@/components/PartList";
import { STATIC_PARTS } from "@/lib/static-data";
import { Play, Zap } from 'lucide-react';

export default function Home() {
  const [filteredParts, setFilteredParts] = useState(STATIC_PARTS);

  const handleFilterChange = (filters: { year?: string; make?: string; model?: string }) => {
    // In a real app, this would filter STATIC_PARTS
    // For now we keep it simple or implement a basic filter
    if (!filters.year && !filters.make && !filters.model) {
      setFilteredParts(STATIC_PARTS);
    } else {
      const filtered = STATIC_PARTS.filter(part => {
        const matchesYear = !filters.year || part.fits.some(f => f.includes(filters.year!));
        const matchesMake = !filters.make || part.fits.some(f => f.toLowerCase().includes(filters.make!.toLowerCase()));
        return matchesYear && matchesMake;
      });
      setFilteredParts(filtered);
    }
  };

  return (
    <PlatformLayout>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Hero Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-industrial-primary/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12 overflow-hidden">
             <div className="flex flex-col md:flex-row items-center gap-10">
               <div className="flex-1 space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-primary/10 text-industrial-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-industrial-primary/20">
                   <Zap size={12} />
                   High-Authority Parts Catalog
                 </div>
                 <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tight uppercase">
                    Climate <span className="text-industrial-primary">Control</span> <br />
                    Efficiency Audit
                 </h1>
                 <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-xl">
                   Professional-grade HVAC parts database with verified system compatibility and real-time efficiency auditing for serious climate technicians.
                 </p>
                 <div className="flex flex-wrap gap-4 pt-2">
                    <button className="bg-industrial-primary hover:bg-orange-600 text-white font-black py-4 px-8 rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-industrial-primary/20">
                      View Full Catalog
                    </button>
                    <button className="group flex items-center gap-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-black py-4 px-8 rounded-xl text-xs uppercase tracking-widest transition-all">
                      <Play size={16} className="text-industrial-primary fill-industrial-primary group-hover:scale-110 transition-transform" />
                      Platform Tour
                    </button>
                 </div>
               </div>
               
               <div className="hidden lg:block w-72 h-72 relative">
                  <div className="absolute inset-0 bg-industrial-primary/5 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-40 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
                       <Zap size={64} className="text-industrial-primary" strokeWidth={2.5} />
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Search & Discovery Section */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic">Search & <span className="text-industrial-primary">Discovery</span></h2>
                <div className="h-1 w-20 bg-industrial-primary"></div>
             </div>
             <div className="flex items-center gap-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                <span>Active Filters: {filteredParts.length} MATCHES FOUND</span>
             </div>
          </div>
          
          <CompatibilitySearch onFilterChange={handleFilterChange} />
        </div>

        {/* Catalog Table Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
              <span className="size-2 rounded-full bg-industrial-primary"></span>
              Live Inventory Audit
            </h3>
            <div className="flex gap-2">
              <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded">Display: Table View</span>
            </div>
          </div>
          
          <PartList parts={filteredParts} />
        </div>
      </div>
    </PlatformLayout>
  );
}
