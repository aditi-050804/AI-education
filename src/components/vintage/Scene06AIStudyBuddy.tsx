import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Bookmark, Search, CheckCircle2 } from 'lucide-react';

export const Scene06AIStudyBuddy: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<'botany' | 'law' | 'physics'>('botany');

  const subjects = {
    botany: {
      question: 'What is the precise biochemical mechanism of photosynthesis in C3 plants?',
      textbook: 'Principles of Plant Physiology • Volume II',
      citation: 'Chapter 4 • Section 2.1 • Page 87',
      quote: 'The light reactions generate ATP and NADPH in the thylakoid membranes, which subsequently drive the Calvin-Benson cycle in the stroma to fix atmospheric CO₂ via RuBisCO.',
      highlight: 'Rubisco catalyzes the carboxylation of ribulose-1,5-bisphosphate.'
    },
    law: {
      question: 'How was the doctrine of Basic Structure established in Indian Jurisprudence?',
      textbook: 'Constitutional Law of India (Oxford Edition)',
      citation: 'Chapter 8 • Section 3.2 • Page 144',
      quote: 'The Supreme Court in Kesavananda Bharati ruled that Parliament’s constituent amending power under Article 368 cannot alter the essential identity and framework of the Constitution.',
      highlight: 'Judicial review and democratic values form an unalterable core.'
    },
    physics: {
      question: 'How is torque mathematically related to angular momentum?',
      textbook: 'Classical Mechanics & Dynamics • 6th Edition',
      citation: 'Chapter 7 • Section 7.5 • Page 158',
      quote: 'The time rate of change of total angular momentum about a given fixed point is identically equal to the resultant external torque acting upon the physical system.',
      highlight: 'τ_external = dL/dt, the rotational counterpart to Newton’s second law.'
    }
  };

  const curr = subjects[selectedSubject];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene VI • The Library of Alexandria Reimagined
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            AI that learns from your curriculum.
          </h2>
          <p className="font-serif text-lg sm:text-xl font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
            Grounded in your institution’s own learning material.
          </p>

          {/* Subject Switchers */}
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => setSelectedSubject('botany')}
              className={`px-4 py-1.5 rounded-full text-xs font-serif font-semibold transition-all border ${
                selectedSubject === 'botany'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#161D2B] dark:border-[#F4ECE0]'
                  : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30'
              }`}
            >
              Plant Biology & Botany
            </button>
            <button
              onClick={() => setSelectedSubject('law')}
              className={`px-4 py-1.5 rounded-full text-xs font-serif font-semibold transition-all border ${
                selectedSubject === 'law'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#161D2B] dark:border-[#F4ECE0]'
                  : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30'
              }`}
            >
              Constitutional Jurisprudence
            </button>
            <button
              onClick={() => setSelectedSubject('physics')}
              className={`px-4 py-1.5 rounded-full text-xs font-serif font-semibold transition-all border ${
                selectedSubject === 'physics'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#161D2B] dark:border-[#F4ECE0]'
                  : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30'
              }`}
            >
              Classical Physics
            </button>
          </div>
        </div>

        {/* Vintage Open Tome with Emerging AI Interface */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSubject}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE] dark:bg-[#0B1220] shadow-2xl overflow-hidden"
          >
            {/* Left Page: Antique Textbook Page */}
            <div className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#C5A059]/30 bg-[#F4ECE0]/70 dark:bg-[#0E1729]/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8C6B28] mb-4">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Approved Syllabus
                  </span>
                  <span>Folio #{curr.citation.split('•')[2]}</span>
                </div>

                <div className="font-serif font-semibold text-xs text-[#8C6B28] dark:text-[#C5A059] mb-1">
                  {curr.textbook}
                </div>
                <h4 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mb-4">
                  “{curr.question}”
                </h4>

                <div className="p-4 rounded-xl border border-[#C5A059]/30 bg-[#FAF6EE] dark:bg-[#111A2E] text-xs font-serif leading-relaxed text-[#2D3748] dark:text-[#CBD5E1]">
                  <span className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Indexed Source Paragraph: </span>
                  {curr.quote}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A059]/20 text-[11px] font-mono text-[#8C6B28]">
                Grounding: 100% textbook verification • 0 hallucination
              </div>
            </div>

            {/* Right Page: Emerging Modern AI Neural Dialogue */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#FAF6EE] to-[#F8F4EB] dark:from-[#111A2E] dark:to-[#0B1220] relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* AI Dialogue Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#38BDF8]/20 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                      AI Study Buddy
                    </span>
                  </div>

                  {/* Exact Citation Badge */}
                  <span className="px-3 py-1 rounded-full border border-[#C5A059] text-[11px] font-mono text-[#8C6B28] dark:text-[#D4AF37] bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center gap-1.5">
                    <Bookmark className="w-3 h-3 text-[#38BDF8]" />
                    <span>{curr.citation}</span>
                  </span>
                </div>

                {/* AI Structured Synthesis */}
                <div className="space-y-4 font-serif text-sm leading-relaxed text-[#161D2B] dark:text-[#F4ECE0]">
                  <p>
                    {curr.quote}
                  </p>

                  <div className="p-4 rounded-2xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 font-mono text-xs text-[#0369A1] dark:text-[#38BDF8] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold uppercase tracking-wider text-[10px]">Verified Examination Citation</div>
                      <div className="mt-0.5">“{curr.highlight}”</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stamp */}
              <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274] dark:text-[#9DA9BE]">
                <span>Neural Latency: 240ms</span>
                <span>Institution-Approved Model</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
