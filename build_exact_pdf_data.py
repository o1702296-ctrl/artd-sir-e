import json
import os
import re

pdf_json_path = 'extracted_pdf_raw.json'
with open(pdf_json_path, 'r', encoding='utf-8') as f:
    raw_pdf_pages = { item['page']: item['raw_lines'] for item in json.load(f) }

lang_codes = ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ru', 'tr', 'ar']

ui_map = {
  "fr": { "title": "L'art d'être désirée", "subtitle": "20 clés pour transformer ton couple", "page": "Page", "of": "sur", "prevPage": "Page précédente", "nextPage": "Page suivante", "printPdf": "Imprimer PDF", "authorBy": "Par Lina Rela", "keyLabel": "Clé" },
  "en": { "title": "The Art of Being Desired", "subtitle": "20 keys to transform your relationship", "page": "Page", "of": "of", "prevPage": "Previous page", "nextPage": "Next page", "printPdf": "Print PDF", "authorBy": "By Lina Rela", "keyLabel": "Key" },
  "es": { "title": "El Arte de Ser Deseada", "subtitle": "20 claves para transformar tu pareja", "page": "Página", "of": "de", "prevPage": "Página anterior", "nextPage": "Página siguiente", "printPdf": "Imprimir PDF", "authorBy": "Por Lina Rela", "keyLabel": "Clave" },
  "de": { "title": "Die Kunst, Begehrt zu Werden", "subtitle": "20 Schlüssel zur Transformation Deiner Beziehung", "page": "Seite", "of": "von", "prevPage": "Vorherige Seite", "nextPage": "Nächste Seite", "printPdf": "PDF drucken", "authorBy": "Von Lina Rela", "keyLabel": "Schlüssel" },
  "it": { "title": "L'Arte di Essere Desiderata", "subtitle": "20 chiavi per trasformare la tua coppia", "page": "Pagina", "of": "di", "prevPage": "Pagina precedente", "nextPage": "Pagina successiva", "printPdf": "Stampa PDF", "authorBy": "Di Lina Rela", "keyLabel": "Chiave" },
  "pt": { "title": "A Arte de Ser Desejada", "subtitle": "20 chaves para transformar o seu relacionamento", "page": "Página", "of": "de", "prevPage": "Página anterior", "nextPage": "Próxima página", "printPdf": "Imprimir PDF", "authorBy": "Por Lina Rela", "keyLabel": "Chave" },
  "nl": { "title": "De Kunst om Begeerd te Worden", "subtitle": "20 sleutels om je relatie te transformeren", "page": "Pagina", "of": "van", "prevPage": "Vorige pagina", "nextPage": "Volgende pagina", "printPdf": "PDF Afdrukken", "authorBy": "Door Lina Rela", "keyLabel": "Sleutel" },
  "ru": { "title": "Искусство Быть Желанной", "subtitle": "20 ключей к трансформации ваших отношений", "page": "Страница", "of": "из", "prevPage": "Предыдущая страница", "nextPage": "Следующая страница", "printPdf": "Печать PDF", "authorBy": "Лина Рела", "keyLabel": "Ключ" },
  "tr": { "title": "Arzulanma Sanatı", "subtitle": "İlişkinizi dönüştürecek 20 anahtar", "page": "Sayfa", "of": "/", "prevPage": "Önceki sayfa", "nextPage": "Sonraki sayfa", "printPdf": "PDF Yazdır", "authorBy": "Lina Rela Tarafından", "keyLabel": "Anahtar" },
  "ar": { "title": "فن أن تكوني مرغوبة", "subtitle": "٢٠ مفتاحاً لتغيير علاقتكِ الزوجية", "page": "صفحة", "of": "من", "prevPage": "الصفحة السابقة", "nextPage": "الصفحة التالية", "printPdf": "طباعة PDF", "authorBy": "بقلم لينا ريلا", "keyLabel": "المفتاح" }
}

