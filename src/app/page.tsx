import About from "@/components/About";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: siteConfig.name,

  url: siteConfig.url,

  image: `${siteConfig.url}/og-image.jpeg`,

  description:
    "Estúdio de design e soluções digitais especializado em criação de sites profissionais, identidade visual, branding, UI/UX Design, social media e soluções com inteligência artificial.",

  telephone: "+55 37 99844-7369",

  areaServed: [
    {
      "@type": "City",
      name: "Bom Despacho",
    },
    {
      "@type": "State",
      name: "Minas Gerais",
    },
    {
      "@type": "Country",
      name: "Brasil",
    },
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: "MG",
    addressCountry: "BR",
  },

  knowsAbout: [
    "Criação de sites",
    "Landing pages",
    "Identidade visual",
    "Branding",
    "Design gráfico",
    "UI/UX Design",
    "Social Media",
    "Materiais gráficos",
    "Inteligência artificial",
    "Soluções digitais",
  ],

  serviceType: [
    "Criação de sites profissionais",
    "Landing pages",
    "Identidade visual",
    "Branding",
    "UI/UX Design",
    "Social Media",
    "Materiais gráficos",
    "Soluções com inteligência artificial",
  ],

  sameAs: [
    siteConfig.social.instagram,
  ],
};

export default function Home() {
  return (
    <>
      {/* Dados estruturados para mecanismos de busca */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Efeitos globais */}
      <CursorGlow />
      <ScrollProgress />

      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  );
}