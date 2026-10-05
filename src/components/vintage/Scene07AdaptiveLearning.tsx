import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, CheckCircle, ArrowRight, Brain } from 'lucide-react';

export const Scene07AdaptiveLearning: React.FC = () => {
  const [level, setLevel] = useState<number>(3); // 1 to 5

  const levelDetails = [
    { title: 'Level 1: Foundational Recall', progress: '20%', desc: 'Basic terminology and textbook definitions.' },
    { title: 'Level 2: Conceptual Understanding', progress: '40%', desc: 'Explaining mechanisms and diagrams.' },
    { title: 'Level 3: Application & Problem Solving', progress: '65%', desc: 'Numerical equations and case problems.' },
    { title: 'Level 4: Advanced Synthesis', progress: '85%', desc: 'Multi-chapter cross-subject analysis.' },
    { title: 'Level 5: Board & Olympiad Mastery', progress: '100%', desc: 'Complex unseen problem decomposition.' },
  ];

  const currentLevel = levelDetails[level - 1];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F4ECE0] dark:bg-[#070D18] transition-colors duration-500 engraving-lines border-t border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto w-full text-center">
        
        {/* Minimal Editorial Headline */}
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
          Scene VII • The Scholar’s Study
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-3">
          Learning that adapts to every student.
        </h2>
        <p className="font-serif text-lg font-semibold text-[#2D3748] dark:text-[#CBD5E1] max-w-xl mx-auto mb-12">
          Question → Answer → Understanding → Next Question. Difficulty calibrates organically.
        </p>

        {/* Vintage Study Room Canvas Composition */}
        <div className="p-8 sm:p-14 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-[#C5A059]/30 mb-8 gap-4 font-serif">
            <div className="text-left">
              <span className="text-xs font-mono text-[#8C6B28] uppercase">Adaptive Skill Matrix</span>
              <h3 className="text-2xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                {currentLevel.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`w-9 h-9 rounded-full border text-xs font-mono font-bold transition-all ${
                    level === lvl
                      ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#38BDF8] shadow-md scale-110'
                      : 'bg-[#F4ECE0] dark:bg-[#111A2E] text-[#586274] border-[#C5A059]/40'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dynamic Question Orbit */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#0E1729]/50 text-left font-serif">
              <div className="flex justify-between items-center text-xs font-mono text-[#8C6B28] mb-2">
                <span>Adaptive Diagnostic #{level * 8 + 4}</span>
                <span className="text-[#38BDF8] font-bold">Difficulty Calibrated</span>
              </div>
              <p className="text-base text-[#161D2B] dark:text-[#F4ECE0]">
                {currentLevel.desc}
              </p>
            </div>

            {/* Mastery Progress Bar styled like antique brass caliper */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-[#8C6B28] dark:text-[#C5A059]">
                <span>Student Retention Curve</span>
                <span>{currentLevel.progress} Mastery</span>
              </div>
              <div className="w-full bg-[#EAE0CE] dark:bg-[#162138] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#C5A059]/30">
                <motion.div
                  className="bg-gradient-to-r from-[#C5A059] to-[#38BDF8] h-full rounded-full"
                  initial={false}
                  animate={{ width: currentLevel.progress }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274] dark:text-[#9DA9BE]">
            <span>Personalized learning path</span>
            <span className="text-teal-600 dark:text-teal-400 font-semibold">100% Curriculum Compliant</span>
          </div>

        </div>

      </div>
    </section>
  );
};
