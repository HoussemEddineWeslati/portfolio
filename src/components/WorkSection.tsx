"use client";

// Selected work: filter pills, then one full-width row per project, the
// interface on one side and the story on the other, alternating.
//
// Every row stays in the page and a filter only hides the ones that do not
// match, so the scroll-reveal state of a row survives a filter change. The
// inner <article> is what replays its entrance when the filter changes; the
// outer wrapper is left alone on purpose, because Interactions marks it as
// revealed directly in the DOM.
import Link from "next/link";
import { useState } from "react";
import type { Dict } from "@/content/en";
import { paths, type Lang } from "@/content/site";
import { BrowserFrame } from "./BrowserFrame";
import { ArrowRightIcon, CheckIcon } from "./icons";
import { Tag, stagger } from "./ui";

type Work = Dict["work"];
type Filter = keyof Work["filters"];

const FILTERS: Filter[] = ["all", "fullstack", "ai", "data"];

export function WorkSection({ work, lang }: { work: Work; lang: Lang }) {
  const [filter, setFilter] = useState<Filter>("all");
  /* Counts the filter changes: used as a key, it replays the row entrance. */
  const [run, setRun] = useState(0);

  const matches = (cats: string[], f: Filter = filter) => f === "all" || cats.includes(f);
  const shown = work.projects.filter((p) => matches(p.cats)).map((p) => p.id);
  const moreShown = work.more.filter((p) => matches(p.cats));
  const countFor = (f: Filter) => [...work.projects, ...work.more].filter((p) => matches(p.cats, f)).length;

  const choose = (f: Filter) => {
    if (f === filter) return;
    setFilter(f);
    setRun((n) => n + 1);
  };

  return (
    <>
      <div data-reveal className="mb-14 flex flex-wrap gap-2" role="group" aria-label={work.eyebrow}>
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => choose(f)}
              className={`inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${
                active ? "border-accent bg-accent text-accent-ink" : "border-line bg-surface text-soft hover:border-accent hover:text-accent"
              }`}
            >
              {work.filters[f]}
              <span className={`rounded-full px-1.5 font-mono text-[11px] leading-5 ${active ? "bg-accent-ink/15" : "bg-surface-2 text-muted"}`}>
                {countFor(f)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-20 sm:gap-28">
        {work.projects.map((p) => {
          const index = shown.indexOf(p.id);
          const flip = index % 2 === 1;
          const href = p.href in paths ? paths[p.href as keyof typeof paths][lang] : "";
          const frame = (
            <BrowserFrame src={p.image} alt={p.alt} address={p.address} ratio="aspect-[16/10]" />
          );
          return (
            <div key={p.id} data-reveal hidden={index < 0}>
              <article key={run} className={`grid items-center gap-8 lg:gap-14 ${flip ? "lg:grid-cols-[0.88fr_1.12fr]" : "lg:grid-cols-[1.12fr_0.88fr]"} ${run ? "row-in" : ""}`} style={stagger(Math.max(index, 0), 90)}>
                <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div className="accent-bar absolute -inset-4 rounded-[2rem] opacity-[0.13] blur-3xl" aria-hidden />
                  <div data-tilt="4" className="relative">
                    {href ? (
                      <Link href={href} aria-label={`${p.title}: ${work.readCase}`} className="block">
                        {frame}
                      </Link>
                    ) : (
                      frame
                    )}
                  </div>
                  {p.real ? null : <p className="relative mt-4 text-center font-mono text-[11px] text-muted">{work.concept}</p>}
                </div>

                <div>
                  <div className="mb-4 flex items-end gap-4">
                    <span className="outline-num font-mono text-6xl font-bold leading-none" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pb-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{p.kicker}</p>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem] sm:leading-tight">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-soft">{p.text}</p>

                  <p className="mb-3 mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">{work.did}</p>
                  <ul className="space-y-2.5">
                    {p.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <CheckIcon className="h-2.5 w-2.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>

                  {href ? (
                    <Link href={href} className="group mt-7 inline-flex h-11 items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-ink">
                      {work.readCase}
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : null}
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <div hidden={moreShown.length === 0} className="mt-24 sm:mt-32">
        <h3 data-reveal className="mb-6 flex items-center gap-4 text-lg font-semibold text-ink">
          {work.moreTitle}
          <span className="h-px flex-1 bg-line" aria-hidden />
        </h3>
        <div data-reveal>
          <div key={run} className="grid gap-4 md:grid-cols-3">
            {moreShown.map((p, i) => (
              <article key={p.id} className={`glow-card rounded-2xl bg-line p-px ${run ? "row-in" : ""}`} style={stagger(i)}>
                <div className="glow-inner flex flex-col p-6">
                  <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{p.kicker}</p>
                  <h4 className="text-lg font-semibold text-ink">{p.title}</h4>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
