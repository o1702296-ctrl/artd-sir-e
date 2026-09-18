import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Generate pagesData.ts supporting 10 languages
const langCodes = ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ru', 'tr', 'ar'];

const sampleTitles = {
  fr: ["Te connaître et t’aimer", "Cultiver ton indépendance", "Le mystère maîtrisé", "Communication claire et séduisante", "Le pouvoir du regard et du toucher", "Rituels matin/soir pour renforcer le lien", "L’art du compliment stratégique", "Maintenir la passion sexuelle", "Gérer les conflits avec classe", "Savoir dire non sans culpabilité", "Créer des surprises mémorables", "Tes limites = ton charme", "Le langage des petites attentions", "Entretenir ta vie sociale", "La confiance financière et émotionnelle", "Mise en valeur vestimentaire subtile", "Écouter activement et garder l’attention", "Réinventer les rendez-vous amoureux", "Le pardon qui protège la relation", "Devenir irremplaçable sans te perdre"],
  en: ["Know and Love Yourself", "Cultivate Your Independence", "Mastered Mystery", "Clear and Seductive Communication", "The Power of Gaze and Touch", "Morning/Evening Rituals", "Strategic Compliments", "Maintaining Sexual Passion", "Managing Conflicts with Class", "Saying No Without Guilt", "Creating Memorable Surprises", "Your Boundaries = Your Charm", "Small Gestures", "Nurturing Social Life", "Financial & Emotional Confidence", "Subtle Style Enhancement", "Active Listening", "Reinventing Date Nights", "Forgiveness that Protects", "Becoming Irreplaceable"],
  es: ["Conocerte y Amarte", "Cultivar tu Independencia", "El Misterio Dominado", "Comunicación Clara y Seductora", "El Poder de la Mirada y del Tacto", "Rituales Mañana/Noche", "El Cumplido Estratégico", "Mantener la Pasión Sexual", "Manejar Conflictos con Clase", "Decir No sin Culpabilidad", "Crear Sorpresas Memorables", "Tus Límites = Tu Encanto", "Los Pequeños Detalles", "Mantener tu Vida Social", "Confianza Financiera y Emocional", "Realce Vestimentario Sutil", "Escuchar Activamente", "Reinventar las Citas Románticas", "El Perdón que Protege", "Volverte Irremplazable"],
  de: ["Dich Selbst Kennen und Lieben", "Kultiviere Deine Unabhängigkeit", "Geheimnis Vollendet", "Klare Kommunikation", "Die Macht des Blicks und der Berührung", "Morgen-/Abendrituale", "Strategische Komplimente", "Sexuelle Leidenschaft Bewahren", "Konflikte mit Stil Lösen", "Nein Sagen Ohne Schuldgefühle", "Unvergessliche Überraschungen", "Deine Grenzen = Dein Charme", "Kleine Aufmerksamkeiten", "Soziales Leben Pflegen", "Finanzielle & Emotionale Sicherheit", "Subtiler Stil", "Aktives Zuhören", "Dates Neu Erfinden", "Vergebung die Schützt", "Unersetzlich Werden"],
  it: ["Conoscerti e Amarti", "Coltivare la Tua Indipendenza", "Il Mistero Padroneggiato", "Comunicazione Chiara e Seducente", "Il Potere dello Sguardo e del Tatto", "Rituali Mattina/Sera", "Complimenti Strategici", "Mantenere la Passione Sessuale", "Gestire i Conflitti con Classe", "Dire No Senza Senso di Colpa", "Creare Sorprese Memorabili", "I Tuoi Limiti = Il Tuo Fascino", "Le Piccole Attenzioni", "Mantenere la Vita Sociale", "Fiducia Finanziaria ed Emozionale", "Valorizzazione dell'Abbigliamento", "Ascolto Attivo", "Rinverdire gli Appuntamenti", "Il Perdono che Protegge", "Diventare Insostituibile"],
  pt: ["Conhecer-te e Amar-te", "Cultivar a Tua Independência", "O Mistério Dominado", "Comunicação Clara e Sedutora", "O Poder do Olhar e do Toque", "Rituais Manhã/Noite", "Elogios Estratégicos", "Manter a Paixão Sexual", "Gerir Conflitos com Classe", "Saber Dizer Não sem Culpabilidade", "Criar Surpresas Memoráveis", "Os Teus Limites = O Teu Charme", "Pequenas Atenções", "Vida Social", "Confiança Financeira e Emocional", "Estilo Subtil", "Escuta Ativa", "Reinventar Encontros", "O Perdão que Protege", "Tornar-te Irsubstituível"],
  nl: ["Kennis en Zelfliefde", "Onafhankelijkheid Cultiveren", "Beheerst Mysterie", "Duidelijke Communicatie", "Kracht van Blik en Aanraking", "Dagelijkse Rituelen", "Strategische Complimenten", "Seksuele Passie Behouden", "Conflictbeheersing met Klasse", "Nee Zeggen Zonder Schuldgevoel", "Gedenkwaardige Verrassingen", "Je Grenzen = Je Charme", "Kleine Attenties", "Sociaal Leven", "Financiële & Emotionele Zekerheid", "Subtiele Kledingstijl", "Actief Luisteren", "Dates Herontdekken", "Vergeving die Beschermt", "Onvervangbaar Worden"],
  ru: ["Познать и Полюбить Себя", "Развивать Независимость", "Мастерство Тайны", "Четкое и Соблазнительное Общение", "Сила Взгляда и Прикосновения", "Утренние и Вечерние Ритуалы", "Стратегический Комплимент", "Сохранять Сексуальную Страсть", "Управление Конфликтами с Классом", "Уметь Говорить «Нет» Без Вины", "Незабываемые Сюрпризы", "Твои Границы = Твой Шарм", "Язык Мелочей", "Социальная Жизнь", "Финансовая и Эмоциональная Уверенность", "Утонченный Стиль", "Активное Слушание", "Переосмысление Свиданий", "Прощение, Защищающее Любовь", "Стать Незаменимой"],
  tr: ["Kendini Tanı ve Sev", "Bağımsızlığını Geliştir", "Gizemi Yönetmek", "Net ve Etkileyici İletişim", "Bakışın ve Dokunuşun Gücü", "Sabah/Akşam Ritüelleri", "Stratejik İltifat", "Cinsel Tutkuyu Korumak", "Zarafetle Çatışma Yönetimi", "Suçluluk Duymadan Hayır Demek", "Unutulmaz Sürprizler Oluşturmak", "Sınırların = Çekiciliğin", "Küçük İlgi Dili", "Sosyal Yaşamı Korumak", "Finansal ve Duygusal Özgüven", "Zarif Giyim Tarzı", "Etkin Dinleme", "Buluşmaları Yeniden Keşfetmek", "İlişkiyi Koruyan Bağışlama", "Vazgeçilmez Olmak"],
  ar: ["أن تعرفي نفسكِ وتُحبيها", "تنمية استقلاليتكِ", "إتقان الغموض", "تواصل واضح وجذاب", "قوة النظرة واللمسة", "طقوس الصباح والمساء", "فن الإطراء الاستراتيجي", "الحفاظ على الشغف", "إدارة الخلافات برقي", "قول لا دون شعور بالذنب", "صنع مفاجآت لا تُنسى", "حُدودكِ = سحركِ", "لغة الاهتمامات الصغيرة", "الاهتمام بالحياة الاجتماعية", "الثقة المالية والعاطفية", "إبراز الأناقة بذكاء", "الاستماع الفعال", "تجديد المواعيد الغرامية", "المغفرة التي تحمي العلاقة", "أن تصبحي لا تُعوضين"]
};

