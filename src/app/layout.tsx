import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "VS Design Studio | Design, Sites e Soluções Digitais",
    template: "%s | VS Design Studio",
  },

  description:
    "Criamos sites profissionais, identidades visuais, experiências digitais e soluções com inteligência artificial para fortalecer marcas e negócios.",

  keywords: [
    "VS Design Studio",
    "designer gráfico",
    "criação de sites",
    "identidade visual",
    "social media",
    "web design",
    "UI UX design",
    "soluções com inteligência artificial",
    "designer em Bom Despacho",
    "agência digital em Minas Gerais",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "VS Design Studio | Design, Sites e Soluções Digitais",
    description:
      "Design, tecnologia e estratégia para transformar marcas e construir experiências digitais profissionais.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "VS Design Studio — Design, Sites e Soluções Digitais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VS Design Studio | Design, Sites e Soluções Digitais",
    description:
      "Design, tecnologia e estratégia para transformar marcas e construir experiências digitais profissionais.",
    images: ["/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <GoogleAnalytics gaId="G-81DSL6S6HR" />
        {children}
      </body>
    </html>
  );
}