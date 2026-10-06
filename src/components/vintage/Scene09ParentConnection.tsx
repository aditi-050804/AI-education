import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, CheckCircle2, MessageSquare, Bell, Calendar, CreditCard, Award, ArrowRight, User } from 'lucide-react';

interface ChildProfile {
  id: string;
  name: string;
  grade: string;
  rollNo: string;
  avatarLetter: string;
  attendance: { status: string; percent: string; checkIn: string; busRoute: string };
  fees: { status: string; balance: string; nextDue: string; receiptNo: string };
  results: { latestExam: string; score: string; rank: string; highlight: string };
  updates: { event: string; date: string; notes: string };
}

const CHILDREN: ChildProfile[] = [
  {
    id: 'child-1',
    name: 'Aarav Sharma',
    grade: 'Class 10-A (Secondary)',
    rollNo: 'Roll #14',
    avatarLetter: 'A',
    attendance: { status: 'Present Today', percent: '98.2%', checkIn: '08:04 AM at Gate 2', busRoute: 'Route #4 (Safe Arrival)' },
    fees: { status: 'Fully Cleared', balance: '₹0 Due', nextDue: 'Term II Due: Nov 15', receiptNo: 'REC-2026-9481' },
    results: { latestExam: 'Mid-Term Board Mock', score: '94.2% (Grade A+)', rank: 'Class Rank #3', highlight: 'Top score in Physics derivations' },
    updates: { event: 'CBSE Science Exhibition', date: 'This Friday • 10:00 AM', notes: 'Project: Solar desalination prototype' }
  },
  {
    id: 'child-2',
    name: 'Diya Sharma',
    grade: 'Class 7-B (Middle School)',
    rollNo: 'Roll #22',
    avatarLetter: 'D',
    attendance: { status: 'Present Today', percent: '95.6%', checkIn: '08:10 AM at Gate 1', busRoute: 'Route #4 (Safe Arrival)' },
    fees: { status: 'Lab Material Due', balance: '₹1,800 Due', nextDue: 'Due in 3 days', receiptNo: 'INV-2026-3021' },
    results: { latestExam: 'Unit Test II', score: '88.5% (Grade A)', rank: 'Class Rank #8', highlight: 'Outstanding creative writing in English' },
    updates: { event: 'Annual Drama Auditions', date: 'Tomorrow • 03:30 PM', notes: 'Costume guidelines dispatched to portal' }
  },
  {
    id: 'child-3',
    name: 'Kabir Sharma',
    grade: 'Class 3-C (Primary Wing)',
    rollNo: 'Roll #09',
    avatarLetter: 'K',
    attendance: { status: 'Present Today', percent: '99.0%', checkIn: '08:15 AM at Junior Gate', busRoute: 'Escorted by Mrs. Verma' },
    fees: { status: 'Fully Cleared', balance: '₹0 Due', nextDue: 'Annual Term Cleared', receiptNo: 'REC-2026-1102' },
    results: { latestExam: 'Foundational Assessment', score: 'Gold Star Merit', rank: 'Commended', highlight: 'Top reader award in Class 3' },
    updates: { event: 'Primary Sports & Fun Day', date: 'Next Tuesday • 09:00 AM', notes: 'White PT uniform and water bottle' }
  }
];

