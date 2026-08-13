import type { Metadata } from "next";
import RankingPageView from "@/components/RankingPage";
import { getRanking } from "@/data/rankings";
import { SITE } from "@/lib/site";

const slug = "top-5-cyber-security-companies-india";
const page = getRanking(slug);

export const metadata: Metadata = {
  title: page?.title ?? "CoreGenix",
  description: page?.description ?? SITE.description,
  keywords: [
    "top 5 cyber security companies in India",
    "best cyber security companies India",
    "cyber security company Mumbai",
    "managed SOC services India",
  ],
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: `${SITE.url}/${slug}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: page?.title,
    description: page?.description,
  },
};

export default function Top5CyberSecurityCompaniesPage() {
  return <RankingPageView slug={slug} />;
}
