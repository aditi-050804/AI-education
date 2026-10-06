import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, CheckCircle2, ArrowRight, RotateCw, Receipt, Building, ShieldCheck, Database, RefreshCw } from 'lucide-react';

interface FeeTransaction {
  id: string;
  student: string;
  rollNo: string;
  amount: string;
  category: string;
  tallyVoucher: string;
  status: 'synced';
}

const RECENT_TRANSACTIONS: FeeTransaction[] = [
  { id: 'TX-901', student: 'Aarav Sharma', rollNo: '10-A / 14', amount: '₹18,500', category: 'Term II Tuition', tallyVoucher: 'VCH-2026-0419', status: 'synced' },
  { id: 'TX-902', student: 'Diya Patel', rollNo: '07-B / 22', amount: '₹4,200', category: 'Science Lab & Library', tallyVoucher: 'VCH-2026-0420', status: 'synced' },
  { id: 'TX-903', student: 'Rohan Mehra', rollNo: '12-C / 08', amount: '₹24,000', category: 'Quarterly Boarding & Mess', tallyVoucher: 'VCH-2026-0421', status: 'synced' }
];

export const Scene07FinanceTally: React.FC = () => {
  const [isSimulatingSync, setIsSimulatingSync] = useState(false);
  const [syncCount, setSyncCount] = useState(148);

  const triggerLiveSync = () => {
    setIsSimulatingSync(true);
    setTimeout(() => {
      setIsSimulatingSync(false);
      setSyncCount(prev => prev + 1);
    }, 1200);
  };

  return (
    <section className="relative py-24 px-6 bg-[#FAF6EE] dark:bg-[#070D18] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Coins className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>06 / FINANCE + TALLY INTEGRATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Your books <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">stay connected.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Native bi-directional synchronization with Tally ERP 9 and TallyPrime.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>TALLYPRIME V4.1 CONNECTED</span>
            </div>
            <button
              onClick={triggerLiveSync}
              disabled={isSimulatingSync}
              className="px-5 py-2 rounded-full border-2 border-amber-900/40 dark:border-amber-400/40 text-amber-900 dark:text-amber-300 text-xs font-mono font-bold hover:bg-amber-900/10 transition-colors cursor-pointer flex items-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingSync ? 'animate-spin' : ''}`} />
              <span>TEST 2-WAY SYNC</span>
            </button>
          </div>
        </div>

        {/* Vintage Double-Entry Accounting Folio Surface (Card Frame Removed - Organic Ledger) */}
        <div className="relative w-full py-2 space-y-8">
          
          {/* Top Ledger Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-amber-900/20 dark:border-amber-400/20 text-xs font-mono font-bold text-amber-900 dark:text-amber-400">
            <span>INSTITUTIONAL BURSAR REGISTER • BOOK NO. IV</span>
            <span>TOTAL VOUCHERS POSTED TODAY: {syncCount}</span>
          </div>

          {/* Bi-Directional Pipeline (Fee -> AI-Education -> Ledger -> Tally) */}
          <div className="py-4 border-b-2 border-amber-900/20 dark:border-amber-400/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center">
              
              {/* Step 1 */}
              <div className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] dark:bg-[#0E1729] border border-amber-900/20 dark:border-amber-400/20">
                <Receipt className="w-6 h-6 mx-auto text-amber-800 dark:text-amber-400" />
                <span className="font-mono text-xs uppercase font-bold text-amber-900 dark:text-amber-400 block">STEP 1: FEE RECEIVED</span>
                <p className="text-sm font-serif font-bold text-slate-950 dark:text-slate-50">Online / Counter Payment</p>
                <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block">UPI, NEFT, Cheque or Cash</span>
              </div>

              {/* Step 2 */}
              <div className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] dark:bg-[#0E1729] border border-sky-400/40">
                <Coins className="w-6 h-6 mx-auto text-sky-600 dark:text-sky-400" />
                <span className="font-mono text-xs uppercase font-bold text-sky-700 dark:text-sky-400 block">STEP 2: AI-EDUCATION</span>
                <p className="text-sm font-serif font-bold text-slate-950 dark:text-slate-50">Student Ledger Credit</p>
                <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block">Instant digital receipt & SMS</span>
              </div>

              {/* Step 3 */}
              <div className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] dark:bg-[#0E1729] border border-amber-900/20 dark:border-amber-400/20">
                <ShieldCheck className="w-6 h-6 mx-auto text-amber-800 dark:text-amber-400" />
                <span className="font-mono text-xs uppercase font-bold text-amber-900 dark:text-amber-400 block">STEP 3: RECONCILIATION</span>
                <p className="text-sm font-serif font-bold text-slate-950 dark:text-slate-50">Zero Discrepancy Match</p>
                <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block">Bank statement vs fee head</span>
              </div>

              {/* Step 4 */}
              <div className="space-y-2 p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-500/50">
                <Database className="w-6 h-6 mx-auto text-emerald-700 dark:text-emerald-400" />
                <span className="font-mono text-xs uppercase font-bold text-emerald-800 dark:text-emerald-400 block">STEP 4: TALLY POSTING</span>
                <p className="text-sm font-serif font-bold text-slate-950 dark:text-slate-50">Direct Journal Entry</p>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 block">Tally ERP 9 / TallyPrime XML</span>
              </div>

            </div>
          </div>

          {/* Live Recent Transactions Ledger Table (No Cards) */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-amber-900 dark:text-amber-400 block">
              LIVE SYNCHRONIZED ENTRIES
            </span>

            <div className="space-y-2.5">
              {RECENT_TRANSACTIONS.map((tx) => (
                <div
                  key={tx.id}
                  className="p-4 rounded-xl border-2 border-amber-900/20 dark:border-amber-400/20 bg-[#FAF6EE] dark:bg-[#0C1424] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm font-serif"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-400 w-16">
                      {tx.id}
                    </span>
                    <div>
                      <div className="font-bold text-slate-950 dark:text-slate-50">
                        {tx.student}
                      </div>
                      <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                        Roll: {tx.rollNo} • {tx.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 self-end sm:self-auto">
                    <div className="text-right">
                      <div className="font-bold text-base text-slate-950 dark:text-slate-50">{tx.amount}</div>
                      <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Paid & Cleared</div>
                    </div>
                    <div className="text-right border-l-2 border-emerald-500/40 pl-3">
                      <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{tx.tallyVoucher}</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">2-Way Verified</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Ledger Note */}
          <div className="pt-6 border-t-2 border-amber-900/20 dark:border-amber-400/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300 gap-2">
            <span>NO MANUAL RE-ENTRY • AUDITOR-READY GST REPORTS</span>
            <span className="text-amber-900 dark:text-amber-400">BI-DIRECTIONAL REST API BRIDGE</span>
          </div>

        </div>

      </div>
    </section>
  );
};