export const Scene09ParentConnection: React.FC = () => {
  const [activeChildId, setActiveChildId] = useState<string>('child-1');
  const activeChild = CHILDREN.find(c => c.id === activeChildId) || CHILDREN[0];

  return (
    <section className="relative py-24 px-6 bg-[#FAF6EE] dark:bg-[#070D18] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-teal-800 dark:text-teal-400 font-bold">
              <HeartHandshake className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              <span>08 / PARENT PORTAL & GUARDIAN ENGAGEMENT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Keep parents <br />
              <span className="italic font-normal text-teal-800 dark:text-teal-300">in the loop.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Unified family experience with seamless multi-child switching.
            </p>
          </div>

          {/* Interactive Multi-Child Switcher Strip */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-slate-600 dark:text-slate-400 font-bold mr-2 hidden sm:inline">
              SELECT CHILD:
            </span>
            {CHILDREN.map((child) => (
              <button
                key={child.id}
                onClick={() => setActiveChildId(child.id)}
                className={`px-4 py-2 rounded-full border-2 text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeChildId === child.id
                    ? 'border-teal-700 bg-teal-800 text-white dark:border-teal-400 dark:bg-teal-400 dark:text-slate-950 shadow-md'
                    : 'border-amber-900/20 dark:border-amber-400/20 bg-[#FAF6EE] dark:bg-[#0E1729] text-slate-800 dark:text-slate-200 hover:border-teal-600'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center font-serif text-[10px]">
                  {child.avatarLetter}
                </span>
                <span>{child.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Parent Portal Dashboard Folio Surface (Card Frame Removed - Organic Folio) */}
        <div className="relative w-full py-2 space-y-8">
          
          {/* Active Child Profile Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-teal-900/20 dark:border-teal-400/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-900/10 dark:bg-teal-400/10 border-2 border-teal-700/30 flex items-center justify-center text-teal-800 dark:text-teal-300 font-serif font-bold text-2xl">
                {activeChild.avatarLetter}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">
                  {activeChild.name}
                </h3>
                <span className="text-xs font-mono font-bold text-teal-800 dark:text-teal-400">
                  {activeChild.grade} • {activeChild.rollNo}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/40 font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{activeChild.attendance.status}</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-500/40 font-mono text-xs font-bold text-teal-800 dark:text-teal-300">
                WHATSAPP CONNECTED
              </span>
            </div>
          </div>

          {/* 4 Connected Pillars: Attendance, Fees, Results, Updates (Editorial Lines, No Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 1. ATTENDANCE */}
            <div className="border-l-2 border-teal-700/40 pl-5 space-y-2">
              <span className="font-mono text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest block">
                01 / ATTENDANCE
              </span>
              <div className="text-3xl font-bold text-slate-950 dark:text-slate-50">
                {activeChild.attendance.percent}
              </div>
              <p className="text-xs font-serif text-slate-700 dark:text-slate-300">
                {activeChild.attendance.checkIn}
              </p>
              <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                ✓ {activeChild.attendance.busRoute}
              </div>
            </div>

            {/* 2. FEES */}
            <div className="border-l-2 border-teal-700/40 pl-5 space-y-2">
              <span className="font-mono text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest block">
                02 / FEES & DUES
              </span>
              <div className="text-3xl font-bold text-slate-950 dark:text-slate-50">
                {activeChild.fees.balance}
              </div>
              <p className="text-xs font-serif text-slate-700 dark:text-slate-300">
                {activeChild.fees.status}
              </p>
              <div className="text-[11px] font-mono text-teal-800 dark:text-teal-300 font-semibold">
                Ref: {activeChild.fees.receiptNo}
              </div>
            </div>

            {/* 3. RESULTS */}
            <div className="border-l-2 border-teal-700/40 pl-5 space-y-2">
              <span className="font-mono text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest block">
                03 / ACADEMIC MARKS
              </span>
              <div className="text-2xl font-bold text-slate-950 dark:text-slate-50">
                {activeChild.results.score}
              </div>
              <p className="text-xs font-serif text-slate-700 dark:text-slate-300">
                {activeChild.results.latestExam} • {activeChild.results.rank}
              </p>
              <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                ★ {activeChild.results.highlight}
              </div>
            </div>

            {/* 4. CIRCULARS & UPDATES */}
            <div className="border-l-2 border-teal-700/40 pl-5 space-y-2">
              <span className="font-mono text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest block">
                04 / NEXT UPCOMING EVENT
              </span>
              <div className="text-xl font-bold text-slate-950 dark:text-slate-50 leading-tight">
                {activeChild.updates.event}
              </div>
              <p className="text-xs font-serif text-slate-700 dark:text-slate-300">
                {activeChild.updates.date}
              </p>
              <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">
                {activeChild.updates.notes}
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-teal-900/20 dark:border-teal-400/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300 gap-2">
            <span>FAMILY ACCOUNT: ALL SIBLINGS CONSOLIDATED UNDER SINGLE LOGIN</span>
            <span className="text-teal-800 dark:text-teal-300">INSTANT 1-TAP DIGITAL PAYMENT GATEWAY</span>
          </div>

        </div>

      </div>
    </section>
  );
};
