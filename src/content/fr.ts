import type { Dict } from "./en";

// Texte français du site, typé sur la version anglaise.
export const fr: Dict = {
  meta: {
    title: "Houssem Eddine Weslati | Ingénieur Full Stack, React, NestJS et IA",
    description:
      "Ingénieur Full Stack : je construis des applications web de bout en bout avec React, NestJS et TypeScript, et des fonctionnalités d'IA comme des chatbots et des agents. Disponible pour des projets à distance.",
    testudoTitle: "Étude de cas Testudo | Houssem Eddine Weslati",
    testudoDescription:
      "Comment j'ai construit Testudo, un SaaS multi-tenant de management de la qualité ISO 9001, du premier écran à la production.",
  },
  nav: {
    work: "Réalisations",
    experience: "Expérience",
    stack: "Technologies",
    contact: "Contact",
    switchTo: "EN",
    switchLabel: "Read in English",
    theme: "Basculer entre thème clair et thème sombre",
    home: "Retour à l'accueil",
  },
  hero: {
    availability: "Disponible pour des projets à distance",
    role: "Ingénieur Full Stack",
    title: "Je construis des applications web de bout en bout, et l'IA qui va dedans.",
    lead:
      "React, NestJS et TypeScript, du modèle de données à l'écran. Des chatbots et des agents qui font un vrai travail pour les utilisateurs. Deux ans d'expérience, et un SaaS multi-tenant en production que j'ai construit dès le premier écran.",
    ctaEmail: "M'écrire",
    ctaLinkedin: "LinkedIn",
    ctaWork: "Voir mes réalisations",
    photoAlt: "Portrait de Houssem Eddine Weslati",
  },
  proof: [
    { value: "2 ans", label: "d'expérience professionnelle" },
    { value: "1 SaaS", label: "construit seul et en production" },
    { value: "1 600+", label: "tests automatisés dans ce code" },
    { value: "UK", label: "client britannique servi 100 % à distance" },
  ],
  services: {
    eyebrow: "Ce que je fais",
    title: "Un seul ingénieur, de la base de données à l'interface.",
    items: [
      {
        title: "Applications web full stack",
        text: "Interfaces React et Next.js, API NestJS et Node.js, PostgreSQL. Typé de bout en bout, avec contrôle d'accès, temps réel et tests automatisés.",
      },
      {
        title: "Des fonctionnalités d'IA utiles",
        text: "Chatbots et agents fondés sur la recherche documentaire (RAG), l'appel de fonctions et la voix. Ils répondent à partir de vos documents et agissent dans votre produit.",
      },
      {
        title: "Données et mise en production",
        text: "Migrations et pipelines de données en Python et SQL. Docker, reverse proxy et versions numérotées sur un serveur que j'installe et que j'exploite.",
      },
    ],
  },
  work: {
    eyebrow: "Réalisations",
    title: "Des produits que j'ai conçus et construits.",
    note: "Ces réalisations appartiennent aux entreprises pour lesquelles je les ai construites : le code est privé. Voici ce qu'est chaque projet et ce que j'y ai fait.",
    featuredLabel: "Étude de cas",
    readCase: "Lire l'étude de cas",
    projects: [
      {
        id: "testudo",
        kicker: "SaaS multi-tenant · En production",
        title: "Testudo",
        text: "Une plateforme de management de la qualité ISO 9001 que j'ai construite seul, du premier écran à la production : documents, audits, non-conformités, plans d'action, risques et indicateurs, avec un contrôle d'accès fin, du temps réel et des rapports en français et en anglais.",
        tags: ["React 19", "NestJS", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
      },
      {
        id: "qualibot",
        kicker: "Assistant IA · RAG",
        title: "QualiBot",
        text: "L'assistant IA de Testudo, construit avec un collègue. Il répond à partir du référentiel ISO 9001 et des documents de l'entreprise, ouvre les documents et navigue dans l'application pour l'utilisateur.",
        tags: ["Python", "FastAPI", "Mistral", "RAG", "CopilotKit"],
      },
      {
        id: "voice",
        kicker: "Chatbot IA · Voix",
        title: "Chatbot vocal pour l'accessibilité",
        text: "Un chatbot vocal sur un site de billetterie en ligne, pour que les personnes en situation de handicap trouvent une information et achètent un billet en parlant.",
        tags: ["Python", "OpenAI", "ElevenLabs", "RAG", "MongoDB"],
      },
      {
        id: "agent",
        kicker: "Agent IA · Appel de fonctions",
        title: "Agent de commande de repas",
        text: "Un agent qui échange avec les clients, prend leurs commandes et les transmet aux restaurants.",
        tags: ["Python", "OpenAI", "Function calling", "MongoDB"],
      },
      {
        id: "salesforce",
        kicker: "Ingénierie des données · Client britannique · À distance",
        title: "Migration de données Salesforce",
        text: "Migration des opportunités, des devis et des données de tarification pour une entreprise britannique, avec validation et rapprochement après chaque exécution.",
        tags: ["Python", "SOQL", "Azure Data Factory", "Databricks SQL"],
      },
      {
        id: "platform",
        kicker: "Application web · ETL / ELT",
        title: "Plateforme de migration de données",
        text: "Une plateforme qui génère et planifie des traitements d'intégration de données sur cinq moteurs de bases de données, avec un espace SQL et le lignage des données.",
        tags: ["React", "Python", "SQL"],
      },
    ],
  },
  experience: {
    eyebrow: "Expérience",
    title: "Mon parcours.",
    present: "Aujourd'hui",
    items: [
      {
        role: "Ingénieur Full Stack",
        company: "Maxula Consulting",
        place: "Tunis, Tunisie · Hybride",
        dates: "Avr. 2026 - Aujourd'hui",
        text: "Seul développeur de Testudo : design de l'interface, front end React, API NestJS, une base PostgreSQL par client, assistant IA, Docker et serveur de production.",
      },
      {
        role: "Ingénieur Data",
        company: "Punic Insight LTD",
        place: "Royaume-Uni · À distance",
        dates: "Janv. 2026 - Mars 2026",
        text: "Rapprochement des données Salesforce avec la plateforme Databricks en Databricks SQL et Python, avec des contrôles rejouables pour trouver et expliquer les écarts.",
      },
      {
        role: "Spécialiste en intelligence artificielle",
        company: "24 B.E.Y.",
        place: "Tunis, Tunisie · Hybride",
        dates: "Mai 2025 - Déc. 2025",
        text: "Construction d'un chatbot vocal pour un site de billetterie et d'un agent IA pour une application de commande de repas, avec les modèles OpenAI, le RAG, l'appel de fonctions et MongoDB.",
      },
      {
        role: "Ingénieur systèmes de données",
        company: "Punic Insight LTD",
        place: "Royaume-Uni · À distance",
        dates: "Nov. 2024 - Avr. 2025",
        text: "Migration de données Salesforce en Python et SOQL, pipelines Azure Data Factory et accompagnement des mises en production.",
      },
      {
        role: "Stagiaire ingénieur Data",
        company: "Datarox",
        place: "Tunisie · Hybride",
        dates: "Janv. 2024 - Août 2024",
        text: "Projet de fin d'études : une plateforme de migration de données, avec une application React et un moteur de migration Python sur cinq moteurs de bases de données.",
      },
    ],
    education: "Diplôme d'ingénieur en Data Science, ESPRIT, 2020 - 2024",
  },
  stack: {
    eyebrow: "Technologies",
    title: "Les outils que j'utilise tous les jours.",
    groups: { front: "Front end", back: "Back end", ai: "IA", delivery: "Données et mise en production" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Un produit à construire, ou une fonctionnalité d'IA à ajouter ?",
    text: "Dites-moi ce dont vous avez besoin. Je réponds sous un jour ouvré, en français ou en anglais.",
    email: "M'écrire",
    linkedin: "M'écrire sur LinkedIn",
    github: "GitHub",
  },
  footer: {
    builtWith: "Construit avec Next.js et TypeScript.",
    rights: "Tous droits réservés.",
  },
  testudo: {
    back: "Toutes les réalisations",
    kicker: "Étude de cas · SaaS multi-tenant · En production",
    title: "Testudo",
    lead: "Une plateforme de management de la qualité ISO 9001, construite du premier écran à la production.",
    facts: [
      { label: "Rôle", value: "Seul développeur" },
      { label: "Entreprise", value: "Maxula Consulting" },
      { label: "Période", value: "Avr. 2026 - Aujourd'hui" },
      { label: "État", value: "En production" },
    ],
    sections: {
      problem: {
        title: "Le problème",
        text: [
          "Une entreprise certifiée ISO 9001 doit prouver, à chaque audit, que son système qualité vit : les documents sont approuvés et à jour, les non-conformités sont analysées et clôturées, les actions sont suivies, les risques sont évalués, les indicateurs sont mesurés.",
          "La plupart des entreprises gèrent cela avec des tableurs, des dossiers partagés et des emails. Testudo les remplace par une seule plateforme où chaque fiche a un responsable, un circuit, un historique et ses liens avec les autres.",
        ],
      },
      role: {
        title: "Mon rôle",
        text: [
          "Je suis le seul développeur de l'application. L'équipe décrit ce que le produit doit faire, étape par étape, et je transforme chaque étape en logiciel qui fonctionne : design de l'interface, front end, API, base de données, tests, déploiement et serveur.",
          "L'assistant IA, QualiBot, est la seule partie que j'ai construite avec un collègue.",
        ],
      },
      built: {
        title: "Ce que j'ai construit",
        items: [
          {
            title: "Douze modules reliés",
            text: "Documents, audits, non-conformités, plans d'action, risques et opportunités, indicateurs, formation, prestataires, clients et enquêtes, contexte, vérification des équipements et enregistrements. Toute fiche peut être liée à une autre, et chaque lien se lit dans les deux sens.",
          },
          {
            title: "Une base de données par client",
            text: "Chaque entreprise a sa propre base PostgreSQL, créée et migrée automatiquement. Les données d'un client ne peuvent jamais apparaître dans la requête d'un autre.",
          },
          {
            title: "Un contrôle d'accès qui s'explique",
            text: "Des droits par employé et par rubrique, des matrices de responsabilités par processus, et des règles par fiche : sans le droit de consulter un module, on ne voit que les fiches où l'on est nommé. Tout est appliqué côté serveur.",
          },
          {
            title: "Le temps réel par défaut",
            text: "Quand quelqu'un valide un document ou clôture une action, tous les autres utilisateurs le voient sans recharger, grâce aux WebSockets et à une invalidation ciblée du cache.",
          },
          {
            title: "Des rapports en deux langues",
            text: "Une fiche PDF pour chaque enregistrement, un export Excel pour chaque liste, treize rapports de performance et des supports de revue de direction en PDF et PowerPoint, en français ou en anglais.",
          },
          {
            title: "Un assistant qui agit",
            text: "QualiBot répond à partir du référentiel ISO 9001 et des documents de l'entreprise, et peut ouvrir un document ou amener l'utilisateur sur le bon écran.",
          },
        ],
      },
      architecture: {
        title: "Architecture",
        text: "Une application React dialogue avec une API NestJS derrière un reverse proxy. L'API accède à une base PostgreSQL par client, à un stockage objet pour les fichiers et à un service Python séparé pour l'IA. L'ensemble tourne dans Docker sur un serveur que j'ai installé et que je maintiens.",
        nodes: {
          browser: { title: "Navigateur", text: "React 19 · TypeScript · React Query · Tailwind CSS" },
          proxy: { title: "Reverse proxy", text: "Traefik · HTTPS · un sous-domaine par client" },
          api: { title: "API", text: "NestJS · TypeORM · REST + WebSockets" },
          db: { title: "Bases de données", text: "PostgreSQL · une base par client" },
          files: { title: "Fichiers", text: "Stockage objet compatible S3 · conversion PDF" },
          ai: { title: "Service IA", text: "Python · FastAPI · RAG · Mistral" },
        },
      },
      quality: {
        title: "Qualité et mise en production",
        items: [
          { value: "1 600+", label: "tests automatisés sur l'API et l'application" },
          { value: "120+", label: "versions numérotées livrées en production" },
          { value: "2", label: "langues sur les écrans, les PDF et les exports" },
          { value: "12", label: "modules sur un même système de design" },
        ],
        text: "Au-delà des tests unitaires, des tests de garde lisent le code source et font échouer la compilation quand une règle est enfreinte, par exemple un nouvel écran qui oublie le contrôle d'accès. Des scripts de navigateur rejouent de vrais parcours utilisateur avant chaque version.",
      },
      stack: {
        title: "Technologies",
        items: ["React 19", "TypeScript", "Vite", "React Query", "Tailwind CSS", "NestJS", "TypeORM", "PostgreSQL", "WebSockets", "Puppeteer", "Python", "FastAPI", "Docker", "Traefik", "Jest", "Vitest", "Playwright"],
      },
    },
    cta: {
      title: "Besoin de faire construire quelque chose de ce genre ?",
      text: "Je peux mener un produit du premier écran à la production, ou rejoindre une équipe existante.",
    },
  },
};
