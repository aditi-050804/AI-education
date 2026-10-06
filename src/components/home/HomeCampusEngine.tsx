import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  Database,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  Zap,
  RefreshCw,
} from 'lucide-react';
import type { PageId } from '../../types';
import {
  ScrollReveal,
  RevealEyebrow,
  RevealHeading,
  RevealCTA,
  RevealVisual
} from '../common/ScrollReveal';

interface HomeCampusEngineProps {
  onNavigate: (page: PageId) => void;
}

export const HomeCampusEngine: React.FC<HomeCampusEngineProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Tab 0: Timetable simulation state
  const [proxySimulating, setProxySimulating] = useState(false);
  const [proxyStep, setProxyStep] = useState<number>(2);

  const runProxySimulation = () => {
    setProxySimulating(true);
    setProxyStep(1);
    setTimeout(() => {
      setProxyStep(2);
      setProxySimulating(false);
    }, 1100);
  };

  // Tab 1: Socratic AI prompts
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);
  const aiPrompts = [
    {
      q: 'Why does an ice skater spin faster with arms pulled in?',
      grade: 'Grade 11 Physics',
      book: 'NCERT Ch. 7, Page 168',
      formula: 'L = I · ω = constant',
      answer:
        'Zero external torque means angular momentum (L) is conserved. Pulling arms inward decreases moment of inertia (I), forcing angular speed (ω) to increase immediately.',
    },
    {
      q: 'Explain the light-independent Calvin cycle in photosynthesis.',
      grade: 'Grade 11 Biology',
      book: 'NCERT Ch. 13, Page 215',
      formula: '6 CO₂ + 18 ATP + 12 NADPH → C₆H₁₂O₆',
      answer:
        'In the chloroplast stroma, RuBisCO fixes CO₂ into 3-PGA. ATP and NADPH reduce it to G3P to synthesize glucose and regenerate RuBP.',
    },
    {
      q: 'How does the discriminant determine roots of a quadratic?',
      grade: 'Grade 10 Maths',
      book: 'NCERT Ch. 4, Page 88',
      formula: 'Δ = b² - 4ac',
      answer:
        'If Δ > 0: two distinct real roots. If Δ = 0: two equal real roots. If Δ < 0: no real roots (complex conjugates).',
    },
  ];

  // Tab 2: Finance & Tally sync
  const [syncCount, setSyncCount] = useState<number>(142);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastTxId, setLastTxId] = useState<string>('RV-9042');

  const triggerFeeSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setSyncCount((prev) => prev + 1);
      setLastTxId(`RV-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSyncing(false);
    }, 800);
  };

  // Tab 3: Exams & Transcripts
  const [selectedBoard, setSelectedBoard] = useState<'CBSE' | 'ICSE' | 'IB'>('CBSE');
  const boardData = {
    CBSE: {
      student: 'Aarav Sharma',
      roll: 'CBSE-2026-X-0492',
      subjects: [
        { name: 'Mathematics', marks: '98/100', grade: 'A1', pct: 98 },
        { name: 'Physics', marks: '95/100', grade: 'A1', pct: 95 },
        { name: 'Chemistry', marks: '92/100', grade: 'A1', pct: 92 },
        { name: 'English', marks: '96/100', grade: 'A1', pct: 96 },
      ],
      cgpa: '9.8 / 10.0',
      status: 'Distinction',
    },
    ICSE: {
      student: 'Meera Deshmukh',
      roll: 'ICSE-2026-XII-8104',
      subjects: [
        { name: 'Pure Math', marks: '99/100', grade: '1', pct: 99 },
        { name: 'Computer Sci', marks: '97/100', grade: '1', pct: 97 },
        { name: 'Economics', marks: '94/100', grade: '1', pct: 94 },
        { name: 'Literature', marks: '91/100', grade: '2', pct: 91 },
      ],
      cgpa: '95.25% Aggregate',
      status: 'State Merit Rank',
    },
    IB: {
      student: 'Kabir Singhania',
      roll: 'IB-DP-2026-7731',
      subjects: [
        { name: 'Physics HL', marks: '7 / 7', grade: '7', pct: 100 },
        { name: 'Math Analysis', marks: '7 / 7', grade: '7', pct: 100 },
        { name: 'Chemistry HL', marks: '6 / 7', grade: '6', pct: 86 },
        { name: 'TOK & Essay', marks: '3 / 3', grade: 'A', pct: 100 },
      ],
      cgpa: '43 / 45 Points',
      status: 'Bilingual Diploma',
    },
  };

  const capabilities = [
    {
      id: 'timetable',
      num: '01',
      title: 'Timetable & Proxies',
      headline: 'Autonomous proxy matching in 0.04s.',
      desc: 'Automatic faculty reassignment aligned with classroom curriculum the second an absence is logged.',
      stat: '99.8% Proxy Match Accuracy',
      icon: Calendar,
      renderCanvas: () => (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              LIVE PROXY ALLOCATION BUS
            </span>
            <button
              onClick={runProxySimulation}
              disabled={proxySimulating}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-[#C87D32]/40 bg-[#FAF5EB] dark:bg-[#0A101D] hover:border-[#C87D32] text-[#121926] dark:text-[#F5EFE6] transition-all font-semibold"
            >
              <RefreshCw className={`w-3 h-3 ${proxySimulating ? 'animate-spin text-[#C87D32]' : ''}`} />
              <span>{proxySimulating ? 'Matching...' : 'Simulate Absence'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-1">
              <div className="text-[11px] text-[#C87D32] font-semibold">09:00 AM • Room 104</div>
              <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                Physics III
              </div>
              <div className="text-xs text-[#526071] dark:text-[#A6B4C9]">Prof. K. Sen</div>
              <div className="text-xs text-emerald-600 font-semibold">✓ On Schedule</div>
            </div>

            <div
              className={`p-3 rounded-xl border transition-all duration-300 space-y-1 ${proxyStep === 1
                  ? 'border-amber-500/60 bg-amber-500/10'
                  : 'border-[#38BDF8] bg-[#38BDF8]/10'
                }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#C87D32] font-semibold">10:15 AM • Room 202</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${proxyStep === 1
                      ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 animate-pulse'
                      : 'bg-[#38BDF8]/20 text-[#0284C7] dark:text-[#38BDF8]'
                    }`}
                >
                  {proxyStep === 1 ? 'ABSENT' : 'PROXY ASSIGNED ✓'}
                </span>
              </div>
              <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                Mathematics
              </div>
              <div className="text-xs text-[#526071] dark:text-[#A6B4C9]">
                {proxyStep === 1 ? (
                  <span className="text-amber-600 font-semibold animate-pulse">
                    Scanning teachers...
                  </span>
                ) : (
                  <span>
                    Dr. Gupta (Proxy) <span className="line-through opacity-50 ml-1">Dr. Sharma</span>
                  </span>
                )}
              </div>
              <div className="text-xs text-emerald-600 font-semibold">
                {proxyStep === 1 ? 'Latency: 0.04s' : 'Curriculum: Ch. 6 Calculus'}
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-1">
              <div className="text-[11px] text-[#C87D32] font-semibold">11:30 AM • Lab 2</div>
              <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                Chemistry Lab
              </div>
              <div className="text-xs text-[#526071] dark:text-[#A6B4C9]">Dr. Roy</div>
              <div className="text-xs text-emerald-600 font-semibold">✓ On Schedule</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ai-learning',
      num: '02',
      title: 'AI Study Companion',
      headline: 'Socratic doubt clearing with verified citations.',
      desc: '24/7 personal student guidance strictly grounded in NCERT textbooks with zero hallucinations.',
      stat: 'Zero Hallucinations Guarantee',
      icon: Sparkles,
      renderCanvas: () => {
        const cur = aiPrompts[selectedPrompt];
        return (
          <div className="space-y-3 font-sans text-xs">
            <div className="flex flex-wrap items-center gap-2 border-b border-[#C87D32]/20 pb-2">
              <span className="text-[#C87D32] font-bold text-xs uppercase tracking-wider">Doubt Topic:</span>
              {aiPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPrompt(idx)}
                  className={`px-3 py-1 rounded-full text-xs transition-all font-semibold ${selectedPrompt === idx
                      ? 'bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] border border-[#C87D32]'
                      : 'border border-[#C87D32]/25 text-[#5A6578] dark:text-[#9DA9BE] hover:border-[#C87D32]'
                    }`}
                >
                  Topic 0{idx + 1}
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-1">
              <div className="flex items-center justify-between text-xs text-[#5A6578] dark:text-[#9DA9BE]">
                <span className="font-bold text-[#C87D32]">STUDENT INQUIRY</span>
                <span>{cur.grade}</span>
              </div>
              <div className="text-sm font-medium text-[#121926] dark:text-[#F5EFE6] italic">
                “{cur.q}”
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPrompt}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl border border-emerald-600/30 bg-emerald-500/5 space-y-2"
              >
                <div className="flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-bold border-b border-emerald-600/20 pb-1">
                  <span>SOCRATIC CITATION GROUNDING</span>
                  <span>{cur.book}</span>
                </div>
                <div className="p-1.5 rounded bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 text-xs font-bold text-center">
                  Principle: {cur.formula}
                </div>
                <div className="text-xs text-[#121926] dark:text-[#F5EFE6] leading-relaxed">
                  {cur.answer}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      },
    },
    {
      id: 'finance-tally',
      num: '03',
      title: 'Finance & Tally Sync',
      headline: 'Bi-directional real-time TallyPrime ledger sync.',
      desc: 'UPI and banking fee receipts push into your existing Tally accounts in 0.12 seconds with zero re-entry.',
      stat: '100% Tally XML Sync',
      icon: Database,
      renderCanvas: () => (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" />
              TALLYPRIME XML GATEWAY // PORT 9000
            </span>
            <button
              onClick={triggerFeeSync}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-emerald-600/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 transition-all font-semibold"
            >
              <Zap className={`w-3 h-3 ${isSyncing ? 'animate-bounce text-emerald-500' : ''}`} />
              <span>{isSyncing ? 'Pushing XML...' : 'Simulate Fee Payment'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-2">
            <div className="flex items-center justify-between text-xs pb-1.5 border-b border-[#C87D32]/15">
              <span className="text-[#5A6578] dark:text-[#9DA9BE]">
                VOUCHER #{lastTxId} • TOTAL TODAY: {syncCount}
              </span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SETTLED VIA UPI
              </span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#121926] dark:text-[#F5EFE6]">Dr. Operating Bank A/c</span>
                <span className="font-bold text-emerald-600">₹ 45,000.00</span>
              </div>
              <div className="flex items-center justify-between text-[#526071] dark:text-[#A6B4C9]">
                <span>Cr. Term II Tuition Fee</span>
                <span>₹ 45,000.00</span>
              </div>
            </div>

            <div className="pt-1.5 text-xs text-[#5A6578] dark:text-[#9DA9BE] flex items-center justify-between border-t border-[#C87D32]/10">
              <span>Student: Aarav Sharma (Adm #4829)</span>
              <span className="text-teal-700 dark:text-teal-400 font-bold">
                Latency: 0.12s ✓
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'assessments',
      num: '04',
      title: 'Exams & Transcripts',
      headline: 'Rubric-aligned evaluations to tamper-proof marksheets.',
      desc: 'Automate marks synthesis, grade calculations, and digital transcripts with verified QR codes.',
      stat: 'CBSE, ICSE & IB Certified',
      icon: FileCheck,
      renderCanvas: () => {
        const board = boardData[selectedBoard];
        return (
          <div className="space-y-3 font-sans text-xs">
            <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5" />
                DIGITAL TRANSCRIPT ENGINE
              </span>
              <div className="flex items-center gap-1">
                {(['CBSE', 'ICSE', 'IB'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBoard(b)}
                    className={`px-2.5 py-0.5 rounded text-xs font-bold transition-all ${selectedBoard === b
                        ? 'bg-[#C87D32] text-white shadow-xs'
                        : 'border border-[#C87D32]/25 text-[#5A6578] hover:text-[#121926] dark:hover:text-[#F5EFE6]'
                      }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#0A101D] flex items-center justify-between">
              <div>
                <span className="font-serif text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                  {board.student}
                </span>
                <span className="text-xs text-[#C87D32] block">{board.roll}</span>
              </div>
              <div className="text-right">
                <span className="font-serif text-lg font-bold text-emerald-600">
                  {board.cgpa}
                </span>
                <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold block">
                  ✓ {board.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {board.subjects.map((sub, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-0.5"
                >
                  <div className="text-xs text-[#526071] dark:text-[#A6B4C9] truncate">
                    {sub.name}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                    {sub.marks}
                  </div>
                  <div className="text-xs text-[#C87D32] font-semibold">Grade {sub.grade}</div>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },
  ];

  const currentCap = capabilities[activeTab];

  return (
    <ScrollReveal
      as="section"
      yOffset={35}
      duration={0.7}
      className="py-24 border-t border-[#C87D32]/15 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#C87D32]/15">
          <div className="space-y-2">
            <RevealEyebrow>
              <span className="text-xs font-bold tracking-widest text-[#C87D32] dark:text-[#E5A955] uppercase block font-sans">
                04 / OPERATING ENGINE
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                One connected campus. <br />
                <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                  Zero fragmented software.
                </span>
              </h2>
            </RevealHeading>
          </div>

          <RevealCTA>
            <button
              onClick={() => onNavigate('features')}
              className="inline-flex items-center gap-2 text-sm font-serif font-bold italic text-[#121926] dark:text-[#F5EFE6] border-b border-[#C87D32] pb-0.5 hover:text-[#C87D32] transition-colors group shrink-0"
            >
              <span>Explore all 10 capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </RevealCTA>
        </div>

        {/* Interactive Capability Switcher */}
        <RevealVisual>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-sans text-xs">
            {capabilities.map((cap, idx) => {
              const isActive = activeTab === idx;
              const Icon = cap.icon;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2.5 ${isActive
                      ? 'border-[#C87D32] bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] shadow-md scale-[1.01]'
                      : 'border-[#C87D32]/25 hover:border-[#C87D32] text-[#5A6578] dark:text-[#9DA9BE] bg-[#FAF5EB]/50 dark:bg-[#0E1524]/50'
                    }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-xs font-bold ${isActive ? 'text-[#C87D32]' : 'opacity-60'}`}>
                      {cap.num}
                    </span>
                    <Icon className="w-4 h-4 opacity-80" />
                  </div>
                  <div className="font-serif text-base font-bold">{cap.title}</div>
                </button>
              );
            })}
          </div>

          {/* Living Interactive Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCap.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8"
            >
              {/* Left Thesis */}
              <div className="lg:col-span-5 space-y-3 font-sans">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-snug">
                  {currentCap.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#526071] dark:text-[#A6B4C9] leading-relaxed">
                  {currentCap.desc}
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{currentCap.stat}</span>
                </div>
              </div>

              {/* Right Live Simulation Canvas */}
              <div className="lg:col-span-7">{currentCap.renderCanvas()}</div>
            </motion.div>
          </AnimatePresence>
        </RevealVisual>
      </div>
    </ScrollReveal>
  );
};
