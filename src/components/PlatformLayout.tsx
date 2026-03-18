"use client";

import React from 'react';
import { 
  Bell, 
  User, 
  Thermometer,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Catalog', path: '/' },
    { name: 'Checker', path: '/compatibility' },
    { name: 'Symptoms', path: '#' },
    { name: 'Pricing', path: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-industrial-bg-light dark:bg-industrial-bg-dark text-slate-900 dark:text-slate-100 font-sans tracking-tight">
      {/* Top Header Navigation */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-industrial-bg-dark px-6 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-industrial-primary text-white shadow-lg shadow-industrial-primary/20 transition-transform group-hover:scale-105">
              <Thermometer size={24} />
            </div>
            <div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight uppercase italic">HVAC<span className="text-industrial-primary">Expert</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase tracking-widest">HVAC_EFFICIENCY_ V1.3.0</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 justify-end gap-2 md:gap-8 items-center">
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all pb-1 border-b-2 ${
                  pathname === item.path 
                    ? 'text-industrial-primary border-industrial-primary' 
                    : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-industrial-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2 hidden md:block"></div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-industrial-primary/10 hover:text-industrial-primary transition-all">
              <Bell size={20} />
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg border border-slate-200 dark:border-slate-700 hover:border-industrial-primary transition-all shadow-sm">
              <User size={18} className="text-industrial-primary" />
              <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">User</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>

      {/* Modern Industrial Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-industrial-bg-dark py-8 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default group">
            <ShieldCheck size={20} className="group-hover:text-industrial-primary transition-colors" />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified Component Integrity Guaranteed</span>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-industrial-primary transition-colors">Catalog</a>
            <a href="#" className="hover:text-industrial-primary transition-colors">API Docs</a>
            <a href="#" className="hover:text-industrial-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
             <span>© 2024 HVACExpert Systems</span>
             <div className="size-1.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlatformLayout;
