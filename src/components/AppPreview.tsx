// A drawn preview of the Testudo interface: a list screen with its toolbar,
// status pills and a side panel. It is an illustration, not a screenshot, so
// it carries no real data and follows the site's theme. Purely decorative.
const rows = [
  { ref: "NC-2026-014", w: "w-[62%]", tone: "bg-accent" },
  { ref: "PA-2026-043", w: "w-[48%]", tone: "bg-accent-2" },
  { ref: "AUD-2026-121", w: "w-[70%]", tone: "bg-accent" },
  { ref: "RO-2026-007", w: "w-[40%]", tone: "bg-muted" },
  { ref: "DOC-2026-088", w: "w-[56%]", tone: "bg-accent-2" },
];

export function AppPreview() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-line bg-bg shadow-2xl shadow-black/20" aria-hidden>
      {/* window bar */}
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 h-4 flex-1 rounded bg-surface-2" />
      </div>
      <div className="grid grid-cols-[1fr_30%]">
        <div className="p-3.5">
          {/* toolbar: search, then two filters */}
          <div className="mb-2.5 flex items-center gap-2">
            <span className="h-6 flex-1 rounded-md border border-line bg-surface" />
            <span className="accent-bar h-6 w-16 rounded-md" />
          </div>
          <div className="mb-3 flex gap-2">
            <span className="h-5 w-14 rounded-md border border-line bg-surface" />
            <span className="h-5 w-16 rounded-md border border-accent/50 bg-accent/10" />
          </div>
          {/* rows */}
          <div className="overflow-hidden rounded-lg border border-line">
            {rows.map((r) => (
              <div key={r.ref} className="flex items-center gap-2.5 border-b border-line bg-surface px-2.5 py-2 last:border-b-0">
                <span className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[9px] text-soft">{r.ref}</span>
                <span className={`h-2 rounded-full bg-surface-2 ${r.w}`} />
                <span className={`ml-auto h-2 w-2 shrink-0 rounded-full ${r.tone}`} />
              </div>
            ))}
          </div>
        </div>
        {/* side panel: the assistant */}
        <div className="border-l border-line bg-surface p-3">
          <span className="mb-3 block h-2 w-12 rounded-full bg-surface-2" />
          <span className="mb-1.5 block h-7 rounded-lg rounded-bl-sm bg-surface-2" />
          <span className="mb-1.5 ml-auto block h-5 w-3/4 rounded-lg rounded-br-sm bg-accent/20" />
          <span className="block h-9 rounded-lg rounded-bl-sm bg-surface-2" />
        </div>
      </div>
    </div>
  );
}
