import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Check,
  Activity,
  Compass,
  Scale,
  TrendingUp,
  BookMarked,
  Sparkles,
} from 'lucide-react';
import type { PageId } from '../types';
import {
  RevealEyebrow,
  RevealHeading,
  RevealDescription,
  RevealVisual,
  RevealCTA,
  RevealItem
} from '../components/common/ScrollReveal';

interface SolutionsPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [selectedInst, setSelectedInst] = useState<number>(0);
  const [activeSignalIndex, setActiveSignalIndex] = useState<number>(0);
  const [hoveredRailNode, setHoveredRailNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Telemetry loop for Connected Campus Ecosystem rail
  useEffect(() => {
    const signalInterval = setInterval(() => {
      setActiveSignalIndex((prev) => (prev + 1) % 7);
    }, 2400);
    return () => clearInterval(signalInterval);
  }, []);

  // 5 Institutions definition
  const institutions = [
    {
      num: '01',
      title: 'K–12 Schools',
      eyebrow: '01 / K–12 SCHOOLS • THE PRIMARY & SECONDARY CLOISTER',
      watermark: 'CAMPUS',
      headline: 'Run the whole school as one system.',
      subtitle:
        'Conflict-free weekly timetables, instant WhatsApp bus telemetry, and curriculum-grounded AI tutors citing NCERT and board textbooks.',
      flowNodes: [
        { num: '01', name: 'TIMETABLE', sub: '48-Period Matrix', meta: 'Zero room conflicts' },
        { num: '02', name: 'TEACHERS', sub: 'Proxy Matching in 4s', meta: 'Auto-substituted' },
        { num: '03', name: 'STUDENTS', sub: 'Face-Gate Turnstile', meta: '07:45 AM scanned' },
        { num: '04', name: 'PARENTS', sub: 'WhatsApp Bot', meta: 'Arrival GPS push' },
        { num: '05', name: 'FEES', sub: 'Tally XML Sync', meta: 'Zero ledger drift' },
        { num: '06', name: 'AI LEARNING', sub: 'NCERT Textbook Citations', meta: 'Page 213 verified' },
        { num: '07', name: 'COMMUNICATION', sub: 'Unified School Broadcast', meta: 'Converged ecosystem' },
      ],
      capabilities: [
        {
          num: '01',
          name: 'Conflict-Free Timetables',
          desc: '48-period weekly matrix that automatically resolves subject workloads, split shifts, teacher proxies and lab room bookings in seconds.',
          status: '48 Periods / Week',
        },
        {
          num: '02',
          name: 'Automated Teacher Proxies',
          desc: 'When faculty log leave, suitable peer teachers with matching subject competence and free periods are auto-assigned in under 4 seconds.',
          status: '4s Instant Match',
        },
        {
          num: '03',
          name: 'Gate Turnstile Attendance',
          desc: 'Fast, secure face-scan check-in at school gates transmits arrival timestamps immediately to parent WhatsApp and board attendance ledgers.',
          status: 'Board Compliant',
        },
      ],
    },
    {
      num: '02',
      title: 'Colleges & Universities',
      eyebrow: '02 / COLLEGES & UNIVERSITIES • THE GREAT QUADRANGLE',
      watermark: 'SYSTEM',
      headline: 'Coordinate the campus without the silos.',
      subtitle:
        'Unify Senate governance, autonomous department syllabi, anti-cheat QR examinations, and multi-fund Bursar ledger reconciliations.',
      flowNodes: [
        { num: '01', name: 'DEPARTMENTS', sub: '18 Autonomous Faculties', meta: 'Credit aligned' },
        { num: '02', name: 'FACULTY', sub: 'Workload & Tenure Matrix', meta: 'Tenure tracked' },
        { num: '03', name: 'STUDENTS', sub: 'Biometric Turnstiles', meta: '99.1% verified' },
        { num: '04', name: 'EXAMINATIONS', sub: 'Anti-Cheat QR Seating', meta: 'Hall 204 ready' },
        { num: '05', name: 'FINANCE', sub: 'Dual TallyPrime Sync', meta: '0.12s reconciled' },
        { num: '06', name: 'SENATE REGISTRY', sub: 'NAAC & UGC Dossiers', meta: 'Auto-compiled' },
      ],
      capabilities: [
        {
          num: '01',
          name: 'Multi-Faculty Relational Mesh',
          desc: 'Centralized credit, semester, and course management across Engineering, Humanities, Sciences, and Medical wings under one Senate view.',
          status: '18 Departments',
        },
        {
          num: '02',
          name: 'Controller of Examinations',
          desc: 'Encrypted QR-code hall tickets with anti-proxy desk seating charts dispatched across university examination halls.',
          status: 'Anti-Proxy Seating',
        },
        {
          num: '03',
          name: 'Accreditation Dossiers',
          desc: 'Continuous automated aggregation of research publications, faculty workloads, and student achievements ready for NAAC and UGC audits.',
          status: 'Instant UGC Export',
        },
      ],
    },
    {
      num: '03',
      title: 'Law Universities',
      eyebrow: '03 / LAW UNIVERSITIES & LEGAL COLLEGES • THE MOOT CLOISTER',
      watermark: 'LAW',
      headline: 'Organize legal education around rigorous workflows.',
      subtitle:
        'AI Study Buddy trained on landmark Constitutional bench precedents with verified SCR citations, moot court rosters, and judicial rubrics.',
      flowNodes: [
        { num: '01', name: 'CASE LAW', sub: '85,000+ SCR Law Volumes', meta: 'Precedents indexed' },
        { num: '02', name: 'BENCH RULINGS', sub: 'Kesavananda Bharati v. State', meta: 'Ratio decidendi' },
        { num: '03', name: 'MOOT COURT', sub: 'Memorial Roster Allocation', meta: 'Auto-rostered' },
        { num: '04', name: 'LEGAL DRAFTS', sub: 'Socratic Case Analysis', meta: 'Citation checked' },
        { num: '05', name: 'ASSESSMENT', sub: 'Judicial Service Rubrics', meta: 'Bar Council ready' },
      ],
      capabilities: [
        {
          num: '01',
          name: 'Official Case Law Repository',
          desc: 'Verified indexing of landmark Supreme Court judgments, Constitutional Bench decisions, and High Court rulings with exact volume citations.',
          status: '85k Volumes',
        },
        {
          num: '02',
          name: 'Moot Court Memorial Engine',
          desc: 'Conflict-free roster assignment for petitioner and respondent benches with automated submission deadlines and plagiarism checking.',
          status: 'Automated Bench',
        },
        {
          num: '03',
          name: 'Socratic Argument Assistant',
          desc: 'Grounded legal dialogue that tests student arguments against historical obiter dicta and statutory provisions.',
          status: 'Zero Hallucination',
        },
      ],
    },
    {
      num: '04',
      title: 'Competitive Exam Academies',
      eyebrow: '04 / COMPETITIVE EXAM ACADEMIES • THE TESTING HALL',
      watermark: 'EXAM',
      headline: 'Move every learner from intake to result.',
      subtitle:
        'Continuous diagnostic feedback loops for JEE, NEET, and CLAT. Flag rotational dynamics and speed bottlenecks with high-yield micro-drills.',
      flowNodes: [
        { num: '01', name: 'GOAL INTAKE', sub: 'IIT-JEE / NEET Goal', meta: 'AIR < 500 target' },
        { num: '02', name: 'DIAGNOSTIC', sub: 'Baseline Assessment', meta: '62% initial score' },
        { num: '03', name: 'FLAW DETECT', sub: 'Rotational Dynamics', meta: '3.8 min/Q flagged' },
        { num: '04', name: 'TARGETED DRILL', sub: 'Moment of Inertia Shortcuts', meta: '84% accuracy' },
        { num: '05', name: 'FINAL RETAKE', sub: 'National Mock Hall', meta: '91% (Top 0.5% AIR)' },
      ],
      capabilities: [
        {
          num: '01',
          name: 'Speed & Time-Drain Telemetry',
          desc: 'AI telemetry flagging exact questions where students lose marks due to time-drain rather than conceptual misunderstanding.',
          status: '3.8m ➔ 42s/Q',
        },
        {
          num: '02',
          name: '5-Minute High-Yield Micro-Drills',
          desc: 'Targeted drill packages generated instantly following diagnostic tests to patch rotational mechanics before the next test cycle.',
          status: '5 Targeted Drills',
        },
        {
          num: '03',
          name: 'National Percentile Simulation',
          desc: 'Benchmarking individual test runs against 45,000+ national test-takers with calibrated AIR rank predictions.',
          status: 'Top 0.5% AIR',
        },
      ],
    },
    {
      num: '05',
      title: 'Independent Tutors',
      eyebrow: '05 / INDEPENDENT TUTORS & STUDIOS • THE SOCRATIC CHAMBER',
      watermark: 'TUTOR',
      headline: 'Build a personal learning operation.',
      subtitle:
        'Seamless batch enrollment, direct UPI fee reconciliation without platform cuts, and 24/7 AI homework assistance grounded in your notes.',
      flowNodes: [
        { num: '01', name: 'STUDIO ENROLL', sub: 'Batch 04 Active', meta: '24 Students' },
        { num: '02', name: 'DIRECT UPI', sub: 'Direct Bank Settlement', meta: '₹0 platform cut' },
        { num: '03', name: 'HOMEWORK', sub: 'WhatsApp Dispatch', meta: 'Instant delivery' },
        { num: '04', name: 'AI DOUBTS', sub: 'Teacher Notes Only', meta: 'Zero hallucination' },
        { num: '05', name: 'PARENTS', sub: 'Attendance Pings', meta: '98.4% punctuality' },
      ],
      capabilities: [
        {
          num: '01',
          name: 'Direct UPI Bank Settlements',
          desc: 'Monthly tuition fees land directly into your own bank account with automated WhatsApp receipts and zero platform commission deductions.',
          status: '100% Direct Deposit',
        },
        {
          num: '02',
          name: 'Grounded After-Class AI',
          desc: 'A 24/7 AI tutor that answers student queries after 8:00 PM using strictly your handwritten whiteboard photos and lecture PDFs.',
          status: 'Notes-Grounded',
        },
        {
          num: '03',
          name: 'Parent Check-in Telemetry',
          desc: 'Automated arrival alerts when students enter your studio, building professional trust without manual WhatsApp messaging.',
          status: 'Instant Pings',
        },
      ],
    },
  ];

  const current = institutions[selectedInst];

  // 7 Real-time sequential nodes for the Connected Campus Ecosystem
  const ecosystemNodes = [
    {
      num: '01',
      category: 'TIMETABLE',
      metric: '48-Period Matrix',
      desc: 'Zero room conflict',
    },
    {
      num: '02',
      category: 'TEACHERS',
      metric: 'Proxy Match: 4s',
      desc: 'Auto-substituted',
    },
    {
      num: '03',
      category: 'STUDENTS',
      metric: 'Face Turnstile',
      desc: '07:45 AM scanned',
    },
    {
      num: '04',
      category: 'PARENTS',
      metric: 'WhatsApp Bot',
      desc: 'Arrival GPS push',
    },
    {
      num: '05',
      category: 'FEES',
      metric: 'Tally XML Sync',
      desc: 'Zero ledger discrepancy',
    },
    {
      num: '06',
      category: 'AI LEARNING',
      metric: 'NCERT P213 Cited',
      desc: 'Zero hallucination',
    },
    {
      num: '07',
      category: 'COMMUNICATIONS',
      metric: 'Unified School Broadcast',
      desc: 'One cohesive school system',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain font-serif relative selection:bg-[#C87D32] selection:text-white"
    >
      {/* ===================================================================== */}
      {/* 11. BACKGROUND: SUBTLE DRAFTING LINES & PARALLAX WATERMARK            */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Subtle Horizontal Rules */}
        <div
          className="absolute inset-0 opacity-[0.22] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent, transparent 39px, rgba(200, 125, 50, 0.08) 39px, rgba(200, 125, 50, 0.08) 40px)',
          }}
        />

        {/* Vintage Left & Right Hairline Margins */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-12 w-[1px] bg-rose-400/20 dark:bg-rose-500/10" />
        <div className="hidden lg:block absolute top-0 bottom-0 right-12 w-[1px] bg-[#C87D32]/10" />
      </div>

      {/* ===================================================================== */}
      {/* 2. HERO — CINEMATIC EDITORIAL HERO (NO BOXES)                         */}
      {/* ===================================================================== */}
      <section className="relative w-full overflow-hidden pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pb-36 px-6 text-center">
        {/* Background Watermark (Hero Section Only) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
          <div className="font-serif text-[18vw] lg:text-[20vw] font-bold tracking-widest text-[#121926] dark:text-[#F5EFE6] leading-none uppercase text-center px-4 select-none opacity-[0.07] dark:opacity-[0.09]">
            SOLUTIONS
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-editorial text-5xl sm:text-7xl lg:text-8xl xl:text-[90px] font-bold text-[#121926] dark:text-[#F5EFE6] leading-[1.05] tracking-tight"
          >
            One platform. <br />
            <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
              Built around how you operate.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-[#526071] dark:text-[#A6B4C9] font-sans max-w-3xl mx-auto leading-relaxed pt-2"
          >
            One intelligent campus system, adapted to schools, universities, legal institutions, exam academies and independent educators.
          </motion.p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. INSTITUTION TYPES — EDITORIAL HORIZONTAL NAVIGATION (NO PILLS)    */}
      {/* ===================================================================== */}
      <nav
        aria-label="Institution Navigation"
        className="sticky top-16 z-30 py-3.5 bg-[#F8F4EB]/90 dark:bg-[#060B14]/90 backdrop-blur-md border-y border-[#C87D32]/15 shadow-sm transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto pb-1 scrollbar-none font-mono text-xs gap-4 sm:gap-8">
            {institutions.map((inst, idx) => {
              const isActive = selectedInst === idx;
              return (
                <button
                  key={inst.num}
                  onClick={() => setSelectedInst(idx)}
                  className={`group relative py-1 shrink-0 flex items-center gap-2 transition-all focus:outline-none ${isActive
                    ? 'text-[#121926] dark:text-[#F5EFE6] font-bold'
                    : 'text-[#5A6578] dark:text-[#9DA9BE] hover:text-[#121926] dark:hover:text-[#F5EFE6]'
                    }`}
                >
                  <span
                    className={`text-[10px] transition-colors ${isActive ? 'text-[#C87D32] dark:text-[#E5A955] font-bold' : 'text-[#5A6578]/50'
                      }`}
                  >
                    {inst.num}
                  </span>
                  <span className="tracking-wide text-xs sm:text-[14px] font-serif whitespace-nowrap">
                    {inst.title}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeSolutionEditorialUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C87D32]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ===================================================================== */}
      {/* 4 & 5. MAIN GUIDED EDITORIAL EXPERIENCE — "LIVING INSTITUTION"        */}
      {/* ===================================================================== */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.num}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-24"
          >
            {/* Top Composition: Left Thesis + Right Architecture Flow Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-[#C87D32]/15 pb-20">

              {/* Left Side: Editorial Heading & Thesis */}
              <div className="lg:col-span-6 space-y-5">
                <RevealEyebrow>
                  <span className="font-mono text-xs text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                    {current.eyebrow}
                  </span>
                </RevealEyebrow>

                <RevealHeading>
                  <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-[1.08]">
                    {current.headline}
                  </h2>
                </RevealHeading>

                <RevealDescription>
                  <p className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed pt-2">
                    {current.subtitle}
                  </p>
                </RevealDescription>

                <RevealCTA className="pt-4">
                  <button
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-2 text-sm font-editorial font-bold italic text-[#121926] dark:text-[#F5EFE6] border-b border-[#C87D32] pb-0.5 hover:text-[#C87D32] transition-colors group cursor-pointer"
                  >
                    <span>Request Institutional Walkthrough</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </RevealCTA>
              </div>

              {/* Right Side: Subtle Animated Operating System Flow Map (ZERO CARDS!) */}
              <RevealVisual className="lg:col-span-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    OPERATING ARCHITECTURE MAP
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold">SEQUENTIAL EXECUTION</span>
                </div>

                {/* Vertical Operating Flow Conduit */}
                <div className="relative pl-6 space-y-5 border-l-2 border-[#C87D32]/25">
                  {current.flowNodes.map((node, i) => (
                    <motion.div
                      key={node.num}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="space-y-0.5 relative group"
                    >
                      {/* Node Dot */}
                      <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#FAF5EB] dark:bg-[#060B14] border-2 border-[#C87D32] group-hover:scale-125 transition-transform" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <span className="font-bold text-xs text-[#121926] dark:text-[#F5EFE6]">
                            {node.num} {node.name}
                          </span>
                          <span className="text-[11px] text-[#526071] dark:text-[#A6B4C9] font-sans block sm:inline sm:ml-2">
                            {node.sub}
                          </span>
                        </div>

                        <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold shrink-0">
                          {node.meta}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-2 text-[10px] text-[#5A6578] dark:text-[#9DA9BE] border-t border-[#C87D32]/10">
                  Data streams continuously through single campus bus without manual exports or spreadsheet reconciliations.
                </div>
              </RevealVisual>
            </div>

            {/* Bottom: Inline Capability Reveals (Large numbers, thin vertical rules, NO CARDS!) */}
            <div className="space-y-8">
              <RevealEyebrow>
                <div className="flex items-center justify-between font-mono text-xs text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
                  <span className="font-bold uppercase tracking-wider">
                    CORE SYSTEM CAPABILITIES • INLINE REVEAL
                  </span>
                  <span className="text-[10px] text-[#5A6578]">Zero Rectangular Clutter</span>
                </div>
              </RevealEyebrow>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                {current.capabilities.map((cap, idx) => (
                  <RevealItem key={cap.num} index={idx} baseDelay={0.12} className="space-y-3 border-l-2 border-[#C87D32]/30 pl-4 py-1">
                    <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#C87D32] dark:text-[#E5A955] block">
                      {cap.num}
                    </span>

                    <div className="space-y-1">
                      <h3 className="font-editorial text-xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                        {cap.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>

                    <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold block pt-1">
                      STATUS: {cap.status} ✓
                    </span>
                  </RevealItem>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </main>

      {/* ===================================================================== */}
      {/* 8. CONNECTED CAMPUS ECOSYSTEM — REFINED HORIZONTAL EDITORIAL RAIL    */}
      {/* ===================================================================== */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-[#C87D32]/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 space-y-12">
          {/* Top Header: Technical Editorial Layout */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-[#121926]/10 dark:border-[#F5EFE6]/10 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C87D32]" />
              <span className="font-bold tracking-widest uppercase text-[#C87D32] dark:text-[#E5A955]">
                CONNECTED CAMPUS ECOSYSTEM
              </span>
              <span className="text-[#5A6578]/40 dark:text-[#9DA9BE]/30">•</span>
              <span className="tracking-wider uppercase text-[#5A6578] dark:text-[#9DA9BE]">
                7 REAL-TIME NODES
              </span>
            </div>

            <div className="text-[11px] tracking-widest uppercase text-[#5A6578] dark:text-[#9DA9BE] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
              <span>Continuous Bus Telemetry</span>
            </div>
          </div>

          {/* Continuous Horizontal System Rail (ZERO CARDS!) */}
          <div className="overflow-x-auto scrollbar-none pb-4 pt-3 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="min-w-[860px] lg:min-w-0 w-full relative pt-2">
              {/* Continuous Horizontal Base Line across all 7 nodes */}
              <div className="absolute top-[6px] left-0 right-0 h-[1px] bg-[#121926]/15 dark:bg-[#F5EFE6]/15 z-0" />

              {/* Animated Rail Draw-In from left to right */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute top-[6px] left-0 right-0 h-[1px] bg-[#C87D32]/45 z-0"
              />

              {/* 7 Sequential Nodes Along the Rail */}
              <div className="grid grid-cols-7 gap-4 lg:gap-6 relative z-10">
                {ecosystemNodes.map((node, idx) => {
                  const isHovered = hoveredRailNode === idx;
                  const isActive = hoveredRailNode === null ? activeSignalIndex === idx : isHovered;

                  return (
                    <motion.div
                      key={node.num}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                      onMouseEnter={() => setHoveredRailNode(idx)}
                      onMouseLeave={() => setHoveredRailNode(null)}
                      className="group cursor-default relative flex flex-col pt-0 select-none transition-all"
                    >
                      {/* Node Marker & Vertical Tick Emerging from Rail */}
                      <div className="relative flex flex-col items-start mb-3">
                        {/* Dot on the horizontal rail */}
                        <div className="relative flex items-center justify-center w-3 h-3">
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isHovered
                              ? 'bg-[#C87D32] scale-125 ring-2 ring-[#C87D32]/35'
                              : isActive
                                ? 'bg-[#C87D32] ring-2 ring-[#C87D32]/35 scale-110'
                                : 'bg-[#F8F4EB] dark:bg-[#060B14] border border-[#121926]/30 dark:border-[#F5EFE6]/30'
                              }`}
                          />
                          {/* Quiet pulse on active node */}
                          {isActive && (
                            <span className="absolute inset-0 rounded-full border border-[#C87D32] animate-ping opacity-35 pointer-events-none" />
                          )}
                        </div>

                        {/* Short Vertical Tick connecting Rail to Content */}
                        <div
                          className={`w-[1px] h-3.5 ml-1 transition-colors duration-300 ${isHovered || isActive
                            ? 'bg-[#C87D32]'
                            : 'bg-[#121926]/20 dark:bg-[#F5EFE6]/20'
                            }`}
                        />
                      </div>

                      {/* Essential Information Hierarchy (ZERO CARDS, NO BOXES) */}
                      <div className="space-y-1.5 pr-1">
                        {/* Category Number & Title: 01 / TIMETABLE */}
                        <div className="font-mono text-[10px] tracking-wider text-[#C87D32] dark:text-[#E5A955] flex items-center gap-1 font-semibold">
                          <span>{node.num}</span>
                          <span className="text-[#C87D32]/40 dark:text-[#E5A955]/40">/</span>
                          <span className="tracking-widest">{node.category}</span>
                        </div>

                        {/* Metric Title with expanding underline on hover */}
                        <div className="relative inline-block">
                          <h4
                            className={`font-editorial text-sm sm:text-[15px] font-bold transition-colors leading-snug ${isHovered
                              ? 'text-[#121926] dark:text-[#F5EFE6]'
                              : isActive
                                ? 'text-[#121926] dark:text-[#F5EFE6]'
                                : 'text-[#121926]/90 dark:text-[#F5EFE6]/90'
                              }`}
                          >
                            {node.metric}
                          </h4>

                          {/* Very thin gold underline expanding beneath title */}
                          <div
                            className={`h-[1px] bg-[#C87D32] transition-all duration-300 ease-out mt-0.5 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                              }`}
                          />
                        </div>

                        {/* Supporting Statement */}
                        <p
                          className={`text-[11px] font-sans leading-relaxed transition-colors duration-200 ${isHovered
                            ? 'text-[#121926] dark:text-[#F5EFE6] opacity-95'
                            : isActive
                              ? 'text-[#526071] dark:text-[#A6B4C9] opacity-90'
                              : 'text-[#526071] dark:text-[#A6B4C9] opacity-75'
                            }`}
                        >
                          {node.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="lg:hidden flex items-center justify-between text-[10px] font-mono text-[#5A6578] dark:text-[#9DA9BE] pt-1 px-1">
            <span>01 → 07</span>
            <span className="flex items-center gap-1">
              <span>SWIPE TO EXPLORE FULL SYSTEM RAIL</span>
              <ArrowRight className="w-3 h-3 text-[#C87D32]" />
            </span>
          </div>

          {/* Subtle Explanatory Sentence Below Rail */}
          <div className="text-center pt-2">
            <p className="font-serif italic text-xs sm:text-sm text-[#526071] dark:text-[#A6B4C9]">
              “Seven connected operational layers working as one continuous campus system.”
            </p>
          </div>

          {/* Bottom Divider & Metadata (NO CARDS) */}
          <div className="pt-6 border-t border-[#121926]/10 dark:border-[#F5EFE6]/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] sm:text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">
            <div className="tracking-widest uppercase">
              ONBOARDING: COMPLETED IN 48H
            </div>
            <div className="tracking-wider uppercase text-teal-700 dark:text-teal-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
              <span>100% TALLY ERP 9 &amp; STUDENT DATA COMPATIBLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. OUTCOMES SECTION — OVERSIZED TYPOGRAPHY (ZERO STATISTIC CARDS!)     */}
      {/* ===================================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 border-t border-[#C87D32]/15 relative z-10">
        <div className="text-center space-y-1 mb-14">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#C87D32]">
            MEASURABLE INSTITUTIONAL OUTCOMES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
            Engineered for Academic Impact
          </h2>
        </div>

        {/* 3 Oversized Numbers on Open Paper Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-2 border-t-2 border-[#C87D32] pt-4">
            <div className="font-editorial text-6xl sm:text-7xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
              48h
            </div>
            <div className="font-editorial text-lg font-bold text-[#C87D32] dark:text-[#E5A955]">
              Institutional Onboarding
            </div>
            <p className="text-xs text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed">
              Complete migration from legacy software and Excel spreadsheets with zero operational downtime.
            </p>
          </div>

          <div className="space-y-2 border-t-2 border-[#C87D32] pt-4">
            <div className="font-editorial text-6xl sm:text-7xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
              100%
            </div>
            <div className="font-editorial text-lg font-bold text-[#C87D32] dark:text-[#E5A955]">
              Tally ERP Compatibility
            </div>
            <p className="text-xs text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed">
              Native bi-directional XML synchronization maintaining existing accounting ledgers and audits.
            </p>
          </div>

          <div className="space-y-2 border-t-2 border-[#C87D32] pt-4">
            <div className="font-editorial text-6xl sm:text-7xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
              01
            </div>
            <div className="font-editorial text-lg font-bold text-[#C87D32] dark:text-[#E5A955]">
              Connected Campus Operating System
            </div>
            <p className="text-xs text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed">
              Single unified foundation unifying administration, faculty, students, parents, and AI tutors.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 10. FINAL EDITORIAL CLOSING STATEMENT & MINIMAL CTA                  */}
      {/* ===================================================================== */}
      <section className="py-28 text-center space-y-6 max-w-5xl mx-auto px-6 border-t border-[#C87D32]/15 relative z-10">
        <RevealEyebrow>
          <div className="w-12 h-12 mx-auto rounded-full border border-[#C87D32] flex items-center justify-center bg-[#FAF5EB] dark:bg-[#0E1524] shadow-sm mb-3">
            <span className="font-editorial text-xl font-bold text-[#C87D32] dark:text-[#E5A955] italic">
              Æ
            </span>
          </div>

          <div className="font-mono text-[10px] tracking-widest text-[#C87D32] uppercase">
            AI-EDUCATION OPERATING SYSTEM
          </div>
        </RevealEyebrow>

        <RevealHeading>
          <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
            Your institution is complex. <br />
            <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
              Your operating system shouldn't be.
            </span>
          </h2>
        </RevealHeading>

        <RevealDescription>
          <p className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-lg mx-auto leading-relaxed">
            A single foundation that adapts to the way your institution teaches, operates and grows.
          </p>
        </RevealDescription>

        <RevealCTA>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-editorial text-sm font-bold italic tracking-wide hover:bg-[#C87D32] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book an Institutional Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('features')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#C87D32]/50 hover:border-[#C87D32] text-[#121926] dark:text-[#F5EFE6] font-editorial text-sm italic hover:bg-[#FAF5EB]/60 dark:hover:bg-[#111A2E]/60 transition-all cursor-pointer"
            >
              <span>Explore Campus Capabilities</span>
            </button>
          </div>
        </RevealCTA>
      </section>

    </div>
  );
};
