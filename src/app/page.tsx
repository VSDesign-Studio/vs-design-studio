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

export default function Home() {
  return (
    <>
      {/* Efeitos globais */}
      <ScrollProgress />
      <CursorGlow />

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