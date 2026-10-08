import Image from "next/image";
import type { Dict } from "@/content/en";
import { paths, site, stack, type Lang } from "@/content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TypedRoles } from "./TypedRoles";
import { WorkSection } from "./WorkSection";
import { ArrowRightIcon, DatabaseIcon, GithubIcon, LayersIcon, LinkedinIcon, MailIcon, SparkIcon } from "./icons";
import { ButtonLink, Container, Section, SectionHeading, stagger } from "./ui";

const SERVICE_ICONS = [LayersIcon, SparkIcon, DatabaseIcon];

/* The hexagon of the portrait, in a 100 x 100 box. The same points are used by
   the photo mask in globals.css. */
const HEX = "50,6 88,28 88,72 50,94 12,72 12,28";

/* Where each floating badge sits around the portrait, and how far it moves
   against the pointer. */
const BADGE_SPOTS = [
  { place: "left-[-9%] top-[13%]", depth: 22, delay: "0s", dot: "bg-accent-2" },
  { place: "right-[-10%] top-[30%]", depth: 30, delay: "-1.5s", dot: "bg-accent" },
  { place: "left-[-12%] bottom-[24%]", depth: 26, delay: "-3s", dot: "bg-accent" },
  { place: "right-[-4%] bottom-[9%]", depth: 18, delay: "-4.5s", dot: "bg-accent-2" },
];

