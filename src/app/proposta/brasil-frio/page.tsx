import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileSearch,
  Globe2,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Proposta Comercial | VS Design Studio",
  description:
    "Proposta comercial personalizada para posicionamento, identidade visual e desenvolvimento de site institucional.",
  robots: {
    index: false,
    follow: false,
  },
};

const whatsappNumber = "5537998447369";
const instagramUrl = "https://instagram.com/vsdesignstudio_";

const whatsappMessage =
  "Olá, Vítor! Analisei a proposta para o projeto de posicionamento, identidade e site da nova empresa e gostaria de conversar sobre o início do projeto.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const proposal = {
  client: "Projeto Confidencial • Nova empresa de climatização B2B",
  project: "Posicionamento + Marca + Site Institucional",
  date: "28 de agosto de 2026",

  referenceValue: "R$ 6.770",
  packagePrice: "R$ 5.990",

  firstPayment: "R$ 2.396",
  secondPayment: "R$ 1.797",
  thirdPayment: "R$ 1.797",

  items: [
    {
      name: "Estratégia + Naming",
      value: "R$ 1.490",
    },
    {
      name: "Identidade Visual",
      value: "R$ 1.790",
    },
    {
      name: "Site Institucional",
      value: "R$ 3.490",
    },
  ],
};

const summaryItems = [
  {
    icon: Target,
    title: "Posicionamento B2B",
    text: "Construção de uma presença profissional para uma empresa voltada ao atendimento de outras empresas.",
  },
  {
    icon: Wrench,
    title: "Operação completa",
    text: "PMOC, instalação, manutenção, gerenciamento, venda e locação apresentados com clareza.",
  },
  {
    icon: Rocket,
    title: "Marca desde o início",
    text: "Nome, identidade e presença digital desenvolvidos de forma integrada para crescer com consistência.",
  },
];

const deliverables = [
  {
    icon: SearchCheck,
    title: "Estratégia + Naming",
    description:
      "Estruturação da base estratégica da marca e desenvolvimento/refinamento do nome para criar uma percepção forte e profissional desde o início.",
    items: [
      "Briefing e direcionamento estratégico",
      "Definição do posicionamento inicial",
      "Estudo de percepção e território da marca",
      "Desenvolvimento e refinamento de naming",
      "Seleção e apresentação de nomes finalistas",
      "Conceito e justificativa das opções",
      "Análise preliminar de domínio e disponibilidade de marca",
      "Até 2 rodadas de refinamento do naming",
    ],
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description:
      "Criação de uma identidade corporativa consistente, preparada para funcionar no digital, materiais comerciais, uniformes, veículos e demais aplicações.",
    items: [
      "Conceito visual da marca",
      "Logotipo principal",
      "Variações horizontal e vertical",
      "Versões positiva e negativa",
      "Paleta de cores",
      "Sistema tipográfico",
      "Elementos gráficos de apoio",
      "Aplicações e mockups de apresentação",
      "Manual básico da identidade",
      "Arquivos finais para digital e impressão",
      "Até 2 rodadas de ajustes na proposta visual escolhida",
    ],
  },
  {
    icon: Globe2,
    title: "Site Institucional",
    description:
      "Desenvolvimento de um site completo para apresentar a empresa, seus serviços e facilitar a geração de contatos e solicitações de orçamento.",
    items: [
      "Página inicial estratégica",
      "Apresentação da empresa",
      "Área completa de serviços",
      "Página/seção dedicada a PMOC",
      "Instalação e manutenção",
      "Gerenciamento de equipamentos",
      "Venda e locação de equipamentos",
      "Contato e solicitação de orçamento",
      "Integração com WhatsApp",
      "Formulário de contato",
      "Responsivo para celular, tablet e computador",
      "SEO técnico inicial",
      "Integração com redes sociais",
      "Configuração e publicação",
      "Estrutura de até 8 páginas/seções principais",
      "Até 2 rodadas de ajustes antes da publicação",
      "30 dias de suporte técnico pós-publicação",
    ],
  },
];

