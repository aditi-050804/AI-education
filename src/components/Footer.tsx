import React from 'react';
import type { PageId } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <footer className="bg-[#FAF6EE] dark:bg-[#060B14] border-t border-[#C5A059]/25 pt-16 pb-12 transition-colors font-serif">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#C5A059]/20">
          
          <div className="space-y-3 max-w-md">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center font-bold text-xs italic text-[#8C6B28] dark:text-[#D4AF37]">
                Æ
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#161D2B] dark:text-[#F4ECE0]">
                AI-Education
              </span>
            </button>
            <p className="text-sm italic text-[#586274] dark:text-[#A7B5CC] leading-relaxed">
              An intelligent digital operating system for modern education. Oxford-style academic heritage united with grounded AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-mono text-[#586274] dark:text-[#A7B5CC]">
            <button onClick={() => onNavigate('features')} className="hover:text-[#161D2B] dark:hover:text-[#F4ECE0]">
              Capabilities
            </button>
            <button onClick={() => onNavigate('solutions')} className="hover:text-[#161D2B] dark:hover:text-[#F4ECE0]">
              Institutions
            </button>
            <button onClick={() => onNavigate('pricing')} className="hover:text-[#161D2B] dark:hover:text-[#F4ECE0]">
              Admissions
            </button>
            <button onClick={() => onNavigate('security')} className="hover:text-[#161D2B] dark:hover:text-[#F4ECE0]">
              Security Vault
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#161D2B] dark:hover:text-[#F4ECE0]">
              Registry
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8C6B28] dark:text-[#C5A059]">Theme:</span>
            <ThemeToggle />
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C6B28] dark:text-[#C5A059]">
          <div>
            © {new Date().getFullYear()} AI-Education Inc. • Where education meets intelligence.
          </div>
          <div className="flex items-center gap-4">
            <span>CASA Tier-2 Certified</span>
            <span>•</span>
            <span>Tally ERP 9 / Prime Native</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
