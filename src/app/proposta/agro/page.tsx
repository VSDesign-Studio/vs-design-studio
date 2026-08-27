import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Globe2,
  Share2,
  Layers3,
  MapPinned,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PackageSearch,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";


export const metadata: Metadata = {
  title: "Proposta Comercial | VS Design Studio",
  description:
    "Proposta comercial personalizada para construção de presença digital completa no agronegócio.",
  robots: {
    index: false,
    follow: false,
  },
};

const whatsappNumber = "5537998447369";
const whatsappMessage =
  "Olá, Vítor! Analisei a proposta para o projeto de Representações Agro e gostaria de conversar sobre o início do projeto.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const proposal = {
  client: "Representações Agro • Goiás",
  project: "Presença Digital Completa",
  date: "Agosto de 2026",

  setupReferenceValue: "R$ 4.170",
  setupPrice: "R$ 3.490",
  setupInstallment: "2x de R$ 1.745",

  monthlyPrice: "R$ 1.290/mês",
  adBudget: "a partir de R$ 600/mês",

  setupItems: [
    {
      name: "Identidade visual",
      value: "R$ 1.190",
    },
    {
      name: "Site catálogo profissional",
      value: "R$ 2.490",
    },
    {
      name: "Estruturação inicial das redes",
      value: "R$ 490",
    },
  ],
};

const setupDeliverables = [
  {
    icon: Palette,
    title: "Identidade visual",
    description:
      "Criação da base visual da marca para começar do zero com aparência profissional, coerente e preparada para crescer.",
    items: [
      "Logotipo principal",
      "Variações de aplicação",
      "Paleta de cores",
      "Tipografia",
      "Direção visual da marca",
      "Arquivos finais para uso digital",
    ],
  },
  {
    icon: Globe2,
    title: "Site catálogo profissional",
    description:
      "Um site responsivo para apresentar suas representações, produtos, atuação e facilitar o contato com produtores.",
    items: [
      "Página inicial estratégica",
      "Apresentação profissional",
      "Catálogo com até 10 produtos/representações",
      "Área de atuação: todo o estado de Goiás",
      "Botões de contato e WhatsApp",
      "Formulário de contato",
      "Layout responsivo para celular, tablet e computador",
      "SEO técnico inicial",
      "Integração com redes sociais",
    ],
  },
  {
    icon: Share2,
    title: "Estruturação das redes",
    description:
      "Criação da presença inicial da marca nas redes sociais com posicionamento visual alinhado ao site.",
    items: [
      "Estrutura visual do perfil",
      "Bio estratégica",
      "Foto de perfil",
      "Capas e destaques",
      "Direção de conteúdo",
      "Padronização visual inicial",
    ],
  },
];

