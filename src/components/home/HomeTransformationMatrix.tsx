import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  BarChart3,
} from 'lucide-react';
import type { PageId } from '../../types';
import {
  ScrollReveal,
  RevealEyebrow,
  RevealHeading,
  RevealCTA,
  RevealVisual
} from '../common/ScrollReveal';

interface HomeTransformationMatrixProps {
  onNavigate: (page: PageId) => void;
}

interface TransformationSlide {
  id: string;
  tabLabel: string;
  shortNum: string;
  category: string;
  title: string;
  tagline: string;
  legacy: {
    title: string;
    desc: string;
    impact: string;
    stat: string;
  };
  unified: {
    title: string;
    desc: string;
    impact: string;
    stat: string;
  };
  benchmark: {
    metric: string;
    gain: string;
    legacyVal: string;
    legacyPct: number;
    unifiedVal: string;
    unifiedPct: number;
  };
  telemetry: {
    channel: string;
    protocol: string;
    latency: string;
    status: string;
  };
}

const slides: TransformationSlide[] = [
  {
    id: 'bus',
    shortNum: '01',
    tabLabel: 'Institutional Bus',
    category: 'Campus Operating System',
    title: 'Single Sovereign Data Plane',
    tagline: 'Admissions, academics, fees, and attendance unified onto one zero-latency data plane.',
    legacy: {
      title: '7+ Disjointed Portals',
      desc: 'Separate standalone software for fees, RFID bus tracking, and unverified WhatsApp groups that never sync.',
      impact: '18 hours wasted on manual reconciliation weekly',
      stat: '7 Siloed Tools',
    },
    unified: {
      title: 'Unified Institutional Bus',
      desc: 'All 10 campus departments communicate instantaneously with ledger-backed sovereign records.',
      impact: '86% reduction in administrative overhead',
      stat: '1 Sovereign Plane',
    },
    benchmark: {
      metric: 'Administrative Overhead',
      gain: '-87% Workload',
      legacyVal: '28h / Week (Manual)',
      legacyPct: 85,
      unifiedVal: '3.5h / Week (Automated)',
      unifiedPct: 15,
    },
    telemetry: {
      channel: 'CAMPUS_BUS_01',
      protocol: 'TLS 1.3 // Sovereign Engine',
      latency: '0.04s',
      status: 'Active & Synchronized',
    },
  },
  {
    id: 'tally',
    shortNum: '02',
    tabLabel: 'Tally 2-Way Sync',
    category: 'Financial Ledger Gateway',
    title: 'Autonomous 0.12s Tally Bridge',
    tagline: 'Direct bidirectional XML gateway connecting campus fee counters directly to desktop Tally.',
    legacy: {
      title: 'Manual Tally Re-entry',
      desc: 'Accountants manually retype hundreds of receipts into desktop Tally ledgers every evening.',
      impact: 'Frequent billing discrepancies & delayed audits',
      stat: '42 Discrepancies / Year',
    },
    unified: {
      title: 'Instant 2-Way Tally Gateway',
      desc: 'Fee collections, concessions, and dues push automatically into your Tally XML gateway in 0.12s.',
      impact: '100% error-free financial ledger audits',
      stat: '0.12s Instant Push',
    },
    benchmark: {
      metric: 'Fee Audit Cycle Time',
      gain: 'Real-Time Sync',
      legacyVal: '14 Days / Term (Backlog)',
      legacyPct: 90,
      unifiedVal: 'Instant XML Push (0.12s)',
      unifiedPct: 5,
    },
    telemetry: {
      channel: 'TALLY_XML_CONNECTOR',
      protocol: 'Port 9000 // Two-Way XML',
      latency: '0.12s',
      status: 'Zero Discrepancy',
    },
  },
  {
    id: 'substitutions',
    shortNum: '03',
    tabLabel: 'Auto Substitutions',
    category: 'Academic Scheduling Engine',
    title: 'Real-Time Timetable Allocation',
    tagline: 'Algorithmic proxy reallocation matching qualified faculty, grade level, and syllabus pacing in seconds.',
    legacy: {
      title: 'Chaotic Morning Proxies',
      desc: 'Unannounced teacher leaves cause noisy free periods, scrambled schedules, and delayed syllabus.',
      impact: '30+ lost classroom hours every academic term',
      stat: '45m Manual Chaos',
    },
    unified: {
      title: 'Autonomous Substitutions',
      desc: 'Engine reassigns qualified faculty matching syllabus pacing in under 3 seconds with instant WhatsApp alerts.',
      impact: '0 missed classroom periods guaranteed',
      stat: '100% Period Coverage',
    },
    benchmark: {
      metric: 'Proxy Assignment Speed',
      gain: 'Zero Free Periods',
      legacyVal: '45m Manual Scramble',
      legacyPct: 80,
      unifiedVal: '0.04s Autonomous',
      unifiedPct: 4,
    },
    telemetry: {
      channel: 'TIMETABLE_DISPATCHER',
      protocol: 'Graph Matcher // Pacing Index',
      latency: '0.04s',
      status: '100% Period Coverage',
    },
  },
  {
    id: 'ai-buddy',
    shortNum: '04',
    tabLabel: 'Socratic AI Buddy',
    category: 'Pedagogical Intelligence',
    title: 'NCERT-Grounded Study Companion',
    tagline: '24/7 personal student tutor strictly anchored in verified textbooks with chapter and page citations.',
    legacy: {
      title: 'Ungrounded AI Hallucinations',
      desc: 'Generic AI hallucinates unverified formulas and explanations outside the school board syllabus.',
      impact: 'Student confusion & heavy dependence on private tuitions',
      stat: '0 Syllabus Grounding',
    },
    unified: {
      title: 'NCERT-Grounded AI Buddy',
      desc: 'Socratic answers strictly anchored in syllabus textbooks with verified page, chapter, and diagram citations.',
      impact: 'Measurable rise in term exam comprehension',
      stat: '100% Verified Citations',
    },
    benchmark: {
      metric: 'Syllabus Grounding Accuracy',
      gain: 'Strict Verification',
      legacyVal: '12% Grounding (Generic AI)',
      legacyPct: 15,
      unifiedVal: '99.8% Grounding (Socratic)',
      unifiedPct: 99,
    },
    telemetry: {
      channel: 'SOCRATIC_CORE',
      protocol: 'Vector Index // NCERT / ICSE',
      latency: '0.18s',
      status: 'Board Verified',
    },
  },
];

