"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Bolt, 
  History, 
  Scan, 
  Plus, 
  Database,
  Snowflake,
  Wind
} from 'lucide-react';

const CompatibilityChecker = () => {
  const [partA, setPartA] = useState('');
  const [partB, setPartB] = useState('');

  const recentVerifications = [
    { id: 'HE-9921', status: 'Compatible', time: '1h ago', title: 'Carrier 38CKC vs Honeywell TH8321', type: 'success' },
    { id: 'HE-9920', status: 'Verification Required', time: '3h ago', title: 'Lennox G61MPV vs Nest Gen 3', type: 'warning' },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">
          HVACExpert <span className="text-industrial-primary italic">Auditor</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl font-medium">
          Professional-grade compatibility auditing for climate control precision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-industrial-primary/30 transition-all">
          <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Wind size={160} strokeWidth={1} />
          </div>
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-8 h-8 rounded bg-industrial-primary/10 text-industrial-primary flex items-center justify-center font-black">1</div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">System Component</h3>
          </div>
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Part Number or OEM ID</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text"
                  value={partA}
                  onChange={(e) => setPartA(e.target.value)}
                  placeholder="e.g. TH8321U1008"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-industrial-primary focus:border-transparent outline-none font-bold"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-industrial-primary/30 transition-all">
          <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Database size={160} strokeWidth={1} />
          </div>
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-8 h-8 rounded bg-industrial-primary/10 text-industrial-primary flex items-center justify-center font-black">2</div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Target Unit</h3>
          </div>
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Part Number or OEM ID</label>
              <div className="relative">
                <Scan className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text"
                  value={partB}
                  onChange={(e) => setPartB(e.target.value)}
                  placeholder="e.g. 38CKC036340"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-industrial-primary focus:border-transparent outline-none font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 py-4">
        <button className="w-full md:w-auto min-w-[320px] bg-industrial-primary hover:bg-orange-600 text-white font-black py-5 px-12 rounded-xl text-lg uppercase tracking-widest shadow-xl shadow-industrial-primary/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
          <Bolt size={24} strokeWidth={3} />
          Audit Compatibility
        </button>
      </div>

      <div className="pt-8">
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <History className="text-industrial-primary" size={20} />
            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Audit History</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentVerifications.map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-6 group">
              <div className="flex justify-between items-start">
                <span className={`text-[9px] font-black px-2.5 py-1 rounded uppercase tracking-widest ${
                  item.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'
                }`}>
                  {item.status}
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase">{item.time}</span>
              </div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompatibilityChecker;
