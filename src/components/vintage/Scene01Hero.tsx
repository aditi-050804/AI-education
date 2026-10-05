import React from 'react';
import { motion } from 'framer-motion';
import { CampusEngraving } from './CampusEngraving';
import { Sparkles, ArrowDown, BookOpen } from 'lucide-react';

interface Scene01HeroProps {
  onOpenDemo: () => void;
  onExplore: () => void;
}

export const Scene01Hero: React.FC<Scene01HeroProps> = ({ onOpenDemo, onExplore }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 pt-28 pb-12 overflow-hidden parchment-grain">
      
      {/* Subtle Atmospheric Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#38BDF8]/10 dark:bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center my-auto">
        
        {/* 1. Academic Seal Eyebrow at the top */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/80 dark:bg-[#0E1729]/80 backdrop-blur-sm text-xs tracking-[0.25em] uppercase font-semibold text-[#8C6B28] dark:text-[#D4AF37] mb-4 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
          <span>Intelligent Digital Campus</span>
          <span className="text-[#C5A059]">•</span>
          <span className="font-serif italic font-normal lowercase tracking-normal">circa 2026</span>
        </motion.div>

        {/* 2. Campus Architectural Illustration (Cleanly above the text) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          className="w-full h-[260px] sm:h-[340px] md:h-[380px] flex items-center justify-center my-1 select-none"
        >
          <CampusEngraving className="w-full h-full" isAiActive={true} />
        </motion.div>

        {/* 3. Text cleanly BELOW the Campus illustration */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
          
          {/* Master Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#161D2B] dark:text-[#F4ECE0] leading-[1.08]"
          >
            Where education <br />
            <span className="italic font-normal text-[#8C6B28] dark:text-[#D4AF37]">meets intelligence.</span>
          </motion.h1>

          {/* 1-2 line concise supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg text-[#525E75] dark:text-[#A7B5CC] max-w-2xl mx-auto font-serif italic leading-relaxed"
          >
            An intelligent digital campus for modern institutions. Bridging centuries of academic tradition with grounded AI.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-base font-bold italic tracking-wide hover:bg-[#C5A059] dark:hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span>Get Started</span>
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#C5A059]/60 hover:border-[#C5A059] text-[#161D2B] dark:text-[#F4ECE0] font-serif text-base font-normal italic hover:bg-[#FAF6EE] dark:hover:bg-[#0E1729] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span>Explore the Campus</span>
            </button>
          </motion.div>

        </div>

      </div>

      {/* Scroll Down Indication */}
      <motion.button
        onClick={onExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-1 text-xs tracking-widest uppercase font-serif text-[#8C6B28] dark:text-[#C5A059] hover:opacity-80 transition-opacity mt-4"
      >
        <span>Begin the Journey</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.button>

    </section>
  );
};
