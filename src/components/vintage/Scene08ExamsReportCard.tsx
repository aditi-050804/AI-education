import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, QrCode, CheckCircle2, Award, Sparkles, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';

interface StageInfo {
  id: number;
  label: string;
  title: string;
  tagline: string;
  detail: string;
}

const EXAM_STAGES: StageInfo[] = [
  {
    id: 1,
    label: 'STAGE 01',
    title: 'Dynamic Paper Builder',
    tagline: 'Bloom’s Taxonomy balanced question set generation',
    detail: 'Institution blueprint generates Section A (MCQs), Section B (Short Answer), and Section C (Derivations) with balanced difficulty curves from approved question banks.'
  },
  {
    id: 2,
    label: 'STAGE 02',
    title: 'QR Hall Tickets & Seating',
    tagline: 'Anti-fraud desk allocation and attendance verification',
    detail: 'Individualized QR hall tickets prevent impersonation. One scan at the exam hall entrance validates candidate identity and displays assigned desk numbers.'
  },
  {
    id: 3,
    label: 'STAGE 03',
    title: 'AI Subjective Step Grading',
    tagline: 'Assisted teacher evaluation against standardized rubrics',
    detail: 'AI scans handwritten and digital answers, checks key syllabus definitions and step-wise mathematical formulas, and pre-populates rubric scores for final faculty verification.'
  },
  {
    id: 4,
    label: 'STAGE 04',
    title: 'Automated Master Report Card',
    tagline: 'Instant marks reconciliation, percentile and radar curves',
    detail: 'Marks compile instantly into institutional grade sheets. Report cards generate with subject radar breakdowns, attendance correlation, and automated teacher remarks.'
  }
];

