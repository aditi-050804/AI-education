import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Feather } from 'lucide-react';
import type { PageId } from '../../types';

interface Scene13PricingTeaserProps {
  onNavigate: (page: PageId) => void;
}

export const Scene13PricingTeaser: React.FC<Scene13PricingTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-24 px-6 bg-[#FAF6EE] dark:bg-[#070D18] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Feather className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>12 / TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Simple to start. <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">Flexible as you grow.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              No arbitrary tiers. Start with the essentials and scale when your campus expands.
            </p>
          </div>

          <button
            onClick={() => onNavigate('pricing')}
            className="px-6 py-3 rounded-full bg-[#161D2B] dark:bg-[#FAF6EE] text-white dark:text-slate-950 text-xs font-mono font-bold tracking-wider hover:bg-amber-800 hover:text-white transition-all cursor-pointer shadow-lg flex items-center gap-2 group self-start md:self-auto"
          >
            <span>SEE FULL PRICING</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Pricing Teaser Register (Card Frame Removed - Organic Ledger) */}
        <div className="relative w-full py-2 space-y-8">
          
          <div className="space-y-6">
            
            {/* 1. Monthly Platform Fee */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b-2 border-amber-900/20 dark:border-amber-400/20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400">01</span>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-50">MONTHLY PLATFORM</h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Basic monthly fee for continuous cloud uptime and daily connectivity.</p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-3xl sm:text-4xl font-bold text-amber-900 dark:text-amber-300">₹500</span>
                <span className="text-sm font-sans font-semibold text-slate-700 dark:text-slate-300"> / month</span>
              </div>
            </div>

            {/* 2. Additional Usage */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b-2 border-amber-900/20 dark:border-amber-400/20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-teal-800 dark:text-teal-400">02</span>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-50">ADDITIONAL USAGE</h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Charges depend strictly on features, students, and AI usage selected.</p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-2xl sm:text-3xl font-bold text-teal-700 dark:text-teal-300">Pay as you use</span>
              </div>
            </div>

            {/* 3. One-Time Setup */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b-2 border-amber-900/20 dark:border-amber-400/20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400">03</span>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-50">ONE-TIME SETUP</h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Institution onboarding, platform configuration, and historical data assistance.</p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-3xl sm:text-4xl font-bold text-amber-900 dark:text-amber-300">₹2.5 Lakh</span>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block font-medium">One-time setup cost</span>
              </div>
            </div>

          </div>

          {/* Bottom Summary Bar */}
          <div className="pt-4 border-t-2 border-amber-900/20 dark:border-amber-400/20 flex flex-wrap items-center justify-between text-xs font-mono font-bold text-slate-800 dark:text-slate-200 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>ZERO HIDDEN CHARGES • ZERO COMMITTED PENALTIES</span>
            </div>
            <button
              onClick={() => onNavigate('pricing')}
              className="text-amber-900 dark:text-amber-300 underline font-bold hover:opacity-80 transition-opacity cursor-pointer"
            >
              Calculate your campus pricing →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