key_titles = [
    { "fr": "Te connaître et t’aimer", "en": "Know and Love Yourself", "es": "Conocerte y Amarte", "de": "Dich Selbst Kennen und Lieben", "it": "Conoscerti e Amarti", "pt": "Conhecer-te e Amar-te", "nl": "Ken en Hou van Jezelf", "ru": "Познать и Полюбить Себя", "tr": "Kendini Tanı ve Sev", "ar": "أن تعرفي نفسكِ وتُحبيها" },
    { "fr": "Cultiver ton indépendance", "en": "Cultivate Your Independence", "es": "Cultivar tu Independencia", "de": "Kultiviere Deine Unabhängigkeit", "it": "Coltivare la Tua Indipendenza", "pt": "Cultivar a Tua Independência", "nl": "Onafhankelijkheid Cultiveren", "ru": "Развивать Независимость", "tr": "Bağımsızlığını Geliştir", "ar": "تنمية استقلاليتكِ" },
    { "fr": "Le mystère maîtrisé", "en": "Mastered Mystery", "es": "El Misterio Dominado", "de": "Geheimnis Vollendet", "it": "Il Mistero Padroneggiato", "pt": "O Mistério Dominado", "nl": "Beheerst Mysterie", "ru": "Мастерство Тайны", "tr": "Gizemi Yönetmek", "ar": "إتقان الغموض" },
    { "fr": "Communication claire et séduisante", "en": "Clear and Seductive Communication", "es": "Comunicación Clara y Seductora", "de": "Klare und Verlockende Kommunikation", "it": "Comunicazione Chiara e Seducente", "pt": "Comunicação Clara e Sedutora", "nl": "Duidelijke en Verleidelijke Communicatie", "ru": "Четкое и Соблазнительное Общение", "tr": "Net ve Etkileyici İletişim", "ar": "تواصل واضح وجذاب" },
    { "fr": "Le pouvoir du regard et du toucher", "en": "The Power of Gaze and Touch", "es": "El Poder de la Mirada y del Tacto", "de": "Die Macht des Blicks und der Berührung", "it": "Il Potere dello Sguardo e del Tatto", "pt": "O Poder do Olhar e do Toque", "nl": "Kracht van Blik en Aanraking", "ru": "Сила Взгляда и Прикосновения", "tr": "Bakışın ve Dokunuşun Gücü", "ar": "قوة النظرة واللمسة" },
    { "fr": "Rituels matin/soir pour renforcer le lien", "en": "Morning/Evening Rituals to Strengthen Connection", "es": "Rituales Mañana/Noche para Reforzar el Vínculo", "de": "Morgen-/Abendrituale zur Stärkung der Bindung", "it": "Rituali Mattina/Sera per Rinforzare il Legame", "pt": "Rituais Manhã/Noite para Reforçar a Ligação", "nl": "Dagelijkse Rituelen om de Band te Versterken", "ru": "Утренние и Вечерние Ритуалы", "tr": "İlişkiyi Güçlendiren Günlük Ritüeller", "ar": "طقوس الصباح والمساء لتعزيز الرابط" },
    { "fr": "L’art du compliment stratégique", "en": "The Art of Strategic Compliments", "es": "El Arte del Cumplido Estratégico", "de": "Die Kunst des Strategischen Kompliments", "it": "L'Arte del Complimento Strategico", "pt": "A Arte do Elogio Estratégico", "nl": "Strategische Complimenten", "ru": "Стратегический Комплимент", "tr": "Stratejik İltifat Sanatı", "ar": "فن الإطراء الاستراتيجي" },
    { "fr": "Maintenir la passion sexuelle", "en": "Maintaining Sexual Passion", "es": "Mantener la Pasión Sexual", "de": "Sexuelle Leidenschaft Bewahren", "it": "Mantenere la Passione Sessuale", "pt": "Manter a Paixão Sexual", "nl": "Seksuele Passie Behouden", "ru": "Сохранять Сексуальную Страсть", "tr": "Cinsel Tutkuyu Korumak", "ar": "الحفاظ على الشغف" },
    { "fr": "Gérer les conflits avec classe", "en": "Managing Conflicts with Class", "es": "Manejar Conflictos con Clase", "de": "Konflikte mit Stil Lösen", "it": "Gestire i Conflitti con Classe", "pt": "Gerir Conflitos com Classe", "nl": "Conflictbeheersing met Klasse", "ru": "Управление Конфликтами с Классом", "tr": "Zarafetle Çatışma Yönetimi", "ar": "إدارة الخلافات برقي" },
    { "fr": "Savoir dire non sans culpabilité", "en": "Knowing How to Say No Without Guilt", "es": "Saber Decir No sin Culpabilidad", "de": "Nein Sagen Ohne Schuldgefühle", "it": "Saper Dire No Senza Senso di Colpa", "pt": "Saber Dizer Não sem Culpabilidade", "nl": "Nee Zeggen Zonder Schuldgevoel", "ru": "Уметь Говорить «Нет» Без Вины", "tr": "Suçluluk Duymadan Hayır Demek", "ar": "قول لا دون شعور بالذنب" },
    { "fr": "Créer des surprises mémorables", "en": "Creating Memorable Surprises", "es": "Crear Sorpresas Memorables", "de": "Unvergessliche Überraschungen Schaffen", "it": "Creare Sorprese Memorabili", "pt": "Criar Surpresas Memoráveis", "nl": "Gedenkwaardige Verrassingen", "ru": "Создание Незабываемых Сюрпризов", "tr": "Unutulmaz Sürprizler Oluşturmak", "ar": "صنع مفاجآت لا تُنسى" },
    { "fr": "Tes limites = ton charme", "en": "Your Boundaries = Your Charm", "es": "Tus Límites = Tu Encanto", "de": "Deine Grenzen = Dein Charme", "it": "I Tuoi Limiti = Il Tuo Fascino", "pt": "Os Teus Limites = O Teu Charme", "nl": "Je Grenzen = Je Charme", "ru": "Твои Границы = Твой Шарм", "tr": "Sınırların = Çekiciliğin", "ar": "حُدودكِ = سحركِ" },
    { "fr": "Le langage des petites attentions", "en": "The Language of Small Gestures", "es": "El Lenguaje de los Pequeños Detalles", "de": "Die Sprache der Kleinen Aufmerksamkeiten", "it": "Il Linguaggio delle Piccole Attenzioni", "pt": "O Linguagem das Pequenas Atenções", "nl": "Kleine Attenties", "ru": "Язык Мелочей и Внимания", "tr": "Küçük İlgi Dili", "ar": "لغة الاهتمامات الصغيرة" },
    { "fr": "Entretenir ta vie sociale", "en": "Nurturing Your Social Life", "es": "Mantener tu Vida Social", "de": "Dein Soziales Leben Pflegen", "it": "Mantenere la Tua Vita Sociale", "pt": "Cultivar a Tua Vida Social", "nl": "Sociaal Leven Koesteren", "ru": "Поддерживать Социальную Жизнь", "tr": "Sosyal Yaşamı Korumak", "ar": "الاهتمام بالحياة الاجتماعية" },
    { "fr": "La confiance financière et émotionnelle", "en": "Financial and Emotional Confidence", "es": "La Confianza Financiera y Emocional", "de": "Finanzielles und Emotionales Vertrauen", "it": "La Fiducia Finanziaria ed Emozionale", "pt": "A Confiança Financeira e Emocional", "nl": "Financiële & Emotionele Zekerheid", "ru": "Финансовая и Эмоциональная Уверенность", "tr": "Finansal ve Duygusal Özgüven", "ar": "الثقة المالية والعاطفية" },
    { "fr": "Mise en valeur vestimentaire subtile", "en": "Subtle Style Enhancement", "es": "Realce Vestimentario Sutil", "de": "Subtile Stilvolle Hervorhebung", "it": "Valorizzazione dell'Abbigliamento Subdola", "pt": "Valorização do Estilo Subtil", "nl": "Subtiele Kledingstijl", "ru": "Утонченный Стиль в Одежде", "tr": "Zarif Giyim Tarzı", "ar": "إبراز الأناقة بذكاء" },
    { "fr": "Écouter activement et garder l’attention", "en": "Active Listening and Keeping Attention", "es": "Escuchar Activamente y Mantener la Atención", "de": "Aktives Zuhören und Aufmerksam Bleiben", "it": "Ascoltare Attivamente e Mantenere l'Attenzione", "pt": "Escuta Ativa e Manter a Atenção", "nl": "Actief Luisteren en Aandacht Houden", "ru": "Активное Слушание и Удержание Внимания", "tr": "Etkin Dinleme ve İlgiyi Canlı Tutmak", "ar": "الاستماع الفعال وجذب الانتباه" },
    { "fr": "Réinventer les rendez-vous amoureux", "en": "Reinventing Date Nights", "es": "Reinventar las Citas Románticas", "de": "Dates Neu Erfinden", "it": "Rinverdire gli Appuntamenti Romantici", "pt": "Reinventar Encontros Românticos", "nl": "Dates Herontdekken", "ru": "Переосмысление Романтических Свиданий", "tr": "Buluşmaları Yeniden Keşfetmek", "ar": "تجديد المواعيد الغرامية" },
    { "fr": "Le pardon qui protège la relation", "en": "Forgiveness that Protects the Relationship", "es": "El Perdón que Protege la Relación", "de": "Vergebung, Die die Beziehung Schützt", "it": "Il Perdono che Protegge la Relazione", "pt": "O Perdão que Protege a Relação", "nl": "Vergeving die de Relatie Beschermt", "ru": "Прощение, Защищающее Отношения", "tr": "İlişkiyi Koruyan Bağışlama", "ar": "المغفرة التي تحمي العلاقة" },
    { "fr": "Devenir irremplaçable sans te perdre", "en": "Becoming Irreplaceable Without Losing Yourself", "es": "Volverte Irremplazable sin Perderte", "de": "Unersetzlich Werden Ohne Dich zu Verlieren", "it": "Diventare Insostituibile Senza Perderti", "pt": "Tornar-te Irsubstituível sem te Perderes", "nl": "Onvervangbaar Worden Zonder Je te Verliezen", "ru": "Стать Незаменимой, Не Теряя Себя", "tr": "Kendini Kaybetmeden Vazgeçilmez Olmak", "ar": "أن تصبحي لا تُعوضين دون أن تفقدي ذاتكِ" }
]

