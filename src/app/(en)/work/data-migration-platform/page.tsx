import { CaseStudyPage } from "@/components/CaseStudyPage";
import { pageMetadata } from "@/components/Shell";
import { cases } from "@/content/cases";
import { en } from "@/content/en";
import { paths } from "@/content/site";

const study = cases.platform.en;

export const metadata = pageMetadata("en", study.metaTitle, study.metaDescription, paths.platform);

export default function Page() {
  return <CaseStudyPage id="platform" t={en} lang="en" />;
}
