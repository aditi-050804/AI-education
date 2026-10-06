import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextbookGuardrailObjectProps {
  queryIndex: number;
  evalState: 'idle' | 'checking' | 'allowed' | 'blocked';
}

export const TextbookGuardrailObject: React.FC<TextbookGuardrailObjectProps> = ({
  queryIndex,
  evalState,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const isBlocked = evalState === 'blocked' || queryIndex > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto py-4 select-none perspective-1000"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: isBlocked
            ? 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.3), transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.3), transparent 70%)',
        }}
      />

      {/* Main Tilt Wrapper */}
      <motion.div
        animate={{
          rotateX: mousePos.y * -6,
          rotateY: mousePos.x * 6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full transform-gpu"
      >
        {/* Soft Book Shadow */}
        <div className="absolute inset-x-8 bottom-0 h-10 bg-black/15 dark:bg-black/50 blur-xl rounded-[40px] transform translate-y-3" />

        {/* Vintage Bookmark Ribbon Dropping Below Book */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-10 bg-[#C87D32] dark:bg-[#D4AF37] rounded-b-sm shadow-md pointer-events-none z-10">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20" />
        </div>

        {/* The Open Textbook Folio */}
        <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FAF5EB] dark:bg-[#0C1322] border border-[#C87D32]/35 dark:border-[#C87D32]/30 shadow-xl overflow-hidden transition-colors duration-500">
          {/* Subtle Paper Grain Lines */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent, transparent 20px, rgba(200, 125, 50, 0.4) 20px, rgba(200, 125, 50, 0.4) 21px)',
            }}
          />

          {/* Spine Groove Shadow (Center fold) */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/5 via-black/10 to-transparent dark:from-white/5 dark:via-white/10 dark:to-transparent pointer-events-none" />

          {/* Folio Header */}
          <div className="relative z-10 flex items-start justify-between border-b border-[#C87D32]/25 pb-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C87D32] dark:text-[#E5A955] uppercase">
                  OPEN CURRICULUM TEXTBOOK & SOCRATIC BOUNDARY
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
                Physics Vol. I // Chapter 5: Laws of Motion
              </h3>
              <p className="text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9]">
                Syllabus Citation Grounding • Strict Out-of-Bounds Interception
              </p>
            </div>

            {/* Status Stamp */}
            <div className="relative shrink-0 flex items-center justify-center">
              <span
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase transition-colors duration-300 ${
                  isBlocked
                    ? 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    : 'border-emerald-600 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                }`}
              >
                {isBlocked ? 'GUARDRAIL ENGAGED' : 'CURRICULUM PASS'}
              </span>
            </div>
          </div>

          {/* Open Two-Page Spread Content */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 py-2">
            {/* Left Page: Approved Academic Curriculum */}
            <div className="space-y-2 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/15">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#C87D32] dark:text-[#E5A955]">
                <span className="font-bold">PAGE 104 • SECTION 5.3</span>
                <span>NCERT APPROVED</span>
              </div>

              {/* Classical Textbook Math/Physics Diagram Vector */}
              <div className="h-20 w-full flex items-center justify-center border-y border-[#C87D32]/10 py-1">
                <svg viewBox="0 0 160 60" className="w-full h-full stroke-[#C87D32] dark:stroke-[#E5A955] fill-none" strokeWidth="1.2">
                  {/* Inclined plane & block */}
                  <polygon points="20,50 140,50 140,15" strokeDasharray="2 2" />
                  <rect x="70" y="24" width="24" height="16" transform="rotate(-16 70 24)" fill="currentColor" fillOpacity="0.08" />
                  {/* Force vectors */}
                  <line x1="82" y1="28" x2="110" y2="20" strokeWidth="1.5" />
                  <polygon points="110,20 106,17 107,23" fill="currentColor" />
                  <text x="114" y="22" className="text-[8px] font-mono fill-current" stroke="none">F_ext</text>
                  <line x1="82" y1="28" x2="82" y2="48" strokeWidth="1.5" />
                  <polygon points="82,48 79,44 85,44" fill="currentColor" />
                  <text x="86" y="47" className="text-[8px] font-mono fill-current" stroke="none">mg</text>
                </svg>
              </div>

              <div className="text-[11px] font-serif text-[#121926] dark:text-[#F5EFE6] leading-relaxed line-clamp-2">
                "To every action, there is always an equal and opposite reaction; forces always occur in mutual pairs."
              </div>
            </div>

            {/* Right Page: Guardrail Response Arbitration */}
            <div className="space-y-2 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/15 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#C87D32] dark:text-[#E5A955]">
                <span className="font-bold">SOCRATIC AI EVALUATOR</span>
                <span>ZERO-PII</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={queryIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <div className="text-[11px] font-mono text-[#5A6578] dark:text-[#9DA9BE]">
                    Probed Subject:
                  </div>
                  <div className="font-serif font-bold text-xs text-[#121926] dark:text-[#F5EFE6] leading-snug">
                    {queryIndex === 0 && 'Physics Concept: Newton’s Third Law'}
                    {queryIndex === 1 && 'Financial Dues & Guardian Phone Numbers'}
                    {queryIndex === 2 && 'Pre-Release Chemistry Exam Answer Keys'}
                  </div>

                  <div
                    className={`p-2 rounded-lg text-[10px] font-mono font-bold ${
                      isBlocked
                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    }`}
                  >
                    {isBlocked ? '✕ HALTED: Direct Ledger/Exam Exposure Prevented' : '✓ PASSED: Validated against NCERT Page 104'}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="text-[9px] font-mono text-[#5A6578] dark:text-[#9DA9BE] pt-1 border-t border-[#C87D32]/10">
                Grounding Engine: Strict Curriculum Bounds
              </div>
            </div>
          </div>

          {/* Academic Footer Seal */}
          <div className="relative z-10 mt-3 pt-3 border-t border-[#C87D32]/20 flex items-center justify-between text-[11px] font-serif italic text-[#526071] dark:text-[#A6B4C9]">
            <span>Model operates strictly inside institutional textbooks, never accessing raw databases.</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
