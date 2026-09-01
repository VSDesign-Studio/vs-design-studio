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
    href: "https://www.behance.net/gallery/245282541/Branding-Logo-ARM-Assessoria-Contabil",
  },
  {
    id: 2,
    title: "Nebula Filmes",
    category: "Branding",
    description:
      "Identidade visual criada para transmitir criatividade, movimento e personalidade no mercado audiovisual.",
    image: "/images/capa-nebula-films.png",
    year: "2026",
    featured: false,
    real: false,
    href: "#contato",
  },
  {
    id: 3,
    title: "Casa dos Bombeiros",
    category: "Identidade Visual",
    description:
      "Construção de uma marca forte e reconhecível, alinhada ao segmento e ao público da empresa.",
    image: "/images/casa-dos-bombeiros.png",
    year: "2026",
    featured: false,
    real: false,
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
    href: "https://www.behance.net/gallery/253150893/Aurora-Caf-Premium-Brand-Identity",
  },
  {
    id: 5,
    title: "Atlas Engenharia",
    category: "Identidade Visual",
    description:
      "Projeto conceitual com uma identidade sólida, técnica e preparada para transmitir credibilidade.",
    image: "/images/atlas-engenharia.png",
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
    image: "/images/lp-vs-design.jpg",
    year: "2026",
    featured: false,
    real: true,
    href: "https://www.vsdesignstudio.com.br/",
  },
  {
  id: 7,
  title: "VIVA Energy",
  category: "Branding & Campanha 360°",
  description:
    "Projeto conceitual de branding para uma marca de energético natural, criado do zero com foco em energia, performance e naturalidade, incluindo identidade visual e campanha 360°.",
  image: "/images/viva-energy.png",
  year: "2026",
  featured: false,
  real: false,
  href: "https://www.behance.net/gallery/254652173/VIVA-Energy-Campanha-360-Branding-OOH-Digital",
},
];