let pagesArray = [];

// Page 1: Cover
pagesArray.push({
  pageNumber: 1, type: 'cover',
  title: Object.fromEntries(langCodes.map(l => [l, UI_TRANSLATIONS_MAP[l]?.title || "L’art d’être désirée"])),
  subtitle: Object.fromEntries(langCodes.map(l => [l, UI_TRANSLATIONS_MAP[l]?.subtitle || "20 clés pour transformer ton couple"])),
  author: "Lina Rela", bgGradient: "from-pink-400 via-purple-400 to-pink-500",
  images: ["https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop"]
});

// Page 2: Preface
pagesArray.push({
  pageNumber: 2, type: 'preface', author: "Lina Rela",
  title: { fr: "Préface", en: "Preface", es: "Prefacio", de: "Vorwort", it: "Prefazione", pt: "Prefácio", nl: "Voorwoord", ru: "Предисловие", tr: "Önsöz", ar: "مقدمة" },
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
  leftParagraphs: Object.fromEntries(langCodes.map(l => [l, [
    l === 'fr' ? "Tu tiens entre tes mains un guide pas comme les autres." :
    l === 'en' ? "You hold in your hands a guide unlike any other." :
    l === 'es' ? "Tienes en tus manos una guía diferente a todas las demás." :
    l === 'de' ? "Du hältst einen Ratgeber wie keinen anderen in deinen Händen." :
    l === 'it' ? "Tieni tra le mani una guida diversa da tutte le altre." :
    l === 'pt' ? "Tens nas tuas mãos um guia diferente de todos os outros." :
    l === 'nl' ? "Je hebt een gids in handen zoals geen ander." :
    l === 'ru' ? "Вы держите в руках уникальное руководство." :
    l === 'tr' ? "Elinizde eşsiz bir rehber tutuyorsunuz." : "بين يديكِ دليل لا مثيل له.",
    l === 'fr' ? "Ici, pas de leçons compliquées ni de discours moralisateurs. Cet eBook est une conversation entre femmes..." :
    l === 'en' ? "Here, no complicated lessons or preachy speeches. This eBook is a conversation between women..." :
    l === 'es' ? "Aquí no hay lecciones complicadas ni discursos moralizadores. Este eBook es una conversación..." :
    l === 'de' ? "Hier gibt es keine komplizierten Lektionen. Dieses eBook ist ein Gespräch unter Frauen..." :
    l === 'it' ? "Qui niente lezioni complicate. Questo eBook è una conversazione tra donne..." :
    l === 'pt' ? "Aqui não há lições complicadas. Este e-book é uma conversa entre mulheres..." :
    l === 'nl' ? "Geen ingewikkelde lessen. Dit e-book is een gesprek tussen vrouwen..." :
    l === 'ru' ? "Здесь нет сложных уроков. Эта книга — разговор между женщинами..." :
    l === 'tr' ? "Karmaşık dersler yok. Bu e-kitap, kadınlar arasında bir sohbet..." : "لا وجود هنا لدروس معقدة. هذا الكتاب هو حوار بين النساء..."
  ]])),
  rightParagraphs: Object.fromEntries(langCodes.map(l => [l, [
    l === 'fr' ? "Être désirée, ce n’est pas seulement plaire à ton homme, c’est te reconnecter à ton pouvoir féminin..." :
    l === 'en' ? "Being desired is not just about pleasing your man; it is reconnecting with your feminine power..." :
    l === 'es' ? "Ser deseada no es solo gustar a tu hombre, es reconectarte con tu poder femenino..." :
    l === 'de' ? "Begehrt zu werden bedeutet nicht nur, deinem Mann zu gefallen, sondern dich wieder mit deiner weiblichen Kraft zu verbinden..." :
    l === 'it' ? "Essere desiderata non significa solo piacere al tuo uomo, significa riconnetterti al tuo potere femminile..." :
    l === 'pt' ? "Ser desejada não é apenas agradar ao teu homem, é reconetares-te com o teu poder feminino..." :
    l === 'nl' ? "Begeerd worden is niet alleen je man behagen, maar weer in verbinding staan met je vrouwelijke kracht..." :
    l === 'ru' ? "Быть желанной — это не просто нравиться мужчине, это соединение со своей женской силой..." :
    l === 'tr' ? "Arzulanmak sadece erkeğinizi mutlu etmek değil, dişil gücünüzle yeniden bağ kurmaktır..." : "أن تكوني مرغوبة ليس مجرد إرضاء لشريككِ، بل هو إعادة اتصال بقوتكِ الأنثوية...",
    l === 'fr' ? "Les 20 clés que tu vas découvrir sont simples, vraies et puissantes." :
    l === 'en' ? "The 20 keys you are about to discover are simple, authentic, and powerful." :
    l === 'es' ? "Las 20 claves que vas a descubrir son simples, reales y poderosas." :
    l === 'de' ? "Die 20 Schlüssel, die du entdecken wirst, sind einfach, wahr und kraftvoll." :
    l === 'it' ? "Le 20 chiavi che scoprirai sono semplici, autentiche e potenti." :
    l === 'pt' ? "As 20 chaves que vais descobrir são simples, verdadeiras e poderosas." :
    l === 'nl' ? "De 20 sleutels die je gaat ontdekken zijn eenvoudig, echt en krachtig." :
    l === 'ru' ? "20 ключей помогут вам разжечь страсть и почувствовать себя счастливой." :
    l === 'tr' ? "Keşfedeceğiniz 20 anahtar basit, gerçek ve güçlüdür." : "المفاتيح الـ٢٠ ستساعدكِ على إحياء الشغف وتعزيز جاذبيتكِ."
  ]])),
  images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"]
});

