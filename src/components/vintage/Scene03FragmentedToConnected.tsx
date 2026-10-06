import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, CheckCircle2, Shuffle, Sparkles, FileText, Calendar, Receipt, BookOpen, MessageSquare, ClipboardList } from 'lucide-react';

interface PaperDoc {
  id: string;
  title: string;
  icon: React.ElementType;
  paperNote: string;
  digitalState: string;
  oldPain: string;
  connectedGain: string;
  initialPos: { x: number; y: number; rotate: number };
}

const DOCUMENTS: PaperDoc[] = [
  {
    id: 'timetable',
    title: 'Paper Timetable',
    icon: Calendar,
    paperNote: 'Scribbled pencil adjustments on staffroom board',
    digitalState: 'Live Autonomous Timetable & Proxy Engine',
    oldPain: 'Teacher absence disrupts 4 morning classes before discovery.',
    connectedGain: 'AI finds free qualified teacher & notifies instantly.',
    initialPos: { x: -180, y: -90, rotate: -6 }
  },
  {
    id: 'attendance',
    title: 'Attendance Register',
    icon: ClipboardList,
    paperNote: 'Bulky cardboard register with manual ink dots',
    digitalState: '1-Tap Facial/QR Attendance with WhatsApp Alerts',
    oldPain: '30 minutes spent taking rolls across 8 periods.',
    connectedGain: 'Instant cloud mark; absent parents notified in real time.',
    initialPos: { x: 180, y: -100, rotate: 5 }
  },
  {
    id: 'ledger',
    title: 'Fee Ledger',
    icon: Receipt,
    paperNote: 'Handwritten receipts & manual counterfoils',
    digitalState: '2-Way Real-Time Tally ERP 9 / TallyPrime Sync',
    oldPain: 'Hours spent reconciling manual bank deposits with accounts.',
    connectedGain: 'Direct gateway sync, automated GST receipts & zero lag.',
    initialPos: { x: -200, y: 90, rotate: -4 }
  },
  {
    id: 'exam',
    title: 'Exam Paper',
    icon: FileText,
    paperNote: 'Stenciled question sheets & manual bundle grading',
    digitalState: 'Dynamic Question Bank & AI Rubric Grading',
    oldPain: 'Grading subjective exams takes weeks per term.',
    connectedGain: 'AI step-grading assistance and automated report cards.',
    initialPos: { x: 200, y: 80, rotate: 7 }
  },
  {
    id: 'textbook',
    title: 'Physical Textbook',
    icon: BookOpen,
    paperNote: 'Static printed library edition',
    digitalState: 'Grounded AI Study Companion with Citations',
    oldPain: 'Students get stuck on doubts outside school hours.',
    connectedGain: '24/7 syllabus-grounded explanations with page sources.',
    initialPos: { x: -60, y: -140, rotate: -2 }
  },
  {
    id: 'messages',
    title: 'Circular Slips',
    icon: MessageSquare,
    paperNote: 'Paper notices lost in student backpacks',
    digitalState: 'Unified Parent Broadcast & Multi-Child Hub',
    oldPain: 'Important event updates never reach working parents.',
    connectedGain: 'Direct multi-child portal access and SMS/WhatsApp sync.',
    initialPos: { x: 60, y: 140, rotate: 3 }
  }
];

