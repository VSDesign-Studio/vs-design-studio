import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfólio de Design, Branding e Sites",
  description:
    "Conheça projetos de identidade visual, branding, criação de sites, UI/UX e soluções digitais desenvolvidos pela VS Design Studio.",
  alternates: {
    canonical: "https://www.vsdesignstudio.com.br/portfolio",
  },
  openGraph: {
    title: "Portfólio | VS Design Studio",
    description:
      "Projetos de branding, identidade visual, criação de sites e experiências digitais desenvolvidos pela VS Design Studio.",
    url: "https://www.vsdesignstudio.com.br/portfolio",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfólio VS Design Studio — projetos de design e sites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | VS Design Studio",
    description:
      "Projetos de branding, identidade visual, criação de sites e experiências digitais desenvolvidos pela VS Design Studio.",
    images: ["/og-image.jpeg"],
  },
};

const areas = [
  {
    icon: Palette,
    title: "Branding",
    text: "Identidades visuais, logotipos e sistemas de marca.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    text: "Sites profissionais, landing pages e experiências digitais.",
  },
  {
    icon: Sparkles,
    title: "UI/UX",
    text: "Interfaces modernas, intuitivas e focadas na experiência.",
  },
  {
    icon: Layers,
    title: "Design Gráfico",
    text: "Materiais visuais para comunicação digital e impressa.",
  },
];

export default function PortfolioPage() {
  const featured = projects.find((project) => project.featured);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <>
      <Header />

      <main className="bg-[#070B16] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-32 lg:pt-44">
          {/* Glow principal */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-12 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[160px]"
          />

          {/* Glow azul */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-120px] top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                <Sparkles
                  size={15}
                  aria-hidden="true"
                />

                Nosso portfólio
              </span>

              <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Projetos criados para
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  transformar marcas.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
                Uma seleção de projetos de branding, identidade visual,
                design gráfico, criação de sites e experiências digitais
                desenvolvidos pela VS Design Studio.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Criar meu projeto

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">
                      <Icon
                        size={22}
                        aria-hidden="true"
                        className="text-orange-500"
                      />
                    </div>

                    <h2 className="mt-4 text-lg font-bold">
                      {area.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {area.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projeto em destaque */}
        {featured && (
          <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-120px] top-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-[150px]"
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
              <div className="mb-10">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Projeto em destaque
                </span>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Um projeto que representa
                  <span className="block text-orange-500">
                    nossa forma de criar.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                  Estratégia, identidade e apresentação visual reunidas em um
                  projeto desenvolvido para comunicar valor e personalidade.
                </p>
              </div>

              <FeaturedProject
                title={featured.title}
                category={featured.category}
                description={featured.description}
                image={featured.image}
                year={featured.year}
                real={featured.real}
                href={featured.href}
              />
            </div>
          </section>
        )}

        {/* Todos os projetos */}
        <section
          id="projetos"
          className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-20 sm:py-24 lg:py-32"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-100px] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Projetos selecionados
                </span>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Explore nossos
                  <span className="block text-orange-500">
                    trabalhos.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl leading-7 text-gray-400 lg:text-right">
                Projetos reais e conceituais desenvolvidos para diferentes
                segmentos, objetivos e necessidades.
              </p>
            </div>

            {otherProjects.length > 0 ? (
              <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {otherProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    real={project.real}
                    href={project.href}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
                <p className="text-gray-400">
                  Novos projetos serão adicionados em breve.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Filosofia */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Além da estética
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Cada projeto começa com
                  <span className="block text-orange-500">
                    uma estratégia.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-gray-400 sm:text-lg">
                  Nosso trabalho não começa escolhendo cores ou criando telas.
                  Primeiro buscamos entender o negócio, o público, o objetivo
                  e a mensagem que precisa ser comunicada.
                </p>

                <p className="mt-5 leading-8 text-gray-400">
                  A partir disso, transformamos estratégia em identidade,
                  design e experiências digitais alinhadas à realidade de
                  cada empresa.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    number: "01",
                    title: "Entender",
                    text: "Conhecemos o negócio, público, desafios e objetivos.",
                  },
                  {
                    number: "02",
                    title: "Planejar",
                    text: "Definimos direção visual, estratégia e abordagem.",
                  },
                  {
                    number: "03",
                    title: "Criar",
                    text: "Transformamos estratégia em soluções visuais e digitais.",
                  },
                  {
                    number: "04",
                    title: "Apresentar",
                    text: "Organizamos o projeto para transmitir valor e profissionalismo.",
                  },
                ].map((step) => (
                  <article
                    key={step.number}
                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]"
                  >
                    <span className="text-sm font-black text-orange-500">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-400">
                        {step.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/10 py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[150px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Próximo projeto
              </span>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                O próximo projeto do portfólio
                <span className="block text-orange-500">
                  pode ser o seu.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                Conte um pouco sobre sua empresa, seus objetivos e o que você
                precisa. Vamos construir juntos uma solução profissional.
              </p>

              <Link
                href="/contato"
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Solicitar orçamento

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {featured?.href && (
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-5 flex w-fit items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-orange-400"
                >
                  Ver projeto em destaque

                  <ExternalLink
                    size={15}
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}