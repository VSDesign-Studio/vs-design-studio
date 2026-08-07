"use client";

import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

import Reveal from "./Reveal";

export default function Portfolio() {
  const featured = projects.find((project) => project.featured);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#070B16] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Glow laranja */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-100px] top-16 h-72 w-72 rounded-full bg-orange-500/10 blur-[130px]"
      />

      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Cabeçalho */}
        <Reveal>
          <div className="mb-14 text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-orange-400 sm:px-5 sm:text-sm">
              NOSSO PORTFÓLIO
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
              Projetos de design e sites

              <span className="block text-orange-500">
                criados para gerar impacto.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              Conheça alguns projetos de identidade visual, branding, criação
              de sites, interfaces digitais e soluções criativas desenvolvidas
              pela VS Design Studio.
            </p>
          </div>
        </Reveal>

        {/* Projeto em destaque */}
        {featured && (
          <Reveal>
            <FeaturedProject
              title={featured.title}
              category={featured.category}
              description={featured.description}
              image={featured.image}
              year={featured.year}
              real={featured.real}
              href={featured.href}
            />
          </Reveal>
        )}

        {/* Demais projetos */}
        {otherProjects.length > 0 && (
          <div className="mt-10 sm:mt-14 lg:mt-16">
            <Reveal>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                    Outros trabalhos
                  </span>

                  <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Projetos selecionados
                  </h3>
                </div>

                <p className="max-w-lg text-sm leading-6 text-gray-400 sm:text-right">
                  Uma seleção de projetos reais e conceituais de branding,
                  identidade visual, design gráfico e experiências digitais.
                </p>
              </div>
            </Reveal>

            <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {otherProjects.map((project) => (
                <Reveal key={project.id}>
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    real={project.real}
                    href={project.href}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* CTA do portfólio */}
        <Reveal>
          <div className="mt-14 flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center backdrop-blur-xl sm:mt-16 sm:px-10 sm:py-10 lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                Gostou dos projetos?
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                Vamos desenvolver uma identidade visual, um site profissional
                ou uma solução digital alinhada aos objetivos da sua empresa.
              </p>
            </div>

            <a
              href="#contato"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/15 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:w-auto lg:mt-0"
            >
              Solicitar orçamento
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}