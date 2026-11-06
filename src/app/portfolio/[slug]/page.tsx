import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

const localProjects = projects.filter((project) => project.href.startsWith("/portfolio/"));

type Props = { params: Promise<{ slug: string }> };

function findProject(slug: string) {
  return localProjects.find((project) => project.href === `/portfolio/${slug}`);
}

export function generateStaticParams() {
  return localProjects.map((project) => ({ slug: project.href.split("/").pop()! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}${project.href}` },
    openGraph: {
      title: `${project.title} | VS Design Studio`,
      description: project.description,
      url: `${siteConfig.url}${project.href}`,
      images: [{ url: project.image, alt: `${project.title} — ${project.category}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | VS Design Studio`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070B16] px-5 pb-20 pt-32 text-white sm:px-6 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/portfolio" className="text-sm text-orange-400 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-orange-500">
            ← Voltar ao portfólio
          </Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-orange-400">
            {project.real ? "Projeto real" : "Projeto conceitual"} · {project.category} · {project.year}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">{project.description}</p>
          {!project.real && (
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-400">
              Estudo de design para exploração criativa e apresentação no portfólio.
            </p>
          )}
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0D1324]">
            <Image
              src={project.image}
              alt={`Apresentação do projeto ${project.title} — ${project.category}`}
              width={1600}
              height={1200}
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="h-auto w-full"
              priority
            />
          </div>
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
            <h2 className="text-2xl font-bold">Vamos conversar sobre sua marca?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-gray-300">
              Conte o que sua empresa precisa para desenvolvermos uma proposta de projeto.
            </p>
            <Link href="/contato" className="mt-6 inline-flex rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400">
              Solicitar orçamento
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
