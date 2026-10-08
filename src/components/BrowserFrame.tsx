// A browser window around a product capture, the way a landing page shows a
// product: the window bar, the address, and a CROPPED view of the screen. The
// crop is deliberate: it gives the look of the product without exposing a
// full screen of data.
import Image from "next/image";

export function BrowserFrame({
  src, alt, address, ratio = "aspect-[16/10]", priority = false, position = "object-left-top",
}: {
  src: string;
  alt: string;
  address: string;
  ratio?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/25">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" aria-hidden />
        <span className="ml-3 flex-1 truncate rounded-md border border-line bg-bg px-3 py-1 font-mono text-[11px] text-muted">
          {address}
        </span>
      </div>
      <div className={`relative ${ratio} bg-white`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className={`object-cover ${position}`}
          {...(priority ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
        />
      </div>
    </div>
  );
}
