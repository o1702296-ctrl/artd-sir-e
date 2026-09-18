export type Language = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'ru' | 'tr' | 'ar';

export interface PageData {
  pageNumber: number;
  type: 'cover' | 'preface' | 'toc' | 'intro' | 'key' | 'conclusion' | 'acknowledgements';
  keyNumber?: number;
  title: Record<Language, string>;
  subtitle?: Record<Language, string>;
  author?: string;
  quote?: Record<Language, string>;
  paragraphs?: Record<Language, string[]>;
  leftParagraphs?: Record<Language, string[]>;
  rightParagraphs?: Record<Language, string[]>;
  tocItems?: { keyNum: number; title: Record<Language, string> }[];
  bgGradient?: string;
  images?: string[];
}

export const AUTHOR_NAME = "Lina Rela";

export interface LangOption {
  code: Language;
  prefix: string;
  label: string;
  shortCode: string;
  isRtl?: boolean;
}

export const LANGUAGE_OPTIONS: LangOption[] = [
  { code: 'fr', prefix: 'FR', label: 'Français', shortCode: 'FR' },
  { code: 'en', prefix: 'GB', label: 'English', shortCode: 'EN' },
  { code: 'es', prefix: 'ES', label: 'Español', shortCode: 'ES' },
  { code: 'de', prefix: 'DE', label: 'Deutsch', shortCode: 'DE' },
  { code: 'it', prefix: 'IT', label: 'Italiano', shortCode: 'IT' },
  { code: 'pt', prefix: 'PT', label: 'Português', shortCode: 'PT' },
  { code: 'nl', prefix: 'NL', label: 'Nederlands', shortCode: 'NL' },
  { code: 'ru', prefix: 'RU', label: 'Русский', shortCode: 'RU' },
  { code: 'tr', prefix: 'TR', label: 'Türkçe', shortCode: 'TR' },
  { code: 'ar', prefix: 'SA', label: 'العربية', shortCode: 'AR', isRtl: true }
];

export const UI_TRANSLATIONS: Record<Language, {
  title: string;
  subtitle: string;
  page: string;
  of: string;
  prevPage: string;
  nextPage: string;
  printPdf: string;
  authorBy: string;
  keyLabel: string;
}> = {
  "fr": {
    "title": "L'art d'être désirée",
    "subtitle": "20 clés pour transformer ton couple",
    "page": "Page",
    "of": "sur",
    "prevPage": "Page précédente",
    "nextPage": "Page suivante",
    "printPdf": "Imprimer PDF",
    "authorBy": "Par Lina Rela",
    "keyLabel": "Clé"
  },
  "en": {
    "title": "The Art of Being Desired",
    "subtitle": "20 keys to transform your relationship",
    "page": "Page",
    "of": "of",
    "prevPage": "Previous page",
    "nextPage": "Next page",
    "printPdf": "Print PDF",
    "authorBy": "By Lina Rela",
    "keyLabel": "Key"
  },
  "es": {
    "title": "El Arte de Ser Deseada",
    "subtitle": "20 claves para transformar tu pareja",
    "page": "Página",
    "of": "de",
    "prevPage": "Página anterior",
    "nextPage": "Página siguiente",
    "printPdf": "Imprimir PDF",
    "authorBy": "Por Lina Rela",
    "keyLabel": "Clave"
  },
  "de": {
    "title": "Die Kunst, Begehrt zu Werden",
    "subtitle": "20 Schlüssel zur Transformation Deiner Beziehung",
    "page": "Seite",
    "of": "von",
    "prevPage": "Vorherige Seite",
    "nextPage": "Nächste Seite",
    "printPdf": "PDF drucken",
    "authorBy": "Von Lina Rela",
    "keyLabel": "Schlüssel"
  },
  "it": {
    "title": "L'Arte di Essere Desiderata",
    "subtitle": "20 chiavi per trasformare la tua coppia",
    "page": "Pagina",
    "of": "di",
    "prevPage": "Pagina precedente",
    "nextPage": "Pagina successiva",
    "printPdf": "Stampa PDF",
    "authorBy": "Di Lina Rela",
    "keyLabel": "Chiave"
  },
  "pt": {
    "title": "A Arte de Ser Desejada",
    "subtitle": "20 chaves para transformar o seu relacionamento",
    "page": "Página",
    "of": "de",
    "prevPage": "Página anterior",
    "nextPage": "Próxima página",
    "printPdf": "Imprimir PDF",
    "authorBy": "Por Lina Rela",
    "keyLabel": "Chave"
  },
  "nl": {
    "title": "De Kunst om Begeerd te Worden",
    "subtitle": "20 sleutels om je relatie te transformeren",
    "page": "Pagina",
    "of": "van",
    "prevPage": "Vorige pagina",
    "nextPage": "Volgende pagina",
    "printPdf": "PDF Afdrukken",
    "authorBy": "Door Lina Rela",
    "keyLabel": "Sleutel"
  },
  "ru": {
    "title": "Искусство Быть Желанной",
    "subtitle": "20 ключей к трансформации ваших отношений",
    "page": "Страница",
    "of": "из",
    "prevPage": "Предыдущая страница",
    "nextPage": "Следующая страница",
    "printPdf": "Печать PDF",
    "authorBy": "Лина Рела",
    "keyLabel": "Ключ"
  },
  "tr": {
    "title": "Arzulanma Sanatı",
    "subtitle": "İlişkinizi dönüştürecek 20 anahtar",
    "page": "Sayfa",
    "of": "/",
    "prevPage": "Önceki sayfa",
    "nextPage": "Sonraki sayfa",
    "printPdf": "PDF Yazdır",
    "authorBy": "Lina Rela Tarafından",
    "keyLabel": "Anahtar"
  },
  "ar": {
    "title": "فن أن تكوني مرغوبة",
    "subtitle": "٢٠ مفتاحاً لتغيير علاقتكِ الزوجية",
    "page": "صفحة",
    "of": "من",
    "prevPage": "الصفحة السابقة",
    "nextPage": "الصفحة التالية",
    "printPdf": "طباعة PDF",
    "authorBy": "بقلم لينا ريلا",
    "keyLabel": "المفتاح"
  }
};

