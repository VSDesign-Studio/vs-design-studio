import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Serviços de Design e Criação de Sites",
  description:
    "Conheça os serviços da VS Design Studio: criação de sites profissionais, identidade visual, UI/UX Design, social media e soluções com inteligência artificial.",
  alternates: {
    canonical: "https://www.vsdesignstudio.com.br/servicos",
  },
  openGraph: {
    title: "Serviços | VS Design Studio",
    description:
      "Design, sites profissionais, identidade visual, UI/UX e soluções digitais para empresas.",
    url: "https://www.vsdesignstudio.com.br/servicos",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Serviços da VS Design Studio — sites, branding e UX/UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços | VS Design Studio",
    description:
      "Design, sites profissionais, identidade visual, UI/UX e soluções digitais para empresas.",
    images: ["/og-image.jpeg"],
  },
};

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Sites Profissionais",
    description:
      "Desenvolvemos sites modernos, rápidos, responsivos e estratégicos para apresentar sua empresa com profissionalismo e transformar visitantes em oportunidades de negócio.",
    items: [
      "Sites institucionais",
      "Landing pages",
      "Design responsivo",
      "Otimização para dispositivos móveis",
      "SEO técnico inicial",
      "Integração com WhatsApp",
    ],
  },
  {
    icon: Palette,
    number: "02",
    title: "Branding & Identidade Visual",
    description:
      "Criamos identidades visuais pensadas para transmitir personalidade, profissionalismo e posicionar sua empresa de maneira consistente no mercado.",
    items: [
      "Criação de logotipo",
      "Paleta de cores",
      "Tipografia",
      "Sistema visual",
      "Aplicações da marca",
      "Apresentação de identidade",
    ],
  },
  {
    icon: Sparkles,
    number: "03",
    title: "UI/UX Design",
    description:
      "Projetamos interfaces digitais modernas e intuitivas com foco em experiência do usuário, organização da informação, usabilidade e conversão.",
    items: [
      "Interfaces para sites",
      "Landing pages",
      "Experiência do usuário",
      "Wireframes",
      "Prototipagem",
      "Design de interfaces",
    ],
  },
  {
    icon: Bot,
    number: "04",
    title: "Inteligência Artificial",
    description:
      "Aplicamos inteligência artificial em processos criativos e soluções digitais para aumentar produtividade, eficiência e possibilidades para empresas.",
    items: [
      "Soluções digitais com IA",
      "Automação de processos",
      "Apoio à produção de conteúdo",
      "Fluxos inteligentes",
      "Otimização de tarefas",
      "Integrações personalizadas",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#070B16] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-32 lg:pt-44">
          {/* Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-16 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[150px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-100px] top-52 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                Serviços
              </span>

              <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Soluções criativas para
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  fortalecer sua empresa.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
                Design, tecnologia e estratégia reunidos para criar marcas,
                sites e experiências digitais profissionais, modernas e
                alinhadas aos objetivos do seu negócio.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Solicitar orçamento

                  <ArrowRight
                    size={18}
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

        {/* Serviços */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-120px] top-1/3 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-7 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.06] sm:p-8 lg:p-10"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                          <Icon
                            size={30}
                            className="text-orange-500"
                            aria-hidden="true"
                          />
                        </div>

                        <span className="text-sm font-black tracking-[0.2em] text-white/10">
                          {service.number}
                        </span>
                      </div>

                      <h2 className="mt-7 text-2xl font-black sm:text-3xl">
                        {service.title}
                      </h2>

                      <p className="mt-4 max-w-2xl leading-7 text-gray-400 sm:text-lg sm:leading-8">
                        {service.description}
                      </p>

                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                          >
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                              <Check
                                size={13}
                                className="text-orange-400"
                                aria-hidden="true"
                              />
                            </span>

                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contato"
                        className="group/link mt-8 inline-flex items-center gap-2 font-semibold text-orange-400 transition-colors hover:text-orange-300"
                      >
                        Quero este serviço

                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Nosso processo
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Do primeiro contato até a
                <span className="block text-orange-500">
                  entrega do projeto.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Briefing",
                  text: "Entendemos sua empresa, objetivos, público e necessidades.",
                },
                {
                  number: "02",
                  title: "Estratégia",
                  text: "Definimos a melhor direção criativa e digital para o projeto.",
                },
                {
                  number: "03",
                  title: "Criação",
                  text: "Transformamos estratégia em design, interface e experiência.",
                },
                {
                  number: "04",
                  title: "Entrega",
                  text: "Finalizamos, revisamos e entregamos tudo preparado para uso.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-[#070B16] p-6"
                >
                  <span className="text-sm font-black text-orange-500">
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

        {/* CTA final */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[150px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Vamos começar?
              </span>

              <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Sua empresa merece uma presença
                <span className="block text-orange-500">
                  profissional e estratégica.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:text-lg">
                Conte sobre sua ideia e vamos encontrar a solução ideal para
                transformar seu projeto em realidade.
              </p>

              <Link
                href="/contato"
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Solicitar orçamento

                <ArrowRight
                  size={18}
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