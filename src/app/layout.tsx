import type { Metadata } from "next";
import { Open_Sans, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-button",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CoreGenix — No.1 provider of IT infrastructure, Cyber Security",
  description:
    "IT infrastructure, cloud infrastructure, cyber security, OT security, Azure, datacenter, Networking, Managed support services.",
  keywords: [
    "IT infrastructure",
    "cloud infrastructure",
    "cyber security",
    "OT security",
    "Azure",
    "datacenter",
    "networking",
    "managed support services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${openSans.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
