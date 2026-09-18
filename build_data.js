import fs from 'fs';
import path from 'path';

// Generate TS data file for pagesData
const frPages = [
  {
    pageNumber: 1,
    type: "cover",
    title: "L’art d’être désirée",
    subtitle: "20 clés pour transformer ton couple",
    author: "Lina Rela",
    bgType: "gradient-pink-purple",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    pageNumber: 2,
    type: "preface",
    title: "Préface",
    author: "Lina Rela",
    quote: "Un amour qui ne se cultive pas est une fleur qui se fane",
    paragraphsLeft: [
      "Tu tiens entre tes mains un guide pas comme les autres.",
      "Ici, pas de leçons compliquées ni de discours moralisateurs. Cet eBook est une conversation entre femmes, une main tendue pour t’aider à mieux comprendre ce que veut dire être désirée, aimée et respectée sans te perdre dans le processus"
    ],
    paragraphsRight: [
      "Être désirée, ce n’est pas seulement plaire à ton homme, c’est te reconnecter à ton pouvoir féminin, à ton charme naturel et à cette confiance qui attire sans forcer.",
      "Beaucoup de femmes croient qu’il faut tout donner pour garder l’amour d’un homme, alors qu’en réalité, il s’attache davantage à celle qui sait se choisir d’abord.",
      "Les 20 clés que tu vas découvrir sont simples, vraies et puissantes.",
      "Elles t’aideront à raviver la flamme, à cultiver ton magnétisme, et surtout à te sentir épanouie dans ton couple.",
      "Page après page, tu apprendras à devenir cette femme sereine, confiante et irrésistible… celle qu’on n’oublie pas.",
      "Alors, installe-toi, respire profondément… et prépare-toi à redécouvrir l’art d’être désirée."
    ],
    images: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

console.log("Helper script ready");