export function HomePage({ t, lang }: { t: Dict; lang: Lang }) {
  const mailto = `mailto:${site.email}`;
  const number = new Intl.NumberFormat(lang);
  const marquee = stack.flatMap((g) => g.items);

  return (
    <>
      <Header t={t} lang={lang} alt={paths.home[lang === "en" ? "fr" : "en"]} />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div data-spotlight className="hero-backdrop overflow-hidden border-b border-line">
          <div className="hero-slabs absolute inset-0 overflow-hidden" aria-hidden />

          <Container className="relative z-10 grid items-center gap-14 pb-14 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-16 lg:pt-24">
            <div>
              <p data-reveal className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-soft backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {t.hero.availability}
              </p>

              <h1 data-reveal style={stagger(1)} className="text-[2.75rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {t.hero.greeting}
              </h1>
              <p data-reveal style={stagger(2)} className="mt-5 min-h-[4.25rem] text-2xl font-semibold leading-snug tracking-tight text-soft sm:min-h-0 sm:text-3xl lg:text-4xl">
                {t.hero.rolePrefix} <TypedRoles roles={t.hero.roles} />
              </p>
              <p data-reveal style={stagger(3)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {t.hero.lead}
              </p>

              <div data-reveal style={stagger(4)} className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href={mailto} magnetic>
                  <MailIcon className="h-4 w-4" /> {t.hero.ctaEmail}
                </ButtonLink>
                <ButtonLink href={site.linkedin} variant="secondary" external magnetic>
                  <LinkedinIcon className="h-4 w-4" /> {t.hero.ctaLinkedin}
                </ButtonLink>
                <a href="#work" className="group inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold text-soft transition-colors hover:text-accent">
                  {t.hero.ctaWork} <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Portrait: the photo in a hexagon, a lit outline around it, and
                the stack floating at the corners. */}
            <div data-reveal="zoom" style={stagger(2)} className="mx-auto w-[min(72vw,19rem)] lg:w-[25rem]">
              <div data-parallax-stage className="relative py-[7%]">
                <div className="accent-bar absolute inset-[12%] rounded-full opacity-35 blur-3xl" aria-hidden />
                <div data-parallax="10" className="absolute inset-x-0 inset-y-[7%]" aria-hidden>
                  <div className="hex-mask accent-bar h-full w-full translate-x-[5%] translate-y-[4%] opacity-25" />
                </div>
                <svg viewBox="0 0 100 100" className="absolute inset-x-[-13%] inset-y-[-6%] overflow-visible" aria-hidden>
                  <polygon points={HEX} fill="none" stroke="var(--line)" strokeWidth="0.5" />
                  <polygon points={HEX} pathLength={268} className="hex-run" fill="none" stroke="var(--accent)" strokeWidth="0.9" strokeLinecap="round" />
                  <polygon points={HEX} pathLength={268} className="hex-run-2" fill="none" stroke="var(--accent-2)" strokeWidth="0.9" strokeLinecap="round" />
                </svg>

                <div className="hex-mask relative aspect-square bg-surface-2">
                  <Image
                    src="/houssem-weslati.jpg"
                    alt={t.hero.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 400px, 72vw"
                    loading="eager"
                    fetchPriority="high"
                    className="object-cover"
                  />
                </div>

                {t.hero.badges.map((badge, i) => {
                  const spot = BADGE_SPOTS[i % BADGE_SPOTS.length];
                  return (
                    <div key={badge} data-parallax={spot.depth} className={`absolute ${spot.place}`}>
                      <span
                        className="float inline-flex items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-2 font-mono text-xs font-semibold text-ink shadow-xl shadow-black/20 backdrop-blur"
                        style={{ "--fd": spot.delay } as React.CSSProperties}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${spot.dot}`} aria-hidden />
                        {badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>

          {/* Proof strip */}
          <Container className="relative z-10 pb-14 sm:pb-20">
            <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {t.proof.map((p, i) => (
                <li key={p.label} data-reveal style={stagger(i)} className="glow-card rounded-2xl bg-line p-px">
                  <div className="glow-inner px-5 py-5">
                    <p className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                      <span data-count={p.count}>{number.format(p.count)}</span>
                      <span className="accent-text">{p.suffix}</span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-muted">{p.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </div>

        {/* ── Stack band ───────────────────────────────────────────────── */}
        <div className="marquee border-b border-line bg-surface/40 py-5" aria-hidden>
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className={`flex shrink-0 items-center ${copy ? "marquee-dup" : ""}`}>
                {marquee.map((item) => (
                  <span key={item} className="flex items-center gap-6 whitespace-nowrap pr-6 font-mono text-sm font-medium text-muted">
                    {item}
                    <span className="h-1 w-1 rotate-45 bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── What I do ────────────────────────────────────────────────── */}
        <Section>
          <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {t.services.items.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <div key={s.title} data-reveal style={stagger(i)}>
                  <div data-tilt="5" className="glow-card h-full rounded-2xl bg-line p-px">
                    <div className="glow-inner p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="outline-num font-mono text-4xl font-bold leading-none" aria-hidden>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ── Selected work ────────────────────────────────────────────── */}
        <Section id="work" className="border-t border-line">
          <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} note={t.work.note} />
          <WorkSection work={t.work} lang={lang} />
        </Section>

        {/* ── Experience ───────────────────────────────────────────────── */}
        <Section id="experience" className="border-t border-line">
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
          <div data-timeline className="relative">
            <span className="absolute left-0 top-0 h-full w-px bg-line" aria-hidden />
            <span className="timeline-fill absolute left-0 top-0 h-full w-px" aria-hidden />
            <ol>
              {t.experience.items.map((e, i) => (
                <li key={`${e.company}-${e.dates}`} data-reveal="right" className="group relative pb-10 pl-7 last:pb-0 sm:pl-10">
                  <span
                    className={`absolute -left-[5px] top-7 h-[11px] w-[11px] rounded-full ring-4 ring-bg transition-colors group-hover:bg-accent ${i === 0 ? "bg-accent" : "bg-muted"}`}
                    aria-hidden
                  />
                  <div className="rounded-2xl border border-line bg-surface p-5 transition-colors group-hover:border-accent/50 sm:p-6">
                    <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{e.role}</h3>
                        <p className="text-sm text-soft">
                          {e.company} <span className="text-muted">· {e.place}</span>
                        </p>
                      </div>
                      <p className="font-mono text-xs text-accent sm:pt-1.5 sm:text-right">{e.dates}</p>
                    </div>
                    <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">{e.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p data-reveal className="mt-10 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-soft">{t.experience.education}</p>
        </Section>

        {/* ── Stack ────────────────────────────────────────────────────── */}
        <Section id="stack" className="border-t border-line">
          <SectionHeading eyebrow={t.stack.eyebrow} title={t.stack.title} />
          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((g, i) => (
              <div key={g.key} data-reveal style={stagger(i)} className="glow-card rounded-2xl bg-line p-px">
                <div className="glow-inner p-6">
                  <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold text-ink">
                    <span className="accent-bar h-1.5 w-1.5 rotate-45" aria-hidden />
                    {t.stack.groups[g.key]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span key={item} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-soft transition-colors hover:border-accent hover:text-accent">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────────────────────────── */}
        <Section id="contact" className="border-t border-line">
          <div data-reveal="zoom">
            <div data-spotlight className="hero-backdrop overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="relative z-10">
                <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{t.contact.eyebrow}</p>
                <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">{t.contact.title}</h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">{t.contact.text}</p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <ButtonLink href={mailto} magnetic>
                    <MailIcon className="h-4 w-4" /> {t.contact.email}
                  </ButtonLink>
                  <ButtonLink href={site.linkedin} variant="secondary" external magnetic>
                    <LinkedinIcon className="h-4 w-4" /> {t.contact.linkedin}
                  </ButtonLink>
                  <ButtonLink href={site.github} variant="secondary" external magnetic>
                    <GithubIcon className="h-4 w-4" /> {t.contact.github}
                  </ButtonLink>
                </div>
                <p className="mt-7 font-mono text-sm text-muted">{site.email}</p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer t={t} />
    </>
  );
}
