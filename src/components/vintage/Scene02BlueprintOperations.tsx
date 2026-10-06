import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Building2, Cpu, GraduationCap, Coins, Users, BookOpen, HeartHandshake } from 'lucide-react';
import {
  RevealEyebrow,
  RevealHeading,
  RevealDescription,
  RevealVisual,
  RevealCTA
} from '../common/ScrollReveal';

interface BuildingNode {
  id: string;
  name: string;
  type: string;
  icon: React.ElementType;
  x: number; // percentage in SVG coordinate space (0-1000)
  y: number; // percentage in SVG coordinate space (0-600)
  details: string;
  metric: string;
}

const BUILDINGS: BuildingNode[] = [
  { id: 'academics', name: 'Academics', type: 'Curriculum & Classrooms', icon: GraduationCap, x: 200, y: 150, details: 'Syllabus matrices, timetable streams, and departmental records.', metric: '48 Departments' },
  { id: 'finance', name: 'Finance', type: 'Bursar & Ledgers', icon: Coins, x: 800, y: 150, details: 'Bi-directional Tally sync, digital fee collection, and reconciliation.', metric: '100% Reconciled' },
  { id: 'exams', name: 'Exams', type: 'Hall Seating & Marks', icon: BookOpen, x: 160, y: 440, details: 'Dynamic paper builder, anti-fraud QR hall tickets, and AI rubrics.', metric: 'Auto-Evaluated' },
  { id: 'ai-learning', name: 'AI Learning', type: 'Curriculum Engine', icon: Cpu, x: 500, y: 110, details: 'Textbook-grounded AI companion with verifiable page citations.', metric: 'Zero Hallucination' },
  { id: 'teachers', name: 'Teachers', type: 'Faculty Allocation', icon: Building2, x: 840, y: 440, details: 'One-tap attendance, dynamic proxy allocation, and lesson plans.', metric: 'Instant Proxies' },
  { id: 'students', name: 'Students', type: 'Autonomous Cohort', icon: Users, x: 340, y: 480, details: 'Individualized practice quizzes, doubt resolution, and lecture notes.', metric: '3,200+ Active' },
  { id: 'parents', name: 'Parents', type: 'Guardian Connection', icon: HeartHandshake, x: 660, y: 480, details: 'Live attendance alerts, fee receipts, and multi-child tracking.', metric: 'Direct WhatsApp' }
];