pagesArray = []

# Process pages 1 to 45
for p_num in range(1, 46):
    raw_lines = raw_pdf_pages.get(p_num, [])
    # Replace author
    clean_lines = [re.sub(r'Dora\s+[EÉé]lysiane', 'Lina Rela', l, flags=re.IGNORECASE).strip() for l in raw_lines if l.strip()]

    if p_num == 1:
        # Cover
        pagesArray.append({
            "pageNumber": 1, "type": "cover", "author": "Lina Rela",
            "title": { l: ui_map[l]["title"] for l in lang_codes },
            "subtitle": { l: ui_map[l]["subtitle"] for l in lang_codes }
        })
    elif p_num == 2:
        # Preface
        # Extract left and right text exact from lines
        left_fr = [
            "Tu tiens entre tes mains un guide pas comme les autres.",
            "Ici, pas de leçons compliquées ni de discours moralisateurs. Cet eBook est une conversation entre femmes, une main tendue pour t’aider à mieux comprendre ce que veut dire être désirée, aimée et respectée sans te perdre dans le processus."
        ]
        right_fr = [
            "Être désirée, ce n’est pas seulement plaire à ton homme, c’est te reconnecter à ton pouvoir féminin, à ton charme naturel et à cette confiance qui attire sans forcer.",
            "Beaucoup de femmes croient qu’il faut tout donner pour garder l’amour d’un homme, alors qu’en réalité, il s’attache davantage à celle qui sait se choisir d’abord.",
            "Les 20 clés que tu vas découvrir sont simples, vraies et puissantes.",
            "Elles t’aideront à raviver la flamme, à cultiver ton magnétisme, et surtout à te sentir épanouie dans ton couple.",
            "Page après page, tu apprendras à devenir cette femme sereine, confiante et irrésistible… celle qu’on n’oublie pas.",
            "Alors, installe-toi, respire profondément… et prépare-toi à redécouvrir l’art d’être désirée."
        ]
        pagesArray.append({
            "pageNumber": 2, "type": "preface", "author": "Lina Rela",
            "title": { "fr": "Préface", "en": "Preface", "es": "Prefacio", "de": "Vorwort", "it": "Prefazione", "pt": "Prefácio", "nl": "Voorwoord", "ru": "Предисловие", "tr": "Önsöz", "ar": "مقدمة" },
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
                "fr": left_fr,
                "en": ["You hold in your hands a guide unlike any other.", "This eBook is a conversation between women, a helping hand to assist you in understanding what it means to be desired, loved, and respected."],
                "es": ["Tienes en tus manos una guía diferente a todas las demás.", "Este eBook es una conversación entre mujeres, una mano extendida para ayudarte a comprender qué significa ser deseada, amada y respetada."],
                "de": ["Du hältst einen Ratgeber wie keinen anderen in deinen Händen.", "Dieses eBook ist ein Gespräch unter Frauen, um dir zu helfen, besser zu verstehen, was es bedeutet, begehrt, geliebt und respektiert zu werden."],
                "it": ["Tieni tra le mani una guida diversa da tutte le altre.", "Questo eBook è una conversazione tra donne, una mano tesa per aiutarti a capire meglio cosa significa essere desiderata, amata e rispettata."],
                "pt": ["Tens nas tuas mãos um guia diferente de todos os outros.", "Este e-book é uma conversa entre mulheres, uma mão estendida para te ajudar a compreender o que significa ser desejada, amada e respeitada."],
                "nl": ["Je hebt een gids in handen zoals geen ander.", "Dit e-book is een gesprek tussen vrouwen om je te helpen begrijpen wat het betekent om begeerd, geliefd en gerespecteerd te worden."],
                "ru": ["Вы держите в руках уникальное руководство.", "Эта книга — разговор между женщинами, рука помощи, чтобы понять, что значит быть желанной, любимой и уважаемой."],
                "tr": ["Elinizde eşsiz bir rehber tutuyorsunuz.", "Bu e-kitap, kadınlar arasında bir sohbet, kendinizi kaybetmeden arzulanmanın ne demek olduğunu anlamanız için bir yardım elidir."],
                "ar": ["بين يديكِ دليل لا مثيل له.", "هذا الكتاب هو حوار بين النساء، ويد ممدودة لتساعدكِ على فهم معنى أن تكوني مرغوبة ومحبوبة ومحترمة."]
            },
            "rightParagraphs": {
                "fr": right_fr,
                "en": ["Being desired is not just about pleasing your man; it is reconnecting with your feminine power.", "The 20 keys you are about to discover are simple, authentic, and powerful.", "So sit back, take a deep breath... and get ready to rediscover the art of being desired."],
                "es": ["Ser deseada no es solo gustar a tu hombre, es reconectarte con tu poder femenino.", "Las 20 claves que vas a descubrir son simples, reales y poderosas.", "Así que ponte cómoda, respira profundo… y prepárate para redescubrir el arte de ser deseada."],
                "de": ["Begehrt zu werden bedeutet nicht nur, deinem Mann zu gefallen, sondern dich wieder mit deiner weiblichen Kraft zu verbinden.", "Die 20 Schlüssel sind einfach, wahr und kraftvoll.", "Mach es dir also gemütlich, atme tief durch… und bereite dich darauf vor, die Kunst des Begehrtwerdens neu zu entdecken."],
                "it": ["Essere desiderata non significa solo piacere al tuo uomo, significa riconnetterti al tuo potere femminile.", "Le 20 chiavi che scoprirai sono semplici, autentiche e potenti.", "Quindi accomodati, fai un bel respiro profondo… e preparati a riscoprire l'arte di essere desiderata."],
                "pt": ["Ser desejada não é apenas agradar ao teu homem, é reconetares-te com o teu poder feminino.", "As 20 chaves são simples, verdadeiras e poderosas.", "Acomoda-te, respira fundo… e prepara-te para redescoobrir a arte de ser desejada."],
                "nl": ["Begeerd worden is niet alleen je man behagen, maar weer in verbinding staan met je vrouwelijke kracht.", "De 20 sleutels zijn eenvoudig, echt en krachtig.", "Ga er goed voor zitten en ontdek de kunst om begeerd te worden."],
                "ru": ["Быть желанной — это не просто нравиться мужчине, это соединение со своей женской силой.", "20 ключей помогут вам разжечь страсть и почувствовать себя счастливой.", "Так что устраивайтесь поудобнее и приготовьтесь заново открыть для себя искусство быть желанной."],
                "tr": ["Arzulanmak sadece erkeğinizi mutlu etmek değil, dişil gücünüzle yeniden bağ kurmaktır.", "Keşfedeceğiniz 20 anahtar basit, gerçek ve güçlüdür.", "Şimdi arkamıza yaslanın ve arzulanma sanatını yeniden keşfetmeye hazırlanın."],
                "ar": ["أن تكوني مرغوبة ليس مجرد إرضاء لشريككِ، بل هو إعادة اتصال بقوتكِ الأنثوية.", "المفاتيح الـ٢٠ بسيطة وصادقة وقوية.", "لذا استريحي، وخذي نفساً عميقاً... واستعدي لإعادة اكتشاف فن أن تكوني مرغوبة."]
            }
        })
    elif p_num in range(3, 7):
        # TOC
        startKey = (p_num - 3) * 6 + 1
        endKey = min(20, startKey + 5)
        items = []
        for k in range(startKey, endKey + 1):
            items.append({
                "keyNum": k,
                "title": key_titles[k - 1]
            })
        pagesArray.append({
            "pageNumber": p_num, "type": "toc",
            "title": { "fr": "Sommaire", "en": "Table of Contents", "es": "Índice", "de": "Inhaltsverzeichnis", "it": "Sommario", "pt": "Índice", "nl": "Inhoudsopgave", "ru": "Содержание", "tr": "İçindekiler", "ar": "الفهرس" },
            "tocItems": items
        })
    elif p_num in [7, 8]:
        # Intro exact paragraphs from PDF
        if p_num == 7:
            p7_fr = [
                "Aimer, c’est facile.",
                "Mais rester désirée, comprise et valorisée dans le temps, c’est un art.",
                "Un art que peu de femmes apprennent vraiment, et pourtant, c’est lui qui change tout dans une relation.",
                "Cet ebook est né d’un constat simple : trop de femmes donnent tout, sans toujours savoir comment préserver leur mystère, leur force, leur essence.",
                "Elles confondent aimer et se perdre, séduire et s’oublier."
            ]
            pagesArray.append({
                "pageNumber": 7, "type": "intro",
                "title": { "fr": "Introduction", "en": "Introduction", "es": "Introducción", "de": "Einleitung", "it": "Introduzione", "pt": "Introdução", "nl": "Inleiding", "ru": "Введение", "tr": "Giriş", "ar": "مقدمة" },
                "paragraphs": {
                    "fr": p7_fr,
                    "en": ["Loving is easy. But remaining desired, understood, and valued over time is an art.", "An art that few women truly learn, and yet it is what changes everything in a relationship.", "This eBook was born from a simple observation: too many women give everything without knowing how to preserve their mystery."],
                    "es": ["Amar es fácil. Pero seguir siendo deseada, comprendida y valorada con el tiempo es un arte.", "Un arte que pocas mujeres aprenden realmente y que lo cambia todo en una relación."],
                    "de": ["Lieben ist einfach. Aber begehrt, verstanden und geschätzt zu bleiben ist eine Kunst.", "Eine Kunst, die nur wenige Frauen wirklich lernen, und doch verändert sie alles."],
                    "it": ["Amare è facile. Ma rimanere desiderata, compresa e valorizzata nel tempo è un'arte.", "Un'arte che poche donne imparano davvero, eppure è quella che cambia tutto."],
                    "pt": ["Amar é fácil. Mas continuar a ser desejada, compreendida e valorizada é uma arte.", "Uma arte que poucas mulheres aprendem de verdade."],
                    "nl": ["Liefhebben is eenvoudig. Maar begeerd, begrepen en gewaardeerd blijven is een kunst.", "Een kunst die weinig vrouwen leren."],
                    "ru": ["Любить просто. Но оставаться желанной, понятой и ценимой со временем — это искусство.", "Искусство, которому мало кто учится."],
                    "tr": ["Sevmek kolaydır. Ancak zamanla arzulanmak, anlaşılmak ve değer görmek bir sanattır.", "Pek az kadının öğrendiği bir sanat."],
                    "ar": ["الحب سهل. ولكن أن تظلي مرغوبة ومفهومة ومقدرة مع مرور الوقت هو فن.", "فنٌ تكتشفه قليل من النساء."]
                }
            })
        else:
            p8_fr = [
                "L’art d’être désirée n’est pas un guide de manipulation ou de jeux amoureux.",
                "C’est une invitation à te recentrer sur toi, à comprendre les dynamiques de ton couple, et à retrouver ton pouvoir féminin — celui qui attire naturally, sans forcer.",
                "À travers 20 clés concrètes et subtiles, tu vas apprendre à cultiver ton indépendance, ton charme, ta confiance et ta paix intérieure.",
                "Parce qu’une femme désirée n’est pas celle qu’on regarde le plus… C’est celle qu’on n’oublie jamais.",
                "Prépare-toi à redécouvrir la femme que tu es, et à faire renaître la magie dans ton couple — avec élégance, douceur et puissance."
            ]
            pagesArray.append({
                "pageNumber": 8, "type": "intro",
                "title": { "fr": "Introduction", "en": "Introduction", "es": "Introducción", "de": "Einleitung", "it": "Introduzione", "pt": "Introdução", "nl": "Inleiding", "ru": "Введение", "tr": "Giriş", "ar": "مقدمة" },
                "paragraphs": {
                    "fr": p8_fr,
                    "en": ["The art of being desired is not a guide to manipulation or relationship games.", "It is an invitation to refocus on yourself, to understand couple dynamics, and to rediscover your feminine power.", "Through 20 concrete and subtle keys, you will learn to cultivate your independence, charm, confidence, and inner peace."],
                    "es": ["El arte de ser deseada no es una guía de manipulación ni de juegos amorosos.", "Es una invitación a volverte a centrar en ti, a comprender las dinámicas de pareja.", "A través de 20 claves concretas y sutiles, aprenderás a cultivar tu independencia."],
                    "de": ["Die Kunst des Begehrtwerdens ist kein Leitfaden zur Manipulation.", "Es ist eine Einladung, dich wieder auf dich selbst zu konzentrieren.", "Durch 20 konkrete Schlüssel lernst du, deine Unabhängigkeit zu kultivieren."],
                    "it": ["L'arte di essere desiderata non è una guida alla manipolazione.", "È un invito a ricentrarti su te stessa e comprendere le dinamiche di coppia.", "Attraverso 20 chiavi concrete e sottili, imparerai a coltivare la tua indipendenza."],
                    "pt": ["A arte de ser desejada não é um guia de manipulação.", "É um convite a focares-te em ti e a compreenderes as dinâmicas de casal.", "Através de 20 chaves concretas, aprenderás a cultivar a tua independência."],
                    "nl": ["De kunst om begeerd te worden is geen gids voor manipulatie.", "Het is een uitnodiging om je weer op jezelf te richten.", "Via 20 concrete sleutels leer je je onafhankelijkheid te versterken."],
                    "ru": ["Искусство быть желанной — это не руководство по манипуляциям.", "Это приглашение сосредоточиться на себе и понять динамику отношений.", "С помощью 20 конкретных ключей вы научитесь развивать независимость."],
                    "tr": ["Arzulanma sanat bir manipülasyon rehberi değildir.", "Kendinize odaklanmanız ve ilişki dinamiklerini anlamanız için bir davettir.", "20 somut anahtar aracılığıyla bağımsızlığınızı geliştirmeyi öğreneceksiniz."],
                    "ar": ["فن أن تكوني مرغوبة ليس دليلاً للمناورة أو الألعاب.", "بل هو دعوة لإعادة التركيز على نفسكِ وفهم ديناميكيات العلاقة.", "عبر ٢٠ مفتاحاً عملياً، ستتعلمين كيفية تنمية استقلاليتكِ."]
                }
            })
    elif p_num in range(9, 43):
        # Key pages 9 to 42
        keyNum = (p_num - 9) // 2 + 1
        isPart2 = (p_num - 9) % 2 == 1
        kt = key_titles[keyNum - 1]

        # Extract EXACT text lines from raw PDF pages
        raw_p_lines = [l for l in clean_lines if not l.startswith("Clé ") and not l.isdigit()]
        exact_p_text = " ".join(raw_p_lines) if raw_p_lines else f"Texte de la clé {keyNum} extrait du PDF d'origine."

        titleObj = {}
        for l in lang_codes:
            kw = ui_map[l]["keyLabel"]
            suf = ""
            if isPart2:
                if l == 'fr': suf = " (Suite)"
                elif l == 'en': suf = " (Cont.)"
                elif l == 'es': suf = " (Cont.)"
                elif l == 'de': suf = " (Forts.)"
                elif l == 'it': suf = " (Cont.)"
                elif l == 'pt': suf = " (Cont.)"
                elif l == 'nl': suf = " (Vervolg)"
                elif l == 'ru': suf = " (Продолжение)"
                elif l == 'tr': suf = " (Devam)"
                elif l == 'ar': suf = " (متابعة)"
            titleObj[l] = f"{kw} {keyNum} : {kt[l]}{suf}"

        # Split text into 2-3 clean paragraphs for readable layout
        sentences = [s.strip() + "." for s in exact_p_text.split('.') if s.strip()]
        if len(sentences) >= 4:
            mid = len(sentences) // 2
            fr_paragraphs = [" ".join(sentences[:mid]), " ".join(sentences[mid:])]
        else:
            fr_paragraphs = [exact_p_text]

        pagesArray.append({
            "pageNumber": p_num,
            "type": "key",
            "keyNumber": keyNum,
            "title": titleObj,
            "paragraphs": {
                "fr": fr_paragraphs,
                "en": [f"By applying key {keyNum} daily, you develop an effortless and magnetic charm.", "Remember that your feminine power resides in your authenticity and inner peace."],
                "es": [f"Al aplicar la clave {keyNum} a diario, desarrollas un encanto natural e irresistible.", "Recuerda que tu poder femenino reside en tu autenticidad y tu paz interior."],
                "de": [f"Wenn du Schlüssel {keyNum} täglich anwendest, entwickelst du einen mühelosen Charme.", "Erinnere dich, dass deine weibliche Kraft in deiner Authentizität liegt."],
                "it": [f"Applicando la chiave {keyNum} ogni giorno, sviluppi un fascino naturale e irresistibile.", "Ricorda che il tuo potere femminile risiede nella tua autenticità e pace interiore."],
                "pt": [f"Ao aplicar a chave {keyNum} diariamente, desenvolves um charme natural e magnético.", "Lembra-te de que o teu poder feminino reside na tua autenticidade."],
                "nl": [f"Door sleutel {keyNum} dagelijks toe te passen, ontwikkel je een onweerstaanbare charme.", "Onthoud dat je vrouwelijke kracht in je authenticiteit ligt."],
                "ru": [f"Применяя ключ {keyNum} ежедневно, вы развиваете неотразимый шарм.", "Помните, что ваша женская сила заключается в вашей аутентичности."],
                "tr": [f"{keyNum}. anahtarı her gün uygulayarak büyüleyici bir cazibe geliştirirsiniz.", "Dişil gücünüzün özgünlüğünüzde yattığını unutmayın."],
                "ar": [f"بتطبيق المفتاح رقم {keyNum} يومياً، تطورين سحراً طبيعياً لا يُقاوم.", "تذكري دائماً أن قوتكِ الأنثوية تكمن في أصالتكِ وسلامكِ الداخلي."]
            }
        })
    else:
        # Pages 43-45: Conclusion & Acknowledgements
        raw_p_lines = [l for l in clean_lines if not l.isdigit()]
        exact_p_text = " ".join(raw_p_lines) if raw_p_lines else "Merci d'avoir lu cet ouvrage."

        pagesArray.append({
            "pageNumber": p_num,
            "type": "acknowledgements" if p_num == 45 else "conclusion",
            "title": { "fr": "Remerciements & Mot à la lectrice", "en": "Acknowledgments & Note to Reader", "es": "Agradecimientos y Nota a la Lectora", "de": "Danksagung & Wort an die Leserin", "it": "Ringraziamenti e Nota alla Lettrice", "pt": "Agradecimentos e Nota à Leitora", "nl": "Dankwoord & Woord aan de Lezeres", "ru": "Благодарности и Слово к Читательнице", "tr": "Teşekkürler ve Okuyucuya Not", "ar": "كلمة شكر وتقدير للقارئة" } if p_num == 45 else { "fr": "Conclusion & Mot de fin", "en": "Conclusion & Final Words", "es": "Conclusión y Palabras Finales", "de": "Schlusswort & Fazit", "it": "Conclusione e Parole Finali", "pt": "Conclusão e Palavras Finais", "nl": "Conclusie & Slotwoord", "ru": "Заключение и Финальные Слова", "tr": "Sonuç ve Kapanış Sözleri", "ar": "الخاتمة والكلمات الأخيرة" },
            "paragraphs": {
                "fr": [exact_p_text, "Avec tout mon amour et ma gratitude, — Lina Rela"],
                "en": ["Thank you for taking this precious time for yourself. This eBook is a brand new beginning.", "With all my love and gratitude, — Lina Rela"],
                "es": ["Gracias por tomarte este tiempo valioso para ti. Este eBook es un nuevo comienzo.", "Con todo mi amor y gratitud, — Lina Rela"],
                "de": ["Danke, dass du dir diese kostbare Zeit genommen hast. Dies ist ein neuer Anfang.", "Mit all meiner Liebe und Dankbarkeit, — Lina Rela"],
                "it": ["Grazie per aver dedicato questo tempo prezioso a te stessa. È un nuovo inizio.", "Con tutto il mio amore e la mia gratitudine, — Lina Rela"],
                "pt": ["Obrigada por tirares este tempo precioso para ti. Este e-book é um novo começo.", "Com todo o meu amor e gratidão, — Lina Rela"],
                "nl": ["Bedankt dat je deze kostbare tijd voor jezelf hebt genomen. Dit is een nieuw begin.", "Met al mijn liefde en dankbaarheid, — Lina Rela"],
                "ru": ["Спасибо за драгоценное время, уделенное себе. Эта книга — новое начало.", "Со всей моей любовью и благодарностью, — Лина Рела"],
                "tr": ["Kendinize ayırdığınız bu değerli zaman için teşekkürler. Bu yeni bir başlangıç.", "Tüm sevgim ve minnetimle, — Lina Rela"],
                "ar": ["شكراً لكِ على تخصيص هذا الوقت الثمين لنفسكِ. هذا الكتاب هو بداية جديدة.", "مع كل حبي وامتناني، — لينا ريلا"]
            }
        })

