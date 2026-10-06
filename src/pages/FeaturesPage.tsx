import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  QrCode,
  FileText,
  Scan,
  Download,
  CreditCard,
  Building2,
  Calendar,
  Check,
  AlertCircle,
  FileCheck,
  Printer,
  ShieldCheck,
  Clock,
  Send,
  UserCheck,
  GraduationCap,
  Scale,
  Award,
  ChevronRight,
  TrendingUp,
  Search,
  Bell,
  CheckCircle,
  User,
  Users,
  Eye,
  Layers,
  Zap,
} from 'lucide-react';
import type { PageId } from '../types';
import {
  RevealEyebrow,
  RevealHeading,
  RevealDescription,
  RevealVisual,
  RevealCTA
} from '../components/common/ScrollReveal';

interface FeaturesPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

interface StepItem {
  id: string;
  label: string;
}

interface InteractiveChapterProps {
  id: string;
  num: string;
  title: string;
  headline: string;
  description: string;
  continuityLabel?: string;
  steps: StepItem[];
  minHeightClass?: string;
  renderStep: (currentStep: number) => React.ReactNode;
}

// -----------------------------------------------------------------------------
// SEQUENTIAL SCROLL CHAPTER COMPONENT
// Ensures steps advance sequentially (1 -> 2 -> 3 -> 4) without skipping.
// When scrolling down, it steps forward. When scrolling up, it reverses.
// -----------------------------------------------------------------------------
const InteractiveChapter: React.FC<InteractiveChapterProps> = ({
  id,
  num,
  title,
  headline,
  description,
  continuityLabel,
  steps,
  minHeightClass = 'min-h-[220vh]',
  renderStep,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw scroll progress target
  const [targetStep, setTargetStep] = useState(0);

  // Displayed step with sequential transition latch (prevents 1 -> 3 or 1 -> 4 jumps)
  const [displayStep, setDisplayStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const stepCount = steps.length;
    // Buffer margins at start and end so step 1 and step last stay comfortably pinned
    const progress = Math.max(0, Math.min(0.999, (latest - 0.05) / 0.90));
    const calculatedStep = Math.min(stepCount - 1, Math.max(0, Math.floor(progress * stepCount)));
    setTargetStep(calculatedStep);
  });

  // SEQUENTIAL LATCH:
  // If targetStep is ahead or behind by more than 1 step, step through sequentially (1 -> 2 -> 3 -> 4)
  // so the user's eyes clearly see every single stage without jumping!
  useEffect(() => {
    if (displayStep === targetStep) return;

    const timer = setTimeout(() => {
      setDisplayStep((prev) => {
        if (prev < targetStep) return prev + 1;
        if (prev > targetStep) return prev - 1;
        return prev;
      });
    }, 180);

    return () => clearTimeout(timer);
  }, [targetStep, displayStep]);

  const handleManualClick = (stepIdx: number) => {
    setTargetStep(stepIdx);
    setDisplayStep(stepIdx);
  };

  return (
    <div
      id={id}
      ref={containerRef}
      className={`relative ${minHeightClass} scroll-mt-28`}
    >
      <div className="sticky top-28 space-y-4 pt-2">

        {/* Editorial Section Header */}
        <div className="space-y-1">
          <RevealEyebrow className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
              {num} / {title}
            </span>
          </RevealEyebrow>

          <RevealHeading>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
              {headline}
            </h2>
          </RevealHeading>

          <RevealDescription>
            <p className="text-sm sm:text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl">
              {description}
            </p>
          </RevealDescription>
        </div>

        {/* Step Navigation Tabs & Progress Line */}
        <RevealVisual className="space-y-1.5 pt-1">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
            {steps.map((st, idx) => {
              const isCurrent = displayStep === idx;
              const isPast = displayStep > idx;

              return (
                <button
                  key={st.id}
                  onClick={() => handleManualClick(idx)}
                  className={`px-3 py-1 rounded-full border transition-all text-xs flex items-center gap-1.5 shrink-0 ${isCurrent
                    ? 'border-[#C87D32] bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold shadow-sm'
                    : isPast
                      ? 'border-emerald-600/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5'
                      : 'border-[#C87D32]/25 text-[#5A6578] hover:text-[#121926] dark:hover:text-[#F5EFE6]'
                    }`}
                >
                  <span className="text-[10px] opacity-70">0{idx + 1}</span>
                  <span>{st.label}</span>
                  {isPast && <span className="text-[9px] font-bold">✓</span>}
                </button>
              );
            })}
          </div>

          {/* Micro Progress Bar filling with the current step */}
          <div className="h-[2px] w-full bg-[#C87D32]/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C87D32] transition-all duration-300"
              style={{ width: `${((displayStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </RevealVisual>

        {/* Interactive Living Canvas Card with Smooth Morphing */}
        <RevealVisual>
          <div className="border border-[#C87D32]/25 rounded-2xl bg-[#FAF5EB]/90 dark:bg-[#0E1524]/90 p-5 sm:p-6 shadow-sm min-h-[290px] flex flex-col justify-center font-serif">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full"
              >
                {renderStep(displayStep)}
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealVisual>

      </div>
    </div>
  );
};

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 10 Chapters definition strictly matching Master Prompt
  const chapters = [
    { num: '01', title: 'Academic Operations', short: 'Academic', id: 'chapter-01' },
    { num: '02', title: 'AI Study Buddy', short: 'AI Learning', id: 'chapter-02' },
    { num: '03', title: 'Tutor & Competitive Prep', short: 'Tutor', id: 'chapter-03' },
    { num: '04', title: 'Assessments', short: 'Assessments', id: 'chapter-04' },
    { num: '05', title: 'Admissions & Exams', short: 'Admissions', id: 'chapter-05' },
    { num: '06', title: 'Finance & Tally', short: 'Finance', id: 'chapter-06' },
    { num: '07', title: 'Campus Communication', short: 'Communication', id: 'chapter-07' },
    { num: '08', title: 'Parent Portal', short: 'Parents', id: 'chapter-08' },
    { num: '09', title: 'Adaptive Learning', short: 'Adaptive', id: 'chapter-09' },
    { num: '10', title: 'Law Education', short: 'Law', id: 'chapter-10' },
  ];

  // Scroll spy using IntersectionObserver to detect which chapter is in view
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

  const currentWatermark = chapters[activeChapter]?.short?.toUpperCase() || 'CAPABILITIES';

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-500 font-sans relative selection:bg-[#C87D32] selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[55vh] sm:min-h-[62vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 text-center">
        {/* Background Watermark (Hero Section Only) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
          <div className="font-serif text-[18vw] lg:text-[20vw] font-bold tracking-widest text-[#121926] dark:text-[#F5EFE6] leading-none uppercase text-center px-4 select-none opacity-[0.07] dark:opacity-[0.09]">
            FEATURES
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10 my-auto">
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

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl mx-auto"
          >
            10 connected capabilities for modern education.
          </motion.p>
        </div>
      </section>

      {/* Mobile Top Chapter Indicator */}
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

      {/* Two Column Layout: Left Sticky Rail + Main Chapters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8 pb-28">
        <div className="flex gap-8 lg:gap-12 xl:gap-16 items-start relative">

          {/* Sticky Left Chapter Rail (Enlarged & Prominent) */}
          <aside className="hidden lg:block w-52 xl:w-60 shrink-0 sticky top-28 select-none self-start">
            <div className="relative pl-6 py-2">
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#C87D32]/20 dark:bg-[#C87D32]/15 origin-top" />
              <div
                className="absolute left-[11px] top-2 w-[2px] bg-[#C87D32] transition-all duration-300 origin-top"
                style={{
                  height: `${(activeChapter / (chapters.length - 1)) * 96}%`,
                }}
              />

              <div className="space-y-3.5 xl:space-y-4">
                {chapters.map((chap, idx) => {
                  const isActive = activeChapter === idx;
                  const isPast = activeChapter > idx;

                  return (
                    <button
                      key={chap.id}
                      onClick={() => scrollToChapter(chap.id, idx)}
                      className={`group relative flex items-center text-left w-full px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none ${isActive
                        ? 'bg-[#C87D32]/10 dark:bg-[#C87D32]/15 shadow-sm'
                        : 'hover:bg-[#C87D32]/5'
                        }`}
                    >
                      <div
                        className={`absolute -left-[19px] rounded-full transition-all duration-200 flex items-center justify-center ${isActive
                          ? 'w-4 h-4 bg-[#C87D32] ring-4 ring-[#FAF5EB] dark:ring-[#070B13] scale-110 shadow-md'
                          : isPast
                            ? 'w-3.5 h-3.5 bg-emerald-600 ring-2 ring-[#FAF5EB] dark:ring-[#070B13]'
                            : 'w-3 h-3 border-2 border-[#C87D32]/40 bg-[#FAF5EB] dark:bg-[#070B13] group-hover:border-[#C87D32]'
                          }`}
                      >
                        {isPast && (
                          <span className="text-[8px] text-white font-bold leading-none">✓</span>
                        )}
                      </div>

                      <div className="flex flex-col transition-all duration-200 pl-1.5">
                        <span
                          className={`font-mono text-xs tracking-wider transition-all duration-150 ${isActive
                            ? 'text-[#C87D32] dark:text-[#E5A955] font-bold'
                            : 'text-[#5A6578]/70 dark:text-[#9DA9BE]/50 group-hover:text-[#121926] dark:group-hover:text-[#F5EFE6]'
                            }`}
                        >
                          {chap.num}
                        </span>
                        <span
                          className={`text-sm sm:text-[15px] font-serif leading-snug transition-all duration-150 ${isActive
                            ? 'text-[#121926] dark:text-[#F5EFE6] font-bold translate-x-1'
                            : 'text-[#5A6578] dark:text-[#9DA9BE] group-hover:text-[#121926] dark:group-hover:text-[#F5EFE6]'
                            }`}
                        >
                          {chap.short}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main 10 Chapter Stream */}
          <main className="flex-1 min-w-0 space-y-24 lg:space-y-36 pb-32">

            {/* =============================================================== */}
            {/* CHAPTER 01 — ACADEMIC OPERATIONS (3 STEPS: 220vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-01"
              num="01"
              title="ACADEMIC OPERATIONS"
              headline="Keep every class moving."
              description="Smart scheduling, teacher availability and automatic proxy matching."
              continuityLabel="TIMETABLE → AI LEARNING"
              minHeightClass="min-h-[220vh]"
              steps={[
                { id: 'c1-1', label: 'Schedule Normal' },
                { id: 'c1-2', label: 'Absence Detected' },
                { id: 'c1-3', label: 'Proxy Assigned' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                      <div className="font-mono text-[10px] text-[#C87D32]">08:30 • Room 101</div>
                      <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">History II</div>
                      <div className="text-[#526071] dark:text-[#A6B4C9] text-xs">Prof. K. Sen</div>
                      <div className="text-[10px] text-emerald-600 font-mono font-medium">✓ On Schedule</div>
                    </div>

                    <div className={`p-3 rounded-xl border transition-all space-y-1 ${step === 2
                      ? 'border-[#38BDF8] bg-[#38BDF8]/10'
                      : step === 1
                        ? 'border-rose-400 bg-rose-500/10'
                        : 'border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E]'
                      }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#C87D32]">09:15 • Room 204</span>
                        {step === 2 && <span className="text-[9px] font-mono text-[#0284C7] dark:text-[#38BDF8] font-bold">PROXY ASSIGNED ✓</span>}
                        {step === 1 && <span className="text-[9px] font-mono text-rose-500 font-bold">ABSENT ALERT</span>}
                        {step === 0 && <span className="text-[9px] font-mono text-emerald-600">Assigned</span>}
                      </div>
                      <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Mathematics</div>
                      <div className="text-xs text-[#526071] dark:text-[#A6B4C9]">
                        {step === 2 ? 'Dr. Mehta (Proxy Matched)' : 'Teacher: Sharma'}
                        {step > 0 && <span className="text-rose-500 ml-1 font-mono">Absent</span>}
                      </div>
                      <div className="text-[10px] font-mono text-[#5A6578] dark:text-[#9DA9BE]">
                        {step === 2 && 'Syllabus aligned'}
                        {step === 1 && 'Finding proxy...'}
                        {step === 0 && 'Standard schedule'}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                      <div className="font-mono text-[10px] text-[#C87D32]">10:15 • Room 102</div>
                      <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Physics Lab</div>
                      <div className="text-[#526071] dark:text-[#A6B4C9] text-xs">Dr. V. Prasad</div>
                      <div className="text-[10px] text-emerald-600 font-mono font-medium">✓ On Schedule</div>
                    </div>
                  </div>
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 02 — AI STUDY BUDDY (3 STEPS: 220vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-02"
              num="02"
              title="AI STUDY BUDDY"
              headline="Answers grounded in your curriculum."
              description="Direct citations with chapter, section and exact page grounding."
              continuityLabel="CITATION → COMPETITIVE PREP"
              minHeightClass="min-h-[220vh]"
              steps={[
                { id: 'c2-1', label: 'Textbook Query' },
                { id: 'c2-2', label: 'AI Grounded Answer' },
                { id: 'c2-3', label: 'Source Citation Line' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C87D32]/10 text-[#C87D32] font-bold">
                      QUESTION
                    </span>
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                      “Explain light-dependent reactions in photosynthesis.”
                    </span>
                  </div>

                  <div className={`p-4 rounded-xl border text-xs space-y-2.5 transition-all ${step >= 1 ? 'border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10' : 'border-[#C87D32]/20 opacity-60'
                    }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-editorial font-bold text-[#121926] dark:text-[#F5EFE6]">
                        <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>AI Response {step >= 2 && '(Grounded)'}</span>
                      </div>
                      {step >= 2 && (
                        <span className="px-2.5 py-0.5 rounded-full border border-[#38BDF8]/60 text-[10px] font-mono text-[#0284C7] dark:text-[#38BDF8] flex items-center gap-1 font-semibold">
                          <Bookmark className="w-3 h-3" />
                          <span>Ch 04 • Page 87 ✓</span>
                        </span>
                      )}
                    </div>

                    <p className="italic text-[#121926] dark:text-[#F5EFE6] leading-relaxed text-xs sm:text-sm">
                      {step === 0 && 'Awaiting response generation from official syllabus...'}
                      {step >= 1 && '“Light energizes chlorophyll in Photosystem II, photolysing water to release O₂ and generating ATP and NADPH for cellular synthesis.”'}
                    </p>
                  </div>
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 03 — TUTOR & COMPETITIVE PREP (4 STEPS: 270vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-03"
              num="03"
              title="TUTOR & COMPETITIVE PREP"
              headline="A smarter way to prepare."
              description="Continuous feedback loops for JEE, NEET, CLAT, and boards."
              continuityLabel="PREPARATION LOOP → ASSESSMENTS"
              minHeightClass="min-h-[270vh]"
              steps={[
                { id: 'c3-1', label: 'Timed Mock' },
                { id: 'c3-2', label: 'Speed Analysis' },
                { id: 'c3-3', label: 'Targeted Drill' },
                { id: 'c3-4', label: 'Score Leap' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: 01 Timed Mock */}
                  {step === 0 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#C87D32] animate-pulse" />
                          <span className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            JEE ADVANCED • FULL MOCK 04
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-bold text-[10px] font-mono">
                          ⏱ 24:15 REMAINING
                        </span>
                      </div>

                      <div className="p-3 rounded-lg border border-[#C87D32]/15 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-2">
                        <p className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                          A uniform solid disc rolls without slipping down a rough incline of angle θ. Linear acceleration of center of mass:
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] pt-1">
                          <div className="p-1.5 rounded border border-[#C87D32]/20">(A) g sin θ</div>
                          <div className="p-1.5 rounded border border-emerald-500 bg-emerald-500/10 font-bold text-emerald-700 dark:text-emerald-400">
                            (B) 2/3 g sin θ [Selected ✓]
                          </div>
                          <div className="p-1.5 rounded border border-[#C87D32]/20">(C) 1/2 g sin θ</div>
                          <div className="p-1.5 rounded border border-[#C87D32]/20">(D) 3/4 g sin θ</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: 02 Speed Analysis */}
                  {step === 1 && (
                    <div className="p-4 rounded-xl border border-rose-400/40 bg-rose-50/15 dark:bg-rose-950/20 space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-rose-400/20 pb-2">
                        <div className="font-mono text-[10px] text-rose-600 dark:text-rose-400 font-bold">
                          TIME-DRAIN TELEMETRY
                        </div>
                        <span className="px-2 py-0.5 rounded bg-rose-500/15 text-rose-600 dark:text-rose-300 font-mono text-[9px] font-bold">
                          BOTTLENECK DETECTED
                        </span>
                      </div>

                      <div className="space-y-2 font-mono text-[11px]">
                        <div>
                          <div className="flex justify-between text-[10px] pb-0.5">
                            <span>Kinematics & Mechanics</span>
                            <span className="text-emerald-600 font-bold">1.1 min/Q (Optimal ✓)</span>
                          </div>
                          <div className="h-1.5 w-full bg-emerald-200 dark:bg-emerald-950 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[35%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[10px] pb-0.5">
                            <span className="text-rose-600 dark:text-rose-400 font-bold">Rotational Dynamics</span>
                            <span className="text-rose-600 dark:text-rose-400 font-bold">3.8 min/Q (Time Drain ⚠️)</span>
                          </div>
                          <div className="h-1.5 w-full bg-rose-200 dark:bg-rose-950 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-500 w-[95%]" />
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg border border-rose-300 dark:border-rose-900 bg-white/50 dark:bg-black/20 text-xs">
                        <strong>Insight:</strong> Applying Instantaneous Center of Rotation (ICR) recovers 74% speed without manual integration.
                      </div>
                    </div>
                  )}

                  {/* Step 2: 03 Targeted Drill */}
                  {step === 2 && (
                    <div className="p-4 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#38BDF8]/20 pb-2">
                        <div className="font-mono text-[10px] text-[#0284C7] dark:text-[#38BDF8] font-bold">
                          TARGETED DRILL • ICR SHORTCUT
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          5/5 SOLVED
                        </span>
                      </div>

                      <div className="p-3 rounded-lg border border-[#38BDF8]/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                        <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                          Instantaneous Center of Rotation Formula:
                        </div>
                        <p className="font-mono text-xs text-[#121926] dark:text-[#F5EFE6]">
                          a_cm = (g sin θ) / [1 + I_cm/(M R²)] = ⅔ g sin θ.
                        </p>
                        <div className="text-[10px] font-mono text-emerald-600 pt-1">
                          ✓ Time taken: 42 seconds (Down from 3.8 minutes).
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: 04 Score Leap */}
                  {step === 3 && (
                    <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                          <span>BENCHMARK SCORE LEAP</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">
                          +18% PERCENTILE LEAP 🚀
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-center font-mono">
                        <div className="p-3 rounded-lg border border-emerald-500/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                          <span className="text-[9px] text-[#5A6578] block">Before Drill</span>
                          <span className="text-sm font-bold text-rose-500">78th Percentile</span>
                          <span className="text-[8px] text-[#5A6578]">Score: 162/300</span>
                        </div>

                        <div className="p-3 rounded-lg border-2 border-emerald-500 bg-emerald-500/10 space-y-1">
                          <span className="text-[9px] text-emerald-700 dark:text-emerald-400 font-bold block">After Intervention</span>
                          <span className="text-base font-bold text-emerald-600 dark:text-emerald-300">96th Percentile</span>
                          <span className="text-[8px] text-emerald-700 dark:text-emerald-400 font-bold">Score: 238/300 (+76)</span>
                        </div>

                        <div className="p-3 rounded-lg border border-emerald-500/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1 col-span-2 sm:col-span-1">
                          <span className="text-[9px] text-[#5A6578] block">National Rank</span>
                          <span className="text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">Rank #218</span>
                          <span className="text-[8px] text-emerald-600 font-bold">Jumped 1,624 Ranks</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 04 — ASSESSMENTS (4 STEPS: 270vh) */}
            {/* 01 Question Paper -> 02 Student Answers -> 03 AI Evaluation -> 04 Sealed Report */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-04"
              num="04"
              title="ASSESSMENTS"
              headline="Assessment without the busywork."
              description="From question paper to cryptographically sealed report cards."
              continuityLabel="REPORT CARD → ADMISSION TICKET"
              minHeightClass="min-h-[270vh]"
              steps={[
                { id: 'c4-1', label: 'Question Paper' },
                { id: 'c4-2', label: 'Student Answer' },
                { id: 'c4-3', label: 'AI Evaluation' },
                { id: 'c4-4', label: 'Sealed Report' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: Question Paper */}
                  {step === 0 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-2 text-xs">
                      <div className="font-mono text-[10px] text-[#C87D32] font-semibold">PROBLEM 4 • SECTION B</div>
                      <div className="font-editorial text-base sm:text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                        “Derive the moment of inertia of a thin hollow cylinder of mass M and radius R.”
                      </div>
                      <div className="text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">
                        Marks: 5 • Integration & Boundary Condition
                      </div>
                    </div>
                  )}

                  {/* Step 1: Student Answer */}
                  {step === 1 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-2 text-xs">
                      <div className="font-mono text-[10px] text-[#5A6578] font-semibold">STUDENT SUBMISSION (BLUE INK)</div>
                      <p className="italic text-[#121926] dark:text-[#F5EFE6] leading-relaxed text-sm">
                        “Let cylinder mass be M, length L, radius R. Dividing into elemental cylindrical rings: <br />
                        <span className="font-mono font-normal">dm = (M/L) dl</span>. Mass element is at uniform distance R: <br />
                        <span className="font-mono font-bold text-[#C87D32]">I = ∫ r² dm = R² ∫ dm = M · R²</span>.”
                      </p>
                    </div>
                  )}

                  {/* Step 2: AI Step Evaluation */}
                  {step === 2 && (
                    <div className="p-4 rounded-xl border border-rose-400/40 bg-rose-50/15 dark:bg-rose-950/20 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono text-[10px] text-rose-600 dark:text-rose-400 font-bold">
                        <span>AI EVALUATION ENGINE • ANNOTATIONS</span>
                        <span className="font-serif text-sm">+5 / 5 FULL MARKS</span>
                      </div>
                      <div className="space-y-1 text-xs text-[#121926] dark:text-[#F5EFE6]">
                        <p>✓ Symmetry and uniform mass distribution (+2/5)</p>
                        <p>✓ Integration across boundary limits verified (+2/5)</p>
                        <p>✓ Final dimensional analysis valid (+1/5)</p>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Sealed Report Card */}
                  {step === 3 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                        <div className="font-mono text-[9px] text-[#5A6578]">Subject Breakdown</div>
                        <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Physics • 94/100</div>
                        <div className="text-[#C87D32] text-[10px]">Grade A+ (Distinction)</div>
                      </div>
                      <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                        <div className="font-mono text-[9px] text-[#5A6578]">Batch Ranking</div>
                        <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Rank 03 / 184</div>
                        <div className="text-emerald-600 text-[10px]">Top 2% in batch</div>
                      </div>
                      <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20">
                        <div className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400">Institutional Seal</div>
                        <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">Controller Signed ✓</div>
                        <div className="text-[#526071] dark:text-[#9DA9BE] text-[10px]">Dispatched to Parent Portal</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 05 — ADMISSIONS & EXAMS (4 STEPS: 270vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-05"
              num="05"
              title="ADMISSIONS & EXAMS"
              headline="From application to result."
              description="One continuous verified pipeline: biometric QR tickets to instant results."
              continuityLabel="EXAM RESULT → FEE INVOICE"
              minHeightClass="min-h-[270vh]"
              steps={[
                { id: 'c5-1', label: 'Online Form' },
                { id: 'c5-2', label: 'QR Hall Pass' },
                { id: 'c5-3', label: 'Gate Scan' },
                { id: 'c5-4', label: 'Instant Result' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: 01 Online Form */}
                  {step === 0 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#C87D32]" />
                          <span className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            ADMISSION APPLICATION • #ADM-2024-891
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          AUDIT CLEARED ✓
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <div className="p-2.5 rounded-lg bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/15">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Candidate Name</span>
                          <span className="font-bold text-[#121926] dark:text-[#F5EFE6]">Aarav Sharma</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/15">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Applied Stream</span>
                          <span className="font-bold text-[#121926] dark:text-[#F5EFE6]">Grade 11 • PCM + CS</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/15 col-span-2 sm:col-span-1">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Prior Examination</span>
                          <span className="font-bold text-[#121926] dark:text-[#F5EFE6]">10th Board: 96.4%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-emerald-700 dark:text-emerald-400">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>DigiLocker Marksheet Verified</span>
                        </span>
                        <span className="font-bold">Approved by Dean</span>
                      </div>
                    </div>
                  )}

                  {/* Step 1: 02 QR Hall Pass */}
                  {step === 1 && (
                    <div className="p-4 rounded-xl border-2 border-dashed border-[#C87D32]/40 bg-[#FFFDF9] dark:bg-[#0A101D] space-y-3 text-xs shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/20 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#C87D32]/10 border border-[#C87D32]/30 flex items-center justify-center text-[#C87D32] font-editorial font-bold text-xs">
                            Æ
                          </div>
                          <div>
                            <div className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                              EXAMINATION HALL TICKET
                            </div>
                            <div className="font-mono text-[9px] text-[#5A6578]">
                              Center #DL-402 • Confirmed Seat
                            </div>
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full border border-[#C87D32] bg-[#C87D32]/10 text-[#C87D32] dark:text-[#E5A955] font-mono text-[10px] font-bold">
                          ACTIVE PASS
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                        <div className="sm:col-span-2 space-y-1.5">
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div>
                              <span className="text-[9px] font-mono text-[#5A6578] block">Candidate</span>
                              <span className="font-bold text-[#121926] dark:text-[#F5EFE6]">Aarav Sharma</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-mono text-[#5A6578] block">Roll Number</span>
                              <span className="font-mono font-bold text-[#C87D32]">2024-B-891</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-mono text-[#5A6578] block">Subject</span>
                              <span className="text-[#121926] dark:text-[#F5EFE6]">Physics Adv</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-mono text-[#5A6578] block">Desk</span>
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">Hall 204 • Desk #18</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive SVG QR Code Card */}
                        <div className="flex flex-col items-center justify-center p-2 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] text-center">
                          <div className="p-1 bg-white rounded shadow-sm">
                            <svg className="w-14 h-14 text-[#121926]" viewBox="0 0 100 100" fill="currentColor">
                              <rect x="5" y="5" width="28" height="28" rx="4" />
                              <rect x="9" y="9" width="20" height="20" fill="white" />
                              <rect x="13" y="13" width="12" height="12" />
                              <rect x="67" y="5" width="28" height="28" rx="4" />
                              <rect x="71" y="9" width="20" height="20" fill="white" />
                              <rect x="75" y="13" width="12" height="12" />
                              <rect x="5" y="67" width="28" height="28" rx="4" />
                              <rect x="9" y="71" width="20" height="20" fill="white" />
                              <rect x="13" y="75" width="12" height="12" />
                              <rect x="40" y="8" width="6" height="6" />
                              <rect x="52" y="8" width="6" height="6" />
                              <rect x="40" y="20" width="6" height="6" />
                              <rect x="46" y="26" width="6" height="6" />
                              <rect x="8" y="40" width="6" height="6" />
                              <rect x="20" y="40" width="6" height="6" />
                              <rect x="26" y="46" width="6" height="6" />
                              <rect x="40" y="40" width="18" height="18" rx="2" fill="#C87D32" />
                              <rect x="68" y="40" width="6" height="6" />
                              <rect x="80" y="40" width="6" height="6" />
                              <rect x="86" y="52" width="6" height="6" />
                              <rect x="40" y="68" width="6" height="6" />
                              <rect x="52" y="74" width="6" height="6" />
                              <rect x="40" y="86" width="6" height="6" />
                              <rect x="68" y="68" width="12" height="6" />
                              <rect x="74" y="80" width="18" height="12" />
                            </svg>
                          </div>
                          <span className="text-[8px] font-mono text-[#C87D32] mt-1 font-bold">
                            TURNSTILE PASS
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: 03 Gate Scan */}
                  {step === 2 && (
                    <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3 text-xs">
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                          <Scan className="w-3.5 h-3.5 animate-pulse text-emerald-500" />
                          <span>MAIN ENTRANCE • TURNSTILE #02</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
                          GATE UNLOCKED ✓
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <div className="p-2.5 rounded-lg border border-emerald-500/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Facial Biometric</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">99.8% Match</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-emerald-500/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                          <span className="text-[9px] font-mono text-[#5A6578] block">QR Pass</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">Valid #891</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-emerald-500/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Speed</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">1.4 Seconds</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 text-[11px] font-mono flex items-center justify-between">
                        <span>Aarav Sharma cleared gate • Parent notified via WhatsApp</span>
                        <span className="font-bold">DESK #18 ➔</span>
                      </div>
                    </div>
                  )}

                  {/* Step 3: 04 Instant Result */}
                  {step === 3 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div>
                          <div className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            DIGITAL TRANSCRIPT
                          </div>
                          <div className="font-mono text-[9px] text-[#5A6578]">
                            Candidate: Aarav Sharma • Roll #2024-B-891
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-mono text-[10px] font-bold">
                          DISTINCTION • 94.7%
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded-lg border border-[#C87D32]/15 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Physics</span>
                          <span className="font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">94 / 100</span>
                          <span className="text-[8px] font-mono text-emerald-600">Grade A+</span>
                        </div>
                        <div className="p-2 rounded-lg border border-[#C87D32]/15 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Math</span>
                          <span className="font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">98 / 100</span>
                          <span className="text-[8px] font-mono text-emerald-600">Grade O</span>
                        </div>
                        <div className="p-2 rounded-lg border border-[#C87D32]/15 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Chemistry</span>
                          <span className="font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">92 / 100</span>
                          <span className="text-[8px] font-mono text-emerald-600">Grade A+</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 06 — FINANCE & TALLY (3 STEPS: 220vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-06"
              num="06"
              title="FINANCE & TALLY"
              headline="Finance that stays in sync."
              description="Student Fee ↓ AI-Education ↓ Tally. Zero manual ledger entries."
              continuityLabel="LEDGER → CAMPUS NETWORK"
              minHeightClass="min-h-[220vh]"
              steps={[
                { id: 'c6-1', label: 'Fee Invoice' },
                { id: 'c6-2', label: 'Receipt Settlement' },
                { id: 'c6-3', label: 'Tally Synchronized' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: 01 Fee Invoice */}
                  {step === 0 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div>
                          <div className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            ACADEMIC INVOICE • #INV-2024-8821
                          </div>
                          <div className="font-mono text-[9px] text-[#5A6578]">
                            Aarav Sharma • Class 11-A
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[9px] font-bold">
                          DUE IN 10 DAYS
                        </span>
                      </div>

                      <div className="divide-y divide-[#C87D32]/10 font-mono text-[11px]">
                        <div className="py-1.5 flex items-center justify-between">
                          <span className="text-[#121926] dark:text-[#F5EFE6]">Term II Tuition Fee</span>
                          <span className="font-bold">₹ 32,000.00</span>
                        </div>
                        <div className="py-1.5 flex items-center justify-between">
                          <span className="text-[#121926] dark:text-[#F5EFE6]">STEM & Robotics Lab</span>
                          <span className="font-bold">₹ 6,500.00</span>
                        </div>
                        <div className="py-1.5 flex items-center justify-between">
                          <span className="text-[#121926] dark:text-[#F5EFE6]">Digital Learning Content</span>
                          <span className="font-bold">₹ 6,500.00</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#C87D32]/20 pt-2 font-mono">
                        <span className="font-bold text-[#121926] dark:text-[#F5EFE6]">TOTAL PAYABLE:</span>
                        <span className="font-bold text-base text-[#C87D32] dark:text-[#E5A955]">₹ 45,000.00</span>
                      </div>
                    </div>
                  )}

                  {/* Step 1: 02 Receipt Settlement */}
                  {step === 1 && (
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div>
                          <div className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            FEE RECEIPT • #REC-2024-8821
                          </div>
                          <div className="font-mono text-[9px] text-[#5A6578]">
                            Aarav Sharma • HDFC UPI Autopay
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[9px] font-bold">
                          PAID IN FULL ✓
                        </span>
                      </div>

                      <div className="flex items-center justify-between font-mono">
                        <div>
                          <span className="text-[9px] text-[#5A6578] block">Amount Settled</span>
                          <span className="text-xl font-bold text-[#121926] dark:text-[#F5EFE6]">₹ 45,000.00</span>
                        </div>
                        <div className="w-20 h-20 rounded-full border-2 border-emerald-600/70 p-1 flex flex-col items-center justify-center text-center rotate-[-8deg] shadow-sm bg-emerald-50/20 dark:bg-emerald-950/30">
                          <span className="text-[7px] font-mono font-bold text-emerald-700 dark:text-emerald-400 tracking-widest uppercase">
                            SETTLED
                          </span>
                          <span className="font-mono text-[8px] font-bold text-emerald-800 dark:text-emerald-300">
                            05-OCT
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: 03 Tally Synchronized */}
                  {step === 2 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/30 dark:border-[#38BDF8]/40 bg-[#FAF5EB] dark:bg-[#0E1524] text-[#121926] dark:text-white space-y-3 text-xs font-mono">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/20 dark:border-[#38BDF8]/20 pb-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#C87D32] dark:text-[#38BDF8]" />
                          <span className="font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            TALLYPRIME XML GATEWAY
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-ping" />
                          <span>SYNCED ✓</span>
                        </span>
                      </div>

                      <div className="space-y-1.5 bg-[#FFFDF9] dark:bg-[#070B13] p-3 rounded-lg border border-[#C87D32]/20 dark:border-[#38BDF8]/20 text-[11px]">
                        <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-bold">
                          <span>Dr. HDFC Current Bank A/c</span>
                          <span>₹ 45,000.00</span>
                        </div>
                        <div className="flex justify-between text-[#121926] dark:text-[#F5EFE6] font-medium">
                          <span>Cr. Term II Tuition & Lab Fee</span>
                          <span>₹ 45,000.00</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-[#5A6578] dark:text-[#9DA9BE]">
                        <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Reconciled in 0.12s • Zero Discrepancy</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 07 — CAMPUS COMMUNICATION (3 STEPS: 220vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-07"
              num="07"
              title="CAMPUS COMMUNICATION"
              headline="Every conversation. One campus."
              description="Messages converge into an AI-synthesized executive brief."
              continuityLabel="COMMUNICATION → PARENT CHANNEL"
              minHeightClass="min-h-[220vh]"
              steps={[
                { id: 'c7-1', label: 'Campus Nodes' },
                { id: 'c7-2', label: 'AI Filtering' },
                { id: 'c7-3', label: 'Executive Brief' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: 01 Campus Nodes */}
                  {step === 0 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <span className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                          CAMPUS COMMUNICATION TOPOLOGY
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#C87D32]/10 text-[#C87D32] font-mono text-[9px] font-bold">
                          5 NODES CONNECTED
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                        <div className="p-2.5 rounded-lg border border-[#C87D32]/20 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1">
                          <span className="font-editorial font-bold text-xs text-[#121926] dark:text-[#F5EFE6] block">Principal</span>
                          <span className="font-mono text-[9px] text-[#C87D32] block">42 Notices</span>
                          <span className="text-[8px] font-mono text-emerald-600 block">✓ Active</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-[#C87D32]/20 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1">
                          <span className="font-editorial font-bold text-xs text-[#121926] dark:text-[#F5EFE6] block">Teachers</span>
                          <span className="font-mono text-[9px] text-[#C87D32] block">128 Queries</span>
                          <span className="text-[8px] font-mono text-emerald-600 block">✓ Active</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-[#C87D32]/20 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1">
                          <span className="font-editorial font-bold text-xs text-[#121926] dark:text-[#F5EFE6] block">HODs</span>
                          <span className="font-mono text-[9px] text-[#C87D32] block">64 Approvals</span>
                          <span className="text-[8px] font-mono text-emerald-600 block">✓ Active</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-[#C87D32]/20 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1">
                          <span className="font-editorial font-bold text-xs text-[#121926] dark:text-[#F5EFE6] block">Students</span>
                          <span className="font-mono text-[9px] text-[#C87D32] block">310 Inquiries</span>
                          <span className="text-[8px] font-mono text-emerald-600 block">✓ Active</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-[#C87D32]/20 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1 col-span-2 sm:col-span-1">
                          <span className="font-editorial font-bold text-xs text-[#121926] dark:text-[#F5EFE6] block">Parents</span>
                          <span className="font-mono text-[9px] text-[#C87D32] block">95 Dues</span>
                          <span className="text-[8px] font-mono text-emerald-600 block">✓ Active</span>
                        </div>
                      </div>

                      <div className="text-[10px] font-mono text-[#5A6578] flex items-center justify-between pt-1">
                        <span>Central Campus Event Bus • Real-time Stream</span>
                        <span className="text-[#C87D32] font-bold">639 Msgs/Hour</span>
                      </div>
                    </div>
                  )}

                  {/* Step 1: 02 AI Filtering */}
                  {step === 1 && (
                    <div className="p-4 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#38BDF8]/20 pb-2">
                        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#0284C7] dark:text-[#38BDF8]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI SEMANTIC FILTER</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          98.6% NOISE REDUCED
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center font-mono">
                        <div className="p-2.5 rounded-lg border border-[#38BDF8]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                          <span className="text-[9px] text-[#5A6578] block">Raw Stream</span>
                          <span className="text-base font-bold text-[#121926] dark:text-[#F5EFE6]">639</span>
                          <span className="text-[8px] text-[#5A6578]">Messages</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-[#38BDF8]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                          <span className="text-[9px] text-[#5A6578] block">Clusters</span>
                          <span className="text-base font-bold text-[#0284C7] dark:text-[#38BDF8]">14 Topics</span>
                          <span className="text-[8px] text-[#5A6578]">Grouped</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-[#38BDF8]/20 bg-[#FAF5EB] dark:bg-[#111A2E]">
                          <span className="text-[9px] text-[#5A6578] block">Action Items</span>
                          <span className="text-base font-bold text-emerald-600">3 Urgent</span>
                          <span className="text-[8px] text-[#5A6578]">For Leadership</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: 03 Executive Brief */}
                  {step === 2 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#C87D32]" />
                          <div className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            PRINCIPAL'S DAILY MORNING BRIEF
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          READY
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-[#121926] dark:text-[#F5EFE6] font-sans">
                        <div className="p-2 rounded-lg bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/10 flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#C87D32]/20 text-[#C87D32] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                          <span><strong>Faculty:</strong> Teacher Sharma absent; Dr. Mehta assigned to Class 10-A Math (Proxy active).</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/10 flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#C87D32]/20 text-[#C87D32] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                          <span><strong>Finance:</strong> Term II fee reconciliation at 94.2%; ₹45,000 auto-synced with TallyPrime.</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/10 flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#C87D32]/20 text-[#C87D32] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                          <span><strong>Events:</strong> Athletic trials circular dispatched to 48 candidate families with online consent.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 08 — PARENT PORTAL (3 STEPS: 220vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-08"
              num="08"
              title="PARENT PORTAL"
              headline="Keep parents in the loop."
              description="Attendance timestamps, fee receipts, and school updates."
              continuityLabel="PORTAL → ADAPTIVE PATH"
              minHeightClass="min-h-[220vh]"
              steps={[
                { id: 'c8-1', label: 'Gate Attendance' },
                { id: 'c8-2', label: 'Fee Receipt' },
                { id: 'c8-3', label: 'School Circular' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: 01 Gate Attendance */}
                  {step === 0 && (
                    <div className="max-w-md mx-auto p-4 rounded-xl border border-emerald-500/30 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          <span className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            GATE ENTRY NOTIFICATION
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-[#5A6578]">08:14 AM IST</span>
                      </div>

                      <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-[10px]">
                          <span className="font-bold text-emerald-700 dark:text-emerald-400">ARRIVED AT CAMPUS ✓</span>
                          <span className="text-[#5A6578]">Turnstile #02</span>
                        </div>
                        <p className="text-xs text-[#121926] dark:text-[#F5EFE6]">
                          <strong>Aarav Sharma</strong> checked in at North Gate. Facial recognition matched (99.8%).
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center font-mono text-[10px]">
                        <div className="p-2 rounded bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/15">
                          <span className="text-[#5A6578] block">Attendance</span>
                          <span className="font-bold text-[#121926] dark:text-[#F5EFE6] text-xs">98.4% (48/49)</span>
                        </div>
                        <div className="p-2 rounded bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 border border-[#C87D32]/15">
                          <span className="text-[#5A6578] block">Punctuality</span>
                          <span className="font-bold text-emerald-600 text-xs">Top 5% Cohort</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: 02 Fee Receipt */}
                  {step === 1 && (
                    <div className="max-w-md mx-auto p-4 rounded-xl border border-emerald-500/30 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            FEES SETTLED • TERM II
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          PAID IN FULL ✓
                        </span>
                      </div>

                      <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/20 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] font-mono text-[#5A6578] block">Amount Settled</span>
                          <span className="text-xl font-bold font-mono text-[#121926] dark:text-[#F5EFE6]">₹ 45,000.00</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] font-mono text-[#5A6578] block">Channel</span>
                          <span className="font-bold text-xs text-emerald-600">UPI Instant Autopay</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: 03 School Circular */}
                  {step === 2 && (
                    <div className="max-w-lg mx-auto p-4 rounded-xl border border-[#C87D32]/30 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#C87D32]" />
                          <div className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                            PRINCIPAL'S CIRCULAR #CIR-42
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#C87D32]/10 text-[#C87D32] font-mono text-[9px] font-bold">
                          NOTICE
                        </span>
                      </div>

                      <div className="space-y-1.5 p-3 rounded-lg border border-[#C87D32]/15 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60">
                        <h4 className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                          Annual Inter-School Sports Day & Selection Trials
                        </h4>
                        <p className="text-[#526071] dark:text-[#A6B4C9] text-xs leading-relaxed">
                          Athletics, Basketball, and Chess trials begin this Thursday, 10th October at 09:00 AM at the Main Athletics Stadium.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        <button className="px-3 py-1.5 rounded border border-[#C87D32]/30 text-[#121926] dark:text-[#F5EFE6] font-mono text-[10px] hover:bg-[#C87D32]/10 flex items-center justify-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#C87D32]" />
                          <span>Add to Calendar (10-Oct)</span>
                        </button>
                        <button className="px-3 py-1.5 rounded bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-mono text-[10px] font-bold hover:bg-[#C87D32] flex items-center justify-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Consent: Approved ✓</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* CHAPTER 09 — ADAPTIVE LEARNING (3 STEPS: 220vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-09"
              num="09"
              title="ADAPTIVE LEARNING"
              headline="Learning that adapts."
              description="Dynamic branching paths based on real-time student mastery."
              continuityLabel="ADAPTIVE PATH → LEGAL EDUCATION"
              minHeightClass="min-h-[220vh]"
              steps={[
                { id: 'c9-1', label: 'Diagnostic Problem' },
                { id: 'c9-2', label: 'Remediation Path' },
                { id: 'c9-3', label: 'Mastery Accelerated' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: 01 Diagnostic Problem */}
                  {step === 0 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/30 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="font-mono text-[10px] text-[#C87D32] font-bold">
                          DIAGNOSTIC CHALLENGE • FACTORING
                        </div>
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-mono text-[9px] font-bold">
                          MISCONCEPTION FLAGGED
                        </span>
                      </div>

                      <div className="p-3 rounded-lg border border-[#C87D32]/15 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1">
                        <span className="text-[9px] font-mono text-[#5A6578] block">Problem:</span>
                        <div className="font-editorial text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                          Solve by factoring: 6x² + 11x - 10 = 0
                        </div>
                      </div>

                      <div className="p-3 rounded-lg border border-rose-400/30 bg-rose-50/15 dark:bg-rose-950/20 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono text-rose-600 dark:text-rose-400 font-bold">
                          <span>Student Submission:</span>
                          <span>(3x - 2)(2x + 5) = 0</span>
                        </div>
                        <p className="text-xs text-[#121926] dark:text-[#F5EFE6]">
                          <strong>AI Diagnosis:</strong> Correct factors identified (15 and 4), but reversed inner signs on negative factorization.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 1: 02 Remediation Path */}
                  {step === 1 && (
                    <div className="p-4 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#38BDF8]/20 pb-2">
                        <div className="font-mono text-[10px] text-[#0284C7] dark:text-[#38BDF8] font-bold">
                          CONCEPTUAL REMEDIATION • AC-TILES
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          VERIFIED
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-mono">
                        <div className="p-2 rounded-lg bg-[#FAF5EB] dark:bg-[#111A2E] border border-[#38BDF8]/20">
                          <span className="text-[9px] text-[#5A6578] block">Step 1: Product</span>
                          <span className="font-bold text-[#121926] dark:text-[#F5EFE6]">a · c = -60</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAF5EB] dark:bg-[#111A2E] border border-[#38BDF8]/20">
                          <span className="text-[9px] text-[#5A6578] block">Step 2: Factors</span>
                          <span className="font-bold text-emerald-600">+15 and -4</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAF5EB] dark:bg-[#111A2E] border border-[#38BDF8]/20">
                          <span className="text-[9px] text-[#5A6578] block">Step 3: Group</span>
                          <span className="font-bold text-[#0284C7] dark:text-[#38BDF8]">(2x + 5)(3x - 2)</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 text-xs font-mono text-emerald-800 dark:text-emerald-300">
                        <span>Solution Confirmed: <strong>x = -5/2</strong> or <strong>x = 2/3</strong>. Geometric sign tile cleared.</span>
                      </div>
                    </div>
                  )}

                  {/* Step 2: 03 Mastery Accelerated */}
                  {step === 2 && (
                    <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">
                          <Award className="w-4 h-4 text-emerald-600" />
                          <span>MASTERY UNLOCKED • FAST-TRACK</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">
                          98% MASTERY
                        </span>
                      </div>

                      <div className="p-3 rounded-lg border border-emerald-500/20 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-1">
                        <span className="text-[9px] font-mono text-emerald-600 font-bold block">
                          🌟 OLYMPIAD CHALLENGE UNLOCKED
                        </span>
                        <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                          “Prove that if a, b, c are odd integers, ax² + bx + c = 0 cannot have rational roots.”
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 font-mono text-[10px]">
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">+250 XP Awarded</span>
                        <button className="px-3 py-1 rounded bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-mono text-[10px] font-bold">
                          Launch Workspace ➔
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />


            {/* =============================================================== */}
            {/* CHAPTER 10 — LAW EDUCATION (3 STEPS: 220vh) */}
            {/* =============================================================== */}
            <InteractiveChapter
              id="chapter-10"
              num="10"
              title="LAW EDUCATION"
              headline="Built for legal learning."
              description="Dedicated legal AI trained on Bare Acts, AIR judgments, and judicial syllabi."
              continuityLabel="LEGAL FOLIO → CAMPUS CONVERGENCE"
              minHeightClass="min-h-[220vh]"
              steps={[
                { id: 'c10-1', label: 'Landmark Precedent' },
                { id: 'c10-2', label: 'Ratio Decidendi' },
                { id: 'c10-3', label: 'Judicial Exam Card' },
              ]}
              renderStep={(step) => (
                <div className="space-y-3">
                  {/* Step 0: 01 Landmark Precedent */}
                  {step === 0 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="flex items-center gap-2">
                          <Scale className="w-4 h-4 text-[#C87D32]" />
                          <div>
                            <div className="font-editorial font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                              SUPREME COURT OF INDIA • CONSTITUTION BENCH
                            </div>
                            <div className="font-mono text-[9px] text-[#5A6578]">
                              AIR 1973 SC 1461
                            </div>
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          13-JUDGE BENCH ✓
                        </span>
                      </div>

                      <div className="p-3 rounded-lg border border-[#C87D32]/15 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1">
                        <span className="text-[9px] font-mono text-[#5A6578] block">Citation:</span>
                        <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                          Kesavananda Bharati v. State of Kerala
                        </div>
                        <p className="text-[10px] font-mono text-[#5A6578] pt-1">
                          Largest constitutional bench in Indian judicial history (68-day hearing).
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 1: 02 Ratio Decidendi */}
                  {step === 1 && (
                    <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="font-mono text-[10px] text-[#C87D32] font-bold">
                          RATIO DECIDENDI • CORE DOCTRINE
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono text-[9px] font-bold">
                          7-6 MAJORITY
                        </span>
                      </div>

                      <div className="p-3 rounded-lg border-l-4 border-[#C87D32] bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 space-y-1">
                        <div className="font-editorial text-sm font-bold text-[#121926] dark:text-[#F5EFE6]">
                          The Basic Structure Doctrine (Article 368 Limits)
                        </div>
                        <p className="italic text-xs text-[#121926] dark:text-[#F5EFE6] leading-relaxed">
                          “Parliament’s constituent power under Article 368 does not extend to altering the basic structure or essential framework of the Constitution.”
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 2: 03 Judicial Exam Card */}
                  {step === 2 && (
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-[#FAF5EB] dark:bg-[#111A2E] space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-[#C87D32]/15 pb-2">
                        <div className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">
                          JUDICIAL SERVICE EXAM PREP • CLAT PG / PCS-J
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">
                          94% RETENTION
                        </span>
                      </div>

                      <div className="space-y-1.5 p-3 rounded-lg border border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/20 font-mono text-[11px] text-[#121926] dark:text-[#F5EFE6]">
                        <div>✓ 1. Shankari Prasad & Sajjan Singh doctrine of unlimited power</div>
                        <div>✓ 2. Golaknath: Fundamental rights position</div>
                        <div>✓ 3. 24th Amendment validity & Sikri CJ harmonization</div>
                        <div>✓ 4. Formulation of Basic Structure limitations</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            />

            {/* =============================================================== */}
            {/* 28. CONVERGENCE FINALE */}
            {/* =============================================================== */}
            <section className="pt-12 pb-8 text-center space-y-4">
              <RevealEyebrow>
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-[#C87D32] flex items-center justify-center bg-[#FAF5EB] dark:bg-[#0E1524] shadow-md">
                  <span className="font-editorial text-xl font-bold text-[#C87D32] dark:text-[#E5A955] italic">
                    Æ
                  </span>
                </div>

                <div className="font-mono text-[10px] tracking-widest text-[#C87D32] uppercase mt-3">
                  AI-EDUCATION OPERATING SYSTEM
                </div>
              </RevealEyebrow>

              <RevealHeading>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                  One campus. <br />
                  <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                    One intelligent system.
                  </span>
                </h2>
              </RevealHeading>

              <RevealDescription>
                <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-md mx-auto">
                  10 connected capabilities working seamlessly as your digital campus infrastructure.
                </p>
              </RevealDescription>

              <RevealCTA>
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
              </RevealCTA>
            </section>

          </main>
        </div>
      </div>

    </div>
  );
};
