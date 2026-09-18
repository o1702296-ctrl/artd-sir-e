import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Full generator script for pages 1 to 45 across 10 languages
const generateTS = () => {
  return `export type Language = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'ru' | 'tr' | 'ar';

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
}> = {
  fr: { title: "L'art d'être désirée", subtitle: "20 clés pour transformer ton couple", page: "Page", of: "sur", prevPage: "Page précédente", nextPage: "Page suivante", printPdf: "Imprimer PDF", authorBy: "Par Lina Rela" },
  en: { title: "The Art of Being Desired", subtitle: "20 keys to transform your relationship", page: "Page", of: "of", prevPage: "Previous page", nextPage: "Next page", printPdf: "Print PDF", authorBy: "By Lina Rela" },
  es: { title: "El Arte de Ser Deseada", subtitle: "20 claves para transformar tu pareja", page: "Página", of: "de", prevPage: "Página anterior", nextPage: "Página siguiente", printPdf: "Imprimir PDF", authorBy: "Por Lina Rela" },
  de: { title: "Die Kunst, Begehrt zu Werden", subtitle: "20 Schlüssel zur Transformation Deiner Beziehung", page: "Seite", of: "von", prevPage: "Vorherige Seite", nextPage: "Nächste Seite", printPdf: "PDF drucken", authorBy: "Von Lina Rela" },
  it: { title: "L'Arte di Essere Desiderata", subtitle: "20 chiavi per trasformare la tua coppia", page: "Pagina", of: "di", prevPage: "Pagina precedente", nextPage: "Pagina successiva", printPdf: "Stampa PDF", authorBy: "Di Lina Rela" },
  pt: { title: "A Arte de Ser Desejada", subtitle: "20 chaves para transformar o seu relacionamento", page: "Página", of: "de", prevPage: "Página anterior", nextPage: "Próxima página", printPdf: "Imprimir PDF", authorBy: "Por Lina Rela" },
  nl: { title: "De Kunst om Begeerd te Worden", subtitle: "20 sleutels om je relatie te transformeren", page: "Pagina", of: "van", prevPage: "Vorige pagina", nextPage: "Volgende pagina", printPdf: "PDF Afdrukken", authorBy: "Door Lina Rela" },
  ru: { title: "Искусство Быть Желанной", subtitle: "20 ключей к трансформации ваших отношений", page: "Страница", of: "из", prevPage: "Предыдущая страница", nextPage: "Следующая страница", printPdf: "Печать PDF", authorBy: "Лина Рела" },
  tr: { title: "Arzulanma Sanatı", subtitle: "İlişkinizi dönüştürecek 20 anahtar", page: "Sayfa", of: "/", prevPage: "Önceki sayfa", nextPage: "Sonraki sayfa", printPdf: "PDF Yazdır", authorBy: "Lina Rela Tarafından" },
  ar: { title: "فن أن تكوني مرغوبة", subtitle: "٢٠ مفتاحاً لتغيير علاقتكِ الزوجية", page: "صفحة", of: "من", prevPage: "الصفحة السابقة", nextPage: "الصفحة التالية", printPdf: "طباعة PDF", authorBy: "بقلم لينا ريلا" }
};

export const PAGES_DATA: PageData[] = [
  // Page 1
  {
    pageNumber: 1,
    type: 'cover',
    title: {
      fr: "L’art d’être désirée", en: "The Art of Being Desired", es: "El Arte de Ser Deseada", de: "Die Kunst, Begehrt zu Werden", it: "L'Arte di Essere Desiderata",
      pt: "A Arte de Ser Desejada", nl: "De Kunst om Begeerd te Worden", ru: "Искусство Быть Желанной", tr: "Arzulanma Sanatı", ar: "فن أن تكوني مرغوبة"
    },
    subtitle: {
      fr: "20 clés pour transformer ton couple", en: "20 Keys to Transform Your Relationship", es: "20 Claves para Transformar tu Pareja", de: "20 Schlüssel zur Transformation Deiner Beziehung", it: "20 Chiavi per Trasformare la Tua Coppia",
      pt: "20 chaves para transformar o seu relacionamento", nl: "20 sleutels om je relatie te transformeren", ru: "20 ключей к трансформации ваших отношений", tr: "İlişkinizi dönüştürecek 20 anahtar", ar: "٢٠ مفتاحاً لتغيير علاقتكِ الزوجية"
    },
    author: AUTHOR_NAME,
    bgGradient: "from-pink-400 via-purple-400 to-pink-500",
    images: ["https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop"]
  },

  // Page 2
  {
    pageNumber: 2,
    type: 'preface',
    title: { fr: "Préface", en: "Preface", es: "Prefacio", de: "Vorwort", it: "Prefazione", pt: "Prefácio", nl: "Voorwoord", ru: "Предисловие", tr: "Önsöz", ar: "مقدمة" },
    author: AUTHOR_NAME,
    quote: {
      fr: "Un amour qui ne se cultive pas est une fleur qui se fane",
      en: "A love that is not cultivated is a flower that fades",
      es: "Un amor que no se cultiva es una flor que se marchita",
      de: "Eine Liebe, die nicht gepflegt wird, ist eine Blume, die verwelkt",
      it: "Un amore che non si coltiva è un fiore che appassisce",
      pt: "Um amor que não é cultivado é uma flor que murcha",
      nl: "Een liefde die niet gekoesterd wordt is een bloem die verwelkt",
      ru: "Любовь, которую не взращивают — это увядающий цветок",
      tr: "Beslenmeyen aşk, solan bir çiçektir",
      ar: "الحب الذي لا يُرعى هو زهرة تذبل"
    },
    leftParagraphs: {
      fr: ["Tu tiens entre tes mains un guide pas comme les autres.", "Ici, pas de leçons compliquées ni de discours moralisateurs. Cet eBook est une conversation entre femmes, une main tendue pour t’aider à mieux comprendre ce que veut dire être désirée, aimée et respectée sans te perdre dans le processus"],
      en: ["You hold in your hands a guide unlike any other.", "Here, no complicated lessons or preachy speeches. This eBook is a conversation between women, a helping hand to assist you in understanding what it means to be desired, loved, and respected without losing yourself in the process."],
      es: ["Tienes en tus manos una guía diferente a todas las demás.", "Aquí no hay lecciones complicadas ni discursos moralizadores. Este eBook es una conversación entre mujeres, una mano extendida para ayudarte a comprender mejor qué significa ser deseada, amada y respetada sin perderte en el proceso."],
      de: ["Du hältst einen Ratgeber wie keinen anderen in deinen Händen.", "Hier gibt es keine komplizierten Lektionen oder belehrenden Reden. Dieses eBook ist ein Gespräch unter Frauen, eine helfende Hand, um dir zu helfen, besser zu verstehen, was es bedeutet, begehrt, geliebt und respektiert zu werden."],
      it: ["Tieni tra le mani una guida diversa da tutte le altre.", "Qui niente lezioni complicate né discorsi moralizzatori. Questo eBook è una conversazione tra donne, una mano tesa per aiutarti a capire meglio cosa significa essere desiderata, amata e rispettata."],
      pt: ["Tens nas tuas mãos um guia diferente de todos os outros.", "Aqui não há lições complicadas nem discursos moralistas. Este e-book é uma conversa entre mulheres, uma mão estendida para te ajudar."],
      nl: ["Je hebt een gids in handen zoals geen ander.", "Geen ingewikkelde lessen. Dit e-book is een gesprek tussen vrouwen om je te helpen begrijpen wat het betekent om begeerd en geliefd te worden."],
      ru: ["Вы держите в руках уникальное руководство.", "Здесь нет сложных уроков. Эта книга — разговор между женщинами, рука помощи, чтобы понять, что значит быть желанной."],
      tr: ["Elinizde eşsiz bir rehber tutuyorsunuz.", "Karmaşık dersler yok. Bu e-kitap, kadınlar arasında bir sohbet, arzulanmanın ne demek olduğunu anlamanız için bir yardım elidir."],
      ar: ["بين يديكِ دليل لا مثيل له.", "لا وجود هنا لدروس معقدة. هذا الكتاب هو حوار بين النساء، ويد ممدودة لتساعدكِ على فهم معنى أن تكوني مرغوبة ومحبوبة."]
    },
    rightParagraphs: {
      fr: ["Être désirée, ce n’est pas seulement plaire à ton homme, c’est te reconnecter à ton pouvoir féminin, à ton charme naturel et à cette confiance qui attire sans forcer.", "Beaucoup de femmes croient qu’il faut tout donner pour garder l’amour d’un homme, alors qu’en réalité, il s’attache davantage à celle qui sait se choisir d’abord.", "Les 20 clés que tu vas découvrir sont simples, vraies et puissantes.", "Elles t’aideront à raviver la flamme, à cultiver ton magnétisme, et surtout à te sentir épanouie dans ton couple.", "Page après page, tu apprendras à devenir cette femme sereine, confiante et irrésistible… celle qu’on n’oublie pas.", "Alors, installe-toi, respire profondément… et prépare-toi à redécouvrir l’art d’être désirée."],
      en: ["Being desired is not just about pleasing your man; it is reconnecting with your feminine power, your natural charm, and that magnetic confidence that attracts effortlessly.", "Many women believe they must give everything to keep a man's love, when in reality, he attaches more deeply to the woman who knows how to choose herself first.", "The 20 keys you are about to discover are simple, authentic, and powerful.", "They will help you reignite the flame, cultivate your charisma, and above all feel fulfilled in your relationship.", "Page after page, you will learn to become that serene, confident, and irresistible woman... the one who is never forgotten.", "So sit back, take a deep breath... and get ready to rediscover the art of being desired."],
      es: ["Ser deseada no es solo gustar a tu hombre, es reconectarte con tu poder femenino, tu encanto natural y esa confianza que atrae sin forzar.", "Muchas mujeres creen que hay que darlo todo para conservar el amor de un hombre, cuando en realidad él se apega más a quien sabe elegirse a sí misma primero.", "Las 20 claves que vas a descubrir son simples, reales y poderosas.", "Te ayudarán a reavivar la llama, cultivar tu magnetismo y sobre todo sentirte plena en tu pareja.", "Página tras página, aprenderás a convertirte en esa mujer serena, segura e irresistible… a la que nunca se olvida.", "Así que ponte cómoda, respira profundo… y prepárate para redescubrir el arte de ser deseada."],
      de: ["Begehrt zu werden bedeutet nicht nur, deinem Mann zu gefallen, sondern dich wieder mit deiner weiblichen Kraft, deinem natürlichen Charme und jenem Selbstvertrauen zu verbinden, das mühelos anzieht.", "Viele Frauen glauben, sie müssten alles geben, um die Liebe eines Mannes zu behalten, während er sich in Wahrheit mehr an die bindet, die sich zuerst selbst wählt.", "Die 20 Schlüssel, die du entdecken wirst, sind einfach, wahr und kraftvoll.", "Sie werden dir helfen, die Flamme neu zu entfachen, deine Ausstrahlung zu kultivieren und dich in deiner Beziehung erfüllt zu fühlen.", "Seite für Seite wirst du lernen, diese gelassene, selbstbewusste und unwiderstehliche Frau zu werden… die man nie vergisst.", "Mach es dir also gemütlich, atme tief durch… und bereite dich darauf vor, die Kunst des Begehrtwerdens neu zu entdecken."],
      it: ["Essere desiderata non significa solo piacere al tuo uomo, significa riconnetterti al tuo potere femminile, al tuo fascino naturale e a quella sicurezza che attrae senza forzare.", "Molte donne credono di dover dare tutto per mantenere l'amore di un uomo, mentre in realtà lui si lega di più a colei che sa scegliere se stessa per prima.", "Le 20 chiavi che scoprirai sono semplici, autentiche e potenti.", "Ti aiuteranno a riaccendere la fiamma, a coltivare il tuo magnetismo e soprattutto a sentirti appagata nella tua coppia.", "Pagina dopo pagina, imparerai a diventare quella donna serena, sicura e irresistibile… quella che non si dimentica.", "Quindi accomodati, fai un bel respiro profondo… e preparati a riscoprire l'arte di essere desiderata."],
      pt: ["Ser desejada não é apenas agradar ao teu homem, é reconetares-te com o teu poder feminino, o teu charme natural e essa confiança que atrai sem forçar.", "Muitas mulheres acreditam que é preciso dar tudo para manter o amor de um homem, quando na realidade ele se apega mais àquela que se sabe escolher a si mesma primeiro.", "As 20 chaves que vais descobrir são simples, verdadeiras e poderosas.", "Elas vão ajudar-te a acender a chama, a cultivar o teu magnétisme e a sentir-te realizada no teu relacionamento.", "Página após página, aprenderás a tornar-te nessa mulher serena, confiante e irresistível… aquela que nunca é esquecida.", "Por isso, acomoda-te, respira fundo… e prepara-te para redescoobrir a arte de ser desejada."],
      nl: ["Begeerd worden is niet alleen je man behagen, maar weer in verbinding staan met je vrouwelijke kracht en natuurlijke charme.", "De 20 sleutels die je gaat ontdekken zijn eenvoudig, echt en krachtig.", "Ze helpen je de vlam te herontsteken en je gelukkig te voelen in je relatie.", "Pagina na pagina word je die zelfverzekerde, onweerstaanbare vrouw."],
      ru: ["Быть желанной — это не просто нравиться мужчине, это соединение со своей женской силой и природным шармом.", "Многие женщины думают, что нужно отдать всё, но мужчина больше привязывается к той, которая выбирает себя.", "20 ключей помогут вам разжечь страсть и почувствовать себя счастливой.", "Страница за страницей вы станете неотразимой женщиной, которую невозможно забыть."],
      tr: ["Arzulanmak sadece erkeğinizi mutlu etmek değil, dişil gücünüz ve doğal cazibenizle yeniden bağ kurmaktır.", "20 anahtar ilişki alevini yeniden yakmanıza yardımcı olacak.", "Sayfa sayfa, asla unutulmayan o özgüvenli ve karşı konulmaz kadına dönüşeceksiniz."],
      ar: ["أن تكوني مرغوبة ليس مجرد إرضاء لشريككِ، بل هو إعادة اتصال بقوتكِ الأنثوية وسحركِ الطبيعي.", "تعتقد الكثير من النساء أنه يجب إعطاء كل شيء، بينما في الواقع يرتبط الرجل أكثر بمن تعرف كيف تختار نفسها أولاً.", "المفاتيح الـ٢٠ ستساعدكِ على إحياء الشغف وتعزيز جاذبيتكِ.", "صفحة تلو أخرى، ستتعلمين كيف تكونين تلك المرأة الهادئة والواثقة التي لا تُنسى."]
    },
    images: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
    ]
  },

  // Page 3: TOC 1
  {
    pageNumber: 3,
    type: 'toc',
    title: { fr: "Sommaire", en: "Table of Contents", es: "Índice", de: "Inhaltsverzeichnis", it: "Sommario", pt: "Índice", nl: "Inhoudsopgave", ru: "Содержание", tr: "İçindekiler", ar: "الفهرس" },
    tocItems: [
      { keyNum: 1, title: { fr: "Te connaître et t’aimer", en: "Know and Love Yourself", es: "Conocerte y Amarte", de: "Dich Selbst Kennen und Lieben", it: "Conoscerti e Amarti", pt: "Conhecer-te e Amar-te", nl: "Kennis en Zelfliefde", ru: "Познать и Полюбить Себя", tr: "Kendini Tanı ve Sev", ar: "أن تعرفي نفسكِ وتُحبيها" } },
      { keyNum: 2, title: { fr: "Cultiver ton indépendance", en: "Cultivate Your Independence", es: "Cultivar tu Independencia", de: "Kultiviere Deine Unabhängigkeit", it: "Coltivare la Tua Indipendenza", pt: "Cultivar a Tua Independência", nl: "Onafhankelijkheid Cultiveren", ru: "Развивать Независимость", tr: "Bağımsızlığını Geliştir", ar: "تنمية استقلاليتكِ" } },
      { keyNum: 3, title: { fr: "Le mystère maîtrisé", en: "Mastered Mystery", es: "El Misterio Dominado", de: "Geheimnis Vollendet", it: "Il Mistero Padroneggiato", pt: "O Mistério Dominado", nl: "Beheerst Mysterie", ru: "Мастерство Тайны", tr: "Gizemi Yönetmek", ar: "إتقان الغموض" } },
      { keyNum: 4, title: { fr: "Communication claire et séduisante", en: "Clear Communication", es: "Comunicación Clara", de: "Klare Kommunikation", it: "Comunicazione Chiara", pt: "Comunicação Clara", nl: "Duidelijke Communicatie", ru: "Четкое Общение", tr: "Net İletişim", ar: "تواصل واضح" } },
      { keyNum: 5, title: { fr: "Le pouvoir du regard et du toucher", en: "Power of Gaze and Touch", es: "El Poder de la Mirada", de: "Die Macht des Blicks", it: "Il Potere dello Sguardo", pt: "O Poder do Olhar", nl: "Kracht van de Blik", ru: "Сила Взгляда", tr: "Bakışın Gücü", ar: "قوة النظرة واللمسة" } },
      { keyNum: 6, title: { fr: "Rituels matin/soir pour renforcer le lien", en: "Morning/Evening Rituals", es: "Rituales Mañana/Noche", de: "Morgen-/Abendrituale", it: "Rituali Mattina/Sera", pt: "Rituais Manhã/Noite", nl: "Dagelijkse Rituelen", ru: "Дневные Ритуалы", tr: "Günlük Ritüeller", ar: "طقوس الصباح والمساء" } }
    ],
    images: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"]
  },

  // Page 4: TOC 2
  {
    pageNumber: 4,
    type: 'toc',
    title: { fr: "Sommaire", en: "Table of Contents", es: "Índice", de: "Inhaltsverzeichnis", it: "Sommario", pt: "Índice", nl: "Inhoudsopgave", ru: "Содержание", tr: "İçindekiler", ar: "الفهرس" },
    tocItems: [
      { keyNum: 7, title: { fr: "L’art du compliment stratégique", en: "Strategic Compliments", es: "El Cumplido Estratégico", de: "Strategische Komplimente", it: "Complimenti Strategici", pt: "Elogios Estratégicos", nl: "Strategische Complimenten", ru: "Стратегический Комплимент", tr: "Stratejik İltifat", ar: "فن الإطراء الاستراتيجي" } },
      { keyNum: 8, title: { fr: "Maintenir la passion sexuelle", en: "Maintaining Sexual Passion", es: "Mantener la Pasión Sexual", de: "Sexuelle Leidenschaft Bewahren", it: "Mantenere la Passione Sessuale", pt: "Manter a Paixão Sexual", nl: "Seksuele Passie Behouden", ru: "Сохранять Сексуальную Страсть", tr: "Cinsel Tutkuyu Korumak", ar: "الحفاظ على الشغف" } },
      { keyNum: 9, title: { fr: "Gérer les conflits avec classe", en: "Managing Conflicts with Class", es: "Manejar Conflictos con Clase", de: "Konflikte mit Stil Lösen", it: "Gestire i Conflitti con Classe", pt: "Gerir Conflitos com Classe", nl: "Conflictbeheersing met Klasse", ru: "Управление Конфликтами с Классом", tr: "Zarafetle Çatışma Yönetimi", ar: "إدارة الخلافات برقي" } },
      { keyNum: 10, title: { fr: "Savoir dire non sans culpabilité", en: "Saying No Without Guilt", es: "Decir No sin Culpabilidad", de: "Nein Sagen Ohne Schuldgefühle", it: "Dire No Senza Senso di Colpa", pt: "Saber Dizer Não sem Culpabilidade", nl: "Nee Zeggen Zonder Schuldgevoel", ru: "Уметь Говорить «Нет» Без Вины", tr: "Suçluluk Duymadan Hayır Demek", ar: "قول لا دون شعور بالذنب" } },
      { keyNum: 11, title: { fr: "Créer des surprises mémorables", en: "Creating Memorable Surprises", es: "Crear Sorpresas Memorables", de: "Unvergessliche Überraschungen Schaffen", it: "Creare Sorprese Memorabili", pt: "Criar Surpresas Memoráveis", nl: "Gedenkwaardige Verrassingen", ru: "Незабываемые Сюрпризы", tr: "Unutulmaz Sürprizler Oluşturmak", ar: "صنع مفاجآت لا تُنسى" } },
      { keyNum: 12, title: { fr: "Tes limites = ton charme", en: "Your Boundaries = Your Charm", es: "Tus Límites = Tu Encanto", de: "Deine Grenzen = Dein Charme", it: "I Tuoi Limiti = Il Tuo Fascino", pt: "Os Teus Limites = O Teu Charme", nl: "Je Grenzen = Je Charme", ru: "Твои Границы = Твой Шарм", tr: "Sınırların = Çekiciliğin", ar: "حُدودكِ = سحركِ" } }
    ],
    images: ["https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop"]
  }
];

// Generate pages 5 to 45 automatically with rich texts across 10 languages
for (let p = 5; p <= 45; p++) {
  if (p === 5 || p === 6) {
    PAGES_DATA.push({
      pageNumber: p,
      type: 'toc',
      title: { fr: "Sommaire", en: "Table of Contents", es: "Índice", de: "Inhaltsverzeichnis", it: "Sommario", pt: "Índice", nl: "Inhoudsopgave", ru: "Содержание", tr: "İçindekiler", ar: "الفهرس" },
      tocItems: p === 5 ? [
        { keyNum: 13, title: { fr: "Le langage des petites attentions", en: "Small Gestures", es: "Detalles Pequeños", de: "Kleine Gesten", it: "Piccole Attenzioni", pt: "Pequenas Atenções", nl: "Kleine Attenties", ru: "Язык Мелочей", tr: "Küçük İlgi Dili", ar: "لغة الاهتمامات الصغيرة" } },
        { keyNum: 14, title: { fr: "Entretenir ta vie sociale", en: "Nurturing Social Life", es: "Vida Social", de: "Soziales Leben", it: "Vita Sociale", pt: "Vida Social", nl: "Sociaal Leven", ru: "Социальная Жизнь", tr: "Sosyal Yaşam", ar: "الحياة الاجتماعية" } },
        { keyNum: 15, title: { fr: "La confiance financière et émotionnelle", en: "Financial & Emotional Confidence", es: "Confianza Financiera", de: "Finanzielle Sicherheit", it: "Fiducia Finanziaria", pt: "Confiança Financeira", nl: "Zekerheid", ru: "Уверенность", tr: "Finansal Özgüven", ar: "الثقة المالية والعاطفية" } },
        { keyNum: 16, title: { fr: "Mise en valeur vestimentaire subtile", en: "Subtle Style", es: "Estilo Sutil", de: "Subtiler Stil", it: "Stile Subdolo", pt: "Estilo Subtil", nl: "Subtiele Stijl", ru: "Утонченный Стиль", tr: "Zarif Tarz", ar: "إبراز الأناقة بذكاء" } },
        { keyNum: 17, title: { fr: "Écouter activement et garder l’attention", en: "Active Listening", es: "Escucha Activa", de: "Aktives Zuhören", it: "Ascolto Attivo", pt: "Escuta Ativa", nl: "Actief Luisteren", ru: "Активное Слушание", tr: "Etkin Dinleme", ar: "الاستماع الفعال" } },
        { keyNum: 18, title: { fr: "Réinventer les rendez-vous amoureux", en: "Reinventing Date Nights", es: "Reinventar las Citas", de: "Dates Neu Erfinden", it: "Rinverdire gli Appuntamenti", pt: "Reinventar Encontros", nl: "Dates Herontdekken", ru: "Новые Свидания", tr: "Buluşmaları Yenilemek", ar: "تجديد المواعيد الغرامية" } }
      ] : [
        { keyNum: 19, title: { fr: "Le pardon qui protège la relation", en: "Forgiveness that Protects", es: "El Perdón que Protege", de: "Vergebung die Schützt", it: "Il Perdono che Protegge", pt: "O Perdão que Protege", nl: "Vergeving die Beschermt", ru: "Прощение", tr: "Bağışlama", ar: "المغفرة التي تحمي العلاقة" } },
        { keyNum: 20, title: { fr: "Devenir irremplaçable sans te perdre", en: "Becoming Irreplaceable", es: "Volverte Irremplazable", de: "Unersetzlich Werden", it: "Diventare Insostituibile", pt: "Tornar-te Irsubstituível", nl: "Onvervangbaar Worden", ru: "Стать Незаменимой", tr: "Vazgeçilmez Olmak", ar: "أن تصبحي لا تُعوضين" } }
      ],
      images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"]
    });
  } else if (p === 7 || p === 8) {
    PAGES_DATA.push({
      pageNumber: p,
      type: 'intro',
      title: { fr: "Introduction", en: "Introduction", es: "Introducción", de: "Einleitung", it: "Introduzione", pt: "Introdução", nl: "Inleiding", ru: "Введение", tr: "Giriş", ar: "مقدمة" },
      paragraphs: {
        fr: ["Aimer, c’est facile. Mais rester désirée, comprise et valorisée dans le temps, c’est un art.", "Un art que peu de femmes apprennent vraiment, et pourtant, c’est lui qui change tout dans une relation.", "Cet ebook est né d’un constat simple : trop de femmes donnent tout, sans toujours savoir comment préserver leur mystère, leur force, leur essence."],
        en: ["Loving is easy. But remaining desired, understood, and valued over time is an art.", "An art that few women truly learn, and yet it is what changes everything in a relationship.", "This eBook was born from a simple observation: too many women give everything without knowing how to preserve their mystery."],
        es: ["Amar es fácil. Pero seguir siendo deseada y valorada con el tiempo es un arte.", "Un arte que pocas mujeres aprenden realmente y que lo cambia todo en una relación.", "Este eBook nació de una simple constatación: demasiadas mujeres lo dan todo."],
        de: ["Lieben ist einfach. Aber begehrt und geschätzt zu bleiben ist eine Kunst.", "Eine Kunst, die nur wenige Frauen wirklich lernen.", "Dieses eBook entstand aus einer einfachen Erkenntnis."],
        it: ["Amare è facile. Ma rimanere desiderata e valorizzata nel tempo è un'arte.", "Un'arte che poche donne imparano davvero.", "Questo eBook nasce da un'osservazione semplice."],
        pt: ["Amar é fácil. Mas continuar a ser desejada e valorizada é uma arte.", "Uma arte que poucas mulheres aprendem de verdade.", "Este e-book nasceu de uma constatação simples."],
        nl: ["Liefhebben is eenvoudig. Maar begeerd blijven is een kunst.", "Een kunst die weinig vrouwen leren.", "Dit e-book is ontstaan uit een eenvoudige observatie."],
        ru: ["Любить просто. Но оставаться желанной со временем — это искусство.", "Искусство, которому мало кто учится.", "Эта книга родилась из простого наблюдения."],
        tr: ["Sevmek kolaydır. Ancak zamanla arzulanmak bir sanattır.", "Pek az kadının öğrendiği bir sanat.", "Bu e-kitap basit bir gözlemden doğdu."],
        ar: ["الحب سهل. ولكن أن تظلي مرغوبة ومقدرة مع مرور الوقت هو فن.", "فنٌ تكتشفه قليل من النساء ويغير كل شيء في العلاقة.", "ولد هذا الكتاب من ملاحظة بسيطة."]
      },
      images: ["https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop"]
    });
  } else if (p >= 9 && p <= 42) {
    const keyNum = Math.floor((p - 9) / 2) + 1;
    const isPart2 = (p - 9) % 2 === 1;
    PAGES_DATA.push({
      pageNumber: p,
      type: 'key',
      keyNumber: keyNum,
      title: {
        fr: \`Clé \${keyNum} : \${isPart2 ? 'Approfondissement' : 'Principe Fondamental'}\`,
        en: \`Key \${keyNum}: \${isPart2 ? 'Deeper Insight' : 'Core Principle'}\`,
        es: \`Clave \${keyNum}: \${isPart2 ? 'Profundización' : 'Principio Fundamental'}\`,
        de: \`Schlüssel \${keyNum}: \${isPart2 ? 'Vertiefung' : 'Grundprinzip'}\`,
        it: \`Chiave \${keyNum}: \${isPart2 ? 'Approfondimento' : 'Principio Fondamentale'}\`,
        pt: \`Chave \${keyNum}: \${isPart2 ? 'Aprofundamento' : 'Princípio Fundamental'}\`,
        nl: \`Sleutel \${keyNum}: \${isPart2 ? 'Verdieping' : 'Kernprincipe'}\`,
        ru: \`Ключ \${keyNum}: \${isPart2 ? 'Углубление' : 'Главный Принцип'}\`,
        tr: \`Anahtar \${keyNum}: \${isPart2 ? 'Derinleşme' : 'Temel İlke'}\`,
        ar: \`المفتاح \${keyNum}: \${isPart2 ? 'تعميق الفهم' : 'المبدأ الأساسي'}\`
      },
      paragraphs: {
        fr: [\`Prends le temps d’appliquer cette clé dans ton quotidien pour voir la différence.\`, \`Souviens-toi que la transformation commence d'abord en toi-même.\`],
        en: [\`Take the time to apply this key in your daily life to experience the difference.\`, \`Remember that real transformation begins within yourself.\`],
        es: [\`Tómate el tiempo de aplicar esta clave en tu día a día para ver la diferencia.\`, \`Recuerda que la transformación empieza en ti misma.\`],
        de: [\`Nimm dir die Zeit, diesen Schlüssel täglich anzuwenden.\`, \`Erinnere dich, dass jede Veränderung in dir selbst beginnt.\`],
        it: [\`Prenditi il tempo di applicare questa chiave ogni giorno.\`, \`Ricorda che la trasformazione inizia da te stessa.\`],
        pt: [\`Toma o teu tempo para aplicar esta chave no teu dia a dia.\`, \`Lembra-te de que a transformação começa em ti.\`],
        nl: [\`Neem de tijd om deze sleutel toe te passen.\`, \`Onthoud dat verandering in jezelf begint.\`],
        ru: [\`Применяйте этот ключ ежедневно, чтобы почувствовать разницу.\`, \`Помните, что трансформации начинаются с вас самих.\`],
        tr: [\`Bu anahtarı günlük hayatınızda uygulamaya zaman ayırın.\`, \`Değişimin önce kendinizde başladığını unutmayın.\`],
        ar: [\`خوذي الوقت الكافي لتطبيق هذا المفتاح في حياتكِ اليومية لرؤية الفرق.\`, \`تذكري دائماً أن التغيير الحقيقي يبدأ من داخلكِ أولاً.\`]
      },
      images: ["https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop"]
    });
  } else {
    PAGES_DATA.push({
      pageNumber: p,
      type: p === 45 ? 'acknowledgements' : 'conclusion',
      title: p === 45 ? { fr: "Remerciements", en: "Acknowledgments", es: "Agradecimientos", de: "Danksagung", it: "Ringraziamenti", pt: "Agradecimentos", nl: "Dankwoord", ru: "Благодарности", tr: "Teşekkürler", ar: "شكر وتقدير" }
                      : { fr: "Conclusion", en: "Conclusion", es: "Conclusión", de: "Schlusswort", it: "Conclusione", pt: "Conclusão", nl: "Conclusie", ru: "Заключение", tr: "Sonuç", ar: "خاتمة" },
      paragraphs: {
        fr: ["Merci d’avoir pris ce temps pour toi. Ce ebook est un nouveau départ.", "Avec tout mon amour, — Lina Rela"],
        en: ["Thank you for taking this time for yourself. This eBook is a brand new start.", "With all my love, — Lina Rela"],
        es: ["Gracias por tomarte este tiempo para ti. Este eBook es un nuevo comienzo.", "Con todo mi amor, — Lina Rela"],
        de: ["Danke, dass du dir diese Zeit genommen hast. Dies ist ein neuer Anfang.", "Mit all meiner Liebe, — Lina Rela"],
        it: ["Grazie per aver dedicato questo tempo a te stessa. È un nuovo inizio.", "Con tutto il mio amore, — Lina Rela"],
        pt: ["Obrigada por tirares este tempo para ti. Este e-book é um novo começo.", "Com todo o meu amor, — Lina Rela"],
        nl: ["Bedankt voor je tijd. Dit e-book is een nieuw begin.", "Met al mijn liefde, — Lina Rela"],
        ru: ["Спасибо за время для себя. Эта книга — новое начало.", "С любовью, — Лина Рела"],
        tr: ["Kendinize ayırdığınız bu zaman için teşekkürler. Bu yeni bir başlangıç.", "Tüm sevgimle, — Lina Rela"],
        ar: ["شكراً لكِ على تخصيص هذا الوقت لنفسكِ. هذا الكتاب هو بداية جديدة.", "مع كل حبي وتقديري، — لينا ريلا"]
      }
    });
  }
}

return exportTS;
`;
};

fs.writeFileSync(path.join(process.cwd(), 'generate_pages_data.js'), fileContent, 'utf-8');
console.log('Script updated');
