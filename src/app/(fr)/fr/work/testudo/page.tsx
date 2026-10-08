import { pageMetadata } from "@/components/Shell";
import { TestudoPage } from "@/components/TestudoPage";
import { fr } from "@/content/fr";
import { paths } from "@/content/site";

export const metadata = pageMetadata("fr", fr.meta.testudoTitle, fr.meta.testudoDescription, paths.testudo);

export default function Page() {
  return <TestudoPage t={fr} lang="fr" />;
}
