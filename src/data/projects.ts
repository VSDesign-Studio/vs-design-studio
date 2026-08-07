export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  featured: boolean;
  real: boolean;
  href: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ARM",
    category: "Branding Completo",
    description:
      "Desenvolvimento de uma identidade visual estratégica, moderna e preparada para fortalecer o posicionamento da marca.",
    image: "/images/arm-capa.png",
    year: "2026",
    featured: true,
    real: true,
    href: "#contato",
  },
  {
    id: 2,
    title: "Nebula Filmes",
    category: "Branding",
    description:
      "Identidade visual criada para transmitir criatividade, movimento e personalidade no mercado audiovisual.",
    image: "/images/hero-site.jpeg",
    year: "2026",
    featured: false,
    real: true,
    href: "#contato",
  },
  {
    id: 3,
    title: "Casa dos Bombeiros",
    category: "Identidade Visual",
    description:
      "Construção de uma marca forte e reconhecível, alinhada ao segmento e ao público da empresa.",
    image: "/images/hero-site.jpeg",
    year: "2026",
    featured: false,
    real: true,
    href: "#contato",
  },
  {
    id: 4,
    title: "Aurora Café",
    category: "Branding Conceitual",
    description:
      "Marca premium inspirada no nascer do sol, no café especial e em experiências acolhedoras.",
    image: "/images/aurora-cafe-capa.png",
    year: "2026",
    featured: false,
    real: false,
    href: "#contato",
  },
  {
    id: 5,
    title: "Atlas Engenharia",
    category: "Identidade Visual",
    description:
      "Projeto conceitual com uma identidade sólida, técnica e preparada para transmitir credibilidade.",
    image: "/images/hero-site.jpeg",
    year: "2026",
    featured: false,
    real: false,
    href: "#contato",
  },
  {
    id: 6,
    title: "VS Digital",
    category: "Landing Page",
    description:
      "Landing page moderna e estratégica, desenvolvida para apresentar serviços e gerar oportunidades comerciais.",
    image: "/images/hero-site.jpeg",
    year: "2026",
    featured: false,
    real: false,
    href: "#contato",
  },
];