import React, { useState, useEffect } from 'react';
import { PageId, NavItem } from '../../types';
import { ThemeToggle } from '../ThemeToggle';
import { Menu, X, Sparkles, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VintageNavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDemo: () => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Campus' },
  { id: 'features', label: 'Capabilities' },
  { id: 'solutions', label: 'Institutions' },
  { id: 'pricing', label: 'Admissions' },
  { id: 'security', label: 'Archival Vault' },
  { id: 'contact', label: 'Inquire' },
];

export const VintageNavbar: React.FC<VintageNavbarProps> = ({ currentPage, onNavigate, onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F8F4EB]/90 dark:bg-[#060B14]/90 backdrop-blur-md border-b border-[#C5A059]/25 shadow-sm py-3.5'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Heritage Editorial Brand Emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center relative bg-gradient-to-b from-[#FAF6EE] to-[#EAE0CE] dark:from-[#111A2E] dark:to-[#080E1C] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif text-sm font-bold text-[#8C6B28] dark:text-[#D4AF37] italic">
                Æ
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            </div>
            <div>
              <div className="font-serif text-2xl font-bold tracking-tight text-[#161D2B] dark:text-[#F4ECE0] flex items-center gap-2">
                AI-Education
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8C6B28] dark:text-[#C5A059]">
                Digital Campus Operating System
              </div>
            </div>
          </button>

          {/* Desktop Classical Editorial Menu */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs tracking-wider uppercase font-semibold transition-all relative py-1 ${
                    isActive
                      ? 'text-[#161D2B] dark:text-[#F4ECE0]'
                      : 'text-[#586274] dark:text-[#9DA9BE] hover:text-[#161D2B] dark:hover:text-[#F4ECE0]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="vintageNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059] dark:bg-[#D4AF37]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={onOpenDemo}
              className="relative px-5 py-2.5 rounded-full border border-[#C5A059] text-xs font-serif italic font-bold tracking-wide text-[#161D2B] dark:text-[#F4ECE0] bg-[#FAF6EE]/80 dark:bg-[#0E1729]/80 hover:bg-[#C5A059] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-black transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Book a Demo</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#161D2B] dark:text-[#F4ECE0]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-[#F8F4EB]/98 dark:bg-[#060B14]/98 backdrop-blur-xl border-b border-[#C5A059]/30 p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-serif text-xl py-2 px-3 rounded-lg ${
                    currentPage === item.id
                      ? 'text-[#C5A059] italic font-bold bg-[#FAF6EE] dark:bg-[#111A2E]'
                      : 'text-[#161D2B] dark:text-[#F4ECE0]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-[#C5A059]/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-sm font-bold italic"
                >
                  Book an Institutional Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
