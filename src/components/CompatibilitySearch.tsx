"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, 
  Wind,
  Filter,
  RefreshCw,
  Settings
 } from 'lucide-react';

interface CompatibilitySearchProps {
  onFilterChange: (filters: { year?: string; make?: string; model?: string }) => void;
}

const CompatibilitySearch: React.FC<CompatibilitySearchProps> = ({ onFilterChange }) => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  // Mock data for dropdowns
  const years = ['2024', '2023', '2022', '2021', '2020', '1992'];
  const makes = ['Mazda', 'Porsche', 'Toyota', 'Honda', 'Ford'];
  const models = ['RX-7', '718 GT4', 'Camry', 'Civic', 'F-150'];

  useEffect(() => {
    onFilterChange({ 
      year: year || undefined, 
      make: make || undefined, 
      model: model || undefined 
    });
  }, [year, make, model, onFilterChange]);

  const handleReset = () => {
    setYear('');
    setMake('');
    setModel('');
  };

  return (
    <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-10 relative overflow-hidden group transition-all hover:border-industrial-primary/20 shadow-xl">
      <div className="absolute -top-10 -right-10 opacity-[0.03] text-slate-400 hidden lg:block group-hover:opacity-[0.07] transition-all duration-700 pointer-events-none group-hover:rotate-12">
        <Settings size={280} strokeWidth={1} />
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-center gap-3 mb-8 border-l-4 border-industrial-primary pl-4">
            <Wind size={24} className="text-industrial-primary" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">System Selection</h2>
          </div>
          
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-slate-400 hover:text-industrial-primary transition-colors py-2"
          >
            <RefreshCw size={14} />
            Reset Selection
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Year Built</label>
            <div className="relative group/select">
              <select
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  setMake('');
                  setModel('');
                }}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-bold rounded-xl py-4 px-5 appearance-none focus:border-industrial-primary focus:ring-1 focus:ring-industrial-primary outline-none transition-all cursor-pointer group-hover/select:border-slate-300 dark:group-hover/select:border-slate-700 shadow-sm"
              >
                <option value="">Select Year</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover/select:text-industrial-primary transition-colors" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Brand/Manuf.</label>
            <div className="relative group/select">
              <select
                value={make}
                disabled={!year}
                onChange={(e) => {
                  setMake(e.target.value);
                  setModel('');
                }}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-bold rounded-xl py-4 px-5 appearance-none focus:border-industrial-primary focus:ring-1 focus:ring-industrial-primary outline-none transition-all cursor-pointer group-hover/select:border-slate-300 dark:group-hover/select:border-slate-700 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <option value="">Select Make</option>
                {makes.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover/select:text-industrial-primary transition-colors" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Unit Model #</label>
            <div className="relative group/select">
              <select
                value={model}
                disabled={!make}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-bold rounded-xl py-4 px-5 appearance-none focus:border-industrial-primary focus:ring-1 focus:ring-industrial-primary outline-none transition-all cursor-pointer group-hover/select:border-slate-300 dark:group-hover/select:border-slate-700 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <option value="">Select Model</option>
                {models.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover/select:text-industrial-primary transition-colors" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilitySearch;
