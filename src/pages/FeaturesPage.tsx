import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  RefreshCw,
  Bookmark,
  Check,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  Phone,
  Send,
  Building2,
  GraduationCap,
  Scale,
  Brain,
  RotateCcw,
  Sliders,
  Play,
  Award
} from 'lucide-react';
import type { PageId } from '../types';

interface FeaturesPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 10 Chapters definition strictly matching Master Prompt
  const chapters = [
    { num: '01', title: 'Academic Operations', short: 'Academic', id: 'chapter-01' },
    { num: '02', title: 'AI Study Buddy', short: 'AI Learning', id: 'chapter-02' },
    { num: '03', title: 'Assessments', short: 'Assessments', id: 'chapter-03' },
    { num: '04', title: 'Admissions & Exams', short: 'Admissions', id: 'chapter-04' },
    { num: '05', title: 'Finance & Tally', short: 'Finance', id: 'chapter-05' },
    { num: '06', title: 'Campus Communication', short: 'Communication', id: 'chapter-06' },
    { num: '07', title: 'Parent Portal', short: 'Parents', id: 'chapter-07' },
    { num: '08', title: 'Adaptive Learning', short: 'Adaptive', id: 'chapter-08' },
    { num: '09', title: 'Tutor & Competitive Prep', short: 'Tutor', id: 'chapter-09' },
    { num: '10', title: 'Law Education', short: 'Law', id: 'chapter-10' },
  ];

  // Scroll spy using IntersectionObserver with optimal margin
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    chapters.forEach((chap, idx) => {
      const el = document.getElementById(chap.id);
      if (el) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveChapter(idx);
              }
            });
          },
          {
            root: null,
            rootMargin: '-20% 0px -40% 0px',
            threshold: 0.15,
          }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Smooth scroll handler
  const scrollToChapter = (id: string, index: number) => {
    setActiveChapter(index);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE STATES FOR THE 10 CHAPTERS
  // ---------------------------------------------------------------------------

  // Chapter 01: Timetable Proxy Sequence
  const [timetableState, setTimetableState] = useState<'normal' | 'absent' | 'evaluating' | 'assigned'>('assigned');
  
  // Chapter 02: AI Study Buddy Subject
  const [studySubject, setStudySubject] = useState<'biology' | 'law' | 'physics'>('biology');

  // Chapter 03: Assessments Pipeline Step
  const [assessStep, setAssessStep] = useState<number>(3);

  // Chapter 04: Admissions Journey Step
  const [admissionsStep, setAdmissionsStep] = useState<number>(4);

  // Chapter 05: Finance & Tally Sync State
  const [isSyncingLedger, setIsSyncingLedger] = useState<boolean>(false);

  // Chapter 07: Parent Portal Notification Type
  const [parentTab, setParentTab] = useState<'attendance' | 'fee' | 'notice'>('attendance');

  // Chapter 08: Adaptive Learning Branch
  const [adaptiveBranch, setAdaptiveBranch] = useState<'correct' | 'needs_help'>('correct');

  // Chapter 09: Prep Loop Step
  const [prepLoopStep, setPrepLoopStep] = useState<number>(2);

  // Chapter 10: Law Case Tab
  const [lawTab, setLawTab] = useState<'basic_structure' | 'due_process' | 'judicial_review'>('basic_structure');

  // Re-simulate proxy assignment demo
  const triggerProxySimulation = () => {
    setTimetableState('normal');
    setTimeout(() => setTimetableState('absent'), 500);
    setTimeout(() => setTimetableState('evaluating'), 1400);
    setTimeout(() => setTimetableState('assigned'), 2400);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-500 font-sans relative selection:bg-[#C87D32] selection:text-white"
    >
      {/* ========================================================================= */}
      {/* FAINT BACKGROUND ACADEMIC WATERMARK (Controlled Opacity) */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden flex flex-col justify-between py-24 px-8 opacity-[0.02] dark:opacity-[0.03]">
        <div className="font-editorial text-[8vw] font-bold tracking-widest text-[#121926] dark:text-white leading-none">
          CAMPUS
        </div>
        <div className="font-editorial text-[7.5vw] font-bold tracking-widest text-right text-[#121926] dark:text-white leading-none">
          KNOWLEDGE
        </div>
        <div className="font-editorial text-[8vw] font-bold tracking-widest text-[#121926] dark:text-white leading-none">
          CURRICULUM
        </div>
        <div className="font-editorial text-[7.5vw] font-bold tracking-widest text-right text-[#121926] dark:text-white leading-none">
          INTELLIGENCE
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Minimal Editorial (Compact Spacing) */}
      {/* ========================================================================= */}
      <section className="pt-24 pb-8 max-w-4xl mx-auto px-6 text-center space-y-3 relative z-10">
        
        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#5A6578] dark:text-[#9DA9BE]"
        >
          <span className="w-2 h-2 rounded-full bg-[#C87D32]" />
          <span className="font-mono text-[11px] text-[#C87D32] dark:text-[#E5A955]">
            CAPABILITIES JOURNEY
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-[1.08] tracking-tight"
        >
          Everything your campus needs, <br />
          <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
            in one intelligent system.
          </span>
        </motion.h1>

        {/* 1-2 Line Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl mx-auto"
        >
          10 connected capabilities for modern education.
        </motion.p>

        {/* Subtle scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-2 flex justify-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C87D32] dark:text-[#E5A955] flex items-center gap-1.5 opacity-80">
            <span>Scroll through the 10 chapters</span>
            <span className="animate-bounce">↓</span>
          </span>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MOBILE STICKY CHAPTER BADGE (Top bar for mobile & tablet) */}
      {/* ========================================================================= */}
      <div className="lg:hidden sticky top-16 z-30 py-2.5 px-6 bg-[#FAF5EB]/95 dark:bg-[#070B13]/95 backdrop-blur-md border-b border-[#C87D32]/15">
        <div className="max-w-md mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C87D32]" />
            <span className="font-bold text-[#C87D32] dark:text-[#E5A955]">
              {chapters[activeChapter].num} / 10
            </span>
            <span className="text-[#121926] dark:text-[#F5EFE6] font-editorial italic text-sm">
              {chapters[activeChapter].short}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              disabled={activeChapter === 0}
              onClick={() => scrollToChapter(chapters[Math.max(0, activeChapter - 1)].id, activeChapter - 1)}
              className="px-2 py-0.5 rounded border border-[#C87D32]/30 disabled:opacity-30 text-[#121926] dark:text-[#F5EFE6]"
            >
              ←
            </button>
            <button
              disabled={activeChapter === chapters.length - 1}
              onClick={() => scrollToChapter(chapters[Math.min(chapters.length - 1, activeChapter + 1)].id, activeChapter + 1)}
              className="px-2 py-0.5 rounded border border-[#C87D32]/30 disabled:opacity-30 text-[#121926] dark:text-[#F5EFE6]"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN UNIFIED TWO-COLUMN LAYOUT (BALANCED & COMPACT) */}
      {/* Sticky Left Rail sits immediately beside the Chapter Content */}
      {/* Completely eliminates giant horizontal & vertical gaps */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="flex gap-8 lg:gap-10 xl:gap-14 items-start relative">
          
          {/* --------------------------------------------------------------------- */}
          {/* STICKY VERTICAL CHAPTER RAIL (LEFT COLUMN) */}
          {/* --------------------------------------------------------------------- */}
          <aside className="hidden lg:block w-36 xl:w-40 shrink-0 sticky top-24 select-none self-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative pl-4 py-2"
            >
              {/* Thin Base Vertical Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-[#C87D32]/25 dark:bg-[#C87D32]/20 origin-top"
              />

              {/* Dynamic Orange Scroll Progress Line */}
              <div
                className="absolute left-[5px] top-2 w-[1.5px] bg-[#C87D32] transition-all duration-300 origin-top"
                style={{
                  height: `${(activeChapter / (chapters.length - 1)) * 96}%`,
                }}
              />

              {/* 10 Chapters with compact vertical spacing */}
              <div className="space-y-3">
                {chapters.map((chap, idx) => {
                  const isActive = activeChapter === idx;
                  const isPast = activeChapter > idx;

                  return (
                    <button
                      key={chap.id}
                      onClick={() => scrollToChapter(chap.id, idx)}
                      className="group relative flex items-center gap-2.5 text-left w-full focus:outline-none transition-all duration-200"
                    >
                      {/* Timeline Dot Node */}
                      <div
                        className={`absolute -left-[15px] rounded-full transition-all duration-200 flex items-center justify-center ${
                          isActive
                            ? 'w-2.5 h-2.5 bg-[#C87D32] ring-4 ring-[#FAF5EB] dark:ring-[#070B13] scale-110 shadow-sm'
                            : isPast
                            ? 'w-2 h-2 bg-[#C87D32]/80 ring-2 ring-[#FAF5EB] dark:ring-[#070B13]'
                            : 'w-1.5 h-1.5 border border-[#C87D32]/40 bg-[#FAF5EB] dark:bg-[#070B13]'
                        }`}
                      >
                        {isPast && (
                          <Check className="w-1 h-1 text-white stroke-[3]" />
                        )}
                      </div>

                      {/* Chapter Label and Number */}
                      <div className="flex flex-col transition-all duration-200 pl-1">
                        <span
                          className={`font-mono text-[9px] tracking-wider transition-all duration-150 ${
                            isActive
                              ? 'text-[#C87D32] dark:text-[#E5A955] font-bold'
                              : 'text-[#5A6578]/60 dark:text-[#9DA9BE]/40 group-hover:text-[#121926]'
                          }`}
                        >
                          {chap.num}
                        </span>
                        <span
                          className={`text-xs font-serif leading-tight transition-all duration-150 ${
                            isActive
                              ? 'text-[#121926] dark:text-[#F5EFE6] font-bold translate-x-0.5'
                              : 'text-[#5A6578]/70 dark:text-[#9DA9BE]/50 group-hover:text-[#121926] dark:group-hover:text-[#F5EFE6]'
                          }`}
                        >
                          {chap.short}
                        </span>
                      </div>

                      {/* Subtle active underline */}
                      {isActive && (
                        <motion.div
                          layoutId="activeRailUnderline"
                          className="absolute bottom-0 left-3 right-4 h-[1px] bg-[#C87D32]/40"
                          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </aside>

          {/* --------------------------------------------------------------------- */}
          {/* MAIN CHAPTER STREAM (RIGHT COLUMN - TIGHT, BALANCED EDITORIAL FLOW) */}
          {/* --------------------------------------------------------------------- */}
          <main className="flex-1 min-w-0 space-y-16 lg:space-y-20 pb-20">
            
            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 01 — ACADEMIC OPERATIONS */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-01" className="scroll-mt-28 space-y-4 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  01 / ACADEMIC OPERATIONS
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Keep every class moving.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Smart scheduling, teacher availability and automatic proxy matching.
                </p>
              </div>

              {/* Timetable Demo */}
              <div className="space-y-3 pt-1 font-serif">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#C87D32]/20 text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE]">
                  <span>Schedule • Availability • Proxy Matching</span>
                  <button
                    onClick={triggerProxySimulation}
                    className="px-3 py-1 rounded-full border border-[#C87D32] bg-[#FAF5EB] dark:bg-[#111A2E] text-xs font-editorial italic text-[#121926] dark:text-[#F5EFE6] hover:bg-[#C87D32] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <RefreshCw className={`w-3 h-3 text-[#C87D32] ${timetableState === 'evaluating' ? 'animate-spin' : ''}`} />
                    <span>Re-simulate Proxy Match</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB]/80 dark:bg-[#0E1524]/80 text-xs space-y-1">
                    <div className="font-mono text-[10px] text-[#C87D32]">Monday 08:30 • Room 101</div>
                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">History II</div>
                    <div className="italic text-[#526071] dark:text-[#A6B4C9]">Prof. K. Sen • Assigned</div>
                    <div className="pt-1 text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>On Schedule</span>
                    </div>
                  </div>

                  <div className={`p-3.5 rounded-xl border transition-all duration-300 text-xs space-y-1 ${
                    timetableState === 'assigned'
                      ? 'border-[#38BDF8] bg-[#38BDF8]/10'
                      : timetableState === 'evaluating'
                      ? 'border-amber-500/50 bg-amber-500/10'
                      : timetableState === 'absent'
                      ? 'border-rose-400 bg-rose-500/10'
                      : 'border-[#C87D32]/25 bg-[#FAF5EB]/80 dark:bg-[#0E1524]/80'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#C87D32]">Monday 09:15 • Room 204</span>
                      {timetableState === 'assigned' && (
                        <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#38BDF8] font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>PROXY ASSIGNED ✓</span>
                        </span>
                      )}
                      {timetableState === 'evaluating' && (
                        <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
                          <RefreshCw className="w-3 h-3 animate-spin" />
                          <span>MATCHING...</span>
                        </span>
                      )}
                      {timetableState === 'absent' && (
                        <span className="text-[10px] font-mono text-rose-500 font-bold">UNAVAILABLE</span>
                      )}
                    </div>

                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                      Mathematics
                    </div>

                    <div className="italic text-[#526071] dark:text-[#A6B4C9] flex items-center justify-between">
                      <span>{timetableState === 'assigned' ? 'Dr. Mehta (Proxy Matched)' : 'Teacher: Sharma'}</span>
                      {timetableState !== 'normal' && <span className="line-through text-rose-500 text-[10px]">Sharma Absent</span>}
                    </div>

                    <div className="pt-1 text-[10px] font-mono text-[#5A6578] dark:text-[#9DA9BE] flex items-center justify-between">
                      <span>Workload match: 98%</span>
                      <span>Room 204</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB]/80 dark:bg-[#0E1524]/80 text-xs space-y-1">
                    <div className="font-mono text-[10px] text-[#C87D32]">Monday 10:15 • Room 102</div>
                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Physics Lab</div>
                    <div className="italic text-[#526071] dark:text-[#A6B4C9]">Dr. V. Prasad • Assigned</div>
                    <div className="pt-1 text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>On Schedule</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 02 — AI STUDY BUDDY */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-02" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  02 / AI STUDY BUDDY
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Answers grounded in your curriculum.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Direct citations with chapter, section and exact page grounding.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-4 font-serif">
                <div className="flex items-center justify-between pb-2 border-b border-[#C87D32]/15 text-xs">
                  <span className="font-mono text-[10px] text-[#C87D32]">
                    {studySubject === 'biology' && 'Chapter 04 • Cellular Energetics • p. 87'}
                    {studySubject === 'law' && 'Chapter 08 • Constitutional Powers • p. 144'}
                    {studySubject === 'physics' && 'Chapter 07 • Rotational Dynamics • p. 158'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {(['biology', 'law', 'physics'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setStudySubject(s)}
                        className={`px-2.5 py-0.5 rounded-full text-xs font-editorial italic capitalize transition-all ${
                          studySubject === s ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-2.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C87D32]/10 text-[#C87D32] font-bold shrink-0">
                    QUESTION
                  </span>
                  <div className="font-editorial text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                    {studySubject === 'biology' && '“Explain light-dependent reactions in photosynthesis.”'}
                    {studySubject === 'law' && '“Explain the doctrine of Basic Structure under Article 368.”'}
                    {studySubject === 'physics' && '“Derive relation between torque and angular momentum.”'}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-editorial font-bold text-[#121926] dark:text-[#F5EFE6]">
                      <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>AI Answer (Verified Grounding)</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full border border-[#38BDF8]/60 text-[10px] font-mono text-[#0284C7] dark:text-[#38BDF8] flex items-center gap-1 font-semibold">
                      <Bookmark className="w-3 h-3" />
                      <span>
                        {studySubject === 'biology' && 'Ch 04 • Sec 02 • Page 87'}
                        {studySubject === 'law' && 'Ch 08 • Sec 03 • Page 144'}
                        {studySubject === 'physics' && 'Ch 07 • Sec 05 • Page 158'}
                      </span>
                    </span>
                  </div>
                  <p className="italic text-[#121926] dark:text-[#F5EFE6] leading-relaxed text-xs sm:text-sm">
                    {studySubject === 'biology' && '“Photons excite chlorophyll in Photosystem II. Photolysis of water releases O₂ while electrons flow through cyt-b6f to generate NADPH and ATP powering the Calvin cycle.”'}
                    {studySubject === 'law' && '“Affirmed in Kesavananda Bharati (1973), Parliament possesses constituent amending power under Art. 368, but cannot alter the fundamental basic framework of the Constitution.”'}
                    {studySubject === 'physics' && '“External torque equals the time rate of change of angular momentum: τ_ext = dL/dt. When external torque is zero, system angular momentum is conserved.”'}
                  </p>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 03 — ASSESSMENTS */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-03" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  03 / ASSESSMENTS
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Assessment without the busywork.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  From answer sheets to cryptographically sealed report cards.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-3 font-serif">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
                  {['Question Paper', 'Student Answers', 'AI Evaluation', 'Sealed Report'].map((s, i) => (
                    <button
                      key={s}
                      onClick={() => setAssessStep(i + 1)}
                      className={`px-3 py-1 rounded-full border transition-all ${
                        assessStep === i + 1
                          ? 'border-[#C87D32] bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold'
                          : 'border-[#C87D32]/25 text-[#5A6578]'
                      }`}
                    >
                      0{i + 1} {s}
                    </button>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#5A6578]">
                    <span>Question 4: Moment of inertia derivation</span>
                    <span className="text-rose-600 dark:text-rose-400 font-bold font-serif text-xs">
                      +5 / 5 (Full Step Marks)
                    </span>
                  </div>
                  <p className="italic text-[#121926] dark:text-[#F5EFE6] leading-relaxed">
                    Derivation: I = ∫ r² dm = M·R² for thin cylindrical shell. Step marks verified by AI Rubric.
                  </p>
                  <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                    <span>✓ Derivation valid</span>
                    <span>✓ Units verified (kg·m²)</span>
                    <span>✓ Cryptographic Seal Applied</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                    <div className="font-mono text-[9px] text-[#5A6578]">Subject Breakdown</div>
                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Physics • 94/100</div>
                    <div className="italic text-[#C87D32] text-[10px]">Grade A+ (Distinction)</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                    <div className="font-mono text-[9px] text-[#5A6578]">Batch Ranking</div>
                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Rank 03 / 184</div>
                    <div className="italic text-emerald-600 text-[10px]">Top 2% in batch</div>
                  </div>
                  <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20">
                    <div className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400">Seal Status</div>
                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Controller Signed</div>
                    <div className="italic text-[#526071] text-[10px]">Sent to Parent Portal</div>
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 04 — ADMISSIONS & EXAMS */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-04" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  04 / ADMISSIONS & EXAMS
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  From application to result.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  One continuous verified pipeline: biometric QR tickets to instant results.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-4 font-serif">
                <div className="text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] flex items-center justify-between pb-1 border-b border-[#C87D32]/20">
                  <span>EXAMINATION PIPELINE TRACKER</span>
                  <span className="text-[#C87D32]">8 Sequential Stages</span>
                </div>

                {/* 8-stage continuous track */}
                <div className="relative py-4">
                  <div className="absolute top-1/2 left-3 right-3 h-[2px] bg-[#C87D32]/25 -translate-y-1/2" />
                  <div
                    className="absolute top-1/2 left-3 h-[2px] bg-[#C87D32] -translate-y-1/2 transition-all duration-300"
                    style={{ width: `${(admissionsStep / 8) * 94}%` }}
                  />

                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 relative z-10 text-center">
                    {['Form', 'Verify', 'Hall Pass', 'QR Check', 'Exam', 'Submit', 'AI Eval', 'Result'].map((st, i) => (
                      <button
                        key={st}
                        onClick={() => setAdmissionsStep(i + 1)}
                        className="flex flex-col items-center group"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9px] transition-all ${
                            i === admissionsStep - 1
                              ? 'bg-[#C87D32] text-white ring-4 ring-[#FAF5EB] dark:ring-[#070B13] scale-110 font-bold'
                              : i < admissionsStep
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#FAF5EB] dark:bg-[#0E1524] border border-[#C87D32]/40 text-[#5A6578]'
                          }`}
                        >
                          {i < admissionsStep ? '✓' : `0${i + 1}`}
                        </div>
                        <span className={`text-[9px] mt-1 ${i === admissionsStep - 1 ? 'font-bold text-[#121926] dark:text-[#F5EFE6]' : 'text-[#5A6578]'}`}>
                          {st}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 text-xs">
                  <div className="font-mono text-[10px] text-[#0284C7] dark:text-[#38BDF8] pb-1">
                    STAGE 0{admissionsStep} AUDIT LOG • BIOMETRIC VERIFIED
                  </div>
                  <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                    {admissionsStep === 1 && 'Application Received: Digital form submitted with certified documents.'}
                    {admissionsStep === 2 && 'Identity Verification: Automatic ID checksum cleared.'}
                    {admissionsStep === 3 && 'Hall Ticket Dispatched: Cryptographic QR pass assigned.'}
                    {admissionsStep === 4 && 'QR Gate Scan: Biometric check-in in 1.4s. Anti-impersonation verified.'}
                    {admissionsStep === 5 && 'Examination In Session: Desk #18 mapped to encrypted seat.'}
                    {admissionsStep === 6 && 'Submission Logged: Answer sheets scanned and cryptographically timestamped.'}
                    {admissionsStep === 7 && 'AI Step Evaluation: Rubric-based step evaluation with faculty oversight.'}
                    {admissionsStep === 8 && 'Verified Result Published: Digitally signed score sent to parent.'}
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 05 — FINANCE & TALLY */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-05" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  05 / FINANCE & TALLY
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Finance that stays in sync.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Student Fee ↓ AI-Education ↓ Tally. Zero manual ledger entries.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-3 font-serif">
                <div className="flex items-center justify-between text-xs font-mono pb-1 border-b border-[#C87D32]/20">
                  <span className="text-[#C87D32]">ACADEMIC GENERAL LEDGER • FOLIO #408</span>
                  <button
                    onClick={() => {
                      setIsSyncingLedger(true);
                      setTimeout(() => setIsSyncingLedger(false), 800);
                    }}
                    className="px-3 py-0.5 rounded-full border border-[#C87D32] text-xs font-editorial italic hover:bg-[#C87D32] hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <RefreshCw className={`w-3 h-3 ${isSyncingLedger ? 'animate-spin' : ''}`} />
                    <span>Simulate Sync</span>
                  </button>
                </div>

                <div className="overflow-x-auto text-xs">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-[#C87D32]/20 font-mono text-[9px] text-[#5A6578]">
                        <th className="py-1.5">DATE</th>
                        <th className="py-1.5">PARTICULARS</th>
                        <th className="py-1.5">VOUCHER</th>
                        <th className="py-1.5 text-right">DEBIT (₹)</th>
                        <th className="py-1.5 text-center">TALLY STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#C87D32]/10">
                      <tr>
                        <td className="py-2 font-mono text-[10px]">05-Oct</td>
                        <td className="py-2 font-bold text-[#121926] dark:text-[#F5EFE6]">
                          Term II Tuition Fee (Student #4029)
                        </td>
                        <td className="py-2 font-mono text-[10px] text-[#C87D32]">RCPT-8821</td>
                        <td className="py-2 font-mono text-right text-emerald-600">45,000.00</td>
                        <td className="py-2 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[9px] font-bold">
                            SYNCED ✓
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs font-mono text-[#5A6578]">
                  <span>Data Flow: FEE ➔ AI-EDUCATION ➔ TALLYPRIME</span>
                  <span className="text-[#C87D32]">Zero Discrepancy</span>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 06 — CAMPUS COMMUNICATION */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-06" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  06 / CAMPUS COMMUNICATION
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Every conversation. One campus.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Messages converge into an AI-synthesized executive brief.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-3 font-serif">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  {['Principal', 'Teacher', 'HOD', 'Student', 'Parent'].map((role) => (
                    <div key={role} className="p-2.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                      <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">{role}</div>
                      <div className="font-mono text-[9px] text-[#C87D32]">Node Active</div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 space-y-1.5 text-xs">
                  <div className="font-mono text-[10px] text-[#0284C7] dark:text-[#38BDF8] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Executive Brief • 3 Updates Today</span>
                  </div>
                  <div className="space-y-1 italic text-[#121926] dark:text-[#F5EFE6] text-xs leading-relaxed">
                    <p>1. Class 10-A Math proxy assigned to Dr. Mehta with 0 min loss.</p>
                    <p>2. Term II Fee settlement crossed 94% threshold; invoices dispatched.</p>
                    <p>3. Senior Science Olympiad trial rosters published for 48 families.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 07 — PARENT PORTAL */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-07" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  07 / PARENT PORTAL
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Keep parents in the loop.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Attendance timestamps, fee receipts, and school updates.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-3 font-serif">
                <div className="flex items-center justify-between text-xs font-mono pb-1 border-b border-[#C87D32]/20">
                  <span className="text-[#C87D32]">PARENT DISPATCH INTERFACE</span>
                  <div className="flex items-center gap-1.5">
                    {(['attendance', 'fee', 'notice'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setParentTab(t)}
                        className={`px-2.5 py-0.5 rounded-full border text-xs capitalize ${
                          parentTab === t ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="max-w-md mx-auto rounded-2xl border border-[#121926]/20 dark:border-[#F5EFE6]/20 bg-[#FAF5EB] dark:bg-[#070B13] p-4 shadow-md space-y-2 text-xs">
                  <div className="flex items-center justify-between font-mono text-[9px] text-[#0284C7] dark:text-[#38BDF8] font-bold">
                    <span>AI-EDUCATION PORTAL</span>
                    <span>Just Now</span>
                  </div>
                  <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                    {parentTab === 'attendance' && 'Aarav recorded present at Main Gate Terminal 2 (08:14 AM).'}
                    {parentTab === 'fee' && 'Term II Fee of ₹45,000 received. GST invoice #INV-89 ready.'}
                    {parentTab === 'notice' && 'Annual Sports Day trials begin this Thursday at 09:00 AM.'}
                  </div>
                  <div className="text-[10px] text-[#5A6578] italic">
                    {parentTab === 'attendance' && 'Timestamp: 08:14:22 AM IST • Biometric confirmed'}
                    {parentTab === 'fee' && 'Synchronized with TallyPrime'}
                    {parentTab === 'notice' && 'Athletics & basketball rosters attached'}
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 08 — ADAPTIVE LEARNING */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-08" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  08 / ADAPTIVE LEARNING
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Learning that adapts.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Dynamic branching paths based on real-time student mastery.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-3 font-serif">
                <div className="flex items-center justify-between text-xs font-mono pb-1 border-b border-[#C87D32]/20">
                  <span className="text-[#5A6578]">DIAGNOSTIC CALIBRATION</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAdaptiveBranch('correct')}
                      className={`px-3 py-0.5 rounded-full border text-xs ${
                        adaptiveBranch === 'correct' ? 'bg-emerald-600 text-white font-bold' : 'text-[#5A6578]'
                      }`}
                    >
                      Answer: Correct
                    </button>
                    <button
                      onClick={() => setAdaptiveBranch('needs_help')}
                      className={`px-3 py-0.5 rounded-full border text-xs ${
                        adaptiveBranch === 'needs_help' ? 'bg-rose-600 text-white font-bold' : 'text-[#5A6578]'
                      }`}
                    >
                      Needs Help
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                    <div className="font-mono text-[9px] text-[#C87D32]">Stage 1 • Question</div>
                    <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">Factorization</div>
                    <p className="text-[10px] italic text-[#526071]">Diagnostic evaluation</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${
                    adaptiveBranch === 'correct' ? 'border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20' : 'border-rose-500/40 bg-rose-50/20 dark:bg-rose-950/20'
                  }`}>
                    <div className="font-mono text-[9px] text-[#C87D32]">Stage 2 • Adaptive Track</div>
                    <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                      {adaptiveBranch === 'correct' ? 'Accelerated Derivation' : 'Visual Decomposition'}
                    </div>
                    <p className="text-[10px] italic text-[#526071]">
                      {adaptiveBranch === 'correct' ? 'Skips busywork' : 'Isolates concept gap'}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                    <div className="font-mono text-[9px] text-[#C87D32]">Stage 3 • Outcome</div>
                    <div className="font-editorial text-sm font-bold text-emerald-600">Verified Mastery</div>
                    <p className="text-[10px] italic text-[#526071]">98% score • Level up</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 09 — TUTOR & COMPETITIVE PREP */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-09" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  09 / TUTOR & COMPETITIVE PREP
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  A smarter way to prepare.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Continuous feedback loops for JEE, NEET, CLAT, and boards.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-3 font-serif">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { step: 1, title: 'Practice Set', desc: 'Timed mock' },
                    { step: 2, title: 'Analysis', desc: 'Speed breakdown' },
                    { step: 3, title: 'Blindspot', desc: 'Torque gap flagged' },
                    { step: 4, title: 'Score Boost', desc: '+18% percentile' },
                  ].map((it) => (
                    <button
                      key={it.step}
                      onClick={() => setPrepLoopStep(it.step)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        prepLoopStep === it.step
                          ? 'border-[#C87D32] bg-[#FAF5EB] dark:bg-[#111A2E] ring-2 ring-[#C87D32]/30 shadow-sm'
                          : 'border-[#C87D32]/20 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="font-mono text-[9px] text-[#C87D32]">Step 0{it.step}</div>
                      <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">{it.title}</div>
                      <div className="text-[10px] text-[#5A6578]">{it.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------------------- */}
            {/* CHAPTER 10 — LAW EDUCATION */}
            {/* ------------------------------------------------------------------- */}
            <section id="chapter-10" className="scroll-mt-28 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                  10 / LAW EDUCATION
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  Built for legal learning.
                </h2>
                <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
                  Dedicated legal AI trained on Bare Acts, AIR judgments, and judicial syllabi.
                </p>
              </div>

              <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 space-y-3 font-serif">
                <div className="flex items-center justify-between text-xs font-mono pb-1 border-b border-[#C87D32]/20">
                  <span className="text-[#C87D32]">CONSTITUTIONAL RETRIEVAL</span>
                  <div className="flex items-center gap-1.5">
                    {(['basic_structure', 'due_process', 'judicial_review'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setLawTab(tab)}
                        className={`px-2.5 py-0.5 rounded-full border text-xs capitalize ${
                          lawTab === tab ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                        }`}
                      >
                        {tab.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between font-mono text-[9px] text-[#C87D32]">
                    <span>
                      {lawTab === 'basic_structure' && 'AIR 1973 SC 1461 • Kesavananda Bharati'}
                      {lawTab === 'due_process' && 'AIR 1978 SC 597 • Maneka Gandhi'}
                      {lawTab === 'judicial_review' && 'AIR 1980 SC 1789 • Minerva Mills'}
                    </span>
                    <span className="text-emerald-600 font-bold">BCI Verified ✓</span>
                  </div>
                  <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                    {lawTab === 'basic_structure' && 'Article 368 limits: Cannot dismantle democratic basic structure.'}
                    {lawTab === 'due_process' && 'Procedure established by law under Art. 21 must be fair and just.'}
                    {lawTab === 'judicial_review' && 'Judicial review retained as unamendable pillar.'}
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================================== */}
            {/* 28. CONVERGENCE FINALE */}
            {/* =================================================================== */}
            <section className="pt-12 pb-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full border-2 border-[#C87D32] flex items-center justify-center bg-[#FAF5EB] dark:bg-[#0E1524] shadow-md">
                <span className="font-editorial text-xl font-bold text-[#C87D32] dark:text-[#E5A955] italic">
                  Æ
                </span>
              </div>

              <div className="font-mono text-[10px] tracking-widest text-[#C87D32] uppercase">
                AI-EDUCATION OPERATING SYSTEM
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                One campus. <br />
                <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                  One intelligent system.
                </span>
              </h2>

              <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-md mx-auto">
                10 connected capabilities working seamlessly as your digital campus infrastructure.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onOpenDemo}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-editorial text-sm font-bold italic tracking-wide hover:bg-[#C87D32] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('home')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#C87D32]/50 hover:border-[#C87D32] text-[#121926] dark:text-[#F5EFE6] font-editorial text-sm italic hover:bg-[#FAF5EB]/60 dark:hover:bg-[#111A2E]/60 transition-all"
                >
                  <span>Explore Campus Home</span>
                </button>
              </div>
            </section>

          </main>
        </div>
      </div>

    </div>
  );
};
