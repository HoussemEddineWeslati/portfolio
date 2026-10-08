// The case studies other than Testudo, in both languages. They share one page
// (components/CaseStudyPage.tsx), so each one is only its text here.
//
// Everything stated comes from what was actually built. Where a screenshot is
// a redesign made for this portfolio and not a capture of the product, the
// page says so under the image.
import type { Lang } from "./site";

export type CaseId = "voice" | "agent" | "platform";

type Titled = { title: string; text: string };

export type CaseStudy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lead: string;
  facts: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  address: string;
  screenTitle: string;
  problem: { title: string; text: string[] };
  role: { title: string; text: string[] };
  built: { title: string; items: Titled[] };
  flow: { title: string; text: string; steps: Titled[] };
  challenges: { title: string; items: Titled[] };
  stack: { title: string; items: string[] };
  cta: Titled;
};

export const cases: Record<CaseId, Record<Lang, CaseStudy>> = {
  /* ── Voice assistant for a ticketing site ──────────────────────────────── */
  voice: {
    en: {
      metaTitle: "Voice assistant for a ticketing site, case study | Houssem Eddine Weslati",
      metaDescription:
        "How I built a voice chatbot that lets people with disabilities find an event, get answers and buy a ticket by speaking, in English and German.",
      kicker: "Case study · AI chatbot · Voice · Accessibility",
      title: "Voice assistant for a ticketing site",
      lead: "A voice chatbot on an e-ticketing website, so that people with disabilities can find an event, get answers and buy a ticket by speaking.",
      facts: [
        { label: "Role", value: "Sole developer" },
        { label: "Company", value: "24 B.E.Y." },
        { label: "Period", value: "May 2025 - Dec 2025" },
        { label: "Status", value: "Live for users" },
      ],
      image: "/work/mock/voice-assistant.jpg",
      imageAlt: "A ticketing website with the voice assistant open, confirming two seats",
      address: "https://eticket.example",
      screenTitle: "The product",
      problem: {
        title: "The problem",
        text: [
          "A ticketing website assumes that you can see the page, read small text and click through a booking form. For someone who is blind, who has limited use of their hands or who struggles with reading, buying a ticket usually means asking another person to do it.",
          "The goal was to make the whole journey possible by voice: finding an event, asking about it, and booking a seat, without touching a form.",
        ],
      },
      role: {
        title: "My role",
        text: [
          "I built the assistant alone at 24 B.E.Y., a German startup based in Tunis: the speech pipeline, the search over the events, the conversation logic and the integration with the website.",
          "It went live on the ticketing site and speaks English and German.",
        ],
      },
      built: {
        title: "What I built",
        items: [
          {
            title: "Voice in, voice out",
            text: "The user sends a voice message, the assistant understands it and answers with a voice message. Speech is transcribed with OpenAI models and the reply is spoken with a clear, natural ElevenLabs voice.",
          },
          {
            title: "No exact names needed",
            text: "Nobody remembers the exact title of an event. The assistant searches by meaning, so an approximate name, a date or a kind of event is enough to find the right one.",
          },
          {
            title: "Answers from real data",
            text: "Events, dates, prices and seats come from the site's own data, retrieved at each question (RAG). The model does not answer from memory.",
          },
          {
            title: "It acts, it does not only talk",
            text: "Through function calling the assistant searches events, takes the user to the right page and carries a booking through to confirmation.",
          },
          {
            title: "Built for speech that is not clear",
            text: "It works from what the person means, not from exact words, so a user who does not speak clearly still gets what they came for. Its own answers are short and easy to follow.",
          },
          {
            title: "Two languages",
            text: "The same assistant holds the conversation in English or in German.",
          },
        ],
      },
      flow: {
        title: "How it works",
        text: "One spoken request goes through five steps before the user hears the answer.",
        steps: [
          { title: "The user speaks", text: "A voice message recorded on the site" },
          { title: "Speech to text", text: "OpenAI speech models" },
          { title: "Understanding", text: "Language model · search by meaning over the events" },
          { title: "Action", text: "Function calling: search, navigate, book" },
          { title: "Voice reply", text: "ElevenLabs text to speech" },
        ],
      },
      challenges: {
        title: "What was hard",
        items: [
          {
            title: "Fast answers over a large catalogue",
            text: "The events sit in a large MongoDB collection, and a spoken conversation does not tolerate a long wait. Search by meaning narrows the catalogue to a handful of candidates before the model answers, which keeps the reply quick.",
          },
          {
            title: "Understanding every user",
            text: "The people this assistant is for are the ones speech recognition serves worst. The assistant had to be forgiving: approximate names, unclear speech and incomplete sentences all had to lead to the right event.",
          },
          {
            title: "A voice people can follow",
            text: "An answer that reads well on a screen can be tiring to listen to. Replies were shaped for the ear: short, one idea at a time, in a clear voice.",
          },
        ],
      },
      stack: { title: "Stack", items: ["Python", "OpenAI", "Speech to text", "ElevenLabs", "RAG", "Vector store", "Function calling", "MongoDB"] },
      cta: { title: "Need a voice assistant in your product?", text: "I can build it end to end, from the speech pipeline to the actions it takes for your users." },
    },
    fr: {
      metaTitle: "Assistant vocal pour une billetterie, étude de cas | Houssem Eddine Weslati",
      metaDescription:
        "Comment j'ai construit un chatbot vocal qui permet aux personnes en situation de handicap de trouver un événement, d'obtenir des réponses et d'acheter un billet en parlant, en anglais et en allemand.",
      kicker: "Étude de cas · Chatbot IA · Voix · Accessibilité",
      title: "Assistant vocal pour une billetterie",
      lead: "Un chatbot vocal sur un site de billetterie en ligne, pour que les personnes en situation de handicap trouvent un événement, obtiennent des réponses et achètent un billet en parlant.",
      facts: [
        { label: "Rôle", value: "Seul développeur" },
        { label: "Entreprise", value: "24 B.E.Y." },
        { label: "Période", value: "Mai 2025 - Déc. 2025" },
        { label: "État", value: "En ligne" },
      ],
      image: "/work/mock/voice-assistant.jpg",
      imageAlt: "Un site de billetterie avec l'assistant vocal ouvert, qui confirme deux places",
      address: "https://eticket.example",
      screenTitle: "Le produit",
      problem: {
        title: "Le problème",
        text: [
          "Un site de billetterie suppose que l'on voit la page, que l'on lit de petits caractères et que l'on clique dans un formulaire de réservation. Pour une personne aveugle, à la motricité réduite ou qui lit difficilement, acheter un billet revient le plus souvent à demander à quelqu'un d'autre de le faire.",
          "L'objectif : rendre tout le parcours possible à la voix. Trouver un événement, poser des questions, réserver une place, sans toucher à un formulaire.",
        ],
      },
      role: {
        title: "Mon rôle",
        text: [
          "J'ai construit l'assistant seul chez 24 B.E.Y., une startup allemande installée à Tunis : la chaîne vocale, la recherche dans les événements, la logique de conversation et l'intégration au site.",
          "Il a été mis en ligne sur le site de billetterie et parle anglais et allemand.",
        ],
      },
      built: {
        title: "Ce que j'ai construit",
        items: [
          {
            title: "La voix dans les deux sens",
            text: "L'utilisateur envoie un message vocal, l'assistant le comprend et répond par un message vocal. La parole est transcrite avec les modèles OpenAI et la réponse est dite par une voix ElevenLabs claire et naturelle.",
          },
          {
            title: "Pas besoin du nom exact",
            text: "Personne ne retient le titre exact d'un événement. L'assistant cherche par le sens : un nom approximatif, une date ou un type d'événement suffisent pour trouver le bon.",
          },
          {
            title: "Des réponses tirées des vraies données",
            text: "Événements, dates, prix et places viennent des données du site, retrouvées à chaque question (RAG). Le modèle ne répond pas de mémoire.",
          },
          {
            title: "Il agit, il ne fait pas que parler",
            text: "Par l'appel de fonctions, l'assistant cherche des événements, amène l'utilisateur sur la bonne page et mène une réservation jusqu'à la confirmation.",
          },
          {
            title: "Pensé pour une parole peu claire",
            text: "Il part de ce que la personne veut dire, pas des mots exacts : un utilisateur qui s'exprime difficilement obtient quand même ce qu'il est venu chercher. Ses propres réponses sont courtes et faciles à suivre.",
          },
          {
            title: "Deux langues",
            text: "Le même assistant tient la conversation en anglais ou en allemand.",
          },
        ],
      },
      flow: {
        title: "Comment ça marche",
        text: "Une demande dite à voix haute passe par cinq étapes avant que l'utilisateur entende la réponse.",
        steps: [
          { title: "L'utilisateur parle", text: "Un message vocal enregistré sur le site" },
          { title: "De la voix au texte", text: "Modèles de transcription OpenAI" },
          { title: "Compréhension", text: "Modèle de langage · recherche par le sens dans les événements" },
          { title: "Action", text: "Appel de fonctions : chercher, naviguer, réserver" },
          { title: "Réponse vocale", text: "Synthèse vocale ElevenLabs" },
        ],
      },
      challenges: {
        title: "Ce qui était difficile",
        items: [
          {
            title: "Répondre vite sur un grand catalogue",
            text: "Les événements sont dans une grande collection MongoDB, et une conversation orale ne supporte pas l'attente. La recherche par le sens réduit le catalogue à quelques candidats avant que le modèle réponde, ce qui garde la réponse rapide.",
          },
          {
            title: "Comprendre chaque utilisateur",
            text: "Les personnes à qui cet assistant s'adresse sont celles que la reconnaissance vocale sert le moins bien. Il devait être tolérant : un nom approximatif, une parole peu claire ou une phrase incomplète devaient mener au bon événement.",
          },
          {
            title: "Une voix que l'on suit",
            text: "Une réponse agréable à lire peut être fatigante à écouter. Les réponses ont été pensées pour l'oreille : courtes, une idée à la fois, d'une voix claire.",
          },
        ],
      },
      stack: { title: "Technologies", items: ["Python", "OpenAI", "Transcription vocale", "ElevenLabs", "RAG", "Base vectorielle", "Appel de fonctions", "MongoDB"] },
      cta: { title: "Besoin d'un assistant vocal dans votre produit ?", text: "Je peux le construire de bout en bout, de la chaîne vocale aux actions qu'il réalise pour vos utilisateurs." },
    },
  },

  /* ── Voice agent for food ordering ─────────────────────────────────────── */
  agent: {
    en: {
      metaTitle: "Voice agent for food ordering, case study | Houssem Eddine Weslati",
      metaDescription:
        "How I built a voice AI agent that answers the phone for a food ordering app, takes the order in natural conversation and sends it to the restaurant.",
      kicker: "Case study · Voice AI agent · Function calling",
      title: "Voice agent for food ordering",
      lead: "A voice agent that answers the phone for a food ordering app: it talks like a person, takes the order and sends it to the restaurant.",
      facts: [
        { label: "Role", value: "Sole developer" },
        { label: "Company", value: "24 B.E.Y." },
        { label: "Period", value: "May 2025 - Dec 2025" },
        { label: "Status", value: "Pilot" },
      ],
      image: "/work/mock/voice-order-agent.jpg",
      imageAlt: "A customer on a call with the voice ordering agent, next to the restaurant's order screen",
      address: "https://orders.example",
      screenTitle: "The product",
      problem: {
        title: "The problem",
        text: [
          "Many customers still prefer to pick up the phone and say what they want. For a restaurant, every call takes a person away from the kitchen or the counter, and at busy hours calls are missed or orders are noted wrong.",
          "The goal was an agent that takes those calls: it holds a normal conversation, gets the order right and hands it to the restaurant like any other order from the app.",
        ],
      },
      role: {
        title: "My role",
        text: [
          "I built the agent alone at 24 B.E.Y., a German startup based in Tunis: the voice pipeline, the conversation, the functions it calls and the connection to the ordering app.",
          "It reached the pilot stage, in English and German.",
        ],
      },
      built: {
        title: "What I built",
        items: [
          {
            title: "A conversation, not a menu of keys",
            text: "The customer calls and speaks as they would to a person. There is no \"press 1\": the agent listens, answers out loud and asks only for what is missing.",
          },
          {
            title: "It knows what you mean",
            text: "Customers rarely say the name printed on the menu. Someone who asks for a \"Neptune pizza\" gets the tuna pizza: the agent matches what is said to what the restaurant actually sells.",
          },
          {
            title: "Menu and prices from the source",
            text: "Dishes, options and prices come from the menu data through function calls, and the agent tells the customer the total before confirming.",
          },
          {
            title: "The whole order, with delivery",
            text: "Items, quantities, options and special requests, then delivery or pick-up, the address and the timing.",
          },
          {
            title: "Recommend, track, change",
            text: "The agent can suggest a dish or a restaurant, give the status of an order, and modify or cancel it.",
          },
          {
            title: "Into the existing system",
            text: "The confirmed order is created through the ordering app's API, so the restaurant receives it exactly like an order placed in the app.",
          },
        ],
      },
      flow: {
        title: "How it works",
        text: "From the first word of the call to the order on the restaurant's side.",
        steps: [
          { title: "The customer calls", text: "A phone call, in English or German" },
          { title: "Speech to text", text: "OpenAI speech models" },
          { title: "The agent decides", text: "Language model with the menu as context" },
          { title: "Function calls", text: "Search the menu · build the order · compute the total" },
          { title: "Voice reply", text: "ElevenLabs text to speech" },
          { title: "Order sent", text: "Created through the ordering app's API" },
        ],
      },
      challenges: {
        title: "What was hard",
        items: [
          {
            title: "Sounding natural on a phone line",
            text: "On a call there is no screen to fall back on. Replies had to be short, quick and spoken the way a person would say them, or the customer hangs up.",
          },
          {
            title: "From what people say to what is on the menu",
            text: "Nicknames, partial names and descriptions all have to land on a real item. Matching by meaning, then confirming with the customer, is what makes the order right.",
          },
          {
            title: "Never inventing a dish or a price",
            text: "A language model will happily make up a pizza. Every item and every price the agent says comes from a function call on the real menu, never from the model itself.",
          },
        ],
      },
      stack: { title: "Stack", items: ["Python", "OpenAI", "Speech to text", "ElevenLabs", "Function calling", "RAG", "MongoDB", "REST API"] },
      cta: { title: "Want an agent that takes your calls?", text: "I can build a voice agent that talks to your customers and acts inside your own system." },
    },
    fr: {
      metaTitle: "Agent vocal de commande de repas, étude de cas | Houssem Eddine Weslati",
      metaDescription:
        "Comment j'ai construit un agent IA vocal qui répond au téléphone pour une application de commande de repas, prend la commande dans une conversation naturelle et la transmet au restaurant.",
      kicker: "Étude de cas · Agent IA vocal · Appel de fonctions",
      title: "Agent vocal de commande de repas",
      lead: "Un agent vocal qui répond au téléphone pour une application de commande de repas : il parle comme une personne, prend la commande et la transmet au restaurant.",
      facts: [
        { label: "Rôle", value: "Seul développeur" },
        { label: "Entreprise", value: "24 B.E.Y." },
        { label: "Période", value: "Mai 2025 - Déc. 2025" },
        { label: "État", value: "Pilote" },
      ],
      image: "/work/mock/voice-order-agent.jpg",
      imageAlt: "Un client en appel avec l'agent vocal de commande, à côté de l'écran du restaurant",
      address: "https://orders.example",
      screenTitle: "Le produit",
      problem: {
        title: "Le problème",
        text: [
          "Beaucoup de clients préfèrent encore décrocher le téléphone et dire ce qu'ils veulent. Pour un restaurant, chaque appel retire une personne de la cuisine ou du comptoir, et aux heures de pointe des appels sont perdus ou des commandes mal notées.",
          "L'objectif : un agent qui prend ces appels. Il tient une conversation normale, prend la commande sans erreur et la remet au restaurant comme n'importe quelle commande passée dans l'application.",
        ],
      },
      role: {
        title: "Mon rôle",
        text: [
          "J'ai construit l'agent seul chez 24 B.E.Y., une startup allemande installée à Tunis : la chaîne vocale, la conversation, les fonctions qu'il appelle et la liaison avec l'application de commande.",
          "Il est allé jusqu'au pilote, en anglais et en allemand.",
        ],
      },
      built: {
        title: "Ce que j'ai construit",
        items: [
          {
            title: "Une conversation, pas un menu à touches",
            text: "Le client appelle et parle comme à une personne. Pas de « tapez 1 » : l'agent écoute, répond à voix haute et ne demande que ce qui manque.",
          },
          {
            title: "Il comprend ce que vous voulez dire",
            text: "Les clients disent rarement le nom imprimé sur la carte. Celui qui demande une « pizza Neptune » reçoit la pizza au thon : l'agent rapproche ce qui est dit de ce que le restaurant vend réellement.",
          },
          {
            title: "La carte et les prix à la source",
            text: "Plats, options et prix viennent des données de la carte par des appels de fonctions, et l'agent annonce le total au client avant de confirmer.",
          },
          {
            title: "Toute la commande, livraison comprise",
            text: "Articles, quantités, options et demandes particulières, puis livraison ou retrait, adresse et horaire.",
          },
          {
            title: "Conseiller, suivre, modifier",
            text: "L'agent peut suggérer un plat ou un restaurant, donner l'état d'une commande, la modifier ou l'annuler.",
          },
          {
            title: "Dans le système existant",
            text: "La commande confirmée est créée par l'API de l'application : le restaurant la reçoit exactement comme une commande passée dans l'application.",
          },
        ],
      },
      flow: {
        title: "Comment ça marche",
        text: "Du premier mot de l'appel à la commande côté restaurant.",
        steps: [
          { title: "Le client appelle", text: "Un appel téléphonique, en anglais ou en allemand" },
          { title: "De la voix au texte", text: "Modèles de transcription OpenAI" },
          { title: "L'agent décide", text: "Modèle de langage avec la carte en contexte" },
          { title: "Appels de fonctions", text: "Chercher dans la carte · composer la commande · calculer le total" },
          { title: "Réponse vocale", text: "Synthèse vocale ElevenLabs" },
          { title: "Commande envoyée", text: "Créée par l'API de l'application" },
        ],
      },
      challenges: {
        title: "Ce qui était difficile",
        items: [
          {
            title: "Être naturel au téléphone",
            text: "En appel, il n'y a pas d'écran pour se rattraper. Les réponses devaient être courtes, rapides et dites comme une personne les dirait, sinon le client raccroche.",
          },
          {
            title: "De ce que les gens disent à ce qui est sur la carte",
            text: "Surnoms, noms partiels et descriptions doivent tous aboutir à un vrai article. Rapprocher par le sens, puis confirmer avec le client : c'est ce qui rend la commande juste.",
          },
          {
            title: "Ne jamais inventer un plat ni un prix",
            text: "Un modèle de langage invente volontiers une pizza. Chaque article et chaque prix annoncés par l'agent viennent d'un appel de fonction sur la vraie carte, jamais du modèle lui-même.",
          },
        ],
      },
      stack: { title: "Technologies", items: ["Python", "OpenAI", "Transcription vocale", "ElevenLabs", "Appel de fonctions", "RAG", "MongoDB", "API REST"] },
      cta: { title: "Envie d'un agent qui prend vos appels ?", text: "Je peux construire un agent vocal qui parle à vos clients et agit dans votre propre système." },
    },
  },

  /* ── Data migration platform ───────────────────────────────────────────── */
  platform: {
    en: {
      metaTitle: "Data migration platform, case study | Houssem Eddine Weslati",
      metaDescription:
        "How I built a web platform that generates, runs and schedules ETL and ELT jobs across five database engines, with a React application and a Python engine.",
      kicker: "Case study · Web application · ETL / ELT",
      title: "Data migration platform",
      lead: "A web platform that generates, runs and schedules data integration jobs across five database engines. My end-of-studies engineering project.",
      facts: [
        { label: "Role", value: "Sole developer" },
        { label: "Company", value: "Datarox" },
        { label: "Period", value: "Jan 2024 - Aug 2024" },
        { label: "Status", value: "Delivered and demonstrated" },
      ],
      image: "/work/mock/data-platform.jpg",
      imageAlt: "A data platform: saved connections, a SQL workspace, results and scheduled jobs",
      address: "https://platform.example",
      screenTitle: "The product",
      problem: {
        title: "The problem",
        text: [
          "Moving data from one database to another usually means writing a script by hand for each pair of source and target. The scripts look alike, but every engine has its own SQL dialect, so each one is rewritten and debugged again.",
          "Once the scripts run, it is hard to say what ran, when, and where a given table came from. The goal was one tool that writes the jobs, runs them on a schedule and shows what happened.",
        ],
      },
      role: {
        title: "My role",
        text: [
          "This was my end-of-studies engineering project at Datarox, and I built it alone: the React application and the Python engine behind it.",
          "It was delivered and demonstrated to the company at the end of the internship.",
        ],
      },
      built: {
        title: "What I built",
        items: [
          {
            title: "Connections",
            text: "Save a connection to each database once, test it, and browse its schemas and tables from the application.",
          },
          {
            title: "SQL workspace",
            text: "Write and run SQL against any saved connection and read the results in the same screen.",
          },
          {
            title: "Jobs generated from patterns",
            text: "Pick an integration pattern, a source and a target: the Python engine writes the ETL or ELT job, in the right dialect for each engine.",
          },
          {
            title: "Scheduler and tracking",
            text: "Schedule a job, follow each run, and see at a glance which ones succeeded, failed or are still running.",
          },
          {
            title: "Data lineage",
            text: "For each table, see where its data comes from and where it goes, across the jobs that touch it.",
          },
          {
            title: "Five engines",
            text: "MySQL, PostgreSQL, Oracle, SQL Server and Snowflake, as a source or as a target.",
          },
        ],
      },
      flow: {
        title: "How it works",
        text: "The path of one migration, from the first connection to the lineage of the result.",
        steps: [
          { title: "Connect", text: "Source and target databases" },
          { title: "Explore", text: "Schemas, tables and SQL workspace" },
          { title: "Choose a pattern", text: "ETL or ELT integration pattern" },
          { title: "Generate", text: "The Python engine writes the job" },
          { title: "Schedule and run", text: "Runs tracked one by one" },
          { title: "Trace", text: "Lineage of every table" },
        ],
      },
      challenges: {
        title: "What was hard",
        items: [
          {
            title: "One pattern, five dialects",
            text: "The same load does not read the same in Oracle and in Snowflake: types, functions and the way to merge rows all differ. Each pattern is described once and rendered for the engine it targets.",
          },
          {
            title: "ETL and ELT in the same tool",
            text: "Transforming data before loading it and transforming it inside the target are two different jobs. The engine generates both, and the user chooses which one fits the migration.",
          },
          {
            title: "Making runs visible",
            text: "A job that fails silently is worse than no job. Every run is recorded with its state, so a failure is seen when it happens and not discovered days later.",
          },
        ],
      },
      stack: { title: "Stack", items: ["React", "Python", "SQL", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "Snowflake"] },
      cta: { title: "Have data to move, or a tool to build around it?", text: "I can build the application and the data engine behind it." },
    },
    fr: {
      metaTitle: "Plateforme de migration de données, étude de cas | Houssem Eddine Weslati",
      metaDescription:
        "Comment j'ai construit une plateforme web qui génère, exécute et planifie des traitements ETL et ELT sur cinq moteurs de bases de données, avec une application React et un moteur Python.",
      kicker: "Étude de cas · Application web · ETL / ELT",
      title: "Plateforme de migration de données",
      lead: "Une plateforme web qui génère, exécute et planifie des traitements d'intégration de données sur cinq moteurs de bases de données. Mon projet de fin d'études d'ingénieur.",
      facts: [
        { label: "Rôle", value: "Seul développeur" },
        { label: "Entreprise", value: "Datarox" },
        { label: "Période", value: "Janv. 2024 - Août 2024" },
        { label: "État", value: "Livrée et présentée" },
      ],
      image: "/work/mock/data-platform.jpg",
      imageAlt: "Une plateforme de données : connexions, espace SQL, résultats et traitements planifiés",
      address: "https://platform.example",
      screenTitle: "Le produit",
      problem: {
        title: "Le problème",
        text: [
          "Déplacer des données d'une base à une autre revient le plus souvent à écrire un script à la main pour chaque couple source et cible. Les scripts se ressemblent, mais chaque moteur a son dialecte SQL : chacun est réécrit et débogué de nouveau.",
          "Une fois les scripts lancés, il est difficile de dire ce qui a tourné, quand, et d'où vient telle table. L'objectif : un seul outil qui écrit les traitements, les exécute selon un calendrier et montre ce qui s'est passé.",
        ],
      },
      role: {
        title: "Mon rôle",
        text: [
          "C'était mon projet de fin d'études d'ingénieur chez Datarox, et je l'ai construit seul : l'application React et le moteur Python derrière elle.",
          "Il a été livré et présenté à l'entreprise à la fin du stage.",
        ],
      },
      built: {
        title: "Ce que j'ai construit",
        items: [
          {
            title: "Connexions",
            text: "Enregistrer une fois la connexion à chaque base, la tester, puis parcourir ses schémas et ses tables depuis l'application.",
          },
          {
            title: "Espace SQL",
            text: "Écrire et exécuter du SQL sur n'importe quelle connexion enregistrée et lire les résultats dans le même écran.",
          },
          {
            title: "Des traitements générés à partir de modèles",
            text: "Choisir un modèle d'intégration, une source et une cible : le moteur Python écrit le traitement ETL ou ELT, dans le bon dialecte pour chaque moteur.",
          },
          {
            title: "Planificateur et suivi",
            text: "Planifier un traitement, suivre chaque exécution et voir d'un coup d'œil lesquelles ont réussi, échoué ou tournent encore.",
          },
          {
            title: "Lignage des données",
            text: "Pour chaque table, voir d'où viennent ses données et où elles vont, à travers les traitements qui la touchent.",
          },
          {
            title: "Cinq moteurs",
            text: "MySQL, PostgreSQL, Oracle, SQL Server et Snowflake, comme source ou comme cible.",
          },
        ],
      },
      flow: {
        title: "Comment ça marche",
        text: "Le chemin d'une migration, de la première connexion au lignage du résultat.",
        steps: [
          { title: "Connecter", text: "Bases source et cible" },
          { title: "Explorer", text: "Schémas, tables et espace SQL" },
          { title: "Choisir un modèle", text: "Modèle d'intégration ETL ou ELT" },
          { title: "Générer", text: "Le moteur Python écrit le traitement" },
          { title: "Planifier et exécuter", text: "Exécutions suivies une à une" },
          { title: "Tracer", text: "Lignage de chaque table" },
        ],
      },
      challenges: {
        title: "Ce qui était difficile",
        items: [
          {
            title: "Un modèle, cinq dialectes",
            text: "Un même chargement ne s'écrit pas pareil en Oracle et en Snowflake : types, fonctions et façon de fusionner les lignes diffèrent. Chaque modèle est décrit une fois et rendu pour le moteur visé.",
          },
          {
            title: "ETL et ELT dans le même outil",
            text: "Transformer les données avant de les charger et les transformer dans la cible sont deux traitements différents. Le moteur génère les deux, et l'utilisateur choisit celui qui convient à la migration.",
          },
          {
            title: "Rendre les exécutions visibles",
            text: "Un traitement qui échoue en silence est pire que pas de traitement. Chaque exécution est enregistrée avec son état : un échec se voit quand il arrive, pas des jours plus tard.",
          },
        ],
      },
      stack: { title: "Technologies", items: ["React", "Python", "SQL", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "Snowflake"] },
      cta: { title: "Des données à déplacer, ou un outil à construire autour ?", text: "Je peux construire l'application et le moteur de données derrière elle." },
    },
  },
};
