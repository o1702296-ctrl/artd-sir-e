import React from 'react';
import { PageData, Language, AUTHOR_NAME, UI_TRANSLATIONS } from '../data/pagesData';

interface PageRendererProps {
  page: PageData;
  language: Language;
  onNavigateToPage?: (page: number) => void;
}

export const getKeyImage = (keyNum: number): string => `pdf_images/key_${keyNum}.jpg`;
export const getTocKeyImage = (keyNum: number): string => `pdf_images/toc_key_${keyNum}.jpg`;

// Decorative Wavy SVG Line component
const WavyLine: React.FC<{ className?: string; color?: string }> = ({ className = "w-32 h-6", color = "currentColor" }) => (
  <svg viewBox="0 0 200 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 10 C 20 0, 40 20, 60 10 C 80 0, 100 20, 120 10 C 140 0, 160 20, 180 10 C 190 5, 195 12, 198 10"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const PageRenderer: React.FC<PageRendererProps> = ({ page, language, onNavigateToPage }) => {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.fr;
  const title = page.title[language] || page.title.fr || "";
  const subtitle = page.subtitle ? (page.subtitle[language] || page.subtitle.fr) : undefined;
  const quote = page.quote ? (page.quote[language] || page.quote.fr) : undefined;

  // Render Cover (Page 1)
  if (page.type === 'cover') {
    return (
      <div className="pdf-page-container bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400 p-6 sm:p-10 flex flex-col items-center justify-between text-center relative rounded-2xl shadow-2xl border-8 border-pink-400/50">
        <div className="absolute inset-3 border-4 border-purple-900/60 rounded-3xl pointer-events-none stroke-dash" />

        <div className="z-10 mt-8 sm:mt-12 space-y-4 max-w-md">
          <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-purple-950 leading-tight tracking-tight drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="font-serif-title text-base sm:text-xl font-bold text-white tracking-wide bg-purple-900/30 py-1.5 px-5 rounded-full backdrop-blur-sm inline-block shadow-inner">
              {subtitle}
            </p>
          )}
        </div>

        {/* Original Cover Image from PDF */}
        <div className="z-10 relative my-6 w-56 h-56 sm:w-72 sm:h-72 rounded-full p-2 border-4 border-white/80 shadow-2xl flex items-center justify-center bg-white/20 backdrop-blur-sm overflow-hidden shrink-0">
          <img
            src="pdf_images/cover.jpg"
            alt="Cover Illustration"
            className="w-full h-full object-cover rounded-full filter contrast-105"
          />
        </div>

        <div className="z-10 mb-6">
          <p className="font-sans text-lg sm:text-2xl font-extrabold text-white tracking-wider drop-shadow">
            {AUTHOR_NAME}
          </p>
        </div>
      </div>
    );
  }

  // Render Preface (Page 2)
  if (page.type === 'preface') {
    const leftText = page.leftParagraphs?.[language] || page.leftParagraphs?.fr || [];
    const rightText = page.rightParagraphs?.[language] || page.rightParagraphs?.fr || [];

    return (
      <div className="pdf-page-container bg-white text-zinc-800 flex flex-col md:flex-row relative rounded-2xl shadow-2xl overflow-hidden border border-zinc-200">
        {/* Left Column (White) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white relative">
          <div className="space-y-4">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-black tracking-tight border-b-2 border-black/10 pb-2">
              {title}
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-zinc-700 font-normal">
              {leftText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="my-4">
            <WavyLine className="w-36 h-6 text-pink-600" color="#db2777" />
          </div>

          {/* Original Preface Image from PDF */}
          <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border border-zinc-200 shrink-0 mt-2">
            <img src="pdf_images/preface_1.jpg" alt="Preface Illustration" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Column (Purple Gradient) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white flex flex-col justify-between relative">
          <div className="space-y-3 text-sm sm:text-base leading-relaxed font-light">
            {rightText.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {quote && (
            <div className="my-4 text-center px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <span className="text-3xl font-serif text-pink-200 block leading-none">“</span>
              <p className="font-serif-title italic text-sm sm:text-base font-bold text-white leading-snug">
                {quote}
              </p>
              <span className="text-3xl font-serif text-pink-200 block leading-none">”</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs font-semibold">
            <span>{t.authorBy}</span>
            <span className="text-lg font-bold">2</span>
          </div>
        </div>
      </div>
    );
  }

  // Render TOC (Pages 3-6)
  if (page.type === 'toc') {
    return (
      <div className="pdf-page-container bg-white text-zinc-800 flex flex-col md:flex-row relative rounded-2xl shadow-2xl overflow-hidden border border-zinc-200">
        {/* Left Column - Gradient & Mosaic Collages with ORIGINAL TOC IMAGES FROM PDF */}
        <div className="w-full md:w-5/12 bg-gradient-to-b from-purple-600 via-purple-700 to-pink-600 p-5 flex flex-col justify-between relative">
          <div className="grid grid-cols-2 gap-2.5 relative z-10">
            {page.tocItems?.map((item) => (
              <div
                key={item.keyNum}
                onClick={() => onNavigateToPage?.(item.keyNum + 8)} // Key 1 starts at page 9
                className="group relative h-24 sm:h-28 rounded-xl overflow-hidden shadow-md cursor-pointer border-2 border-white/40 transition hover:scale-105"
              >
                {/* ORIGINAL UNIQUE TOC THUMBNAIL FROM PDF */}
                <img
                  src={getTocKeyImage(item.keyNum)}
                  alt={`Key ${item.keyNum}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/40 transition" />
                <span className="absolute top-1 right-2 font-serif text-xl sm:text-2xl font-extrabold text-white drop-shadow-md">
                  {String(item.keyNum).padStart(2, '0')}.
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <WavyLine className="w-36 h-6 text-white" color="#fff" />
          </div>
        </div>

        {/* Right Column - Table of Contents List */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-white relative">
          <div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-black mb-4 border-b-2 border-black pb-2 tracking-tight">
              {title}
            </h2>

            {page.pageNumber === 3 && (
              <p
                onClick={() => onNavigateToPage?.(7)}
                className="font-serif-title text-lg font-bold text-pink-700 mb-4 cursor-pointer hover:text-pink-600 transition underline underline-offset-4"
              >
                Introduction
              </p>
            )}

            <div className="space-y-3">
              {page.tocItems?.map((item) => (
                <div
                  key={item.keyNum}
                  onClick={() => onNavigateToPage?.(item.keyNum + 8)}
                  className="flex items-baseline justify-between group cursor-pointer border-b border-zinc-100 pb-2 hover:border-pink-300 transition"
                >
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-serif text-sm sm:text-base font-bold text-pink-700 shrink-0">
                      {t.keyLabel} {item.keyNum}.
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-pink-600 transition leading-snug">
                      {item.title[language] || item.title.fr}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-right pt-4">
            <span className="font-sans text-lg font-bold text-zinc-900">{page.pageNumber}</span>
          </div>
        </div>
      </div>
    );
  }

  // Render Intro (Pages 7-8)
  if (page.type === 'intro') {
    const paragraphs = page.paragraphs?.[language] || page.paragraphs?.fr || [];

    if (page.pageNumber === 7) {
      return (
        <div className="pdf-page-container bg-gradient-to-b from-purple-500 via-pink-500 to-pink-600 p-6 sm:p-8 flex flex-col justify-between relative rounded-2xl shadow-2xl">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl space-y-4 text-zinc-800">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-black mb-2 tracking-tight">
              {title}
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-zinc-700">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Original Intro Image from PDF */}
          <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden shadow-2xl mt-4 border-2 border-white/60 shrink-0">
            <img src="pdf_images/intro.jpg" alt="Introduction" className="w-full h-full object-cover" />
          </div>

          <div className="text-right pt-2 text-white font-bold text-lg">7</div>
        </div>
      );
    }

    return (
      <div className="pdf-page-container bg-gradient-to-br from-purple-700 via-purple-800 to-pink-600 p-8 sm:p-12 text-white flex flex-col justify-between relative rounded-2xl shadow-2xl">
        <div className="space-y-6 max-w-xl mx-auto text-center my-auto leading-relaxed text-base sm:text-lg font-light">
          {paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 3 ? "font-serif-title font-bold text-lg sm:text-xl text-yellow-200" : ""}>
              {p}
            </p>
          ))}
        </div>

        <div className="text-right text-white font-bold text-lg">8</div>
      </div>
    );
  }

  // Render Keys (Pages 9-42)
  if (page.type === 'key') {
    const paragraphs = page.paragraphs?.[language] || page.paragraphs?.fr || [];
    const hasGradientBg = Boolean(page.bgGradient);
    const keyNum = page.keyNumber || 1;
    const imageForThisKey = getKeyImage(keyNum);

    return (
      <div
        className={`pdf-page-container relative rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col justify-between border border-zinc-200 ${
          hasGradientBg
            ? 'bg-gradient-to-br from-purple-700 via-purple-800 to-pink-600 text-white'
            : 'bg-white text-zinc-800'
        }`}
      >
        <div className="space-y-2 mb-4">
          <h2
            className={`font-serif-title text-2xl sm:text-3xl font-extrabold tracking-tight ${
              hasGradientBg ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </h2>
          <WavyLine className="w-32 h-5 text-pink-500" color={hasGradientBg ? "#fff" : "#db2777"} />
        </div>

        {/* Content Section: Text & Image formatted responsive */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 items-center my-4">
          <div className="space-y-4 text-sm sm:text-base leading-relaxed flex-1 w-full">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {quote && (
              <div className="mt-4 p-4 rounded-xl bg-purple-900/30 backdrop-blur-sm border-l-4 border-pink-400 italic font-serif text-base sm:text-lg font-bold">
                "{quote}"
              </div>
            )}
          </div>

          {/* Original Key Image from PDF with adaptive sizing */}
          <div className="w-full md:w-5/12 h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-xl border-2 border-white/50 shrink-0">
            <img src={imageForThisKey} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className={`text-right pt-3 font-sans text-lg font-bold border-t ${hasGradientBg ? 'text-white border-white/20' : 'text-zinc-900 border-zinc-100'}`}>
          {page.pageNumber}
        </div>
      </div>
    );
  }

  // Render Conclusion & Acknowledgements (Pages 43-45)
  const paragraphs = page.paragraphs?.[language] || page.paragraphs?.fr || [];

  return (
    <div
      className={`pdf-page-container relative rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col justify-between border border-zinc-200 ${
        page.type === 'acknowledgements'
          ? 'bg-gradient-to-br from-purple-700 via-purple-800 to-pink-600 text-white'
          : 'bg-white text-zinc-800'
      }`}
    >
      <div>
        <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
          {title}
        </h2>
        <WavyLine className="w-36 h-6 mb-4" color={page.type === 'acknowledgements' ? "#fff" : "#db2777"} />

        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx} className={p.startsWith("—") ? "font-serif text-lg font-bold mt-4 text-yellow-300" : ""}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="h-36 sm:h-44 rounded-xl overflow-hidden shadow-lg border border-zinc-200 shrink-0">
          <img src="pdf_images/conclusion_1.jpg" alt="Illustration 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-36 sm:h-44 rounded-xl overflow-hidden shadow-lg border border-zinc-200 shrink-0">
          <img src="pdf_images/conclusion_2.jpg" alt="Illustration 2" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-right font-sans text-lg font-bold pt-3 border-t border-zinc-100">{page.pageNumber}</div>
    </div>
  );
};