// Pages 3-6: TOC
for (let tocPage = 3; tocPage <= 6; tocPage++) {
  const startKey = (tocPage - 3) * 6 + 1;
  const endKey = Math.min(20, startKey + 5);
  let items = [];
  for (let k = startKey; k <= endKey; k++) {
    items.push({
      keyNum: k,
      title: Object.fromEntries(langCodes.map(l => [l, sampleTitles[l][k - 1] || sampleTitles.fr[k - 1]]))
    });
  }
  pagesArray.push({
    pageNumber: tocPage, type: 'toc',
    title: { fr: "Sommaire", en: "Table of Contents", es: "Índice", de: "Inhaltsverzeichnis", it: "Sommario", pt: "Índice", nl: "Inhoudsopgave", ru: "Содержание", tr: "İçindekiler", ar: "الفهرس" },
    tocItems: items,
    images: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"]
  });
}

// Pages 7-8: Intro
for (let p = 7; p <= 8; p++) {
  pagesArray.push({
    pageNumber: p, type: 'intro',
    title: { fr: "Introduction", en: "Introduction", es: "Introducción", de: "Einleitung", it: "Introduzione", pt: "Introdução", nl: "Inleiding", ru: "Введение", tr: "Giriş", ar: "مقدمة" },
    paragraphs: Object.fromEntries(langCodes.map(l => [l, [
      l === 'fr' ? "Aimer, c’est facile. Mais rester désirée, comprise et valorisée dans le temps, c’est un art." :
      l === 'en' ? "Loving is easy. But remaining desired, understood, and valued over time is an art." :
      l === 'es' ? "Amar es fácil. Pero seguir siendo deseada y valorada con el tiempo es un arte." :
      l === 'de' ? "Lieben ist einfach. Aber begehrt und geschätzt zu bleiben ist eine Kunst." :
      l === 'it' ? "Amare è facile. Ma rimanere desiderata e valorizzata nel tempo è un'arte." :
      l === 'pt' ? "Amar é fácil. Mas continuar a ser desejada e valorizada é uma arte." :
      l === 'nl' ? "Liefhebben is eenvoudig. Maar begeerd blijven is een kunst." :
      l === 'ru' ? "Любить просто. Но оставаться желанной со временем — это искусство." :
      l === 'tr' ? "Sevmek kolaydır. Ancak zamanla arzulanmak bir sanattır." : "الحب سهل. ولكن أن تظلي مرغوبة ومقدرة مع مرور الوقت هو فن.",
      l === 'fr' ? "Cet ebook est né d’un constat simple : trop de femmes donnent tout, sans toujours savoir comment préserver leur mystère." :
      l === 'en' ? "This eBook was born from a simple observation: too many women give everything without knowing how to preserve their mystery." :
      l === 'es' ? "Este eBook nació de una simple constatación: demasiadas mujeres lo dan todo sin saber cómo preservar su misterio." :
      l === 'de' ? "Dieses eBook entstand aus einer einfachen Erkenntnis: Zu viele Frauen geben alles." :
      l === 'it' ? "Questo eBook nasce da un'osservazione semplice: troppe donne danno tutto." :
      l === 'pt' ? "Este e-book nasceu de uma constatação simples: demasiadas mulheres dão tudo." :
      l === 'nl' ? "Dit e-book is ontstaan uit een eenvoudige observatie: te veel vrouwen geven alles." :
      l === 'ru' ? "Эта книга родилась из простого наблюдения: слишком многие женщины отдают всё." :
      l === 'tr' ? "Bu e-kitap basit bir gözlemden doğdu: pek çok kadın her şeyini veriyor." : "ولد هذا الكتاب من ملاحظة بسيطة: تعطي الكثير من النساء كل شيء."
    ]])),
    images: ["https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop"]
  });
}

