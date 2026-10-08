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
   scroll: without JavaScript nothing is ever hidden. It also applies the saved
   theme, so a light-theme visitor never sees a dark flash. */
const themeScript = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

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
    },
    icons: { icon: "/icon.svg" },
  };
}

export type { Dict };
