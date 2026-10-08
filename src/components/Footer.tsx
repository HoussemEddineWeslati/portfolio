import type { Dict } from "@/content/en";
import { site } from "@/content/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { Container } from "./ui";

/* The year is written at build time on purpose: a clock read during rendering
   would make the page dynamic for the sake of four digits. */
const YEAR = 2026;

export function Footer({ t }: { t: Dict }) {
  const social = [
    { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon, external: false },
    { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
    { href: site.github, label: "GitHub", Icon: GithubIcon, external: true },
  ];
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {YEAR} {site.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-2">
          {social.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
