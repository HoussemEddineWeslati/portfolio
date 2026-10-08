import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/components/Shell";
import { en } from "@/content/en";
import { paths } from "@/content/site";

export const metadata = pageMetadata("en", en.meta.title, en.meta.description, paths.home);

export default function Page() {
  return <HomePage t={en} lang="en" />;
}
