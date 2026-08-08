import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contato e Orçamento",
  description:
    "Entre em contato com a VS Design Studio e solicite um orçamento para criação de sites, identidade visual, branding, UI/UX, social media e soluções digitais.",
  alternates: {
    canonical: "https://www.vsdesignstudio.com.br/contato",
  },
  openGraph: {
    title: "Contato e Orçamento | VS Design Studio",
    description:
      "Conte sobre seu projeto e solicite um orçamento para design, criação de sites e soluções digitais.",
    url: "https://www.vsdesignstudio.com.br/contato",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Contato VS Design Studio — orçamento e atendimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato e Orçamento | VS Design Studio",
    description:
      "Conte sobre seu projeto e solicite um orçamento para design, criação de sites e soluções digitais.",
    images: ["/og-image.jpeg"],
  },
};

const advantages = [
  "Atendimento personalizado",
  "Projetos desenvolvidos sob medida",
  "Comunicação direta durante o processo",
  "Atendimento online para todo o Brasil",
];

const faq = [
  {
    question: "Como funciona o orçamento?",
    answer:
      "Você envia as informações do projeto e analisamos a necessidade, escopo, prazo e complexidade antes de apresentar uma proposta.",
  },
  {
    question: "Vocês atendem somente em Bom Despacho?",
    answer:
      "Não. A VS Design Studio atende empresas de Bom Despacho, Minas Gerais, e desenvolve projetos online para clientes de todo o Brasil.",
  },
  {
    question: "Quais serviços posso solicitar?",
    answer:
      "Criação de sites, landing pages, identidade visual, branding, UI/UX Design, social media, materiais gráficos e soluções digitais com inteligência artificial.",
  },
  {
    question: "Posso pedir mais de um serviço?",
    answer:
      "Sim. Podemos montar uma solução combinando diferentes serviços de acordo com os objetivos e necessidades da sua empresa.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#070B16] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-32 lg:pt-44">
          {/* Glow principal */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[160px]"
          />

          {/* Glow azul */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-120px] top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                <MessageCircle
                  size={15}
                  aria-hidden="true"
                />

                Contato
              </span>

              <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Tem um projeto em mente?
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Vamos conversar.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
                Conte um pouco sobre sua empresa, sua ideia e o resultado que
                deseja alcançar. Vamos analisar sua necessidade e encontrar uma
                solução profissional para o projeto.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#formulario"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Solicitar orçamento

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

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

        {/* Informações rápidas */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12">
            <div className="grid gap-4 md:grid-cols-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5537999418756"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-white/10 bg-[#070B16] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                  <MessageCircle
                    size={24}
                    aria-hidden="true"
                    className="text-green-400"
                  />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  WhatsApp
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Atendimento direto para dúvidas e orçamentos.
                </p>

                <span className="mt-4 block text-sm font-semibold text-green-400">
                  Iniciar conversa →
                </span>
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@vsdesignstudio.com.br"
                className="group rounded-3xl border border-white/10 bg-[#070B16] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                  <Mail
                    size={24}
                    aria-hidden="true"
                    className="text-orange-400"
                  />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  E-mail
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Para propostas, informações e contatos profissionais.
                </p>

                <span className="mt-4 block break-all text-sm font-semibold text-orange-400">
                  contato@vsdesignstudio.com.br
                </span>
              </a>

              {/* Atendimento */}
              <article className="rounded-3xl border border-white/10 bg-[#070B16] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <MapPin
                    size={24}
                    aria-hidden="true"
                    className="text-blue-400"
                  />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  Atendimento
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Bom Despacho, Minas Gerais, com atendimento online para
                  empresas de todo o Brasil.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Introdução para orçamento */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-120px] top-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-[150px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Vamos começar
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Seu projeto começa com
                  <span className="block text-orange-500">
                    uma boa conversa.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-gray-400 sm:text-lg">
                  Antes de apresentar qualquer solução, queremos entender sua
                  empresa, seus objetivos e o que precisa ser desenvolvido.
                </p>

                <p className="mt-5 leading-8 text-gray-400">
                  Essas informações ajudam a definir o melhor caminho para o
                  projeto e permitem preparar uma proposta mais adequada às
                  suas necessidades.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl sm:p-9">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={24}
                    aria-hidden="true"
                    className="text-orange-500"
                  />

                  <h3 className="text-xl font-bold">
                    O que você pode contar para nós?
                  </h3>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    "Qual é sua empresa ou projeto",
                    "Qual serviço você precisa",
                    "Qual objetivo deseja alcançar",
                    "Se existe algum prazo específico",
                    "Referências ou ideias que já possui",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-orange-500"
                      />

                      <span className="leading-7 text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário existente */}
        <section
          id="formulario"
          className="scroll-mt-20 border-y border-white/10"
        >
          <Contact />
        </section>

        {/* Benefícios */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-120px] bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Atendimento
                </span>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  Uma experiência
                  <span className="block text-orange-500">
                    próxima e profissional.
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  Nosso objetivo é tornar o desenvolvimento do projeto claro,
                  organizado e fácil de acompanhar.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((advantage) => (
                  <div
                    key={advantage}
                    className="flex min-h-28 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                      <CheckCircle2
                        size={20}
                        aria-hidden="true"
                        className="text-orange-500"
                      />
                    </span>

                    <p className="font-medium leading-6 text-gray-300">
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Dúvidas frequentes
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Antes de enviar sua
                <span className="block text-orange-500">
                  mensagem.
                </span>
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-3xl border border-white/10 bg-[#070B16] p-6 sm:p-7"
                >
                  <h3 className="text-lg font-bold sm:text-xl">
                    {item.question}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[150px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16">
              <Clock3
                size={30}
                aria-hidden="true"
                className="mx-auto text-orange-500"
              />

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Pronto para tirar sua ideia
                <span className="block text-orange-500">
                  do papel?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                Envie as informações do seu projeto e vamos começar a conversar
                sobre a melhor solução para sua empresa.
              </p>

              <a
                href="#formulario"
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Solicitar orçamento

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}