// English text of the site. `fr.ts` is typed against this object, so a key
// added here and forgotten there is a type error.
export const en = {
  meta: {
    title: "Houssem Eddine Weslati | Full Stack Engineer, React, NestJS and AI",
    description:
      "Full Stack Engineer building web applications end to end with React, NestJS and TypeScript, and AI features such as chatbots and agents. Available for remote projects.",
    testudoTitle: "Testudo case study | Houssem Eddine Weslati",
    testudoDescription:
      "How I built Testudo, a multi-tenant SaaS for ISO 9001 quality management, from the first screen to production.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    language: "Language",
    switchLabel: "Lire en français",
    theme: "Switch between light and dark theme",
    home: "Back to home",
  },
  hero: {
    availability: "Available for remote projects",
    role: "Full Stack Engineer",
    title: "I build web applications end to end, and the AI inside them.",
    lead:
      "React, NestJS and TypeScript from the data model to the screen. Chatbots and agents that do real work for users. Two years of experience, and a multi-tenant SaaS in production that I built from the first screen.",
    ctaEmail: "Email me",
    ctaLinkedin: "LinkedIn",
    ctaWork: "See my work",
    photoAlt: "Portrait of Houssem Eddine Weslati",
  },
  proof: [
    { value: "2 years", label: "of professional experience" },
    { value: "1 SaaS", label: "built alone and running in production" },
    { value: "1,600+", label: "automated tests in that codebase" },
    { value: "UK", label: "client served fully remote" },
  ],
  services: {
    eyebrow: "What I do",
    title: "One engineer, from the database to the interface.",
    items: [
      {
        title: "Full stack web applications",
        text: "React and Next.js front ends, NestJS and Node.js APIs, PostgreSQL. Typed end to end, with access control, real-time updates and automated tests.",
      },
      {
        title: "AI features that do real work",
        text: "Chatbots and agents built on retrieval (RAG), function calling and voice. They answer from your own documents and act inside your product.",
      },
      {
        title: "Data and delivery",
        text: "Data migrations and pipelines in Python and SQL. Docker, a reverse proxy and versioned releases on a server I set up and run.",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Products I designed and built.",
    note: "This work belongs to the companies I built it for, so the code is private. Here is what each project is and what I did.",
    featuredLabel: "Case study",
    readCase: "Read the case study",
    projects: [
      {
        id: "testudo",
        kicker: "Multi-tenant SaaS · In production",
        title: "Testudo",
        text: "An ISO 9001 quality management platform that I built alone, from the first screen to production: documents, audits, non-conformities, action plans, risks and indicators, with granular access control, real-time updates and reporting in French and English.",
        tags: ["React 19", "NestJS", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
      },
      {
        id: "qualibot",
        kicker: "AI assistant · RAG",
        title: "QualiBot",
        text: "The AI assistant inside Testudo, built with a colleague. It answers from ISO 9001 knowledge and the company's own documents, opens documents and navigates the app for the user.",
        tags: ["Python", "FastAPI", "Mistral", "RAG", "CopilotKit"],
      },
      {
        id: "voice",
        kicker: "AI chatbot · Voice",
        title: "Voice chatbot for accessibility",
        text: "A voice-enabled chatbot on an e-ticketing website, so that people with disabilities can find information and buy tickets by speaking.",
        tags: ["Python", "OpenAI", "ElevenLabs", "RAG", "MongoDB"],
      },
      {
        id: "agent",
        kicker: "AI agent · Function calling",
        title: "Food ordering agent",
        text: "An agent that talks with customers, takes their orders and passes them to the restaurants.",
        tags: ["Python", "OpenAI", "Function calling", "MongoDB"],
      },
      {
        id: "salesforce",
        kicker: "Data engineering · UK client · Remote",
        title: "Salesforce data migration",
        text: "Migration of opportunities, quotes and pricing data for a UK company, with validation and reconciliation after every run.",
        tags: ["Python", "SOQL", "Azure Data Factory", "Databricks SQL"],
      },
      {
        id: "platform",
        kicker: "Web app · ETL / ELT",
        title: "Data migration platform",
        text: "A platform that generates and schedules data integration jobs across five database engines, with a SQL workspace and data lineage.",
        tags: ["React", "Python", "SQL"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I have worked.",
    present: "Present",
    items: [
      {
        role: "Full Stack Engineer",
        company: "Maxula Consulting",
        place: "Tunis, Tunisia · Hybrid",
        dates: "Apr 2026 - Present",
        text: "Sole developer of Testudo: interface design, React front end, NestJS API, one PostgreSQL database per tenant, AI assistant, Docker and the production server.",
      },
      {
        role: "Data Engineer",
        company: "Punic Insight LTD",
        place: "United Kingdom · Remote",
        dates: "Jan 2026 - Mar 2026",
        text: "Reconciled Salesforce data against the Databricks platform with Databricks SQL and Python, with repeatable checks to find and explain mismatches.",
      },
      {
        role: "Artificial Intelligence Specialist",
        company: "24 B.E.Y.",
        place: "Tunis, Tunisia · Hybrid",
        dates: "May 2025 - Dec 2025",
        text: "Built a voice chatbot for an e-ticketing website and an AI agent for a food ordering app, with OpenAI models, RAG, function calling and MongoDB.",
      },
      {
        role: "Data Systems Engineer",
        company: "Punic Insight LTD",
        place: "United Kingdom · Remote",
        dates: "Nov 2024 - Apr 2025",
        text: "Migrated Salesforce data with Python and SOQL, built Azure Data Factory pipelines and supported production deployments.",
      },
      {
        role: "Data Engineer Intern",
        company: "Datarox",
        place: "Tunisia · Hybrid",
        dates: "Jan 2024 - Aug 2024",
        text: "End-of-studies project: a data migration platform with a React application and a Python migration engine across five database engines.",
      },
    ],
    education: "Engineering Degree in Data Science, ESPRIT, 2020 - 2024",
  },
  stack: {
    eyebrow: "Stack",
    title: "The tools I use every day.",
    groups: { front: "Front end", back: "Back end", ai: "AI", delivery: "Data and delivery" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a product to build, or an AI feature to add?",
    text: "Tell me what you need. I reply within one working day, in English or French.",
    email: "Email me",
    linkedin: "Message me on LinkedIn",
    github: "GitHub",
  },
  footer: {
    builtWith: "Built with Next.js and TypeScript.",
    rights: "All rights reserved.",
  },
  testudo: {
    back: "All work",
    visit: "Visit testudo-pro.com",
    dashboardAlt: "Testudo dashboard: quality indicators and pending measures",
    mapAlt: "Testudo process map: management, operational and support processes",
    screensTitle: "The product",
    screensNote: "Two screens from a demonstration workspace: the dashboard and the process map every company starts from.",
    kicker: "Case study · Multi-tenant SaaS · In production",
    title: "Testudo",
    lead: "An ISO 9001 quality management platform, built from the first screen to production.",
    facts: [
      { label: "Role", value: "Sole developer" },
      { label: "Company", value: "Maxula Consulting" },
      { label: "Period", value: "Apr 2026 - Present" },
      { label: "Status", value: "In production" },
    ],
    sections: {
      problem: {
        title: "The problem",
        text: [
          "A company certified ISO 9001 has to prove, at every audit, that its quality system is alive: documents are approved and up to date, non-conformities are analysed and closed, actions are followed, risks are assessed, indicators are measured.",
          "Most companies run this on spreadsheets, shared folders and email. Testudo replaces them with one platform where every record has an owner, a workflow, a history and its links to the others.",
        ],
      },
      role: {
        title: "My role",
        text: [
          "I am the only developer on the application. The team describes what the product must do, step by step, and I turn each step into working software: interface design, front end, API, database, tests, deployment and the server it runs on.",
          "The AI assistant, QualiBot, is the one part I built with a colleague.",
        ],
      },
      built: {
        title: "What I built",
        items: [
          {
            title: "Twelve connected modules",
            text: "Documents, audits, non-conformities, action plans, risks and opportunities, indicators, training, suppliers, customers and surveys, context, equipment checks and records. Any record can be linked to any other, and each link reads in both directions.",
          },
          {
            title: "One database per customer",
            text: "Each company gets its own PostgreSQL database, created and migrated automatically. One customer's data can never appear in another's query.",
          },
          {
            title: "Access control you can explain",
            text: "Rights per employee and per section, responsibility matrices per process, and record-level rules: without the right to consult a module, you see only the records you are named on. Everything is enforced on the server.",
          },
          {
            title: "Real time by default",
            text: "When someone validates a document or closes an action, every other user sees it without reloading, through WebSockets and targeted cache invalidation.",
          },
          {
            title: "Reporting in two languages",
            text: "A PDF sheet for every record, Excel exports for every list, thirteen performance reports and management review decks in PDF and PowerPoint, all in French or English.",
          },
          {
            title: "An assistant that acts",
            text: "QualiBot answers from ISO 9001 knowledge and the company's own documents, and can open a document or take the user to the right screen.",
          },
        ],
      },
      architecture: {
        title: "Architecture",
        text: "A React application talks to a NestJS API behind a reverse proxy. The API reaches one PostgreSQL database per customer, object storage for files, and a separate Python service for AI. Everything runs in Docker on a server I set up and maintain.",
        nodes: {
          browser: { title: "Browser", text: "React 19 · TypeScript · React Query · Tailwind CSS" },
          proxy: { title: "Reverse proxy", text: "Traefik · HTTPS · one subdomain per customer" },
          api: { title: "API", text: "NestJS · TypeORM · REST + WebSockets" },
          db: { title: "Databases", text: "PostgreSQL · one database per customer" },
          files: { title: "Files", text: "S3-compatible object storage · PDF conversion" },
          ai: { title: "AI service", text: "Python · FastAPI · RAG · Mistral" },
        },
      },
      quality: {
        title: "Quality and delivery",
        items: [
          { value: "1,600+", label: "automated tests across the API and the application" },
          { value: "120+", label: "versioned releases shipped to production" },
          { value: "2", label: "languages across screens, PDFs and exports" },
          { value: "12", label: "modules sharing one design system" },
        ],
        text: "Beyond unit tests, guard tests read the source code and fail the build when a rule is broken, for example a new screen that skips the access check. Browser scripts replay real user journeys before each release.",
      },
      stack: {
        title: "Stack",
        items: ["React 19", "TypeScript", "Vite", "React Query", "Tailwind CSS", "NestJS", "TypeORM", "PostgreSQL", "WebSockets", "Puppeteer", "Python", "FastAPI", "Docker", "Traefik", "Jest", "Vitest", "Playwright"],
      },
    },
    cta: {
      title: "Need something like this built?",
      text: "I can take a product from the first screen to production, or join an existing team.",
    },
  },
};

export type Dict = typeof en;
