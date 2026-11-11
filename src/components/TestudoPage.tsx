import Link from "next/link";
import type { Dict } from "@/content/en";
import { paths, site, type Lang } from "@/content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserFrame } from "./BrowserFrame";
import { OtherCases } from "./CaseStudyPage";
import { ArrowLeftIcon, ArrowRightIcon, LinkedinIcon, MailIcon } from "./icons";
import { ButtonLink, Container } from "./ui";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-line py-12 sm:py-14 lg:grid-cols-[14rem_1fr] lg:gap-12">
      <h2 className="text-lg font-semibold tracking-tight text-ink lg:pt-0.5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function TestudoPage({ t, lang }: { t: Dict; lang: Lang }) {
  const c = t.testudo;
  const s = c.sections;

  return (
    <>
      <Header t={t} lang={lang} alt={paths.testudo[lang === "en" ? "fr" : "en"]} />

      <main>
        <div className="hero-backdrop border-b border-line">
          <Container className="py-14 sm:py-20">
            <Link
              href={`${paths.home[lang]}#work`}
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeftIcon className="h-4 w-4" /> {c.back}
            </Link>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">{c.kicker}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{c.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{c.lead}</p>
            <a
              href={site.testudoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              {c.visit} <ArrowRightIcon className="h-4 w-4" />
            </a>

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
          <Block title={c.screensTitle}>
            <p className="mb-7 max-w-3xl text-base leading-relaxed text-soft">{c.screensNote}</p>
            <div className="grid gap-5 md:grid-cols-2">
              <BrowserFrame src="/work/testudo/indicators.jpg" alt={c.dashboardAlt} address={site.testudoAddress} priority />
              <BrowserFrame src="/work/testudo/cartography.jpg" alt={c.mapAlt} address={site.testudoAddress} />
            </div>
          </Block>

          <Block title={s.problem.title}>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-soft">
              {s.problem.text.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Block>

          <Block title={s.role.title}>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-soft">
              {s.role.text.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Block>

          <Block title={s.built.title}>
            <div className="grid gap-4 sm:grid-cols-2">
              {s.built.items.map((item, i) => (
                <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                  <p className="mb-3 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </Block>
        </Container>

        <OtherCases t={t} lang={lang} current="testudo" />

        <Container className="pb-20 pt-10">
          <div className="hero-backdrop rounded-3xl border border-line bg-surface px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{c.cta.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">{c.cta.text}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink href={`mailto:${site.email}`}>
                <MailIcon className="h-4 w-4" /> {t.contact.email}
              </ButtonLink>
              <ButtonLink href={site.linkedin} variant="secondary" external>
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
