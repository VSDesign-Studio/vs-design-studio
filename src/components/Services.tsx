"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

import Reveal from "./Reveal";

const services = [
  {
    title: "Sites Profissionais",
    description:
      "Criamos sites modernos, rápidos, responsivos e preparados para apresentar sua empresa, gerar credibilidade e transformar visitantes em potenciais clientes.",
    icon: Monitor,
  },
  {
    title: "Branding & Identidade Visual",
    description:
      "Desenvolvemos identidades visuais estratégicas, logotipos e sistemas de marca pensados para posicionar empresas de forma profissional e memorável.",
    icon: Palette,
  },
  {
    title: "UI/UX Design",
    description:
      "Criamos interfaces digitais modernas, intuitivas e responsivas, com foco em usabilidade, experiência do usuário e conversão.",
    icon: Sparkles,
  },
  {
    title: "Inteligência Artificial",
    description:
      "Aplicamos inteligência artificial em soluções digitais para otimizar processos, aumentar produtividade e criar novas possibilidades para empresas.",
    icon: Bot,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#070B16] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Glow principal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]"
      />

      {/* Glow lateral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Cabeçalho */}
        <Reveal>
          <div className="mb-14 text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-orange-400 sm:px-5 sm:text-sm">
              NOSSOS SERVIÇOS
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
              Design e soluções digitais para
              <span className="mt-1 block text-orange-500">
                empresas que querem crescer
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              Criamos sites profissionais, identidades visuais, interfaces
              digitais e soluções com inteligência artificial para empresas de
              Bom Despacho, Minas Gerais e de todo o Brasil.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title}>
                <motion.article
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-orange-500/50 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)] sm:min-h-[390px] sm:p-8 lg:min-h-[430px]"
                >
                  {/* Glow interno */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-500/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Número */}
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-6 text-sm font-bold text-white/10 transition-colors duration-300 group-hover:text-orange-500/30"
                  >
                    0{index + 1}
                  </span>

                  {/* Ícone */}
                  <div className="relative mb-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/10 bg-orange-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500 group-hover:bg-orange-500 sm:mb-8 sm:h-16 sm:w-16">
                    <Icon
                      size={30}
                      aria-hidden="true"
                      className="text-orange-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="relative flex flex-1 flex-col">
                    <h3 className="mb-4 text-xl font-bold leading-tight text-white sm:mb-5 sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-7">
                      <a
                        href="#contato"
                        aria-label={`Solicitar informações sobre ${service.title}`}
                        className="inline-flex items-center gap-2 font-semibold text-orange-400 transition-all duration-300 group-hover:gap-4 hover:text-orange-300"
                      >
                        Saiba mais

                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Linha inferior */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 group-hover:w-full"
                  />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}