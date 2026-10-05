import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import type { PageId } from '../types';

interface PricingPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemo }) => {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'enterprise'>('growth');

  const plans = {
    starter: {
      name: 'The Collegiate Fellowship (Starter)',
      cohort: 'Up to 1,000 enrolled scholars',
      target: 'Single campus schools and emerging learning academies',
      description: 'Conflict-free master timetable generation, attendance SMS/WhatsApp alerts, and core AI Study Buddy access.',
      deliverables: [
        'Weekly conflict-free algorithmic master timetable',
        'Daily student attendance and WhatsApp parent push',
        'Tuition fee invoicing and receipt generator',
        'Curriculum-grounded AI Study Buddy (Core subjects)',
        'Parent portal mobile responsive application'
      ]
    },
    growth: {
      name: 'The Academic Charter (Growth)',
      cohort: '1,000 to 5,000 enrolled scholars',
      target: 'Growing institutions, coaching academies & multi-wing schools',
      description: 'Complete institutional digital operating system with automated TallyPrime synchronization and AI paper grading.',
      deliverables: [
        'All Collegiate Fellowship capabilities included',
        'Bi-directional Tally ERP 9 / TallyPrime ledger synchronization',
        '1-click substitute / proxy teacher discovery engine',
        'Biometric QR hall tickets and examination seating engine',
        'Automated marks rubric assessment and sealed report cards',
        'Multi-child parent switcher account'
      ]
    },
    enterprise: {
      name: 'The Chancellor’s Endowment (Enterprise)',
      cohort: '5,000+ scholars & multi-campus university networks',
      target: 'Colleges, law universities, and state campus groups',
      description: 'Custom multi-tenant infrastructure, dedicated legal & case law RAG indexing, and institutional 99.95% SLA.',
      deliverables: [
        'All Academic Charter capabilities included',
        'Multi-campus consolidated executive governance dashboard',
        'Custom case law, judgment, and syllabus RAG indexing',
        'CASA Tier-2 independent security audit dossier',
        'Custom university LDAP, SIS, and legacy database migration',
        'Dedicated Institutional Solutions Architect & 24/7 priority hotline'
      ]
    }
  };

  const curr = plans[selectedPlan];

  return (
    <div className="pt-28 pb-24 bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen transition-colors duration-500 parchment-grain font-serif">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* Minimal Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Institutional Admissions
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Institutional Deployment Plans.
          </h1>
          <p className="text-base italic text-[#586274] dark:text-[#A7B5CC]">
            Plans designed around your institution’s size, departments, and compliance.
          </p>

          {/* Minimal Plan Ribbon (NO CARDS) */}
          <div className="mt-8 inline-flex p-1.5 rounded-full border border-[#C5A059]/50 bg-[#FAF6EE] dark:bg-[#0E1729]">
            <button
              onClick={() => setSelectedPlan('starter')}
              className={`px-5 py-2 rounded-full text-xs font-serif italic transition-all ${
                selectedPlan === 'starter'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] shadow-md'
                  : 'text-[#586274] dark:text-[#9DA9BE]'
              }`}
            >
              Collegiate (Starter)
            </button>
            <button
              onClick={() => setSelectedPlan('growth')}
              className={`px-5 py-2 rounded-full text-xs font-serif italic transition-all ${
                selectedPlan === 'growth'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] shadow-md'
                  : 'text-[#586274] dark:text-[#9DA9BE]'
              }`}
            >
              Charter (Growth)
            </button>
            <button
              onClick={() => setSelectedPlan('enterprise')}
              className={`px-5 py-2 rounded-full text-xs font-serif italic transition-all ${
                selectedPlan === 'enterprise'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] shadow-md'
                  : 'text-[#586274] dark:text-[#9DA9BE]'
              }`}
            >
              Chancellor (Enterprise)
            </button>
          </div>
        </div>

        {/* Parchment Admission Ledger (NO 3-CARD GRID) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlan}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-14 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#C5A059]/30 mb-8">
              <div>
                <span className="text-xs font-mono text-[#8C6B28] dark:text-[#C5A059] uppercase tracking-wider">
                  {curr.cohort}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1">
                  {curr.name}
                </h2>
                <p className="text-xs italic text-[#586274] dark:text-[#A7B5CC] mt-1">
                  {curr.target}
                </p>
              </div>

              <div className="text-left md:text-right">
                <div className="text-2xl sm:text-3xl font-bold italic text-[#8C6B28] dark:text-[#D4AF37]">
                  Talk to us for institutional pricing.
                </div>
                <div className="text-[11px] font-mono text-[#586274] mt-0.5">
                  Academic year agreements & multi-year charters
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C6B28] mb-4">
                Charter Deliverables & Modular Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {curr.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#161D2B] dark:text-[#F4ECE0] leading-relaxed">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#586274]">
                Migration assistance & dedicated onboarding architect included
              </span>
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-bold text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Talk to Sales</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