export const PAGES_DATA: PageData[] = [
  {
    "pageNumber": 1,
    "type": "cover",
    "author": "Lina Rela",
    "title": {
      "fr": "L'art d'être désirée",
      "en": "The Art of Being Desired",
      "es": "El Arte de Ser Deseada",
      "de": "Die Kunst, Begehrt zu Werden",
      "it": "L'Arte di Essere Desiderata",
      "pt": "A Arte de Ser Desejada",
      "nl": "De Kunst om Begeerd te Worden",
      "ru": "Искусство Быть Желанной",
      "tr": "Arzulanma Sanatı",
      "ar": "فن أن تكوني مرغوبة"
    },
    "subtitle": {
      "fr": "20 clés pour transformer ton couple",
      "en": "20 keys to transform your relationship",
      "es": "20 claves para transformar tu pareja",
      "de": "20 Schlüssel zur Transformation Deiner Beziehung",
      "it": "20 chiavi per trasformare la tua coppia",
      "pt": "20 chaves para transformar o seu relacionamento",
      "nl": "20 sleutels om je relatie te transformeren",
      "ru": "20 ключей к трансформации ваших отношений",
      "tr": "İlişkinizi dönüştürecek 20 anahtar",
      "ar": "٢٠ مفتاحاً لتغيير علاقتكِ الزوجية"
    }
  },
  {
    "pageNumber": 2,
    "type": "preface",
    "author": "Lina Rela",
    "title": {
      "fr": "Préface",
      "en": "Preface",
      "es": "Prefacio",
      "de": "Vorwort",
      "it": "Prefazione",
      "pt": "Prefácio",
      "nl": "Voorwoord",
      "ru": "Предисловие",
      "tr": "Önsöz",
      "ar": "مقدمة"
    },
    "quote": {
      "fr": "Un amour qui ne se cultive pas est une fleur qui se fane",
      "en": "A love that is not cultivated is a flower that fades",
      "es": "Un amor que no se cultiva es una flor que se marchita",
      "de": "Eine Liebe, die nicht gepflegt wird, ist eine Blume, die verwelkt",
      "it": "Un amore che non si coltiva è un fiore che appassisce",
      "pt": "Um amor que não é cultivado é uma flor que murcha",
      "nl": "Een liefde die niet gekoesterd wordt is een bloem die verwelkt",
      "ru": "Любовь, которую не взращивают — это увядающий цветок",
      "tr": "Beslenmeyen aşk, solan bir çiçektir",
      "ar": "الحب الذي لا يُرعى هو زهرة تذبل"
    },
    "leftParagraphs": {
      "fr": [
        "Tu tiens entre tes mains un guide pas comme les autres.",
        "Ici, pas de leçons compliquées ni de discours moralisateurs. Cet eBook est une conversation entre femmes, une main tendue pour t’aider à mieux comprendre ce que veut dire être désirée, aimée et respectée sans te perdre dans le processus."
      ],
      "en": [
        "You hold in your hands a guide unlike any other.",
        "This eBook is a conversation between women, a helping hand to assist you in understanding what it means to be desired, loved, and respected."
      ],
      "es": [
        "Tienes en tus manos una guía diferente a todas las demás.",
        "Este eBook es una conversación entre mujeres, una mano extendida para ayudarte a comprender qué significa ser deseada, amada y respetada."
      ],
      "de": [
        "Du hältst einen Ratgeber wie keinen anderen in deinen Händen.",
        "Dieses eBook ist ein Gespräch unter Frauen, um dir zu helfen, besser zu verstehen, was es bedeutet, begehrt, geliebt und respektiert zu werden."
      ],
      "it": [
        "Tieni tra le mani una guida diversa da tutte le altre.",
        "Questo eBook è una conversazione tra donne, una mano tesa per aiutarti a capire meglio cosa significa essere desiderata, amata e rispettata."
      ],
      "pt": [
        "Tens nas tuas mãos um guia diferente de todos os outros.",
        "Este e-book é uma conversa entre mulheres, uma mão estendida para te ajudar a compreender o que significa ser desejada, amada e respeitada."
      ],
      "nl": [
        "Je hebt een gids in handen zoals geen ander.",
        "Dit e-book is een gesprek tussen vrouwen om je te helpen begrijpen wat het betekent om begeerd, geliefd en gerespecteerd te worden."
      ],
      "ru": [
        "Вы держите в руках уникальное руководство.",
        "Эта книга — разговор между женщинами, рука помощи, чтобы понять, что значит быть желанной, любимой и уважаемой."
      ],
      "tr": [
        "Elinizde eşsiz bir rehber tutuyorsunuz.",
        "Bu e-kitap, kadınlar arasında bir sohbet, kendinizi kaybetmeden arzulanmanın ne demek olduğunu anlamanız için bir yardım elidir."
      ],
      "ar": [
        "بين يديكِ دليل لا مثيل له.",
        "هذا الكتاب هو حوار بين النساء، ويد ممدودة لتساعدكِ على فهم معنى أن تكوني مرغوبة ومحبوبة ومحترمة."
      ]
    },
    "rightParagraphs": {
      "fr": [
        "Être désirée, ce n’est pas seulement plaire à ton homme, c’est te reconnecter à ton pouvoir féminin, à ton charme naturel et à cette confiance qui attire sans forcer.",
        "Beaucoup de femmes croient qu’il faut tout donner pour garder l’amour d’un homme, alors qu’en réalité, il s’attache davantage à celle qui sait se choisir d’abord.",
        "Les 20 clés que tu vas découvrir sont simples, vraies et puissantes.",
        "Elles t’aideront à raviver la flamme, à cultiver ton magnétisme, et surtout à te sentir épanouie dans ton couple.",
        "Page après page, tu apprendras à devenir cette femme sereine, confiante et irrésistible… celle qu’on n’oublie pas.",
        "Alors, installe-toi, respire profondément… et prépare-toi à redécouvrir l’art d’être désirée."
      ],
      "en": [
        "Being desired is not just about pleasing your man; it is reconnecting with your feminine power.",
        "The 20 keys you are about to discover are simple, authentic, and powerful.",
        "So sit back, take a deep breath... and get ready to rediscover the art of being desired."
      ],
      "es": [
        "Ser deseada no es solo gustar a tu hombre, es reconectarte con tu poder femenino.",
        "Las 20 claves que vas a descubrir son simples, reales y poderosas.",
        "Así que ponte cómoda, respira profundo… y prepárate para redescubrir el arte de ser deseada."
      ],
      "de": [
        "Begehrt zu werden bedeutet nicht nur, deinem Mann zu gefallen, sondern dich wieder mit deiner weiblichen Kraft zu verbinden.",
        "Die 20 Schlüssel sind einfach, wahr und kraftvoll.",
        "Mach es dir also gemütlich, atme tief durch… und bereite dich darauf vor, die Kunst des Begehrtwerdens neu zu entdecken."
      ],
      "it": [
        "Essere desiderata non significa solo piacere al tuo uomo, significa riconnetterti al tuo potere femminile.",
        "Le 20 chiavi che scoprirai sono semplici, autentiche e potenti.",
        "Quindi accomodati, fai un bel respiro profondo… e preparati a riscoprire l'arte di essere desiderata."
      ],
      "pt": [
        "Ser desejada não é apenas agradar ao teu homem, é reconetares-te com o teu poder feminino.",
        "As 20 chaves são simples, verdadeiras e poderosas.",
        "Acomoda-te, respira fundo… e prepara-te para redescoobrir a arte de ser desejada."
      ],
      "nl": [
        "Begeerd worden is niet alleen je man behagen, maar weer in verbinding staan met je vrouwelijke kracht.",
        "De 20 sleutels zijn eenvoudig, echt en krachtig.",
        "Ga er goed voor zitten en ontdek de kunst om begeerd te worden."
      ],
      "ru": [
        "Быть желанной — это не просто нравиться мужчине, это соединение со своей женской силой.",
        "20 ключей помогут вам разжечь страсть и почувствовать себя счастливой.",
        "Так что устраивайтесь поудобнее и приготовьтесь заново открыть для себя искусство быть желанной."
      ],
      "tr": [
        "Arzulanmak sadece erkeğinizi mutlu etmek değil, dişil gücünüzle yeniden bağ kurmaktır.",
        "Keşfedeceğiniz 20 anahtar basit, gerçek ve güçlüdür.",
        "Şimdi arkamıza yaslanın ve arzulanma sanatını yeniden keşfetmeye hazırlanın."
      ],
      "ar": [
        "أن تكوني مرغوبة ليس مجرد إرضاء لشريككِ، بل هو إعادة اتصال بقوتكِ الأنثوية.",
        "المفاتيح الـ٢٠ بسيطة وصادقة وقوية.",
        "لذا استريحي، وخذي نفساً عميقاً... واستعدي لإعادة اكتشاف فن أن تكوني مرغوبة."
      ]
    }
  },
  {
    "pageNumber": 3,
    "type": "toc",
    "title": {
      "fr": "Sommaire",
      "en": "Table of Contents",
      "es": "Índice",
      "de": "Inhaltsverzeichnis",
      "it": "Sommario",
      "pt": "Índice",
      "nl": "Inhoudsopgave",
      "ru": "Содержание",
      "tr": "İçindekiler",
      "ar": "الفهرس"
    },
    "tocItems": [
      {
        "keyNum": 1,
        "title": {
          "fr": "Te connaître et t’aimer",
          "en": "Know and Love Yourself",
          "es": "Conocerte y Amarte",
          "de": "Dich Selbst Kennen und Lieben",
          "it": "Conoscerti e Amarti",
          "pt": "Conhecer-te e Amar-te",
          "nl": "Ken en Hou van Jezelf",
          "ru": "Познать и Полюбить Себя",
          "tr": "Kendini Tanı ve Sev",
          "ar": "أن تعرفي نفسكِ وتُحبيها"
        }
      },
      {
        "keyNum": 2,
        "title": {
          "fr": "Cultiver ton indépendance",
          "en": "Cultivate Your Independence",
          "es": "Cultivar tu Independencia",
          "de": "Kultiviere Deine Unabhängigkeit",
          "it": "Coltivare la Tua Indipendenza",
          "pt": "Cultivar a Tua Independência",
          "nl": "Onafhankelijkheid Cultiveren",
          "ru": "Развивать Независимость",
          "tr": "Bağımsızlığını Geliştir",
          "ar": "تنمية استقلاليتكِ"
        }
      },
      {
        "keyNum": 3,
        "title": {
          "fr": "Le mystère maîtrisé",
          "en": "Mastered Mystery",
          "es": "El Misterio Dominado",
          "de": "Geheimnis Vollendet",
          "it": "Il Mistero Padroneggiato",
          "pt": "O Mistério Dominado",
          "nl": "Beheerst Mysterie",
          "ru": "Мастерство Тайны",
          "tr": "Gizemi Yönetmek",
          "ar": "إتقان الغموض"
        }
      },
      {
        "keyNum": 4,
        "title": {
          "fr": "Communication claire et séduisante",
          "en": "Clear and Seductive Communication",
          "es": "Comunicación Clara y Seductora",
          "de": "Klare und Verlockende Kommunikation",
          "it": "Comunicazione Chiara e Seducente",
          "pt": "Comunicação Clara e Sedutora",
          "nl": "Duidelijke en Verleidelijke Communicatie",
          "ru": "Четкое и Соблазнительное Общение",
          "tr": "Net ve Etkileyici İletişim",
          "ar": "تواصل واضح وجذاب"
        }
      },
      {
        "keyNum": 5,
        "title": {
          "fr": "Le pouvoir du regard et du toucher",
          "en": "The Power of Gaze and Touch",
          "es": "El Poder de la Mirada y del Tacto",
          "de": "Die Macht des Blicks und der Berührung",
          "it": "Il Potere dello Sguardo e del Tatto",
          "pt": "O Poder do Olhar e do Toque",
          "nl": "Kracht van Blik en Aanraking",
          "ru": "Сила Взгляда и Прикосновения",
          "tr": "Bakışın ve Dokunuşun Gücü",
          "ar": "قوة النظرة واللمسة"
        }
      },
      {
        "keyNum": 6,
        "title": {
          "fr": "Rituels matin/soir pour renforcer le lien",
          "en": "Morning/Evening Rituals to Strengthen Connection",
          "es": "Rituales Mañana/Noche para Reforzar el Vínculo",
          "de": "Morgen-/Abendrituale zur Stärkung der Bindung",
          "it": "Rituali Mattina/Sera per Rinforzare il Legame",
          "pt": "Rituais Manhã/Noite para Reforçar a Ligação",
          "nl": "Dagelijkse Rituelen om de Band te Versterken",
          "ru": "Утренние и Вечерние Ритуалы",
          "tr": "İlişkiyi Güçlendiren Günlük Ritüeller",
          "ar": "طقوس الصباح والمساء لتعزيز الرابط"
        }
      }
    ]
  },
  {
    "pageNumber": 4,
    "type": "toc",
    "title": {
      "fr": "Sommaire",
      "en": "Table of Contents",
      "es": "Índice",
      "de": "Inhaltsverzeichnis",
      "it": "Sommario",
      "pt": "Índice",
      "nl": "Inhoudsopgave",
      "ru": "Содержание",
      "tr": "İçindekiler",
      "ar": "الفهرس"
    },
    "tocItems": [
      {
        "keyNum": 7,
        "title": {
          "fr": "L’art du compliment stratégique",
          "en": "The Art of Strategic Compliments",
          "es": "El Arte del Cumplido Estratégico",
          "de": "Die Kunst des Strategischen Kompliments",
          "it": "L'Arte del Complimento Strategico",
          "pt": "A Arte do Elogio Estratégico",
          "nl": "Strategische Complimenten",
          "ru": "Стратегический Комплимент",
          "tr": "Stratejik İltifat Sanatı",
          "ar": "فن الإطراء الاستراتيجي"
        }
      },
      {
        "keyNum": 8,
        "title": {
          "fr": "Maintenir la passion sexuelle",
          "en": "Maintaining Sexual Passion",
          "es": "Mantener la Pasión Sexual",
          "de": "Sexuelle Leidenschaft Bewahren",
          "it": "Mantenere la Passione Sessuale",
          "pt": "Manter a Paixão Sexual",
          "nl": "Seksuele Passie Behouden",
          "ru": "Сохранять Сексуальную Страсть",
          "tr": "Cinsel Tutkuyu Korumak",
          "ar": "الحفاظ على الشغف"
        }
      },
      {
        "keyNum": 9,
        "title": {
          "fr": "Gérer les conflits avec classe",
          "en": "Managing Conflicts with Class",
          "es": "Manejar Conflictos con Clase",
          "de": "Konflikte mit Stil Lösen",
          "it": "Gestire i Conflitti con Classe",
          "pt": "Gerir Conflitos com Classe",
          "nl": "Conflictbeheersing met Klasse",
          "ru": "Управление Конфликтами с Классом",
          "tr": "Zarafetle Çatışma Yönetimi",
          "ar": "إدارة الخلافات برقي"
        }
      },
      {
        "keyNum": 10,
        "title": {
          "fr": "Savoir dire non sans culpabilité",
          "en": "Knowing How to Say No Without Guilt",
          "es": "Saber Decir No sin Culpabilidad",
          "de": "Nein Sagen Ohne Schuldgefühle",
          "it": "Saper Dire No Senza Senso di Colpa",
          "pt": "Saber Dizer Não sem Culpabilidade",
          "nl": "Nee Zeggen Zonder Schuldgevoel",
          "ru": "Уметь Говорить «Нет» Без Вины",
          "tr": "Suçluluk Duymadan Hayır Demek",
          "ar": "قول لا دون شعور بالذنب"
        }
      },
      {
        "keyNum": 11,
        "title": {
          "fr": "Créer des surprises mémorables",
          "en": "Creating Memorable Surprises",
          "es": "Crear Sorpresas Memorables",
          "de": "Unvergessliche Überraschungen Schaffen",
          "it": "Creare Sorprese Memorabili",
          "pt": "Criar Surpresas Memoráveis",
          "nl": "Gedenkwaardige Verrassingen",
          "ru": "Создание Незабываемых Сюрпризов",
          "tr": "Unutulmaz Sürprizler Oluşturmak",
          "ar": "صنع مفاجآت لا تُنسى"
        }
      },
      {
        "keyNum": 12,
        "title": {
          "fr": "Tes limites = ton charme",
          "en": "Your Boundaries = Your Charm",
          "es": "Tus Límites = Tu Encanto",
          "de": "Deine Grenzen = Dein Charme",
          "it": "I Tuoi Limiti = Il Tuo Fascino",
          "pt": "Os Teus Limites = O Teu Charme",
          "nl": "Je Grenzen = Je Charme",
          "ru": "Твои Границы = Твой Шарм",
          "tr": "Sınırların = Çekiciliğin",
          "ar": "حُدودكِ = سحركِ"
        }
      }
    ]
  },
  {
    "pageNumber": 5,
    "type": "toc",
    "title": {
      "fr": "Sommaire",
      "en": "Table of Contents",
      "es": "Índice",
      "de": "Inhaltsverzeichnis",
      "it": "Sommario",
      "pt": "Índice",
      "nl": "Inhoudsopgave",
      "ru": "Содержание",
      "tr": "İçindekiler",
      "ar": "الفهرس"
    },
    "tocItems": [
      {
        "keyNum": 13,
        "title": {
          "fr": "Le langage des petites attentions",
          "en": "The Language of Small Gestures",
          "es": "El Lenguaje de los Pequeños Detalles",
          "de": "Die Sprache der Kleinen Aufmerksamkeiten",
          "it": "Il Linguaggio delle Piccole Attenzioni",
          "pt": "O Linguagem das Pequenas Atenções",
          "nl": "Kleine Attenties",
          "ru": "Язык Мелочей и Внимания",
          "tr": "Küçük İlgi Dili",
          "ar": "لغة الاهتمامات الصغيرة"
        }
      },
      {
        "keyNum": 14,
        "title": {
          "fr": "Entretenir ta vie sociale",
          "en": "Nurturing Your Social Life",
          "es": "Mantener tu Vida Social",
          "de": "Dein Soziales Leben Pflegen",
          "it": "Mantenere la Tua Vita Sociale",
          "pt": "Cultivar a Tua Vida Social",
          "nl": "Sociaal Leven Koesteren",
          "ru": "Поддерживать Социальную Жизнь",
          "tr": "Sosyal Yaşamı Korumak",
          "ar": "الاهتمام بالحياة الاجتماعية"
        }
      },
      {
        "keyNum": 15,
        "title": {
          "fr": "La confiance financière et émotionnelle",
          "en": "Financial and Emotional Confidence",
          "es": "La Confianza Financiera y Emocional",
          "de": "Finanzielles und Emotionales Vertrauen",
          "it": "La Fiducia Finanziaria ed Emozionale",
          "pt": "A Confiança Financeira e Emocional",
          "nl": "Financiële & Emotionele Zekerheid",
          "ru": "Финансовая и Эмоциональная Уверенность",
          "tr": "Finansal ve Duygusal Özgüven",
          "ar": "الثقة المالية والعاطفية"
        }
      },
      {
        "keyNum": 16,
        "title": {
          "fr": "Mise en valeur vestimentaire subtile",
          "en": "Subtle Style Enhancement",
          "es": "Realce Vestimentario Sutil",
          "de": "Subtile Stilvolle Hervorhebung",
          "it": "Valorizzazione dell'Abbigliamento Subdola",
          "pt": "Valorização do Estilo Subtil",
          "nl": "Subtiele Kledingstijl",
          "ru": "Утонченный Стиль в Одежде",
          "tr": "Zarif Giyim Tarzı",
          "ar": "إبراز الأناقة بذكاء"
        }
      },
      {
        "keyNum": 17,
        "title": {
          "fr": "Écouter activement et garder l’attention",
          "en": "Active Listening and Keeping Attention",
          "es": "Escuchar Activamente y Mantener la Atención",
          "de": "Aktives Zuhören und Aufmerksam Bleiben",
          "it": "Ascoltare Attivamente e Mantenere l'Attenzione",
          "pt": "Escuta Ativa e Manter a Atenção",
          "nl": "Actief Luisteren en Aandacht Houden",
          "ru": "Активное Слушание и Удержание Внимания",
          "tr": "Etkin Dinleme ve İlgiyi Canlı Tutmak",
          "ar": "الاستماع الفعال وجذب الانتباه"
        }
      },
      {
        "keyNum": 18,
        "title": {
          "fr": "Réinventer les rendez-vous amoureux",
          "en": "Reinventing Date Nights",
          "es": "Reinventar las Citas Románticas",
          "de": "Dates Neu Erfinden",
          "it": "Rinverdire gli Appuntamenti Romantici",
          "pt": "Reinventar Encontros Românticos",
          "nl": "Dates Herontdekken",
          "ru": "Переосмысление Романтических Свиданий",
          "tr": "Buluşmaları Yeniden Keşfetmek",
          "ar": "تجديد المواعيد الغرامية"
        }
      }
    ]
  },
  {
    "pageNumber": 6,
    "type": "toc",
    "title": {
      "fr": "Sommaire",
      "en": "Table of Contents",
      "es": "Índice",
      "de": "Inhaltsverzeichnis",
      "it": "Sommario",
      "pt": "Índice",
      "nl": "Inhoudsopgave",
      "ru": "Содержание",
      "tr": "İçindekiler",
      "ar": "الفهرس"
    },
    "tocItems": [
      {
        "keyNum": 19,
        "title": {
          "fr": "Le pardon qui protège la relation",
          "en": "Forgiveness that Protects the Relationship",
          "es": "El Perdón que Protege la Relación",
          "de": "Vergebung, Die die Beziehung Schützt",
          "it": "Il Perdono che Protegge la Relazione",
          "pt": "O Perdão que Protege a Relação",
          "nl": "Vergeving die de Relatie Beschermt",
          "ru": "Прощение, Защищающее Отношения",
          "tr": "İlişkiyi Koruyan Bağışlama",
          "ar": "المغفرة التي تحمي العلاقة"
        }
      },
      {
        "keyNum": 20,
        "title": {
          "fr": "Devenir irremplaçable sans te perdre",
          "en": "Becoming Irreplaceable Without Losing Yourself",
          "es": "Volverte Irremplazable sin Perderte",
          "de": "Unersetzlich Werden Ohne Dich zu Verlieren",
          "it": "Diventare Insostituibile Senza Perderti",
          "pt": "Tornar-te Irsubstituível sem te Perderes",
          "nl": "Onvervangbaar Worden Zonder Je te Verliezen",
          "ru": "Стать Незаменимой, Не Теряя Себя",
          "tr": "Kendini Kaybetmeden Vazgeçilmez Olmak",
          "ar": "أن تصبحي لا تُعوضين دون أن تفقدي ذاتكِ"
        }
      }
    ]
  },
  {
    "pageNumber": 7,
    "type": "intro",
    "title": {
      "fr": "Introduction",
      "en": "Introduction",
      "es": "Introducción",
      "de": "Einleitung",
      "it": "Introduzione",
      "pt": "Introdução",
      "nl": "Inleiding",
      "ru": "Введение",
      "tr": "Giriş",
      "ar": "مقدمة"
    },
    "paragraphs": {
      "fr": [
        "Aimer, c’est facile.",
        "Mais rester désirée, comprise et valorisée dans le temps, c’est un art.",
        "Un art que peu de femmes apprennent vraiment, et pourtant, c’est lui qui change tout dans une relation.",
        "Cet ebook est né d’un constat simple : trop de femmes donnent tout, sans toujours savoir comment préserver leur mystère, leur force, leur essence.",
        "Elles confondent aimer et se perdre, séduire et s’oublier."
      ],
      "en": [
        "Loving is easy. But remaining desired, understood, and valued over time is an art.",
        "An art that few women truly learn, and yet it is what changes everything in a relationship.",
        "This eBook was born from a simple observation: too many women give everything without knowing how to preserve their mystery."
      ],
      "es": [
        "Amar es fácil. Pero seguir siendo deseada, comprendida y valorada con el tiempo es un arte.",
        "Un arte que pocas mujeres aprenden realmente y que lo cambia todo en una relación."
      ],
      "de": [
        "Lieben ist einfach. Aber begehrt, verstanden und geschätzt zu bleiben ist eine Kunst.",
        "Eine Kunst, die nur wenige Frauen wirklich lernen, und doch verändert sie alles."
      ],
      "it": [
        "Amare è facile. Ma rimanere desiderata, compresa e valorizzata nel tempo è un'arte.",
        "Un'arte che poche donne imparano davvero, eppure è quella che cambia tutto."
      ],
      "pt": [
        "Amar é fácil. Mas continuar a ser desejada, compreendida e valorizada é uma arte.",
        "Uma arte que poucas mulheres aprendem de verdade."
      ],
      "nl": [
        "Liefhebben is eenvoudig. Maar begeerd, begrepen en gewaardeerd blijven is een kunst.",
        "Een kunst die weinig vrouwen leren."
      ],
      "ru": [
        "Любить просто. Но оставаться желанной, понятой и ценимой со временем — это искусство.",
        "Искусство, которому мало кто учится."
      ],
      "tr": [
        "Sevmek kolaydır. Ancak zamanla arzulanmak, anlaşılmak ve değer görmek bir sanattır.",
        "Pek az kadının öğrendiği bir sanat."
      ],
      "ar": [
        "الحب سهل. ولكن أن تظلي مرغوبة ومفهومة ومقدرة مع مرور الوقت هو فن.",
        "فنٌ تكتشفه قليل من النساء."
      ]
    }
  },
  {
    "pageNumber": 8,
    "type": "intro",
    "title": {
      "fr": "Introduction",
      "en": "Introduction",
      "es": "Introducción",
      "de": "Einleitung",
      "it": "Introduzione",
      "pt": "Introdução",
      "nl": "Inleiding",
      "ru": "Введение",
      "tr": "Giriş",
      "ar": "مقدمة"
    },
    "paragraphs": {
      "fr": [
        "L’art d’être désirée n’est pas un guide de manipulation ou de jeux amoureux.",
        "C’est une invitation à te recentrer sur toi, à comprendre les dynamiques de ton couple, et à retrouver ton pouvoir féminin — celui qui attire naturally, sans forcer.",
        "À travers 20 clés concrètes et subtiles, tu vas apprendre à cultiver ton indépendance, ton charme, ta confiance et ta paix intérieure.",
        "Parce qu’une femme désirée n’est pas celle qu’on regarde le plus… C’est celle qu’on n’oublie jamais.",
        "Prépare-toi à redécouvrir la femme que tu es, et à faire renaître la magie dans ton couple — avec élégance, douceur et puissance."
      ],
      "en": [
        "The art of being desired is not a guide to manipulation or relationship games.",
        "It is an invitation to refocus on yourself, to understand couple dynamics, and to rediscover your feminine power.",
        "Through 20 concrete and subtle keys, you will learn to cultivate your independence, charm, confidence, and inner peace."
      ],
      "es": [
        "El arte de ser deseada no es una guía de manipulación ni de juegos amorosos.",
        "Es una invitación a volverte a centrar en ti, a comprender las dinámicas de pareja.",
        "A través de 20 claves concretas y sutiles, aprenderás a cultivar tu independencia."
      ],
      "de": [
        "Die Kunst des Begehrtwerdens ist kein Leitfaden zur Manipulation.",
        "Es ist eine Einladung, dich wieder auf dich selbst zu konzentrieren.",
        "Durch 20 konkrete Schlüssel lernst du, deine Unabhängigkeit zu kultivieren."
      ],
      "it": [
        "L'arte di essere desiderata non è una guida alla manipolazione.",
        "È un invito a ricentrarti su te stessa e comprendere le dinamiche di coppia.",
        "Attraverso 20 chiavi concrete e sottili, imparerai a coltivare la tua indipendenza."
      ],
      "pt": [
        "A arte de ser desejada não é um guia de manipulação.",
        "É um convite a focares-te em ti e a compreenderes as dinâmicas de casal.",
        "Através de 20 chaves concretas, aprenderás a cultivar a tua independência."
      ],
      "nl": [
        "De kunst om begeerd te worden is geen gids voor manipulatie.",
        "Het is een uitnodiging om je weer op jezelf te richten.",
        "Via 20 concrete sleutels leer je je onafhankelijkheid te versterken."
      ],
      "ru": [
        "Искусство быть желанной — это не руководство по манипуляциям.",
        "Это приглашение сосредоточиться на себе и понять динамику отношений.",
        "С помощью 20 конкретных ключей вы научитесь развивать независимость."
      ],
      "tr": [
        "Arzulanma sanat bir manipülasyon rehberi değildir.",
        "Kendinize odaklanmanız ve ilişki dinamiklerini anlamanız için bir davettir.",
        "20 somut anahtar aracılığıyla bağımsızlığınızı geliştirmeyi öğreneceksiniz."
      ],
      "ar": [
        "فن أن تكوني مرغوبة ليس دليلاً للمناورة أو الألعاب.",
        "بل هو دعوة لإعادة التركيز على نفسكِ وفهم ديناميكيات العلاقة.",
        "عبر ٢٠ مفتاحاً عملياً، ستتعلمين كيفية تنمية استقلاليتكِ."
      ]
    }
  },
  {
    "pageNumber": 9,
    "type": "key",
    "keyNumber": 1,
    "title": {
      "fr": "Clé 1 : Te connaître et t’aimer",
      "en": "Key 1 : Know and Love Yourself",
      "es": "Clave 1 : Conocerte y Amarte",
      "de": "Schlüssel 1 : Dich Selbst Kennen und Lieben",
      "it": "Chiave 1 : Conoscerti e Amarti",
      "pt": "Chave 1 : Conhecer-te e Amar-te",
      "nl": "Sleutel 1 : Ken en Hou van Jezelf",
      "ru": "Ключ 1 : Познать и Полюбить Себя",
      "tr": "Anahtar 1 : Kendini Tanı ve Sev",
      "ar": "المفتاح 1 : أن تعرفي نفسكِ وتُحبيها"
    },
    "paragraphs": {
      "fr": [
        "Te connaître et t’aimer Avant de séduire un homme, tu dois d’abord te séduire toi-même. C’est là que tout commence : dans la manière dont tu te regardes, dont tu parles de toi, dont tu t’accordes de la valeur. Une femme qui se connaît et s’aime profondément dégage une énergie magnétique. Elle n’a pas besoin d’en faire trop, car elle sait déjà qu’elle est suffisante. Prends le temps d’apprendre à te comprendre : ce que tu aimes, ce que tu refuses, ce qui te fait vibrer. Plus tu t’écoutes, plus tu découvres ta vraie force.",
        "Et cette force devient ton charme le plus puissant. Aime-toi dans tes imperfections, dans tes moments de doute, dans tes réussites aussi. Car l’amour que tu te portes trace la manière dont les autres t’aimeront. Tu veux être respectée, désirée, chérie ? Alors commence par te traiter comme une femme précieuse. Souviens-toi : l’amour de soi, ce n’est pas de l’arrogance. C’est un acte de respect envers la femme que tu es, et la première étape pour devenir celle qu’on ne remplace jamais."
      ],
      "en": [
        "By applying key 1 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 1 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 1 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 1 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 1 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 1 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 1 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "1. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 1 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 10,
    "type": "key",
    "keyNumber": 1,
    "title": {
      "fr": "Clé 1 : Te connaître et t’aimer (Suite)",
      "en": "Key 1 : Know and Love Yourself (Cont.)",
      "es": "Clave 1 : Conocerte y Amarte (Cont.)",
      "de": "Schlüssel 1 : Dich Selbst Kennen und Lieben (Forts.)",
      "it": "Chiave 1 : Conoscerti e Amarti (Cont.)",
      "pt": "Chave 1 : Conhecer-te e Amar-te (Cont.)",
      "nl": "Sleutel 1 : Ken en Hou van Jezelf (Vervolg)",
      "ru": "Ключ 1 : Познать и Полюбить Себя (Продолжение)",
      "tr": "Anahtar 1 : Kendini Tanı ve Sev (Devam)",
      "ar": "المفتاح 1 : أن تعرفي نفسكِ وتُحبيها (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "ton indépendance Une femme indépendante attire naturellement le respect et le désir. Pourquoi ? Parce qu’elle ne cherche pas à exister à travers un homme, elle existe avec lui, pas grâce à lui. Ton indépendance, c’est ton pouvoir silencieux, ta liberté intérieure, ta preuve que tu peux être complète même quand tu aimes. Cultiver ton indépendance ne veut pas dire te fermer à l’amour ou jouer la femme froide.",
        "C’est savoir que ton bonheur ne dépend pas entièrement de lui, que tu as ta propre vie, tes passions, tes objectifs. Et paradoxalement, c’est cette autonomie qui rend une relation encore plus forte, plus saine et plus excitante. Fais des choses pour toi : sort seule, apprends, crée, rêve, avance. Sois cette femme qui inspire, qui a une vie qu’on a envie de découvrir. Parce qu’un homme ne s’attache pas à une femme “collée” à lui, mais à une femme qui l’émerveille par son monde intérieur."
      ],
      "en": [
        "By applying key 1 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 1 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 1 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 1 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 1 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 1 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 1 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "1. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 1 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 11,
    "type": "key",
    "keyNumber": 2,
    "title": {
      "fr": "Clé 2 : Cultiver ton indépendance",
      "en": "Key 2 : Cultivate Your Independence",
      "es": "Clave 2 : Cultivar tu Independencia",
      "de": "Schlüssel 2 : Kultiviere Deine Unabhängigkeit",
      "it": "Chiave 2 : Coltivare la Tua Indipendenza",
      "pt": "Chave 2 : Cultivar a Tua Independência",
      "nl": "Sleutel 2 : Onafhankelijkheid Cultiveren",
      "ru": "Ключ 2 : Развивать Независимость",
      "tr": "Anahtar 2 : Bağımsızlığını Geliştir",
      "ar": "المفتاح 2 : تنمية استقلاليتكِ"
    },
    "paragraphs": {
      "fr": [
        "Rappelle-toi : ton indépendance n’éloigne pas l’amour. Elle le rend plus vrai, plus profond et plus durable."
      ],
      "en": [
        "By applying key 2 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 2 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 2 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 2 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 2 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 2 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 2 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "2. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 2 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 12,
    "type": "key",
    "keyNumber": 2,
    "title": {
      "fr": "Clé 2 : Cultiver ton indépendance (Suite)",
      "en": "Key 2 : Cultivate Your Independence (Cont.)",
      "es": "Clave 2 : Cultivar tu Independencia (Cont.)",
      "de": "Schlüssel 2 : Kultiviere Deine Unabhängigkeit (Forts.)",
      "it": "Chiave 2 : Coltivare la Tua Indipendenza (Cont.)",
      "pt": "Chave 2 : Cultivar a Tua Independência (Cont.)",
      "nl": "Sleutel 2 : Onafhankelijkheid Cultiveren (Vervolg)",
      "ru": "Ключ 2 : Развивать Независимость (Продолжение)",
      "tr": "Anahtar 2 : Bağımsızlığını Geliştir (Devam)",
      "ar": "المفتاح 2 : تنمية استقلاليتكِ (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Le mystère, c’est l’art subtil de ne pas tout montrer tout de suite. Une femme qui garde une part d’inconnu attise la curiosité et maintient le désir. Tu n’as pas besoin d’être distante ou de jouer un rôle, mais simplement de laisser à ton homme l’envie d’en découvrir plus. Dans une époque où tout se dit, tout se montre et tout s’explique, le charme réside justement dans ce que tu choisis de taire.",
        "Ne dévoile pas chaque pensée, chaque émotion, chaque projet. Garde un peu de toi, un espace secret qui t’appartient. C’est là que ton pouvoir grandit. maîtrisé."
      ],
      "en": [
        "By applying key 2 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 2 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 2 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 2 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 2 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 2 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 2 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "2. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 2 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 13,
    "type": "key",
    "keyNumber": 3,
    "title": {
      "fr": "Clé 3 : Le mystère maîtrisé",
      "en": "Key 3 : Mastered Mystery",
      "es": "Clave 3 : El Misterio Dominado",
      "de": "Schlüssel 3 : Geheimnis Vollendet",
      "it": "Chiave 3 : Il Mistero Padroneggiato",
      "pt": "Chave 3 : O Mistério Dominado",
      "nl": "Sleutel 3 : Beheerst Mysterie",
      "ru": "Ключ 3 : Мастерство Тайны",
      "tr": "Anahtar 3 : Gizemi Yönetmek",
      "ar": "المفتاح 3 : إتقان الغموض"
    },
    "paragraphs": {
      "fr": [
        "Le mystère maîtrisé, ce n’est pas le silence ou le mensonge, c’est la maîtrise de ton énergie : tu partages avec douceur, tu restes ouverte, mais tu ne donnes pas tout d’un coup. Et crois-moi, c’est cette touche de retenue qui fait qu’on pense à toi même quand tu n’es pas là. Sois comme un livre fascinant : chaque page qu’on tourne donne envie de lire la suivante, sans jamais tout révéler d’un seul coup."
      ],
      "en": [
        "By applying key 3 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 3 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 3 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 3 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 3 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 3 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 3 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "3. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 3 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 14,
    "type": "key",
    "keyNumber": 3,
    "title": {
      "fr": "Clé 3 : Le mystère maîtrisé (Suite)",
      "en": "Key 3 : Mastered Mystery (Cont.)",
      "es": "Clave 3 : El Misterio Dominado (Cont.)",
      "de": "Schlüssel 3 : Geheimnis Vollendet (Forts.)",
      "it": "Chiave 3 : Il Mistero Padroneggiato (Cont.)",
      "pt": "Chave 3 : O Mistério Dominado (Cont.)",
      "nl": "Sleutel 3 : Beheerst Mysterie (Vervolg)",
      "ru": "Ключ 3 : Мастерство Тайны (Продолжение)",
      "tr": "Anahtar 3 : Gizemi Yönetmek (Devam)",
      "ar": "المفتاح 3 : إتقان الغموض (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Communication claire et séduisante La manière dont tu parles à ton homme influence directement ce qu’il ressent pour toi. Une communication claire, c’est savoir exprimer tes besoins sans crier, sans bouder, sans deviner à sa place. C’est parler avec douceur, confiance et authenticité. Les hommes ne lisent pas dans les pensées — mais ils écoutent vraiment quand tu sais te faire comprendre avec élégance. Être claire, ce n’est pas être froide.",
        "C’est oser dire ce que tu veux, ce que tu ressens, sans tourner autour du pot. Et c’est justement cette sincérité calme qui fait de toi une femme apaisante, différente, irrésistible. Mais ajoute toujours une touche de séduction à tes mots : un regard qui parle, un sourire complice, un ton de voix doux… Parce que la communication, ce n’est pas que des phrases — c’est une énergie. Quand tu exprimes ton amour, ta joie ou même ton désaccord avec grâce, tu ne perds jamais ton charme. Souviens-toi : les mots peuvent blesser ou rapprocher. Alors choisis-les avec conscience et sensualité, et ton couple vibrera à chaque conversation."
      ],
      "en": [
        "By applying key 3 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 3 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 3 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 3 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 3 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 3 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 3 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "3. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 3 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 15,
    "type": "key",
    "keyNumber": 4,
    "title": {
      "fr": "Clé 4 : Communication claire et séduisante",
      "en": "Key 4 : Clear and Seductive Communication",
      "es": "Clave 4 : Comunicación Clara y Seductora",
      "de": "Schlüssel 4 : Klare und Verlockende Kommunikation",
      "it": "Chiave 4 : Comunicazione Chiara e Seducente",
      "pt": "Chave 4 : Comunicação Clara e Sedutora",
      "nl": "Sleutel 4 : Duidelijke en Verleidelijke Communicatie",
      "ru": "Ключ 4 : Четкое и Соблазнительное Общение",
      "tr": "Anahtar 4 : Net ve Etkileyici İletişim",
      "ar": "المفتاح 4 : تواصل واضح وجذاب"
    },
    "paragraphs": {
      "fr": [
        "Le regard et le toucher parlent une langue que les mots ne traduiront jamais. Un simple échange d’yeux peut rallumer une flamme, calmer une tension ou créer une connexion profonde. Ton regard, c’est ton arme la plus subtile : il peut être tendre, espiègle, ou mystérieux… mais toujours sincère.",
        "Quand tu regardes ton homme avec une vraie attention, il se sent vu, choisi, valorisé. Et c’est ce sentiment-là qui le fait s’attacher encore plus fort. Apprends à soutenir son regard sans détourner les yeux, à sourire légèrement quand il te parle, à laisser ton énergie féminine s’exprimer sans un mot. regard et du toucher."
      ],
      "en": [
        "By applying key 4 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 4 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 4 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 4 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 4 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 4 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 4 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "4. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 4 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 16,
    "type": "key",
    "keyNumber": 4,
    "title": {
      "fr": "Clé 4 : Communication claire et séduisante (Suite)",
      "en": "Key 4 : Clear and Seductive Communication (Cont.)",
      "es": "Clave 4 : Comunicación Clara y Seductora (Cont.)",
      "de": "Schlüssel 4 : Klare und Verlockende Kommunikation (Forts.)",
      "it": "Chiave 4 : Comunicazione Chiara e Seducente (Cont.)",
      "pt": "Chave 4 : Comunicação Clara e Sedutora (Cont.)",
      "nl": "Sleutel 4 : Duidelijke en Verleidelijke Communicatie (Vervolg)",
      "ru": "Ключ 4 : Четкое и Соблазнительное Общение (Продолжение)",
      "tr": "Anahtar 4 : Net ve Etkileyici İletişim (Devam)",
      "ar": "المفتاح 4 : تواصل واضح وجذاب (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Et puis, il y a le toucher. Une main posée sur son bras, un effleurement dans la nuque, une caresse spontanée… Ces gestes simples créent une proximité émotionnelle que mille mots n’auraient pas pu construire.",
        "Le secret, c’est la présence. Quand ton regard et ton toucher disent “je suis là, vraiment là”, il n’a plus besoin de chercher ailleurs : il est déjà conquis."
      ],
      "en": [
        "By applying key 4 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 4 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 4 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 4 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 4 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 4 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 4 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "4. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 4 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 17,
    "type": "key",
    "keyNumber": 5,
    "title": {
      "fr": "Clé 5 : Le pouvoir du regard et du toucher",
      "en": "Key 5 : The Power of Gaze and Touch",
      "es": "Clave 5 : El Poder de la Mirada y del Tacto",
      "de": "Schlüssel 5 : Die Macht des Blicks und der Berührung",
      "it": "Chiave 5 : Il Potere dello Sguardo e del Tatto",
      "pt": "Chave 5 : O Poder do Olhar e do Toque",
      "nl": "Sleutel 5 : Kracht van Blik en Aanraking",
      "ru": "Ключ 5 : Сила Взгляда и Прикосновения",
      "tr": "Anahtar 5 : Bakışın ve Dokunuşun Gücü",
      "ar": "المفتاح 5 : قوة النظرة واللمسة"
    },
    "paragraphs": {
      "fr": [
        "matin/soir pour renforcer le lien Les petites habitudes créent les grandes relations. Les rituels du matin et du soir, ce sont ces moments simples mais puissants qui entretiennent la complicité au quotidien. Ce n’est pas forcément un grand geste, mais une présence intentionnelle : un mot doux, un message, un regard avant de dormir… Le matin, commence la journée avec une énergie positive entre vous. Un câlin, un sourire, une phrase encourageante, un message qui dit “je pense à toi”. Ces gestes légers posent le ton de la journée et rappellent à ton homme qu’il a une place spéciale dans ton cœur.",
        "Le soir, fais de la reconnexion un rituel sacré. Même fatigués, prenez quelques minutes pour parler, rire, ou simplement vous retrouver dans les bras l’un de l’autre. C’est dans ces moments de tendresse que le lien se renforce, que la confiance se construit. Souviens-toi : l’amour ne se nourrit pas seulement de grands événements, mais de ces petits instants répétés chaque jour — ceux qui disent sans mot : “tu comptes pour moi. ” 05."
      ],
      "en": [
        "By applying key 5 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 5 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 5 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 5 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 5 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 5 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 5 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "5. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 5 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 18,
    "type": "key",
    "keyNumber": 5,
    "title": {
      "fr": "Clé 5 : Le pouvoir du regard et du toucher (Suite)",
      "en": "Key 5 : The Power of Gaze and Touch (Cont.)",
      "es": "Clave 5 : El Poder de la Mirada y del Tacto (Cont.)",
      "de": "Schlüssel 5 : Die Macht des Blicks und der Berührung (Forts.)",
      "it": "Chiave 5 : Il Potere dello Sguardo e del Tatto (Cont.)",
      "pt": "Chave 5 : O Poder do Olhar e do Toque (Cont.)",
      "nl": "Sleutel 5 : Kracht van Blik en Aanraking (Vervolg)",
      "ru": "Ключ 5 : Сила Взгляда и Прикосновения (Продолжение)",
      "tr": "Anahtar 5 : Bakışın ve Dokunuşun Gücü (Devam)",
      "ar": "المفتاح 5 : قوة النظرة واللمسة (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "compliment stratégique Un compliment bien placé peut avoir plus de pouvoir qu’un long discours. Les hommes adorent être valorisés, mais ils sont rarement complimentés avec sincérité. C’est pour ça qu’un mot doux, dit au bon moment, peut marquer son esprit et renforcer son attachement. L’art du compliment stratégique, c’est savoir dire ce qu’il a besoin d’entendre, pas juste ce qu’il veut. Parle-lui de son attitude, de ses efforts, de ce que tu admires chez lui. Un “j’aime quand tu prends les choses en main” ou “j’adore quand tu me regardes comme ça” vaut mille fois plus qu’un simple “t’es beau” Sois précise, sincère et naturelle.",
        "Évite d’en faire trop, car l’excès enlève la magie. Un vrai compliment, c’est une dose subtile d’admiration et de gratitude, glissée avec ton sourire. Et n’oublie pas : les compliments fonctionnent dans les deux sens. Plus tu donnes de reconnaissance, plus tu en recevras. Un homme qui se sent valorisé devient naturellement plus attentionné, plus tendre, plus investi. Alors, use de cette arme douce avec élégance — et regarde ton couple s’épanouir."
      ],
      "en": [
        "By applying key 5 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 5 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 5 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 5 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 5 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 5 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 5 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "5. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 5 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 19,
    "type": "key",
    "keyNumber": 6,
    "title": {
      "fr": "Clé 6 : Rituels matin/soir pour renforcer le lien",
      "en": "Key 6 : Morning/Evening Rituals to Strengthen Connection",
      "es": "Clave 6 : Rituales Mañana/Noche para Reforzar el Vínculo",
      "de": "Schlüssel 6 : Morgen-/Abendrituale zur Stärkung der Bindung",
      "it": "Chiave 6 : Rituali Mattina/Sera per Rinforzare il Legame",
      "pt": "Chave 6 : Rituais Manhã/Noite para Reforçar a Ligação",
      "nl": "Sleutel 6 : Dagelijkse Rituelen om de Band te Versterken",
      "ru": "Ключ 6 : Утренние и Вечерние Ритуалы",
      "tr": "Anahtar 6 : İlişkiyi Güçlendiren Günlük Ritüeller",
      "ar": "المفتاح 6 : طقوس الصباح والمساء لتعزيز الرابط"
    },
    "paragraphs": {
      "fr": [
        "la passion sexuelle La passion ne disparaît pas avec le temps… elle s’endort quand on cesse de la nourrir. Entretenir la flamme, c’est refuser que la routine prenne toute la place. La sensualité n’est pas qu’un acte, c’est une énergie vivante que tu peux faire vibrer au quotidien.",
        "Prends soin de ton corps, de ton allure, de ton parfum, de ta confiance. Pas pour séduire quelqu’un d’autre, mais pour rester connectée à ton pouvoir féminin. Une femme qui se sent belle rayonne une énergie irrésistible, sans effort."
      ],
      "en": [
        "By applying key 6 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 6 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 6 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 6 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 6 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 6 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 6 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "6. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 6 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 20,
    "type": "key",
    "keyNumber": 6,
    "title": {
      "fr": "Clé 6 : Rituels matin/soir pour renforcer le lien (Suite)",
      "en": "Key 6 : Morning/Evening Rituals to Strengthen Connection (Cont.)",
      "es": "Clave 6 : Rituales Mañana/Noche para Reforzar el Vínculo (Cont.)",
      "de": "Schlüssel 6 : Morgen-/Abendrituale zur Stärkung der Bindung (Forts.)",
      "it": "Chiave 6 : Rituali Mattina/Sera per Rinforzare il Legame (Cont.)",
      "pt": "Chave 6 : Rituais Manhã/Noite para Reforçar a Ligação (Cont.)",
      "nl": "Sleutel 6 : Dagelijkse Rituelen om de Band te Versterken (Vervolg)",
      "ru": "Ключ 6 : Утренние и Вечерние Ритуалы (Продолжение)",
      "tr": "Anahtar 6 : İlişkiyi Güçlendiren Günlük Ritüeller (Devam)",
      "ar": "المفتاح 6 : طقوس الصباح والمساء لتعزيز الرابط (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Dans l’intimité, ose la nouveauté : change d’ambiance, surprends-le, fais de ton espace un lieu de plaisir et de connexion. La passion se nourrit de curiosité et de jeu — pas de perfection.",
        "Regarde-le dans les yeux, souris, guide, écoute… le désir, c’est aussi une conversation silencieuse. Souviens-toi : la sexualité épanouie, c’est celle où les deux se sentent libres, en confiance et désirés. Quand tu t’autorises à vivre ton plaisir pleinement, tu lui montres que tu es non seulement son amour… mais aussi sa plus belle tentation."
      ],
      "en": [
        "By applying key 6 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 6 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 6 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 6 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 6 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 6 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 6 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "6. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 6 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 21,
    "type": "key",
    "keyNumber": 7,
    "title": {
      "fr": "Clé 7 : L’art du compliment stratégique",
      "en": "Key 7 : The Art of Strategic Compliments",
      "es": "Clave 7 : El Arte del Cumplido Estratégico",
      "de": "Schlüssel 7 : Die Kunst des Strategischen Kompliments",
      "it": "Chiave 7 : L'Arte del Complimento Strategico",
      "pt": "Chave 7 : A Arte do Elogio Estratégico",
      "nl": "Sleutel 7 : Strategische Complimenten",
      "ru": "Ключ 7 : Стратегический Комплимент",
      "tr": "Anahtar 7 : Stratejik İltifat Sanatı",
      "ar": "المفتاح 7 : فن الإطراء الاستراتيجي"
    },
    "paragraphs": {
      "fr": [
        "Aucun couple n’échappe aux désaccords. Mais ce qui fait la différence, ce n’est pas l’absence de conflit, c’est la manière de les traverser. Gérer une tension avec calme et élégance, c’est prouver ta maturité émotionnelle — et croyez-le, ça impressionne bien plus qu’une crise de colère. Quand quelque chose te blesse, respire avant de réagir.",
        "Ne parle pas pour blesser, parle pour te faire comprendre. Utilise le “je ressens” plutôt que le “tu fais toujours” — ça change tout. Les reproches ferment les cœurs, mais la vulnérabilité sincère les ouvre. conflits avec classe."
      ],
      "en": [
        "By applying key 7 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 7 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 7 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 7 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 7 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 7 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 7 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "7. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 7 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 22,
    "type": "key",
    "keyNumber": 7,
    "title": {
      "fr": "Clé 7 : L’art du compliment stratégique (Suite)",
      "en": "Key 7 : The Art of Strategic Compliments (Cont.)",
      "es": "Clave 7 : El Arte del Cumplido Estratégico (Cont.)",
      "de": "Schlüssel 7 : Die Kunst des Strategischen Kompliments (Forts.)",
      "it": "Chiave 7 : L'Arte del Complimento Strategico (Cont.)",
      "pt": "Chave 7 : A Arte do Elogio Estratégico (Cont.)",
      "nl": "Sleutel 7 : Strategische Complimenten (Vervolg)",
      "ru": "Ключ 7 : Стратегический Комплимент (Продолжение)",
      "tr": "Anahtar 7 : Stratejik İltifat Sanatı (Devam)",
      "ar": "المفتاح 7 : فن الإطراء الاستراتيجي (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Et surtout, ne te rabaisse jamais pour avoir raison. La classe, c’est savoir choisir la paix sans se soumettre. C’est poser ses limites avec douceur, exprimer sa déception sans crier.",
        "Un ton calme, un regard franc, une parole posée : voilà ton vrai pouvoir. Souviens-toi : le but n’est pas de gagner contre lui, mais de gagner ensemble contre le malentendu. Un conflit bien géré peut même renforcer votre lien… quand l’amour reste plus fort que l’ego."
      ],
      "en": [
        "By applying key 7 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 7 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 7 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 7 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 7 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 7 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 7 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "7. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 7 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 23,
    "type": "key",
    "keyNumber": 8,
    "title": {
      "fr": "Clé 8 : Maintenir la passion sexuelle",
      "en": "Key 8 : Maintaining Sexual Passion",
      "es": "Clave 8 : Mantener la Pasión Sexual",
      "de": "Schlüssel 8 : Sexuelle Leidenschaft Bewahren",
      "it": "Chiave 8 : Mantenere la Passione Sessuale",
      "pt": "Chave 8 : Manter a Paixão Sexual",
      "nl": "Sleutel 8 : Seksuele Passie Behouden",
      "ru": "Ключ 8 : Сохранять Сексуальную Страсть",
      "tr": "Anahtar 8 : Cinsel Tutkuyu Korumak",
      "ar": "المفتاح 8 : الحفاظ على الشغف"
    },
    "paragraphs": {
      "fr": [
        "Dire “non” ne fait pas de toi une femme dure ou égoïste. Au contraire, c’est une preuve d’amour-propre et de respect de soi. Trop souvent, on dit “oui” pour éviter les tensions, pour plaire ou par peur de décevoir. Mais à force de tout accepter, on s’efface… et on finit par se perdre. non sans culpabilité 06.",
        "Apprendre à dire non, c’est poser des limites claires sur ce qui te fait du bien et ce qui ne te convient pas. Un “non” dit avec douceur vaut mieux qu’un “oui” plein de frustration. Quand tu exprimes tes limites calmement, ton homme te perçoit comme une femme stable, équilibrée et sûre d’elle. Le secret, c’est le ton : dis “non” avec sérénité, pas avec agressivité. Tu n’as rien à justifier — ta paix intérieure est une raison suffisante."
      ],
      "en": [
        "By applying key 8 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 8 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 8 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 8 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 8 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 8 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 8 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "8. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 8 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 24,
    "type": "key",
    "keyNumber": 8,
    "title": {
      "fr": "Clé 8 : Maintenir la passion sexuelle (Suite)",
      "en": "Key 8 : Maintaining Sexual Passion (Cont.)",
      "es": "Clave 8 : Mantener la Pasión Sexual (Cont.)",
      "de": "Schlüssel 8 : Sexuelle Leidenschaft Bewahren (Forts.)",
      "it": "Chiave 8 : Mantenere la Passione Sessuale (Cont.)",
      "pt": "Chave 8 : Manter a Paixão Sexual (Cont.)",
      "nl": "Sleutel 8 : Seksuele Passie Behouden (Vervolg)",
      "ru": "Ключ 8 : Сохранять Сексуальную Страсть (Продолжение)",
      "tr": "Anahtar 8 : Cinsel Tutkuyu Korumak (Devam)",
      "ar": "المفتاح 8 : الحفاظ على الشغف (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Souviens-toi : dire non à ce qui te diminue, c’est dire oui à ce qui t’élève. C’est un acte de puissance féminine, et c’est aussi ce qui fait qu’un homme te respecte profondément. Une femme qui sait dire non sans peur… est une femme qu’on ne veut pas perdre."
      ],
      "en": [
        "By applying key 8 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 8 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 8 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 8 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 8 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 8 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 8 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "8. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 8 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 25,
    "type": "key",
    "keyNumber": 9,
    "title": {
      "fr": "Clé 9 : Gérer les conflits avec classe",
      "en": "Key 9 : Managing Conflicts with Class",
      "es": "Clave 9 : Manejar Conflictos con Clase",
      "de": "Schlüssel 9 : Konflikte mit Stil Lösen",
      "it": "Chiave 9 : Gestire i Conflitti con Classe",
      "pt": "Chave 9 : Gerir Conflitos com Classe",
      "nl": "Sleutel 9 : Conflictbeheersing met Klasse",
      "ru": "Ключ 9 : Управление Конфликтами с Классом",
      "tr": "Anahtar 9 : Zarafetle Çatışma Yönetimi",
      "ar": "المفتاح 9 : إدارة الخلافات برقي"
    },
    "paragraphs": {
      "fr": [
        "Les surprises entretiennent la magie dans un couple. Elles rappellent à ton homme qu’il a à ses côtés une femme vive, attentionnée et imprévisible dans le bon sens. Pas besoin de grands gestes ni de cadeaux coûteux — la vraie surprise, c’est celle qui vient du cœur.",
        "Prépare-lui un dîner spontané, laisse un mot doux dans sa veste, change de parfum un soir, organise une sortie inattendue… Ce sont ces petites attentions qui font dire “waouh, elle pense vraiment à moi. ” Elles ravivent la complicité et créent des souvenirs qu’il gardera longtemps. surprises mémorables."
      ],
      "en": [
        "By applying key 9 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 9 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 9 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 9 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 9 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 9 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 9 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "9. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 9 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 26,
    "type": "key",
    "keyNumber": 9,
    "title": {
      "fr": "Clé 9 : Gérer les conflits avec classe (Suite)",
      "en": "Key 9 : Managing Conflicts with Class (Cont.)",
      "es": "Clave 9 : Manejar Conflictos con Clase (Cont.)",
      "de": "Schlüssel 9 : Konflikte mit Stil Lösen (Forts.)",
      "it": "Chiave 9 : Gestire i Conflitti con Classe (Cont.)",
      "pt": "Chave 9 : Gerir Conflitos com Classe (Cont.)",
      "nl": "Sleutel 9 : Conflictbeheersing met Klasse (Vervolg)",
      "ru": "Ключ 9 : Управление Конфликтами с Классом (Продолжение)",
      "tr": "Anahtar 9 : Zarafetle Çatışma Yönetimi (Devam)",
      "ar": "المفتاح 9 : إدارة الخلافات برقي (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "La clé, c’est de surprendre avec simplicité et sincérité. Tu n’as rien à prouver, juste à lui rappeler pourquoi il t’a choisie. Une femme capable de créer des moments uniques devient une source d’énergie dans le couple — elle rend la relation vivante, vibrante, authentique.",
        "Souviens-toi : l’amour ne s’éteint pas, il s’endort quand on arrête de le nourrir. Alors, garde ton âme joueuse, ton esprit curieux et ton cœur ouvert. Parce qu’un homme n’oublie jamais une femme qui sait encore le surprendre."
      ],
      "en": [
        "By applying key 9 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 9 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 9 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 9 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 9 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 9 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 9 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "9. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 9 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 27,
    "type": "key",
    "keyNumber": 10,
    "title": {
      "fr": "Clé 10 : Savoir dire non sans culpabilité",
      "en": "Key 10 : Knowing How to Say No Without Guilt",
      "es": "Clave 10 : Saber Decir No sin Culpabilidad",
      "de": "Schlüssel 10 : Nein Sagen Ohne Schuldgefühle",
      "it": "Chiave 10 : Saper Dire No Senza Senso di Colpa",
      "pt": "Chave 10 : Saber Dizer Não sem Culpabilidade",
      "nl": "Sleutel 10 : Nee Zeggen Zonder Schuldgevoel",
      "ru": "Ключ 10 : Уметь Говорить «Нет» Без Вины",
      "tr": "Anahtar 10 : Suçluluk Duymadan Hayır Demek",
      "ar": "المفتاح 10 : قول لا دون شعور بالذنب"
    },
    "paragraphs": {
      "fr": [
        "Tes limites ne te rendent pas difficile, elles te rendent respectable et désirée. Une femme qui sait ce qu’elle accepte et ce qu’elle refuse dégage une force tranquille qui attire naturellement. Parce qu’un homme sent qu’il ne peut pas tout se permettre, il apprend à te considérer avec plus d’attention.",
        "Fixer des limites, ce n’est pas mettre des murs, c’est poser les règles de ton respect. C’est savoir dire : “voici qui je suis, et voici comment j’ai besoin d’être aimée. ” Ce n’est pas de la froideur, c’est de la clarté — et la clarté est terriblement séduisante. charme."
      ],
      "en": [
        "By applying key 10 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 10 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 10 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 10 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 10 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 10 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 10 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "10. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 10 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 28,
    "type": "key",
    "keyNumber": 10,
    "title": {
      "fr": "Clé 10 : Savoir dire non sans culpabilité (Suite)",
      "en": "Key 10 : Knowing How to Say No Without Guilt (Cont.)",
      "es": "Clave 10 : Saber Decir No sin Culpabilidad (Cont.)",
      "de": "Schlüssel 10 : Nein Sagen Ohne Schuldgefühle (Forts.)",
      "it": "Chiave 10 : Saper Dire No Senza Senso di Colpa (Cont.)",
      "pt": "Chave 10 : Saber Dizer Não sem Culpabilidade (Cont.)",
      "nl": "Sleutel 10 : Nee Zeggen Zonder Schuldgevoel (Vervolg)",
      "ru": "Ключ 10 : Уметь Говорить «Нет» Без Вины (Продолжение)",
      "tr": "Anahtar 10 : Suçluluk Duymadan Hayır Demek (Devam)",
      "ar": "المفتاح 10 : قول لا دون شعور بالذنب (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Quand tu t’imposes avec douceur, tu inspires la stabilité. Tu deviens cette femme rare qui ne mendie pas l’amour, mais qui le reçoit avec dignité. Et paradoxalement, ce sont tes limites qui font grandir son désir, car elles montrent ta valeur.",
        "Souviens-toi : on ne respecte pas une femme qui dit “oui” à tout. On respecte celle qui s’honore d’abord, même quand c’est difficile. Tes limites ne te freinent pas, elles sont ton filtre à énergie. Et c’est ce filtre qui fait tout ton charme."
      ],
      "en": [
        "By applying key 10 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 10 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 10 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 10 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 10 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 10 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 10 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "10. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 10 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 29,
    "type": "key",
    "keyNumber": 11,
    "title": {
      "fr": "Clé 11 : Créer des surprises mémorables",
      "en": "Key 11 : Creating Memorable Surprises",
      "es": "Clave 11 : Crear Sorpresas Memorables",
      "de": "Schlüssel 11 : Unvergessliche Überraschungen Schaffen",
      "it": "Chiave 11 : Creare Sorprese Memorabili",
      "pt": "Chave 11 : Criar Surpresas Memoráveis",
      "nl": "Sleutel 11 : Gedenkwaardige Verrassingen",
      "ru": "Ключ 11 : Создание Незабываемых Сюрпризов",
      "tr": "Anahtar 11 : Unutulmaz Sürprizler Oluşturmak",
      "ar": "المفتاح 11 : صنع مفاجآت لا تُنسى"
    },
    "paragraphs": {
      "fr": [
        "L’amour ne se prouve pas seulement avec des mots, mais surtout avec les gestes du quotidien. Les petites attentions sont ce langage silencieux qui dit “je t’aime” sans avoir besoin de le répéter. Elles créent un lien discret, sincère et puissant entre deux cœurs. Préparer son café, lui envoyer un message drôle, lui dire “fais attention à toi”, poser ta main sur son bras sans raison… Ces détails simples nourrissent l’attachement, car ils montrent que tu penses à lui sans attendre quelque chose en retour. langage des petites attentions Les petites attentions, c’est l’art de donner sans calculer, de semer de la tendresse un peu chaque jour.",
        "Et ce sont souvent ces gestes-là qu’il retiendra le plus. Mais n’oublie pas : ce langage se parle à deux. Accueille aussi les attentions qu’il t’offre, même les plus discrètes. Savoir recevoir avec douceur, c’est aussi une forme d’amour. Souviens-toi : l’amour ne grandit pas dans les grandes déclarations, mais dans ces instants simples, répétés, vrais — ceux qui font dire “avec elle, je me sens bien. ”."
      ],
      "en": [
        "By applying key 11 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 11 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 11 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 11 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 11 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 11 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 11 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "11. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 11 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 30,
    "type": "key",
    "keyNumber": 11,
    "title": {
      "fr": "Clé 11 : Créer des surprises mémorables (Suite)",
      "en": "Key 11 : Creating Memorable Surprises (Cont.)",
      "es": "Clave 11 : Crear Sorpresas Memorables (Cont.)",
      "de": "Schlüssel 11 : Unvergessliche Überraschungen Schaffen (Forts.)",
      "it": "Chiave 11 : Creare Sorprese Memorabili (Cont.)",
      "pt": "Chave 11 : Criar Surpresas Memoráveis (Cont.)",
      "nl": "Sleutel 11 : Gedenkwaardige Verrassingen (Vervolg)",
      "ru": "Ключ 11 : Создание Незабываемых Сюрпризов (Продолжение)",
      "tr": "Anahtar 11 : Unutulmaz Sürprizler Oluşturmak (Devam)",
      "ar": "المفتاح 11 : صنع مفاجآت لا تُنسى (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Ton couple est important, oui… mais ta vie en dehors de lui l’est tout autant. Une femme épanouie, c’est une femme qui garde ses amitiés, ses passions, sa famille, son univers personnel. C’est ce qui la rend vivante, intéressante, et surtout équilibrée.",
        "Quand tu négliges ta vie sociale pour ne vivre qu’à travers ton couple, tu risques de t’éteindre un peu. Mais quand tu nourris tes relations, ton monde s’élargit, ton énergie change — et ton homme le ressent. Il est naturellement attiré par une femme qui a sa propre lumière, qui rit, qui sort, qui partage. Entretenir ta vie sociale."
      ],
      "en": [
        "By applying key 11 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 11 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 11 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 11 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 11 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 11 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 11 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "11. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 11 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 31,
    "type": "key",
    "keyNumber": 12,
    "title": {
      "fr": "Clé 12 : Tes limites = ton charme",
      "en": "Key 12 : Your Boundaries = Your Charm",
      "es": "Clave 12 : Tus Límites = Tu Encanto",
      "de": "Schlüssel 12 : Deine Grenzen = Dein Charme",
      "it": "Chiave 12 : I Tuoi Limiti = Il Tuo Fascino",
      "pt": "Chave 12 : Os Teus Limites = O Teu Charme",
      "nl": "Sleutel 12 : Je Grenzen = Je Charme",
      "ru": "Ключ 12 : Твои Границы = Твой Шарм",
      "tr": "Anahtar 12 : Sınırların = Çekiciliğin",
      "ar": "المفتاح 12 : حُدودكِ = سحركِ"
    },
    "paragraphs": {
      "fr": [
        "Entretenir ta vie sociale, c’est aussi une façon d’entretenir ton couple : cela t’apporte de la nouveauté, des histoires à raconter, une énergie fraîche à ramener à la maison. Et surtout, cela t’empêche de tomber dans la dépendance affective.",
        "Souviens-toi : une femme qui sait exister sans son homme est souvent celle qu’on choisit de garder à ses côtés. Ta vie sociale, c’est ton oxygène, ton équilibre et ton charme. Ne la laisse jamais s’éteindre — elle fait partie de ta force féminine."
      ],
      "en": [
        "By applying key 12 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 12 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 12 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 12 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 12 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 12 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 12 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "12. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 12 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 32,
    "type": "key",
    "keyNumber": 12,
    "title": {
      "fr": "Clé 12 : Tes limites = ton charme (Suite)",
      "en": "Key 12 : Your Boundaries = Your Charm (Cont.)",
      "es": "Clave 12 : Tus Límites = Tu Encanto (Cont.)",
      "de": "Schlüssel 12 : Deine Grenzen = Dein Charme (Forts.)",
      "it": "Chiave 12 : I Tuoi Limiti = Il Tuo Fascino (Cont.)",
      "pt": "Chave 12 : Os Teus Limites = O Teu Charme (Cont.)",
      "nl": "Sleutel 12 : Je Grenzen = Je Charme (Vervolg)",
      "ru": "Ключ 12 : Твои Границы = Твой Шарм (Продолжение)",
      "tr": "Anahtar 12 : Sınırların = Çekiciliğin (Devam)",
      "ar": "المفتاح 12 : حُدودكِ = سحركِ (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Une femme confiante attire naturellement le respect et la stabilité. Et cette confiance passe par deux piliers essentiels : l’indépendance financière et l’équilibre émotionnel. Quand tu sais te gérer seule — dans ta tête et dans ton portefeuille — tu dégages une énergie de sécurité et de sérénité qui renforce ton charme.",
        "L’argent, ce n’est pas qu’une question de chiffres, c’est une question de liberté. Avoir tes propres ressources te permet de choisir par amour, pas par besoin. Et un homme sent quand tu es là parce que tu veux, non parce que tu dois. confiance financière et émotionnelle."
      ],
      "en": [
        "By applying key 12 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 12 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 12 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 12 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 12 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 12 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 12 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "12. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 12 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 33,
    "type": "key",
    "keyNumber": 13,
    "title": {
      "fr": "Clé 13 : Le langage des petites attentions",
      "en": "Key 13 : The Language of Small Gestures",
      "es": "Clave 13 : El Lenguaje de los Pequeños Detalles",
      "de": "Schlüssel 13 : Die Sprache der Kleinen Aufmerksamkeiten",
      "it": "Chiave 13 : Il Linguaggio delle Piccole Attenzioni",
      "pt": "Chave 13 : O Linguagem das Pequenas Atenções",
      "nl": "Sleutel 13 : Kleine Attenties",
      "ru": "Ключ 13 : Язык Мелочей и Внимания",
      "tr": "Anahtar 13 : Küçük İlgi Dili",
      "ar": "المفتاح 13 : لغة الاهتمامات الصغيرة"
    },
    "paragraphs": {
      "fr": [
        "De même, l’équilibre émotionnel te rend solide face aux hauts et bas du couple. Tu ne paniques pas à la moindre distance, tu ne te perds pas dans la peur de perdre.",
        "Tu restes ancrée, lucide, apaisée. Souviens-toi : une femme stable financièrement et émotionnellement ne cherche pas à contrôler, elle inspire confiance naturellement. Et cette confiance-là… c’est l’un des plus puissants aphrodisiaques qui soient."
      ],
      "en": [
        "By applying key 13 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 13 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 13 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 13 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 13 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 13 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 13 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "13. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 13 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 34,
    "type": "key",
    "keyNumber": 13,
    "title": {
      "fr": "Clé 13 : Le langage des petites attentions (Suite)",
      "en": "Key 13 : The Language of Small Gestures (Cont.)",
      "es": "Clave 13 : El Lenguaje de los Pequeños Detalles (Cont.)",
      "de": "Schlüssel 13 : Die Sprache der Kleinen Aufmerksamkeiten (Forts.)",
      "it": "Chiave 13 : Il Linguaggio delle Piccole Attenzioni (Cont.)",
      "pt": "Chave 13 : O Linguagem das Pequenas Atenções (Cont.)",
      "nl": "Sleutel 13 : Kleine Attenties (Vervolg)",
      "ru": "Ключ 13 : Язык Мелочей и Внимания (Продолжение)",
      "tr": "Anahtar 13 : Küçük İlgi Dili (Devam)",
      "ar": "المفتاح 13 : لغة الاهتمامات الصغيرة (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Ton style parle avant même que tu ouvres la bouche. Il en dit long sur ta confiance, ton énergie, ton humeur. Mais la clé, ce n’est pas d’en faire trop — c’est de savoir suggérer sans tout montrer. La subtilité, c’est l’art de laisser deviner. Une robe fluide qui épouse tes formes sans les crier. Un parfum doux mais reconnaissable.",
        "Un regard bien dessiné, une bouche naturelle. Tout est dans la mesure, dans le détail qui intrigue sans provoquer. valeur vestimentaire subtile Savoir te mettre en valeur, c’est avant tout connaître ton corps et ton aura. Porter des vêtements qui te ressemblent, dans lesquels tu te sens belle et libre. La séduction ne réside pas dans la peau qu’on montre, mais dans l’énergie qu’on dégage. Et rappelle-toi : quand une femme est bien dans sa peau, elle n’a pas besoin d’en faire beaucoup pour qu’on la remarque. Elle attire, naturellement, parce qu’elle incarne une beauté authentique, alignée et confiante."
      ],
      "en": [
        "By applying key 13 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 13 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 13 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 13 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 13 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 13 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 13 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "13. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 13 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 35,
    "type": "key",
    "keyNumber": 14,
    "title": {
      "fr": "Clé 14 : Entretenir ta vie sociale",
      "en": "Key 14 : Nurturing Your Social Life",
      "es": "Clave 14 : Mantener tu Vida Social",
      "de": "Schlüssel 14 : Dein Soziales Leben Pflegen",
      "it": "Chiave 14 : Mantenere la Tua Vita Sociale",
      "pt": "Chave 14 : Cultivar a Tua Vida Social",
      "nl": "Sleutel 14 : Sociaal Leven Koesteren",
      "ru": "Ключ 14 : Поддерживать Социальную Жизнь",
      "tr": "Anahtar 14 : Sosyal Yaşamı Korumak",
      "ar": "المفتاح 14 : الاهتمام بالحياة الاجتماعية"
    },
    "paragraphs": {
      "fr": [
        "Écouter vraiment, c’est séduire sans en avoir l’air. Quand tu prêtes une oreille sincère, que tu poses les bonnes questions, tu fais sentir à ton homme qu’il compte, qu’il est compris, qu’il peut se confier sans crainte. Mais attention : écouter activement ne veut pas dire te taire ou t’effacer.",
        "C’est capter ses émotions, rebondir sur ses mots, lui montrer que tu es présente — pas juste physiquement, mais émotionnellement. Un regard attentif, un petit sourire au bon moment, une phrase qui prouve que tu l’as entendu… Ces détails tissent une complicité rare, celle qui retient son attention même quand il n’est pas là. activement et garder l’attention."
      ],
      "en": [
        "By applying key 14 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 14 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 14 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 14 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 14 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 14 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 14 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "14. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 14 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 36,
    "type": "key",
    "keyNumber": 14,
    "title": {
      "fr": "Clé 14 : Entretenir ta vie sociale (Suite)",
      "en": "Key 14 : Nurturing Your Social Life (Cont.)",
      "es": "Clave 14 : Mantener tu Vida Social (Cont.)",
      "de": "Schlüssel 14 : Dein Soziales Leben Pflegen (Forts.)",
      "it": "Chiave 14 : Mantenere la Tua Vita Sociale (Cont.)",
      "pt": "Chave 14 : Cultivar a Tua Vida Social (Cont.)",
      "nl": "Sleutel 14 : Sociaal Leven Koesteren (Vervolg)",
      "ru": "Ключ 14 : Поддерживать Социальную Жизнь (Продолжение)",
      "tr": "Anahtar 14 : Sosyal Yaşamı Korumak (Devam)",
      "ar": "المفتاح 14 : الاهتمام بالحياة الاجتماعية (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Et paradoxalement, plus tu l’écoutes avec intérêt, plus il aura envie d’en savoir sur toi. Car tu lui offres un espace où il se sent valorisé, et ça, c’est un aimant puissant.",
        "Être une bonne écoute, c’est un art discret mais irrésistible. Tu deviens cette femme dont la présence apaise, intrigue et captive — celle qu’on ne se lasse pas d’écouter à son tour."
      ],
      "en": [
        "By applying key 14 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 14 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 14 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 14 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 14 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 14 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 14 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "14. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 14 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 37,
    "type": "key",
    "keyNumber": 15,
    "title": {
      "fr": "Clé 15 : La confiance financière et émotionnelle",
      "en": "Key 15 : Financial and Emotional Confidence",
      "es": "Clave 15 : La Confianza Financiera y Emocional",
      "de": "Schlüssel 15 : Finanzielles und Emotionales Vertrauen",
      "it": "Chiave 15 : La Fiducia Finanziaria ed Emozionale",
      "pt": "Chave 15 : A Confiança Financeira e Emocional",
      "nl": "Sleutel 15 : Financiële & Emotionele Zekerheid",
      "ru": "Ключ 15 : Финансовая и Эмоциональная Уверенность",
      "tr": "Anahtar 15 : Finansal ve Duygusal Özgüven",
      "ar": "المفتاح 15 : الثقة المالية والعاطفية"
    },
    "paragraphs": {
      "fr": [
        "Les rendez-vous ne sont pas réservés au début d’une histoire. Même après des mois ou des années, ils restent essentiels pour entretenir la flamme. Mais pour qu’ils gardent leur magie, il faut parfois sortir de la routine et oser la nouveauté.",
        "Un dîner aux chandelles, c’est charmant… mais pourquoi ne pas essayer autre chose ? Un pique-nique improvisé, une balade nocturne, une soirée jeux, un massage à deux, ou même un simple café dans un lieu inédit. L’important, ce n’est pas le décor, c’est l’énergie que tu y mets. les rendez-vous amoureux."
      ],
      "en": [
        "By applying key 15 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 15 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 15 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 15 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 15 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 15 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 15 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "15. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 15 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 38,
    "type": "key",
    "keyNumber": 15,
    "title": {
      "fr": "Clé 15 : La confiance financière et émotionnelle (Suite)",
      "en": "Key 15 : Financial and Emotional Confidence (Cont.)",
      "es": "Clave 15 : La Confianza Financiera y Emocional (Cont.)",
      "de": "Schlüssel 15 : Finanzielles und Emotionales Vertrauen (Forts.)",
      "it": "Chiave 15 : La Fiducia Finanziaria ed Emozionale (Cont.)",
      "pt": "Chave 15 : A Confiança Financeira e Emocional (Cont.)",
      "nl": "Sleutel 15 : Financiële & Emotionele Zekerheid (Vervolg)",
      "ru": "Ключ 15 : Финансовая и Эмоциональная Уверенность (Продолжение)",
      "tr": "Anahtar 15 : Finansal ve Duygusal Özgüven (Devam)",
      "ar": "المفتاح 15 : الثقة المالية والعاطفية (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Quand tu prends l’initiative de surprendre, tu montres que tu tiens à cette connexion, que tu veux continuer à le séduire. Et c’est justement ça qui ravive le désir : la curiosité, l’imprévu, le plaisir partagé.",
        "N’attends pas toujours qu’il propose. Crée toi-même ces moments, avec ton style, ton humour, ta touche unique. Car une femme qui sait réinventer la complicité garde son couple vivant, vibrant, et plein d’envie."
      ],
      "en": [
        "By applying key 15 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 15 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 15 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 15 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 15 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 15 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 15 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "15. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 15 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 39,
    "type": "key",
    "keyNumber": 16,
    "title": {
      "fr": "Clé 16 : Mise en valeur vestimentaire subtile",
      "en": "Key 16 : Subtle Style Enhancement",
      "es": "Clave 16 : Realce Vestimentario Sutil",
      "de": "Schlüssel 16 : Subtile Stilvolle Hervorhebung",
      "it": "Chiave 16 : Valorizzazione dell'Abbigliamento Subdola",
      "pt": "Chave 16 : Valorização do Estilo Subtil",
      "nl": "Sleutel 16 : Subtiele Kledingstijl",
      "ru": "Ключ 16 : Утонченный Стиль в Одежде",
      "tr": "Anahtar 16 : Zarif Giyim Tarzı",
      "ar": "المفتاح 16 : إبراز الأناقة بذكاء"
    },
    "paragraphs": {
      "fr": [
        "Aimer, ce n’est pas vivre sans blessures. Même dans les plus belles histoires, il y a des maladresses, des mots qui dépassent, des gestes qui blessent sans le vouloir. Mais ce qui fait la différence, c’est ta capacité à pardonner sans t’effacer. protège la relation 06. Le pardon n’est pas une faiblesse.",
        "C’est une force immense, un choix conscient de ne pas laisser la rancune détruire ce que vous avez construit. Pardonner, ce n’est pas oublier ou minimiser — c’est dire : “Je choisis la paix intérieure plutôt que la vengeance. ” Cela ne veut pas dire tout accepter. Tu peux poser tes limites, exprimer ta douleur, et quand même décider d’avancer. Le vrai pardon vient du cœur, pas de la peur de perdre."
      ],
      "en": [
        "By applying key 16 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 16 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 16 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 16 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 16 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 16 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 16 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "16. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 16 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 40,
    "type": "key",
    "keyNumber": 16,
    "title": {
      "fr": "Clé 16 : Mise en valeur vestimentaire subtile (Suite)",
      "en": "Key 16 : Subtle Style Enhancement (Cont.)",
      "es": "Clave 16 : Realce Vestimentario Sutil (Cont.)",
      "de": "Schlüssel 16 : Subtile Stilvolle Hervorhebung (Forts.)",
      "it": "Chiave 16 : Valorizzazione dell'Abbigliamento Subdola (Cont.)",
      "pt": "Chave 16 : Valorização do Estilo Subtil (Cont.)",
      "nl": "Sleutel 16 : Subtiele Kledingstijl (Vervolg)",
      "ru": "Ключ 16 : Утонченный Стиль в Одежде (Продолжение)",
      "tr": "Anahtar 16 : Zarif Giyim Tarzı (Devam)",
      "ar": "المفتاح 16 : إبراز الأناقة بذكاء (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Et parfois, c’est toi qu’il faut apprendre à pardonner : tes erreurs, tes excès, tes mots durs. Car une femme qui se libère du poids du passé rayonne d’une énergie nouvelle. Souviens-toi : le pardon ne répare pas tout, mais il empêche l’amour de s’user dans la rancune."
      ],
      "en": [
        "By applying key 16 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 16 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 16 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 16 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 16 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 16 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 16 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "16. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 16 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 41,
    "type": "key",
    "keyNumber": 17,
    "title": {
      "fr": "Clé 17 : Écouter activement et garder l’attention",
      "en": "Key 17 : Active Listening and Keeping Attention",
      "es": "Clave 17 : Escuchar Activamente y Mantener la Atención",
      "de": "Schlüssel 17 : Aktives Zuhören und Aufmerksam Bleiben",
      "it": "Chiave 17 : Ascoltare Attivamente e Mantenere l'Attenzione",
      "pt": "Chave 17 : Escuta Ativa e Manter a Atenção",
      "nl": "Sleutel 17 : Actief Luisteren en Aandacht Houden",
      "ru": "Ключ 17 : Активное Слушание и Удержание Внимания",
      "tr": "Anahtar 17 : Etkin Dinleme ve İlgiyi Canlı Tutmak",
      "ar": "المفتاح 17 : الاستماع الفعال وجذب الانتباه"
    },
    "paragraphs": {
      "fr": [
        "Être irremplaçable, ce n’est pas tout donner pour plaire. C’est rester toi-même, même dans l’amour. C’est garder ton monde, tes rêves, tes valeurs — tout en partageant les siens.",
        "Une femme devient inoubliable quand elle ne cherche pas à être parfaite, mais authentique. Quand elle ose dire ce qu’elle pense avec douceur, quand elle a ses passions, son univers, son énergie propre. irremplaçable sans te perdre."
      ],
      "en": [
        "By applying key 17 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 17 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 17 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 17 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 17 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 17 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 17 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "17. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 17 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 42,
    "type": "key",
    "keyNumber": 17,
    "title": {
      "fr": "Clé 17 : Écouter activement et garder l’attention (Suite)",
      "en": "Key 17 : Active Listening and Keeping Attention (Cont.)",
      "es": "Clave 17 : Escuchar Activamente y Mantener la Atención (Cont.)",
      "de": "Schlüssel 17 : Aktives Zuhören und Aufmerksam Bleiben (Forts.)",
      "it": "Chiave 17 : Ascoltare Attivamente e Mantenere l'Attenzione (Cont.)",
      "pt": "Chave 17 : Escuta Ativa e Manter a Atenção (Cont.)",
      "nl": "Sleutel 17 : Actief Luisteren en Aandacht Houden (Vervolg)",
      "ru": "Ключ 17 : Активное Слушание и Удержание Внимания (Продолжение)",
      "tr": "Anahtar 17 : Etkin Dinleme ve İlgiyi Canlı Tutmak (Devam)",
      "ar": "المفتاح 17 : الاستماع الفعال وجذب الانتباه (متابعة)"
    },
    "paragraphs": {
      "fr": [
        "Tu n’as pas besoin d’être toujours disponible, ni de te fondre dans ses attentes. Au contraire : c’est ton indépendance, ta personnalité et ta paix intérieure qui font de toi une femme rare. L’amour le plus fort, c’est celui où chacun garde son espace tout en créant un “nous” équilibré.",
        "Ne te perds pas dans le rôle de la compagne idéale — incarne simplement la meilleure version de toi-même. Souviens-toi : tu n’as pas à courir après ta place. Quand tu vibres haut, quand tu t’aimes, quand tu rayonnes… ta présence devient naturellement irremplaçable."
      ],
      "en": [
        "By applying key 17 daily, you develop an effortless and magnetic charm.",
        "Remember that your feminine power resides in your authenticity and inner peace."
      ],
      "es": [
        "Al aplicar la clave 17 a diario, desarrollas un encanto natural e irresistible.",
        "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."
      ],
      "de": [
        "Wenn du Schlüssel 17 täglich anwendest, entwickelst du einen mühelosen Charme.",
        "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."
      ],
      "it": [
        "Applicando la chiave 17 ogni giorno, sviluppi un fascino naturale e irresistibile.",
        "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."
      ],
      "pt": [
        "Ao aplicar a chave 17 diariamente, desenvolves um charme natural e magnético.",
        "Lembra-te de que o teu poder feminino reside na tua autenticidade."
      ],
      "nl": [
        "Door sleutel 17 dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.",
        "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."
      ],
      "ru": [
        "Применяя ключ 17 ежедневно, вы развиваете неотразимый шарм.",
        "Помните, что ваша женская сила заключается в вашей аутентичности."
      ],
      "tr": [
        "17. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.",
        "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."
      ],
      "ar": [
        "بتطبيق المفتاح رقم 17 يومياً، تطورين سحراً طبيعياً لا يُقاوم.",
        "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."
      ]
    }
  },
  {
    "pageNumber": 43,
    "type": "conclusion",
    "title": {
      "fr": "Conclusion & Mot de fin",
      "en": "Conclusion & Final Words",
      "es": "Conclusión y Palabras Finales",
      "de": "Schlusswort & Fazit",
      "it": "Conclusione e Parole Finali",
      "pt": "Conclusão e Palavras Finais",
      "nl": "Conclusie & Slotwoord",
      "ru": "Заключение и Финальные Слова",
      "tr": "Sonuç ve Kapanış Sözleri",
      "ar": "الخاتمة والكلمات الأخيرة"
    },
    "paragraphs": {
      "fr": [
        "Tu viens d’explorer 20 clés puissantes pour nourrir, transformer et sublimer ton couple. Mais surtout, tu as découvert que le vrai secret pour être désirée, c’est d’abord d’être épanouie. Conclusion & Mot de fin 06.",
        "Avec tout mon amour et ma gratitude, — Lina Rela"
      ],
      "en": [
        "Thank you for taking this precious time for yourself. This eBook is a brand new beginning.",
        "With all my love and gratitude, — Lina Rela"
      ],
      "es": [
        "Gracias por tomarte este tiempo valioso para ti. Este eBook es un nuevo comienzo.",
        "Con todo mi amor y gratitud, — Lina Rela"
      ],
      "de": [
        "Danke, dass du dir diese kostbare Zeit genommen hast. Dies ist ein neuer Anfang.",
        "Mit all meiner Liebe und Dankbarkeit, — Lina Rela"
      ],
      "it": [
        "Grazie per aver dedicato questo tempo prezioso a te stessa. È un nuovo inizio.",
        "Con tutto il mio amore e la mia gratitudine, — Lina Rela"
      ],
      "pt": [
        "Obrigada por tirares este tempo precioso para ti. Este e-book é um novo começo.",
        "Com todo o meu amor e gratidão, — Lina Rela"
      ],
      "nl": [
        "Bedankt dat je deze kostbare tijd voor jezelf hebt genomen. Dit is een nieuw begin.",
        "Met al mijn liefde en dankbaarheid, — Lina Rela"
      ],
      "ru": [
        "Спасибо за драгоценное время, уделенное себе. Эта книга — новое начало.",
        "Со всей моей любовью и благодарностью, — Лина Рела"
      ],
      "tr": [
        "Kendinize ayırdığınız bu değerli zaman için teşekkürler. Bu yeni bir başlangıç.",
        "Tüm sevgim ve minnetimle, — Lina Rela"
      ],
      "ar": [
        "شكراً لكِ على تخصيص هذا الوقت الثمين لنفسكِ. هذا الكتاب هو بداية جديدة.",
        "مع كل حبي وامتناني، — لينا ريلا"
      ]
    }
  },
  {
    "pageNumber": 44,
    "type": "conclusion",
    "title": {
      "fr": "Conclusion & Mot de fin",
      "en": "Conclusion & Final Words",
      "es": "Conclusión y Palabras Finales",
      "de": "Schlusswort & Fazit",
      "it": "Conclusione e Parole Finali",
      "pt": "Conclusão e Palavras Finais",
      "nl": "Conclusie & Slotwoord",
      "ru": "Заключение и Финальные Слова",
      "tr": "Sonuç ve Kapanış Sözleri",
      "ar": "الخاتمة والكلمات الأخيرة"
    },
    "paragraphs": {
      "fr": [
        "Aimer ne doit jamais rimer avec s’effacer. L’amour grandit quand tu restes fidèle à celle que tu es : une femme libre, sensible, forte, et pleine de nuances. Tu n’as pas besoin d’en faire trop pour être aimée — il suffit d’être alignée, confiante, et présente avec authenticité. Chaque clé que tu viens de lire est une invitation : à te recentrer, à t’écouter, à remettre un peu de magie dans ton histoire. Même les plus petites actions, quand elles sont faites avec intention, peuvent transformer profondément la relation. Souviens-toi : tu es ton propre centre de gravité. Quand tu t’aimes, tout s’aligne autour de toi. Et c’est là que tu deviens cette femme irrésistible, sereine, et surtout, impossible à oublier. Merci d’avoir pris ce temps pour toi. Ce ebook n’est pas une fin, c’est un nouveau départ — vers une version encore plus rayonnante de toi.",
        "Avec tout mon amour et ma gratitude, — Lina Rela"
      ],
      "en": [
        "Thank you for taking this precious time for yourself. This eBook is a brand new beginning.",
        "With all my love and gratitude, — Lina Rela"
      ],
      "es": [
        "Gracias por tomarte este tiempo valioso para ti. Este eBook es un nuevo comienzo.",
        "Con todo mi amor y gratitud, — Lina Rela"
      ],
      "de": [
        "Danke, dass du dir diese kostbare Zeit genommen hast. Dies ist ein neuer Anfang.",
        "Mit all meiner Liebe und Dankbarkeit, — Lina Rela"
      ],
      "it": [
        "Grazie per aver dedicato questo tempo prezioso a te stessa. È un nuovo inizio.",
        "Con tutto il mio amore e la mia gratitudine, — Lina Rela"
      ],
      "pt": [
        "Obrigada por tirares este tempo precioso para ti. Este e-book é um novo começo.",
        "Com todo o meu amor e gratidão, — Lina Rela"
      ],
      "nl": [
        "Bedankt dat je deze kostbare tijd voor jezelf hebt genomen. Dit is een nieuw begin.",
        "Met al mijn liefde en dankbaarheid, — Lina Rela"
      ],
      "ru": [
        "Спасибо за драгоценное время, уделенное себе. Эта книга — новое начало.",
        "Со всей моей любовью и благодарностью, — Лина Рела"
      ],
      "tr": [
        "Kendinize ayırdığınız bu değerli zaman için teşekkürler. Bu yeni bir başlangıç.",
        "Tüm sevgim ve minnetimle, — Lina Rela"
      ],
      "ar": [
        "شكراً لكِ على تخصيص هذا الوقت الثمين لنفسكِ. هذا الكتاب هو بداية جديدة.",
        "مع كل حبي وامتناني، — لينا ريلا"
      ]
    }
  },
  {
    "pageNumber": 45,
    "type": "acknowledgements",
    "title": {
      "fr": "Remerciements & Mot à la lectrice",
      "en": "Acknowledgments & Note to Reader",
      "es": "Agradecimientos y Nota a la Lectora",
      "de": "Danksagung & Wort an die Leserin",
      "it": "Ringraziamenti e Nota alla Lettrice",
      "pt": "Agradecimentos e Nota à Leitora",
      "nl": "Dankwoord & Woord aan de Lezeres",
      "ru": "Благодарности и Слово к Читательнице",
      "tr": "Teşekkürler ve Okuyucuya Not",
      "ar": "كلمة شكر وتقدير للقارئة"
    },
    "paragraphs": {
      "fr": [
        "Merci. Merci d’avoir pris le temps de parcourir ces pages, de t’être accordé ce moment rien qu’à toi, et d’avoir ouvert ton cœur à ces mots. Ce livre, je l’ai écrit pour toutes les femmes qui aiment profondément, celles qui doutent parfois, qui donnent beaucoup, mais qui apprennent, chaque jour, à se choisir sans se fermer à l’amour. Si une seule de ces clés t’a touchée, inspirée ou fait réfléchir, alors ce voyage valait la peine. Souviens-toi que tu mérites un amour doux, stable et vibrant — mais surtout, tu mérites de t’aimer avec la même intensité que tu aimes les autres. Continue d’évoluer, de te découvrir, de rayonner. Ce n’est pas la fin d’un ebook, c’est le début d’un nouveau chapitre de ta vie. Et si un jour tu doutes, reviens à ces pages, elles te rappelleront que la femme que tu veux être… tu l’es déjà, au fond de toi. Avec tout mon amour et ma gratitude, — Lina Rela Remerciements & Mot à la lectrice",
        "Avec tout mon amour et ma gratitude, — Lina Rela"
      ],
      "en": [
        "Thank you for taking this precious time for yourself. This eBook is a brand new beginning.",
        "With all my love and gratitude, — Lina Rela"
      ],
      "es": [
        "Gracias por tomarte este tiempo valioso para ti. Este eBook es un nuevo comienzo.",
        "Con todo mi amor y gratitud, — Lina Rela"
      ],
      "de": [
        "Danke, dass du dir diese kostbare Zeit genommen hast. Dies ist ein neuer Anfang.",
        "Mit all meiner Liebe und Dankbarkeit, — Lina Rela"
      ],
      "it": [
        "Grazie per aver dedicato questo tempo prezioso a te stessa. È un nuovo inizio.",
        "Con tutto il mio amore e la mia gratitudine, — Lina Rela"
      ],
      "pt": [
        "Obrigada por tirares este tempo precioso para ti. Este e-book é um novo começo.",
        "Com todo o meu amor e gratidão, — Lina Rela"
      ],
      "nl": [
        "Bedankt dat je deze kostbare tijd voor jezelf hebt genomen. Dit is een nieuw begin.",
        "Met al mijn liefde en dankbaarheid, — Lina Rela"
      ],
      "ru": [
        "Спасибо за драгоценное время, уделенное себе. Эта книга — новое начало.",
        "Со всей моей любовью и благодарностью, — Лина Рела"
      ],
      "tr": [
        "Kendinize ayırdığınız bu değerli zaman için teşekkürler. Bu yeni bir başlangıç.",
        "Tüm sevgim ve minnetimle, — Lina Rela"
      ],
      "ar": [
        "شكراً لكِ على تخصيص هذا الوقت الثمين لنفسكِ. هذا الكتاب هو بداية جديدة.",
        "مع كل حبي وامتناني، — لينا ريلا"
      ]
    }
  }
];
