import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
} from 'lucide-react';
import type { PageId } from '../../types';
import {
  ScrollReveal,
  RevealEyebrow,
  RevealHeading,
  RevealCTA,
  RevealVisual
} from '../common/ScrollReveal';

interface HomeDeploymentPricingProps {
  onNavigate: (page: PageId) => void;
  onOpenDemo: () => void;
}

export const HomeDeploymentPricing: React.FC<HomeDeploymentPricingProps> = ({
  onNavigate,
  onOpenDemo,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1200);
  const [cardWidth, setCardWidth] = useState<number>(370);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      range: 'DAYS 01 – 03',
      phaseNum: 'PHASE 01',
      badge: 'DATA & SETUP',
      title: 'Historical Data Ingestion & Cleanse',
      desc: 'Seamless ingestion of student biodata, fee ledgers, and contact records from Excel or legacy tools with zero data loss.',
      deliverables: [
        'Automated duplicate record deduplication',
        'Historical student fee ledger validation',
        'Faculty subject & room mapping',
        'Zero data loss audit verification report',
      ],
      icon: Database,
      status: 'Zero Data Loss',
    },
    {
      num: '02',
      range: 'DAYS 04 – 07',
      phaseNum: 'PHASE 02',
      badge: 'ACADEMIC OPERATIONS',
      title: 'Timetable Rules & Faculty Setup',
      desc: 'Classrooms, lab batches, proxy substitution rules, and native bi-directional TallyPrime ERP connection.',
      deliverables: [
        'Room capacity & lab constraints loaded',
        'Proxy substitution engine validated',
        'Faculty mobile portal orientation',
        'Native Tally ERP 9 / Prime XML sync verified',
      ],
      icon: Calendar,
      status: 'Full Orientation',
    },
    {
      num: '03',
      range: 'DAYS 08 – 10',
      phaseNum: 'PHASE 03',
      badge: 'AI GROUNDING',
      title: 'Curriculum & AI Grounding',
      desc: 'Board syllabi, textbooks, and institutional question banks ingested with verified zero-hallucination citation grounding.',
      deliverables: [
        'CBSE / ICSE / IB board textbook ingestion',
        'Faculty course packs & question banks indexed',
        'AI citation grounding validation tests',
        'Role-based permissions & teacher copilot ready',
      ],
      icon: Sparkles,
      status: 'Zero Hallucination',
    },
    {
      num: '04',
      range: 'DAYS 11 – 14',
      phaseNum: 'PHASE 04',
      badge: 'GO LIVE',
      title: 'Staff Training & Campus Go-Live',
      desc: 'Hands-on orientation across all divisions, parent WhatsApp credentials dispatch, and production cutover with zero downtime.',
      deliverables: [
        'Full campus live activation across all divisions',
        'Parent portal credentials dispatched via WhatsApp',
        '1-Tap attendance & fee collection operational',
        '24/7 dedicated institutional support pod active',
      ],
      icon: ShieldCheck,
      status: 'Live on Campus',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setCardWidth(Math.min(window.innerWidth - 60, 330));
        } else if (window.innerWidth < 1024) {
          setCardWidth(340);
        } else {
          setCardWidth(370);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50 && activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else if (diff < -50 && activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
    setTouchStart(null);
  };

  const gap = 24;
  const totalTrackWidth = steps.length * (cardWidth + gap) - gap;
  const maxOffset = Math.max(0, totalTrackWidth - containerWidth + 32);
  const targetOffset = activeStep * (cardWidth + gap);
  const trackOffset = -Math.min(targetOffset, maxOffset);

  return (
    <ScrollReveal
      as="section"
      yOffset={35}
      duration={0.7}
      className="py-24 border-t border-[#C87D32]/15 relative z-10 overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        {/* Section Header (Center Aligned) */}
        <div className="flex flex-col items-center text-center space-y-4 pb-6 border-b border-[#C87D32]/15 max-w-4xl mx-auto">
          <RevealEyebrow>
            <span className="text-xs font-bold tracking-[0.25em] text-[#C87D32] dark:text-[#E5A955] uppercase block font-sans">
              07 / ZERO-DOWNTIME ROLLOUT
            </span>
          </RevealEyebrow>
          <RevealHeading>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-[1.15]">
              Live in 14 days. <br />
              <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                Zero operational disruption.
              </span>
            </h2>
          </RevealHeading>
          <RevealCTA>
            <button
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 text-sm font-serif font-bold italic text-[#121926] dark:text-[#F5EFE6] border-b border-[#C87D32] pb-0.5 hover:text-[#C87D32] transition-colors group pt-2"
            >
              <span>View transparent pricing</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </RevealCTA>
        </div>

        {/* HORIZONTAL INTERACTIVE IMPLEMENTATION PIPELINE */}
        <RevealVisual className="space-y-8 w-full">

          {/* DESKTOP (lg+): 4-CARD FULL-WIDTH GRID WITH FOCUSED ACTIVE EXPANSION */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-3 xl:gap-4 w-full items-center py-8">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              const StepIcon = st.icon;

              return (
                <motion.div
                  key={st.num}
                  onClick={() => setActiveStep(idx)}
                  animate={{
                    scale: isActive ? 1.07 : 0.88,
                    opacity: isActive ? 1 : 0.48,
                  }}
                  whileHover={{
                    scale: isActive ? 1.08 : 0.92,
                    opacity: isActive ? 1 : 0.75,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`relative rounded-2xl flex flex-col justify-between transition-colors duration-300 cursor-pointer select-none ${isActive
                    ? 'min-h-[390px] xl:min-h-[410px] p-5 xl:p-6 border-2 border-[#C87D32] dark:border-[#E5A955] bg-[#FAF5EB] dark:bg-[#0D1525] shadow-[0_24px_55px_rgba(200,125,50,0.32)] ring-2 ring-[#C87D32]/35 z-30'
                    : 'min-h-[290px] xl:min-h-[310px] p-3.5 xl:p-4 border border-[#C87D32]/20 dark:border-[#C87D32]/25 bg-[#FAF5EB]/50 dark:bg-[#070D18]/50 z-10'
                    }`}
                >
                  {/* Top Row: Phase Number & Timing Pill */}
                  <div className={`flex items-center justify-between gap-2 border-b border-[#C87D32]/15 ${isActive ? 'pb-3' : 'pb-2'
                    }`}>
                    <span className={`font-serif font-extrabold tracking-tight transition-all ${isActive
                      ? 'text-2xl xl:text-3xl text-[#C87D32] dark:text-[#E5A955]'
                      : 'text-lg xl:text-xl text-[#8A95A5] dark:text-[#64748B]'
                      }`}>
                      {st.num}
                    </span>
                    <div className={`flex items-center gap-1 rounded-full border font-mono font-bold whitespace-nowrap transition-all ${isActive
                      ? 'px-2.5 py-0.5 text-[10px] border-[#C87D32]/40 bg-[#C87D32]/15 text-[#C87D32] dark:text-[#E5A955]'
                      : 'px-2 py-0.5 text-[9px] border-[#C87D32]/20 bg-[#C87D32]/5 text-[#8A95A5]'
                      }`}>
                      <span>{st.range}</span>
                    </div>
                  </div>

                  {/* Middle Identity: Icon + Badge + Title */}
                  <div className={isActive ? 'py-3 space-y-1.5' : 'py-2 space-y-1'}>
                    <div className="flex items-center gap-2.5">
                      <div className={`rounded-lg flex items-center justify-center shrink-0 transition-all ${isActive
                        ? 'w-8 h-8 bg-[#C87D32] text-white shadow-md'
                        : 'w-7 h-7 bg-[#C87D32]/15 text-[#C87D32] dark:text-[#E5A955]'
                        }`}>
                        <StepIcon className={isActive ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-mono text-[9px] font-bold tracking-[0.16em] uppercase text-[#C87D32] dark:text-[#E5A955] truncate">
                          {st.badge}
                        </span>
                        <h3 className={`font-serif font-bold text-[#121926] dark:text-[#FAF5EB] leading-tight truncate ${isActive ? 'text-base xl:text-lg' : 'text-sm'
                          }`}>
                          {st.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Inset Activities Box */}
                  <div className={`rounded-xl border border-[#C87D32]/15 bg-[#FAF0E1]/80 dark:bg-[#060A13]/85 flex-1 flex flex-col justify-between ${isActive ? 'p-3 space-y-2' : 'p-2.5 space-y-1.5'
                    }`}>
                    <p className={`text-[#526071] dark:text-[#CBD5E1] font-serif italic ${isActive ? 'text-[11px] leading-relaxed line-clamp-2' : 'text-[10px] leading-snug line-clamp-1'
                      }`}>
                      {st.desc}
                    </p>

                    <div className="space-y-1 pt-1.5 border-t border-[#C87D32]/10">
                      {st.deliverables.slice(0, isActive ? 3 : 2).map((d, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[#121926] dark:text-[#E2E8F0]">
                          <CheckCircle2 className={`shrink-0 mt-0.5 ${isActive ? 'w-3 h-3 text-emerald-500' : 'w-2.5 h-2.5 text-emerald-600/60 dark:text-emerald-400/60'
                            }`} />
                          <span className={`font-medium leading-tight truncate ${isActive ? 'text-[10.5px]' : 'text-[9.5px]'
                            }`}>
                            {d}
                          </span>
                        </div>
                      ))}
                      {!isActive && st.deliverables.length > 2 && (
                        <span className="text-[9px] font-mono text-[#8A95A5] pl-4 block">
                          +{st.deliverables.length - 2} more deliverables
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Active Glow Indicator */}
                  <div className="pt-2.5 flex items-center justify-center">
                    <div className={`h-1 rounded-full transition-all duration-300 ${isActive
                      ? 'w-14 bg-gradient-to-r from-[#C87D32] to-[#E5A955] shadow-[0_0_10px_rgba(200,125,50,0.5)]'
                      : 'w-3 bg-[#C87D32]/20'
                      }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE / TABLET (< lg): TOUCH-SWIPE SLIDING CAROUSEL */}
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:hidden relative w-full overflow-hidden py-4"
          >
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FAF5EB] dark:from-[#060B14] to-transparent z-10 pointer-events-none opacity-80" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAF5EB] dark:from-[#060B14] to-transparent z-10 pointer-events-none opacity-80" />

            <motion.div
              animate={{ x: trackOffset }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              className="flex gap-4 sm:gap-5 pl-2 pr-8 cursor-grab active:cursor-grabbing items-center"
            >
              {steps.map((st, idx) => {
                const isActive = activeStep === idx;
                const StepIcon = st.icon;

                return (
                  <motion.div
                    key={st.num}
                    onClick={() => setActiveStep(idx)}
                    animate={{
                      scale: isActive ? 1.04 : 0.88,
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`relative shrink-0 rounded-2xl flex flex-col justify-between transition-colors select-none ${isActive
                      ? 'w-[280px] sm:w-[310px] min-h-[370px] p-5 border-2 border-[#C87D32] dark:border-[#E5A955] bg-[#FAF5EB] dark:bg-[#0D1525] shadow-[0_16px_40px_rgba(200,125,50,0.25)] z-20'
                      : 'w-[240px] sm:w-[260px] min-h-[290px] p-4 border border-[#C87D32]/20 dark:border-[#C87D32]/25 bg-[#FAF5EB]/60 dark:bg-[#080E1A]/70 z-10'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#C87D32]/15">
                      <span className={`font-serif font-extrabold ${isActive ? 'text-2xl text-[#C87D32] dark:text-[#E5A955]' : 'text-lg text-[#8A95A5]'
                        }`}>
                        {st.num}
                      </span>
                      <div className="px-2 py-0.5 rounded-full border border-[#C87D32]/30 bg-[#C87D32]/10 font-mono text-[9px] font-bold text-[#C87D32] dark:text-[#E5A955]">
                        {st.range}
                      </div>
                    </div>

                    <div className="py-2 space-y-1">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-[#C87D32] text-white shadow-md' : 'bg-[#C87D32]/15 text-[#C87D32]'
                          }`}>
                          <StepIcon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="block font-mono text-[9px] font-bold tracking-[0.16em] uppercase text-[#C87D32] truncate">
                            {st.badge}
                          </span>
                          <h3 className="font-serif text-sm font-bold text-[#121926] dark:text-[#FAF5EB] truncate">
                            {st.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl p-2.5 bg-[#FAF0E1]/80 dark:bg-[#060A13]/85 border border-[#C87D32]/15 space-y-1.5 flex-1">
                      <p className="text-[10px] text-[#526071] dark:text-[#CBD5E1] font-serif italic line-clamp-2">
                        {st.desc}
                      </p>
                      <div className="space-y-1 pt-1 border-t border-[#C87D32]/10">
                        {st.deliverables.slice(0, isActive ? 3 : 2).map((d, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[#121926] dark:text-[#E2E8F0]">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-medium text-[9.5px] leading-tight truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-center">
                      <div className={`h-1 rounded-full transition-all duration-300 ${isActive ? 'w-12 bg-gradient-to-r from-[#C87D32] to-[#E5A955]' : 'w-3 bg-[#C87D32]/20'
                        }`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          {/* Numbered Step Pills (01, 02, 03, 04 - Direct Jump Navigation) */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.num}
                  onClick={() => setActiveStep(idx)}
                  aria-label={`Jump to phase ${st.num}`}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-mono text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center ${isActive
                    ? 'bg-[#C87D32] text-white shadow-md ring-4 ring-[#C87D32]/25 scale-105'
                    : 'border border-[#C87D32]/25 bg-white/50 dark:bg-[#0A101D]/50 text-[#6B788E] dark:text-[#A6B4C9] hover:border-[#C87D32] hover:text-[#C87D32]'
                    }`}
                >
                  {st.num}
                </button>
              );
            })}
          </div>
        </RevealVisual>

        {/* Predictable Institutional Pricing Banner */}
        <RevealCTA>
          <div className="p-5 rounded-2xl border border-[#C87D32]/30 bg-[#C87D32]/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <div className="space-y-0.5 text-center sm:text-left">
              <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                Predictable Institutional Pricing
              </div>
              <p className="text-xs text-[#526071] dark:text-[#A6B4C9]">
                One transparent implementation fee with zero annual per-student penalty fees.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenDemo}
                className="px-5 py-2 rounded-full bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-serif text-xs font-bold italic hover:bg-[#C87D32] hover:text-white transition-all shadow-sm"
              >
                Request Campus Evaluation
              </button>
            </div>
          </div>
        </RevealCTA>
      </div>
    </ScrollReveal>
  );
};
