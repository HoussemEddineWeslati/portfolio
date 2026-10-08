import Link from "next/link";
import type { Dict } from "@/content/en";
import { paths, site, type Lang } from "@/content/site";
import { Interactions } from "./Interactions";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./ui";

/** `alt`: this same page in the other language. */
export function Header({ t, lang, alt }: { t: Dict; lang: Lang; alt: string }) {
  const home = paths.home[lang];
  const links = [
    { id: "#work", label: t.nav.work },
    { id: "#experience", label: t.nav.experience },
    { id: "#stack", label: t.nav.stack },
    { id: "#contact", label: t.nav.contact },
  ].map((l) => ({ ...l, href: `${home}${l.id}` }));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      {/* The header is on every page, so it is where the page's pointer and
          scroll behaviour is switched on. */}
      <Interactions />

      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={home} aria-label={t.nav.home} className="flex items-center gap-2.5">
          <span className="accent-bar flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold text-accent-ink">HW</span>
          <span className="hidden text-sm font-semibold text-ink sm:block">{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-nav={l.id}
              className="relative py-1 text-sm text-muted transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 aria-[current=true]:text-ink aria-[current=true]:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Both languages are shown and the current one is highlighted, so the
              control states where you ARE. A single button reading « FR » on
              the English page read as "this page is in French". Plain links,
              not a script: the other language is another page. */}
          <div className="flex h-9 items-center rounded-lg border border-line p-0.5 font-mono text-xs font-semibold" role="group" aria-label={t.nav.language}>
            {(["en", "fr"] as const).map((code) =>
              code === lang ? (
                <span key={code} aria-current="true" className="flex h-full items-center rounded-md bg-surface-2 px-2.5 text-ink">
                  {code.toUpperCase()}
                </span>
              ) : (
                <a
                  key={code}
                  href={alt}
                  hrefLang={code}
                  aria-label={t.nav.switchLabel}
                  title={t.nav.switchLabel}
                  className="flex h-full cursor-pointer items-center rounded-md px-2.5 text-muted transition-colors hover:text-accent"
                >
                  {code.toUpperCase()}
                </a>
              ),
            )}
          </div>
          <ThemeToggle label={t.nav.theme} />
          <MobileMenu links={links} labels={{ menu: t.nav.menu, close: t.nav.close }} />
        </div>
      </Container>

      <div data-progress className="progress absolute inset-x-0 -bottom-px h-0.5" aria-hidden />
    </header>
  );
}
