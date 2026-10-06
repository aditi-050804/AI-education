import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Lock,
  Activity,
  KeyRound,
  ShieldCheck,
  Database,
  Sparkles,
  Clock,
  Terminal,
} from 'lucide-react';
import type { PageId } from '../types';

interface SecurityPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [selectedRole, setSelectedRole] = useState<'principal' | 'teacher' | 'student' | 'parent'>('principal');

  // Animation cycle states for living horizontal systems
  const [gatewayStep, setGatewayStep] = useState<number>(0);
  const [identityStep, setIdentityStep] = useState<number>(0);
  const [dataStep, setDataStep] = useState<number>(0);
  const [aiSafetyStep, setAiSafetyStep] = useState<number>(0);
  const [isAiViolating, setIsAiViolating] = useState<boolean>(false);
  const [auditStep, setAuditStep] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for subtle watermark typography
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // 6 Primary Architecture Layers for the Horizontal Rail
  const layers = [
    { id: 'layer-gateway', num: '01', title: 'GATEWAY' },
    { id: 'layer-identity', num: '02', title: 'IDENTITY' },
    { id: 'layer-isolation', num: '03', title: 'ISOLATION' },
    { id: 'layer-data', num: '04', title: 'DATA' },
    { id: 'layer-ai', num: '05', title: 'AI SAFETY' },
    { id: 'layer-audit', num: '06', title: 'AUDIT' },
  ];

  // 1. Gateway Signal Loop (REQUEST -> TLS 1.3 -> RATE CHECK -> VERIFIED -> ALLOWED)
  useEffect(() => {
    const timer = setInterval(() => {
      setGatewayStep((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // 2. Identity Signal Loop (IDENTIFY -> CREDENTIAL -> RESOLVE -> AUTHORIZE)
  useEffect(() => {
    const timer = setInterval(() => {
      setIdentityStep((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // 3. Data Protection Progression (RECORD -> ENCRYPT -> ISOLATE -> STORE -> AUDIT)
  useEffect(() => {
    const timer = setInterval(() => {
      setDataStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // 4. AI Guardrail Sequence (INPUT -> POLICY -> MODEL -> VALIDATION -> RESPONSE)
  useEffect(() => {
    const timer = setInterval(() => {
      setAiSafetyStep((prev) => {
        const next = (prev + 1) % 5;
        // Occasionally trigger a policy violation demonstration
        if (next === 1) {
          setIsAiViolating(Math.random() > 0.6);
        }
        return next;
      });
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  // 5. Audit Timeline Stream
  useEffect(() => {
    const timer = setInterval(() => {
      setAuditStep((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // ScrollSpy to keep the horizontal rail updated on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    layers.forEach((layer, idx) => {
      const el = document.getElementById(layer.id);
      if (el) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveLayer(idx);
              }
            });
          },
          {
            rootMargin: '-20% 0px -40% 0px',
            threshold: 0.1,
          }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToLayer = (id: string, index: number) => {
    setActiveLayer(index);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 130;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const currentWatermark = layers[activeLayer]?.title || 'VERIFY';

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain font-serif relative selection:bg-[#C87D32] selection:text-white"
    >
      {/* ===================================================================== */}
      {/* BACKGROUND: SUBTLE DRAFTING LINES & PARALLAX WATERMARK                */}
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

        {/* Vintage Hairline Margins */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-12 w-[1px] bg-[#C87D32]/10" />
        <div className="hidden lg:block absolute top-0 bottom-0 right-12 w-[1px] bg-[#C87D32]/10" />

        {/* Archival Technical Annotations */}
        <div className="hidden lg:block absolute top-36 left-16 text-[9px] font-mono text-[#C87D32]/40 tracking-widest">
          + ARCHIVAL SECURITY PROTOCOL // VERIFICATION LEDGER
        </div>
        <div className="hidden lg:block absolute top-36 right-16 text-[9px] font-mono text-[#C87D32]/40 tracking-widest">
          SYSTEM SPEC: ZERO DIRECT DB EXPOSURE +
        </div>
      </div>

      {/* Parallax Background Watermark: SECURITY / TRUST / VERIFY */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: watermarkY }}
          className="w-full flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWatermark}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 0.032, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-editorial text-[18vw] font-bold tracking-[0.2em] text-[#121926] dark:text-[#F5EFE6] leading-none uppercase text-center px-4 select-none"
            >
              {currentWatermark}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ===================================================================== */}
      {/* 2. SECURITY HERO — QUIET BUT POWERFUL (NO CARDS)                      */}
      {/* ===================================================================== */}
      <section className="pt-36 pb-16 px-6 max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#5A6578] dark:text-[#9DA9BE]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C87D32]" />
          <span className="font-mono text-[11px] text-[#C87D32] dark:text-[#E5A955] tracking-widest">
            ARCHIVAL SECURITY PROTOCOL
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-[1.08] tracking-tight"
        >
          Security that leaves <br />
          <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
            nothing uncertain.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-2xl mx-auto leading-relaxed"
        >
          Every institutional connection, identity, dataset and AI interaction passes through controlled verification before execution.
        </motion.p>

        {/* Thin Animated Horizontal Verification Line Underneath Hero */}
        <div className="pt-8 max-w-md mx-auto relative">
          <div className="h-[1px] w-full bg-[#121926]/15 dark:bg-[#F5EFE6]/15 relative overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#C87D32] to-transparent"
            />
          </div>
          <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-[#5A6578] dark:text-[#9DA9BE]">
            <span>SYSTEM AUDIT: 00:00:00</span>
            <span className="text-teal-700 dark:text-teal-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
              <span>ACTIVE VERIFICATION</span>
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. PRIMARY SECURITY NAVIGATION — HORIZONTAL RAIL                      */}
      {/* ===================================================================== */}
      <nav
        aria-label="Security Layers Navigation"
        className="sticky top-16 z-30 py-3.5 bg-[#F8F4EB]/90 dark:bg-[#060B14]/90 backdrop-blur-md border-y border-[#C87D32]/15 shadow-sm transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between overflow-x-auto pb-1 scrollbar-none font-mono text-xs gap-3 sm:gap-6">
            {layers.map((layer, idx) => {
              const isActive = activeLayer === idx;
              return (
                <button
                  key={layer.id}
                  onClick={() => scrollToLayer(layer.id, idx)}
                  className={`group relative py-1 shrink-0 flex items-center gap-2 transition-all focus:outline-none ${
                    isActive
                      ? 'text-[#121926] dark:text-[#F5EFE6] font-bold'
                      : 'text-[#5A6578] dark:text-[#9DA9BE] hover:text-[#121926] dark:hover:text-[#F5EFE6]'
                  }`}
                >
                  <span
                    className={`text-[10px] transition-colors ${
                      isActive ? 'text-[#C87D32] dark:text-[#E5A955] font-bold' : 'text-[#5A6578]/50'
                    }`}
                  >
                    {layer.num}
                  </span>
                  <span className="tracking-widest text-[11px] uppercase">
                    {layer.title}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeSecurityRulerUnderline"
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
      {/* MAIN SECURITY STORY — CONTINUOUS HORIZONTAL SYSTEMS (ZERO CARDS!)    */}
      {/* ===================================================================== */}
      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32 relative z-10">

        {/* ------------------------------------------------------------------- */}
        {/* 4. LAYER 01 / GATEWAY: HORIZONTAL REQUEST-FLOW VISUALIZATION        */}
        {/* ------------------------------------------------------------------- */}
        <section
          id="layer-gateway"
          className="scroll-mt-32 space-y-12 border-b border-[#C87D32]/15 pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Thesis */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-xs text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                01 / GATEWAY
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                Every connection starts <br />
                <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                  at the gate.
                </span>
              </h2>
              <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed">
                Direct public exposure to databases is fundamentally prevented. All inbound institutional traffic passes through cryptographic handshake termination and rate validation before touching internal services.
              </p>
            </div>

            {/* Right Side: Horizontal Request-Flow Visualization */}
            <div className="lg:col-span-7 space-y-6 pt-2">
              <div className="flex items-center justify-between font-mono text-xs text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  REQUEST FLOW VERIFICATION
                </span>
                <span className="text-[10px] text-teal-700 dark:text-teal-400 font-bold">● TLS 1.3 / EDGE</span>
              </div>

              {/* Horizontal Sequence: REQUEST → TLS 1.3 → RATE CHECK → VERIFIED → ALLOWED */}
              <div className="overflow-x-auto scrollbar-none py-6">
                <div className="min-w-[560px] relative">
                  {/* Connecting Line */}
                  <div className="absolute top-[6px] left-0 right-0 h-[1px] bg-[#121926]/15 dark:bg-[#F5EFE6]/15" />

                  <div className="grid grid-cols-5 gap-2 relative z-10 text-center font-mono">
                    {[
                      { step: 0, label: 'REQUEST', desc: 'Inbound Ingress' },
                      { step: 1, label: 'TLS 1.3', desc: 'Handshake Valid' },
                      { step: 2, label: 'RATE CHECK', desc: '< 120 req/s' },
                      { step: 3, label: 'VERIFIED', desc: 'Signature OK' },
                      { step: 4, label: 'ALLOWED', desc: 'Internal Transit' },
                    ].map((item) => {
                      const isReached = gatewayStep >= item.step;
                      const isCurrent = gatewayStep === item.step;

                      return (
                        <div key={item.label} className="space-y-2 flex flex-col items-center">
                          {/* Dot on line */}
                          <div className="w-3 h-3 flex items-center justify-center">
                            <div
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                isCurrent
                                  ? item.label === 'VERIFIED'
                                    ? 'bg-teal-600 scale-125 ring-4 ring-teal-500/25'
                                    : 'bg-[#C87D32] scale-125 ring-2 ring-[#C87D32]/30'
                                  : isReached
                                  ? 'bg-[#C87D32]'
                                  : 'bg-[#F8F4EB] dark:bg-[#060B14] border border-[#121926]/30 dark:border-[#F5EFE6]/30'
                              }`}
                            />
                          </div>

                          <div className="space-y-0.5">
                            <span
                              className={`text-[11px] font-bold tracking-wider block transition-colors ${
                                isCurrent
                                  ? item.label === 'VERIFIED'
                                    ? 'text-teal-700 dark:text-teal-400 font-bold'
                                    : 'text-[#C87D32] dark:text-[#E5A955]'
                                  : 'text-[#121926] dark:text-[#F5EFE6]'
                              }`}
                            >
                              {item.label}
                            </span>
                            <span className="text-[10px] text-[#526071] dark:text-[#A6B4C9] font-sans block">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#5A6578] dark:text-[#9DA9BE] border-t border-[#C87D32]/10 gap-2">
                <span>BUFFER STATUS: 120,000 REQ/S CAPACITY</span>
                <span className="text-teal-700 dark:text-teal-400 font-semibold">
                  ZERO UNENCRYPTED INGRESS ACCEPTED
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* 5. LAYER 02 / IDENTITY: AUTHENTICATION SEQUENCE                     */}
        {/* ------------------------------------------------------------------- */}
        <section
          id="layer-identity"
          className="scroll-mt-32 space-y-12 border-b border-[#C87D32]/15 pb-24"
        >
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
              02 / IDENTITY
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
              The right access. <br />
              <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                For the right role.
              </span>
            </h2>
            <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl leading-relaxed">
              Cryptographic identity tokens map strictly into partition-scoped execution rights. Credentials cannot escalate privileges beyond predetermined institutional boundaries.
            </p>
          </div>

          {/* Horizontal Four-Step Sequence: IDENTIFY → CREDENTIAL → RESOLVE → AUTHORIZE */}
          <div className="space-y-6 pt-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
              <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5" />
                AUTHENTICATION PROTOCOL SEQUENCE
              </span>
              <span className="text-[10px] text-teal-700 dark:text-teal-400 font-bold">ECDSA TOKEN VALID</span>
            </div>

            <div className="overflow-x-auto scrollbar-none py-4">
              <div className="min-w-[600px] relative">
                {/* Horizontal Baseline */}
                <div className="absolute top-[6px] left-0 right-0 h-[1px] bg-[#121926]/15 dark:bg-[#F5EFE6]/15" />

                <div className="grid grid-cols-4 gap-4 relative z-10 font-mono text-xs">
                  {[
                    { num: '01', title: 'IDENTIFY', info: 'Token ingested' },
                    { num: '02', title: 'CREDENTIAL', info: 'Signature validated' },
                    { num: '03', title: 'RESOLVE', info: 'Role mapped' },
                    { num: '04', title: 'AUTHORIZE', info: 'Session authorized' },
                  ].map((step, idx) => {
                    const isStepActive = identityStep === idx;
                    return (
                      <div key={step.title} className="space-y-3 flex flex-col items-start">
                        {/* Dot on line */}
                        <div className="w-3 h-3 flex items-center justify-center">
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              isStepActive
                                ? 'bg-[#C87D32] ring-2 ring-[#C87D32]/35 scale-125'
                                : 'bg-[#F8F4EB] dark:bg-[#060B14] border border-[#121926]/30 dark:border-[#F5EFE6]/30'
                            }`}
                          />
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] text-[#C87D32] dark:text-[#E5A955] font-semibold block">
                            {step.num} / {step.title}
                          </span>
                          <span className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6] block">
                            {step.info}
                          </span>
                          <span className="text-[11px] text-teal-700 dark:text-teal-400 font-sans block">
                            Verified ✓
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Role Scoping Minimal Editorial Switcher */}
            <div className="pt-6 border-t border-[#C87D32]/15 space-y-4">
              <div className="flex flex-wrap gap-6 sm:gap-10 font-mono text-xs">
                {[
                  { id: 'principal', title: '01 PRINCIPAL' },
                  { id: 'teacher', title: '02 TEACHER' },
                  { id: 'student', title: '03 STUDENT' },
                  { id: 'parent', title: '04 PARENT' },
                ].map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id as any)}
                      className={`transition-colors py-1 relative focus:outline-none ${
                        isSelected
                          ? 'text-[#121926] dark:text-[#F5EFE6] font-bold'
                          : 'text-[#5A6578] dark:text-[#9DA9BE] hover:text-[#121926]'
                      }`}
                    >
                      <span>{role.title}</span>
                      {isSelected && (
                        <motion.div
                          layoutId="activeRoleUnderline"
                          className="h-[2px] bg-[#C87D32] w-full mt-1"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Scoping Statements (Open Layout, NO Card Containers!) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs pt-2">
                <div className="space-y-1 border-t border-[#121926]/10 dark:border-[#F5EFE6]/10 pt-3">
                  <span className="text-[10px] text-teal-700 dark:text-teal-400 font-bold block uppercase tracking-wider">
                    READ ACCESS
                  </span>
                  <p className="text-xs text-[#121926] dark:text-[#F5EFE6] font-sans leading-relaxed">
                    {selectedRole === 'principal' && 'All 18 Faculty Ledgers, Tally Invoices, Global Transcripts, Staff Registers'}
                    {selectedRole === 'teacher' && 'Assigned Classes, Student Attendance, Syllabus Progress, Internal Marks'}
                    {selectedRole === 'student' && 'Personal Marksheet, Timetable, Bus Telemetry, Socratic AI Notebook'}
                    {selectedRole === 'parent' && 'Own Child Attendance, Live Bus GPS, Pending Fee Invoices'}
                  </p>
                </div>

                <div className="space-y-1 border-t border-[#121926]/10 dark:border-[#F5EFE6]/10 pt-3">
                  <span className="text-[10px] text-[#C87D32] dark:text-[#E5A955] font-bold block uppercase tracking-wider">
                    WRITE ACCESS
                  </span>
                  <p className="text-xs text-[#121926] dark:text-[#F5EFE6] font-sans leading-relaxed">
                    {selectedRole === 'principal' && 'Approve Master Timetable, Dispatch Transcripts, Issue Campus Circulars'}
                    {selectedRole === 'teacher' && 'Enter Exam Scores, Record Absences, Upload Lesson Handouts'}
                    {selectedRole === 'student' && 'Submit Homework Solutions, Ask Socratic Doubts, Request Hall Ticket'}
                    {selectedRole === 'parent' && 'Submit Leave Notes, Pay UPI Dues, Authorize Field Trips'}
                  </p>
                </div>

                <div className="space-y-1 border-t border-[#121926]/10 dark:border-[#F5EFE6]/10 pt-3">
                  <span className="text-[10px] text-rose-600 dark:text-rose-400 font-bold block uppercase tracking-wider">
                    AIR-GAPPED RESTRICTION
                  </span>
                  <p className="text-xs text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed">
                    {selectedRole === 'principal' && 'Student Private Medical Notes (Air-Gapped)'}
                    {selectedRole === 'teacher' && 'Colleague Payroll, Campus Financial Ledgers'}
                    {selectedRole === 'student' && 'Peer Marks, Question Banks prior to exam release'}
                    {selectedRole === 'parent' && 'Other Students Data, Institutional Ledger'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* 6. LAYER 03 / ISOLATION: ARCHITECTURAL VISUAL (DATA A ║ BARRIER ║ DATA B) */}
        {/* ------------------------------------------------------------------- */}
        <section
          id="layer-isolation"
          className="scroll-mt-32 space-y-12 border-b border-[#C87D32]/15 pb-24"
        >
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
              03 / ISOLATION
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
              Every institution <br />
              <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                stays in its own space.
              </span>
            </h2>
            <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl leading-relaxed">
              Complete logical, schema, and database isolation ensures records between campuses cannot intersect or leak under any circumstance.
            </p>
          </div>

          {/* Architectural Boundary Visual: DATA A ║ BARRIER ║ DATA B (NO CARDS!) */}
          <div className="space-y-6 pt-2 font-mono text-xs">
            <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
              <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                VIRTUAL AIR-GAP BOUNDARY
              </span>
              <span className="text-[10px] text-teal-700 dark:text-teal-400 font-bold">ZERO CROSS-TALK</span>
            </div>

            <div className="py-6 space-y-6">
              {/* Institution A Space */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#121926]/10 dark:border-[#F5EFE6]/10">
                <div>
                  <span className="text-[10px] text-[#C87D32] dark:text-[#E5A955] font-bold uppercase tracking-wider block">
                    INSTITUTION A // PRIVATE DATA SPACE
                  </span>
                  <span className="font-editorial text-xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                    St. Xavier's Senior Secondary
                  </span>
                </div>
                <span className="text-[11px] text-[#526071] dark:text-[#A6B4C9]">
                  Schema: tenant_stxaviers • Key: 0x89F4...A1
                </span>
              </div>

              {/* Animated Isolated Boundary Line (DATA A ║ BARRIER ║ DATA B) */}
              <div className="relative py-6 flex items-center justify-center">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="w-full h-[1px] bg-rose-500/50"
                />

                <div className="absolute px-4 py-1 bg-[#F8F4EB] dark:bg-[#060B14] border border-rose-500/50 text-rose-600 dark:text-rose-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <span>DATA A</span>
                  <span className="text-rose-500 font-mono">║ BARRIER ║</span>
                  <span>DATA B</span>
                  <span className="ml-2 font-mono text-[9px] bg-rose-500/10 px-1.5 py-0.5 rounded text-rose-600 dark:text-rose-400">
                    BLOCKED
                  </span>
                </div>
              </div>

              {/* Institution B Space */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-3 border-t border-[#121926]/10 dark:border-[#F5EFE6]/10">
                <div>
                  <span className="text-[10px] text-[#C87D32] dark:text-[#E5A955] font-bold uppercase tracking-wider block">
                    INSTITUTION B // PRIVATE DATA SPACE
                  </span>
                  <span className="font-editorial text-xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                    National Law University
                  </span>
                </div>
                <span className="text-[11px] text-[#526071] dark:text-[#A6B4C9]">
                  Schema: tenant_nlc_law • Key: 0x42B1...C9
                </span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#5A6578] dark:text-[#9DA9BE] border-t border-[#C87D32]/10">
              Cross-tenant queries are halted at the database driver layer with immediate connection termination.
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* 7. LAYER 04 / DATA: PROTECTED DATA HIERARCHY                        */}
        {/* ------------------------------------------------------------------- */}
        <section
          id="layer-data"
          className="scroll-mt-32 space-y-12 border-b border-[#C87D32]/15 pb-24"
        >
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
              04 / DATA
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
              Sensitive records <br />
              <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                stay protected.
              </span>
            </h2>
            <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl leading-relaxed">
              From ingest to archival audit, data traverses a continuous cryptographic hierarchy with field-level cipher at rest.
            </p>
          </div>

          {/* Protection Hierarchy: RECORD → ENCRYPT → ISOLATE → STORE → AUDIT */}
          <div className="space-y-6 pt-2 font-mono text-xs">
            <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
              <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                PROTECTED DATA PROGRESSION
              </span>
              <span className="text-[10px] text-teal-700 dark:text-teal-400 font-bold">AES-256 AT REST</span>
            </div>

            <div className="overflow-x-auto scrollbar-none py-6">
              <div className="min-w-[580px] relative">
                {/* Horizontal Progression Hairline */}
                <div className="absolute top-[6px] left-0 right-0 h-[1px] bg-[#121926]/15 dark:bg-[#F5EFE6]/15" />

                <div className="grid grid-cols-5 gap-3 relative z-10 text-center font-mono">
                  {[
                    { step: 0, label: 'RECORD', desc: 'PII Ingestion' },
                    { step: 1, label: 'ENCRYPT', desc: 'AES-256-GCM' },
                    { step: 2, label: 'ISOLATE', desc: 'Ephemeral KMS' },
                    { step: 3, label: 'STORE', desc: 'Encrypted Vault' },
                    { step: 4, label: 'AUDIT', desc: 'SHA-256 Hash' },
                  ].map((stage) => {
                    const isReached = dataStep >= stage.step;
                    const isCurrent = dataStep === stage.step;

                    return (
                      <div key={stage.label} className="space-y-2 flex flex-col items-center">
                        <div className="w-3 h-3 flex items-center justify-center">
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              isCurrent
                                ? 'bg-[#C87D32] scale-125 ring-2 ring-[#C87D32]/35'
                                : isReached
                                ? 'bg-[#C87D32]'
                                : 'bg-[#F8F4EB] dark:bg-[#060B14] border border-[#121926]/30 dark:border-[#F5EFE6]/30'
                            }`}
                          />
                        </div>

                        <div className="space-y-0.5">
                          <span
                            className={`text-[11px] font-bold tracking-wider block transition-colors ${
                              isCurrent
                                ? 'text-[#C87D32] dark:text-[#E5A955]'
                                : 'text-[#121926] dark:text-[#F5EFE6]'
                            }`}
                          >
                            {stage.label}
                          </span>
                          <span className="text-[10px] text-[#526071] dark:text-[#A6B4C9] font-sans block">
                            {stage.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5A6578] dark:text-[#9DA9BE] border-t border-[#C87D32]/10 gap-2">
              <span>ROTATION CYCLE: 90-DAY KEY ROTATION</span>
              <span className="text-teal-700 dark:text-teal-400 font-semibold">
                ZERO UNENCRYPTED STUDENT MARKS OR FEES AT REST
              </span>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* 8. LAYER 05 / AI SAFETY: TYPOGRAPHIC STATEMENT & GUARDRAIL SEQUENCE */}
        {/* ------------------------------------------------------------------- */}
        <section
          id="layer-ai"
          className="scroll-mt-32 space-y-12 border-b border-[#C87D32]/15 pb-24"
        >
          {/* Large Typographic Statement */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
              05 / AI SAFETY
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
              AI can assist. <br />
              <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                It cannot cross the boundary.
              </span>
            </h2>
            <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl leading-relaxed">
              Curriculum-grounded models operate behind strict context policies. Institutional records, private ledger entries, and unapproved web domains are strictly air-gapped from generation loops.
            </p>
          </div>

          {/* Minimal Guardrail Sequence: INPUT → POLICY → MODEL → VALIDATION → RESPONSE */}
          <div className="space-y-6 pt-2 font-mono text-xs">
            <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
              <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                GUARDRAIL EXECUTION SEQUENCE
              </span>
              <span className="text-[10px] text-teal-700 dark:text-teal-400 font-bold">
                PEDAGOGICAL BOUNDARY ACTIVE
              </span>
            </div>

            <div className="overflow-x-auto scrollbar-none py-6">
              <div className="min-w-[580px] relative">
                {/* Horizontal Connecting Hairline */}
                <div className="absolute top-[6px] left-0 right-0 h-[1px] bg-[#121926]/15 dark:bg-[#F5EFE6]/15" />

                <div className="grid grid-cols-5 gap-3 relative z-10 text-center font-mono">
                  {[
                    { step: 0, label: 'INPUT', desc: 'Student Query' },
                    { step: 1, label: 'POLICY', desc: 'PII & Scoping' },
                    { step: 2, label: 'MODEL', desc: 'NCERT Grounding' },
                    { step: 3, label: 'VALIDATION', desc: 'Citation Check' },
                    { step: 4, label: 'RESPONSE', desc: 'Socratic Output' },
                  ].map((stage) => {
                    const isReached = aiSafetyStep >= stage.step;
                    const isCurrent = aiSafetyStep === stage.step;
                    const isBlockedHere = isAiViolating && stage.step === 1 && isCurrent;

                    return (
                      <div key={stage.label} className="space-y-2 flex flex-col items-center">
                        <div className="w-3 h-3 flex items-center justify-center">
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              isBlockedHere
                                ? 'bg-rose-600 scale-125 ring-2 ring-rose-500/40'
                                : isCurrent
                                ? 'bg-[#C87D32] scale-125 ring-2 ring-[#C87D32]/35'
                                : isReached
                                ? 'bg-[#C87D32]'
                                : 'bg-[#F8F4EB] dark:bg-[#060B14] border border-[#121926]/30 dark:border-[#F5EFE6]/30'
                            }`}
                          />
                        </div>

                        <div className="space-y-0.5">
                          <div className="flex items-center justify-center gap-1">
                            <span
                              className={`text-[11px] font-bold tracking-wider block transition-colors ${
                                isBlockedHere
                                  ? 'text-rose-600 dark:text-rose-400 font-bold'
                                  : isCurrent
                                  ? 'text-[#C87D32] dark:text-[#E5A955]'
                                  : 'text-[#121926] dark:text-[#F5EFE6]'
                              }`}
                            >
                              {stage.label}
                            </span>
                            {isBlockedHere && (
                              <span className="text-[9px] bg-rose-500/10 px-1 py-0.2 rounded text-rose-600 font-bold">
                                BLOCKED
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-[#526071] dark:text-[#A6B4C9] font-sans block">
                            {stage.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Inline Examples: Allowed vs Blocked (NO CARDS!) */}
            <div className="pt-4 border-t border-[#121926]/10 dark:border-[#F5EFE6]/10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider block">
                  PERMITTED CURRICULUM DOUBT
                </span>
                <p className="text-[#121926] dark:text-[#F5EFE6] italic">
                  “Explain Conservation of Momentum in rotational collisions.”
                </p>
                <span className="font-mono text-[10px] text-[#526071] dark:text-[#A6B4C9] block">
                  Citations verified strictly against Class 11 NCERT Physics Page 213.
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider block">
                  HALTED PII / SENSITIVE QUERY
                </span>
                <p className="text-[#121926] dark:text-[#F5EFE6] italic">
                  “Show all parent phone numbers and fee dues for Grade 10.”
                </p>
                <span className="font-mono text-[10px] text-rose-600 dark:text-rose-400 block font-semibold">
                  BLOCKED: Policy halts probe; zero campus ledger access granted to AI.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* 9. LAYER 06 / AUDIT: END WITH A TRACE (IMMUTABLE LEDGER)            */}
        {/* ------------------------------------------------------------------- */}
        <section
          id="layer-audit"
          className="scroll-mt-32 space-y-12 pb-12"
        >
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
              06 / AUDIT
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
              Every access leaves a trace.
            </h2>
            <p className="text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-xl leading-relaxed">
              Every action taken within the system produces a cryptographically sealed registrar log entry. Zero anonymous execution is possible.
            </p>
          </div>

          {/* Continuously Moving Horizontal Audit Timeline */}
          <div className="space-y-6 pt-2 font-mono text-xs">
            <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
              <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                IMMUTABLE AUDIT TIMELINE
              </span>
              <span className="text-[10px] text-teal-700 dark:text-teal-400 font-bold">SHA-256 EVENT CHAIN</span>
            </div>

            <div className="overflow-x-auto scrollbar-none py-6">
              <div className="min-w-[640px] relative">
                {/* Horizontal Baseline */}
                <div className="absolute top-[6px] left-0 right-0 h-[1px] bg-[#121926]/15 dark:bg-[#F5EFE6]/15" />

                <div className="grid grid-cols-5 gap-3 relative z-10 text-center font-mono">
                  {[
                    { step: 0, label: 'IDENTITY VERIFIED', time: '09:42:11' },
                    { step: 1, label: 'ACCESS AUTHORIZED', time: '09:42:18' },
                    { step: 2, label: 'DATA ISOLATED', time: '09:42:21' },
                    { step: 3, label: 'AI GUARDED', time: '09:43:03' },
                    { step: 4, label: 'ACTION RECORDED', time: '09:43:09' },
                  ].map((stage) => {
                    const isReached = auditStep >= stage.step;
                    const isCurrent = auditStep === stage.step;

                    return (
                      <div key={stage.label} className="space-y-2 flex flex-col items-center">
                        <div className="w-3 h-3 flex items-center justify-center">
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              isCurrent
                                ? 'bg-[#C87D32] scale-125 ring-2 ring-[#C87D32]/35'
                                : isReached
                                ? 'bg-[#C87D32]'
                                : 'bg-[#F8F4EB] dark:bg-[#060B14] border border-[#121926]/30 dark:border-[#F5EFE6]/30'
                            }`}
                          />
                        </div>

                        <div className="space-y-0.5">
                          <span
                            className={`text-[10px] font-bold tracking-wider block transition-colors ${
                              isCurrent
                                ? 'text-[#C87D32] dark:text-[#E5A955]'
                                : 'text-[#121926] dark:text-[#F5EFE6]'
                            }`}
                          >
                            {stage.label}
                          </span>
                          <span className="text-[10px] text-[#526071] dark:text-[#A6B4C9] block">
                            {stage.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Climax Seal: AUDIT COMPLETE ✓ */}
            <div className="pt-6 border-t border-[#121926]/10 dark:border-[#F5EFE6]/10 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-teal-700 dark:text-teal-400 font-bold flex items-center gap-1.5 text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>AUDIT COMPLETE ✓</span>
              </span>
              <span className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE]">
                IMMUTABLE REGISTRAR EVENT LOG COMMITTED
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* ===================================================================== */}
      {/* COMPLIANCE MARKERS — ARCHIVAL LEDGER SPECIFICATIONS (NO CARDS)       */}
      {/* ===================================================================== */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-[#C87D32]/15 text-center relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">
          <span>CASA TIER-2 CERTIFIED</span>
          <span className="text-[#C87D32]/30">•</span>
          <span>DPDP ACT 2023 COMPLIANT</span>
          <span className="text-[#C87D32]/30">•</span>
          <span>ZERO DIRECT DB EXPOSURE</span>
          <span className="text-[#C87D32]/30">•</span>
          <span>SHA-256 IMMUTABLE LEDGER</span>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* FINAL EDITORIAL CLOSING STATEMENT & MINIMAL CTA (OPEN CANVAS)         */}
      {/* ===================================================================== */}
      <section className="py-24 text-center space-y-6 max-w-3xl mx-auto px-6 border-t border-[#C87D32]/15 relative z-10">
        <div className="w-12 h-12 mx-auto rounded-full border border-[#C87D32] flex items-center justify-center bg-[#FAF5EB] dark:bg-[#0E1524] shadow-sm">
          <ShieldCheck className="w-6 h-6 text-[#C87D32] dark:text-[#E5A955]" />
        </div>

        <div className="font-mono text-[10px] tracking-widest text-[#C87D32] uppercase">
          AI-EDUCATION SECURITY ARCHITECTURE
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
          Trust is not a feature. <br />
          <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
            It is the architecture.
          </span>
        </h2>

        <p className="text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-md mx-auto leading-relaxed">
          Institutional security engineered for schools, universities, academies, and learning operations.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-editorial text-sm font-bold italic tracking-wide hover:bg-[#C87D32] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Book an Institutional Security Walkthrough</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('solutions')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#C87D32]/50 hover:border-[#C87D32] text-[#121926] dark:text-[#F5EFE6] font-editorial text-sm italic hover:bg-[#FAF5EB]/60 dark:hover:bg-[#111A2E]/60 transition-all"
          >
            <span>Explore Solutions</span>
          </button>
        </div>
      </section>

    </div>
  );
};
