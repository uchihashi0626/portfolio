import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/Footer";
import MouseStalker from "../components/MouseStalker";
import { Suspense } from "react";

const Noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-zeta-ten-89.vercel.app/"),
  title: {
    template: "%s | Ryoto Uchihashi - Portfolio",
    default: "Ryoto Uchihashi - Portfolio",
  },
  description:
    "Ryoto Uchihashiのスキルやプロジェクトを紹介するポートフォリオサイトです。Web開発、デザイン、UI/UXに関する実績をチェックしてください。",
  verification: {
    google:
      '<meta name="google-site-verification" content="zGOEmDHFolR0q43-JJWkkcs86IwHwC3zkofMGxYR2pA" />',
  },
  openGraph: {
    title: "Ryoto Uchihashi - ポートフォリオ",
    description:
      "Ryoto Uchihashiのスキルやプロジェクトを紹介するポートフォリオサイトです。",
    url: "https://portfolio-zeta-ten-89.vercel.app/",
    images: [
      {
        url: "/image.png",
        width: 800,
        height: 600,
        alt: "Ryoto Uchihashi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryoto Uchihashi - Portfolio",
    description: "Ryoto Uchihashiのポートフォリオサイト。",
    images: ["/image.png"],
  },
  alternates: {
    canonical: "https://portfolio-zeta-ten-89.vercel.app/",
    languages: {
      ja: "https://portfolio-zeta-ten-89.vercel.app/ja",
    },
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Ryoto Uchihashi",
    "ポートフォリオ",
    "Web開発",
    "デザイン",
    "UI/UX",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={Noto.className} style={{ backgroundColor: "white" }}>
        <MouseStalker />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
