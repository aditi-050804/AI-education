import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  Award,
  DollarSign,
  FileCheck2,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Layers,
  Zap
} from 'lucide-react';

export const Scene03Transformation: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const transformations = [
    {
      title: 'Timetable',
      oldLabel: 'Paper Wall Chart',
      oldDesc: 'Manual chalk and erasure, frequent room clashes, 45 minutes to find substitute.',
      newLabel: 'Algorithmic Schedule Engine',
      newDesc: 'Conflict-free timetables with one-click proxy teacher matching in 8 seconds.',
      icon: Calendar,
      accent: 'from-amber-600 to-[#C5A059]'
    },
    {
      title: 'Attendance',
      oldLabel: 'Physical Roll Call Registers',
      oldDesc: '15 minutes lost per period ticking paper boxes with high forgery risk.',
      newLabel: 'Instant Biometric & App Pulse',
      newDesc: 'Real-time attendance push via WhatsApp to parents before 9:00 AM.',
      icon: CheckCircle2,
      accent: 'from-teal-600 to-[#38BDF8]'
    },
    {
      title: 'Finance & Accounts',
      oldLabel: 'Bound Ledger Books',
      oldDesc: 'Handwritten cash receipts, manual counter lines, days to reconcile.',
      newLabel: 'Direct Tally ERP 9 / Prime Sync',
      newDesc: 'Automated UPI receipts mapped to account heads and auto-exported to Tally.',
      icon: DollarSign,
      accent: 'from-emerald-600 to-[#10B981]'
    },
    {
      title: 'Learning & Textbooks',
      oldLabel: 'Static Printed Books',
      oldDesc: 'Students stuck late at night with unanswered doubts before morning exams.',
      newLabel: 'Curriculum-Grounded AI Study Buddy',
      newDesc: '24/7 intelligent tutor citing exact textbook chapter, section, and page.',
      icon: BookOpen,
      accent: 'from-purple-600 to-[#818CF8]'
    },
    {
      title: 'Examinations',
      oldLabel: 'Paper Question Slips',
      oldDesc: 'Physical hall tickets, manual desk allocation, weeks to grade by hand.',
      newLabel: 'Dynamic QR Hall Tickets & AI Grading',
      newDesc: 'Cryptographic admission check-in and automated rubric assessment.',
      icon: Award,
      accent: 'from-blue-600 to-[#60A5FA]'
    }
  ];

  const current = transformations[activeStep];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene III • The Metamorphosis
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-3">
            One campus. One intelligent system.
          </h2>
          <p className="text-sm font-serif italic text-[#586274] dark:text-[#A7B5CC]">
            Watch how heritage classroom operations transform into AI-Education.
          </p>

          {/* Stepper Selector */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {transformations.map((t, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-full text-xs font-serif italic transition-all duration-300 border ${
                  activeStep === index
                    ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#161D2B] dark:border-[#F4ECE0] shadow-md scale-105'
                    : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] dark:text-[#9DA9BE] border-[#C5A059]/30 hover:border-[#C5A059]'
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>

        {/* The Metamorphosis Canvas (Split Historical -> Modern AI) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/90 dark:bg-[#0B1220]/90 shadow-2xl overflow-hidden"
          >
            {/* Left: Heritage Paper Reality */}
            <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-[#C5A059]/30 flex flex-col justify-between relative bg-gradient-to-br from-[#F4ECE0]/60 to-[#EAE0CE]/40 dark:from-[#0E1729]/60 dark:to-[#070D18]/40">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-[#EAE0CE] dark:bg-[#162138] text-[#8C6B28] dark:text-[#D4AF37]">
                    The Old World
                  </span>
                  <span className="font-serif italic text-xs text-[#8C6B28]">Disjointed & Paper</span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mb-3">
                  {current.oldLabel}
                </h3>
                <p className="text-sm font-serif italic text-[#586274] dark:text-[#A7B5CC] leading-relaxed">
                  {current.oldDesc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#8C6B28]">
                <span>Status: Manual Friction</span>
                <span className="text-rose-600 dark:text-rose-400">High Clerical Overhead</span>
              </div>
            </div>

            {/* Right: Modern AI-Education Reality */}
            <div className="p-8 sm:p-12 flex flex-col justify-between relative bg-gradient-to-br from-[#FAF6EE] to-[#F8F4EB] dark:from-[#111A2E] dark:to-[#0B1220]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-[#38BDF8]/15 text-[#0284C7] dark:text-[#38BDF8] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" /> AI-Education Unified
                  </span>
                  <span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold">Active Node</span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mb-3 flex items-center gap-3">
                  {current.newLabel}
                </h3>
                <p className="text-sm font-serif italic text-[#586274] dark:text-[#A7B5CC] leading-relaxed">
                  {current.newDesc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono">
                <span className="text-teal-600 dark:text-teal-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Institutional Sync
                </span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % transformations.length)}
                  className="text-xs font-serif italic text-[#8C6B28] dark:text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <span>Next Transformation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
