import React, { useState, useRef, useEffect } from 'react';
import { Language, LANGUAGE_OPTIONS, UI_TRANSLATIONS } from '../data/pagesData';
import { Globe, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.fr;
  const currentLangObj = LANGUAGE_OPTIONS.find((l) => l.code === currentLanguage) || LANGUAGE_OPTIONS[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="no-print sticky top-0 z-50 bg-[#1e0712]/95 backdrop-blur-md border-b border-pink-900/40 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-2xl">
      {/* Brand & Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-md shadow-pink-500/30 border border-white/20">
          LR
        </div>
        <div>
          <h1 className="font-serif-title text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
            {t.title}
          </h1>
          <p className="text-xs text-pink-300 font-medium">{t.authorBy} — {t.subtitle}</p>
        </div>
      </div>

      {/* Center Navigation Controls */}
      <div className="flex items-center gap-2 bg-[#2a0b1b] px-3 py-1.5 rounded-full border border-pink-700/40 shadow-inner">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          className="p-1 rounded-full hover:bg-pink-900/60 text-pink-200 disabled:opacity-30 disabled:hover:bg-transparent transition"
          title={t.prevPage}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 text-xs font-semibold px-2">
          <span>{t.page}</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val >= 1 && val <= totalPages) {
                onPageChange(val);
              }
            }}
            className="w-10 text-center bg-[#15030b] border border-pink-700 rounded py-0.5 text-pink-400 font-bold focus:outline-none focus:border-pink-500"
          />
          <span className="text-zinc-400">{t.of} {totalPages}</span>
        </div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage >= totalPages}
          className="p-1 rounded-full hover:bg-pink-900/60 text-pink-200 disabled:opacity-30 disabled:hover:bg-transparent transition"
          title={t.nextPage}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Controls: Custom Language Selector Dropdown */}
      <div className="flex items-center gap-3">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2.5 bg-[#2b0816] hover:bg-[#3d0b20] text-white px-4 py-2 rounded-full border border-pink-500/50 shadow-md transition font-semibold text-xs sm:text-sm tracking-wide"
          >
            <Globe className="w-4 h-4 text-pink-400 shrink-0" />
            <span className="font-bold tracking-wider">
              {currentLangObj.prefix} {currentLangObj.label} ({currentLangObj.shortCode})
            </span>
            <ChevronDown className={`w-4 h-4 text-pink-300 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu Panel */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-[#1f0611] border-2 border-pink-500/60 rounded-2xl shadow-2xl overflow-hidden z-50 py-1 text-white font-sans">
              {LANGUAGE_OPTIONS.map((lang) => {
                const isSelected = lang.code === currentLanguage;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-bold flex items-center gap-2 transition ${
                      isSelected
                        ? 'bg-zinc-600/70 text-white font-extrabold'
                        : 'hover:bg-pink-900/40 text-zinc-200 hover:text-white'
                    }`}
                  >
                    <span className="text-pink-400 font-extrabold text-xs tracking-widest">{lang.prefix}</span>
                    <span>{lang.label} ({lang.shortCode})</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