export const Scene08ExamsReportCard: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  return (
    <section className="relative py-24 px-6 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <FileText className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>07 / ASSESSMENT LIFECYCLE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              From exam <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">to report card.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              One unbroken progression from question paper creation to validated marks compilation.
            </p>
          </div>

          {/* Step Scrubber Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            {EXAM_STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStage(s.id)}
                className={`px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeStage === s.id
                    ? 'border-amber-900 bg-amber-900 text-white dark:border-amber-400 dark:bg-amber-400 dark:text-slate-950 shadow-md'
                    : 'border-amber-900/30 dark:border-amber-400/30 text-slate-700 dark:text-slate-300 hover:border-amber-700'
                }`}
              >
                0{s.id} {s.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Central Examination Folio Surface (Card Frame Removed - Organic Folio) */}
        <div className="relative w-full py-2 space-y-8">
          
          {/* Timeline Process Bar Across Top */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 font-mono text-xs">
            {EXAM_STAGES.map((s) => (
              <div
                key={s.id}
                onClick={() => setActiveStage(s.id)}
                className={`cursor-pointer border-l-2 pl-3 py-1 transition-all ${
                  activeStage === s.id
                    ? 'border-amber-900 dark:border-amber-400 font-bold'
                    : 'border-slate-300 dark:border-slate-700 opacity-60'
                }`}
              >
                <div className="text-amber-900 dark:text-amber-400 font-bold">{s.label}</div>
                <div className="font-serif font-bold text-slate-950 dark:text-slate-50 text-sm truncate">{s.title}</div>
              </div>
            ))}
          </div>

          {/* Morphing Stage Visual Area */}
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* Stage 1: Dynamic Paper Builder */}
              {activeStage === 1 && (
                <motion.div
                  key="stage1"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-widest">
                      STAGE I • BLUEPRINT GENERATION
                    </span>
                    <h3 className="text-3xl font-bold text-slate-950 dark:text-slate-50">
                      Dynamic Paper Builder
                    </h3>
                    <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      Select curriculum topics, define marks distribution, and let the engine construct balanced question sets compliant with board matrices.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      <span className="px-3 py-1 rounded bg-[#FAF6EE] dark:bg-[#0E1729] border border-amber-900/20">MCQ: 20 Marks</span>
                      <span className="px-3 py-1 rounded bg-[#FAF6EE] dark:bg-[#0E1729] border border-amber-900/20">Short: 30 Marks</span>
                      <span className="px-3 py-1 rounded bg-[#FAF6EE] dark:bg-[#0E1729] border border-amber-900/20">Derivations: 50 Marks</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border-2 border-amber-900/30 dark:border-amber-400/30 bg-[#FAF6EE] dark:bg-[#0C1424] space-y-3 font-serif">
                    <div className="border-b border-amber-900/20 pb-2 flex justify-between font-mono text-xs text-amber-900 dark:text-amber-400 font-bold">
                      <span>MID-TERM EXAMINATION 2026</span>
                      <span>MAX MARKS: 100</span>
                    </div>
                    <div className="text-sm space-y-2">
                      <p className="font-bold text-slate-950 dark:text-slate-50">Q1. State Snell’s law of refraction and derive the critical angle relation.</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">[Chapter 9: Optics • 5 Marks • Rubric #OP-04]</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Stage 2: QR Hall Ticket */}
              {activeStage === 2 && (
                <motion.div
                  key="stage2"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-widest">
                      STAGE II • IDENTITY VERIFICATION
                    </span>
                    <h3 className="text-3xl font-bold text-slate-950 dark:text-slate-50">
                      Anti-Fraud QR Hall Ticket
                    </h3>
                    <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      Every candidate receives a cryptographically signed QR ticket. A single entrance scan checks photo, roll number, and desk placement.
                    </p>
                    <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      ✓ Zero impersonation • Live gate check-in pulse
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border-2 border-sky-400/40 bg-sky-50/30 dark:bg-sky-950/20 flex items-center gap-6">
                    <div className="p-3 bg-white rounded-xl border border-slate-300">
                      <QrCode className="w-20 h-20 text-slate-950" />
                    </div>
                    <div className="space-y-1 font-mono text-xs text-slate-900 dark:text-slate-100">
                      <div className="font-bold text-sm font-serif">Aarav Sharma • Class 10-A</div>
                      <div>Roll No: 2026-X-0419</div>
                      <div>Hall: Newton Memorial Aud.</div>
                      <div className="text-emerald-700 dark:text-emerald-400 font-bold">Assigned Desk: Row C, Desk #14</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Stage 3: AI Subjective Grading */}
              {activeStage === 3 && (
                <motion.div
                  key="stage3"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-widest">
                      STAGE III • STEP EVALUATION
                    </span>
                    <h3 className="text-3xl font-bold text-slate-950 dark:text-slate-50">
                      AI Subjective Step Grading
                    </h3>
                    <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      AI assists faculty by analyzing handwritten or typed derivations against standardized keywords and math steps, saving 70% grading time.
                    </p>
                    <div className="text-xs font-mono font-bold text-sky-700 dark:text-sky-300">
                      ✓ Teacher retains final signature & approval override
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3 font-serif">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-emerald-900 dark:text-emerald-300">
                      <span>RUBRIC STEP BREAKDOWN</span>
                      <span>SCORE: 4.5 / 5.0</span>
                    </div>
                    <div className="text-xs space-y-1.5 text-slate-800 dark:text-slate-200">
                      <div className="flex justify-between"><span>• Snell's Law statement:</span><span className="font-bold text-emerald-700">+1.0</span></div>
                      <div className="flex justify-between"><span>• Ray diagram with normal:</span><span className="font-bold text-emerald-700">+1.5</span></div>
                      <div className="flex justify-between"><span>• Critical angle derivation:</span><span className="font-bold text-emerald-700">+2.0</span></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Stage 4: Automated Report Card */}
              {activeStage === 4 && (
                <motion.div
                  key="stage4"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-widest">
                      STAGE IV • MASTER GRADE SHEET
                    </span>
                    <h3 className="text-3xl font-bold text-slate-950 dark:text-slate-50">
                      Automated Report Card
                    </h3>
                    <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      Marks consolidate automatically into certified digital transcript folios with CBSE/ICSE format compliance and WhatsApp parent delivery.
                    </p>
                    <div className="text-xs font-mono font-bold text-amber-900 dark:text-amber-400">
                      ✓ Instant parent delivery • Tamper-proof cryptographic hash
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border-2 border-amber-900/30 dark:border-amber-400/30 bg-[#FAF6EE] dark:bg-[#0C1424] space-y-3 font-serif">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-amber-900 dark:text-amber-400">
                      <span>TRANSCRIPT OF ACADEMIC MERIT</span>
                      <span className="text-emerald-700 dark:text-emerald-400">GRADE: A+ (94.2%)</span>
                    </div>
                    <div className="text-xs space-y-1 text-slate-800 dark:text-slate-200 font-mono">
                      <div className="flex justify-between"><span>Physics Theory:</span><span className="font-bold">96 / 100</span></div>
                      <div className="flex justify-between"><span>Mathematics:</span><span className="font-bold">98 / 100</span></div>
                      <div className="flex justify-between"><span>Chemistry:</span><span className="font-bold">89 / 100</span></div>
                    </div>
                    <p className="text-xs font-serif italic text-slate-600 dark:text-slate-400 pt-1 border-t border-amber-900/20">
                      "Exemplary grasp of analytical derivations and laboratory experiments."
                    </p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t-2 border-amber-900/20 dark:border-amber-400/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300 gap-2">
            <span>ZERO DATA LOSS ACROSS SEMESTER TERMS</span>
            <span className="text-amber-900 dark:text-amber-400">COMPLETE ACCREDITATION AUDIT TRAIL</span>
          </div>

        </div>

      </div>
    </section>
  );
};