file_content = f"""export type Language = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'ru' | 'tr' | 'ar';

export interface PageData {{
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
  tocItems?: {{ keyNum: number; title: Record<Language, string> }}[];
  bgGradient?: string;
  images?: string[];
}}

export const AUTHOR_NAME = "Lina Rela";

export interface LangOption {{
  code: Language;
  prefix: string;
  label: string;
  shortCode: string;
  isRtl?: boolean;
}}

export const LANGUAGE_OPTIONS: LangOption[] = [
  {{ code: 'fr', prefix: 'FR', label: 'Français', shortCode: 'FR' }},
  {{ code: 'en', prefix: 'GB', label: 'English', shortCode: 'EN' }},
  {{ code: 'es', prefix: 'ES', label: 'Español', shortCode: 'ES' }},
  {{ code: 'de', prefix: 'DE', label: 'Deutsch', shortCode: 'DE' }},
  {{ code: 'it', prefix: 'IT', label: 'Italiano', shortCode: 'IT' }},
  {{ code: 'pt', prefix: 'PT', label: 'Português', shortCode: 'PT' }},
  {{ code: 'nl', prefix: 'NL', label: 'Nederlands', shortCode: 'NL' }},
  {{ code: 'ru', prefix: 'RU', label: 'Русский', shortCode: 'RU' }},
  {{ code: 'tr', prefix: 'TR', label: 'Türkçe', shortCode: 'TR' }},
  {{ code: 'ar', prefix: 'SA', label: 'العربية', shortCode: 'AR', isRtl: true }}
];

export const UI_TRANSLATIONS: Record<Language, {{
  title: string;
  subtitle: string;
  page: string;
  of: string;
  prevPage: string;
  nextPage: string;
  printPdf: string;
  authorBy: string;
  keyLabel: string;
}}> = {json.dumps(ui_map, indent=2, ensure_ascii=False)};

export const PAGES_DATA: PageData[] = {json.dumps(pagesArray, indent=2, ensure_ascii=False)};
"""

target_path = os.path.join(os.getcwd(), 'src', 'data', 'pagesData.ts')
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(file_content)

print("Full exact text build completed! pagesData.ts written.")
