import { CaseStudyPage } from "@/components/CaseStudyPage";
import { pageMetadata } from "@/components/Shell";
import { cases } from "@/content/cases";
import { fr } from "@/content/fr";
import { paths } from "@/content/site";

const study = cases.agent.fr;

export const metadata = pageMetadata("fr", study.metaTitle, study.metaDescription, paths.agent);

export default function Page() {
  return <CaseStudyPage id="agent" t={fr} lang="fr" />;
}
