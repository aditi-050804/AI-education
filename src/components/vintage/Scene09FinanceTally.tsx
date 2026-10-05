import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight, RefreshCw, CheckCircle2, Database, Receipt } from 'lucide-react';

export const Scene09FinanceTally: React.FC = () => {
  const [syncStep, setSyncStep] = useState<number>(3);
  const [animating, setAnimating] = useState<boolean>(false);

  const triggerSync = () => {
    setAnimating(true);
    setSyncStep(1);
    setTimeout(() => setSyncStep(2), 600);
    setTimeout(() => {
      setSyncStep(3);
      setAnimating(false);
    }, 1400);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F4ECE0] dark:bg-[#070D18] transition-colors duration-500 engraving-lines border-t border-[#C5A059]/20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Minimal Editorial Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene IX • The Bursar’s Vault
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Finance that stays in sync.
          </h2>
          <p className="font-serif text-lg italic text-[#586274] dark:text-[#A7B5CC]">
            Student fee payments flow automatically from parent payment into TallyPrime ledgers.
          </p>

          <button
            onClick={triggerSync}
            disabled={animating}
            className="mt-6 px-5 py-2.5 rounded-full border border-[#C5A059] bg-[#FAF6EE] dark:bg-[#0E1729] text-xs font-serif italic text-[#161D2B] dark:text-[#F4ECE0] shadow-sm flex items-center gap-2 mx-auto hover:bg-[#C5A059] hover:text-white transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${animating ? 'animate-spin' : ''}`} />
            <span>Simulate Real-time Tally Ingestion</span>
          </button>
        </div>

        {/* 3-Stage Visual Pipeline Composition (NO CARDS) */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
            
            {/* Step 1: Student Fee */}
            <div className={`p-6 rounded-2xl border transition-all text-center space-y-3 ${
              syncStep >= 1
                ? 'border-[#C5A059] bg-[#F4ECE0]/70 dark:bg-[#111A2E]'
                : 'border-transparent opacity-60'
            }`}>
              <div className="w-12 h-12 mx-auto rounded-full bg-[#EAE0CE] dark:bg-[#162138] flex items-center justify-center font-serif font-bold text-lg text-[#8C6B28]">
                1
              </div>
              <h4 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Student Fee Payment
              </h4>
              <p className="text-xs font-serif italic text-[#586274] dark:text-[#A7B5CC]">
                UPI, Card or Cheque processed at bursar portal.
              </p>
              <div className="font-mono text-xs text-[#8C6B28] pt-2">
                ₹45,000 received • Txn #98421
              </div>
            </div>

            {/* Step 2: AI-Education Split Rules */}
            <div className={`p-6 rounded-2xl border transition-all text-center space-y-3 ${
              syncStep >= 2
                ? 'border-[#38BDF8] bg-[#38BDF8]/10 dark:bg-[#38BDF8]/15'
                : 'border-transparent opacity-60'
            }`}>
              <div className="w-12 h-12 mx-auto rounded-full bg-[#38BDF8]/20 flex items-center justify-center font-serif font-bold text-lg text-[#0284C7] dark:text-[#38BDF8]">
                2
              </div>
              <h4 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                AI-Education Engine
              </h4>
              <p className="text-xs font-serif italic text-[#586274] dark:text-[#A7B5CC]">
                Splits tuition, lab, library & GST automatically.
              </p>
              <div className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8] pt-2">
                Head mapping: 100% verified
              </div>
            </div>

            {/* Step 3: TallyPrime XML Voucher */}
            <div className={`p-6 rounded-2xl border transition-all text-center space-y-3 ${
              syncStep >= 3
                ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/30'
                : 'border-transparent opacity-60'
            }`}>
              <div className="w-12 h-12 mx-auto rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center font-serif font-bold text-lg text-teal-700 dark:text-teal-300">
                3
              </div>
              <h4 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Tally ERP 9 / Prime
              </h4>
              <p className="text-xs font-serif italic text-[#586274] dark:text-[#A7B5CC]">
                Direct XML injection into institutional books.
              </p>
              <div className="font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold pt-2 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Voucher #8291 Posted
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274]">
            <span>Auditor-grade ledger trail</span>
            <span>Zero manual double entries</span>
          </div>
        </div>

      </div>
    </section>
  );
};
