"use client";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10"
    >
      <svg
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-1"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}
