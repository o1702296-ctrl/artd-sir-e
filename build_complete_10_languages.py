import json
import os

# Full translation data builder for all 10 languages
lang_codes = ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ru', 'tr', 'ar']

key_word = {
    'fr': 'Clé',
    'en': 'Key',
    'es': 'Clave',
    'de': 'Schlüssel',
    'it': 'Chiave',
    'pt': 'Chave',
    'nl': 'Sleutel',
    'ru': 'Ключ',
    'tr': 'Anahtar',
    'ar': 'المفتاح'
}

keys_content = [
    # Key 1
    {
        "num": 1,
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
        },
        "p1": {
            "fr": ["Avant de séduire un homme, tu dois d’abord te séduire toi-même.", "C’est là que tout commence : dans la manière dont tu te regardes, dont tu parles de toi, dont tu t’accordes de la valeur.", "Une femme qui se connaît et s’aime profondément dégage une énergie magnétique. Elle n’a pas besoin d’en faire trop, car elle sait déjà qu’elle est suffisante.", "Prends le temps d’apprendre à te comprendre : ce que tu aimes, ce que tu refuses, ce qui te fait vibrer."],
            "en": ["Before seducing a man, you must first seduce yourself.", "That is where everything begins: in the way you look at yourself, talk about yourself, and value yourself.", "A woman who knows and deeply loves herself radiates a magnetic energy. She doesn't need to do too much, because she already knows she is enough.", "Take the time to understand yourself: what you love, what you refuse, what makes your soul vibrate."],
            "es": ["Antes de seducir a un hombre, debes seducirte a ti misma.", "Ahí es donde todo empieza: en la manera en que te miras, hablas de ti y te valoras.", "Una mujer que se conoce y se ama profundamente desprende una energía magnética. No necesita hacer demasiado, porque ya sabe que es suficiente.", "Tómate el tiempo para entenderte: lo que amas, lo que rechazas, lo que te hace vibrar."],
            "de": ["Bevor du einen Mann verführst, musst du dich zuerst selbst verführen.", "Dort beginnt alles: in der Art und Weise, wie du dich betrachtest, über dich sprichst und dich schätzt.", "Eine Frau, die sich selbst kennt und zutiefst liebt, strahlt eine magnetische Energie aus. Sie muss nicht zu viel tun.", "Nimm dir die Zeit, dich selbst zu verstehen: was du liebst, was du ablehnst."],
            "it": ["Prima di sedurre un uomo, devi prima sedurre te stessa.", "È lì che tutto comincia: nel modo in cui ti guardi, parli di te e ti dai valore.", "Una donna che si conosce e si ama profondamente emana un'energia magnetica. Non ha bisogno di fare troppo.", "Prenditi il tempo per capire te stessa: ciò che ami, ciò che rifiuti."],
            "pt": ["Antes de seduzires um homem, deves primeiro seduzir-te a ti mesma.", "É aí que tudo começa: na forma como te olhas, como falas de ti e como te valorizas.", "Uma mulher que se conhece e se ama profundamente emana uma energia magnética.", "Toma o tempo para te compreenderes: o que amas, o que recusas."],
            "nl": ["Voordat je een man verleidt, moet je eerst jezelf verleiden.", "Daar begint alles: hoe je naar jezelf kijkt en jezelf waardeert.", "Een vrouw die zichzelf kent en liefheeft straalt magnetische energie uit.", "Neem de tijd om jezelf te begrijpen."],
            "ru": ["Прежде чем соблазнить мужчину, вы должны сначала соблазнить себя.", "Именно с этого все начинается: с того, как вы смотрите на себя, говорите о себе и цените себя.", "Женщина, которая знает и глубоко любит себя, излучает магнетическую энергию. Ей не нужно стараться изо всех сил.", "Найдите время понять себя: что вы любите, от чего отказываетесь."],
            "tr": ["Bir erkeği etkilemeden önce kendinizi etkilemelisiniz.", "Her şey burada başlar: kendinize nasıl baktığınız ve değer verdiğinizde.", "Kendini tanıyan ve seven bir kadın manyetik bir enerji yayar.", "Kendinizi anlamak için zaman ayırın."],
            "ar": ["قبل أن تثيري إعجاب رجل، عليكِ أولاً أن تحبي نفسكِ وتقتنعي بها.", "هناك يبدأ كل شيء: في الطريقة التي تنظرين بها إلى نفسكِ وتقدرين بها ذاتكِ.", "المرأة التي تعرف نفسها وتحبها بعمق تنبعث منها طاقة مغناطيسية لا تقاوم.", "خذي الوقت الكافي لفهم نفسكِ وما تحبينه وما ترفضينه."]
        },
        "p2": {
            "fr": ["Plus tu t’écoutes, plus tu découvres ta vraie force. Et cette force devient ton charme le plus puissant.", "Aime-toi dans tes imperfections, dans tes moments de doute, dans tes réussites aussi.", "Car l’amour que tu te portes trace la manière dont les autres t’aimeront.", "Tu veux être respectée, désirée, chérie ? Alors commence par te traiter comme une femme précieuse.", "Souviens-toi : l’amour de soi, ce n’est pas de l’arrogance. C’est un acte de respect envers la femme que tu es."],
            "en": ["The more you listen to yourself, the more you discover your true strength. And that strength becomes your most powerful charm.", "Love yourself in your imperfections, your moments of doubt, and your successes too.", "Because the love you give yourself sets the standard for how others will love you.", "Do you want to be respected, desired, cherished? Then start by treating yourself as a precious woman.", "Remember: self-love is not arrogance. It is an act of respect toward the woman you are."],
            "es": ["Cuanto más te escuchas, más descubres tu verdadera fuerza. Y esa fuerza se convierte en tu encanto más poderoso.", "Ámate en tus imperfecciones, en tus momentos de duda, y también en tus logros.", "Porque el amor que te tienes marca la forma en que los demás te amarán.", "¿Quieres ser respetada, deseada, querida? Entonces empieza por tratarte como una mujer valiosa.", "Recuerda: el amor propio no es arrogancia. Es un acto de respeto hacia ti misma."],
            "de": ["Je mehr du auf dich hörst, desto mehr entdeckst du deine wahre Stärke. Und diese Stärke wird zu deinem mächtigsten Charme.", "Liebe dich in deinen Unvollkommenheiten, in deinen Zweifeln und in deinen Erfolgen.", "Denn die Liebe zu dir selbst bestimmt, wie andere dich lieben werden.", "Möchtest du respektiert und begehrt werden? Dann behandle dich wie eine wertvolle Frau.", "Erinnere dich: Selbstliebe ist keine Arroganz."],
            "it": ["Più ti ascolti, più scopri la tua vera forza. E quella forza diventa il tuo fascino più potente.", "Amati nelle tue imperfezioni, nei tuoi dubbi e nei tuoi successi.", "Perché l'amore che porti a te stessa traccia il modo in cui gli altri ti ameranno.", "Vuoi essere rispettata, desiderata, amata? Inizia a trattarti come una donna preziosa.", "Ricorda: l'amore per se stesse non è arroganza."],
            "pt": ["Quanto mais te escutas, mais descobres a tua verdadeira força. E essa força torna-se o teu charme mais poderoso.", "Ama-te nas tuas imperfeições, nos teus momentos de dúvida e nos teus sucessos.", "Porque o amor que tens por ti marca a forma como os outros te amarão.", "Queres ser respeitada e desejada? Começa por te tratar como uma mulher preciosa.", "Lembra-te: o amor-próprio não é arrogância."],
            "nl": ["Hoe meer je naar jezelf luistert, hoe meer je je ware kracht ontdekt.", "Hou van jezelf in je imperfecties en je twijfels.", "Want de liefde voor jezelf bepaalt hoe anderen van je houden.", "Wil je gerespecteerd en begeerd worden? Behandel jezelf als een kostbare vrouw.", "Onthoud: zelfliefde is geen arrogantie."],
            "ru": ["Чем больше вы слушаете себя, тем больше открываете свою истинную силу. И эта сила становится вашим главным шармом.", "Любите себя в своих несовершенствах, сомнениях и успехах.", "Ибо любовь к себе определяет то, как вас будут любить другие.", "Хотите быть уважаемой и желанной? Относитесь к себе как к драгоценной женщине.", "Помните: любовь к себе — это не высокомерие."],
            "tr": ["Kendinizi dinledikçe gerçek gücünüzü keşfedersiniz. Ve bu güç sizin en etkili cazibeniz olur.", "Kusurlarınızla, şüphelerinizle ve başarılarınızla kendinizi sevin.", "Çünkü kendinize duyduğunuz sevgi başkalarının sizi nasıl seveceğini belirler.", "Saygı görmek ve arzulanmak mı istiyorsunuz? Kendinize değerli bir kadın gibi davranın.", "Unutmayın: Özsevgi kibir değildir."],
            "ar": ["كلما استمعتِ إلى نفسكِ، اكتشفتِ قوتكِ الحقيقية. وتلك القوة تصبح سحركِ الأشد تأثيراً.", "احبي نفسكِ في عيوبكِ، وفي لحظات شككِ، وفي نجاحاتكِ أيضاً.", "لأن الحب الذي تكنينه لنفسكِ يحدد الطريقة التي سيحبكِ بها الآخرون.", "هل ترغبين في أن تكوني محترمة ومحبوية؟ ابدئي بمعاملة نفسكِ كامرأة غالية.", "تذكري دائماً: حب الذات ليس غروراً، بل هو احترام لذاتكِ."]
        }
    }
]

# We will fill all 20 keys with deep authentic translation dictionaries
print("Keys structure initialized")
