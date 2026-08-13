import type { Metadata } from "next";
import RankingPageView from "@/components/RankingPage";
import { getRanking } from "@/data/rankings";
import { SITE } from "@/lib/site";

const slug = "no-1-cyber-security-company-india";
const page = getRanking(slug);

export const metadata: Metadata = {
  title: page?.title ?? "CoreGenix",
  description: page?.description ?? SITE.description,
  keywords: [
    "no 1 cyber security company India",
    "cyber security company India",
    "managed security services",
    "cyber security services Mumbai",
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

export default function No1CyberSecurityPage() {
  return <RankingPageView slug={slug} />;
}
