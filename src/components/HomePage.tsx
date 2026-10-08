import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/content/en";
import { paths, site, stack, type Lang } from "@/content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserFrame } from "./BrowserFrame";
import { ProjectArt } from "./ProjectArt";
import { ArrowRightIcon, DatabaseIcon, LayersIcon, LinkedinIcon, MailIcon, SparkIcon, GithubIcon } from "./icons";
import { ButtonLink, Container, Section, SectionHeading, Tag } from "./ui";

const SERVICE_ICONS = [LayersIcon, SparkIcon, DatabaseIcon];

export function HomePage({ t, lang }: { t: Dict; lang: Lang }) {
  const [featured, ...others] = t.work.projects;
  const mailto = `mailto:${site.email}`;

  return (
    <>
      <Header t={t} lang={lang} alt={paths.home[lang === "en" ? "fr" : "en"]} />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div className="hero-backdrop border-b border-line">
          <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {t.hero.availability}
              </p>
              <p className="mb-3 font-mono text-sm text-accent">
                {site.name} · {t.hero.role}
              </p>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={mailto}>
                  <MailIcon className="h-4 w-4" /> {t.hero.ctaEmail}
                </ButtonLink>
                <ButtonLink href={site.linkedin} variant="secondary" external>
                  <LinkedinIcon className="h-4 w-4" /> {t.hero.ctaLinkedin}
                </ButtonLink>
                <a href="#work" className="inline-flex h-11 items-center gap-2 px-2 text-sm font-semibold text-soft transition-colors hover:text-accent">
                  {t.hero.ctaWork} <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div className="accent-bar absolute -inset-px rounded-[1.75rem] opacity-60 blur-xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface">
                <Image
                  src="/houssem-weslati.jpg"
                  alt={t.hero.photoAlt}
                  width={880}
                  height={880}
                  sizes="(min-width: 1024px) 384px, 320px"
                  loading="eager"
                  fetchPriority="high"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Container>

          {/* Proof strip */}
          <Container className="pb-12 sm:pb-16">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
              {t.proof.map((p) => (
                <div key={p.label} className="bg-surface px-5 py-5">
                  <dt className="sr-only">{p.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight text-ink">{p.value}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{p.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>

        {/* ── What I do ────────────────────────────────────────────────── */}
        <Section>
          <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {t.services.items.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <div key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ── Selected work ────────────────────────────────────────────── */}
        <Section id="work" className="border-t border-line">
          <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} note={t.work.note} />

          {/* Featured: Testudo, the one with a full case study. */}
          <Link
            href={paths.testudo[lang]}
            className="group mb-4 grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent lg:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{featured.kicker}</p>
              <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{featured.text}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                {t.work.readCase}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="hero-backdrop flex items-center border-t border-line bg-surface-2 p-6 sm:p-9 lg:border-l lg:border-t-0">
              <BrowserFrame src="/work/testudo/indicators.jpg" alt={t.testudo.dashboardAlt} address={site.testudoAddress} />
            </div>
          </Link>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {others.map((p, i) => (
              <article
                key={p.id}
                /* Five cards on a six-column grid: three on the first row, two wider on the second. */
                className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-surface ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <ProjectArt id={p.id} />
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{p.kicker}</p>
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ── Experience ───────────────────────────────────────────────── */}
        <Section id="experience" className="border-t border-line">
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
          <ol className="relative border-l border-line">
            {t.experience.items.map((e, i) => (
              <li key={`${e.company}-${e.dates}`} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg ${i === 0 ? "bg-accent" : "bg-line"}`}
                  aria-hidden
                />
                <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{e.role}</h3>
                    <p className="text-sm text-soft">
                      {e.company} <span className="text-muted">· {e.place}</span>
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted sm:pt-1.5 sm:text-right">{e.dates}</p>
                </div>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">{e.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-soft">{t.experience.education}</p>
        </Section>

        {/* ── Stack ────────────────────────────────────────────────────── */}
        <Section id="stack" className="border-t border-line">
          <SectionHeading eyebrow={t.stack.eyebrow} title={t.stack.title} />
          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((g) => (
              <div key={g.key} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="mb-4 text-sm font-semibold text-ink">{t.stack.groups[g.key]}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span key={item} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-soft">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────────────────────────── */}
        <Section id="contact" className="border-t border-line">
          <div className="hero-backdrop overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{t.contact.eyebrow}</p>
            <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-ink sm:text-4xl">{t.contact.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">{t.contact.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={mailto}>
                <MailIcon className="h-4 w-4" /> {t.contact.email}
              </ButtonLink>
              <ButtonLink href={site.linkedin} variant="secondary" external>
                <LinkedinIcon className="h-4 w-4" /> {t.contact.linkedin}
              </ButtonLink>
              <ButtonLink href={site.github} variant="secondary" external>
                <GithubIcon className="h-4 w-4" /> {t.contact.github}
              </ButtonLink>
            </div>
            <p className="mt-6 font-mono text-sm text-muted">{site.email}</p>
          </div>
        </Section>
      </main>

      <Footer t={t} />
    </>
  );
}
