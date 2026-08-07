"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  real: boolean;
  href?: string;
};

export default function ProjectCard({
  title,
  category,
  description,
  image,
  real,
  href = "#contato",
}: Props) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`Ver projeto ${title}`}
      className="
        group
        relative
        flex
        h-full
        min-h-[410px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0D1324]
        shadow-xl
        outline-none
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-500/40
        hover:shadow-[0_24px_70px_rgba(249,115,22,0.16)]
        focus-visible:border-orange-500
        active:scale-[0.99]
        sm:min-h-[450px]
      "
    >
      {/* Imagem */}
      <Image
        src={image}
        alt={`Projeto ${title} — ${category}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 md:group-hover:scale-110"
      />

      {/* Sobreposição */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/70 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Tipo do projeto */}
      <span
        className={`absolute left-5 top-5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-lg ${
          real
            ? "border-emerald-400/30 bg-emerald-500/90 text-white"
            : "border-orange-400/30 bg-orange-500/90 text-white"
        }`}
      >
        {real ? "Projeto real" : "Conceitual"}
      </span>

      {/* Conteúdo */}
      <div className="relative z-10 mt-auto flex w-full flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400 sm:text-sm">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-white">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-300">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
            Ver projeto
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-orange-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-orange-500/40 group-hover:bg-orange-500 group-hover:text-white">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}