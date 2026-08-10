import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Lightbulb,
  Monitor,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre a VS Design Studio",
  description:
    "Conheça a VS Design Studio, estúdio de design e soluções digitais de Bom Despacho, MG, especializado em criação de sites, identidade visual, UI/UX e inteligência artificial.",
  alternates: {
    canonical: `${siteConfig.url}/sobre`,
  },
  openGraph: {
    title: "Sobre a VS Design Studio",
    description:
      "Design, estratégia, tecnologia e criatividade para construir marcas e experiências digitais profissionais.",
    url: `${siteConfig.url}/sobre`,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobre a VS Design Studio — design e soluções digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a VS Design Studio",
    description:
      "Design, estratégia, tecnologia e criatividade para construir marcas e experiências digitais profissionais.",
    images: ["/og-image.jpeg"],
  },
};

const stats = [
  {
    number: "10+",
    label: "Projetos criados",
  },
  {
    number: "100%",
    label: "Comprometimento",
  },
  {
    number: "∞",
    label: "Criatividade",
  },
  {
    number: "Brasil",
    label: "Atendimento online",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Criatividade",
    description:
      "Buscamos soluções visuais originais, profissionais e alinhadas à personalidade de cada negócio.",
  },
  {
    icon: Target,
    title: "Estratégia",
    description:
      "Cada decisão de design precisa ter propósito e contribuir para os objetivos da empresa.",
  },
  {
    icon: Rocket,
    title: "Evolução",
    description:
      "Estamos sempre explorando novas ferramentas, tecnologias e possibilidades para entregar projetos melhores.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description:
      "Processos organizados e comunicação direta tornam o desenvolvimento mais eficiente e transparente.",
  },
];

const expertise = [
  {
    icon: Palette,
    title: "Design & Branding",
    description:
      "Identidades visuais, logotipos, sistemas de marca e materiais gráficos.",
  },
  {
    icon: Monitor,
    title: "Web & Experiência Digital",
    description:
      "Sites profissionais, landing pages, interfaces e experiências responsivas.",
  },
  {
    icon: Bot,
    title: "Tecnologia & IA",
    description:
      "Ferramentas modernas e inteligência artificial aplicadas aos processos criativos e digitais.",
  },
  {
    icon: Lightbulb,
    title: "Estratégia Criativa",
    description:
      "Soluções pensadas para melhorar posicionamento, comunicação e presença digital.",
  },
];

const principles = [
  "Entender o negócio antes de começar a criar",
  "Desenvolver soluções personalizadas",
  "Manter comunicação clara durante o projeto",
  "Unir estética, estratégia e funcionalidade",
  "Criar experiências modernas e profissionais",
  "Buscar evolução constante em cada trabalho",
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#070B16] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-32 lg:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-12 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[160px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-120px] top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                Sobre a VS Design Studio
              </span>

              <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Criatividade que encontra
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  estratégia e tecnologia.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
                A VS Design Studio é um estúdio de design e soluções digitais
                criado para ajudar empresas a desenvolver marcas fortes,
                experiências profissionais e uma presença digital mais
                estratégica.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Conhecer projetos

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Falar sobre um projeto
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
                >
                  <strong className="block text-3xl font-black text-orange-500 sm:text-4xl">
                    {stat.number}
                  </strong>

                  <span className="mt-2 block text-sm text-gray-400">
                    {stat.label}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quem somos */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-100px] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Quem somos
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Design pensado além da
                  <span className="block text-orange-500">
                    estética.
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                  A VS Design Studio trabalha na união entre design, estratégia
                  e tecnologia para criar soluções que façam sentido para cada
                  empresa.
                </p>

                <p className="mt-5 leading-8 text-gray-400">
                  Nosso objetivo não é apenas criar algo bonito. Buscamos
                  desenvolver projetos capazes de transmitir profissionalismo,
                  fortalecer a comunicação da marca e melhorar sua presença no
                  ambiente digital.
                </p>

                <p className="mt-5 leading-8 text-gray-400">
                  Atendemos empresas de Bom Despacho, Minas Gerais, e também
                  desenvolvemos projetos totalmente online para clientes de
                  outras regiões do Brasil.
                </p>
              </div>

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[120px]"
                />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                    Nossa visão
                  </span>

                  <blockquote className="mt-6 text-2xl font-black leading-relaxed tracking-[-0.02em] text-white sm:text-3xl">
                    “Transformar ideias em experiências visuais e digitais
                    capazes de gerar valor para marcas e negócios.”
                  </blockquote>

                  <div className="mt-8 h-px bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent" />

                  <p className="mt-7 leading-7 text-gray-400">
                    Cada projeto é uma oportunidade de construir algo único,
                    relevante e alinhado aos objetivos reais de quem confia no
                    nosso trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de atuação */}
        <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                O que fazemos
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Diferentes conhecimentos,
                <span className="block text-orange-500">
                  uma mesma estratégia.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                Unimos diferentes áreas para desenvolver soluções completas e
                coerentes para cada projeto.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-[#070B16] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(249,115,22,0.10)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 transition-all duration-300 group-hover:bg-orange-500">
                      <Icon
                        size={27}
                        aria-hidden="true"
                        className="text-orange-500 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-120px] top-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[150px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Nossos valores
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  O que guia cada
                  <span className="block text-orange-500">
                    projeto.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-gray-400">
                  Mais do que ferramentas ou tendências, acreditamos em alguns
                  princípios fundamentais para construir projetos melhores.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = value.icon;

                  return (
                    <article
                      key={value.title}
                      className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                        <Icon
                          size={24}
                          aria-hidden="true"
                          className="text-orange-500"
                        />
                      </div>

                      <h3 className="mt-5 text-xl font-bold">
                        {value.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        {value.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Forma de trabalhar */}
        <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Nossa forma de trabalhar
                </span>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Cada projeto começa
                  <span className="block text-orange-500">
                    entendendo o negócio.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-gray-400">
                  Antes de criar qualquer solução, buscamos entender os
                  objetivos, desafios, público e contexto da empresa.
                </p>
              </div>

              <div className="grid gap-3">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#070B16] p-4 sm:p-5"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                      <Check
                        size={16}
                        aria-hidden="true"
                        className="text-orange-500"
                      />
                    </span>

                    <p className="leading-7 text-gray-300">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[150px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Vamos criar juntos
              </span>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Tem uma ideia?
                <span className="block text-orange-500">
                  Vamos transformar em projeto.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                Conte um pouco sobre sua empresa e o que você precisa.
                Podemos encontrar juntos a melhor solução.
              </p>

              <Link
                href="/contato"
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Iniciar um projeto

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}