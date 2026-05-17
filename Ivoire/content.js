const IVOIRE_DEFAULT_CONTENT = {
  news: [
    {
      badge: "Tech",
      title: {
        fr: "Les jeunes créateurs ivoiriens transforment TikTok en vitrine business",
        en: "Young Ivorian creators are turning TikTok into a business showcase",
      },
      copy: {
        fr: "Entre storytelling, live shopping et mini-formations, une nouvelle économie sociale se structure autour du contenu.",
        en: "Through storytelling, live shopping and micro-learning, a new social economy is taking shape around content.",
      },
      image: "https://images.pexels.com/photos/5553720/pexels-photo-5553720.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      badge: "Culture",
      title: {
        fr: "Afro-urban CI: les collectifs créatifs qui redessinent les week-ends",
        en: "Afro-urban CI: creative collectives reshaping weekends",
      },
      copy: {
        fr: "Mode, musique, food et photo: les rendez-vous hybrides deviennent les nouveaux lieux d’expression.",
        en: "Fashion, music, food and photography: hybrid meetups are becoming new spaces for expression.",
      },
      image: "https://images.pexels.com/photos/5356225/pexels-photo-5356225.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      badge: "Campus",
      title: {
        fr: "Les clubs étudiants passent à l’action avec des projets utiles",
        en: "Student clubs are taking action with useful projects",
      },
      copy: {
        fr: "Hackathons, mentorat et actions locales: les campus deviennent des laboratoires d’impact.",
        en: "Hackathons, mentoring and local initiatives: campuses are becoming impact labs.",
      },
      image: "https://images.pexels.com/photos/5896698/pexels-photo-5896698.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
  stories: [
    {
      badge: "Portrait",
      title: {
        fr: "Aïcha lance une marque de soins naturels depuis Yopougon",
        en: "Aicha launches a natural skincare brand from Yopougon",
      },
      copy: {
        fr: "Avec un téléphone, une communauté fidèle et beaucoup de rigueur, elle vend maintenant dans trois villes.",
        en: "With a phone, a loyal community and discipline, she now sells in three cities.",
      },
    },
    {
      badge: "Réussite",
      title: {
        fr: "Kevin apprend le code en ligne et décroche son premier contrat",
        en: "Kevin learns to code online and lands his first contract",
      },
      copy: {
        fr: "Son secret: pratiquer chaque soir, documenter ses progrès et demander du feedback sans attendre.",
        en: "His secret: practice nightly, document progress and ask for feedback early.",
      },
    },
  ],
  opportunities: [
    {
      badge: "Formation",
      title: { fr: "Bootcamp marketing digital", en: "Digital marketing bootcamp" },
      copy: {
        fr: "Six semaines pour apprendre acquisition, contenu, analytics et personal branding.",
        en: "Six weeks to learn acquisition, content, analytics and personal branding.",
      },
    },
    {
      badge: "Emploi",
      title: { fr: "Programme junior community manager", en: "Junior community manager program" },
      copy: {
        fr: "Recrutement ouvert pour profils créatifs, bilingues et à l’aise avec les réseaux.",
        en: "Open recruitment for creative, bilingual and social-first profiles.",
      },
    },
    {
      badge: "Business",
      title: { fr: "Appel à projets micro-business", en: "Micro-business project call" },
      copy: {
        fr: "Pitch, coaching et accompagnement pour tester une idée rentable en 30 jours.",
        en: "Pitching, coaching and support to test a profitable idea in 30 days.",
      },
    },
  ],
  lifestyle: [
    {
      badge: "Style",
      title: { fr: "Comment construire une identité visuelle qui te ressemble", en: "How to build a visual identity that feels like you" },
      copy: {
        fr: "Couleurs, photos, bio et ton: les bases pour une présence en ligne cohérente.",
        en: "Colors, photos, bio and tone: the basics of a consistent online presence.",
      },
      image: "https://images.pexels.com/photos/5965525/pexels-photo-5965525.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      badge: "Bien-être",
      title: { fr: "Ambition sans burnout: trouver son rythme", en: "Ambition without burnout: finding your rhythm" },
      copy: {
        fr: "Des routines simples pour avancer fort sans s’épuiser en silence.",
        en: "Simple routines to move forward without quietly burning out.",
      },
      image: "https://images.pexels.com/photos/13377869/pexels-photo-13377869.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
};

const IVOIRE_TRANSLATIONS = {
  fr: {
    "nav.news": "Actus",
    "nav.inspiration": "Inspiration",
    "nav.opportunities": "Opportunités",
    "nav.lifestyle": "Lifestyle",
    "nav.admin": "Admin",
    "hero.eyebrow": "Média digital nouvelle génération",
    "hero.title": "La jeunesse ivoirienne a son signal fort.",
    "hero.copy":
      "Actualités tendances, opportunités, histoires de réussite et culture lifestyle pour celles et ceux qui construisent demain depuis Abidjan, Bouaké, Yamoussoukro et au-delà.",
    "hero.ctaPrimary": "Explorer maintenant",
    "hero.ctaSecondary": "Rejoindre la newsletter",
    "hero.liveLabel": "Pulse live",
    "hero.liveTitle": "Créateurs, tech, emploi: ce qui monte cette semaine",
    "news.eyebrow": "Actualités tendances",
    "news.title": "Tout ce qui fait vibrer la génération connectée.",
    "inspiration.eyebrow": "Inspiration",
    "inspiration.title": "Des parcours qui donnent envie d’oser plus grand.",
    "inspiration.copy":
      "Chaque semaine, Ivoire Pulse met en avant des jeunes qui lancent un projet, changent de métier, créent du contenu, montent une entreprise ou ouvrent une porte à leur communauté.",
    "opps.eyebrow": "Opportunités",
    "opps.title": "Emploi, formation, business: les bons plans à saisir.",
    "life.eyebrow": "Blog lifestyle jeunesse",
    "life.title": "Culture, style, santé mentale, sorties et vibes positives.",
    "newsletter.eyebrow": "Newsletter",
    "newsletter.title": "Le meilleur du pulse directement dans ta boîte mail.",
    "newsletter.button": "S'inscrire",
    "footer.copy": "Média vitrine premium pour la jeunesse ivoirienne ambitieuse.",
  },
  en: {
    "nav.news": "News",
    "nav.inspiration": "Inspiration",
    "nav.opportunities": "Opportunities",
    "nav.lifestyle": "Lifestyle",
    "nav.admin": "Admin",
    "hero.eyebrow": "Next-gen digital media",
    "hero.title": "Ivorian youth now has a powerful signal.",
    "hero.copy":
      "Trending news, opportunities, success stories and lifestyle culture for those building tomorrow from Abidjan, Bouake, Yamoussoukro and beyond.",
    "hero.ctaPrimary": "Explore now",
    "hero.ctaSecondary": "Join the newsletter",
    "hero.liveLabel": "Pulse live",
    "hero.liveTitle": "Creators, tech, jobs: what is rising this week",
    "news.eyebrow": "Trending news",
    "news.title": "Everything moving the connected generation.",
    "inspiration.eyebrow": "Inspiration",
    "inspiration.title": "Stories that make you want to aim higher.",
    "inspiration.copy":
      "Every week, Ivoire Pulse highlights young people launching projects, changing careers, creating content, building companies or opening doors for their community.",
    "opps.eyebrow": "Opportunities",
    "opps.title": "Jobs, training, business: high-value openings to grab.",
    "life.eyebrow": "Youth lifestyle blog",
    "life.title": "Culture, style, mental health, events and positive energy.",
    "newsletter.eyebrow": "Newsletter",
    "newsletter.title": "The best of the pulse straight to your inbox.",
    "newsletter.button": "Sign up",
    "footer.copy": "A premium showcase media for ambitious Ivorian youth.",
  },
};

function getStoredContent() {
  const stored = localStorage.getItem("ivoireContent");
  if (!stored) return structuredClone(IVOIRE_DEFAULT_CONTENT);
  try {
    return JSON.parse(stored);
  } catch {
    return structuredClone(IVOIRE_DEFAULT_CONTENT);
  }
}

function saveStoredContent(content) {
  localStorage.setItem("ivoireContent", JSON.stringify(content));
}
