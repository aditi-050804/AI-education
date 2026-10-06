import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Database,
  ArrowRight,
  CheckCircle2,
  Activity,
  RefreshCw,
  Key,
} from 'lucide-react';
import type { PageId } from '../../types';
import {
  ScrollReveal,
  RevealEyebrow,
  RevealHeading,
  RevealCTA,
  RevealVisual,
  RevealItem
} from '../common/ScrollReveal';

interface HomeSecurityTeaserProps {
  onNavigate: (page: PageId) => void;
}

export const HomeSecurityTeaser: React.FC<HomeSecurityTeaserProps> = ({ onNavigate }) => {
  const [testingFirewall, setTestingFirewall] = useState(false);
  const [blockedThreats, setBlockedThreats] = useState(4829);

  const runFirewallTest = () => {
    setTestingFirewall(true);
    setTimeout(() => {
      setBlockedThreats((prev) => prev + 12);
      setTestingFirewall(false);
    }, 900);
  };

  const pillars = [
    {
      num: '01',
      tag: 'EDGE INGRESS',
      title: 'Zero Public DB Exposure',
      desc: 'Inbound requests terminate at TLS 1.3 proxies with automatic rate limiting.',
      icon: Lock,
    },
    {
      num: '02',
      tag: 'AIR-GAP',
      title: 'Schema Partitioning',
      desc: 'Every institution runs in an isolated cryptographic database schema.',
      icon: Database,
    },
    {
      num: '03',
      tag: 'AT REST',
      title: 'AES-256 Field Cipher',
      desc: 'Student grades and ledgers encrypt with 90-day rotating KMS keys.',
      icon: Key,
    },
    {
      num: '04',
      tag: 'COMPLIANCE',
      title: 'DPDP 2023 & CASA Compliant',
      desc: '100% of campus data resides strictly in sovereign Indian data centers.',
      icon: CheckCircle2,
    },
  ];

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
                06 / SOVEREIGN ARCHITECTURE
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                Institutional security <br />
                <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                  leaving nothing uncertain.
                </span>
              </h2>
            </RevealHeading>
          </div>

          <RevealCTA>
            <button
              onClick={() => onNavigate('security')}
              className="inline-flex items-center gap-2 text-sm font-serif font-bold italic text-[#121926] dark:text-[#F5EFE6] border-b border-[#C87D32] pb-0.5 hover:text-[#C87D32] transition-colors group shrink-0"
            >
              <span>Explore full security model</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </RevealCTA>
        </div>

        {/* Live Security Radar & Architecture Simulation */}
        <RevealVisual className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans text-xs">
          {/* Left: Animated Radar Shield Visualizer */}
          <div className="lg:col-span-6 p-6 rounded-2xl border border-[#C87D32]/25 bg-[#FAF5EB]/50 dark:bg-[#0A101D]/50 space-y-4">
            <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                PACKET INSPECTION &amp; AIR-GAP
              </span>
              <button
                onClick={runFirewallTest}
                disabled={testingFirewall}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-emerald-600/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 transition-all font-semibold"
              >
                <RefreshCw className={`w-3 h-3 ${testingFirewall ? 'animate-spin text-emerald-500' : ''}`} />
                <span>{testingFirewall ? 'Testing...' : 'Simulate Intrusion'}</span>
              </button>
            </div>

            <div className="relative py-4 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#C87D32]/20 animate-ping opacity-25" />
                <div className="absolute inset-2 rounded-full border border-dashed border-[#C87D32]/30 animate-spin" style={{ animationDuration: '16s' }} />
                <div className="absolute inset-7 rounded-full border border-[#C87D32]/40" />

                <div className="relative z-10 w-20 h-20 rounded-full bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] flex flex-col items-center justify-center shadow-lg border border-[#C87D32] p-2">
                  <ShieldCheck className="w-7 h-7 text-[#C87D32]" />
                  <span className="text-[9px] font-bold mt-0.5 tracking-wider">AIR-GAP</span>
                </div>
              </div>

              <div className="pt-3 text-center space-y-0.5">
                <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                  {testingFirewall ? 'Probes Dropped at Edge' : 'Zero Vulnerabilities Detected'}
                </div>
                <div className="text-xs text-emerald-600 font-semibold">
                  {blockedThreats.toLocaleString()} Automated Probes Dropped • Latency 0.00ms
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Sovereign Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <RevealItem
                  key={idx}
                  index={idx}
                  staggerDelay={0.08}
                  baseDelay={0.1}
                  className="space-y-1 border-l-2 border-[#C87D32]/40 pl-4 py-1"
                >
                  <div className="flex items-center justify-between text-[#C87D32]">
                    <span className="font-bold text-xs tracking-wider">{p.num} / {p.tag}</span>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                    {p.title}
                  </div>
                  <p className="text-xs text-[#526071] dark:text-[#A6B4C9] leading-relaxed">
                    {p.desc}
                  </p>
                </RevealItem>
              );
            })}
          </div>
        </RevealVisual>
      </div>
    </ScrollReveal>
  );
};
