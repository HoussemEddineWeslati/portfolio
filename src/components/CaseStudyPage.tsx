// The page of a case study, shared by every project except Testudo (which has
// its own, with an architecture diagram). The text comes from content/cases.ts.
import Link from "next/link";
import { cases, type CaseId } from "@/content/cases";
import type { Dict } from "@/content/en";
import { paths, site, type Lang } from "@/content/site";
import { BrowserFrame } from "./BrowserFrame";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ArrowLeftIcon, ArrowRightIcon, LinkedinIcon, MailIcon } from "./icons";
import { ButtonLink, Container, Tag, stagger } from "./ui";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section data-reveal className="grid gap-5 border-t border-line py-12 sm:py-14 lg:grid-cols-[14rem_1fr] lg:gap-12">
      <h2 className="text-lg font-semibold tracking-tight text-ink lg:pt-0.5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

/** The other case studies, at the foot of each one. */
export function OtherCases({ t, lang, current }: { t: Dict; lang: Lang; current: string }) {
  const others = t.work.projects.filter((p) => p.id !== current && p.href in paths);
  return (
    <Container className="pb-6 pt-4">
      <h2 className="mb-5 flex items-center gap-4 text-lg font-semibold text-ink">
        {t.work.otherCases}
        <span className="h-px flex-1 bg-line" aria-hidden />
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {others.map((p) => (
          <Link key={p.id} href={paths[p.href as keyof typeof paths][lang]} className="glow-card group rounded-2xl bg-line p-px">
            <div className="glow-inner flex flex-col p-6">
              <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{p.kicker}</p>
              <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-soft transition-colors group-hover:text-accent">
                {t.work.readCase}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export function CaseStudyPage({ id, t, lang }: { id: CaseId; t: Dict; lang: Lang }) {
  const c = cases[id][lang];
  const other = lang === "en" ? "fr" : "en";

  return (
    <>
      <Header t={t} lang={lang} alt={paths[id][other]} />

      <main>
        <div className="hero-backdrop border-b border-line">
          <Container className="py-14 sm:py-20">
            <Link
              href={`${paths.home[lang]}#work`}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeftIcon className="h-4 w-4" /> {t.testudo.back}
            </Link>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">{c.kicker}</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{c.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{c.lead}</p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
              {c.facts.map((f) => (
                <div key={f.label} className="bg-surface px-5 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{f.label}</dt>
                  <dd className="mt-1.5 text-base font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>

        <Container>
          <Block title={c.screenTitle}>
            <div className="relative">
              <div className="accent-bar absolute -inset-4 rounded-[2rem] opacity-[0.1] blur-3xl" aria-hidden />
              <div className="relative">
                <BrowserFrame src={c.image} alt={c.imageAlt} address={c.address} ratio="aspect-[16/10]" priority />
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-[11px] text-muted">{t.work.concept}</p>
          </Block>

          <Block title={c.problem.title}>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-soft">
              {c.problem.text.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Block>

          <Block title={c.role.title}>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-soft">
              {c.role.text.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Block>

          <Block title={c.built.title}>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.built.items.map((item, i) => (
                <div key={item.title} className="glow-card rounded-2xl bg-line p-px">
                  <div className="glow-inner p-6">
                    <p className="mb-3 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Block title={c.flow.title}>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-soft">{c.flow.text}</p>
            {/* The steps in order: a numbered rail, each step lit in turn. */}
            <ol className="rounded-2xl border border-line bg-surface-2 p-5 sm:p-8">
              {c.flow.steps.map((step, i) => (
                <li key={step.title} data-reveal="right" style={stagger(i, 70)} className="relative flex gap-4 pb-5 last:pb-0">
                  {i < c.flow.steps.length - 1 ? <span className="absolute left-[15px] top-8 h-full w-px bg-line" aria-hidden /> : null}
                  <span className="accent-bar relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold text-accent-ink">
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-xl border border-line bg-surface px-4 py-3">
                    <p className="text-sm font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 font-mono text-[11px] leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <Block title={c.challenges.title}>
            <div className="max-w-3xl space-y-7">
              {c.challenges.items.map((item) => (
                <div key={item.title} className="border-l-2 border-accent/60 pl-5">
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-soft">{item.text}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title={c.stack.title}>
            <div className="flex flex-wrap gap-2">
              {c.stack.items.map((item) => <Tag key={item}>{item}</Tag>)}
            </div>
          </Block>
        </Container>

        <OtherCases t={t} lang={lang} current={id} />

        <Container className="pb-20 pt-10">
          <div className="hero-backdrop rounded-3xl border border-line bg-surface px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{c.cta.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">{c.cta.text}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink href={`mailto:${site.email}`} magnetic>
                <MailIcon className="h-4 w-4" /> {t.contact.email}
              </ButtonLink>
              <ButtonLink href={site.linkedin} variant="secondary" external magnetic>
                <LinkedinIcon className="h-4 w-4" /> {t.contact.linkedin}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </main>

      <Footer t={t} />
    </>
  );
}
