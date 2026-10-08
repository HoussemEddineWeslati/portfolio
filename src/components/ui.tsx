// Shared building blocks: page width, section heading, tags and buttons.
import Link from "next/link";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div data-reveal className="mb-12 max-w-3xl sm:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
        <span className="accent-bar h-px w-8" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-[2.75rem]">{title}</h2>
      {note ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{note}</p> : null}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] leading-5 text-soft">
      {children}
    </span>
  );
}

/** The `--d` delay that staggers a group of revealed siblings. */
export function stagger(i: number, step = 80): React.CSSProperties {
  return { "--d": `${i * step}ms` } as React.CSSProperties;
}

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ButtonLink({
  href, children, variant = "primary", external = false, magnetic = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  /** Drifts toward the pointer (see Interactions). */
  magnetic?: boolean;
}) {
  const cls =
    variant === "primary"
      ? `${buttonBase} bg-accent text-accent-ink shadow-lg shadow-accent/20 hover:brightness-110`
      : `${buttonBase} border border-line bg-surface text-ink hover:border-accent hover:text-accent`;
  const extra = magnetic ? { "data-magnetic": "" } : {};
  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...extra} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={cls} {...extra}>{children}</Link>;
}
