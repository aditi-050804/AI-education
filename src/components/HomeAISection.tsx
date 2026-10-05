import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  BookOpen,
  CheckCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Search,
  Bookmark,
  FileText
} from 'lucide-react';

export const HomeAISection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'law' | 'physics' | 'biology'>('law');

  const topics = {
    law: {
      question: "Can Parliament amend the basic structure of the Constitution under Article 368?",
      textbook: "Constitutional Law of India (14th Edition) • Volume II",
      citation: "Chapter 8 • Section 3.2 • Page 144",
      highlightText: "The Supreme Court in Kesavananda Bharati ruled that Article 368 does not enable Parliament to alter the basic structure or essential framework of the Constitution.",
      quote: "Parliamentary constituent power cannot be exercised to abrogate fundamental features including judicial review, democracy, and rule of law.",
      verdict: "100% textbook verified • 0 hallucination guarantee"
    },
    physics: {
      question: "Derive the relation between torque and angular momentum for a rigid body.",
      textbook: "Higher Secondary Physics • Part 1 (CBSE/NCERT)",
      citation: "Chapter 7 • Section 7.5 • Page 158",
      highlightText: "The rate of change of total angular momentum of a system of particles about a point is equal to the sum of external torques acting on the system.",
      quote: "τ_ext = dL/dt, which represents the rotational analogue of Newton's second law of motion.",
      verdict: "Formula verified with textbook diagram 7.12"
    },
    biology: {
      question: "How does the countercurrent mechanism in nephrons concentrate urine?",
      textbook: "Human Physiology & Systems • Advanced Biology",
      citation: "Chapter 19 • Section 19.3 • Page 297",
      highlightText: "The flow of filtrate in two limbs of Henle's loop and blood flow in vasa recta are in opposite directions, establishing an increasing osmolarity from 300 to 1200 mOsmolL⁻¹.",
      quote: "The proximity between Henle’s loop and vasa recta creates a hyperosmotic medullary gradient maintained by NaCl and urea recycling.",
      verdict: "Exact textbook nomenclature & terminology"
    }
  };

  const current = topics[selectedTopic];

  return (
    <section className="py-20 bg-white dark:bg-[#070D1E] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            Zero-Hallucination Campus RAG
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            AI that understands your curriculum.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            No internet hallucinations. Every answer is retrieved, synthesized, and cited directly from your institution's approved learning materials.
          </p>

          {/* Interactive Subject Pill Switcher */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTopic('law')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTopic === 'law'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Law & Legal Studies
            </button>
            <button
              onClick={() => setSelectedTopic('physics')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTopic === 'physics'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Physics & Engineering
            </button>
            <button
              onClick={() => setSelectedTopic('biology')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTopic === 'biology'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              Biology & Medical
            </button>
          </div>
        </div>

        {/* The 5-Step Flow Architecture (Visual Pipeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Step 1 & 2: Student Question & Institution Textbook */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Student Question Box */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm relative">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-brand-600 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  Student Query
                </span>
                <span className="text-[11px] font-mono">10:42 AM</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                “{current.question}”
              </p>
            </div>

            {/* Downward Data Flow Indicator */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
              <span className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
              <span>Grounded in Approved Material</span>
              <span className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
            </div>

            {/* Institution Textbook Verified Box */}
            <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/80 shadow-sm">
              <div className="flex items-center justify-between text-xs text-indigo-700 dark:text-indigo-300 mb-2">
                <span className="font-bold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Institution Syllabus Repository
                </span>
                <span className="text-[10px] bg-indigo-200/60 dark:bg-indigo-900 px-2 py-0.5 rounded font-mono">
                  Indexed PDF
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {current.textbook}
              </div>
              <div className="mt-2 text-[11px] text-indigo-700 dark:text-teal-400 font-medium flex items-center gap-1">
                <Bookmark className="w-3 h-3" />
                {current.citation}
              </div>
            </div>
          </div>

          {/* Step 3, 4, 5: AI Study Buddy Synthesis & Animated Citation Highlight */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900 text-white border border-purple-500/30 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      AI Study Buddy
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[10px] text-slate-400">Institutional Neural Model v4.2</div>
                  </div>
                </div>

                {/* Animated Citation Tag */}
                <motion.div
                  key={current.citation}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-medium flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{current.citation}</span>
                </motion.div>
              </div>

              {/* Verified Answer with Highlighted Citation Box */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                  Textbook-Grounded Answer
                </div>
                
                <p className="text-sm text-slate-200 leading-relaxed">
                  {current.quote}
                </p>

                {/* Animated Highlight Banner */}
                <motion.div
                  key={current.highlightText}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800/80 text-xs text-purple-200 leading-relaxed font-mono relative"
                >
                  <div className="text-[10px] uppercase font-bold text-teal-400 mb-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Exact Sentence Match
                  </div>
                  <mark className="bg-purple-800/80 text-white px-1 py-0.5 rounded font-normal">
                    “{current.highlightText}”
                  </mark>
                </motion.div>
              </div>
            </div>

            {/* Footer validation stamp */}
            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                {current.verdict}
              </span>
              <span className="text-[11px] font-mono text-slate-500">Latency: 280ms</span>
            </div>
          </div>

        </div>

        {/* 4 Supporting Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Curriculum Grounded</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Trained strictly on approved board & college textbooks.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 flex items-center justify-center">
              <Bookmark className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Source Cited</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Every explanation points directly to page and paragraph.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Adaptive Quizzes</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Generates progressive practice tests from weak areas.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Safety Guardrails</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Built-in sentiment & crisis alert flags for student safety.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