const siteStructure = [
  "Home",
  "Empresa",
  "Serviços",
  "PMOC",
  "Instalação e Manutenção",
  "Gerenciamento",
  "Venda e Locação",
  "Contato / Orçamento",
];

const steps = [
  {
    number: "01",
    title: "Briefing e posicionamento",
    text: "Entendemos objetivos, público B2B, diferenciais, serviços, mercado e direção desejada para construir a estratégia inicial.",
  },
  {
    number: "02",
    title: "Naming e direção da marca",
    text: "Desenvolvemos e refinamos as melhores possibilidades de nome, avaliando força comercial, percepção e potencial de aplicação.",
  },
  {
    number: "03",
    title: "Identidade Visual",
    text: "Transformamos a estratégia aprovada em um sistema visual profissional, consistente e preparado para diferentes pontos de contato.",
  },
  {
    number: "04",
    title: "Site e lançamento",
    text: "Desenvolvemos, revisamos e publicamos o site institucional com toda a comunicação alinhada à nova marca.",
  },
];

const results = [
  {
    title: "Mais credibilidade",
    text: "Uma apresentação corporativa preparada para negociações e contratos B2B.",
  },
  {
    title: "Marca consistente",
    text: "Nome, identidade e site falando a mesma linguagem desde o início.",
  },
  {
    title: "Serviços bem apresentados",
    text: "PMOC, manutenção, gestão, venda e locação organizados com clareza.",
  },
  {
    title: "Base pronta para crescer",
    text: "Estrutura preparada para uma futura etapa de marketing e aquisição de clientes.",
  },
];

const faqs = [
  {
    q: "O marketing mensal está incluso neste projeto?",
    a: "Não. Esta proposta contempla a etapa inicial de posicionamento, naming, identidade visual e site institucional. Após o lançamento da marca, a continuidade mensal de marketing poderá ser estruturada em uma segunda proposta, conforme os objetivos e necessidades da empresa.",
  },
  {
    q: "A análise do nome garante o registro da marca no INPI?",
    a: "Não. A etapa de naming inclui uma análise preliminar para reduzir riscos e apoiar a escolha, mas a disponibilidade definitiva e o deferimento do registro dependem de análise formal do INPI. Caso necessário, o processo jurídico ou especializado de registro é contratado separadamente.",
  },
  {
    q: "Domínio e hospedagem estão inclusos?",
    a: "O desenvolvimento e a configuração técnica inicial do site estão inclusos. Custos de domínio, hospedagem e eventuais serviços de terceiros são pagos pelo cliente e serão informados previamente antes de qualquer contratação.",
  },
  {
    q: "O site será da empresa?",
    a: "Sim. Após a conclusão e quitação do projeto, os arquivos e materiais desenvolvidos conforme o escopo aprovado são entregues ao cliente. Serviços externos, como domínio e hospedagem, permanecem vinculados às respectivas contas contratadas.",
  },
  {
    q: "É possível ampliar o site depois?",
    a: "Sim. O projeto será construído pensando em evolução. Novas páginas, áreas, integrações e funcionalidades podem ser desenvolvidas posteriormente mediante novo orçamento.",
  },
  {
    q: "Como funcionam as aprovações?",
    a: "O projeto é dividido em etapas. Naming, identidade e site possuem até 2 rodadas de ajustes dentro do escopo aprovado. Alterações extras, mudanças de direção após aprovação ou solicitações fora do briefing poderão ser orçadas separadamente.",
  },
];


function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