export const Scene02BlueprintOperations: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(BUILDINGS.length);
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingNode | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Auto-step sequence simulation to bring campus to life
  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= BUILDINGS.length ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const centerNode = { x: 500, y: 310 };

  return (
    <section id="scene-02" className="relative py-12 sm:py-16 px-6 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">

      {/* Vintage Blueprint Background Grid */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#161D2B_1px,transparent_1px)] dark:bg-[radial-gradient(#FAF6EE_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-6 sm:space-y-8">

        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-900/20 dark:border-amber-400/20 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <RevealEyebrow>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
                <Compass className="w-4 h-4 text-amber-700 dark:text-amber-400 animate-spin-slow" />
                <span>01 / ARCHITECTURAL BLUEPRINT</span>
              </div>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 dark:text-slate-50 leading-tight">
                One campus. <br />
                <span className="italic font-normal text-amber-900 dark:text-amber-300">Every operation.</span>
              </h2>
            </RevealHeading>
            <RevealDescription>
              <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                Bring academics, finance, learning and communication together.
              </p>
            </RevealDescription>
          </div>

          {/* Interactive Step / Auto Controller */}
          <RevealCTA className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-full border border-amber-900/30 dark:border-amber-400/30 bg-[#FAF6EE] dark:bg-[#0C1424] text-xs font-mono font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CONNECTED: {activeStep} / {BUILDINGS.length} DEPARTMENTS</span>
            </div>
            <button
              onClick={() => {
                setAutoRotate(!autoRotate);
                if (!autoRotate) setActiveStep(BUILDINGS.length);
              }}
              className="px-4 py-2 rounded-full border border-amber-800/40 dark:border-amber-400/40 bg-transparent text-xs font-mono font-bold text-amber-900 dark:text-amber-300 hover:bg-amber-900/10 transition-colors cursor-pointer"
            >
              {autoRotate ? '⏸ PAUSE SEQUENCE' : '▶ AUTO TOUR'}
            </button>
          </RevealCTA>
        </div>

        {/* Blueprint Visual Composition (Card Frame Removed - Organic Seamless Flow) */}
        <RevealVisual className="relative w-full py-2 overflow-hidden">


          {/* SVG Blueprint Canvas - Scaled Down & Balanced */}
          <div className="relative w-full aspect-[16/8.5] max-h-[410px] min-h-[280px] max-w-4xl mx-auto">
            <svg viewBox="0 0 1000 600" className="w-full h-full select-none" fill="none">

              <defs>
                {/* Blueprint Line Pattern */}
                <pattern id="blueprintGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
                </pattern>

                {/* Animated Golden Pulse Gradient */}
                <linearGradient id="blueprintBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C5A059" stopOpacity="0.2" />
                </linearGradient>

                <filter id="coreGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Background */}
              <rect width="1000" height="600" fill="url(#blueprintGrid)" className="text-amber-900 dark:text-amber-400" />

              {/* Concentric Calibration Circles from Center */}
              <circle cx={centerNode.x} cy={centerNode.y} r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-amber-800/30 dark:text-amber-400/30" />
              <circle cx={centerNode.x} cy={centerNode.y} r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="3 8" className="text-amber-800/20 dark:text-amber-400/20" />
              <circle cx={centerNode.x} cy={centerNode.y} r="320" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 10" className="text-amber-800/15 dark:text-amber-400/15" />

              {/* Animated Blueprint Drawing Lines Connecting Center to Each Active Building */}
              {BUILDINGS.map((building, idx) => {
                const isActive = idx < activeStep;
                return (
                  <g key={`line-${building.id}`}>
                    {/* Underlying drafting blueprint line */}
                    <line
                      x1={centerNode.x}
                      y1={centerNode.y}
                      x2={building.x}
                      y2={building.y}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="text-amber-900/20 dark:text-amber-400/20"
                    />

                    {/* Active Drawn Vector with Animated Ink Path */}
                    {isActive && (
                      <>
                        <motion.line
                          x1={centerNode.x}
                          y1={centerNode.y}
                          x2={building.x}
                          y2={building.y}
                          stroke="url(#blueprintBeam)"
                          strokeWidth="2.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                        {/* Moving Data Particle Dot along the line */}
                        <motion.circle
                          r="4"
                          fill="#38BDF8"
                          animate={{
                            cx: [centerNode.x, building.x, centerNode.x],
                            cy: [centerNode.y, building.y, centerNode.y]
                          }}
                          transition={{
                            duration: 3 + idx * 0.4,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      </>
                    )}
                  </g>
                );
              })}

              {/* Central Core: AI-EDUCATION */}
              <g transform={`translate(${centerNode.x}, ${centerNode.y})`} className="cursor-pointer" onClick={() => setSelectedBuilding(null)}>
                <circle r="72" fill="#FAF6EE" className="dark:fill-[#080E1C]" stroke="#C5A059" strokeWidth="2.5" filter="url(#coreGlow)" />
                <circle r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-sky-500 animate-spin-slow" />

                <text textAnchor="middle" y="-14" className="font-mono text-[11px] font-bold fill-sky-700 dark:fill-sky-300 tracking-widest">
                  CORE ENGINE
                </text>
                <text textAnchor="middle" y="8" className="font-serif font-bold text-base sm:text-lg fill-slate-950 dark:fill-slate-50 tracking-tight">
                  AI-EDUCATION
                </text>
                <text textAnchor="middle" y="26" className="font-serif text-[11px] italic font-semibold fill-amber-900 dark:fill-amber-300">
                  Unified Campus
                </text>
              </g>

              {/* Building Nodes Positioned Around Campus with ICONS inside the circles */}
              {BUILDINGS.map((b, idx) => {
                const isActive = idx < activeStep;
                const isSelected = selectedBuilding?.id === b.id;
                const IconComponent = b.icon;

                return (
                  <g
                    key={b.id}
                    transform={`translate(${b.x}, ${b.y})`}
                    className="cursor-pointer group"
                    onClick={() => {
                      setSelectedBuilding(b);
                      setAutoRotate(false);
                    }}
                  >
                    {/* Pulsing ring when active */}
                    {isActive && (
                      <circle
                        r="36"
                        fill="none"
                        stroke="#C5A059"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        className="animate-spin-slow opacity-60"
                      />
                    )}

                    {/* Node Circle Background */}
                    <circle
                      r="28"
                      className={`transition-all duration-300 ${isSelected
                          ? 'fill-amber-900 dark:fill-amber-400 stroke-amber-900 dark:stroke-amber-400 shadow-xl'
                          : isActive
                            ? 'fill-[#FAF6EE] dark:fill-[#0F1A2E] stroke-amber-700 dark:stroke-amber-400'
                            : 'fill-[#FAF6EE]/50 dark:fill-[#0F1A2E]/50 stroke-slate-400/30 opacity-40'
                        }`}
                      strokeWidth="2"
                    />

                    {/* ICON INSIDE THE CIRCLE */}
                    <foreignObject x="-16" y="-16" width="32" height="32" className="pointer-events-none">
                      <div className="w-full h-full flex items-center justify-center">
                        <IconComponent
                          className={`w-5 h-5 transition-colors ${isSelected
                              ? 'text-white dark:text-slate-950 stroke-[2.5]'
                              : isActive
                                ? 'text-amber-800 dark:text-amber-300 stroke-[2.2]'
                                : 'text-slate-400 dark:text-slate-500 stroke-[1.8]'
                            }`}
                        />
                      </div>
                    </foreignObject>

                    {/* Building Name Label */}
                    <text
                      textAnchor="middle"
                      y="46"
                      className={`font-serif text-xs sm:text-sm font-bold transition-colors ${isActive
                          ? 'fill-slate-950 dark:fill-slate-50 font-bold'
                          : 'fill-slate-400 dark:fill-slate-600'
                        }`}
                    >
                      {b.name}
                    </text>

                    {/* Building Subtype */}
                    <text
                      textAnchor="middle"
                      y="59"
                      className="font-mono text-[9px] fill-amber-900 dark:fill-amber-400 font-semibold"
                    >
                      {b.type}
                    </text>
                  </g>
                );
              })}

            </svg>
          </div>

          {/* Interactive Inspector Strip for Selected / Active Building */}
          <div className="mt-4 pt-3.5 border-t border-amber-900/20 dark:border-amber-400/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="font-mono text-[11px] font-bold tracking-widest text-amber-900 dark:text-amber-400 uppercase">
                {selectedBuilding ? `SELECTED BUILDING: ${selectedBuilding.name.toUpperCase()}` : 'CAMPUS CONNECTIVITY PULSE'}
              </span>
              <p className="font-serif text-sm sm:text-base font-bold text-slate-950 dark:text-slate-50">
                {selectedBuilding ? selectedBuilding.details : 'All 7 institutional divisions synchronize continuous data streams through the central AI-Education hub.'}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-sky-700 dark:text-sky-300 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-400/30">
                {selectedBuilding ? selectedBuilding.metric : 'Zero Silos • 100% Uptime'}
              </span>
            </div>
          </div>

        </RevealVisual>

      </div>
    </section>
  );
};
