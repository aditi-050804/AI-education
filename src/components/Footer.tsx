import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUp,
  Mail,
  MessageCircle,
  ShieldCheck,
  Compass,
  Sparkles,
} from 'lucide-react';
import type { PageId } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    scrollToTop();
  };

  const exploreCol1 = [
    { label: 'Home', page: 'home' as PageId },
    { label: 'Features', page: 'features' as PageId },
    { label: 'Solutions', page: 'solutions' as PageId },
    { label: 'Pricing', page: 'pricing' as PageId },
    { label: 'Security', page: 'security' as PageId },
    { label: 'Contact', page: 'contact' as PageId },
  ];

  const exploreCol2 = [
    { label: 'Schools', page: 'solutions' as PageId },
    { label: 'Colleges', page: 'solutions' as PageId },
    { label: 'Law Universities', page: 'features' as PageId },
    { label: 'Competitive Learning', page: 'features' as PageId },
    { label: 'AI Study Buddy', page: 'features' as PageId },
    { label: 'About AI-Education', page: 'home' as PageId },
  ];

  return (
    <footer className="relative w-full bg-[#040812] text-[#E8DFD1] overflow-hidden font-sans border-t border-[#C87D32]/25 selection:bg-[#C87D32] selection:text-white">
      
      {/* Subtle Star-like Academic Dots & Fine Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#C87D32_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Atmospheric Midnight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#C87D32]/10 via-[#38BDF8]/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Thin Top Golden Highlight Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C87D32]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-12 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* TOP STRUCTURE — THREE MAJOR VISUAL ZONES (EXPLORE | BRAND | CONNECT)       */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* TOP STRUCTURE — THREE MAJOR VISUAL ZONES (EXPLORE | BRAND | CONNECT)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start w-full">
          
          {/* ========================================================================= */}
          {/* 1. LEFT ZONE: EXPLORE (CLEARLY ANCHORED ON THE LEFT)                      */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left w-full space-y-4"
          >
            {/* Header with Antique-Gold Underline (Left-Aligned on Desktop) */}
            <div className="space-y-1.5 flex flex-col items-center md:items-start">
              <h3 className="text-xs font-mono font-bold tracking-[0.25em] text-[#C87D32] uppercase">
                EXPLORE
              </h3>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#C87D32] to-transparent" />
            </div>

            {/* Two Clean Navigation Columns */}
            <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-2.5 text-[13.5px] font-serif font-semibold text-[#CBD5E1]">
              {/* Column 1 */}
              <div className="space-y-2.5 flex flex-col items-center md:items-start text-center md:text-left">
                {exploreCol1.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.page)}
                    className="group flex flex-col items-center md:items-start text-center md:text-left transition-colors hover:text-[#FFFFFF]"
                  >
                    <span className="font-semibold group-hover:-translate-y-0.5 transition-transform duration-200">
                      {item.label}
                    </span>
                    <span className="w-0 group-hover:w-full h-[1px] bg-[#C87D32] transition-all duration-300 opacity-60" />
                  </button>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-2.5 flex flex-col items-center md:items-start text-center md:text-left">
                {exploreCol2.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.page)}
                    className="group flex flex-col items-center md:items-start text-center md:text-left transition-colors hover:text-[#FFFFFF]"
                  >
                    <span className="font-semibold group-hover:-translate-y-0.5 transition-transform duration-200">
                      {item.label}
                    </span>
                    <span className="w-0 group-hover:w-full h-[1px] bg-[#C87D32] transition-all duration-300 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* 2. CENTER ZONE: AI-EDUCATION BRAND (MATHEMATICALLY CENTERED ANCHOR)        */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 flex flex-col items-center text-center space-y-3.5 mx-auto w-full max-w-sm"
          >
            {/* 1. Logo First (Slightly above brand name with balanced spacing) */}
            <button
              onClick={() => handleNav('home')}
              className="group flex flex-col items-center text-center space-y-2.5 focus:outline-none"
            >
              <div className="relative w-12 h-12 rounded-full border border-[#C87D32]/50 bg-[#C87D32]/10 flex items-center justify-center font-serif text-lg italic font-bold text-[#E5A955] group-hover:border-[#E5A955] group-hover:shadow-[0_0_20px_rgba(200,125,50,0.35)] transition-all duration-300">
                <span>Æ</span>
                <span className="absolute inset-0 rounded-full border border-[#C87D32]/25 scale-125 pointer-events-none" />
              </div>
              <div className="space-y-0.5">
                <span className="block font-serif text-2xl font-bold tracking-[0.18em] text-[#FAF5EB] group-hover:text-[#E5A955] transition-colors">
                  AI-EDUCATION
                </span>
                <span className="block font-mono text-[10px] tracking-[0.25em] text-[#C87D32] uppercase font-bold">
                  DIGITAL CAMPUS OPERATING SYSTEM
                </span>
              </div>
            </button>

            {/* 2. Short Description */}
            <p className="font-serif italic font-medium text-sm text-[#A6B4C9] leading-relaxed max-w-xs text-center">
              “Intelligence for the people who make education happen.”
            </p>

            {/* 3. Small Supporting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C87D32]/25 bg-[#C87D32]/5 font-mono text-[11px] text-[#A6B4C9] whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold">45+ Campuses</span>
              <span className="text-[#C87D32]/40">•</span>
              <span>CBSE • ICSE • IB</span>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* 3. RIGHT ZONE: CONNECT (CLEARLY ANCHORED ON THE RIGHT)                    */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 md:order-3 flex flex-col items-center md:items-end text-center md:text-right w-full space-y-4"
          >
            {/* Header with Antique-Gold Underline (Right-Aligned on Desktop) */}
            <div className="space-y-1.5 flex flex-col items-center md:items-end">
              <h3 className="text-xs font-mono font-bold tracking-[0.25em] text-[#C87D32] uppercase">
                CONNECT
              </h3>
              <div className="w-10 h-[1px] bg-gradient-to-r md:bg-gradient-to-l from-[#C87D32] to-transparent mx-auto md:ml-auto md:mr-0" />
            </div>

            {/* Subtle Circular Outline Social Icons in Single Row */}
            <div className="flex items-center justify-center md:justify-end gap-2.5">
              
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[#C87D32]/35 hover:border-[#E5A955] bg-white/[0.025] hover:bg-[#C87D32]/15 text-[#CBD5E1] hover:text-[#FAF5EB] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(200,125,50,0.25)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full border border-[#C87D32]/35 hover:border-[#E5A955] bg-white/[0.025] hover:bg-[#C87D32]/15 text-[#CBD5E1] hover:text-[#FAF5EB] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(200,125,50,0.25)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#C87D32]/35 hover:border-[#E5A955] bg-white/[0.025] hover:bg-[#C87D32]/15 text-[#CBD5E1] hover:text-[#FAF5EB] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(200,125,50,0.25)]"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[#C87D32]/35 hover:border-[#E5A955] bg-white/[0.025] hover:bg-[#C87D32]/15 text-[#CBD5E1] hover:text-[#FAF5EB] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(200,125,50,0.25)]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#C87D32]/35 hover:border-[#E5A955] bg-white/[0.025] hover:bg-[#C87D32]/15 text-[#CBD5E1] hover:text-[#FAF5EB] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(200,125,50,0.25)]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>

              {/* Email */}
              <a
                href="mailto:contact@ai-education.in"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-[#C87D32]/35 hover:border-[#E5A955] bg-white/[0.025] hover:bg-[#C87D32]/15 text-[#CBD5E1] hover:text-[#FAF5EB] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(200,125,50,0.25)]"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Demonstration Link */}
            <div className="pt-0.5">
              <button
                onClick={onOpenDemo}
                className="text-xs font-mono font-bold text-[#C87D32] hover:text-[#FAF5EB] transition-colors underline decoration-[#C87D32]/40 underline-offset-4"
              >
                Schedule Executive Briefing →
              </button>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* DECORATIVE CENTER ACADEMIC ORNAMENT DETAIL                                  */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 max-w-sm bg-gradient-to-r from-transparent via-[#C87D32]/30 to-[#C87D32]/60" />
          <div className="flex items-center gap-2 text-[#C87D32] opacity-75">
            <span className="text-[10px]">✦</span>
            <span className="w-1.5 h-1.5 rotate-45 border border-[#C87D32] bg-[#C87D32]/30" />
            <span className="text-[10px]">✦</span>
          </div>
          <div className="h-[1px] flex-1 max-w-sm bg-gradient-to-l from-transparent via-[#C87D32]/30 to-[#C87D32]/60" />
        </div>

        {/* ========================================================================= */}
        {/* THIN HORIZONTAL DIVIDER SPANNING FOOTER WIDTH                             */}
        {/* ========================================================================= */}
        <div className="w-full h-[1px] bg-[#C87D32]/15" />

        {/* ========================================================================= */}
        {/* BOTTOM ROW — COPYRIGHT, SYSTEM TAG, AND LEGAL LINKS                        */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-semibold text-[#526071]">
          {/* Left: Copyright */}
          <div className="font-semibold text-[#94A3B8]">
            © 2026 AI-Education. All rights reserved.
          </div>

          {/* Center: System Badge */}
          <div className="hidden md:flex items-center gap-2 text-xs text-[#94A3B8] font-semibold">
            <span>Digital Campus Operating System</span>
            <span>•</span>
            <span>Zero-Trust Architecture</span>
          </div>

          {/* Right: Legal & Privacy */}
          <div className="flex items-center gap-4 text-xs text-[#CBD5E1] font-semibold">
            <button onClick={() => handleNav('security')} className="hover:text-[#FAF5EB] transition-colors font-semibold">
              Privacy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('security')} className="hover:text-[#FAF5EB] transition-colors font-semibold">
              Terms
            </button>
            <span>•</span>
            <button onClick={() => handleNav('security')} className="hover:text-[#FAF5EB] transition-colors font-semibold">
              Security
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FLOATING CIRCULAR BACK-TO-TOP BUTTON (BOTTOM-RIGHT CORNER)                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-[#C87D32]/40 bg-[#040812]/80 backdrop-blur-md text-[#C87D32] hover:text-[#FAF5EB] hover:border-[#C87D32] hover:shadow-[0_0_20px_rgba(200,125,50,0.35)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
