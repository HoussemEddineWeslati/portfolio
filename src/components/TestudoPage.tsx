import Link from "next/link";
import type { Dict } from "@/content/en";
import { paths, site, type Lang } from "@/content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ArrowLeftIcon, LinkedinIcon, MailIcon } from "./icons";
import { ButtonLink, Container, Tag } from "./ui";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-line py-12 sm:py-14 lg:grid-cols-[14rem_1fr] lg:gap-12">
      <h2 className="text-lg font-semibold tracking-tight text-ink lg:pt-0.5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Node({ title, text, accent = false }: { title: string; text: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border bg-surface px-4 py-3.5 ${accent ? "border-accent/60" : "border-line"}`}>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 font-mono text-[11px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

/** A vertical connector between two rows of the diagram. */
function Down() {
  return <span className="mx-auto block h-6 w-px bg-line" aria-hidden />;
}

export function TestudoPage({ t, lang }: { t: Dict; lang: Lang }) {
  const c = t.testudo;
  const s = c.sections;
  const n = s.architecture.nodes;

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

          <Block title={s.architecture.title}>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-soft">{s.architecture.text}</p>
            <div className="rounded-2xl border border-line bg-surface-2 p-5 sm:p-8">
              <div className="mx-auto max-w-md">
                <Node {...n.browser} />
                <Down />
                <Node {...n.proxy} />
                <Down />
                <Node {...n.api} accent />
              </div>
              <Down />
              {/* The API fans out to its three back ends. */}
              <div className="mx-auto h-px w-2/3 bg-line" aria-hidden />
              <div className="grid gap-4 sm:grid-cols-3">
                {[n.db, n.files, n.ai].map((node) => (
                  <div key={node.title}>
                    <Down />
                    <Node {...node} />
                  </div>
                ))}
              </div>
            </div>
          </Block>

          <Block title={s.quality.title}>
            <dl className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
              {s.quality.items.map((q) => (
                <div key={q.label} className="bg-surface px-5 py-5">
                  <dt className="sr-only">{q.label}</dt>
                  <dd>
                    <span className="accent-text block text-3xl font-semibold tracking-tight">{q.value}</span>
                    <span className="mt-1.5 block text-sm leading-snug text-muted">{q.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="max-w-3xl text-base leading-relaxed text-soft">{s.quality.text}</p>
          </Block>

          <Block title={s.stack.title}>
            <div className="flex flex-wrap gap-2">
              {s.stack.items.map((item) => <Tag key={item}>{item}</Tag>)}
            </div>
          </Block>
        </Container>

        <Container className="pb-20 pt-4">
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
