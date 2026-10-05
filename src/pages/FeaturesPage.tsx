import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
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

  // Scroll spy using IntersectionObserver
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
            rootMargin: '-35% 0px -40% 0px',
            threshold: 0.1,
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
  const [assessStep, setAssessStep] = useState<number>(3); // 1: Paper, 2: Student Answer, 3: AI Eval, 4: Sealed Report

  // Chapter 04: Admissions Journey Step
  const [admissionsStep, setAdmissionsStep] = useState<number>(4);

  // Chapter 05: Finance & Tally Sync State
  const [isSyncingLedger, setIsSyncingLedger] = useState<boolean>(false);

  // Chapter 06: Campus Communication Active Filter
  const [commSender, setCommSender] = useState<'all' | 'principal' | 'teacher' | 'parent'>('all');

  // Chapter 07: Parent Portal Notification Type
  const [parentTab, setParentTab] = useState<'attendance' | 'fee' | 'notice'>('attendance');

  // Chapter 08: Adaptive Learning Branch
  const [adaptiveBranch, setAdaptiveBranch] = useState<'correct' | 'needs_help'>('correct');

  // Chapter 09: Prep Loop Step
  const [prepLoopStep, setPrepLoopStep] = useState<number>(2);

  // Chapter 10: Law Case Tab
  const [lawTab, setLawTab] = useState<'basic_structure' | 'due_process' | 'judicial_review'>('basic_structure');

  // Automatic proxy simulation trigger on timer for lively academic demo
  const triggerProxySimulation = () => {
    setTimetableState('normal');
    setTimeout(() => setTimetableState('absent'), 600);
    setTimeout(() => setTimetableState('evaluating'), 1600);
    setTimeout(() => setTimetableState('assigned'), 2800);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-500 font-sans relative selection:bg-[#C87D32] selection:text-white"
    >
      {/* ========================================================================= */}
      {/* FAINT BACKGROUND ACADEMIC WATERMARK WORDS (Low Opacity Notebook Layer) */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden flex flex-col justify-between py-24 px-8 opacity-[0.025] dark:opacity-[0.035]">
        <div className="font-editorial text-[9vw] font-bold tracking-widest text-[#121926] dark:text-white leading-none">
          CAMPUS
        </div>
        <div className="font-editorial text-[8.5vw] font-bold tracking-widest text-right text-[#121926] dark:text-white leading-none">
          KNOWLEDGE
        </div>
        <div className="font-editorial text-[9vw] font-bold tracking-widest text-[#121926] dark:text-white leading-none">
          CURRICULUM
        </div>
        <div className="font-editorial text-[8.5vw] font-bold tracking-widest text-right text-[#121926] dark:text-white leading-none">
          INTELLIGENCE
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Minimal Editorial (NO HORIZONTAL PILLS) */}
      {/* ========================================================================= */}
      <section className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-10 text-center space-y-4 relative z-10">
        
        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#5A6578] dark:text-[#9DA9BE]"
        >
          <span className="w-2 h-2 rounded-full bg-[#C87D32]" />
          <span className="font-mono text-[11px] text-[#C87D32] dark:text-[#E5A955]">
            CAPABILITIES JOURNEY
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-editorial text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-[#121926] dark:text-[#F5EFE6] leading-[1.06] tracking-tight"
        >
          Everything your campus needs, <br />
          <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
            in one intelligent system.
          </span>
        </motion.h1>

        {/* 1-2 Line Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl mx-auto"
        >
          10 connected capabilities for modern education.
        </motion.p>

        {/* Subtle scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="pt-6 flex justify-center"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C87D32] dark:text-[#E5A955] flex items-center gap-1.5 opacity-80">
            <span>Scroll through the 10 chapters</span>
            <span className="animate-bounce">↓</span>
          </span>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STICKY VERTICAL CHAPTER RAIL (DESKTOP: Fixed on Left Notebook Canvas) */}
      {/* Strictly NO card, NO background box, NO shadow, NO border container */}
      {/* Sits directly on the notebook paper alongside the red guideline */}
      {/* ========================================================================= */}
      <nav
        aria-label="Chapter Index"
        className="hidden lg:block fixed left-4 xl:left-8 top-32 z-30 w-44 pointer-events-auto select-none"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative pl-5 py-2"
        >
          {/* Base Thin Background Line (Top to bottom) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute left-[6.5px] top-2 bottom-2 w-[1px] bg-[#C87D32]/25 dark:bg-[#C87D32]/20 origin-top"
          />

          {/* Dynamic Orange Scroll Progress Line filling down to the active chapter */}
          <div
            className="absolute left-[6.5px] top-2 w-[1.5px] bg-[#C87D32] transition-all duration-400 origin-top"
            style={{
              height: `${(activeChapter / (chapters.length - 1)) * 96}%`,
            }}
          />

          {/* Chapters List with staggered intro animation */}
          <div className="space-y-4">
            {chapters.map((chap, idx) => {
              const isActive = activeChapter === idx;
              const isPast = activeChapter > idx;

              return (
                <motion.button
                  key={chap.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  onClick={() => scrollToChapter(chap.id, idx)}
                  className="group relative flex items-center gap-3 text-left w-full focus:outline-none transition-all duration-300"
                >
                  {/* Timeline Dot Node */}
                  <div
                    className={`absolute -left-[18.5px] rounded-full transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'w-3 h-3 bg-[#C87D32] ring-4 ring-[#FAF5EB] dark:ring-[#070B13] scale-110 shadow-sm'
                        : isPast
                        ? 'w-2 h-2 bg-[#C87D32]/80 ring-2 ring-[#FAF5EB] dark:ring-[#070B13]'
                        : 'w-2 h-2 border border-[#C87D32]/40 bg-[#FAF5EB] dark:bg-[#070B13]'
                    }`}
                  >
                    {isPast && (
                      <Check className="w-1.5 h-1.5 text-white stroke-[3]" />
                    )}
                  </div>

                  {/* Chapter Label and Number */}
                  <div className="flex flex-col transition-all duration-300 pl-1">
                    <span
                      className={`font-mono text-[10px] tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'text-[#C87D32] dark:text-[#E5A955] font-bold translate-x-1'
                          : 'text-[#5A6578]/70 dark:text-[#9DA9BE]/50 group-hover:text-[#121926]'
                      }`}
                    >
                      {chap.num}
                    </span>
                    <span
                      className={`text-xs font-serif leading-tight transition-all duration-200 ${
                        isActive
                          ? 'text-[#121926] dark:text-[#F5EFE6] font-bold translate-x-1'
                          : 'text-[#5A6578]/75 dark:text-[#9DA9BE]/55 group-hover:text-[#121926] dark:group-hover:text-[#F5EFE6]'
                      }`}
                    >
                      {chap.short}
                    </span>
                  </div>

                  {/* Subtle active underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeRailUnderline"
                      className="absolute bottom-0 left-4 right-6 h-[1px] bg-[#C87D32]/50"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. MOBILE STICKY CHAPTER BADGE (Top bar for mobile & tablet) */}
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
      {/* 4. CHAPTER STREAM: Living Directly on the Ruled Notebook Canvas */}
      {/* Minimal Copy: 1 small label, 1 big headline, 1 short description */}
      {/* LARGE ANIMATED PRODUCT SCENE directly on the ruled lines */}
      {/* ========================================================================= */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:pl-48 xl:pl-56 space-y-40 pb-36 relative z-10">
        
        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 01 — ACADEMIC OPERATIONS */}
        {/* Timetable Simulation: Absent -> AI matching -> Proxy Assigned */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-01" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              01 / ACADEMIC OPERATIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Keep every class moving.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Smart scheduling, teacher availability and automatic proxy matching.
            </motion.p>
          </div>

          {/* Animated Timetable Demonstration directly on notebook canvas */}
          <div className="space-y-4 pt-2 font-serif">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#C87D32]/20 text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE]">
              <span>Schedule • Availability • Proxy Matching</span>
              <button
                onClick={triggerProxySimulation}
                className="px-3.5 py-1.5 rounded-full border border-[#C87D32] bg-[#FAF5EB] dark:bg-[#111A2E] text-xs font-editorial italic text-[#121926] dark:text-[#F5EFE6] hover:bg-[#C87D32] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
              >
                <RefreshCw className={`w-3 h-3 text-[#C87D32] ${timetableState === 'evaluating' ? 'animate-spin' : ''}`} />
                <span>Re-simulate Proxy Match</span>
              </button>
            </div>

            {/* Academic Timetable Grid on Ruled Paper */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              
              {/* Slot 1: Unchanged Normal Class */}
              <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB]/80 dark:bg-[#0E1524]/80 text-xs space-y-1.5 relative overflow-hidden">
                <div className="font-mono text-[10px] text-[#C87D32]">Monday 08:30 • Room 101</div>
                <div className="font-editorial text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">History II</div>
                <div className="italic text-[#526071] dark:text-[#A6B4C9]">Prof. K. Sen • Assigned</div>
                <div className="pt-2 text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>On Schedule</span>
                </div>
              </div>

              {/* Slot 2: Active Simulation Slot */}
              <div className={`p-4 rounded-xl border transition-all duration-500 text-xs space-y-1.5 relative overflow-hidden ${
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
                      <span>EVALUATING FACULTY...</span>
                    </span>
                  )}
                  {timetableState === 'absent' && (
                    <span className="text-[10px] font-mono text-rose-500 font-bold">
                      TEACHER UNAVAILABLE
                    </span>
                  )}
                </div>

                <div className="font-editorial text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                  Mathematics
                </div>

                <div className="italic text-[#526071] dark:text-[#A6B4C9] flex items-center justify-between">
                  <div>
                    {timetableState === 'assigned' ? (
                      <span className="font-bold text-[#0284C7] dark:text-[#38BDF8]">Dr. Mehta (Proxy Matched)</span>
                    ) : timetableState === 'evaluating' ? (
                      <span className="text-amber-600">Comparing free slots...</span>
                    ) : (
                      <span>Teacher: Sharma</span>
                    )}
                  </div>
                  {(timetableState === 'absent' || timetableState === 'assigned' || timetableState === 'evaluating') && (
                    <span className="line-through text-rose-500 text-[11px]">Sharma Absent</span>
                  )}
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#5A6578] dark:text-[#9DA9BE] flex items-center justify-between">
                  <span>Match factor: 98% syllabus alignment</span>
                  <span>Room 204</span>
                </div>
              </div>

              {/* Slot 3: Unchanged Normal Class */}
              <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB]/80 dark:bg-[#0E1524]/80 text-xs space-y-1.5 relative overflow-hidden">
                <div className="font-mono text-[10px] text-[#C87D32]">Monday 10:15 • Room 102</div>
                <div className="font-editorial text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">Physics Lab</div>
                <div className="italic text-[#526071] dark:text-[#A6B4C9]">Dr. V. Prasad • Assigned</div>
                <div className="pt-2 text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>On Schedule</span>
                </div>
              </div>

            </div>

            {/* Subtle visual connector between Chapter 1 and Chapter 2 */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#C87D32]/40 to-[#38BDF8]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 02 — AI STUDY BUDDY */}
        {/* Academic Textbook Scene: Question -> AI Answer -> Source Grounding */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-02" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              02 / AI STUDY BUDDY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Answers grounded in your curriculum.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Direct source citations with chapter, section and exact page grounding.
            </motion.p>
          </div>

          {/* Academic Textbook on Notebook Canvas */}
          <div className="space-y-4 pt-2 font-serif">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#C87D32]/20">
              <span className="text-xs font-mono text-[#C87D32] dark:text-[#E5A955] uppercase">
                Curriculum-grounded AI
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStudySubject('biology')}
                  className={`px-3 py-1 rounded-full text-xs font-editorial italic transition-all ${
                    studySubject === 'biology' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Biology
                </button>
                <button
                  onClick={() => setStudySubject('law')}
                  className={`px-3 py-1 rounded-full text-xs font-editorial italic transition-all ${
                    studySubject === 'law' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Law
                </button>
                <button
                  onClick={() => setStudySubject('physics')}
                  className={`px-3 py-1 rounded-full text-xs font-editorial italic transition-all ${
                    studySubject === 'physics' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Physics
                </button>
              </div>
            </div>

            {/* Laid Open Textbook Mockup resting on notebook */}
            <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-sm">
              
              {/* Textbook Header / Spine Indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#5A6578] dark:text-[#9DA9BE] pb-3 border-b border-[#C87D32]/15">
                <span>TEXTBOOK FOLIO • 12TH STANDARD ACADEMIC EDITION</span>
                <span className="text-[#C87D32]">
                  {studySubject === 'biology' && 'Chapter 04 • Cellular Energetics • p. 87'}
                  {studySubject === 'law' && 'Chapter 08 • Constitutional Powers • p. 144'}
                  {studySubject === 'physics' && 'Chapter 07 • Rotational Dynamics • p. 158'}
                </span>
              </div>

              {/* Student Query */}
              <div className="flex items-start sm:items-center gap-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C87D32]/10 text-[#C87D32] font-bold shrink-0">
                  QUESTION
                </span>
                <div className="font-editorial text-xl sm:text-2xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                  {studySubject === 'biology' && '“Explain the light-dependent reactions of photosynthesis.”'}
                  {studySubject === 'law' && '“Explain the doctrine of Basic Structure under Article 368.”'}
                  {studySubject === 'physics' && '“Derive the relation between torque and angular momentum.”'}
                </div>
              </div>

              {/* AI Answer Grounded in Textbook */}
              <div className="p-5 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 space-y-3 relative">
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-editorial font-bold text-[#121926] dark:text-[#F5EFE6]">
                    <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                    <span>AI Study Buddy (Verified Grounding)</span>
                  </div>

                  <span className="px-3 py-0.5 rounded-full border border-[#38BDF8]/60 text-[11px] font-mono text-[#0284C7] dark:text-[#38BDF8] flex items-center gap-1 font-semibold bg-[#FAF5EB] dark:bg-[#070B13]">
                    <Bookmark className="w-3 h-3" />
                    <span>
                      {studySubject === 'biology' && 'Chapter 04 • Section 02 • Page 87'}
                      {studySubject === 'law' && 'Chapter 08 • Section 03 • Page 144'}
                      {studySubject === 'physics' && 'Chapter 07 • Section 05 • Page 158'}
                    </span>
                  </span>
                </div>

                <p className="text-sm italic text-[#121926] dark:text-[#F5EFE6] leading-relaxed">
                  {studySubject === 'biology' && '“Light reactions occur in the thylakoid membrane where photons excite chlorophyll in Photosystem II. Photolysis of water releases O₂ while electrons flow through cyt-b6f to generate NADPH and a proton gradient powering ATP synthase.”'}
                  {studySubject === 'law' && '“Affirmed by the 13-judge bench in Kesavananda Bharati (1973), Parliament possesses constituent amending power under Article 368, but cannot alter the fundamental framework or basic features of the Constitution.”'}
                  {studySubject === 'physics' && '“Net external torque equals the time rate of change of angular momentum: τ_ext = dL/dt. When external torque is zero, system angular momentum is strictly conserved across all inertial frames.”'}
                </p>

                {/* Animated Connecting Arrow back to Source Citation */}
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#0284C7] dark:text-[#38BDF8]">
                  <span>Source lineage:</span>
                  <span className="font-semibold underline">QUESTION → AI ANSWER → TEXTBOOK SOURCE</span>
                  <span>✓</span>
                </div>
              </div>

            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#38BDF8]/40 to-[#C87D32]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 03 — ASSESSMENTS */}
        {/* Examination Paper Scene: Handwritten marks, AI evaluation & seal */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-03" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              03 / ASSESSMENTS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Assessment without the busywork.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              From answer sheets to cryptographically sealed report cards.
            </motion.p>
          </div>

          {/* Authentic Ruled Examination Paper with Handwritten Annotations */}
          <div className="space-y-4 pt-2 font-serif">
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
              {['Question Paper', 'Student Answers', 'AI Evaluation', 'Sealed Report Card'].map((s, i) => (
                <button
                  key={s}
                  onClick={() => setAssessStep(i + 1)}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    assessStep === i + 1
                      ? 'border-[#C87D32] bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold'
                      : 'border-[#C87D32]/25 text-[#5A6578] hover:text-[#121926]'
                  }`}
                >
                  0{i + 1} {s}
                </button>
              ))}
            </div>

            {/* Ruled Exam Sheet */}
            <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#C87D32]/20 text-xs font-mono">
                <div>
                  <span className="font-bold text-[#121926] dark:text-[#F5EFE6]">ANNUAL MID-TERM EVALUATION</span>
                  <div className="text-[#5A6578] text-[10px]">Candidate Roll #2024-B-14 • Physics Advanced</div>
                </div>
                <div className="text-right">
                  <span className="text-[#C87D32] font-bold">MAX MARKS: 100</span>
                  <div className="text-[10px] text-emerald-600 font-mono">AI Evaluator #92-VERIFIED</div>
                </div>
              </div>

              {/* Problem 01 Answer with Red-Ink Step Marks */}
              <div className="p-4 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-2 text-xs">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#5A6578]">
                  <span>Question 4: Calculate the moment of inertia for a hollow cylinder.</span>
                  <span className="text-rose-600 dark:text-rose-400 font-bold font-serif text-sm">
                    +5 / 5 (Full Step Marks)
                  </span>
                </div>
                <p className="italic text-[#121926] dark:text-[#F5EFE6] leading-relaxed">
                  Student Derivation: I = ∫ r² dm = M·R² for thin shell. Hand-written integral verified step-by-step.
                </p>
                <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span>✓ Derivation valid</span>
                  <span>✓ Units verified (kg·m²)</span>
                  <span>✓ Formula syntax matched curriculum rubric</span>
                </div>
              </div>

              {/* Summary Grade Card Formation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                  <div className="font-mono text-[10px] text-[#5A6578]">Subject Breakdown</div>
                  <div className="font-editorial text-lg font-bold text-[#121926] dark:text-[#F5EFE6] mt-0.5">Physics • 94/100</div>
                  <div className="italic text-[#C87D32] mt-0.5">Grade A+ (Distinction)</div>
                </div>
                <div className="p-3.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                  <div className="font-mono text-[10px] text-[#5A6578]">Batch Ranking</div>
                  <div className="font-editorial text-lg font-bold text-[#121926] dark:text-[#F5EFE6] mt-0.5">Rank 03 / 184</div>
                  <div className="italic text-emerald-600 mt-0.5">Top 2% percentile in cohort</div>
                </div>
                <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20">
                  <div className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400">Cryptographic Seal</div>
                  <div className="font-editorial text-lg font-bold text-[#121926] dark:text-[#F5EFE6] mt-0.5">Controller Sealed</div>
                  <div className="italic text-[#526071] dark:text-[#A6B4C9] mt-0.5">Dispatched to Parent Portal</div>
                </div>
              </div>

            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#C87D32]/40 to-[#38BDF8]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 04 — ADMISSIONS & EXAMS */}
        {/* Single Continuous Animated Line with 8 sequential stages */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-04" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              04 / ADMISSIONS & EXAMS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              From application to result.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              One continuous verified pipeline: biometric QR tickets to instant results.
            </motion.p>
          </div>

          {/* Sequential Journey Across Single Continuous Line (NOT 8 cards) */}
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 font-serif">
            
            <div className="text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] flex items-center justify-between pb-2 border-b border-[#C87D32]/20">
              <span>EXAMINATION PIPELINE TRACKER</span>
              <span className="text-[#C87D32] font-semibold">Continuous End-to-End Line</span>
            </div>

            {/* Single continuous animated line with milestone nodes */}
            <div className="relative py-6">
              
              {/* The Single Continuous Horizontal Line */}
              <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-[#C87D32]/25 -translate-y-1/2" />
              <div
                className="absolute top-1/2 left-4 h-[2.5px] bg-[#C87D32] -translate-y-1/2 transition-all duration-500"
                style={{ width: `${(admissionsStep / 8) * 94}%` }}
              />

              {/* 8 Milestone Stages along the single line */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 relative z-10 text-center">
                {[
                  'Application',
                  'Verification',
                  'Hall Ticket',
                  'QR Check',
                  'Exam',
                  'Submission',
                  'AI Eval',
                  'Result',
                ].map((stageName, i) => {
                  const isDone = i < admissionsStep;
                  const isCurrent = i === admissionsStep - 1;

                  return (
                    <button
                      key={stageName}
                      onClick={() => setAdmissionsStep(i + 1)}
                      className="flex flex-col items-center group focus:outline-none"
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] transition-all duration-300 ${
                          isCurrent
                            ? 'bg-[#C87D32] text-white ring-4 ring-[#FAF5EB] dark:ring-[#070B13] scale-110 shadow-md font-bold'
                            : isDone
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#FAF5EB] dark:bg-[#0E1524] border border-[#C87D32]/40 text-[#5A6578]'
                        }`}
                      >
                        {isDone ? '✓' : `0${i + 1}`}
                      </div>
                      <span
                        className={`text-[10px] font-sans mt-2 tracking-tight transition-colors ${
                          isCurrent
                            ? 'font-bold text-[#121926] dark:text-[#F5EFE6]'
                            : 'text-[#5A6578]/80 dark:text-[#9DA9BE]/60'
                        }`}
                      >
                        {stageName}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Active Stage Callout */}
            <div className="p-4 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 text-xs space-y-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#0284C7] dark:text-[#38BDF8]">
                <span>STAGE 0{admissionsStep} AUDIT LOG</span>
                <span>Sub-second biometric check-in active</span>
              </div>
              <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                {admissionsStep === 1 && 'Application Received: Digital form submitted with certified documents.'}
                {admissionsStep === 2 && 'Identity Verification: Automatic Aadhaar / Government ID checksum cleared.'}
                {admissionsStep === 3 && 'Hall Ticket Dispatched: Cryptographic QR ticket assigned to student device.'}
                {admissionsStep === 4 && 'QR Gate Scan: Biometric check-in under 2 seconds. Anti-impersonation verified.'}
                {admissionsStep === 5 && 'Examination In Session: Hall 204, Desk #18. Seating mapped.'}
                {admissionsStep === 6 && 'Submission Logged: Answer sheets scanned and cryptographically timestamped.'}
                {admissionsStep === 7 && 'AI Step Evaluation: Rubric-based step evaluation with faculty oversight.'}
                {admissionsStep === 8 && 'Verified Result Published: Digitally signed score sent to parent & board.'}
              </div>
            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#38BDF8]/40 to-[#C87D32]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 05 — FINANCE & TALLY */}
        {/* Vintage Academic Ledger: Fee -> AI-Education -> Tally */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-05" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              05 / FINANCE & TALLY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Finance that stays in sync.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Student Fee ↓ AI-Education ↓ Tally. Zero manual ledger entries.
            </motion.p>
          </div>

          {/* Vintage Ruled Academic Ledger on Ruled Paper */}
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 font-serif">
            
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#C87D32]/20">
              <span className="text-[#C87D32]">ACADEMIC GENERAL LEDGER • FOLIO #408</span>
              <button
                onClick={() => {
                  setIsSyncingLedger(true);
                  setTimeout(() => setIsSyncingLedger(false), 900);
                }}
                className="px-3.5 py-1 rounded-full border border-[#C87D32] text-xs font-editorial italic hover:bg-[#C87D32] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
              >
                <RefreshCw className={`w-3 h-3 ${isSyncingLedger ? 'animate-spin' : ''}`} />
                <span>Simulate Ingestion</span>
              </button>
            </div>

            {/* Classical Double-entry Ledger Table directly on the canvas */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#C87D32]/30 font-mono text-[10px] text-[#5A6578] dark:text-[#9DA9BE]">
                    <th className="py-2">DATE</th>
                    <th className="py-2">PARTICULARS</th>
                    <th className="py-2">VOUCHER</th>
                    <th className="py-2 text-right">DEBIT (₹)</th>
                    <th className="py-2 text-right">CREDIT (₹)</th>
                    <th className="py-2 text-center">TALLY STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C87D32]/15">
                  <tr>
                    <td className="py-3 font-mono text-[11px]">05-Oct</td>
                    <td className="py-3 font-bold text-[#121926] dark:text-[#F5EFE6]">
                      Term II Tuition Fee (Student #4029)
                    </td>
                    <td className="py-3 font-mono text-[11px] text-[#C87D32]">RCPT-8821</td>
                    <td className="py-3 font-mono text-right text-emerald-600">45,000.00</td>
                    <td className="py-3 font-mono text-right text-[#5A6578]">—</td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">
                        SYNCED ✓
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[11px]">04-Oct</td>
                    <td className="py-3 font-bold text-[#121926] dark:text-[#F5EFE6]">
                      Physics Lab Reagents & Hardware
                    </td>
                    <td className="py-3 font-mono text-[11px] text-[#C87D32]">VCH-1094</td>
                    <td className="py-3 font-mono text-right text-[#5A6578]">—</td>
                    <td className="py-3 font-mono text-right text-rose-600">12,400.00</td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">
                        SYNCED ✓
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Real-time sync flow indicator */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] gap-2 border-t border-[#C87D32]/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Data Flow: FEE RECEIPT ➔ AI-EDUCATION ➔ TALLYPRIME</span>
              </div>
              <span className="text-[#C87D32] font-semibold">Tally Ledger: Zero Discrepancy</span>
            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#C87D32]/40 to-[#38BDF8]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 06 — CAMPUS COMMUNICATION */}
        {/* Illustrated Campus Network: Nodes converge into 3 AI updates */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-06" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              06 / CAMPUS COMMUNICATION
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Every conversation. One campus.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Messages move between leadership, staff, students, and parents.
            </motion.p>
          </div>

          {/* Illustrated Campus Nodes Converging into AI Summary */}
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 font-serif">
            
            <div className="flex items-center justify-between text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] pb-2 border-b border-[#C87D32]/20">
              <span>CAMPUS COMMUNICATION TOPOLOGY</span>
              <span className="text-[#C87D32] font-bold">5 Nodes Active</span>
            </div>

            {/* 5 Illustrated Campus Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
              {[
                { title: 'Principal', role: 'Executive Direction', count: '14 sent' },
                { title: 'Teacher', role: 'Class Logs & Tests', count: '82 sent' },
                { title: 'HOD', role: 'Syllabus Review', count: '29 sent' },
                { title: 'Student', role: 'Queries & Doubts', count: '140 sent' },
                { title: 'Parent', role: 'Confirmations', count: '64 sent' },
              ].map((node) => (
                <div
                  key={node.title}
                  className="p-3.5 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1 shadow-sm"
                >
                  <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                    {node.title}
                  </div>
                  <div className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] leading-tight">
                    {node.role}
                  </div>
                  <div className="font-mono text-[9px] text-[#C87D32] pt-1">
                    {node.count}
                  </div>
                </div>
              ))}
            </div>

            {/* Convergence Box: AI summarizes into 3 Important Updates */}
            <div className="p-5 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 space-y-3 text-xs">
              <div className="font-mono uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] font-bold flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                  <span>AI Executive Brief • 3 Important Updates Today</span>
                </div>
                <span className="text-[10px] text-[#5A6578]">Synthesized from 329 messages</span>
              </div>

              <div className="space-y-2 italic text-[#121926] dark:text-[#F5EFE6] leading-relaxed text-sm">
                <p>1. Class 10-A Math proxy assigned to Dr. Mehta with 0 min loss of instruction.</p>
                <p>2. Term II Fee settlement crossed 94% threshold; automatic receipt notifications dispatched.</p>
                <p>3. Senior Science Olympiad trial rosters published and delivered to 48 candidate families.</p>
              </div>
            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#38BDF8]/40 to-[#C87D32]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 07 — PARENT PORTAL */}
        {/* Phone Interface Mockup resting on notebook */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-07" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              07 / PARENT PORTAL
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Keep parents in the loop.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Instant attendance timestamps, fee receipts, and school updates.
            </motion.p>
          </div>

          {/* Phone Mockup lying directly on the notebook paper */}
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 font-serif">
            
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#C87D32]/20">
              <span className="text-[#C87D32]">PARENT DISPATCH INTERFACE</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setParentTab('attendance')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    parentTab === 'attendance' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Attendance
                </button>
                <button
                  onClick={() => setParentTab('fee')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    parentTab === 'fee' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Fee Receipt
                </button>
                <button
                  onClick={() => setParentTab('notice')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    parentTab === 'notice' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  School Notice
                </button>
              </div>
            </div>

            {/* Phone Frame Mockup */}
            <div className="max-w-md mx-auto rounded-3xl border-2 border-[#121926]/20 dark:border-[#F5EFE6]/20 bg-[#FAF5EB] dark:bg-[#070B13] p-5 shadow-xl space-y-4">
              
              {/* Phone Status Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#5A6578] dark:text-[#9DA9BE] pb-2 border-b border-[#C87D32]/10">
                <span>08:16 AM</span>
                <span className="w-12 h-2.5 rounded-full bg-[#121926]/10 dark:bg-white/10" />
                <span>5G • 98%</span>
              </div>

              {/* Push Notification Banner */}
              <div className="p-4 rounded-2xl border border-[#38BDF8]/40 bg-[#38BDF8]/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#0284C7] dark:text-[#38BDF8] font-bold">
                  <span>AI-EDUCATION PARENT PORTAL</span>
                  <span>Just Now</span>
                </div>
                <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                  {parentTab === 'attendance' && 'Aarav recorded present at Main Gate Biometric Terminal 2.'}
                  {parentTab === 'fee' && 'Term II Fee of ₹45,000 received. GST invoice #INV-89 ready for download.'}
                  {parentTab === 'notice' && 'Annual Sports Day trials begin this Thursday at 09:00 AM.'}
                </div>
                <div className="text-[11px] text-[#5A6578] dark:text-[#A6B4C9] italic">
                  {parentTab === 'attendance' && 'Timestamp: 08:14:22 AM IST • Facial recognition confidence: 99.8%'}
                  {parentTab === 'fee' && 'Payment mode: UPI / Netbanking • Synchronized with TallyPrime'}
                  {parentTab === 'notice' && 'Athletics, Basketball & Swimming rosters attached.'}
                </div>
              </div>

              {/* Bottom Quick Actions */}
              <div className="flex items-center justify-around pt-2 text-[11px] font-mono text-[#C87D32]">
                <span>View Full Record →</span>
                <span>Contact Principal →</span>
              </div>

            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#C87D32]/40 to-[#38BDF8]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 08 — ADAPTIVE LEARNING */}
        {/* Branching Learning Path: Correct vs Needs Help */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-08" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              08 / ADAPTIVE LEARNING
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Learning that adapts.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Dynamic branching paths based on real-time student mastery.
            </motion.p>
          </div>

          {/* Dynamic Branching Path Diagram directly on paper */}
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 font-serif">
            
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#C87D32]/20">
              <span className="text-[#5A6578]">DIAGNOSTIC PATH CALIBRATION</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAdaptiveBranch('correct')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    adaptiveBranch === 'correct' ? 'bg-emerald-600 text-white font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Student Answer: Correct
                </button>
                <button
                  onClick={() => setAdaptiveBranch('needs_help')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    adaptiveBranch === 'needs_help' ? 'bg-rose-600 text-white font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Student Answer: Needs Help
                </button>
              </div>
            </div>

            {/* Branching Path Demonstration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              
              <div className="p-4 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                <div className="font-mono text-[10px] text-[#C87D32]">Stage 1 • Diagnostic Question</div>
                <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                  Quadratic Factorization
                </div>
                <p className="text-[11px] italic text-[#526071] dark:text-[#A6B4C9]">
                  Evaluates procedural memory and sign factoring logic.
                </p>
              </div>

              <div className={`p-4 rounded-xl border transition-all space-y-1 ${
                adaptiveBranch === 'correct'
                  ? 'border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20'
                  : 'border-rose-500/40 bg-rose-50/20 dark:bg-rose-950/20'
              }`}>
                <div className="font-mono text-[10px] text-[#C87D32]">
                  Stage 2 • {adaptiveBranch === 'correct' ? 'Accelerated Track' : 'Diagnostic Remediation'}
                </div>
                <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                  {adaptiveBranch === 'correct'
                    ? 'Higher-order derivation unlocked'
                    : 'Targeted visual decomposition'}
                </div>
                <p className="text-[11px] italic text-[#526071] dark:text-[#A6B4C9]">
                  {adaptiveBranch === 'correct'
                    ? 'Student advances immediately without redundant busywork.'
                    : 'AI isolates sign inversion error and prompts micro-practice.'}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                <div className="font-mono text-[10px] text-[#C87D32]">Stage 3 • Outcome</div>
                <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                  Verified Mastery
                </div>
                <p className="text-[11px] italic text-emerald-600 dark:text-emerald-400">
                  {adaptiveBranch === 'correct'
                    ? 'Mastery score: 98% • Level up'
                    : 'Remediation completed • Returned to main track'}
                </p>
              </div>

            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#38BDF8]/40 to-[#C87D32]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 09 — TUTOR & COMPETITIVE PREP */}
        {/* Visual Learning Loop: Practice -> Analysis -> Blindspot -> Targeted */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-09" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              09 / TUTOR & COMPETITIVE PREP
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              A smarter way to prepare.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Continuous feedback loops for JEE, NEET, CLAT, and board exams.
            </motion.p>
          </div>

          {/* Visual Learning Loop on Canvas */}
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 font-serif">
            
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#C87D32]/20">
              <span className="text-[#C87D32]">CYCLICAL MASTERY LOOP</span>
              <span className="text-[#5A6578]">Step {prepLoopStep} of 4</span>
            </div>

            {/* 4 Loop Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              {[
                { step: 1, title: 'Practice Set', desc: 'Mock examination under timed conditions' },
                { step: 2, title: 'Analysis', desc: 'AI highlights time spent per problem' },
                { step: 3, title: 'Blindspot Found', desc: 'Rotational torque conceptual omission' },
                { step: 4, title: 'Score Boost', desc: '+18% percentile leap on retake' },
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => setPrepLoopStep(item.step)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    prepLoopStep === item.step
                      ? 'border-[#C87D32] bg-[#FAF5EB] dark:bg-[#111A2E] ring-2 ring-[#C87D32]/40 shadow-sm'
                      : 'border-[#C87D32]/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="font-mono text-[10px] text-[#C87D32]">Step 0{item.step}</div>
                  <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6] mt-0.5">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-[#5A6578] dark:text-[#A6B4C9] mt-1 leading-tight">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>

            {/* Continuity Line */}
            <div className="pt-8 flex justify-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#C87D32]/40 to-[#38BDF8]/40" />
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* CHAPTER 10 — LAW EDUCATION */}
        {/* Legal Folio: Case -> Concept -> Question -> Answer -> Revision */}
        {/* ----------------------------------------------------------------------- */}
        <section id="chapter-10" className="min-h-[90vh] flex flex-col justify-center space-y-6 pt-12 relative">
          
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]"
            >
              10 / LAW EDUCATION
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight"
            >
              Built for legal learning.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl"
            >
              Dedicated legal AI trained on Bare Acts, AIR judgments, and judicial syllabi.
            </motion.p>
          </div>

          {/* Legal Folio on Notebook Canvas */}
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-6 sm:p-8 space-y-6 font-serif">
            
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#C87D32]/20">
              <span className="text-[#C87D32]">CONSTITUTIONAL BENCH RETRIEVAL</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLawTab('basic_structure')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    lawTab === 'basic_structure' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Basic Structure
                </button>
                <button
                  onClick={() => setLawTab('due_process')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    lawTab === 'due_process' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Due Process (Art. 21)
                </button>
                <button
                  onClick={() => setLawTab('judicial_review')}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    lawTab === 'judicial_review' ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold' : 'text-[#5A6578]'
                  }`}
                >
                  Judicial Review
                </button>
              </div>
            </div>

            {/* Case Precedent & Bare Act Analysis */}
            <div className="p-5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-2 text-xs">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#C87D32]">
                <span>
                  {lawTab === 'basic_structure' && 'AIR 1973 SC 1461 • Kesavananda Bharati v. State of Kerala'}
                  {lawTab === 'due_process' && 'AIR 1978 SC 597 • Maneka Gandhi v. Union of India'}
                  {lawTab === 'judicial_review' && 'AIR 1980 SC 1789 • Minerva Mills v. Union of India'}
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">BCI Sourced ✓</span>
              </div>
              <div className="font-editorial text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                {lawTab === 'basic_structure' && 'Article 368 constituent limits: Cannot dismantle democratic republic structure.'}
                {lawTab === 'due_process' && 'Procedure established by law under Art. 21 must be just, fair and reasonable.'}
                {lawTab === 'judicial_review' && 'Clauses (4) and (5) of Article 368 struck down to protect judicial oversight.'}
              </div>
              <p className="italic text-[#526071] dark:text-[#A6B4C9] leading-relaxed text-xs">
                {lawTab === 'basic_structure' && 'Precedent applied across 42 constitutional bench judgments; essential syllabus milestone for judicial service aspirants.'}
                {lawTab === 'due_process' && 'Expanded fundamental rights ambit to encompass dignity, privacy, and humane penal treatment.'}
                {lawTab === 'judicial_review' && 'Restored unamendability of fundamental rights balance versus directive principles.'}
              </p>
            </div>

          </div>
        </section>

        {/* ======================================================================= */}
        {/* 28. CONVERGENCE FINALE: One campus. One intelligent system. */}
        {/* All 10 chapter lines converge toward center */}
        {/* ======================================================================= */}
        <section className="pt-28 pb-16 text-center space-y-6 relative">
          
          {/* Animated 10 convergence lines into central emblem */}
          <div className="relative w-48 h-20 mx-auto flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 80">
              {/* 5 lines from left, 5 lines from right */}
              <line x1="10" y1="10" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="10" y1="25" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="10" y1="40" x2="100" y2="40" stroke="#C87D32" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="10" y1="55" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="10" y1="70" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />

              <line x1="190" y1="10" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="190" y1="25" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="190" y1="40" x2="100" y2="40" stroke="#C87D32" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="190" y1="55" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="190" y1="70" x2="100" y2="40" stroke="#C87D32" strokeWidth="1" strokeOpacity="0.4" />
            </svg>

            {/* Central Seal */}
            <div className="w-14 h-14 rounded-full border-2 border-[#C87D32] flex items-center justify-center bg-[#FAF5EB] dark:bg-[#0E1524] shadow-lg relative z-10">
              <span className="font-editorial text-2xl font-bold text-[#C87D32] dark:text-[#E5A955] italic">
                Æ
              </span>
            </div>
          </div>

          <div className="font-mono text-xs tracking-widest text-[#C87D32] uppercase">
            AI-EDUCATION OPERATING SYSTEM
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
            One campus. <br />
            <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
              One intelligent system.
            </span>
          </h2>

          <p className="text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-lg mx-auto">
            10 connected capabilities working seamlessly as your digital campus infrastructure.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-editorial text-base font-bold italic tracking-wide hover:bg-[#C87D32] hover:text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#C87D32]/50 hover:border-[#C87D32] text-[#121926] dark:text-[#F5EFE6] font-editorial text-base italic hover:bg-[#FAF5EB]/60 dark:hover:bg-[#111A2E]/60 transition-all duration-300"
            >
              <span>Explore Campus Home</span>
            </button>
          </div>

        </section>

      </div>

    </div>
  );
};
