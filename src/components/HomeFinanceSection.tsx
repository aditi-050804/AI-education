import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  ArrowRight,
  Database,
  Receipt,
  Users,
  PieChart,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Building2,
  ShieldCheck
} from 'lucide-react';

export const HomeFinanceSection: React.FC = () => {
  const [syncStep, setSyncStep] = useState<number>(3); // 1, 2, 3
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setSyncStep(1);
    setTimeout(() => setSyncStep(2), 700);
    setTimeout(() => {
      setSyncStep(3);
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#0A1224]/50 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            TallyPrime & ERP 9 Integrated
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Finance that stays in sync.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            No spreadsheets, no double-data entry. Fee collections, payroll vouchers, and vendor invoices flow straight into your Tally ledgers.
          </p>

          <div className="mt-5">
            <button
              onClick={triggerSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>Simulate Live Fee Payment to Tally Flow</span>
            </button>
          </div>
        </div>

        {/* The 3-Step Core Visual Flow: Payment -> AI-Education -> Tally */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Step 1: Student Fee Payment */}
            <div className={`p-6 rounded-3xl transition-all duration-300 ${
              syncStep >= 1
                ? 'bg-white dark:bg-navy-900 border-2 border-emerald-500 shadow-xl'
                : 'bg-white/60 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Parent UPI / Card
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Student Fee Payment
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Term tuition collected via UPI, NetBanking, or QR code.
              </p>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                Amount: ₹45,000 • Txn: #TXN-98421
              </div>
            </div>

            {/* Step 2: AI-Education Ledger Engine */}
            <div className={`p-6 rounded-3xl transition-all duration-300 ${
              syncStep >= 2
                ? 'bg-white dark:bg-navy-900 border-2 border-brand-500 shadow-xl'
                : 'bg-white/60 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-300 flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 font-semibold">
                  Automatic Rules
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                AI-Education OS
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Maps receipt to student ID, assigns account heads, generates PDF.
              </p>
              <div className="p-2.5 rounded-xl bg-brand-50/70 dark:bg-brand-950/60 text-[11px] font-mono text-brand-800 dark:text-brand-300">
                Split: Tuition (₹35k) + Lab (₹10k)
              </div>
            </div>

            {/* Step 3: Tally ERP 9 / TallyPrime */}
            <div className={`p-6 rounded-3xl transition-all duration-300 ${
              syncStep >= 3
                ? 'bg-white dark:bg-navy-900 border-2 border-emerald-500 shadow-xl'
                : 'bg-white/60 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-semibold">
                  Real-time Sync
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Tally ERP 9 / Prime
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Zero-touch XML voucher creation directly into institution ledger.
              </p>
              <div className="p-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/60 text-[11px] font-mono text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Voucher #8291 Created in Tally
              </div>
            </div>

          </div>
        </div>

        {/* 4 Essential Finance Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center mb-3">
              <Receipt className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Fee Receipts</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Instantly generated with GST breakdown and parent SMS confirmation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 flex items-center justify-center mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Faculty Payroll</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Calculates PF, TDS, allowances, and attendance deductions seamlessly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center mb-3">
              <PieChart className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Campus Expenses</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Departmental budget approvals and vendor payouts tracked in real time.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Unified Ledgers</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Auditor-ready reports matching both college books and Tally balance sheets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
