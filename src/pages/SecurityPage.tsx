import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Activity,
  KeyRound,
  ShieldCheck,
  Database,
  Sparkles,
  Clock,
  Terminal,
  ShieldAlert,
  Cpu,
  RefreshCw,
  Zap,
  Server,
  Shield,
  Layers,
  Play,
  FileCheck,
  AlertOctagon,
} from 'lucide-react';
import type { PageId } from '../types';
import {
  RevealEyebrow,
  RevealHeading,
  RevealDescription,
  RevealVisual,
  RevealCTA
} from '../components/common/ScrollReveal';
import { GatewayRegisterObject } from '../components/security/objects/GatewayRegisterObject';
import { IdentityCredentialObject } from '../components/security/objects/IdentityCredentialObject';
import { CampusDeedBlueprintObject } from '../components/security/objects/CampusDeedBlueprintObject';
import { StudentLedgerVaultObject } from '../components/security/objects/StudentLedgerVaultObject';
import { TextbookGuardrailObject } from '../components/security/objects/TextbookGuardrailObject';
import { RegistrarAuditScrollObject } from '../components/security/objects/RegistrarAuditScrollObject';
import { AccreditationSeal, ScholarCapCharterObject } from '../components/security/objects/AcademicInsigniaObject';

interface SecurityPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [selectedRole, setSelectedRole] = useState<'principal' | 'teacher' | 'student' | 'parent'>('principal');

  // Interactive Simulator States
  // 1. Gateway Packet Simulator
  const [packetType, setPacketType] = useState<'legit' | 'malicious'>('legit');
  const [isSimulatingPacket, setIsSimulatingPacket] = useState<boolean>(false);
  const [packetStep, setPacketStep] = useState<number>(0);

  // 2. Air-Gap Breach Simulator
  const [isBreachTesting, setIsBreachTesting] = useState<boolean>(false);
  const [breachResult, setBreachResult] = useState<'idle' | 'testing' | 'blocked'>('idle');

  // 3. Data Vault Encrypter
  const [isEncrypted, setIsEncrypted] = useState<boolean>(false);
  const [cipherText, setCipherText] = useState<string>('e7a9b04f8c2196a0b943d2c18408f61e29ad3c8b');

  // 4. AI Guardrail Sandbox
  const [aiQueryIndex, setAiQueryIndex] = useState<number>(0);
  const [aiEvalState, setAiEvalState] = useState<'idle' | 'checking' | 'allowed' | 'blocked'>('allowed');

  // 5. Live Audit Stream
  const [ledgerLogs, setLedgerLogs] = useState<Array<{ id: string; time: string; action: string; hash: string }>>([
    { id: 'BLK-9024', time: '11:02:18', action: 'ECDSA Token Verified', hash: '8f4a...21c9' },
    { id: 'BLK-9025', time: '11:02:35', action: 'KMS Key Auto-Rotated', hash: 'e210...94ba' },
    { id: 'BLK-9026', time: '11:02:49', action: 'NCERT Citation Validated', hash: '43b9...77d1' },
    { id: 'BLK-9027', time: '11:03:02', action: 'Cross-Tenant Probe Neutralized', hash: '91f2...55ae' },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  const layers = [
    { id: 'layer-gateway', num: '01', title: 'GATEWAY' },
    { id: 'layer-identity', num: '02', title: 'IDENTITY' },
    { id: 'layer-isolation', num: '03', title: 'ISOLATION' },
    { id: 'layer-data', num: '04', title: 'DATA' },
    { id: 'layer-ai', num: '05', title: 'AI SAFETY' },
    { id: 'layer-audit', num: '06', title: 'AUDIT' },
  ];

  // Auto-cycle ledger logs
  useEffect(() => {
    const actions = [
      'TLS 1.3 Handshake Terminated',
      'AES-256 Ledger Block Sealed',
      'Socratic Query Filter Cleared',
      'Role Partition Verified',
      'Zero-Trust Token Renewed',
    ];
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomHash = Math.random().toString(36).substring(2, 6) + '...' + Math.random().toString(36).substring(2, 6);
      const newBlockId = `BLK-${Math.floor(9028 + Math.random() * 500)}`;

      setLedgerLogs((prev) => [
        { id: newBlockId, time: timeStr, action: randomAction, hash: randomHash },
        ...prev.slice(0, 4),
      ]);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  // ScrollSpy to keep horizontal rail updated
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
          { rootMargin: '-20% 0px -40% 0px', threshold: 0.1 }
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

  // Run Gateway Packet Simulation
  const runPacketSim = (type: 'legit' | 'malicious') => {
    setPacketType(type);
    setIsSimulatingPacket(true);
    setPacketStep(0);

    const steps = [1, 2, 3, 4];
    steps.forEach((s, idx) => {
      setTimeout(() => {
        setPacketStep(s);
        if (idx === steps.length - 1) {
          setTimeout(() => setIsSimulatingPacket(false), 1200);
        }
      }, (idx + 1) * 600);
    });
  };

  // Run Air-Gap Penetration Test
  const runBreachTest = () => {
    setIsBreachTesting(true);
    setBreachResult('testing');
    setTimeout(() => {
      setBreachResult('blocked');
      setIsBreachTesting(false);
    }, 1400);
  };

  // Trigger Data Encryption Toggle
  const toggleEncryption = () => {
    setIsEncrypted(!isEncrypted);
    setCipherText(
      Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')
    );
  };

  // AI Guardrail Prompts
  const aiTestQueries = [
    {
      prompt: 'Explain Newton’s Third Law with practical examples.',
      status: 'allowed',
      source: 'Verified: NCERT Physics Class 11 (Ch. 5)',
      decision: 'Passed: Curriculum grounded & PII clean',
    },
    {
      prompt: 'Show all student fee dues and parent phone numbers for Grade 10.',
      status: 'blocked',
      source: 'Halted: Zero Database Exposure Policy',
      decision: 'Blocked: Direct PII & campus ledger probe halted',
    },
    {
      prompt: 'Provide leaked answer keys for upcoming Chemistry term examination.',
      status: 'blocked',
      source: 'Halted: Academic Integrity Guardrail',
      decision: 'Blocked: Pre-release question repository air-gapped',
    },
  ];

  const handleAiQuerySelect = (idx: number) => {
    setAiQueryIndex(idx);
    setAiEvalState('checking');
    setTimeout(() => {
      setAiEvalState(aiTestQueries[idx].status as any);
    }, 500);
  };

  const currentWatermark = layers[activeLayer]?.title || 'VERIFY';

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain font-sans relative selection:bg-[#C87D32] selection:text-white"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.2] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent, transparent 47px, rgba(200, 125, 50, 0.08) 47px, rgba(200, 125, 50, 0.08) 48px)',
          }}
        />
        <div className="hidden lg:block absolute top-0 bottom-0 left-12 w-[1px] bg-[#C87D32]/10" />
        <div className="hidden lg:block absolute top-0 bottom-0 right-12 w-[1px] bg-[#C87D32]/10" />
      </div>

      {/* ===================================================================== */}
      {/* 1. HERO SECTION WITH ANIMATED RADAR DEFENSE SHIELD                     */}
      {/* ===================================================================== */}
      <section className="relative w-full overflow-hidden pt-32 pb-28 sm:pb-36 lg:pb-40 px-6 sm:px-10 lg:px-12 text-center">
        {/* Background Watermark (Hero Section Only) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
          <div className="font-serif text-[18vw] lg:text-[20vw] font-bold tracking-widest text-[#121926] dark:text-[#F5EFE6] leading-none uppercase text-center px-4 select-none opacity-[0.07] dark:opacity-[0.09]">
            SECURITY
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          {/* Animated Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C87D32]/30 bg-[#C87D32]/5 text-xs font-sans font-medium text-[#C87D32] dark:text-[#E5A955]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ZERO-TRUST ARCHITECTURE // LIVE MONITOR</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-[1.08] tracking-tight max-w-4xl mx-auto"
          >
            Security that leaves <br />
            <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
              nothing uncertain.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#526071] dark:text-[#A6B4C9] font-sans max-w-2xl mx-auto"
          >
            Complete logical isolation, field-level encryption, and curriculum sandboxing for modern campuses.
          </motion.p>

          {/* ANIMATED RADAR SHIELD DISPLAY (CARDLESS / OPEN CANVAS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 max-w-xl mx-auto"
          >
            <div className="relative py-2">

              {/* Radar scanner graphics */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto flex items-center justify-center">
                {/* Concentric radar rings */}
                <div className="absolute inset-0 rounded-full border border-[#C87D32]/20" />
                <div className="absolute inset-4 rounded-full border border-[#C87D32]/30" />
                <div className="absolute inset-10 rounded-full border border-[#C87D32]/40 border-dashed" />
                <div className="absolute inset-16 rounded-full border border-[#C87D32]/50" />

                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#C87D32]/20" />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#C87D32]/20" />

                {/* Revolving Sweep Beam */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full origin-center pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(200, 125, 50, 0.25) 60deg, transparent 65deg)',
                  }}
                />

                {/* Pulsing Target Nodes */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-8 right-10 w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-10 left-12 w-2 h-2 rounded-full bg-[#C87D32]"
                />

                {/* Center Core Shield */}
                <div className="w-16 h-16 rounded-full bg-[#FAF5EB] dark:bg-[#070B13] border-2 border-[#C87D32] flex items-center justify-center shadow-md relative z-10">
                  <ShieldCheck className="w-8 h-8 text-[#C87D32] dark:text-[#E5A955]" />
                </div>
              </div>

              {/* Live Metrics Row */}
              <div className="mt-8 pt-6 border-t border-[#C87D32]/20 max-w-md mx-auto grid grid-cols-3 gap-2 text-center font-mono text-xs">
                <div className="space-y-0.5">
                  <div className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] uppercase">INGRESS DEFENSE</div>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">100% BLOCKED</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] uppercase">LATENCY</div>
                  <div className="font-bold text-[#121926] dark:text-[#F5EFE6]">0.08 ms</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] uppercase">ISOLATION</div>
                  <div className="font-bold text-[#C87D32] dark:text-[#E5A955]">AIR-GAPPED</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </section>

      {/* ===================================================================== */}
      {/* 2. STICKY HORIZONTAL NAVIGATION RAIL                                  */}
      {/* ===================================================================== */}
      <nav
        aria-label="Security Layers Navigation"
        className="sticky top-16 z-30 py-3 bg-[#F8F4EB]/95 dark:bg-[#060B14]/95 backdrop-blur-md border-y border-[#C87D32]/15 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto pb-1 scrollbar-none font-sans text-xs gap-3 sm:gap-6">
            {layers.map((layer, idx) => {
              const isActive = activeLayer === idx;
              return (
                <button
                  key={layer.id}
                  onClick={() => scrollToLayer(layer.id, idx)}
                  className={`group relative py-1.5 px-3 rounded-lg shrink-0 flex items-center gap-2 transition-all ${isActive
                    ? 'text-[#121926] dark:text-[#F5EFE6] font-bold bg-[#C87D32]/10 dark:bg-[#C87D32]/15'
                    : 'text-[#5A6578] dark:text-[#9DA9BE] hover:text-[#121926] dark:hover:text-[#F5EFE6]'
                    }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#C87D32] font-bold' : 'opacity-60'}`}>
                    {layer.num}
                  </span>
                  <span className="tracking-wider uppercase text-xs font-medium">
                    {layer.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ===================================================================== */}
      {/* 3. MAIN INTERACTIVE SECURITY SYSTEMS STREAM                            */}
      {/* ===================================================================== */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 space-y-28 relative z-10">

        {/* ------------------------------------------------------------------- */}
        {/* LAYER 01 / GATEWAY: INTERACTIVE PACKET INGRESS PIPELINE             */}
        {/* ------------------------------------------------------------------- */}
        <section id="layer-gateway" className="scroll-mt-32 space-y-8 border-b border-[#C87D32]/15 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <RevealEyebrow>
                <span className="font-mono text-xs font-bold text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                  01 / GATEWAY DEFENSE
                </span>
              </RevealEyebrow>
              <RevealHeading>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                  Every connection starts at the gate.
                </h2>
              </RevealHeading>
              <RevealDescription>
                <p className="text-sm text-[#526071] dark:text-[#A6B4C9] max-w-xl">
                  Zero direct public database exposure. Inbound traffic passes strict TLS 1.3 edge handshakes before internal routing.
                </p>
              </RevealDescription>
            </div>

            {/* Test Simulation Buttons */}
            <RevealCTA className="flex items-center gap-2 shrink-0">
              <button
                disabled={isSimulatingPacket}
                onClick={() => runPacketSim('legit')}
                className="px-3.5 py-2 rounded-xl border border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-semibold hover:bg-emerald-500/20 transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>Test Authorized Ingress</span>
              </button>
              <button
                disabled={isSimulatingPacket}
                onClick={() => runPacketSim('malicious')}
                className="px-3.5 py-2 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-600 dark:text-rose-300 font-mono text-xs font-semibold hover:bg-rose-500/20 transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <AlertOctagon className="w-3 h-3" />
                <span>Test Malicious Flood</span>
              </button>
            </RevealCTA>
          </div>

          {/* Interactive Pipeline & Educational Gateway Object */}
          <RevealVisual className="space-y-6 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Pipeline */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] pb-2 border-b border-[#C87D32]/20">
                  <span className="flex items-center gap-1.5 font-bold text-[#C87D32]">
                    <Activity className="w-4 h-4 animate-pulse" />
                    EDGE PACKET VERIFICATION PIPELINE
                  </span>
                  <span>TLS 1.3 • AES-GCM • PORT 443</span>
                </div>

                {/* Visual Pipeline Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative font-mono text-xs">
                  {[
                    { step: 1, title: 'Edge Ingress', sub: 'Rate < 120 req/s' },
                    { step: 2, title: 'TLS 1.3 Term.', sub: 'Cipher validation' },
                    { step: 3, title: 'Token Check', sub: 'ECDSA signature' },
                    { step: 4, title: 'VPC Routing', sub: 'Internal transit' },
                  ].map((node) => {
                    const isActive = packetStep >= node.step;
                    const isFailPoint = packetType === 'malicious' && node.step === 2 && packetStep >= 2;

                    return (
                      <div
                        key={node.step}
                        className={`p-3.5 rounded-xl border transition-all duration-300 space-y-1 relative overflow-hidden ${isFailPoint
                          ? 'border-rose-500 bg-rose-500/10'
                          : isActive
                            ? 'border-emerald-600 bg-emerald-500/10'
                            : 'border-[#C87D32]/20 bg-transparent'
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-[#C87D32] font-bold">0{node.step}</span>
                          {isFailPoint ? (
                            <span className="text-[10px] font-bold text-rose-500">REJECTED ✕</span>
                          ) : isActive ? (
                            <span className="text-[10px] font-bold text-emerald-600">PASSED ✓</span>
                          ) : (
                            <span className="text-[10px] opacity-40">STANDBY</span>
                          )}
                        </div>
                        <div className="font-bold text-[#121926] dark:text-[#F5EFE6] text-xs">
                          {node.title}
                        </div>
                        <div className="text-[10px] text-[#526071] dark:text-[#A6B4C9] font-sans">
                          {node.sub}
                        </div>

                        {/* Traveling pulse animation bar */}
                        {packetStep === node.step && (
                          <motion.div
                            layoutId="pipelinePulse"
                            className={`absolute bottom-0 left-0 right-0 h-1 ${isFailPoint ? 'bg-rose-500' : 'bg-emerald-500'
                              }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Status Footer */}
                <div className="pt-2 border-t border-[#C87D32]/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] gap-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Buffer Capacity: 120,000 req/s with automatic IP throttling</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    Zero Unencrypted Ingress Permitted
                  </span>
                </div>
              </div>

              {/* Right Column: Educational Security Gateway Ingress Register Object */}
              <div className="lg:col-span-5 flex justify-center">
                <GatewayRegisterObject
                  packetType={packetType}
                  isSimulating={isSimulatingPacket}
                  packetStep={packetStep}
                />
              </div>
            </div>
          </RevealVisual>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* LAYER 02 / IDENTITY: DYNAMIC ROLE MATRIX                          */}
        {/* ------------------------------------------------------------------- */}
        <section id="layer-identity" className="scroll-mt-32 space-y-8 border-b border-[#C87D32]/15 pb-20">
          <div className="space-y-2">
            <RevealEyebrow>
              <span className="font-mono text-xs font-bold text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                02 / IDENTITY & SCOPING
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                The right access for the right role.
              </h2>
            </RevealHeading>
            <RevealDescription>
              <p className="text-sm text-[#526071] dark:text-[#A6B4C9] max-w-xl">
                Cryptographic tokens lock users strictly to partition-scoped rights. Privilege escalation is prevented by design.
              </p>
            </RevealDescription>
          </div>

          {/* Interactive Role Selector & Collegiate Credential Object */}
          <RevealVisual className="space-y-6 pt-2">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs pb-3 border-b border-[#C87D32]/20">
              {[
                { id: 'principal', label: 'Principal' },
                { id: 'teacher', label: 'Teacher' },
                { id: 'student', label: 'Student' },
                { id: 'parent', label: 'Parent' },
              ].map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id as any)}
                  className={`px-4 py-2 rounded-full border transition-all text-xs font-semibold ${selectedRole === role.id
                    ? 'border-[#C87D32] bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] shadow-sm'
                    : 'border-[#C87D32]/25 hover:border-[#C87D32] text-[#5A6578] dark:text-[#9DA9BE]'
                    }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Animated Permission Cards */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedRole}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                  >
                    {/* Read Access */}
                    <div className="p-3.5 rounded-xl border border-emerald-600/30 bg-emerald-500/5 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Authorized Read</span>
                      </div>
                      <p className="text-xs text-[#121926] dark:text-[#F5EFE6] leading-relaxed">
                        {selectedRole === 'principal' && 'All 18 Faculty Ledgers, Tally Invoices, Global Transcripts, Staff Registers'}
                        {selectedRole === 'teacher' && 'Assigned Classes, Attendance, Syllabus Progress, Term Examination Rubrics'}
                        {selectedRole === 'student' && 'Personal Marksheet, Timetable, Bus Telemetry, Socratic AI Notebook'}
                        {selectedRole === 'parent' && 'Own Child Attendance, Live Bus GPS, Pending Fee Invoices'}
                      </p>
                    </div>

                    {/* Write Access */}
                    <div className="p-3.5 rounded-xl border border-[#C87D32]/30 bg-[#C87D32]/5 space-y-2">
                      <div className="flex items-center gap-2 text-[#C87D32] dark:text-[#E5A955] font-mono text-xs font-bold uppercase">
                        <KeyRound className="w-4 h-4" />
                        <span>Authorized Write</span>
                      </div>
                      <p className="text-xs text-[#121926] dark:text-[#F5EFE6] leading-relaxed">
                        {selectedRole === 'principal' && 'Approve Master Timetable, Dispatch Transcripts, Issue Campus Circulars'}
                        {selectedRole === 'teacher' && 'Record Marks, Log Absences, Upload Lesson Handouts & Homework'}
                        {selectedRole === 'student' && 'Submit Homework Solutions, Ask Socratic Doubts, Request Hall Ticket'}
                        {selectedRole === 'parent' && 'Submit Leave Notes, Pay UPI Fees, Authorize Field Trips'}
                      </p>
                    </div>

                    {/* Air-Gapped Forbidden Scope */}
                    <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/5 space-y-2">
                      <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold uppercase">
                        <ShieldAlert className="w-4 h-4" />
                        <span>Air-Gapped (Blocked)</span>
                      </div>
                      <p className="text-xs text-[#526071] dark:text-[#A6B4C9] leading-relaxed">
                        {selectedRole === 'principal' && 'Direct Student Health Records (Sealed to Medical Desk)'}
                        {selectedRole === 'teacher' && 'Colleague Payroll, Campus Financial Tally Ledgers'}
                        {selectedRole === 'student' && 'Peer Marks, Unreleased Question Repositories'}
                        {selectedRole === 'parent' && 'Other Students Data, Institutional Ledger Entries'}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Collegiate Credential Docket Object */}
              <div className="lg:col-span-5 flex justify-center">
                <IdentityCredentialObject selectedRole={selectedRole} />
              </div>
            </div>
          </RevealVisual>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* LAYER 03 / ISOLATION: INTERACTIVE AIR-GAP BREACH SIMULATOR          */}
        {/* ------------------------------------------------------------------- */}
        <section id="layer-isolation" className="scroll-mt-32 space-y-8 border-b border-[#C87D32]/15 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <RevealEyebrow>
                <span className="font-mono text-xs font-bold text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                  03 / TENANT ISOLATION
                </span>
              </RevealEyebrow>
              <RevealHeading>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                  Every institution stays in its own space.
                </h2>
              </RevealHeading>
              <RevealDescription>
                <p className="text-sm text-[#526071] dark:text-[#A6B4C9] max-w-xl">
                  Complete database schema isolation. Campus A and Campus B share zero memory or execution boundaries.
                </p>
              </RevealDescription>
            </div>

            {/* Test Simulation Button */}
            <RevealCTA>
              <button
                disabled={isBreachTesting}
                onClick={runBreachTest}
                className="px-4 py-2.5 rounded-xl border border-[#C87D32] bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-mono text-xs font-semibold hover:bg-[#C87D32] hover:text-white transition-all shadow-sm flex items-center gap-2 self-start md:self-auto disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Simulate Cross-Tenant Breach Attempt</span>
              </button>
            </RevealCTA>
          </div>

          {/* Interactive Air-Gap Sandbox & Campus Architectural Deeds */}
          <RevealVisual className="space-y-6 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Sandbox & Deflection Status */}
              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center">

                  {/* Institution A */}
                  <div className="md:col-span-5 p-4 rounded-xl border border-[#C87D32]/25 bg-transparent space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#C87D32]">
                      <span>TENANT_01</span>
                      <span className="text-emerald-600 font-bold">ISOLATED ✓</span>
                    </div>
                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                      St. Xavier’s Senior Secondary
                    </div>
                    <div className="text-[11px] text-[#526071] dark:text-[#A6B4C9] font-mono">
                      Schema: db_tenant_stxaviers • Key: 0x89F4...A1
                    </div>
                  </div>

                  {/* Glowing Electromagnetic Barrier */}
                  <div className="md:col-span-1 flex flex-col items-center justify-center py-2 relative">
                    <div className="h-16 md:h-24 w-[2px] bg-rose-500/60 relative overflow-hidden">
                      {breachResult === 'testing' && (
                        <motion.div
                          animate={{ y: ['-100%', '100%'] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-full h-8 bg-rose-500 shadow-sm shadow-rose-500"
                        />
                      )}
                    </div>
                    <div className="mt-1 px-1 py-0.5 rounded bg-rose-500/15 border border-rose-500/40 text-[8px] font-mono text-rose-600 dark:text-rose-400 font-bold">
                      AIR-GAP
                    </div>
                  </div>

                  {/* Institution B */}
                  <div className="md:col-span-5 p-4 rounded-xl border border-[#C87D32]/25 bg-transparent space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#C87D32]">
                      <span>TENANT_02</span>
                      <span className="text-emerald-600 font-bold">ISOLATED ✓</span>
                    </div>
                    <div className="font-editorial text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                      National Law University
                    </div>
                    <div className="text-[11px] text-[#526071] dark:text-[#A6B4C9] font-mono">
                      Schema: db_tenant_nlc_law • Key: 0x42B1...C9
                    </div>
                  </div>

                </div>

                {/* Breach Test Result Banner */}
                {breachResult !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-3.5 rounded-xl border font-mono text-xs flex items-center justify-between ${breachResult === 'testing'
                      ? 'border-[#C87D32] bg-[#C87D32]/10 text-[#C87D32]'
                      : 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4" />
                      <span>
                        {breachResult === 'testing'
                          ? 'Injecting synthetic SQL query across tenant partition boundary...'
                          : 'BREACH ATTEMPT TERMINATED: Driver rejected query before execution. 0 cross-tenant leakage.'}
                      </span>
                    </div>
                    <span className="font-bold text-[10px] bg-rose-500/20 px-2 py-0.5 rounded">
                      DEFLECTION: 100%
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Right Column: Campus Architectural Deed Blueprint Object */}
              <div className="lg:col-span-6 flex justify-center">
                <CampusDeedBlueprintObject
                  isBreachTesting={isBreachTesting}
                  breachResult={breachResult}
                />
              </div>
            </div>
          </RevealVisual>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* LAYER 04 / DATA: INTERACTIVE AES-256 VAULT ENCRYPTOR               */}
        {/* ------------------------------------------------------------------- */}
        <section id="layer-data" className="scroll-mt-32 space-y-8 border-b border-[#C87D32]/15 pb-20">
          <div className="space-y-2">
            <RevealEyebrow>
              <span className="font-mono text-xs font-bold text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                04 / CRYPTOGRAPHIC ENGINE
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                Sensitive records stay protected at rest.
              </h2>
            </RevealHeading>
            <RevealDescription>
              <p className="text-sm text-[#526071] dark:text-[#A6B4C9] max-w-xl">
                AES-256-GCM cipher with 90-day automatic ephemeral key rotation. Zero plain-text marks or finances stored.
              </p>
            </RevealDescription>
          </div>

          {/* Interactive Encryption Demo & Student Ledger Vault */}
          <RevealVisual className="space-y-6 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs pb-3 border-b border-[#C87D32]/20">
              <span className="text-[#C87D32] font-bold flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>FIELD-LEVEL AES-256 CIPHER LAB</span>
              </span>
              <button
                onClick={toggleEncryption}
                className="px-3.5 py-1.5 rounded-full border border-[#C87D32] bg-[#FAF5EB] dark:bg-[#080D18] text-[#121926] dark:text-[#F5EFE6] font-semibold hover:bg-[#C87D32] hover:text-white transition-all flex items-center gap-1.5"
              >
                <RefreshCw className="w-3 h-3" />
                <span>{isEncrypted ? 'Show Decrypted Payload' : 'Encrypt with AES-256'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Code / Cipher Box */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-transparent font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-[#5A6578] dark:text-[#9DA9BE] text-[10px]">
                    <span>PAYLOAD STATUS: {isEncrypted ? 'ENCRYPTED (CIPHER AT REST)' : 'APPLICATION PLAINTEXT'}</span>
                    <span className="text-emerald-600 font-bold">KMS: EPHEMERAL-KEY-90D</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121926]/5 dark:bg-[#121926] text-[#121926] dark:text-[#F5EFE6] break-all font-mono">
                    {isEncrypted ? (
                      <span className="text-[#C87D32] dark:text-[#E5A955] tracking-wider">
                        $aes256$gcm${cipherText}$auth_tag_99a
                      </span>
                    ) : (
                      <span>
                        &#123; "student_id": "STU-8821", "name": "Aarav Sharma", "term_fees_due": 0.00, "marks_percent": 96.4 &#125;
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] pt-2 border-t border-[#C87D32]/10">
                  <div>• 90-Day Key Auto-Rotation</div>
                  <div>• Zero Plaintext DB Storage</div>
                  <div>• DPDP Act 2023 Compliant</div>
                </div>
              </div>

              {/* Right Column: Academic Student Ledger Vault Object */}
              <div className="lg:col-span-6 flex justify-center">
                <StudentLedgerVaultObject
                  isEncrypted={isEncrypted}
                  cipherText={cipherText}
                />
              </div>
            </div>
          </RevealVisual>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* LAYER 05 / AI SAFETY: INTERACTIVE GUARDRAIL TEST BENCH              */}
        {/* ------------------------------------------------------------------- */}
        <section id="layer-ai" className="scroll-mt-32 space-y-8 border-b border-[#C87D32]/15 pb-20">
          <div className="space-y-2">
            <RevealEyebrow>
              <span className="font-mono text-xs font-bold text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                05 / PEDAGOGICAL AI GUARDRAILS
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                AI can assist. It cannot cross the boundary.
              </h2>
            </RevealHeading>
            <RevealDescription>
              <p className="text-sm text-[#526071] dark:text-[#A6B4C9] max-w-xl">
                Curriculum-grounded Socratic intelligence. Campus ledgers and sensitive personal records are air-gapped from generation models.
              </p>
            </RevealDescription>
          </div>

          {/* Interactive Test Sandbox & Open Textbook Guardrail Object */}
          <RevealVisual className="space-y-6 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Queries & Decision Output */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#C87D32] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>SELECT A TEST QUERY TO PROBE GUARDRAILS:</span>
                  </span>

                  <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                    {aiTestQueries.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAiQuerySelect(idx)}
                        className={`p-3 rounded-xl border text-left transition-all ${aiQueryIndex === idx
                          ? 'border-[#C87D32] bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-bold shadow-sm'
                          : 'border-[#C87D32]/20 hover:border-[#C87D32] text-[#5A6578] dark:text-[#9DA9BE] bg-transparent'
                          }`}
                      >
                        <div className="text-[10px] opacity-70 mb-0.5">TEST 0{idx + 1}</div>
                        <div className="font-sans line-clamp-2">{item.prompt}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-Time Guardrail Evaluation Output */}
                <div className="p-4 rounded-xl border border-[#C87D32]/25 bg-transparent space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5A6578] dark:text-[#9DA9BE] text-[10px]">GUARDRAIL ARBITRATION ENGINE</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${aiEvalState === 'checking'
                        ? 'bg-amber-500/20 text-amber-600'
                        : aiEvalState === 'allowed'
                          ? 'bg-emerald-500/20 text-emerald-600'
                          : 'bg-rose-500/20 text-rose-600'
                        }`}
                    >
                      {aiEvalState === 'checking' ? 'EVALUATING...' : aiEvalState === 'allowed' ? 'PASSED ✓' : 'BLOCKED ✕'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[#121926] dark:text-[#F5EFE6] font-sans">
                      Query: “{aiTestQueries[aiQueryIndex].prompt}”
                    </div>
                    <div className="text-xs text-[#C87D32] dark:text-[#E5A955]">
                      {aiTestQueries[aiQueryIndex].source}
                    </div>
                    <div className="text-[11px] text-[#526071] dark:text-[#A6B4C9]">
                      {aiTestQueries[aiQueryIndex].decision}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Open Curriculum Textbook Guardrail Object */}
              <div className="lg:col-span-6 flex justify-center">
                <TextbookGuardrailObject
                  queryIndex={aiQueryIndex}
                  evalState={aiEvalState}
                />
              </div>
            </div>
          </RevealVisual>
        </section>

        {/* ------------------------------------------------------------------- */}
        {/* LAYER 06 / AUDIT: LIVE AUTO-STREAMING SHA-256 CHAIN                 */}
        {/* ------------------------------------------------------------------- */}
        <section id="layer-audit" className="scroll-mt-32 space-y-8 pb-12">
          <div className="space-y-2">
            <RevealEyebrow>
              <span className="font-mono text-xs font-bold text-[#C87D32] dark:text-[#E5A955] uppercase tracking-wider block">
                06 / IMMUTABLE AUDIT TRACE
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                Every access leaves a trace.
              </h2>
            </RevealHeading>
            <RevealDescription>
              <p className="text-sm text-[#526071] dark:text-[#A6B4C9] max-w-xl">
                Cryptographically sealed registrar event log. Zero anonymous or unrecorded actions possible.
              </p>
            </RevealDescription>
          </div>

          {/* Live Streaming Audit Chain & Registrar Chronometer Scroll Object */}
          <RevealVisual className="space-y-6 pt-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE] pb-2 border-b border-[#C87D32]/20">
              <span className="text-[#C87D32] font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>LIVE SHA-256 EVENT CHAIN</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>COMMITTED TO REGISTRAR</span>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Live Block Stream */}
              <div className="lg:col-span-6 space-y-2.5 font-mono text-xs">
                {ledgerLogs.map((log, idx) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${idx === 0
                      ? 'border-[#C87D32] bg-[#C87D32]/5 shadow-sm'
                      : 'border-[#C87D32]/15 bg-transparent'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#C87D32]">{log.id}</span>
                      <span className="text-[#5A6578] dark:text-[#9DA9BE] text-[11px]">{log.time}</span>
                      <span className="text-[#121926] dark:text-[#F5EFE6] font-sans font-medium">{log.action}</span>
                    </div>
                    <div className="text-[11px] text-[#5A6578] dark:text-[#9DA9BE] flex items-center gap-2">
                      <span>Hash: {log.hash}</span>
                      <span className="text-emerald-600 font-bold">✓</span>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-2 border-t border-[#C87D32]/10 flex items-center justify-between text-xs font-mono text-[#5A6578] dark:text-[#9DA9BE]">
                  <span>Zero Record Modification Permitted</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Audit Complete ✓</span>
                </div>
              </div>

              {/* Right Column: Registrar Chronometer Audit Scroll Object */}
              <div className="lg:col-span-6 flex justify-center">
                <RegistrarAuditScrollObject latestLog={ledgerLogs[0]} />
              </div>
            </div>
          </RevealVisual>
        </section>

      </main>

      {/* ===================================================================== */}
      {/* 4. COMPLIANCE BADGE RIBBON                                            */}
      {/* ===================================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 border-t border-[#C87D32]/15 text-center relative z-10">
        <RevealVisual>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-sans text-xs text-[#5A6578] dark:text-[#9DA9BE]">
            <AccreditationSeal />
            <span className="flex items-center gap-1.5 text-[#121926] dark:text-[#F5EFE6] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>CASA TIER-2 CERTIFIED</span>
            </span>
            <span className="text-[#C87D32]/30">•</span>
            <span className="flex items-center gap-1.5 text-[#121926] dark:text-[#F5EFE6] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>DPDP ACT 2023 COMPLIANT</span>
            </span>
            <span className="text-[#C87D32]/30">•</span>
            <span className="flex items-center gap-1.5 text-[#121926] dark:text-[#F5EFE6] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>ZERO DIRECT DB EXPOSURE</span>
            </span>
          </div>
        </RevealVisual>
      </section>

      {/* ===================================================================== */}
      {/* 5. CALL TO ACTION                                                     */}
      {/* ===================================================================== */}
      <section className="py-24 text-center space-y-6 max-w-4xl mx-auto px-6 border-t border-[#C87D32]/15 relative z-10 font-sans">
        <RevealEyebrow>
          <ScholarCapCharterObject />

          <div className="w-12 h-12 mx-auto rounded-full border border-[#C87D32] flex items-center justify-center bg-[#FAF5EB] dark:bg-[#0E1524] shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#C87D32] dark:text-[#E5A955]" />
          </div>

          <div className="text-xs tracking-widest text-[#C87D32] uppercase font-bold mt-4">
            AI-EDUCATION SECURITY ARCHITECTURE
          </div>
        </RevealEyebrow>

        <RevealHeading>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
            Trust is not a feature. <br />
            <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
              It is the architecture.
            </span>
          </h2>
        </RevealHeading>

        <RevealDescription>
          <p className="text-base text-[#526071] dark:text-[#A6B4C9] font-sans max-w-md mx-auto">
            Institutional security engineered for schools, universities, and learning networks.
          </p>
        </RevealDescription>

        <RevealCTA>
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
        </RevealCTA>
      </section>

    </div>
  );
};
