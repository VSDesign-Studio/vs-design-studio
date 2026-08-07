"use client";

import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Reveal from "./Reveal";

const contactBenefits = [
  {
    title: "Resposta rápida",
    description: "Retorno ágil para entender sua necessidade.",
  },
  {
    title: "Atendimento personalizado",
    description: "Cada projeto é planejado de acordo com sua empresa.",
  },
  {
    title: "Solução sob medida",
    description: "Design, tecnologia e estratégia focados em resultados.",
  },
];

export default function FinalCTA() {
  const whatsappNumber = "5537999418756";

  const whatsappMessage = encodeURIComponent(
    "Olá, Vítor! Conheci a VS Design Studio pelo site e gostaria de solicitar um orçamento."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-[#070B16] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-0 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px] sm:left-0 sm:h-96 sm:w-96 sm:blur-[140px]"
      />

      {/* Glow laranja */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-120px] h-72 w-72 rounded-full bg-orange-500/15 blur-[120px] sm:right-0 sm:h-96 sm:w-96 sm:blur-[140px]"
      />

      {/* Glow central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[110px] sm:h-80 sm:w-80 sm:blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-14 md:rounded-[36px] md:px-14 md:py-16 lg:px-20">
            {/* Decoração interna */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
            />

            <div className="relative z-10">
              {/* Badge */}
              <div className="flex justify-center">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-center text-xs font-semibold text-orange-400 sm:px-5 sm:text-sm">
                  <Sparkles
                    size={16}
                    aria-hidden="true"
                    className="shrink-0"
                  />

                  <span>Vamos tirar sua ideia do papel</span>
                </div>
              </div>

              {/* Título */}
              <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Sua marca merece uma presença digital
                <span className="block bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  profissional e estratégica.
                </span>
              </h2>

              {/* Descrição */}
              <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
                Vamos criar uma solução moderna, personalizada e alinhada aos
                objetivos do seu negócio para fortalecer sua marca e gerar
                novas oportunidades.
              </p>

              {/* Botões */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar orçamento pelo WhatsApp"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-orange-500 px-7 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(249,115,22,0.3)] sm:w-auto sm:px-8"
                >
                  Solicitar orçamento

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar com a VS Design Studio pelo WhatsApp"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-4 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/10 sm:w-auto sm:px-8"
                >
                  <MessageCircle
                    size={20}
                    aria-hidden="true"
                    className="text-green-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  Falar no WhatsApp
                </a>
              </div>

              {/* Separador */}
              <div
                aria-hidden="true"
                className="mx-auto mt-12 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/20 to-transparent sm:mt-14"
              />

              {/* Benefícios */}
              <div className="mt-9 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-0">
                {contactBenefits.map((item, index) => (
                  <div
                    key={item.title}
                    className={`relative px-4 py-4 text-center sm:px-6 ${
                      index !== contactBenefits.length - 1
                        ? "md:border-r md:border-white/10"
                        : ""
                    }`}
                  >
                    <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.8)]" />

                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Informação inferior */}
              <p className="mt-8 text-center text-xs leading-5 text-gray-400 sm:text-sm">
                Conte brevemente sobre sua ideia e retornaremos para entender
                os detalhes do projeto.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}