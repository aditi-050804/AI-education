import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, KeyRound, Sparkles, CheckCircle2 } from 'lucide-react';

export const Scene14Security: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(3);

  const tiers = [
    { num: 1, name: 'Institution Gateway', icon: ShieldCheck, detail: 'Encrypted TLS 1.3 institutional routing with rate-limiting.' },
    { num: 2, name: 'Identity & RBAC', icon: KeyRound, detail: 'Role-based access tokens for Principal, Teacher, Student, and Parent.' },
    { num: 3, name: 'Tenant Isolation', icon: Database, detail: 'Cryptographic data separation ensuring campus databases never mix.' },
    { num: 4, name: 'Protected Data Vault', icon: Lock, detail: 'AES-256 field encryption for student records, Aadhaar, and financials.' },
    { num: 5, name: 'AI Safety Layer', icon: Sparkles, detail: 'Zero model training on student queries with real-time sentiment alerts.' },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Minimal Editorial Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene XIV • The Cryptographic Vault
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Built to protect the campus.
          </h2>
          <p className="font-serif text-lg font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
            Ancient academic archives safeguarded by institutional cloud cryptography.
          </p>

          {/* 4 Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1 rounded-full border border-[#C5A059] text-xs font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729]">
              CASA Tier-2 Certified
            </span>
            <span className="px-3.5 py-1 rounded-full border border-[#C5A059] text-xs font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729]">
              Multi-Tenant Isolation
            </span>
            <span className="px-3.5 py-1 rounded-full border border-[#C5A059] text-xs font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729]">
              PII Protection
            </span>
            <span className="px-3.5 py-1 rounded-full border border-[#C5A059] text-xs font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729]">
              AI Safety Guardrails
            </span>
          </div>
        </div>

        {/* Vintage Vault Layered Composition (NO CARDS) */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl">
          <div className="space-y-4">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              const isSelected = activeTier === tier.num;
              return (
                <div
                  key={tier.num}
                  onClick={() => setActiveTier(tier.num)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 font-serif ${
                    isSelected
                      ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#38BDF8] shadow-md scale-[1.01]'
                      : 'bg-[#F4ECE0]/40 dark:bg-[#0E1729]/40 text-[#161D2B] dark:text-[#F4ECE0] border-[#C5A059]/20 hover:border-[#C5A059]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      isSelected ? 'bg-[#38BDF8] text-black' : 'bg-[#EAE0CE] dark:bg-[#162138] text-[#8C6B28]'
                    }`}>
                      {tier.num}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold">
                        {tier.name}
                      </h4>
                      <p className={`text-xs font-semibold leading-tight ${isSelected ? 'text-[#C5A059]' : 'text-[#2D3748] dark:text-[#CBD5E1]'}`}>
                        {tier.detail}
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

          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274]">
            <span>DPDP Act & Institutional Audit Compliant</span>
            <span>Zero Third-Party Model Training</span>
          </div>
        </div>

      </div>
    </section>
  );
};
