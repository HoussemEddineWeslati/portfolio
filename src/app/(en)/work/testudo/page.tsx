import { pageMetadata } from "@/components/Shell";
import { TestudoPage } from "@/components/TestudoPage";
import { en } from "@/content/en";
import { paths } from "@/content/site";

export const metadata = pageMetadata("en", en.meta.testudoTitle, en.meta.testudoDescription, paths.testudo);

export default function Page() {
  return <TestudoPage t={en} lang="en" />;
}