// Pages 9 to 42: Keys 1 to 20
for (let p = 9; p <= 42; p++) {
  const keyNum = Math.floor((p - 9) / 2) + 1;
  const isPart2 = (p - 9) % 2 === 1;
  pagesArray.push({
    pageNumber: p, type: 'key', keyNumber: keyNum,
    title: Object.fromEntries(langCodes.map(l => [l, \`Clé \${keyNum} : \${sampleTitles[l][keyNum - 1] || sampleTitles.fr[keyNum - 1]}\${isPart2 ? ' (Suite)' : ''}\`])),
    paragraphs: Object.fromEntries(langCodes.map(l => [l, [
      l === 'fr' ? \`Découvre la puissance de la Clé \${keyNum} pour sublimer ton couple.\` :
      l === 'en' ? \`Discover the power of Key \${keyNum} to transform your relationship.\` :
      l === 'es' ? \`Descubre el poder de la Clave \${keyNum} para transformar tu pareja.\` :
      l === 'de' ? \`Entdecke die Kraft von Schlüssel \${keyNum} für deine Beziehung.\` :
      l === 'it' ? \`Scopri il potere della Chiave \${keyNum} per trasformare la tua coppia.\` :
      l === 'pt' ? \`Descobre o poder da Chave \${keyNum} para transformar o teu relacionamento.\` :
      l === 'nl' ? \`Ontdek de kracht van Sleutel \${keyNum} om je relatie te transformeren.\` :
      l === 'ru' ? \`Откройте силу Ключа \${keyNum} для трансформации ваших отношений.\` :
      l === 'tr' ? \`İlişkinizi dönüştürmek için \${keyNum}. Anahtarın gücünü keşfedin.\` : \`اكتشفي قوة المفتاح \${keyNum} لتغيير علاقتكِ الزوجية.\`,
      l === 'fr' ? "Chaque petite attention et prise de conscience rapproche deux cœurs avec complicité." :
      l === 'en' ? "Every small attention and awareness brings two hearts closer together." :
      l === 'es' ? "Cada pequeño detalle y toma de conciencia acerca más dos corazones." :
      l === 'de' ? "Jede kleine Aufmerksamtkeit bringt zwei Herzen näher zusammen." :
      l === 'it' ? "Ogni piccola attenzione avvicina due cuori con complicità." :
      l === 'pt' ? "Cada pequena atenção aproxima dois corações." :
      l === 'nl' ? "Elke kleine attentie brengt twee harten dichter bij elkaar." :
      l === 'ru' ? "Каждое маленькое внимание сближает два сердца." :
      l === 'tr' ? "Her küçük ilgi iki kalbi birbirine yakınlaştırır." : "كل اهتمام صغير يقرب بين قلبين بمودة."
    ]])),
    images: ["https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop"]
  });
}

// Pages 43-45: Conclusion & Acknowledgements
for (let p = 43; p <= 45; p++) {
  pagesArray.push({
    pageNumber: p, type: p === 45 ? 'acknowledgements' : 'conclusion',
    title: p === 45 ? { fr: "Remerciements & Mot à la lectrice", en: "Acknowledgments", es: "Agradecimientos", de: "Danksagung", it: "Ringraziamenti", pt: "Agradecimentos", nl: "Dankwoord", ru: "Благодарности", tr: "Teşekkürler", ar: "كلمة شكر وتقدير" }
                    : { fr: "Conclusion & Mot de fin", en: "Conclusion", es: "Conclusión", de: "Schlusswort", it: "Conclusione", pt: "Conclusão", nl: "Conclusie", ru: "Заключение", tr: "Sonuç", ar: "الخاتمة" },
    paragraphs: Object.fromEntries(langCodes.map(l => [l, [
      l === 'fr' ? "Merci d’avoir pris ce temps précieux pour toi." :
      l === 'en' ? "Thank you for taking this precious time for yourself." :
      l === 'es' ? "Gracias por tomarte este tiempo valioso para ti." :
      l === 'de' ? "Danke, dass du dir diese kostbare Zeit genommen hast." :
      l === 'it' ? "Grazie per aver dedicato questo tempo prezioso a te stessa." :
      l === 'pt' ? "Obrigada por tirares este tempo precioso para ti." :
      l === 'nl' ? "Bedankt dat je deze kostbare tijd voor jezelf hebt genomen." :
      l === 'ru' ? "Спасибо за драгоценное время, уделенное себе." :
      l === 'tr' ? "Kendinize ayırdığınız bu değerli zaman için teşekkürler." : "شكراً لكِ على تخصيص هذا الوقت الثمين لنفسكِ.",
      "— Lina Rela"
    ]])),
    images: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"]
  });
}

const UI_TRANSLATIONS_MAP = {
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

const fullTS = \`export type Language = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'ru' | 'tr' | 'ar';

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
}> = \${JSON.stringify(UI_TRANSLATIONS_MAP, null, 2)};

export const PAGES_DATA: PageData[] = \${JSON.stringify(pagesArray, null, 2)};
\`;

fs.writeFileSync(path.join(dir, 'pagesData.ts'), fullTS, 'utf-8');
console.log('Successfully written pagesData.ts with all 10 languages');
