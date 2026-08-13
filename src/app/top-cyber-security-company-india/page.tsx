import type { Metadata } from "next";
import RankingPageView from "@/components/RankingPage";
import { getRanking } from "@/data/rankings";
import { SITE } from "@/lib/site";

const slug = "top-cyber-security-company-india";
const page = getRanking(slug);

export const metadata: Metadata = {
  title: page?.title ?? "CoreGenix",
  description: page?.description ?? SITE.description,
  keywords: [
    "top cyber security company in India",
    "cyber security companies India",
    "best cyber security services",
    "IT security company India",
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

export default function TopCyberSecurityPage() {
  return <RankingPageView slug={slug} />;
}
