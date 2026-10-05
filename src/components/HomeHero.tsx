import React from 'react';
import { PageId } from '../types';
import { DashboardMockup } from './DashboardMockup';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomeHeroProps {
  onNavigate: (page: PageId) => void;
  onOpenDemo: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-slate-50 dark:from-[#060B17] dark:via-[#070D1E] dark:to-[#081024] transition-colors">
      
      {/* Background ambient lighting and grid patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-800/80 text-brand-700 dark:text-teal-300 text-xs font-bold tracking-wide uppercase shadow-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-pulse" />
            <span>AI-POWERED CAMPUS OS</span>
            <span className="w-1 h-1 rounded-full bg-brand-400" />
            <span className="text-slate-500 dark:text-slate-400 font-normal">Next-Gen EdTech</span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
          >
            Run your entire campus from one intelligent platform.
          </motion.h1>

          {/* 1-2 line supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Academics, AI learning, assessments, finance, exams and parent engagement — connected in one modern digital campus.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('features')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Features</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>400+ K-12 & Higher Ed Campuses</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-teal-400" />
              <span>CASA Tier-2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>Native TallyPrime & ERP 9 Sync</span>
            </div>
          </motion.div>

        </div>

        {/* Hero Visual: Realistic Animated Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="pt-2"
        >
          <DashboardMockup />
        </motion.div>

      </div>
    </section>
  );
};
