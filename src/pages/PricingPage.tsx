import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Check,
  Compass,
  Feather,
  Building2,
  BookOpen,
  Layers,
  Users,
  RotateCw,
  Cpu,
  GraduationCap,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import type { PageId } from '../types';
import { CampusEngraving } from '../components/vintage/CampusEngraving';
import {
  RevealEyebrow,
  RevealHeading,
  RevealDescription,
  RevealVisual,
  RevealCTA,
  ScrollReveal
} from '../components/common/ScrollReveal';

interface PricingPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

// -------------------------------------------------------------
// Interactive Number Counter Component for ₹2.5 Lakh
// -------------------------------------------------------------
const AnimatedSetupCounter: React.FC<{ inView: boolean }> = ({ inView }) => {
  const [displayValue, setDisplayValue] = useState('₹0');

  useEffect(() => {
    if (!inView) return;
    const stages = [
      '₹0',
      '₹50,000',
      '₹1,00,000',
      '₹1,50,000',
      '₹2,00,000',
      '₹2.5 Lakh'
    ];
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index < stages.length) {
        setDisplayValue(stages[index]);
      } else {
        setDisplayValue('₹2.5 Lakh');
        clearInterval(interval);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="relative inline-block">
      <span className="text-6xl sm:text-8xl lg:text-9xl font-bold font-serif text-slate-950 dark:text-slate-50 tracking-tight leading-none">
        {displayValue}
      </span>
      {/* Animated Pen Underline that draws as the count completes */}
      <svg viewBox="0 0 440 24" className="w-full h-5 sm:h-7 text-amber-700 dark:text-amber-400 mt-2 block" fill="none">
        <motion.path
          d="M 4 14 Q 180 3 436 12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
};

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemo, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress across the whole pricing story
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // In-view triggers for key scenes
  const [setupInView, setSetupInView] = useState(false);
  const [activeNetworkNode, setActiveNetworkNode] = useState<string>('ai');
  const [campusStep, setCampusStep] = useState<number>(1);

  // Auto-cycle campus connected nodes in Scene 10
  useEffect(() => {
    const timer = setInterval(() => {
      setCampusStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const campusNodes = [
    { id: 'classrooms', label: 'Classrooms', desc: 'Real-time timetable & proxy engine' },
    { id: 'admin', label: 'Administration', desc: 'Central governance & student ledger' },
    { id: 'finance', label: 'Finance & Tally', desc: '2-way automated XML ledger sync' },
    { id: 'library', label: 'AI Learning', desc: 'Syllabus-grounded study companion' }
  ];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-700 parchment-grain font-serif relative overflow-hidden select-none"
    >
      {/* Top Hairline Progress Indicator */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-600 via-sky-400 to-amber-600 origin-left z-50 pointer-events-none"
      />

      {/* Expansive Screen-Filling Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16 sm:space-y-20">

        {/* =========================================================================
            HERO (SCREEN-FILLING EXPANSIVE TYPOGRAPHY)
        ========================================================================= */}
        <section className="relative w-full overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28 lg:pb-32 text-center space-y-6 max-w-5xl mx-auto mb-10 sm:mb-16">
          {/* Background Watermark (Hero Section Only) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
            <div className="font-serif text-[18vw] lg:text-[20vw] font-bold tracking-widest text-[#121926] dark:text-[#F5EFE6] leading-none uppercase text-center px-4 select-none opacity-[0.07] dark:opacity-[0.09]">
              PRICING
            </div>
          </div>

          {/* Blue AI Traveling Particle */}
          <div className="relative w-full max-w-2xl mx-auto h-4 overflow-hidden pointer-events-none">
            <motion.div
              className="w-3.5 h-3.5 rounded-full bg-sky-500 dark:bg-sky-400 shadow-[0_0_16px_#38BDF8]"
              animate={{
                x: [-60, 680],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-xs sm:text-base font-mono uppercase tracking-[0.35em] font-bold text-amber-900 dark:text-amber-400">
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              ✦
            </motion.span>
            <span>THE INSTITUTIONAL LEDGER</span>
            <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              ✦
            </motion.span>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-950 dark:text-slate-50 leading-[1.08]"
          >
            Simple pricing.
            <br />
            <span className="italic font-normal text-amber-800 dark:text-amber-300">
              Built for your campus.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-slate-800 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Start with the essentials. Add more as your institution grows.
          </motion.p>

          {/* Animated SVG Ink Line Drawing Across */}
          <div className="pt-6 w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 800 12" className="w-full h-3 text-amber-700/60 dark:text-amber-400/60" fill="none">
              <motion.path
                d="M 10 6 L 790 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </svg>
          </div>

        </section>

        {/* =========================================================================
            1. MONTHLY RECORD (₹500 / month) — FIRST SECTION AS REQUESTED
        ========================================================================= */}
        <section className="py-10 space-y-8 w-full">

          <RevealEyebrow>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-amber-900 dark:text-amber-400">
              <Calendar className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>01 / THE MONTHLY RECORD • MONTHLY PLATFORM</span>
            </div>
          </RevealEyebrow>

          <RevealHeading>
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6 border-b-2 border-amber-900/30 dark:border-amber-400/30 pb-6 w-full">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl sm:text-8xl font-bold font-serif text-slate-950 dark:text-slate-50 tracking-tight">
                  ₹500
                </span>
                <span className="text-2xl sm:text-4xl font-sans font-semibold text-slate-800 dark:text-slate-200">
                  / month
                </span>
                {/* Rotating recurring icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="ml-3 text-amber-800 dark:text-amber-300"
                  title="Continuous Recurring Platform Cycle"
                >
                  <RotateCw className="w-6 h-6 font-bold" />
                </motion.div>
              </div>

              <div className="text-lg sm:text-xl font-serif font-semibold text-amber-900 dark:text-amber-300 italic">
                Your basic platform fee.
              </div>
            </div>
          </RevealHeading>

          {/* Continuous Moving Months Timeline Track Across Screen */}
          <RevealVisual>
            <div className="relative overflow-hidden py-4 border-y-2 border-amber-900/20 dark:border-amber-400/20 w-full">
              <motion.div
                className="flex gap-14 whitespace-nowrap font-mono text-base font-bold text-amber-950 dark:text-amber-300"
                animate={{ x: [0, -420] }}
                transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
              >
                {[...Array(4)].map((_, loopIdx) => (
                  <div key={loopIdx} className="flex gap-14 items-center">
                    <span>JANUARY</span>
                    <span className="text-amber-600 dark:text-amber-500 font-bold">──→</span>
                    <span>FEBRUARY</span>
                    <span className="text-amber-600 dark:text-amber-500 font-bold">──→</span>
                    <span>MARCH</span>
                    <span className="text-amber-600 dark:text-amber-500 font-bold">──→</span>
                    <span>APRIL</span>
                    <span className="text-amber-600 dark:text-amber-500 font-bold">──→</span>
                    <span>MAY</span>
                    <span className="text-amber-600 dark:text-amber-500 font-bold">──→</span>
                    <span>JUNE</span>
                    <span className="text-amber-600 dark:text-amber-500 font-bold">──→</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <p className="text-base sm:text-lg font-serif font-medium text-slate-800 dark:text-slate-200 mt-4">
              Maintains continuous cloud uptime, security updates, and day-to-day administrative connectivity.
            </p>
          </RevealVisual>

        </section>

        {/* Divider */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-800/30 to-transparent dark:via-amber-400/30 my-4" />

        {/* =========================================================================
            2. PAY AS YOU USE — SECOND SECTION AS REQUESTED
        ========================================================================= */}
        <section className="py-12 space-y-10 w-full">

          <div className="space-y-2">
            <RevealEyebrow>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-teal-800 dark:text-teal-300 font-bold">
                <Cpu className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>02 / DIGITAL CAMPUS NETWORK • PAY AS YOU USE</span>
              </div>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                USE WHAT YOU NEED
              </h2>
            </RevealHeading>
            <RevealDescription>
              <p className="text-lg sm:text-xl font-serif font-medium text-slate-800 dark:text-slate-200 max-w-2xl">
                Additional pricing depends on the features and usage your institution chooses.
              </p>
            </RevealDescription>
          </div>

          {/* Central System with Animated Moving SVG Data Lines (Spans Screen) */}
          <RevealVisual>
            <div className="relative py-8 flex flex-col items-center justify-center w-full">

              {/* Center Hub */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(56, 189, 248, 0.4)',
                    '0 0 0 22px rgba(56, 189, 248, 0)',
                  ]
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="w-36 h-36 rounded-full border-2 border-sky-500 bg-[#FAF6EE] dark:bg-[#070D18] flex flex-col items-center justify-center text-center p-3 relative z-20 shadow-2xl"
              >
                <span className="font-mono text-[11px] text-sky-700 dark:text-sky-300 tracking-widest font-bold">CORE</span>
                <span className="font-serif font-bold text-base sm:text-lg text-slate-950 dark:text-slate-50">AI-EDUCATION</span>
                <span className="text-[11px] font-mono font-bold text-amber-800 dark:text-amber-300 mt-0.5">Campus Engine</span>
              </motion.div>

              {/* Network Nodes Orbiting Center (Full Width Grid Across Desktop Screen) */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-10 text-center font-serif relative z-10">
                {[
                  { id: 'ai', title: 'AI Learning', note: 'Based on usage', desc: 'Curriculum-grounded student doubts & textbook citations.' },
                  { id: 'exams', title: 'Exams', note: 'Based on usage', desc: 'QR-coded hall tickets & desk seating verification.' },
                  { id: 'assessments', title: 'Assessments', note: 'Based on usage', desc: 'Automated rubric grading & marks reconciliation.' },
                  { id: 'features', title: 'Advanced Features', note: 'Selected features', desc: '2-way Tally ERP 9 sync, proxy timetable & WhatsApp alerts.' },
                  { id: 'users', title: 'Users & Teachers', note: 'Selected features', desc: 'Faculty seat allocation and permission roles.' },
                  { id: 'students', title: 'Students Cohort', note: 'Based on users/students', desc: 'Dedicated institutional partition and cloud bandwidth.' }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveNetworkNode(item.id)}
                    className={`p-3 cursor-pointer transition-all duration-300 border-b-2 flex flex-col justify-between ${activeNetworkNode === item.id
                      ? 'border-sky-500 text-slate-950 dark:text-slate-50 scale-105 font-bold'
                      : 'border-amber-900/20 dark:border-amber-400/20 text-slate-800 dark:text-slate-200 hover:text-slate-950'
                      }`}
                  >
                    <div>
                      <div className="text-base sm:text-lg font-bold flex items-center justify-center gap-1.5">
                        <span>{item.title}</span>
                        {activeNetworkNode === item.id && (
                          <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-teal-800 dark:text-teal-300 pt-1">
                        {item.note}
                      </div>
                    </div>
                    {activeNetworkNode === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-serif text-amber-900 dark:text-amber-300 font-semibold italic pt-2"
                      >
                        ✦ {item.desc}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </RevealVisual>

        </section>

        {/* =========================================================================
            PAGE TURN DIVIDER (FULL WIDTH)
        ========================================================================= */}
        <div className="relative py-4 flex items-center justify-between w-full">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-amber-800/40 to-amber-800/80 dark:via-amber-400/40 dark:to-amber-400/80" />
          <div className="px-6 text-xs sm:text-sm font-mono font-bold tracking-widest text-amber-900 dark:text-amber-400 uppercase flex items-center gap-2">
            <span>PAGE TURN</span>
            <span>⤶</span>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-800/80 via-amber-800/40 to-transparent dark:from-amber-400/80 dark:via-amber-400/40" />
        </div>

        {/* =========================================================================
            3. INITIAL SETUP COST (₹2.5 Lakh) — THIRD SECTION AS REQUESTED
        ========================================================================= */}
        <motion.section
          onViewportEnter={() => setSetupInView(true)}
          className="py-10 space-y-8 w-full"
        >
          {/* Folio Category Tag */}
          <RevealEyebrow>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-amber-900 dark:text-amber-400">
              <Feather className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>03 / INITIAL SETUP • ONE-TIME INVESTMENT</span>
            </div>
          </RevealEyebrow>

          {/* Physical Ledger Line with Counting Number */}
          <RevealHeading>
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6 border-b-2 border-amber-900/30 dark:border-amber-400/30 pb-6 w-full">
              <div>
                <AnimatedSetupCounter inView={setupInView} />
                <div className="text-xl sm:text-2xl font-serif font-semibold text-amber-900 dark:text-amber-300 italic mt-2">
                  One-time setup for your digital campus.
                </div>
              </div>

              <div className="text-left lg:text-right font-mono text-sm sm:text-base text-slate-800 dark:text-slate-200 space-y-1">
                <div className="font-bold tracking-wider">INSTITUTIONAL INVESTMENT</div>
                <div className="text-emerald-700 dark:text-emerald-400 font-bold text-base sm:text-lg">Zero Recurring Setup Fees</div>
              </div>
            </div>
          </RevealHeading>

          {/* Handwritten Entries Around It (Wide 4 Columns across screen) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-2 font-serif w-full">
            <motion.div whileHover={{ x: 3 }} className="border-l-2 border-amber-700/60 dark:border-amber-400/60 pl-4 space-y-1.5">
              <span className="font-mono text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-400 block tracking-wider">STAGE I</span>
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 block">Institution Setup</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">Complete institutional charter and domain configuration.</p>
            </motion.div>

            <motion.div whileHover={{ x: 3 }} className="border-l-2 border-amber-700/60 dark:border-amber-400/60 pl-4 space-y-1.5">
              <span className="font-mono text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-400 block tracking-wider">STAGE II</span>
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 block">Platform Configuration</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">Classrooms, department matrices, and faculty permissions.</p>
            </motion.div>

            <motion.div whileHover={{ x: 3 }} className="border-l-2 border-amber-700/60 dark:border-amber-400/60 pl-4 space-y-1.5">
              <span className="font-mono text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-400 block tracking-wider">STAGE III</span>
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 block">Initial Onboarding</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">Executive orientation for leadership, IT and bursar.</p>
            </motion.div>

            <motion.div whileHover={{ x: 3 }} className="border-l-2 border-amber-700/60 dark:border-amber-400/60 pl-4 space-y-1.5">
              <span className="font-mono text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-400 block tracking-wider">STAGE IV</span>
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 block">Data / Setup Assistance</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">Legacy student record and syllabus migration support.</p>
            </motion.div>
          </div>

        </motion.section>

        {/* Divider */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-800/30 to-transparent dark:via-amber-400/30 my-4" />

        {/* =========================================================================
            PRICING EQUATION (MONTHLY + USAGE + SETUP = AI-EDUCATION)
        ========================================================================= */}
        <section className="py-12 text-center space-y-8 w-full">

          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-amber-900 dark:text-amber-400">
            ✦ THE PRICING THEOREM ✦
          </div>

          {/* Sequential Animated Equation Formula Matching the New Order */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 font-serif w-full">

            {/* Term 1: Monthly */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <div className="text-xs sm:text-sm font-mono uppercase tracking-widest font-bold text-amber-900 dark:text-amber-400">MONTHLY</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-slate-50">₹500 / mo</div>
            </motion.div>

            {/* Operator + */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-amber-700 dark:text-amber-400 font-mono"
            >
              +
            </motion.span>

            {/* Term 2: Usage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-1"
            >
              <div className="text-xs sm:text-sm font-mono uppercase tracking-widest font-bold text-teal-800 dark:text-teal-300">USAGE</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-800 dark:text-teal-300">Pay as you use</div>
            </motion.div>

            {/* Operator + */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-4xl font-bold text-amber-700 dark:text-amber-400 font-mono"
            >
              +
            </motion.span>

            {/* Term 3: Setup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-1"
            >
              <div className="text-xs sm:text-sm font-mono uppercase tracking-widest font-bold text-amber-900 dark:text-amber-400">SETUP</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-slate-50">₹2.5 Lakh</div>
            </motion.div>

            {/* Equals = */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-4xl font-bold text-amber-700 dark:text-amber-400 font-mono"
            >
              =
            </motion.span>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="space-y-1"
            >
              <div className="text-xs sm:text-sm font-mono uppercase tracking-widest font-bold text-sky-700 dark:text-sky-300">SOLUTION</div>
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 0px rgba(56, 189, 248, 0)',
                    '0 0 20px rgba(56, 189, 248, 0.6)',
                    '0 0 0px rgba(56, 189, 248, 0)'
                  ]
                }}
                transition={{ duration: 2.8, repeat: Infinity }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-slate-50"
              >
                AI-EDUCATION
              </motion.div>
            </motion.div>

          </div>

        </section>

        {/* Divider */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-800/30 to-transparent dark:via-amber-400/30 my-4" />

        {/* =========================================================================
            CAMPUS SCALE BLUEPRINT
        ========================================================================= */}
        <section className="py-10 space-y-6 w-full">

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <RevealEyebrow>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-amber-900 dark:text-amber-400">
                  SCALE & BLUEPRINT
                </div>
              </RevealEyebrow>
              <RevealHeading>
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                  Start simple. Grow when you need to.
                </h3>
              </RevealHeading>
            </div>
            <RevealDescription>
              <p className="text-base font-serif font-medium text-slate-800 dark:text-slate-200 max-w-sm">
                Add features as your institution grows across departments.
              </p>
            </RevealDescription>
          </div>

          {/* Expansive Architectural Engraving Filling Screen Width */}
          <RevealVisual>
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-3xl border-2 border-amber-900/30 dark:border-amber-400/30 overflow-hidden bg-[#FAF6EE]/80 dark:bg-[#070D18]/80 p-6 flex items-center justify-center shadow-lg">
              <CampusEngraving
                className="w-full h-full opacity-90"
                isAiActive={true}
                highlightedNode={campusNodes[campusStep - 1].id}
              />

              {/* Active Connected Layer Pill */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full border-2 border-amber-700/60 dark:border-amber-400/60 bg-[#FAF6EE] dark:bg-[#0B1220] text-sm sm:text-base font-serif font-bold text-slate-950 dark:text-slate-50 flex items-center gap-3 shadow-2xl z-20">
                <span className="w-3 h-3 rounded-full bg-sky-500 animate-ping" />
                <span>Step {campusStep}: {campusNodes[campusStep - 1].label}</span>
                <span className="text-amber-900 dark:text-amber-300 font-semibold font-mono text-xs sm:text-sm">
                  ({campusNodes[campusStep - 1].desc})
                </span>
              </div>
            </div>
          </RevealVisual>

        </section>

        {/* Divider */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-800/30 to-transparent dark:via-amber-400/30 my-4" />

        {/* =========================================================================
            TRANSPARENT PRICING — THREE SIMPLE STATEMENTS (ORDER MATCHED)
        ========================================================================= */}
        <section className="py-12 space-y-8 w-full max-w-5xl mx-auto">

          <div className="space-y-1">
            <RevealEyebrow>
              <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-amber-900 dark:text-amber-400">
                CLARITY
              </div>
            </RevealEyebrow>
            <RevealHeading>
              <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                Nothing complicated.
              </h3>
            </RevealHeading>
          </div>

          <RevealVisual>
            <div className="space-y-5 text-2xl sm:text-4xl font-serif font-bold text-slate-950 dark:text-slate-50">
              <div className="flex items-center gap-4">
                <Check className="w-7 h-7 text-emerald-700 dark:text-emerald-400 shrink-0 font-bold" />
                <span>₹500/month basic platform fee.</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="w-7 h-7 text-emerald-700 dark:text-emerald-400 shrink-0 font-bold" />
                <span>Additional usage is based on what you use.</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="w-7 h-7 text-emerald-700 dark:text-emerald-400 shrink-0 font-bold" />
                <span>₹2.5 Lakh one-time setup.</span>
              </div>
            </div>
          </RevealVisual>

          <div className="text-sm sm:text-base font-mono font-semibold text-slate-800 dark:text-slate-300">
            Zero hidden charges • No arbitrary tier locks • Fully transparent
          </div>

        </section>

        {/* Divider */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-800/30 to-transparent dark:via-amber-400/30 my-4" />

        {/* =========================================================================
            CINEMATIC CALL TO ACTION
        ========================================================================= */}
        <section className="py-14 text-center space-y-6 max-w-4xl mx-auto w-full">

          <RevealEyebrow>
            <div className="w-14 h-14 mx-auto rounded-full border-2 border-amber-700 dark:border-amber-400 flex items-center justify-center text-amber-900 dark:text-amber-300 font-bold text-xl">
              Æ
            </div>
          </RevealEyebrow>

          <div className="space-y-3">
            <RevealHeading>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                Let’s build your campus.
              </h2>
            </RevealHeading>
            <RevealDescription>
              <p className="text-lg sm:text-xl font-serif font-medium text-slate-800 dark:text-slate-200 max-w-xl mx-auto">
                Tell us what your institution needs and we’ll help you understand the pricing.
              </p>
            </RevealDescription>
          </div>

          <RevealCTA>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-base font-bold tracking-wide hover:bg-amber-700 hover:text-white transition-all shadow-xl group cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Get a Pricing Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-9 py-4 rounded-full border-2 border-amber-800/80 dark:border-amber-400/80 bg-[#FAF6EE] dark:bg-[#0E1729] text-base font-serif font-bold text-slate-950 dark:text-slate-50 hover:bg-amber-700 hover:text-white transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>Book a Demo</span>
              </motion.button>
            </div>
          </RevealCTA>

          <div className="pt-4 text-xs sm:text-sm font-mono font-bold text-amber-900 dark:text-amber-400">
            <span>Zero obligation • Customized to your institution • Dedicated sandbox</span>
          </div>

        </section>

      </div>
    </div>
  );
};
