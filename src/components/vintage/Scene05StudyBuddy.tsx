import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, CheckCircle2, Bookmark, HelpCircle, ArrowRight, CornerDownRight, RotateCw } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const SAMPLE_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: "According to Section 4.2, what occurs to the observed frequency when the sound source moves toward a stationary observer?",
    options: ["Frequency decreases", "Frequency increases", "Frequency remains constant", "Wavelength expands"],
    correct: 1,
    explanation: "Because sound waves compress in the direction of motion, reducing apparent wavelength and increasing perceived frequency."
  },
  {
    id: 2,
    question: "On Page 143, what is the formula given for observed frequency (f') when source approaches stationary listener?",
    options: ["f' = f * (v / (v - vs))", "f' = f * ((v - vs) / v)", "f' = f * (vs / v)", "f' = f / (1 + vs)"],
    correct: 0,
    explanation: "Directly cited from Equation 4.12 on Page 143 of the institution Physics textbook."
  }
];

export const Scene05StudyBuddy: React.FC = () => {
  const [activeStep, setActiveStep] = useState<'question' | 'answer' | 'citation' | 'quiz'>('answer');
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  return (
    <section className="relative py-24 px-6 bg-[#FAF6EE] dark:bg-[#070D18] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>04 / AI STUDY BUDDY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Your curriculum. <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">Your AI.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Learn from the material your institution already uses.
            </p>
          </div>

          {/* Interactive Stage Step Indicator */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
            {(['question', 'answer', 'citation', 'quiz'] as const).map((stepKey, idx) => (
              <button
                key={stepKey}
                onClick={() => setActiveStep(stepKey)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer uppercase ${
                  activeStep === stepKey
                    ? 'border-amber-900 bg-amber-900 text-white dark:border-amber-400 dark:bg-amber-400 dark:text-slate-950 shadow-sm'
                    : 'border-amber-900/20 dark:border-amber-400/20 text-slate-700 dark:text-slate-300 hover:border-amber-700'
                }`}
              >
                0{idx + 1} {stepKey}
              </button>
            ))}
          </div>
        </div>

        {/* Vintage Open Textbook Folio (Card Frame Removed - Organic Folio Spread) */}
        <div className="relative w-full py-2 space-y-6">
          
          {/* Header Strip of the Open Book */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-900/20 dark:border-amber-400/20 text-xs font-mono font-bold text-amber-900 dark:text-amber-400">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>TEXTBOOK ARCHIVE: CLASS 11 PHYSICS (VOL. I) • CHAPTER 4: WAVE DYNAMICS</span>
            </div>
            <span>STRICT GROUNDING: INSTITUTION UPLOADED CURRICULUM</span>
          </div>

          {/* Two-Page Open Book Folio Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4 relative">
            
            {/* Spine Divider for Large Screens */}
            <div className="hidden lg:block absolute left-1/2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-transparent via-amber-900/30 dark:via-amber-400/30 to-transparent -translate-x-1/2" />

            {/* LEFT FOLIO: Student Inquiry & Exact Textbook Page Source */}
            <div className="space-y-6 pr-0 lg:pr-8">
              
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-amber-800 dark:text-amber-400">
                  STUDENT INQUIRY
                </span>
                <div className="p-4 rounded-xl border-l-4 border-amber-800 bg-amber-900/5 dark:bg-amber-400/5 text-base sm:text-lg font-serif font-bold text-slate-950 dark:text-slate-50 italic">
                  "Explain the Doppler Effect for sound with practical derivations and why siren pitch shifts as it passes by."
                </div>
              </div>

              {/* Exact Grounded Source Citation Highlight Box */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>VERIFIED SYLLABUS CITATION</span>
                </span>

                <div className="p-5 rounded-xl border-2 border-emerald-600/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3 font-serif">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-emerald-900 dark:text-emerald-300">
                    <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-900/60">CHAPTER 4</span>
                    <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-900/60">SECTION 4.2</span>
                    <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-900/60">PAGE 142–144</span>
                  </div>
                  <p className="text-sm font-serif italic text-slate-800 dark:text-slate-200 border-l-2 border-emerald-600/60 pl-3">
                    "...When a wave source approaches an observer with velocity vₛ, the wavefronts ahead of the source bunch together. The effective wavelength λ' is reduced to λ' = (v - vₛ)/f, causing the observer to register an elevated frequency f'..."
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT FOLIO: Grounded AI Response & 5-Question Adaptive Quiz */}
            <div className="space-y-6 pl-0 lg:pl-8">
              
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-sky-800 dark:text-sky-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>AI-EDUCATION SYNTHESIS (ZERO HALLUCINATIONS)</span>
                </span>

                <div className="p-5 rounded-xl border-2 border-sky-400/40 bg-sky-50/40 dark:bg-sky-950/20 space-y-3 font-serif">
                  <p className="text-base text-slate-900 dark:text-slate-100 leading-relaxed font-medium">
                    As an emergency siren approaches, sound wavefronts compress along its vector of travel. Your ear perceives more wavefronts per second, producing a <strong>higher perceived pitch</strong>. As the siren moves away, wavefronts stretch, dropping the pitch.
                  </p>
                  <div className="text-xs font-mono text-sky-800 dark:text-sky-300 font-bold pt-1">
                    Grounded strictly in: Physics Class XI (Prescribed Syllabus)
                  </div>
                </div>
              </div>

              {/* Adaptive 5-Question Quiz Preview */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-amber-900 dark:text-amber-400 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>ADAPTIVE PRACTICE QUIZ (QUESTION 1 OF 5)</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                    ADAPTIVE REINFORCEMENT
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-sm sm:text-base font-serif font-bold text-slate-950 dark:text-slate-50">
                    {SAMPLE_QUIZ[0].question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SAMPLE_QUIZ[0].options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => {
                          setSelectedQuizAnswer(oIdx);
                          setQuizSubmitted(true);
                        }}
                        className={`p-3 rounded-xl border text-left text-xs font-serif font-semibold transition-all cursor-pointer ${
                          quizSubmitted && oIdx === SAMPLE_QUIZ[0].correct
                            ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-100 font-bold'
                            : selectedQuizAnswer === oIdx
                            ? 'border-amber-800 bg-amber-100 dark:bg-amber-950 text-slate-950 dark:text-slate-50'
                            : 'border-amber-900/20 dark:border-amber-400/20 bg-[#FAF6EE] dark:bg-[#0E1729] text-slate-800 dark:text-slate-200 hover:border-amber-700'
                        }`}
                      >
                        <span className="font-mono font-bold mr-2 text-amber-900 dark:text-amber-400">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>

                  {quizSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-500/40 text-xs font-serif text-emerald-950 dark:text-emerald-200"
                    >
                      <strong className="font-bold">Correct!</strong> {SAMPLE_QUIZ[0].explanation}
                    </motion.div>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Folio Bottom Margin Note */}
          <div className="pt-6 border-t-2 border-amber-900/20 dark:border-amber-400/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300 gap-2">
            <span>NO ARBITRARY WEB SCRAPING • INSTITUTIONAL BOUNDARY ENFORCED</span>
            <span className="text-amber-900 dark:text-amber-400">VERIFIABLE PAGE CITED IN 240MS</span>
          </div>

        </div>

      </div>
    </section>
  );
};
