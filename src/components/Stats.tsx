"use client";

import { useSyncExternalStore } from "react";
import CountUp from "react-countup";

import Reveal from "./Reveal";

const stats = [
  {
    number: 10,
    suffix: "+",
    title: "Projetos desenvolvidos",
  },
  {
    number: 4,
    suffix: "",
    title: "Áreas de atuação",
  },
  {
    number: 100,
    suffix: "%",
    title: "Comprometimento",
  },
  {
    number: null,
    suffix: "",
    staticValue: "∞",
    title: "Criatividade",
  },
];

const hydrationListeners = new Set<() => void>();
let hydrated = false;

function notifyHydration() {
  if (hydrated) return;
  hydrated = true;
  hydrationListeners.forEach((listener) => listener());
}

function subscribeHydration(listener: () => void) {
  hydrationListeners.add(listener);

  if (typeof window !== "undefined" && !hydrated) {
    const trigger = () => window.requestAnimationFrame(notifyHydration);

    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", trigger, { once: true });
    } else {
      trigger();
    }
  }

  return () => hydrationListeners.delete(listener);
}

function getHydrationSnapshot() {
  return hydrated;
}

export default function Stats() {
  const mounted = useSyncExternalStore(subscribeHydration, getHydrationSnapshot, () => false);

  return (
    <section
      aria-labelledby="stats-title"
      className="relative overflow-hidden bg-[#070B16] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Glow laranja */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px] sm:h-96 sm:w-96"
      />

      {/* Glow azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-100px] h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] sm:right-0"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12">
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-400 sm:px-5 sm:text-sm">
              Nosso trabalho
            </span>

            <h2
              id="stats-title"
              className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl"
            >
              Criatividade, estratégia e
              <span className="text-orange-500">
                {" "}comprometimento.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Cada projeto é desenvolvido com atenção aos detalhes e foco na
              construção de uma presença profissional.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stats.map((item, index) => (
              <article
                key={item.title}
                className="group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(249,115,22,0.14)] sm:min-h-[210px] sm:p-8"
              >
                {/* Número decorativo */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 text-xs font-bold text-white/10 transition-colors duration-300 group-hover:text-orange-500/30"
                >
                  0{index + 1}
                </span>

                {/* Glow interno */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <strong className="relative text-4xl font-black text-orange-500 sm:text-5xl">
                  {item.number === null ? (
                    item.staticValue
                  ) : mounted ? (
                    <CountUp
                      end={item.number}
                      duration={1.8}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  ) : (
                    `${item.number}${item.suffix}`
                  )}
                </strong>

                <p className="relative mt-4 text-sm leading-6 text-gray-400 sm:text-base">
                  {item.title}
                </p>

                {/* Linha inferior */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-500 group-hover:w-full"
                />
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}