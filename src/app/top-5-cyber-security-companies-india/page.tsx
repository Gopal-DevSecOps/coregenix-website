import type { Metadata } from "next";
import RankingPageView from "@/components/RankingPage";
import { getRanking } from "@/data/rankings";
import { SITE } from "@/lib/site";

const slug = "top-5-cyber-security-companies-india";
const page = getRanking(slug);

export const metadata: Metadata = {
  title: page?.title ?? "CoreGenix",
  description: page?.description ?? SITE.description,
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: `${SITE.url}/${slug}`,
    type: "website",
  },
};

export default function Top5CyberSecurityCompaniesPage() {
  return <RankingPageView slug={slug} />;
}
