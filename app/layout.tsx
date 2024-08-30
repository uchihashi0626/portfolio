import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/Footer";
import MouseStalker from "../components/MouseStalker";

const Noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-zeta-ten-89.vercel.app/"),
  title: {
    template: "%s | Ryoto Uchihashi - Portfolio",
    default: "Ryoto Uchihashi - Portfolio",
  },
  description: "Ryoto Uchihashiのポートフォリオサイトです。",
  openGraph: {
    title: "Ryoto Uchihashi - Portfolio",
    description: "Ryoto Uchihashiのポートフォリオサイトです。",

    images: ["/image.png"],
  },
  alternates: {
    canonical: "https://portfolio-zeta-ten-89.vercel.app/",
  },
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