export const HomeTransformationMatrix: React.FC<HomeTransformationMatrixProps> = ({
  onNavigate,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const SLIDE_DURATION = 4200; // 4.2s per slide auto-rotation

  // Auto-play sliding window continuously every 4.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const goToSlide = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' as const },
    }),
  };

  return (
    <ScrollReveal
      as="section"
      yOffset={35}
      duration={0.7}
      className="py-20 border-t border-[#C87D32]/15 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-2">
            <RevealEyebrow>
              <span className="text-xs font-bold tracking-widest text-[#C87D32] dark:text-[#E5A955] uppercase block font-sans">
                03 / THE TRANSFORMATION
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                From fragmented tools <br />
                <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                  to unified campus intelligence.
                </span>
              </h2>
            </RevealHeading>
          </div>

          {/* Sliding Window Pagination & Arrow Controls */}
          <RevealCTA className="flex items-center gap-3 self-start md:self-auto font-sans">
            <span className="text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE]">
              <strong className="text-[#121926] dark:text-[#F5EFE6] font-bold">
                {current.shortNum}
              </strong>{' '}
              / 04
            </span>
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#0A101D] shadow-sm">
              <button
                onClick={handlePrev}
                aria-label="Previous Window"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#5A6578] hover:text-[#121926] dark:hover:text-[#F5EFE6] hover:bg-[#C87D32]/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Window"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#5A6578] hover:text-[#121926] dark:hover:text-[#F5EFE6] hover:bg-[#C87D32]/10 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </RevealCTA>
        </div>

        {/* ========================================================================= */}
        {/* THE SLIDING WINDOW (EXECUTIVE CONSOLE) - SEAMLESS OPEN LAYOUT              */}
        {/* ========================================================================= */}
        <RevealVisual className="w-full font-sans">

          {/* 1. Window Header / Tab Selector Bar */}
          <div className="pb-4 border-b border-[#C87D32]/20 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
            {/* Window Pills / Tabs */}
            <div className="flex items-center gap-2">
              {slides.map((s, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${isActive
                      ? 'text-[#121926] dark:text-[#F5EFE6] font-bold shadow-sm'
                      : 'text-[#5A6578] dark:text-[#9DA9BE] hover:text-[#121926] dark:hover:text-[#F5EFE6]'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeWindowTab"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-[#C87D32]/15 border border-[#C87D32]/40"
                      />
                    )}
                    <span className="relative z-10 font-mono text-[11px] text-[#C87D32]">
                      {s.shortNum}
                    </span>
                    <span className="relative z-10">{s.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Operational Status Tag */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE SYSTEM DISPATCH</span>
            </div>
          </div>

          {/* 2. Window Sliding Body */}
          <div className="py-8 min-h-[380px] flex items-center relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              >
                {/* Left Side: Transformation Story & Contrast (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider">
                      <span>{current.category}</span>
                      <span>•</span>
                      <span>SLIDE {current.shortNum}</span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                      {current.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] leading-relaxed">
                      {current.tagline}
                    </p>
                  </div>

                  {/* Clean Side-by-Side Dual Contrast (No clutter!) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Legacy Problem */}
                    <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                          <XCircle className="w-3.5 h-3.5" />
                          Legacy Friction
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400">
                          {current.legacy.stat}
                        </span>
                      </div>
                      <div className="font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                        {current.legacy.title}
                      </div>
                      <p className="text-xs text-[#526071] dark:text-[#A6B4C9] leading-relaxed">
                        {current.legacy.desc}
                      </p>
                      <div className="pt-2 text-[11px] font-semibold text-rose-600 dark:text-rose-400 border-t border-rose-500/15">
                        {current.legacy.impact}
                      </div>
                    </div>

                    {/* Unified Solution */}
                    <div className="p-4 rounded-xl border border-emerald-600/30 bg-emerald-500/5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Unified Intelligence
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold">
                          {current.unified.stat}
                        </span>
                      </div>
                      <div className="font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                        {current.unified.title}
                      </div>
                      <p className="text-xs text-[#526071] dark:text-[#A6B4C9] leading-relaxed">
                        {current.unified.desc}
                      </p>
                      <div className="pt-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 border-t border-emerald-600/15">
                        {current.unified.impact}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Integrated Benchmark Impact & Live Telemetry (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#070B13] shadow-md space-y-6">
                  {/* Gauge Header */}
                  <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-3">
                    <span className="text-xs font-bold text-[#C87D32] uppercase tracking-wider flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      BENCHMARK GAIN
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      {current.benchmark.gain}
                    </span>
                  </div>

                  {/* Comparison Bars */}
                  <div className="space-y-4">
                    <div className="text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                      {current.benchmark.metric}
                    </div>

                    {/* Legacy Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-[#5A6578] dark:text-[#9DA9BE]">
                        <span>Legacy Stack</span>
                        <span className="text-rose-500 font-mono font-bold">
                          {current.benchmark.legacyVal}
                        </span>
                      </div>
                      <div className="w-full bg-[#121926]/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${current.benchmark.legacyPct}%` }}
                          className="bg-rose-500/80 h-full rounded-full transition-all duration-700"
                        />
                      </div>
                    </div>

                    {/* Unified Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-[#5A6578] dark:text-[#9DA9BE]">
                        <span className="font-semibold text-[#121926] dark:text-[#F5EFE6]">
                          Unified OS
                        </span>
                        <span className="text-emerald-600 font-mono font-bold">
                          {current.benchmark.unifiedVal}
                        </span>
                      </div>
                      <div className="w-full bg-[#121926]/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${current.benchmark.unifiedPct}%` }}
                          className="bg-emerald-500 h-full rounded-full transition-all duration-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Real-Time Live Conduit Telemetry Box */}
                  <div className="pt-3 border-t border-[#C87D32]/15 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#5A6578] dark:text-[#9DA9BE]">
                      <span className="flex items-center gap-1.5 text-[#C87D32] font-semibold">
                        <Activity className="w-3 h-3 animate-pulse" />
                        CHANNEL: {current.telemetry.channel}
                      </span>
                      <span>LATENCY: {current.telemetry.latency}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[#121926]/5 dark:bg-white/5 border border-[#C87D32]/10">
                      <span className="text-[#5A6578] dark:text-[#9DA9BE] text-[11px]">
                        {current.telemetry.protocol}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {current.telemetry.status}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Jump Button */}
                  <button
                    onClick={() => onNavigate('features')}
                    className="w-full py-2.5 rounded-xl border border-[#C87D32]/30 hover:border-[#C87D32] bg-[#C87D32]/10 hover:bg-[#C87D32]/20 text-[#8C6B28] dark:text-[#E5A955] text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Inspect Capability Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. Window Bottom Slide Progress Bar */}
          <div className="h-1.5 w-full bg-[#121926]/10 dark:bg-white/10 grid grid-cols-4 rounded-full overflow-hidden mt-6">
            {slides.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="h-full border-r last:border-r-0 border-white/20 dark:border-black/20 relative cursor-pointer overflow-hidden"
                >
                  {isActive ? (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4.2, ease: 'linear' }}
                      className="h-full bg-[#C87D32]"
                    />
                  ) : (
                    <div
                      className={`h-full ${activeIndex > idx ? 'bg-[#C87D32]/40' : 'bg-transparent'
                        }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </RevealVisual>

      </div>
    </ScrollReveal>
  );
};

