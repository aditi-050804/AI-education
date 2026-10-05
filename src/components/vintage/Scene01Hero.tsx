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
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 pt-32 pb-12 overflow-hidden parchment-grain">
      
      {/* Background Architectural Engraving with Slow Drift */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-45 dark:opacity-35"
      >
        <CampusEngraving className="w-full max-w-7xl transform translate-y-12" isAiActive={true} />
      </motion.div>

      {/* Atmospheric Vignette Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#F8F4EB]/40 to-[#F8F4EB] dark:via-[#060B14]/40 dark:to-[#060B14] pointer-events-none" />

      {/* Centerpiece Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto my-auto space-y-6 pt-8">
        
        {/* Academic Seal Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/80 dark:bg-[#0E1729]/80 backdrop-blur-sm text-xs tracking-[0.25em] uppercase font-semibold text-[#8C6B28] dark:text-[#D4AF37]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
          <span>Intelligent Digital Campus</span>
          <span className="text-[#C5A059]">•</span>
          <span className="font-serif italic font-normal lowercase tracking-normal">circa 2026</span>
        </motion.div>

        {/* Master Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#161D2B] dark:text-[#F4ECE0] leading-[1.05]"
        >
          Where education <br />
          <span className="italic font-normal text-[#8C6B28] dark:text-[#D4AF37]">meets intelligence.</span>
        </motion.h1>

        {/* 1-2 line concise supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base sm:text-xl text-[#525E75] dark:text-[#A7B5CC] max-w-2xl mx-auto font-serif italic"
        >
          An intelligent digital campus for modern institutions. Bridging centuries of academic tradition with grounded AI.
        </motion.p>

        {/* Cinematic Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-base font-bold italic tracking-wide hover:bg-[#C5A059] dark:hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>Book a Demo</span>
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

      {/* Scroll Down Indication */}
      <motion.button
        onClick={onExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase font-serif text-[#8C6B28] dark:text-[#C5A059] hover:opacity-80 transition-opacity"
      >
        <span>Begin the Journey</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.button>

    </section>
  );
};
