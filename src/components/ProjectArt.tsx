// One drawn visual per project card. These are illustrations made in code,
// not screenshots and not generated images: the real products are private,
// so each one shows the IDEA of the product with no real data. They follow
// the site's theme and are purely decorative.

const Bar = ({ className = "" }: { className?: string }) => <span className={`block h-1.5 rounded-full bg-line ${className}`} />;

const Check = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m2.5 6.2 2.3 2.3 4.7-5" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 28 12" className="h-3 w-7 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 6h24M20 1.5 25.5 6 20 10.5" />
  </svg>
);

/** QualiBot: a question, an answer, and the document it cites. */
function Qualibot() {
  return (
    <div className="mx-auto w-full max-w-[17rem] space-y-2">
      <div className="ml-auto w-3/5 rounded-xl rounded-br-sm bg-accent/15 p-2.5">
        <Bar className="bg-accent/50" />
        <Bar className="mt-1.5 w-2/3 bg-accent/50" />
      </div>
      <div className="w-4/5 rounded-xl rounded-bl-sm border border-line bg-surface p-2.5">
        <Bar />
        <Bar className="mt-1.5 w-11/12" />
        <Bar className="mt-1.5 w-1/2" />
        <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden><path d="M3 1.5h4l2.5 2.5v6.5H3z" /><path d="M7 1.5V4h2.5" /></svg>
          PR-QUA-004
        </span>
      </div>
    </div>
  );
}

/** Voice chatbot: a microphone, the sound wave, and what was understood. */
function Voice() {
  const wave = [3, 6, 10, 5, 12, 8, 14, 6, 11, 4, 9, 13, 7, 5, 10, 3];
  return (
    <div className="mx-auto flex w-full max-w-[17rem] flex-col items-center gap-3.5">
      <div className="flex w-full items-center gap-3">
        <span className="accent-bar flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-accent-ink">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
          </svg>
        </span>
        <div className="flex h-10 flex-1 items-center gap-[3px]">
          {wave.map((h, i) => (
            <span key={i} className="w-full rounded-full bg-accent-2/70" style={{ height: `${h * 2.4}px` }} />
          ))}
        </div>
      </div>
      <div className="w-full rounded-xl rounded-tl-sm border border-line bg-surface p-2.5">
        <Bar className="w-11/12" />
        <Bar className="mt-1.5 w-3/5" />
      </div>
    </div>
  );
}

/** Ordering agent: the conversation becomes an order, the order reaches the restaurant. */
function Agent() {
  return (
    <div className="mx-auto flex w-full max-w-[18rem] items-center gap-2">
      <div className="w-[34%] space-y-1.5">
        <div className="rounded-lg rounded-bl-sm border border-line bg-surface p-2"><Bar /><Bar className="mt-1 w-2/3" /></div>
        <div className="ml-auto w-4/5 rounded-lg rounded-br-sm bg-accent/15 p-2"><Bar className="bg-accent/50" /></div>
      </div>
      <Arrow />
      <div className="flex-1 rounded-lg border border-line bg-surface p-2.5">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-muted">Order</p>
        {[["2 ×", "w-3/5"], ["1 ×", "w-2/5"]].map(([q, w]) => (
          <div key={q} className="mb-1.5 flex items-center gap-1.5">
            <span className="font-mono text-[9px] text-soft">{q}</span>
            <Bar className={w} />
          </div>
        ))}
        <div className="mt-2 flex items-center justify-between border-t border-line pt-2">
          <Bar className="w-1/4" />
          <span className="flex items-center gap-1 rounded bg-accent/15 px-1.5 py-0.5"><Check /></span>
        </div>
      </div>
    </div>
  );
}

const TABLE_ROWS = ["w-3/4", "w-1/2", "w-2/3", "w-3/5"];

function MiniTable({ checked }: { checked: boolean }) {
  return (
    <div className="flex-1 overflow-hidden rounded-lg border border-line bg-surface">
      <div className="border-b border-line bg-surface-2 px-2 py-1.5"><Bar className="w-1/2 bg-muted/50" /></div>
      {TABLE_ROWS.map((w) => (
        <div key={w} className="flex items-center gap-1.5 border-b border-line px-2 py-[7px] last:border-b-0">
          <Bar className={w} />
          {checked ? <span className="ml-auto"><Check /></span> : null}
        </div>
      ))}
    </div>
  );
}

/** Data migration: source records, the pipeline, the same records checked on arrival. */
function Migration() {
  return (
    <div className="mx-auto flex w-full max-w-[18rem] items-center gap-2">
      <MiniTable checked={false} />
      <div className="flex flex-col items-center gap-1">
        <span className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[9px] text-soft">ETL</span>
        <Arrow />
      </div>
      <MiniTable checked />
    </div>
  );
}

/** Data platform: saved connections, a SQL workspace, and its run output. */
function Platform() {
  const engines = ["mysql", "postgresql", "oracle", "snowflake"];
  return (
    <div className="mx-auto w-full max-w-[18rem] overflow-hidden rounded-lg border border-line bg-surface">
      <div className="grid grid-cols-[34%_1fr]">
        <div className="border-r border-line p-2">
          {engines.map((e, i) => (
            <div key={e} className={`mb-1 flex items-center gap-1.5 rounded px-1.5 py-1 last:mb-0 ${i === 1 ? "bg-accent/10" : ""}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-accent" : "bg-line"}`} />
              <span className={`font-mono text-[9px] ${i === 1 ? "text-accent" : "text-muted"}`}>{e}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-end gap-1 border-b border-line px-2 py-1.5">
            <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[8px] text-muted">compile</span>
            <span className="accent-bar rounded px-1.5 py-0.5 font-mono text-[8px] font-semibold text-accent-ink">run</span>
            <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[8px] text-muted">schedule</span>
          </div>
          <div className="px-2 py-2 font-mono text-[9px] leading-relaxed">
            <p><span className="text-accent-2">select</span> <span className="text-soft">*</span></p>
            <p><span className="text-accent-2">from</span> <span className="text-soft">sales.orders</span></p>
          </div>
          <div className="flex items-center gap-1.5 border-t border-line bg-surface-2 px-2 py-1.5">
            <Check />
            <span className="font-mono text-[8px] text-muted">syntax ok · 200</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ART: Record<string, () => React.ReactElement> = {
  qualibot: Qualibot,
  voice: Voice,
  agent: Agent,
  salesforce: Migration,
  platform: Platform,
};

export function ProjectArt({ id }: { id: string }) {
  const Art = ART[id];
  if (!Art) return null;
  return (
    <div className="hero-backdrop flex h-44 items-center border-b border-line bg-surface-2 px-5" aria-hidden>
      <Art />
    </div>
  );
}