const monthlyDeliverables = [
  {
    icon: Layers3,
    title: "Social Media",
    description:
      "Planejamento e criação de conteúdo para fortalecer autoridade, apresentar produtos e gerar oportunidades comerciais.",
    items: [
      "Planejamento mensal",
      "8 publicações por mês",
      "Artes personalizadas",
      "Legendas estratégicas",
      "Calendário de conteúdo",
      "Direção de comunicação",
    ],
  },
  {
    icon: Target,
    title: "Gestão de Tráfego Pago",
    description:
      "Campanhas segmentadas para alcançar produtores e potenciais clientes em todo o estado de Goiás.",
    items: [
      "Estratégia de campanhas",
      "Configuração do gerenciador",
      "Criação e organização dos anúncios",
      "Segmentação geográfica",
      "Acompanhamento de desempenho",
      "Otimizações periódicas",
      "Relatório mensal",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Briefing e direcionamento",
    text: "Alinhamos posicionamento, público, representações, diferenciais e objetivos comerciais.",
  },
  {
    number: "02",
    title: "Identidade e base da marca",
    text: "Criamos a direção visual que será usada no site, redes sociais e materiais digitais.",
  },
  {
    number: "03",
    title: "Desenvolvimento do site",
    text: "Estruturamos o catálogo, conteúdo, experiência de navegação e pontos de conversão.",
  },
  {
    number: "04",
    title: "Redes e campanhas",
    text: "Organizamos os canais sociais e preparamos a estrutura para iniciar a geração de alcance e oportunidades.",
  },
];

const faqs = [
  {
    q: "O investimento em anúncios está incluso na mensalidade?",
    a: "Não. A mensalidade cobre a gestão profissional das campanhas. A verba de mídia é paga diretamente pelo cliente às plataformas de anúncio e pode ser ajustada conforme a estratégia.",
  },
  {
    q: "Posso começar somente com a implantação?",
    a: "Sim. A implantação pode ser contratada primeiro. A gestão mensal de redes sociais e tráfego é a etapa recomendada para manter o projeto ativo e gerar crescimento contínuo.",
  },
  {
    q: "O site será meu?",
    a: "Sim. Após a conclusão e quitação do projeto, o site e os materiais desenvolvidos para a marca são entregues conforme o escopo aprovado.",
  },
  {
    q: "É possível adicionar novos produtos depois?",
    a: "Sim. O projeto será estruturado pensando em expansão. Novas páginas, representações e funcionalidades podem ser adicionadas posteriormente mediante novo orçamento.",
  },
  {
    q: "Domínio e hospedagem estão inclusos?",
    a: "O desenvolvimento e a configuração técnica inicial estão inclusos. Custos de domínio, hospedagem e serviços de terceiros, quando necessários, são contratados à parte e previamente apresentados ao cliente.",
  },
  {
    q: "A gestão mensal inclui atendimento de Direct ou WhatsApp?",
    a: "Não. A gestão mensal contempla planejamento, criação de conteúdo e gestão de tráfego. Atendimento comercial, respostas em Direct/WhatsApp, produção presencial, fotografia e filmagem não estão inclusos.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

export default function ProposalPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#0b0b11] text-white selection:bg-orange-500/30">

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0b11]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
            <a href="#resumo" className="shrink-0">
              <div className="text-lg font-black tracking-tight text-white">
                VS <span className="text-[#ff6a00]">DESIGN</span> STUDIO
              </div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                Proposta personalizada
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm font-semibold text-white/65 lg:flex">
              <a href="#resumo" className="transition hover:text-white">
                Resumo
              </a>
              <a href="#solucao" className="transition hover:text-white">
                Solução
              </a>
              <a href="#processo" className="transition hover:text-white">
                Processo
              </a>
              <a href="#investimento" className="transition hover:text-white">
                Investimento
              </a>
              <a href="#duvidas" className="transition hover:text-white">
                Dúvidas
              </a>
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6a00] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(255,106,0,0.20)] transition hover:-translate-y-0.5 hover:bg-[#ff7a1a]"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Quero iniciar</span>
              <span className="sm:hidden">Iniciar</span>
            </a>
          </div>

          <div className="border-t border-white/[0.05] lg:hidden">
            <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 text-xs font-semibold text-white/60 sm:px-6">
              <a href="#resumo" className="whitespace-nowrap transition hover:text-white">
                Resumo
              </a>
              <a href="#solucao" className="whitespace-nowrap transition hover:text-white">
                Solução
              </a>
              <a href="#processo" className="whitespace-nowrap transition hover:text-white">
                Processo
              </a>
              <a href="#investimento" className="whitespace-nowrap transition hover:text-white">
                Investimento
              </a>
              <a href="#duvidas" className="whitespace-nowrap transition hover:text-white">
                Dúvidas
              </a>
            </div>
          </div>
        </header>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-orange-500/15 blur-3xl" />
      </div>

      <section id="resumo" className="relative scroll-mt-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <SectionLabel>Proposta comercial personalizada</SectionLabel>

            <p className="mb-3 text-sm font-medium text-white/50">
              {proposal.client} • {proposal.date}
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Construir uma presença digital{" "}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                profissional do zero
              </span>
              .
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Um projeto pensado para transformar suas representações em uma
              marca digital organizada, confiável e preparada para alcançar
              produtores em todo o estado de Goiás.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#investimento"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white shadow-2xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Ver investimento
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#solucao"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-white/85 transition hover:bg-white/10"
              >
                Conhecer a solução
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-orange-400" /> Site responsivo
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-orange-400" /> Até 10 produtos
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-orange-400" /> Goiás inteiro
              </span>
            </div>
          </div>

          <div className="relative lg:pt-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Projeto
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold">
                    {proposal.project}
                  </h2>
                </div>
                <div className="rounded-2xl bg-orange-500/15 p-3 text-orange-300">
                  <Rocket className="h-6 w-6" />
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  ["Identidade visual", Palette],
                  ["Site catálogo", MonitorSmartphone],
                  ["Redes sociais", Share2],
                  ["Tráfego pago", BarChart3],
                ].map(([label, Icon]) => (
                  <div
                    key={label as string}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/10 p-4"
                  >
                    <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-white/85">
                      {label as string}
                    </span>
                    <BadgeCheck className="ml-auto h-5 w-5 text-emerald-400" />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4">
                <p className="text-sm leading-6 text-orange-100/80">
                  A proposta foi estruturada para criar a base da marca e,
                  depois, manter um trabalho contínuo de presença digital e
                  geração de oportunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>Entendimento do projeto</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                O objetivo é ir além de “ter um site”.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#111118] p-6">
                <PackageSearch className="mb-5 h-7 w-7 text-orange-400" />
                <p className="text-3xl font-black">~10</p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  produtos e representações para organizar em um catálogo
                  profissional.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#111118] p-6">
                <MapPinned className="mb-5 h-7 w-7 text-blue-400" />
                <p className="text-3xl font-black">Goiás</p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  atuação estadual, permitindo campanhas segmentadas por região
                  e perfil de produtor.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#111118] p-6">
                <Rocket className="mb-5 h-7 w-7 text-orange-400" />
                <p className="text-3xl font-black">Do zero</p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  marca, site e redes construídos de forma integrada desde o
                  início.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucao" className="scroll-mt-28">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Solução recomendada</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Uma estrutura completa para apresentar, posicionar e vender.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/55">
              O projeto será dividido entre uma implantação inicial e uma
              estratégia mensal de crescimento.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {setupDeliverables.map(({ icon: Icon, title, description, items }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-7"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/55">
                  {description}
                </p>

                <div className="mt-6 space-y-3 border-t border-white/8 pt-6">
                  {items.map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-white/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <SectionLabel>Continuidade mensal</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Depois de construir, precisamos colocar a marca em movimento.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                O site cria a estrutura. Conteúdo e tráfego criam frequência,
                alcance e novas oportunidades de contato.
              </p>

              <div className="mt-7 rounded-3xl border border-blue-500/15 bg-blue-500/10 p-5">
                <div className="flex gap-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <p className="text-sm leading-6 text-blue-100/80">
                    O foco das campanhas será alcançar produtores e potenciais
                    compradores dentro do estado de Goiás, direcionando o
                    interesse para o site e para o contato comercial.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {monthlyDeliverables.map(
                ({ icon: Icon, title, description, items }) => (
                  <article
                    key={title}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-orange-500/10 p-3 text-orange-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-extrabold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {items.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 text-sm text-white/75"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                )
              )}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-amber-400/20 bg-amber-400/[0.06] p-5">
            <p className="text-sm leading-6 text-amber-100/75">
              <strong className="text-amber-200">Importante:</strong> a gestão
              mensal não inclui atendimento comercial por Direct ou WhatsApp,
              produção presencial, fotografia, filmagem ou verba de anúncios.
            </p>
          </div>
        </div>
      </section>

      <section id="processo" className="scroll-mt-28">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Processo</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Como vamos tirar o projeto do papel.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="absolute right-4 top-2 text-6xl font-black text-white/[0.035]">
                  {step.number}
                </div>
                <p className="text-sm font-bold text-orange-400">
                  ETAPA {step.number}
                </p>
                <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <Clock3 className="mt-1 h-6 w-6 text-blue-400" />
              <div>
                <p className="font-bold">Prazo estimado</p>
                <p className="mt-1 text-sm leading-6 text-white/50">
                  De 15 a 25 dias úteis para a implantação, contados após o
                  recebimento do briefing e materiais necessários.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <ShieldCheck className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <p className="font-bold">Projeto acompanhado</p>
                <p className="mt-1 text-sm leading-6 text-white/50">
                  O cliente acompanha as etapas e aprova os principais pontos
                  antes da publicação final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="investimento"
        className="scroll-mt-28 border-y border-white/8 bg-gradient-to-b from-[#101017] to-[#0b0b11]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Investimento</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Uma base profissional agora. Crescimento contínuo depois.
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/[0.08] p-7 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                        Implantação inicial
                      </p>
                      <h3 className="mt-3 text-2xl font-black">
                        Marca + Site + Redes
                      </h3>
                    </div>
                    <CircleDollarSign className="h-7 w-7 text-blue-300" />
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-white/45">
                      Valor dos serviços separadamente
                    </p>
                    <p className="mt-1 text-xl font-bold text-white/50 line-through decoration-white/30">
                      {proposal.setupReferenceValue}
                    </p>

                    <p className="mt-6 text-sm text-white/45">
                      Condição para implantação completa
                    </p>
                    <p className="mt-1 text-4xl font-black tracking-tight sm:text-5xl">
                      {proposal.setupPrice}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-blue-200/80">
                      ou {proposal.setupInstallment}
                    </p>
                  </div>

                  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    {[
                      "Identidade visual",
                      "Site catálogo com até 10 produtos/representações",
                      "Estrutura inicial das redes sociais",
                      "Responsividade e SEO inicial",
                      "Integrações de contato",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/10 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                    Composição do valor
                  </p>

                  <div className="mt-5 space-y-4">
                    {proposal.setupItems.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between gap-4 border-b border-white/8 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-white/65">{item.name}</span>
                        <span className="text-sm font-bold text-white/85">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06] p-4">
                    <p className="text-sm leading-6 text-emerald-100/75">
                      Contratando a implantação completa, o projeto recebe uma
                      condição especial de pacote.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-5 rounded-[2rem] border border-orange-400/25 bg-orange-500/[0.08] p-7 sm:p-9">
              <div className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-orange-400 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#17100b]">
                Continuidade recomendada
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-300">
                        Gestão mensal
                      </p>
                      <h3 className="mt-3 text-2xl font-black">
                        Conteúdo + Tráfego
                      </h3>
                    </div>
                    <Megaphone className="h-7 w-7 text-orange-300" />
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-white/45">Investimento mensal</p>
                    <p className="mt-1 text-4xl font-black tracking-tight sm:text-5xl">
                      {proposal.monthlyPrice}
                    </p>
                  </div>

                  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    {[
                      "8 publicações por mês",
                      "Planejamento e criação de conteúdo",
                      "Gestão profissional de tráfego pago",
                      "Otimizações de campanha",
                      "Relatório mensal de desempenho",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/10 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                    Verba de mídia
                  </p>
                  <p className="mt-4 text-3xl font-black">{proposal.adBudget}</p>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    Esse valor é pago diretamente pelo cliente às plataformas
                    de anúncio e não está incluso na mensalidade de gestão.
                  </p>

                  <div className="mt-6 rounded-2xl border border-orange-400/15 bg-orange-400/[0.06] p-4">
                    <p className="text-sm leading-6 text-orange-100/75">
                      A verba pode ser ajustada de acordo com os objetivos,
                      regiões prioritárias e desempenho das campanhas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                    Implantação
                  </p>
                  <p className="mt-2 font-bold">
                    R$ 3.490 à vista ou 2x de R$ 1.745
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                    Gestão mensal
                  </p>
                  <p className="mt-2 font-bold">Pagamento antecipado por ciclo</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                    Validade da proposta
                  </p>
                  <p className="mt-2 font-bold">7 dias corridos</p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                Custos externos
              </p>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Custos de domínio, hospedagem, ferramentas, bancos de imagem,
                plugins, plataformas e demais serviços de terceiros, quando
                necessários, não estão inclusos nos valores acima e serão
                informados previamente para aprovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Resultado esperado</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Uma presença digital que transmite confiança antes mesmo do
                primeiro contato.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/55">
                O projeto não promete vendas automáticas. Ele cria estrutura,
                posicionamento e canais de aquisição para aumentar a qualidade
                da presença digital e das oportunidades comerciais.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Mais profissionalismo", "Marca consistente em todos os canais."],
                ["Catálogo organizado", "Produtos fáceis de apresentar e consultar."],
                ["Maior alcance", "Campanhas focadas no público certo em Goiás."],
                ["Mais oportunidades", "Canais claros para contato e negociação."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <BadgeCheck className="mb-4 h-6 w-6 text-orange-400" />
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="scroll-mt-28 border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>Dúvidas frequentes</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Tudo claro antes de começar.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl border border-white/10 bg-[#0f0f16] p-6 open:bg-[#0c192b]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-orange-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-white/55">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-[#101017] to-orange-500/10 px-6 py-14 text-center sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.10),transparent_35%)]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Rocket className="h-7 w-7 text-orange-300" />
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Vamos construir essa presença digital?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
                Com a aprovação da proposta, iniciamos pelo briefing e
                planejamento para desenvolver toda a base digital do projeto.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 font-black text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                <MessageCircle className="h-5 w-5" />
                Quero iniciar o projeto
                <ArrowRight className="h-5 w-5" />
              </a>

              <p className="mt-5 text-xs text-white/35">
                Proposta comercial • VS Design Studio
              </p>
            </div>
          </div>
        </div>
      </section>

        <footer className="border-t border-white/[0.06] bg-[#09090f]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-lg font-black tracking-tight text-white">
                  VS <span className="text-[#ff6a00]">DESIGN</span> STUDIO
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                  Proposta comercial personalizada para construção de presença
                  digital completa.
                </p>
              </div>

              <div className="flex flex-col gap-3 text-sm text-white/45 md:items-end">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white/75 transition hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-[#ff7a1a]" />
                  Falar sobre esta proposta
                </a>
                <a
                  href="https://vsdesignstudio.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Conhecer o site da VS Design Studio
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.05] pt-6 text-xs text-white/25">
              © 2026 VS Design Studio. Todos os direitos reservados.
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
