import React, { useState, useEffect, useRef } from 'react';
import { PAGES_DATA, Language, LANGUAGE_OPTIONS, UI_TRANSLATIONS } from '../data/pagesData';
import { PageRenderer } from './PageRenderer';
import { Header } from './Header';
import { ArrowUp } from 'lucide-react';

export const BookViewer: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pageRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const totalPages = PAGES_DATA.length;
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === currentLanguage);
  const isRtl = Boolean(currentLangObj?.isRtl);

  // Smooth scroll to target page number
  const scrollToPage = (pageNumber: number) => {
    const targetEl = pageRefs.current[pageNumber];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentPage(pageNumber);
    }
  };

  // Setup Intersection Observer to update active page as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNumStr = entry.target.getAttribute('data-page-number');
            if (pageNumStr) {
              const pageNum = parseInt(pageNumStr, 10);
              if (!isNaN(pageNum)) {
                setCurrentPage(pageNum);
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
      }
    );

    Object.values(pageRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [totalPages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        const next = Math.min(totalPages, currentPage + 1);
        scrollToPage(next);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        const prev = Math.max(1, currentPage - 1);
        scrollToPage(prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-body selection:bg-pink-500 selection:text-white">
      {/* Top Bar Header */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={scrollToPage}
      />

      {/* Main Reader Container: Continuous Vertical Scroll for all 45 Pages */}
      <main className="flex-1 py-8 px-4 max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-10">
          {PAGES_DATA.map((pageData) => (
            <div
              key={pageData.pageNumber}
              id={`page-${pageData.pageNumber}`}
              data-page-number={pageData.pageNumber}
              ref={(el) => {
                pageRefs.current[pageData.pageNumber] = el;
              }}
              className="w-full flex justify-center scroll-mt-20 transition-transform duration-300"
            >
              <PageRenderer
                page={pageData}
                language={currentLanguage}
                onNavigateToPage={scrollToPage}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-pink-600 hover:bg-pink-500 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 border border-pink-400/40"
          title="Retour en haut"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="no-print py-6 border-t border-zinc-900 text-center text-xs text-zinc-500 mt-12">
        <p>{(UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.fr).title} — {(UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.fr).subtitle} © {new Date().getFullYear()} Lina Rela</p>
      </footer>
    </div>
  );
};
