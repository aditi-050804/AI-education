import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  Award,
  QrCode,
  DollarSign,
  Users,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../types';

export const HomeFeatureHighlights: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white dark:bg-[#070D1E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Modules
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered for modern education.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Every feature replaces manual friction with intelligent, institution-grade automation.
          </p>
        </div>

        {/* 8 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* 1. Smart Timetable */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Smart Timetable
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Build conflict-free schedules and instantly find substitute teachers.
              </p>
            </div>
            {/* Visual mini mockup */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] space-y-1.5 font-mono">
              <div className="flex justify-between items-center text-slate-500">
                <span>Period 3 (10:15 AM)</span>
                <span className="text-teal-600 font-semibold">Matched</span>
              </div>
              <div className="p-1.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-medium">
                Proxy: Dr. Trivedi • Room 102
              </div>
            </div>
          </div>

          {/* 2. AI Study Buddy */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                AI Study Buddy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Answers grounded in your institution’s learning material with exact page citations.
              </p>
            </div>
            {/* Visual mini citation */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] space-y-1">
              <div className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> Cited: NCERT Physics Ch 4
              </div>
              <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
                “Conservation of momentum verified from textbook Pg 82.”
              </p>
            </div>
          </div>

          {/* 3. AI Assessments */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                AI Assessments
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Marks entry → Rubric grading → Weighted GPA → Digitally signed report cards.
              </p>
            </div>
            {/* Visual mini flow */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] flex items-center justify-between font-mono">
              <span className="text-slate-500">Marks: 94/100</span>
              <span className="font-bold text-emerald-600">Grade: A+ (10.0)</span>
            </div>
          </div>

          {/* 4. Admissions & Exams */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Admissions & Exams
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Dynamic QR hall tickets, automated seat assignment, and secure examination logs.
              </p>
            </div>
            {/* Visual mini ticket */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-teal-100 dark:bg-teal-950 flex items-center justify-center font-mono font-bold text-teal-700 dark:text-teal-300">
                QR
              </div>
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-200">Hall Ticket #2026-X</div>
                <div className="text-slate-500">Desk #44 • Verified</div>
              </div>
            </div>
          </div>

          {/* 5. Finance + Tally */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Finance + Tally
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Fee payment gateway connected automatically to Tally ERP 9 and TallyPrime ledgers.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] flex items-center justify-between font-mono">
              <span className="text-slate-600 dark:text-slate-300">Fee Received</span>
              <span className="text-teal-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Tally Posted
              </span>
            </div>
          </div>

          {/* 6. Parent Portal */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-rose-400 dark:hover:border-rose-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Parent Portal
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Multi-child switcher, live daily attendance SMS/WhatsApp push, and term fee receipts.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] space-y-1">
              <div className="font-semibold text-slate-800 dark:text-slate-200">Switch: Aarav (Gr 10) ▾</div>
              <div className="text-emerald-600 font-medium">98.5% Attendance • Bus At Gate</div>
            </div>
          </div>

          {/* 7. Campus Collaboration */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Campus Collaboration
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Targeted departmental channels and institution-wide verified announcement broadcasts.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] space-y-1">
              <div className="font-semibold text-indigo-600 dark:text-indigo-400"># faculty-notices</div>
              <div className="text-slate-600 dark:text-slate-300">Annual sports meet dates finalized.</div>
            </div>
          </div>

          {/* 8. Adaptive Quizzes */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Adaptive Quizzes
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Dynamically calibrates question difficulty according to individual student mastery.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/60 dark:border-slate-700/60 text-[10px] space-y-1">
              <div className="flex justify-between text-slate-500 font-mono">
                <span>Calculus Skill</span>
                <span className="text-teal-600 font-bold">Level 8 (Mastery)</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-full w-4/5 rounded-full" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('features')}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group"
          >
            <span>Explore all institutional modules in depth</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
