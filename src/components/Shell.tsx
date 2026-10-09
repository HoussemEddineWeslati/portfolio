// The <html> and <body> of every page. There is one root layout per language
// (route groups), so each one passes its own `lang`.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { Dict } from "@/content/en";
import { site, type Lang } from "@/content/site";
import "@/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/* Runs before the first paint. It marks the page as scripted (`html.js`), which
   is what lets the stylesheet hide the elements that will be revealed on
   scroll: without JavaScript nothing is ever hidden.

   It also sets the theme. A choice made with the toggle wins and is remembered;
   otherwise the site follows the visitor's device, and keeps following it if
   the device switches while the page is open. Light is the default: dark is
   used only when the device asks for it. */
const themeScript = `(function(){var d=document.documentElement;d.classList.add("js");function saved(){try{var t=localStorage.getItem("theme");return t==="light"||t==="dark"?t:null}catch(e){return null}}var m=window.matchMedia("(prefers-color-scheme: dark)");d.dataset.theme=saved()||(m.matches?"dark":"light");if(m.addEventListener)m.addEventListener("change",function(e){if(!saved())d.dataset.theme=e.matches?"dark":"light"})})()`;

export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-dvh">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}

export function pageMetadata(lang: Lang, title: string, description: string, path: { en: string; fr: string }): Metadata {
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: path[lang],
      languages: { en: path.en, fr: path.fr },
    },
    openGraph: {
      title,
      description,
      url: path[lang],
      siteName: site.name,
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      type: "website",
      /* The card shown when the address is shared (LinkedIn, WhatsApp, Slack). */
      images: [{ url: "/og.jpg", width: 2400, height: 1260, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
    icons: { icon: "/icon.svg" },
  };
}

export type { Dict };
