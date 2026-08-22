"use client";

import type { FormEvent } from "react";

import { getWhatsappUrl, siteConfig } from "@/config/site";

const services = [
  "Criação de site",
  "Landing page",
  "Identidade visual",
  "UI/UX Design",
  "Social Media",
  "Soluções com IA",
  "Materiais gráficos",
  "Outro serviço",
];

export default function Contact() {
  const whatsappContactUrl = getWhatsappUrl("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();

    const whatsappMessage = `Olá, Vítor! Conheci a VS Design Studio pelo site e gostaria de solicitar um orçamento.

*Nome:* ${name}
*E-mail:* ${email}
*Empresa:* ${company || "Não informado"}
*Serviço de interesse:* ${service}

*Sobre o projeto:*
${message}`;

    const whatsappUrl = getWhatsappUrl(whatsappMessage);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#070B16] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Glow laranja */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] sm:right-0 sm:h-96 sm:w-96"
      />

      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-120px] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] sm:left-0"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-400 sm:px-5 sm:text-sm">
            Entre em contato
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
            Vamos transformar sua ideia em um
            <span className="block text-orange-500">
              projeto profissional.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Solicite um orçamento para criação de sites, landing pages,
            identidade visual, social media, UI/UX Design, materiais gráficos
            e soluções digitais com inteligência artificial.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Atendimento em Bom Despacho, Minas Gerais, e projetos realizados
            online para empresas de todo o Brasil.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          {/* Informações */}
          <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/15 blur-[90px]"
            />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                VS Design Studio
              </p>

              <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                Conte um pouco sobre o seu projeto
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                Envie as principais informações sobre o que sua empresa
                precisa. Quanto mais detalhes você compartilhar, melhor será
                nossa primeira análise do projeto.
              </p>

              <div className="mt-8 space-y-4">
                {/* WhatsApp */}
                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Entrar em contato com a VS Design Studio pelo WhatsApp"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-lg text-green-400"
                  >
                    ☎
                  </span>

                  <span>
                    <strong className="block text-white">
                      WhatsApp
                    </strong>

                    <span className="mt-1 block text-sm text-gray-400">
                      (37) 99844-7369
                    </span>
                  </span>
                </a>

                {/* E-mail */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Enviar e-mail para a VS Design Studio"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-lg text-orange-400"
                  >
                    ✉
                  </span>

                  <span className="min-w-0">
                    <strong className="block text-white">
                      E-mail
                    </strong>

                    <span className="mt-1 block break-all text-sm text-gray-400">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>

                {/* Localização / atendimento */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"
                  >
                    ●
                  </span>

                  <span>
                    <strong className="block text-white">
                      Atendimento
                    </strong>

                    <span className="mt-1 block text-sm leading-6 text-gray-400">
                      {siteConfig.location.label}, com atendimento online para
                      empresas de todo o Brasil.
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-gray-300">
                  O preenchimento deste formulário não gera cobrança ou
                  compromisso. Ele serve apenas para iniciar nossa conversa e
                  entender melhor o projeto.
                </p>
              </div>
            </div>
          </aside>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Seu nome
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Como podemos chamar você?"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#070B16]/70 px-4 text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500/60 focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Seu e-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#070B16]/70 px-4 text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500/60 focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Empresa
                  <span className="ml-1 font-normal text-gray-300">
                    (opcional)
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nome da sua empresa"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#070B16]/70 px-4 text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500/60 focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              {/* Serviço */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Serviço de interesse
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#070B16] px-4 text-white outline-none transition-all duration-300 focus:border-orange-500/60 focus:ring-4 focus:ring-orange-500/10"
                >
                  <option value="" disabled>
                    Selecione um serviço
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mensagem */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-200"
              >
                Fale sobre o projeto
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Conte o que você precisa, seus objetivos, prazo estimado e outras informações importantes..."
                className="w-full resize-y rounded-xl border border-white/10 bg-[#070B16]/70 px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500/60 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            {/* Enviar */}
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/30"
            >
              Solicitar orçamento pelo WhatsApp

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-400">
              Ao clicar, o WhatsApp será aberto com as informações preenchidas.
              Você poderá revisar a mensagem antes de enviá-la.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}