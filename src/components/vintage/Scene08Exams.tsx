import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Award, CheckCircle2, Stamp, RefreshCw } from 'lucide-react';

export const Scene08Exams: React.FC = () => {
  const [examStep, setExamStep] = useState<number>(3); // 1: QR Ticket, 2: Submission, 3: AI Grading, 4: Report Card

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Minimal Editorial Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene VIII • The Great Examination Hall
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            From admission to assessment.
          </h2>
          <p className="font-serif text-lg italic text-[#586274] dark:text-[#A7B5CC]">
            Paper examination slips evolve into verified QR credentials and instant AI rubric evaluation.
          </p>

          {/* Step Selector */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['1. QR Hall Ticket', '2. Desk Verification', '3. AI Grading', '4. Digital Seal'].map((name, i) => (
              <button
                key={i}
                onClick={() => setExamStep(i + 1)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif italic border transition-all ${
                  examStep === i + 1
                    ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#161D2B] dark:border-[#F4ECE0]'
                    : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Vintage Examination Ledger & Digital Hall Ticket Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE] dark:bg-[#0B1220] shadow-2xl overflow-hidden">
          
          {/* Left Column: Biometric Dynamic QR Ticket */}
          <div className="md:col-span-5 p-8 border-b md:border-b-0 md:border-r border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#0E1729]/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#8C6B28] mb-4">
                <span>ADMISSION CREDENTIAL</span>
                <span>#HT-2026-X89</span>
              </div>

              <div className="w-24 h-24 mx-auto mb-4 bg-white dark:bg-[#111A2E] p-2 rounded-xl border border-[#C5A059] flex items-center justify-center shadow-inner">
                <QrCode className="w-16 h-16 text-[#161D2B] dark:text-[#38BDF8]" />
              </div>

              <div className="text-center font-serif">
                <h4 className="text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                  Tanvi Kulkarni
                </h4>
                <div className="text-xs font-serif italic text-[#586274] mt-0.5">
                  Roll No: 2026-CBSE-4029 • Hall 3, Desk 42
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/20 text-[11px] font-mono text-center text-teal-600 dark:text-teal-400">
              ✓ Biometrically verified at examination portal gate
            </div>
          </div>

          {/* Right Column: AI Rubric Grading & Sealed Report Card */}
          <div className="md:col-span-7 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20 mb-4 font-serif">
                <h4 className="text-lg font-bold text-[#161D2B] dark:text-[#F4ECE0] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                  <span>Evaluation & Marks Ledger</span>
                </h4>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-mono text-[10px] font-bold border border-teal-200 dark:border-teal-800">
                  <Stamp className="w-3.5 h-3.5" />
                  <span>OFFICIALLY SEALED</span>
                </div>
              </div>

              {/* Subject Grading Flow */}
              <div className="space-y-3 font-serif text-xs">
                <div className="p-3 rounded-xl border border-[#C5A059]/20 bg-[#F4ECE0]/40 dark:bg-[#111A2E] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Advanced Classical Mechanics</div>
                    <div className="text-[10px] text-[#586274]">Section A: 48/50 • Section B: 48/50</div>
                  </div>
                  <div className="font-mono text-sm font-bold text-teal-600 dark:text-teal-400">96% (Grade A1)</div>
                </div>

                <div className="p-3 rounded-xl border border-[#C5A059]/20 bg-[#F4ECE0]/40 dark:bg-[#111A2E] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Constitutional Jurisprudence</div>
                    <div className="text-[10px] text-[#586274]">Case Law Analysis & Memorial Draft</div>
                  </div>
                  <div className="font-mono text-sm font-bold text-teal-600 dark:text-teal-400">94% (Grade A1)</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274]">
              <span>Cryptographic Hash: 8F2B...E91</span>
              <span className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Cumulative GPA: 9.8 / 10.0</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
