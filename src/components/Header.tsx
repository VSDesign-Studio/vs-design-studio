"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  {
    label: "Serviços",
    href: "#servicos",
  },
  {
    label: "Portfólio",
    href: "#portfolio",
  },
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Depoimentos",
    href: "#depoimentos",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[9998] w-full border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-white/10 bg-[#070B16] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* Barra principal */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <a
          href="#inicio"
          aria-label="Ir para o início da página"
          className="flex items-center text-lg font-black tracking-[-0.03em] text-white sm:text-xl"
        >
          VS
          <span className="ml-1.5">Design Studio</span>
          <span className="text-orange-500">.</span>
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-gray-300 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-orange-500 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contato"
          className="hidden rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 lg:inline-flex"
        >
          Solicitar orçamento
        </a>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 lg:hidden"
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-20 z-[9997] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#070B16] lg:hidden"
        >
          {/* Glows apenas decorativos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]"
          />

          <div className="relative flex min-h-full flex-col px-5 py-8 sm:px-6">
            <nav
              aria-label="Navegação mobile"
              className="flex flex-col gap-2"
            >
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex min-h-16 items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-lg font-semibold text-gray-300 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                >
                  <span>{item.label}</span>

                  <span className="text-sm font-bold text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-8">
              <a
                href="#contato"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(249,115,22,0.25)] transition-all duration-300 hover:bg-orange-600"
              >
                Solicitar orçamento
              </a>

              <p className="mt-6 text-center text-sm leading-6 text-gray-400">
                Design, sites, identidade visual e soluções digitais para
                empresas que querem crescer.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}