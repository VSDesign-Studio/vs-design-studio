"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  real: boolean;
  href?: string;
};

export default function FeaturedProject({
  title,
  category,
  description,
  image,
  year,
  real,
  href = "#contato",
}: Props) {
  const isExternal = href.startsWith("http");

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0D1324]
        shadow-[0_30px_100px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-500/30
        sm:rounded-[32px]
        lg:grid
        lg:grid-cols-[1.15fr_0.85fr]
      "
    >
      {/* Imagem */}
      <div className="relative aspect-[16/10] min-h-[280px] overflow-hidden sm:min-h-[380px] lg:aspect-auto lg:min-h-[580px]">
        <Image
          src={image}
          alt={`Projeto ${title} — ${category}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 md:group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B16]/80 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0D1324]/30"
        />

        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-lg sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-sm ${
            real
              ? "border-emerald-400/30 bg-emerald-500/90 text-white"
              : "border-orange-400/30 bg-orange-500/90 text-white"
          }`}
        >
          {real ? "Projeto real" : "Projeto conceitual"}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="relative flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-orange-500/10 opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 sm:text-sm sm:tracking-[0.3em]">
            Projeto em destaque
          </span>

          <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl xl:text-5xl">
            {title}
          </h3>

          <p className="mt-3 text-lg font-semibold text-orange-400 sm:text-xl">
            {category}
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-300 sm:mt-8 sm:text-base sm:leading-8">
            {description}
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group/button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:w-auto"
            >
              Ver estudo de caso

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
              />
            </a>

            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/60 hover:bg-orange-500/10 hover:text-orange-300 sm:w-auto"
            >
              Quero um projeto assim
            </a>
          </div>

          {/* Informações */}
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <strong className="block text-2xl font-black text-orange-500 sm:text-3xl">
                100%
              </strong>

              <span className="mt-1 block text-sm text-gray-400">
                Personalizado
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-black text-orange-500 sm:text-3xl">
                {year}
              </strong>

              <span className="mt-1 block text-sm text-gray-400">
                Ano do projeto
              </span>
            </div>

            <div className="min-w-0">
              <strong className="block break-words text-xl font-black leading-tight text-orange-500 sm:text-2xl">
                {category}
              </strong>

              <span className="mt-1 block text-sm text-gray-400">
                Categoria
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}