export const Scene03FragmentedToConnected: React.FC = () => {
  const [isUnified, setIsUnified] = useState<boolean>(true);
  const [activeDoc, setActiveDoc] = useState<PaperDoc>(DOCUMENTS[0]);

  return (
    <section className="relative py-24 px-6 bg-[#FAF6EE] dark:bg-[#070D18] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">

      <div className="max-w-7xl mx-auto w-full space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Layers className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>02 / TRANSFORMATION MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Less switching. <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">More connected work.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              From isolated paper registers to one synchronized digital education operating system.
            </p>
          </div>

          {/* Interactive Toggle Switch */}
          <div className="flex items-center gap-3 p-1.5 rounded-full border border-amber-900/30 dark:border-amber-400/30 bg-[#FAF6EE] dark:bg-[#0C1424]">
            <button
              onClick={() => setIsUnified(false)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${!isUnified
                  ? 'bg-amber-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950'
                }`}
            >
              FRAGMENTED (PAST)
            </button>
            <button
              onClick={() => setIsUnified(true)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${isUnified
                  ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950'
                }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-EDUCATION (UNIFIED)</span>
            </button>
          </div>
        </div>

        {/* Central Convergence Stage (Card Frame Removed - Full-Width Flow) */}
        <div className="relative w-full py-4 min-h-[460px] flex flex-col justify-between overflow-hidden">

          {/* Status Banner */}
          <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest text-amber-900 dark:text-amber-400 pb-3 border-b border-amber-900/20 dark:border-amber-400/20">
            <span>MODE: {isUnified ? 'ALL 6 PILLARS FUSED INTO ONE ENGINE' : '6 DISCONNECTED PAPER ARTIFACTS'}</span>
            <span className="hidden sm:inline">SELECT ANY WORKFLOW TO INSPECT CONVERGENCE</span>
          </div>

          {/* Convergence Visual Core */}
          <div className="relative py-10 flex items-center justify-center min-h-[300px]">

            {/* Center Hub: Shows when unified */}
            <AnimatePresence>
              {isUnified && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  className="z-20 w-44 h-44 rounded-full border-4 border-sky-400 bg-[#FAF6EE] dark:bg-[#0A1220] flex flex-col items-center justify-center text-center p-4 shadow-2xl relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                    className="absolute inset-2 rounded-full border border-dashed border-amber-600/50 pointer-events-none"
                  />
                  <span className="font-mono text-[10px] text-sky-600 dark:text-sky-400 font-bold tracking-widest">
                    SYNCED CORE
                  </span>
                  <span className="font-serif font-bold text-lg sm:text-xl text-slate-950 dark:text-slate-50 leading-tight">
                    AI-EDUCATION
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold mt-1">
                    ✓ Single Source of Truth
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Orbiting / Scattered Documents */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
              {DOCUMENTS.map((doc) => {
                const isSelected = activeDoc.id === doc.id;
                const Icon = doc.icon;

                return (
                  <motion.div
                    key={doc.id}
                    onClick={() => setActiveDoc(doc)}
                    animate={
                      isUnified
                        ? { x: 0, y: 0, rotate: 0, scale: 1 }
                        : {
                          x: doc.initialPos.x * 0.35,
                          y: doc.initialPos.y * 0.35,
                          rotate: doc.initialPos.rotate,
                          scale: 0.96
                        }
                    }
                    transition={{ type: 'spring', damping: 22, stiffness: 180 }}
                    className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex flex-col justify-between ${isSelected
                        ? 'border-sky-500 bg-sky-50/80 dark:bg-sky-950/40 shadow-lg'
                        : isUnified
                          ? 'border-amber-900/30 dark:border-amber-400/30 bg-[#FAF6EE] dark:bg-[#0E1729] hover:border-sky-400'
                          : 'border-dashed border-amber-800/40 bg-[#F4EDE0] dark:bg-[#121A2B] opacity-80 hover:opacity-100'
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2">
                        <Icon className={`w-5 h-5 ${isUnified ? 'text-sky-600 dark:text-sky-400' : 'text-amber-800 dark:text-amber-400'}`} />
                        <span className="font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400">
                          {isUnified ? 'SYNCED' : 'ISOLATED'}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-slate-950 dark:text-slate-50">
                        {doc.title}
                      </h4>
                    </div>

                    <div className="pt-3 text-[11px] font-serif font-medium text-slate-700 dark:text-slate-300">
                      {isUnified ? (
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold block">
                          ✓ {doc.digitalState}
                        </span>
                      ) : (
                        <span className="text-amber-900 dark:text-amber-300 italic block">
                          • {doc.paperNote}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Deep-Dive Inspection Strip for Active Document */}
          <div className="border-t-2 border-amber-900/20 dark:border-amber-400/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-widest">
                PAST WORKFLOW: {activeDoc.title.toUpperCase()} (FRAGMENTED)
              </span>
              <p className="text-sm sm:text-base font-serif text-slate-800 dark:text-slate-200">
                {activeDoc.oldPain}
              </p>
            </div>

            <div className="space-y-1 bg-[#FAF6EE] dark:bg-[#0B1424] p-4 rounded-xl border border-sky-400/30">
              <span className="font-mono text-xs font-bold text-sky-700 dark:text-sky-300 uppercase tracking-widest flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>UNIFIED WITH AI-EDUCATION: {activeDoc.digitalState.toUpperCase()}</span>
              </span>
              <p className="text-sm sm:text-base font-serif font-bold text-slate-950 dark:text-slate-50">
                {activeDoc.connectedGain}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
