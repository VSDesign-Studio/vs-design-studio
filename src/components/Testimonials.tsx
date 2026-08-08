import { Quote, Star } from "lucide-react";

import Reveal from "./Reveal";

/*
  Mantenha como false enquanto os depoimentos forem demonstrativos.
  Quando inserir avaliações reais e autorizadas, altere para true.
*/
const testimonialsAreReal = true;

const testimonials = [
  {
    name: "Cliente de Branding",
    company: "Projeto demonstrativo",
    text:
      "A identidade visual deixou a marca muito mais profissional, organizada e preparada para se destacar no mercado.",
  },
  {
    name: "Cliente de Website",
    company: "Projeto demonstrativo",
    text:
      "O site ficou moderno, rápido e fácil de navegar, transmitindo muito mais confiança aos visitantes.",
  },
  {
    name: "Cliente de Design",
    company: "Projeto demonstrativo",
    text:
      "O atendimento foi próximo e cuidadoso, com atenção aos detalhes e uma solução alinhada ao objetivo do projeto.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#070B16] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-100px] top-20 h-64 w-64 rounded-full bg-blue-600/15 blur-[110px] sm:left-0 sm:h-72 sm:w-72 sm:blur-[120px]"
      />

      {/* Glow laranja */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-100px] h-64 w-64 rounded-full bg-orange-500/15 blur-[110px] sm:right-0 sm:h-72 sm:w-72 sm:blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Cabeçalho */}
        <Reveal>
          <div className="mb-14 text-center sm:mb-16">
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-400 sm:px-5 sm:text-sm">
              Depoimentos
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              {testimonialsAreReal
                ? "O que dizem sobre nosso trabalho"
                : "A experiência que buscamos entregar"}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Cada projeto é desenvolvido com dedicação, comunicação próxima e
              atenção aos detalhes para entregar uma solução profissional.
            </p>

            {!testimonialsAreReal && (
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">
                Os textos abaixo são demonstrativos e deverão ser substituídos
                por avaliações reais antes da publicação definitiva.
              </p>
            )}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <article className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)] sm:min-h-[390px] sm:p-8">
                {/* Glow interno */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Ícone */}
                <div
                  aria-hidden="true"
                  className="relative mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 text-white shadow-lg shadow-orange-500/10"
                >
                  <Quote size={24} />
                </div>

                {/* Depoimento */}
                <blockquote className="relative flex-1 text-base leading-7 text-gray-300 sm:leading-8">
                  “{testimonial.text}”
                </blockquote>

                {/* Avaliação */}
                <div
                  role="img"
                  aria-label="Avaliação: 5 de 5 estrelas"
                  className="relative mt-7 flex gap-1"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      aria-hidden="true"
                      className="fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  ))}
                </div>

                {/* Cliente */}
                <div className="relative mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-base font-bold text-white sm:h-14 sm:w-14 sm:text-lg"
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-white">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 truncate text-sm text-gray-300">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Linha inferior */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-500 group-hover:w-full"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}