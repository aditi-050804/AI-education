import React, { useState, useEffect } from 'react';
import type { PageId } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { VintageNavbar } from './components/vintage/VintageNavbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PricingPage } from './pages/PricingPage';
import { SecurityPage } from './pages/SecurityPage';
import { ContactPage } from './pages/ContactPage';
import { motion, AnimatePresence } from 'framer-motion';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Sync with browser hash if user uses back/forward or direct link
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'features', 'solutions', 'pricing', 'security', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EB] dark:bg-[#060B14] text-[#161D2B] dark:text-[#E8DFD1] antialiased selection:bg-[#C5A059] selection:text-white transition-colors duration-500 font-sans">
      
      {/* Global Transparent Sticky Vintage Navbar */}
      <VintageNavbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Main Page Content with smooth transition */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onOpenDemo={() => setIsDemoOpen(true)}
              />
            )}
            {currentPage === 'features' && (
              <FeaturesPage
                onOpenDemo={() => setIsDemoOpen(true)}
                onNavigate={navigateTo}
              />
            )}
            {currentPage === 'solutions' && (
              <SolutionsPage
                onOpenDemo={() => setIsDemoOpen(true)}
                onNavigate={navigateTo}
              />
            )}
            {currentPage === 'pricing' && (
              <PricingPage
                onOpenDemo={() => setIsDemoOpen(true)}
                onNavigate={navigateTo}
              />
            )}
            {currentPage === 'security' && (
              <SecurityPage
                onOpenDemo={() => setIsDemoOpen(true)}
                onNavigate={navigateTo}
              />
            )}
            {currentPage === 'contact' && (
              <ContactPage onOpenDemo={() => setIsDemoOpen(true)} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Vintage Editorial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Global Book a Demo Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
