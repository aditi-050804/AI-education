import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { CampusEngraving } from './CampusEngraving';
import type { PageId } from '../../types';

interface Scene15FinalCTAProps {
  onOpenDemo: () => void;
  onNavigate?: (page: PageId) => void;
}

const SEQUENCE_NODES = [
  'Classrooms light up',
  'Library lights up',
  'Finance office lights up',
  'Exam hall lights up',
  'Students appear',
  'Parents connect',
  'AI network activates'
];

export const Scene15FinalCTA: React.FC<Scene15FinalCTAProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Progressive illumination sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SEQUENCE_NODES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 px-6 bg-[#FAF6EE] dark:bg-[#070D18] border-t-2 border-amber-900/30 dark:border-amber-400/30 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-6xl mx-auto w-full space-y-12 text-center">
        
        {/* Academic Seal Monogram */}
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-amber-800 dark:border-amber-400 flex items-center justify-center text-amber-900 dark:text-amber-300 font-bold text-2xl shadow-md">
          Æ
        </div>

        {/* Section Heading & Subtitle */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-amber-900 dark:text-amber-400 font-bold">
            <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>14 / THE INVITATION</span>
          </div>

          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-950 dark:text-slate-50 leading-tight">
            Build the <br />
            <span className="italic font-normal text-amber-900 dark:text-amber-300">intelligent campus.</span>
          </h2>

          <p className="text-xl sm:text-2xl font-medium text-slate-800 dark:text-slate-200">
            One platform. Every part of education.
          </p>
        </div>

        {/* Cinematic Illuminated Campus Window (Card Frame Removed - Organic Canvas) */}
        <div className="relative w-full h-[320px] sm:h-[420px] py-4 flex items-center justify-center overflow-hidden">
          <CampusEngraving className="w-full h-full opacity-90" isAiActive={true} />

          {/* Sequential Step Pill Overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full border-2 border-amber-800/60 dark:border-amber-400/60 bg-[#FAF6EE] dark:bg-[#0E1729] text-sm font-serif font-bold text-slate-950 dark:text-slate-50 flex items-center gap-3 shadow-xl z-20">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />
            <span>✦ {SEQUENCE_NODES[activeStep]}</span>
            <span className="text-xs font-mono text-amber-900 dark:text-amber-400">
              ({activeStep + 1}/{SEQUENCE_NODES.length})
            </span>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#161D2B] dark:bg-[#FAF6EE] text-white dark:text-slate-950 font-serif text-base font-bold tracking-wide hover:bg-amber-800 hover:text-white transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-sky-400 dark:text-sky-600" />
            <span>Book a Demo</span>
          </motion.button>

          {onNavigate && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-amber-900/60 dark:border-amber-400/60 bg-[#FAF6EE] dark:bg-[#0E1729] text-slate-950 dark:text-slate-50 font-serif text-base font-bold hover:bg-amber-900 hover:text-white transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Speak with an Institutional Specialist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}
        </div>

        {/* Assurance Note */}
        <div className="pt-2 text-xs font-mono font-bold text-amber-900 dark:text-amber-400">
          <span>ZERO OBLIGATION • 30-MINUTE PERSONALIZED SANDBOX • BOARD COMPLIANT</span>
        </div>

      </div>
    </section>
  );
};
