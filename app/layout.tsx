import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/Footer";

const Noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-zeta-ten-89.vercel.app/"),
  title: {
    template: "%s | Ryoto Uchihashi - Portfolio",
    default: "Ryoto Uchihashi - Portfolio",
  },
  description:
    "「Next.js+ヘッドレスCMSではじめる! かんたん・モダンwebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "Ryoto Uchihashi - Portfolio",
    description:
      "「Next.js+ヘッドレスCMSではじめる! かんたん・モダンwebサイト制作入門」で作成されるサイトです。",

    images: ["/ogp.png"],
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
      <body className={Noto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
