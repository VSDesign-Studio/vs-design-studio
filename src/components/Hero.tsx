import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

const badges = [
  {
    icon: Palette,
    label: "Branding",
    position: "top-8 -left-2 xl:-left-10",
  },
  {
    icon: Monitor,
    label: "Web Design",
    position: "bottom-10 -left-2 xl:-left-12",
  },
  {
    icon: Bot,
    label: "Inteligência Artificial",
    position: "top-20 -right-2 xl:-right-12",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#070B16] text-white"
    >
      {/* Glow laranja */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[120px] sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
      />

      {/* Glow azul esquerdo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]"
      />

      {/* Glow azul direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-56 w-56 rounded-full bg-blue-600/10 blur-[110px]"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-6 sm:pb-24 lg:grid-cols-2 lg:gap-16 lg:pt-28">
        {/* Conteúdo */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-400 sm:px-5 sm:text-sm">
            <Sparkles
              size={16}
              aria-hidden="true"
              className="shrink-0"
            />

            <span>Design • Tecnologia • IA</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl">
            Design, sites e marcas

            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              que geram resultados.
            </span>

            <span className="mt-2 block">
              Estratégia digital para empresas.
            </span>
          </h1>

          {/* Descrição */}
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
            A VS Design Studio cria sites profissionais, identidades visuais,
            peças para redes sociais e soluções digitais para empresas de
            Bom Despacho, Minas Gerais e de todo o Brasil.
          </p>

          {/* Botões */}
          <div className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href="#contato"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/30 sm:w-auto sm:px-8"
            >
              Iniciar um projeto

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 sm:w-auto sm:px-8"
            >
              Ver portfólio
            </a>
          </div>

          {/* Informações rápidas */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400 lg:justify-start">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-orange-500"
              />

              Atendimento personalizado
            </span>

            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-blue-500"
              />

              Soluções sob medida
            </span>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative mx-auto flex w-full max-w-2xl justify-center lg:max-w-none">
          {/* Brilho atrás do mockup */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[100px]"
          />

          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-3xl">
            {/* Barra do navegador */}
            <div className="flex min-h-14 items-center gap-2 border-b border-white/10 bg-black/10 px-4 py-3 sm:p-4">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400 sm:h-3 sm:w-3"
              />

              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400 sm:h-3 sm:w-3"
              />

              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400 sm:h-3 sm:w-3"
              />

              <div className="ml-2 min-w-0 flex-1 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 sm:ml-4">
                <span className="block truncate text-xs text-gray-400 sm:text-sm">
                  www.vsdesignstudio.com.br
                </span>
              </div>
            </div>

            {/* Imagem principal */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/hero-site.jpeg"
                alt="Projeto de site profissional desenvolvido pela VS Design Studio"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
                className="object-cover transition-transform duration-700 md:hover:scale-105"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B16]/30 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Badges flutuantes */}
          {badges.map(({ icon: Icon, label, position }) => (
            <div
              key={label}
              aria-hidden="true"
              className={`absolute ${position} z-10 hidden items-center gap-3 whitespace-nowrap rounded-xl border border-white/10 bg-[#111827]/90 px-4 py-3 shadow-xl backdrop-blur-xl lg:flex`}
            >
              <Icon
                size={18}
                className="shrink-0 text-orange-500"
              />

              <span className="text-sm font-medium text-gray-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}