import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/components/Shell";
import { fr } from "@/content/fr";
import { paths } from "@/content/site";

export const metadata = pageMetadata("fr", fr.meta.title, fr.meta.description, paths.home);

export default function Page() {
  return <HomePage t={fr} lang="fr" />;
}
