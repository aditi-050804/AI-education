import React from 'react';
import { motion } from 'framer-motion';
import { CampusEngraving } from './CampusEngraving';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { PageId } from '../../types';

interface Scene16FinalCTAProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const Scene16FinalCTA: React.FC<Scene16FinalCTAProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-28 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/30 overflow-hidden text-center">
      
      {/* Background Campus Engraving with Vivid AI Glowing Radiance */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-35 dark:opacity-30">
        <CampusEngraving className="w-full max-w-7xl" isAiActive={true} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        {/* Emblem */}
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#C5A059] flex items-center justify-center bg-[#FAF6EE] dark:bg-[#0E1729] shadow-xl">
          <span className="font-serif text-2xl font-bold text-[#8C6B28] dark:text-[#D4AF37] italic">
            Æ
          </span>
        </div>

        <span className="inline-block text-[11px] font-mono uppercase tracking-[0.3em] text-[#8C6B28] dark:text-[#C5A059]">
          The Intelligent Digital Campus
        </span>

        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-[#161D2B] dark:text-[#F4ECE0] leading-[1.05]">
          Build the intelligent campus.
        </h2>

        <p className="font-serif text-lg sm:text-xl font-semibold text-[#2D3748] dark:text-[#CBD5E1] max-w-xl mx-auto leading-relaxed">
          From timetable to Tally. From classroom to AI learning. One unified operating system for your entire institution.
        </p>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-base font-bold tracking-wide hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              onNavigate('features');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C5A059]/60 hover:border-[#C5A059] text-[#161D2B] dark:text-[#F4ECE0] font-serif text-base font-semibold hover:bg-[#FAF6EE] dark:hover:bg-[#0E1729] transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span>Explore Features</span>
          </button>
        </div>

      </div>

    </section>
  );
};
