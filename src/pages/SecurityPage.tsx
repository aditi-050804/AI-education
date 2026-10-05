import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, KeyRound, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import type { PageId } from '../types';

interface SecurityPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeLayer, setActiveLayer] = useState<number>(3);

  const securityLayers = [
    { num: 1, name: 'Institution Gateway', icon: ShieldCheck, detail: 'Encrypted TLS 1.3 institutional routing with adaptive rate-limiting against scraping.' },
    { num: 2, name: 'Identity & RBAC Scopes', icon: KeyRound, detail: 'Granular cryptographic tokens separating Principal, Teacher, Student, and Parent access.' },
    { num: 3, name: 'Tenant Cryptographic Isolation', icon: Database, detail: 'Logical and database isolation ensuring campus records cannot intersect or leak.' },
    { num: 4, name: 'Protected Data Vault', icon: Lock, detail: 'Field-level AES-256 encryption at rest for student Aadhaar, grades, phone numbers, and financials.' },
    { num: 5, name: 'AI Safety & Crisis Guardrails', icon: Sparkles, detail: 'Zero model training on campus records with immediate sentiment flags for designated counselors.' }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen transition-colors duration-500 parchment-grain font-serif">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* Minimal Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Archival Cryptography
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Security built for education.
          </h1>
          <p className="text-base italic text-[#586274] dark:text-[#A7B5CC]">
            Multi-tier defense architecture protecting sensitive institutional and student records.
          </p>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1 rounded-full border border-[#C5A059] text-xs font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729]">
              CASA Tier-2 Certified
            </span>
            <span className="px-3.5 py-1 rounded-full border border-[#C5A059] text-xs font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729]">
              Anti-BOLA / IDOR Protected
            </span>
            <span className="px-3.5 py-1 rounded-full border border-[#C5A059] text-xs font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729]">
              Signed URLs for Hall Tickets
            </span>
          </div>
        </div>

        {/* Multi-Tier Architectural Vault (NO CARDS) */}
        <div className="p-8 sm:p-14 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl">
          <div className="space-y-4 mb-10">
            {securityLayers.map((layer) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === layer.num;
              return (
                <div
                  key={layer.num}
                  onClick={() => setActiveLayer(layer.num)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#38BDF8] shadow-md scale-[1.01]'
                      : 'bg-[#F4ECE0]/40 dark:bg-[#0E1729]/40 text-[#161D2B] dark:text-[#F4ECE0] border-[#C5A059]/20 hover:border-[#C5A059]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      isSelected ? 'bg-[#38BDF8] text-black' : 'bg-[#EAE0CE] dark:bg-[#162138] text-[#8C6B28]'
                    }`}>
                      {layer.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">
                        {layer.name}
                      </h3>
                      <p className={`text-xs italic leading-tight ${isSelected ? 'text-[#C5A059]' : 'text-[#586274] dark:text-[#A7B5CC]'}`}>
                        {layer.detail}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold shrink-0">
                    Active Layer
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#586274]">
            <span>DPDP Act & Institutional Audit Ready</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:underline text-[#8C6B28] dark:text-[#D4AF37] flex items-center gap-1 font-serif italic"
            >
              <span>Request Institutional Security Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
