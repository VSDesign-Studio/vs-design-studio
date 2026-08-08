export const siteConfig = {
  name: "VS Design Studio",

  url: "https://www.vsdesignstudio.com.br",

  email: "contato@vsdesignstudio.com.br",

  phone: {
    number: "5537999418756",
    display: "(37) 99941-8756",
  },

  whatsapp: {
    number: "5537999418756",

    quoteMessage:
      "Olá, Vítor! Conheci a VS Design Studio pelo site e gostaria de solicitar um orçamento.",

    projectMessage:
      "Olá, Vítor! Conheci a VS Design Studio pelo site e gostaria de conversar sobre um projeto.",
  },

  social: {
    instagram: "https://instagram.com/vsdesignstudio_",
  },

  location: {
    city: "Bom Despacho",
    state: "Minas Gerais",
    label: "Bom Despacho, Minas Gerais",
    online: "Atendimento online para empresas de todo o Brasil",
  },

  navigation: [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Sobre", href: "/sobre" },
    { label: "Depoimentos", href: "/depoimentos" },
    { label: "Contato", href: "/contato" },
  ],

  cta: {
    requestQuote: "Solicitar orçamento",
    whatsapp: "Falar no WhatsApp",
  },

  footerServices: [
    { label: "Sites profissionais", href: "/servicos" },
    { label: "Identidade visual", href: "/servicos" },
    { label: "UI/UX Design", href: "/servicos" },
    { label: "Soluções com IA", href: "/servicos" },
    { label: "Social Media", href: "/servicos" },
    { label: "Materiais gráficos", href: "/servicos" },
  ],
} as const;

export function getWhatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
