import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Eye, ShieldCheck, Cpu, Globe } from 'lucide-react';
import { CampusEngraving } from './CampusEngraving';

export const Scene10IntelligentCampus: React.FC = () => {
  const [isAiMode, setIsAiMode] = useState<boolean>(true);

  const NODES = [
    { label: 'Classrooms', desc: 'Curriculum delivery' },
    { label: 'Administration', desc: 'Governance & audit' },
    { label: 'Finance', desc: 'Tally synchronization' },
    { label: 'Library', desc: 'AI grounded repository' },
    { label: 'Exam Hall', desc: 'QR tickets & rubrics' },
    { label: 'Teachers', desc: 'Timetables & attendance' },
    { label: 'Students', desc: 'Adaptive practice quizzes' },
    { label: 'Parents', desc: 'Direct WhatsApp notices' }
  ];

  return (
    <section className="relative py-28 px-6 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Globe className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>09 / CINEMATIC SYNTHESIS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Everything <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">connected.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              One intelligent campus for everyone.
            </p>
          </div>

          {/* Toggle between Vintage Monochrome & Modern AI Connected Campus */}
          <div className="flex items-center gap-3 p-1.5 rounded-full border border-amber-900/30 dark:border-amber-400/30 bg-[#FAF6EE] dark:bg-[#0E1729]">
            <button
              onClick={() => setIsAiMode(false)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                !isAiMode
                  ? 'bg-amber-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950'
              }`}
            >
              VINTAGE MONOCHROME
            </button>
            <button
              onClick={() => setIsAiMode(true)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isAiMode
                  ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONNECTED AI CAMPUS</span>
            </button>
          </div>
        </div>

        {/* Master Panoramic Campus Canvas (Card Frame Removed - Organic Panorama) */}
        <div className="relative w-full py-2 space-y-6">
          
          {/* Panoramic Campus Engraving Illustration */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
            <CampusEngraving
              className={`w-full h-full transition-all duration-700 ${
                isAiMode ? 'opacity-100 scale-[1.01]' : 'opacity-70 grayscale'
              }`}
              isAiActive={isAiMode}
            />

            {/* Glowing Center Badge when AI Active */}
            {isAiMode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full border border-sky-400/60 bg-[#FAF6EE]/90 dark:bg-[#060B14]/90 backdrop-blur-md text-xs font-mono font-bold text-sky-800 dark:text-sky-300 flex items-center gap-2 shadow-lg z-20"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                <span>INTELLIGENT NEURAL FABRIC ACTIVE ACROSS ALL 8 DIVISIONS</span>
              </motion.div>
            )}
          </div>

          {/* 8 Connected Divisions Grid Across Bottom (Clean Editorial Strip, No Cards) */}
          <div className="pt-6 border-t-2 border-amber-900/20 dark:border-amber-400/20 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center font-serif">
            {NODES.map((node, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border transition-all ${
                  isAiMode
                    ? 'border-sky-400/40 bg-sky-50/20 dark:bg-sky-950/20 text-slate-950 dark:text-slate-50'
                    : 'border-amber-900/20 dark:border-amber-400/20 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="font-bold text-sm sm:text-base leading-tight">{node.label}</div>
                <div className="text-[10px] font-mono text-amber-900 dark:text-amber-400 pt-0.5">{node.desc}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
