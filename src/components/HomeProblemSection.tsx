import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileSpreadsheet,
  MessageCircle,
  Database,
  Calculator,
  Laptop,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Network
} from 'lucide-react';

export const HomeProblemSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'fragmented' | 'unified'>('unified');

  const disconnectedTools = [
    { name: 'Legacy ERP', icon: Database, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/40', border: 'border-red-200 dark:border-red-900', problem: 'Data siloed' },
    { name: 'WhatsApp Groups', icon: MessageCircle, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/40', border: 'border-emerald-200 dark:border-emerald-900', problem: 'Unregulated chat' },
    { name: 'Spreadsheets', icon: FileSpreadsheet, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-950/40', border: 'border-green-200 dark:border-green-900', problem: 'Manual human error' },
    { name: 'Tally Standalone', icon: Calculator, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/40', border: 'border-amber-200 dark:border-amber-900', problem: 'Double entries' },
    { name: 'Classroom Apps', icon: Laptop, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/40', border: 'border-blue-200 dark:border-blue-900', problem: 'No AI grounding' },
    { name: 'Paper Exam Hall', icon: GraduationCap, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/40', border: 'border-purple-200 dark:border-purple-900', problem: 'Weeks to grade' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#070D1E] border-y border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            The Fragmentation Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your campus shouldn't run on disconnected tools.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            6+ isolated applications lead to data leakage, chaotic parent communication, and manual reconciliations.
          </p>

          {/* Interactive Toggle */}
          <div className="mt-6 inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveView('fragmented')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeView === 'fragmented'
                  ? 'bg-white dark:bg-navy-900 text-red-600 dark:text-red-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Disconnected Campus (Old Way)
            </button>
            <button
              onClick={() => setActiveView('unified')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeView === 'unified'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              AI-Education (One Connected OS)
            </button>
          </div>
        </div>

        {/* Visual Animated Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {activeView === 'fragmented' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {disconnectedTools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl ${tool.bg} border ${tool.border} text-center space-y-2 relative group`}
                  >
                    <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                      <Icon className={`w-5 h-5 ${tool.color}`} />
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {tool.name}
                    </div>
                    <div className="inline-flex items-center gap-1 text-[10px] font-medium text-red-600 dark:text-red-400">
                      <XCircle className="w-3 h-3" />
                      {tool.problem}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-3xl bg-slate-50 dark:bg-[#0B132B] border border-brand-200 dark:border-brand-900/60 shadow-xl overflow-hidden"
            >
              {/* Background network lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-60" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* Disconnected Feeds left side */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-1/2">
                  {disconnectedTools.map((tool, idx) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700/80 flex items-center gap-2.5 shadow-sm"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                          <Icon className={`w-4 h-4 ${tool.color}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">
                            {tool.name}
                          </div>
                          <div className="text-[10px] text-teal-600 dark:text-teal-400 flex items-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" /> Synced
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Flow Connector Arrow */}
                <div className="flex flex-col items-center justify-center gap-2 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    Unified OS
                  </span>
                </div>

                {/* AI-Education Core Hub */}
                <div className="w-full lg:w-5/12 p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-800 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Network className="w-32 h-32" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[11px] font-bold uppercase tracking-wide mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                    One Connected Campus
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    AI-Education
                  </h3>
                  <p className="text-xs text-brand-100 leading-relaxed mb-4">
                    Every student record, timetable period, exam score, and fee rupee flows seamlessly into one single source of institutional truth.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="font-bold text-teal-300">100%</div>
                      <div className="text-[10px] text-slate-200">Reconciliation</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="font-bold text-teal-300">&lt; 30s</div>
                      <div className="text-[10px] text-slate-200">Proxy discovery</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};
