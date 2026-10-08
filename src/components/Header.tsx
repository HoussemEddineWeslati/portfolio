import Link from "next/link";
import type { Dict } from "@/content/en";
import { paths, site, type Lang } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./ui";

/** `alt`: this same page in the other language. */
export function Header({ t, lang, alt }: { t: Dict; lang: Lang; alt: string }) {
  const home = paths.home[lang];
  const links = [
    { href: `${home}#work`, label: t.nav.work },
    { href: `${home}#experience`, label: t.nav.experience },
    { href: `${home}#stack`, label: t.nav.stack },
    { href: `${home}#contact`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={home} aria-label={t.nav.home} className="flex items-center gap-2.5">
          <span className="accent-bar flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold text-accent-ink">HW</span>
          <span className="hidden text-sm font-semibold text-ink sm:block">{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
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
        </div>
      </Container>
    </header>
  );
}
