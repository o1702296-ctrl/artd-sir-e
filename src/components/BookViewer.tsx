import React, { useState, useEffect } from 'react';
import { PAGES_DATA, Language, LANGUAGE_OPTIONS, UI_TRANSLATIONS } from '../data/pagesData';
import { PageRenderer } from './PageRenderer';
import { Header } from './Header';
import { motion, AnimatePresence } from 'framer-motion';

export const BookViewer: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = PAGES_DATA.length;
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === currentLanguage);
  const isRtl = Boolean(currentLangObj?.isRtl);

  // Keyboard Navigation (Left / Right Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((prev) => Math.max(1, prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  const handlePrint = () => {
    window.print();
  };

  const activePageData = PAGES_DATA.find((p) => p.pageNumber === currentPage) || PAGES_DATA[0];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-body selection:bg-pink-500 selection:text-white">
      {/* Top Bar Header */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onPrint={handlePrint}
      />

      {/* Main Reader Container */}
      <main className="flex-1 py-6 px-4 max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center my-auto py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${currentLanguage}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <PageRenderer
                page={activePageData}
                language={currentLanguage}
                onNavigateToPage={(p) => setCurrentPage(p)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Quick Page Slider Navigation */}
          <div className="no-print mt-6 w-full max-w-md bg-[#250817]/90 border border-pink-900/40 rounded-full py-2.5 px-6 flex items-center gap-4 shadow-xl">
            <span className="text-xs font-semibold text-zinc-400">1</span>
            <input
              type="range"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="w-full accent-pink-500 cursor-pointer"
            />
            <span className="text-xs font-semibold text-zinc-400">{totalPages}</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print py-4 border-t border-zinc-900 text-center text-xs text-zinc-500">
        <p>{(UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.fr).title} — {(UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.fr).subtitle} © {new Date().getFullYear()} Lina Rela</p>
      </footer>
    </div>
  );
};
