import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Sparkles, Building, ArrowRight, ShieldCheck, Database, Award } from 'lucide-react';

interface TimelineStage {
  day: string;
  stepNum: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

const STAGES: TimelineStage[] = [
  {
    day: 'DAY 01',
    stepNum: '01',
    title: 'Setup',
    subtitle: 'Institutional charter & infrastructure partition',
    bullets: [
      'Dedicated cloud tenant provisioning',
      'Master administrative credentials issued',
      'Domain and subdomain configuration',
      'Initial institutional data isolation handshake'
    ]
  },
  {
    day: 'DAY 04',
    stepNum: '02',
    title: 'Configure',
    subtitle: 'Classrooms, timetable rules & Tally ERP link',
    bullets: [
      'Classrooms and departmental matrix upload',
      'Faculty timetables & proxy preference matrices',
      'Native Tally ERP 9 / TallyPrime sync validation',
      'Fee structures, concession rules & bank details'
    ]
  },
  {
    day: 'DAY 08',
    stepNum: '03',
    title: 'Ground',
    subtitle: 'Upload textbooks, lecture notes & syllabi',
    bullets: [
      'Board curriculum and textbook ingestion',
      'Faculty course packs and question bank upload',
      'AI citation grounding validation tests',
      'Role-based permissions & teacher orientation'
    ]
  },
  {
    day: 'DAY 14',
    stepNum: '04',
    title: 'Launch',
    subtitle: 'Autonomous operations & active campus',
    bullets: [
      'Full campus live activation across all divisions',
      'Parent portal credentials dispatched via WhatsApp',
      '1-Tap attendance and automated proxy engine live',
      '24/7 dedicated institutional support pod assigned'
    ]
  }
];

export const Scene11Implementation: React.FC = () => {
  const [activeDayIdx, setActiveDayIdx] = useState<number>(3); // Default to Day 14 active

  return (
    <section className="relative py-24 px-6 bg-[#FAF6EE] dark:bg-[#070D18] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Calendar className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>10 / 14-DAY IMPLEMENTATION ROADMAP</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              From setup <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">to smarter campus.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Zero operational downtime. Guided transition led by our institutional engineers.
            </p>
          </div>

          <div className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DAY 14: FULLY AUTONOMOUS PRODUCTION LAUNCH</span>
          </div>
        </div>

        {/* Horizontal Animated Timeline (Card Frame Removed - Organic Timeline) */}
        <div className="relative w-full py-2 space-y-8">
          
          {/* Timeline Step Rail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {STAGES.map((stage, idx) => {
              const isSelected = activeDayIdx === idx;

              return (
                <div
                  key={stage.stepNum}
                  onClick={() => setActiveDayIdx(idx)}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-900 bg-amber-900 text-white dark:border-amber-400 dark:bg-amber-400 dark:text-slate-950 shadow-xl scale-[1.02]'
                      : 'border-amber-900/20 dark:border-amber-400/20 bg-[#FAF6EE] dark:bg-[#0E1729] text-slate-900 dark:text-slate-100 hover:border-amber-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold tracking-widest ${isSelected ? 'opacity-90' : 'text-amber-900 dark:text-amber-400'}`}>
                        {stage.day}
                      </span>
                      <span className={`font-mono text-xs font-bold ${isSelected ? 'opacity-90' : 'text-slate-500'}`}>
                        STAGE {stage.stepNum}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-2xl">
                      {stage.title}
                    </h4>

                    <p className={`text-xs font-medium leading-relaxed ${isSelected ? 'opacity-85' : 'text-slate-600 dark:text-slate-400'}`}>
                      {stage.subtitle}
                    </p>
                  </div>

                  <div className="pt-6 space-y-2 border-t border-current/20 mt-4">
                    {stage.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="text-xs flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>

          {/* Bottom Roadmap Assurance */}
          <div className="pt-6 border-t-2 border-amber-900/20 dark:border-amber-400/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300 gap-2">
            <span>HISTORICAL DATA MIGRATION INCLUDED (STUDENTS, ATTENDANCE, TALLY LEDGERS)</span>
            <span className="text-amber-900 dark:text-amber-400">100% HANDS-ON CAMPUS DEPLOYMENT</span>
          </div>

        </div>

      </div>
    </section>
  );
};
