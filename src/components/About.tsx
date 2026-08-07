import {
  Rocket,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import Reveal from "./Reveal";

const stats = [
  {
    number: "10+",
    text: "Projetos criados",
  },
  {
    number: "100%",
    text: "Comprometimento",
  },
  {
    number: "∞",
    text: "Criatividade",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Design Estratégico",
    description:
      "Criamos soluções visuais pensadas para fortalecer marcas, gerar conexão, transmitir profissionalismo e melhorar o posicionamento da empresa.",
  },
  {
    icon: Rocket,
    title: "Tecnologia Moderna",
    description:
      "Utilizamos ferramentas atuais para desenvolver sites e experiências digitais rápidas, modernas, responsivas e preparadas para diferentes dispositivos.",
  },
  {
    icon: Target,
    title: "Foco em Resultado",
    description:
      "Cada projeto é desenvolvido para melhorar a presença digital, a percepção da marca e a comunicação com clientes e potenciais clientes.",
  },
  {
    icon: Zap,
    title: "Inovação com IA",
    description:
      "Aplicamos inteligência artificial em processos criativos e soluções digitais para aumentar eficiência, ampliar possibilidades e acelerar resultados.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#070B16] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Glow laranja */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-100px] top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[130px]"
      />

      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-100px] h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Conteúdo sobre a empresa */}
          <Reveal>
            <div>
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-orange-400 sm:px-5 sm:text-sm">
                SOBRE A VS DESIGN STUDIO
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Design, estratégia e
                <span className="block text-orange-500 sm:inline">
                  {" "}
                  tecnologia.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                A VS Design Studio é um estúdio de design e soluções digitais
                especializado em identidade visual, criação de sites
                profissionais, experiências digitais e projetos estratégicos
                para empresas que querem fortalecer sua presença no mercado.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                Atendemos empresas de Bom Despacho, Minas Gerais e de outras
                regiões do Brasil, desenvolvendo projetos personalizados que
                unem estética, funcionalidade, tecnologia e comunicação.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                Cada projeto é pensado de forma estratégica para refletir a
                personalidade do negócio, transmitir credibilidade e criar uma
                presença digital mais profissional e consistente.
              </p>

              {/* Estatísticas */}
              <div className="mt-9 grid gap-4 sm:mt-10 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.text}
                    className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.07] sm:text-left"
                  >
                    <strong className="block text-3xl font-black text-orange-500 sm:text-4xl">
                      {stat.number}
                    </strong>

                    <span className="mt-2 block text-sm leading-5 text-gray-300">
                      {stat.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Diferenciais */}
          <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <article className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)] sm:min-h-[260px] sm:p-7">
                    {/* Glow interno */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Número */}
                    <span
                      aria-hidden="true"
                      className="absolute right-6 top-6 text-sm font-bold text-white/10 transition-colors duration-300 group-hover:text-orange-500/30"
                    >
                      0{index + 1}
                    </span>

                    {/* Ícone */}
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/10 bg-orange-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500 group-hover:bg-orange-500">
                      <Icon
                        size={28}
                        aria-hidden="true"
                        className="text-orange-500 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <h3 className="relative mt-6 text-xl font-bold leading-tight text-white">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                      {item.description}
                    </p>

                    {/* Linha inferior */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 group-hover:w-full"
                    />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}