export default function ProposalPage() {
  return (
    <main
      id="inicio"
      className="min-h-screen overflow-hidden bg-[#0b0b11] text-white selection:bg-orange-500/30"
    >
      {/* Fundos decorativos */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Header próprio da proposta:
          os links ficam dentro da proposta, sem mandar o cliente para a Home do site. */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0b11]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="shrink-0" aria-label="Voltar ao início da proposta">
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
            rel="noopener noreferrer"
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

      {/* Hero */}
      <section id="resumo" className="relative scroll-mt-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <SectionLabel>Proposta comercial personalizada</SectionLabel>

            <p className="mb-3 text-sm font-medium text-white/50">
              {proposal.client} • {proposal.date}
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Uma empresa nova precisa nascer com{" "}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                presença de empresa grande
              </span>
              .
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Esta proposta foi estruturada para construir a base da nova operação
              de climatização e refrigeração de forma integrada: posicionamento,
              nome, identidade visual e site institucional preparados para o
              mercado B2B.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#investimento"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ff6a00] px-6 py-4 font-bold text-white shadow-2xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
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
                <Check className="h-4 w-4 text-orange-400" />
                Posicionamento B2B
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-orange-400" />
                Identidade completa
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-orange-400" />
                Site responsivo
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
                  { label: "Posicionamento + Naming", icon: Target },
                  { label: "Identidade Visual", icon: Palette },
                  { label: "Site Institucional", icon: MonitorSmartphone },
                  { label: "Base para crescimento", icon: BriefcaseBusiness },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/10 p-4"
                  >
                    <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-white/85">{label}</span>
                    <BadgeCheck className="ml-auto h-5 w-5 text-emerald-400" />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4">
                <p className="text-sm leading-6 text-orange-100/80">
                  O objetivo não é criar peças isoladas. É fazer nome, identidade
                  e site nascerem da mesma estratégia para transmitir confiança,
                  estrutura e profissionalismo desde o primeiro contato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entendimento */}
      <section className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <SectionLabel>Entendimento do projeto</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                O objetivo é ir além de “ter uma logo e um site”.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                A nova empresa precisa entrar no mercado preparada para conversar
                com clientes corporativos, apresentar um portfólio amplo de
                serviços e sustentar uma percepção de confiança.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {summaryItems.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#111118] p-6"
                >
                  <Icon className="mb-5 h-7 w-7 text-orange-400" />
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="scroll-mt-28">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Solução recomendada</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Uma base completa para posicionar e lançar a nova empresa.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/55">
              Três frentes construídas em sequência para que cada decisão da marca
              fortaleça a próxima etapa.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {deliverables.map(({ icon: Icon, title, description, items }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-7"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-extrabold">{title}</h3>

                <p className="mt-3 min-h-[96px] text-sm leading-6 text-white/55">
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

      {/* Estrutura do site */}
      <section className="border-y border-white/8 bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <SectionLabel>Site institucional</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Um site pensado para o processo comercial B2B.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                A estrutura será organizada para explicar a operação, demonstrar
                capacidade técnica e conduzir potenciais clientes para um contato
                comercial ou solicitação de orçamento. O escopo contempla até 8
                páginas ou seções principais, definidas na arquitetura aprovada.
              </p>

              <div className="mt-7 rounded-3xl border border-blue-500/15 bg-blue-500/10 p-5">
                <div className="flex gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <p className="text-sm leading-6 text-blue-100/80">
                    A arquitetura final das páginas pode ser refinada durante o
                    briefing conforme prioridade comercial, volume de conteúdo e
                    estratégia de apresentação dos serviços.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteStructure.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-sm font-black text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="font-bold text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="scroll-mt-28">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Processo</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Como vamos tirar a nova marca do papel.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {steps.map((step) => (
              <article
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
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <Clock3 className="mt-1 h-6 w-6 shrink-0 text-blue-400" />
              <div>
                <p className="font-bold">Prazo estimado</p>
                <p className="mt-1 text-sm leading-6 text-white/50">
                  De 30 a 45 dias úteis, contados após o pagamento inicial e
                  recebimento do briefing e materiais necessários. O prazo pode
                  variar conforme o tempo de aprovação entre as etapas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-orange-400" />
              <div>
                <p className="font-bold">Projeto acompanhado</p>
                <p className="mt-1 text-sm leading-6 text-white/50">
                  Naming, identidade e site são apresentados em etapas. Cada
                  frente contempla até 2 rodadas de ajustes dentro do escopo
                  aprovado antes do avanço para a próxima fase.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-start gap-4">
                <BriefcaseBusiness className="mt-1 h-6 w-6 shrink-0 text-blue-400" />
                <div>
                  <p className="font-bold">Materiais fornecidos pelo cliente</p>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Informações técnicas, dados empresariais, lista de serviços,
                    diferenciais, contatos, fotos próprias e demais conteúdos
                    específicos da operação deverão ser enviados pelo cliente.
                    A VS Design Studio realizará a organização, adaptação e
                    apresentação estratégica desses materiais dentro do projeto.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-orange-400" />
                <div>
                  <p className="font-bold">Suporte pós-publicação</p>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    O site inclui 30 dias de suporte técnico após a publicação
                    para correção de eventuais problemas relacionados ao
                    desenvolvimento entregue. Novas funcionalidades, conteúdos
                    ou alterações de escopo não fazem parte desse suporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section
        id="investimento"
        className="scroll-mt-28 border-y border-white/8 bg-gradient-to-b from-[#0c1829] to-[#07111f]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Investimento</SectionLabel>

            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Um projeto completo, pensado como uma única construção de marca.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/55">
              Contratando as três etapas em conjunto, o projeto recebe uma
              condição especial em relação aos serviços contratados separadamente.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/[0.08] p-7 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                        Projeto completo recomendado
                      </p>
                      <h3 className="mt-3 text-2xl font-black">
                        Estratégia + Naming + Identidade + Site
                      </h3>
                    </div>

                    <CircleDollarSign className="h-7 w-7 shrink-0 text-blue-300" />
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-white/45">
                      Valor dos serviços separadamente
                    </p>
                    <p className="mt-1 text-xl font-bold text-white/50 line-through decoration-white/30">
                      {proposal.referenceValue}
                    </p>

                    <p className="mt-6 text-sm text-white/45">
                      Condição para o projeto completo
                    </p>
                    <p className="mt-1 text-4xl font-black tracking-tight sm:text-5xl">
                      {proposal.packagePrice}
                    </p>

                    <p className="mt-3 text-sm font-semibold leading-6 text-blue-200/80">
                      Pagamento dividido por etapas: 40% + 30% + 30%
                    </p>
                  </div>

                  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    {[
                      "Posicionamento e desenvolvimento/refinamento do naming",
                      "Identidade Visual completa",
                      "Site institucional responsivo",
                      "SEO técnico inicial e integrações de contato",
                      "Configuração e publicação do projeto digital",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/10 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                    Composição de referência
                  </p>

                  <div className="mt-5 space-y-4">
                    {proposal.items.map((item) => (
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
                      Condição especial de R$ 780 para contratação integrada
                      das três etapas, mantendo estratégia, marca e site
                      desenvolvidos como uma única construção.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagamentos */}
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                  01 • Aprovação / início
                </p>
                <p className="mt-2 text-xl font-black">{proposal.firstPayment}</p>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  40% para reserva e início do projeto.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                  02 • Aprovação da identidade
                </p>
                <p className="mt-2 text-xl font-black">{proposal.secondPayment}</p>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  30% após aprovação da etapa de identidade visual.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                  03 • Antes da publicação
                </p>
                <p className="mt-2 text-xl font-black">{proposal.thirdPayment}</p>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  30% antes da publicação definitiva do site.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.025] p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                    Validade da proposta
                  </p>
                  <p className="mt-2 font-bold">7 dias corridos</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                    Marketing mensal
                  </p>
                  <p className="mt-2 font-bold">Segunda etapa, não inclusa</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                    Custos externos
                  </p>
                  <p className="mt-2 font-bold">
                    Domínio, hospedagem e terceiros à parte
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-amber-400/20 bg-amber-400/[0.06] p-5">
              <div className="flex gap-3">
                <FileSearch className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <p className="text-sm leading-6 text-amber-100/75">
                  <strong className="text-amber-200">Importante:</strong> eventuais
                  taxas de registro de marca, assessoria especializada de INPI,
                  domínio, hospedagem, ferramentas, licenças, bancos de imagem ou
                  outros serviços de terceiros não estão inclusos e serão
                  apresentados previamente caso sejam necessários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultado */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Resultado esperado</SectionLabel>

              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Uma marca preparada para transmitir confiança antes mesmo da
                primeira reunião comercial.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/55">
                O projeto cria uma base de posicionamento e presença profissional.
                Não há promessa de vendas automáticas: o objetivo é elevar a
                percepção da empresa, organizar sua comunicação e preparar os
                canais que apoiarão o crescimento comercial.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {results.map(({ title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <BadgeCheck className="mb-4 h-6 w-6 text-orange-400" />
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continuidade futura */}
      <section className="border-y border-white/8 bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.10] via-white/[0.03] to-blue-500/[0.08] p-7 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
              <div>
                <SectionLabel>Próxima etapa</SectionLabel>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Depois do lançamento, podemos colocar a marca em movimento.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Após concluir a estrutura inicial, podemos desenhar uma segunda
                  etapa de marketing contínuo com conteúdo, campanhas, social
                  media e tráfego, de acordo com a estratégia comercial e o
                  momento da empresa.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/10 p-6">
                <Layers3 className="mb-5 h-7 w-7 text-blue-300" />
                <p className="font-black">Não incluso no investimento atual</p>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  A continuidade mensal será definida somente depois da primeira
                  etapa, com escopo e investimento próprios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="scroll-mt-28 border-b border-white/8 bg-white/[0.025]">
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

      {/* Aceite comercial */}
      <section className="border-b border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm leading-6 text-white/55">
              A aprovação desta proposta confirma o escopo comercial apresentado.
              O início do projeto ocorre após o pagamento da primeira etapa e o
              preenchimento do briefing. Solicitações fora do escopo, mudanças
              relevantes após aprovações ou entregas adicionais poderão receber
              orçamento complementar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-[#101017] to-orange-500/10 px-6 py-14 text-center sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.10),transparent_35%)]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Rocket className="h-7 w-7 text-orange-300" />
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Vamos construir essa marca desde o início?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
                Com a aprovação da proposta, iniciamos pelo briefing e
                posicionamento para desenvolver uma base sólida, consistente e
                preparada para o mercado B2B.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
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

      {/* Footer semelhante ao site principal */}
      <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090f]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-[-120px] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] sm:right-0 sm:h-80 sm:w-80"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Voltar ao início da proposta"
                className="inline-flex items-center text-4xl font-black tracking-[-0.04em] text-white"
              >
                VS<span className="text-orange-500">.</span>
              </a>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                Criatividade, tecnologia e estratégia para transformar marcas e
                construir experiências digitais modernas e profissionais.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o Instagram da VS Design Studio"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @vsdesignstudio_
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar pelo WhatsApp sobre esta proposta"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                Nesta proposta
              </h2>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">
                <a href="#resumo" className="transition hover:text-orange-400">
                  Resumo
                </a>
                <a href="#solucao" className="transition hover:text-orange-400">
                  Solução
                </a>
                <a href="#processo" className="transition hover:text-orange-400">
                  Processo
                </a>
                <a
                  href="#investimento"
                  className="transition hover:text-orange-400"
                >
                  Investimento
                </a>
                <a href="#duvidas" className="transition hover:text-orange-400">
                  Dúvidas
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                VS Design Studio
              </h2>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">
                <a
                  href="https://vsdesignstudio.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-orange-400"
                >
                  Conhecer o site
                </a>
                <a
                  href="https://vsdesignstudio.com.br/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-orange-400"
                >
                  Ver portfólio
                </a>
                <a
                  href="https://vsdesignstudio.com.br/servicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-orange-400"
                >
                  Serviços
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.05] pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VS Design Studio. Todos os direitos reservados.</p>
            <p>Design estratégico • Sites • Identidade Visual • Social Media</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
