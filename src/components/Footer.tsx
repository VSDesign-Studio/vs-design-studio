import Link from "next/link";

import BackToTopButton from "./BackToTopButton";
import Reveal from "./Reveal";
import { getWhatsappUrl, siteConfig } from "@/config/site";

export default function Footer() {
  const whatsappUrl = getWhatsappUrl(siteConfig.whatsapp.projectMessage);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050812] text-white">
      {/* Glows decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] sm:left-0 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-120px] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] sm:right-0 sm:h-80 sm:w-80"
      />

      <Reveal>
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
            {/* Marca */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                aria-label="Ir para a página inicial"
                className="inline-flex items-center text-4xl font-black tracking-[-0.04em] text-white"
              >
                VS
                <span className="text-orange-500">.</span>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                Estúdio de design e soluções digitais especializado em criação
                de sites profissionais, identidade visual, branding, UI/UX,
                social media e inteligência artificial.
              </p>

              <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
                Atendimento em Bom Despacho, Minas Gerais, e projetos online
                para empresas de todo o Brasil.
              </p>

              {/* Redes */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o Instagram da VS Design Studio"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white"
                >
                  Instagram

                  <span
                    aria-hidden="true"
                    className="ml-2"
                  >
                    ↗
                  </span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar com a VS Design Studio pelo WhatsApp"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:bg-green-500/10 hover:text-white"
                >
                  WhatsApp

                  <span
                    aria-hidden="true"
                    className="ml-2"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-white">
                Navegação
              </h2>

              <ul className="space-y-4">
                {siteConfig.navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-orange-400 sm:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-white">
                Serviços
              </h2>

              <ul className="space-y-4">
                {siteConfig.footerServices.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="inline-flex text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-orange-400 sm:text-base"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-white">
                Contato
              </h2>

              <div className="space-y-5">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar com a VS Design Studio pelo WhatsApp"
                  className="group flex items-start gap-3 text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-orange-400 transition-colors duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>

                  <span className="min-w-0">
                    <strong className="block text-sm font-semibold text-white">
                      WhatsApp
                    </strong>

                    <span className="mt-1 block text-sm">
                      (37) 99941-8756
                    </span>
                  </span>
                </a>

                {/* E-mail */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Enviar e-mail para a VS Design Studio"
                  className="group flex items-start gap-3 text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-orange-400 transition-colors duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />

                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>

                  <span className="min-w-0">
                    <strong className="block text-sm font-semibold text-white">
                      E-mail
                    </strong>

                    <span className="mt-1 block break-all text-sm">
                      contato@vsdesignstudio.com.br
                    </span>
                  </span>
                </a>

                {/* Localização */}
                <div className="flex items-start gap-3 text-gray-400">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-orange-400">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />

                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                      />
                    </svg>
                  </span>

                  <span>
                    <strong className="block text-sm font-semibold text-white">
                      Localização
                    </strong>

                    <span className="mt-1 block text-sm">
                      {siteConfig.location.label}
                    </span>

                    <span className="mt-1 block text-xs text-gray-400">
                      {siteConfig.location.online}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div
            aria-hidden="true"
            className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:my-12"
          />

          {/* Rodapé inferior */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
              </p>

              <p className="mt-2 text-xs text-gray-400">
                Design, sites, identidade visual e soluções digitais para marcas
                que querem crescer.
              </p>
            </div>

            <BackToTopButton />
          </div>
        </div>
      </Reveal>
    </footer>
  );
}