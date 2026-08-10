import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Depoimentos de Clientes",
  description:
    "Veja depoimentos e experiências de clientes que confiaram na VS Design Studio para projetos de design, identidade visual, criação de sites e soluções digitais.",
  alternates: {
    canonical: `${siteConfig.url}/depoimentos`,
  },
  openGraph: {
    title: "Depoimentos | VS Design Studio",
    description:
      "Conheça experiências de clientes e empresas que trabalharam com a VS Design Studio.",
    url: `${siteConfig.url}/depoimentos`,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Depoimentos VS Design Studio — clientes satisfeito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Depoimentos | VS Design Studio",
    description:
      "Conheça experiências de clientes e empresas que trabalharam com a VS Design Studio.",
    images: ["/og-image.jpeg"],
  },
};

const highlights = [
  {
    icon: MessageCircle,
    title: "Comunicação próxima",
    description:
      "Contato direto durante o desenvolvimento para manter o projeto alinhado às expectativas.",
  },
  {
    icon: Sparkles,
    title: "Soluções personalizadas",
    description:
      "Cada projeto é desenvolvido considerando as características e necessidades de cada empresa.",
  },
  {
    icon: CheckCircle2,
    title: "Comprometimento",
    description:
      "Organização, atenção aos detalhes e responsabilidade em todas as etapas do trabalho.",
  },
];

const experienceSteps = [
  {
    number: "01",
    title: "Entendimento",
    text: "Começamos ouvindo sua necessidade, objetivos e expectativas.",
  },
  {
    number: "02",
    title: "Construção",
    text: "Desenvolvemos o projeto mantendo comunicação e alinhamento durante o processo.",
  },
  {
    number: "03",
    title: "Refinamento",
    text: "Ajustamos os detalhes necessários para entregar uma solução consistente.",
  },
  {
    number: "04",
    title: "Entrega",
    text: "Finalizamos o projeto organizado e preparado para aplicação ou publicação.",
  },
];

export default function TestimonialsPage() {
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
            className="pointer-events-none absolute right-[-120px] top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                <Quote
                  size={15}
                  aria-hidden="true"
                />

                Depoimentos
              </span>

              <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Projetos são importantes.
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  A experiência também.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
                Mais do que entregar uma identidade visual, um site ou uma
                solução digital, buscamos construir uma experiência clara,
                profissional e próxima durante todo o desenvolvimento.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Iniciar um projeto

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Conhecer projetos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais da experiência */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14">
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-[#070B16] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
                  >
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-500/10 p-3">
                      <Icon
                        size={27}
                        aria-hidden="true"
                        className="text-orange-500"
                      />
                    </div>

                    <h2 className="mt-5 text-xl font-bold">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-120px] top-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Quem já trabalhou conosco
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Resultados construídos
                  <span className="block text-orange-500">
                    em parceria.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-gray-400 sm:text-lg">
                  Cada projeto envolve decisões, ideias, ajustes e colaboração.
                  Por isso, valorizamos uma relação próxima com quem confia seu
                  negócio e sua marca ao nosso trabalho.
                </p>
              </div>

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[120px]"
                />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl sm:p-9">
                  <Quote
                    size={36}
                    aria-hidden="true"
                    className="text-orange-500"
                  />

                  <p className="mt-6 text-xl font-bold leading-relaxed text-white sm:text-2xl">
                    Um bom projeto não termina apenas com uma entrega bonita.
                    Ele precisa fazer sentido para quem contratou e para quem
                    vai utilizar aquela solução.
                  </p>

                  <div className="mt-7 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        aria-hidden="true"
                        className="fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Componente real de depoimentos */}
        <Testimonials />

        {/* Processo da experiência */}
        <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Experiência do projeto
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Uma parceria do início
                <span className="block text-orange-500">
                  até a entrega.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                Organizamos o processo para que cada etapa seja clara e para
                que você acompanhe a evolução do projeto.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {experienceSteps.map((step) => (
                <article
                  key={step.number}
                  className="group rounded-3xl border border-white/10 bg-[#070B16] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
                >
                  <span className="text-sm font-black tracking-[0.2em] text-orange-500">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[150px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Seu projeto pode ser o próximo
              </span>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Vamos construir uma experiência
                <span className="block text-orange-500">
                  que você queira recomendar.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                Conte sobre sua empresa, sua ideia e o resultado que deseja
                alcançar. Vamos conversar sobre a melhor solução.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}