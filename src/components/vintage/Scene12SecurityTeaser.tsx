import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, ArrowRight, Key, Database, Cpu, UserCheck } from 'lucide-react';
import type { PageId } from '../../types';

interface Scene12SecurityTeaserProps {
  onNavigate: (page: PageId) => void;
}

export const Scene12SecurityTeaser: React.FC<Scene12SecurityTeaserProps> = ({ onNavigate }) => {
  const LAYERS = [
    { title: 'Institution Ownership', note: 'Your student data never trains public AI models', icon: ShieldCheck },
    { title: 'Identity & RBAC', note: 'Role-based compartmentalized administrative controls', icon: UserCheck },
    { title: 'Tenant Isolation', note: 'Dedicated institutional cloud storage & database partitions', icon: Database },
    { title: 'Protected Data', note: 'AES-256 encryption at rest and TLS 1.3 in transit', icon: Lock },
    { title: 'AI Safety & Grounding', note: 'Strict syllabus boundary enforcement with zero hallucination', icon: Cpu }
  ];

  return (
    <section className="relative py-24 px-6 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Lock className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>11 / INSTITUTIONAL ARCHIVE & SECURITY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Built for <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">institutions.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Enterprise-grade isolation and sovereign student data governance.
            </p>
          </div>

          <button
            onClick={() => onNavigate('security')}
            className="px-6 py-3 rounded-full bg-[#161D2B] dark:bg-[#FAF6EE] text-white dark:text-slate-950 text-xs font-mono font-bold tracking-wider hover:bg-amber-800 hover:text-white transition-all cursor-pointer shadow-lg flex items-center gap-2 group self-start md:self-auto"
          >
            <span>EXPLORE SECURITY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Vintage Vault Archive Folio (Card Frame Removed - Layered Defense Folio) */}
        <div className="relative w-full py-2 space-y-4">
          
          <div className="text-xs font-mono font-bold text-amber-900 dark:text-amber-400 uppercase tracking-widest pb-3 border-b border-amber-900/20">
            5 DEFENSIVE LAYERS OF THE INSTITUTIONAL VAULT
          </div>

          <div className="space-y-3 pt-2">
            {LAYERS.map((layer, idx) => {
              const Icon = layer.icon;

              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl border-2 border-amber-900/20 dark:border-amber-400/20 bg-[#FAF6EE] dark:bg-[#0C1424] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-amber-700"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400 w-16">
                      LAYER 0{idx + 1}
                    </span>
                    <Icon className="w-5 h-5 text-amber-800 dark:text-amber-400 shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-base sm:text-lg text-slate-950 dark:text-slate-50">
                        {layer.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 font-medium">
                        {layer.note}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 shrink-0 self-end sm:self-auto flex items-center gap-1.5">
                    <span>✓ ENFORCED</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
