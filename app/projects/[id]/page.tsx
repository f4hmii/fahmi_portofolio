import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pt-12 pb-12 md:px-12 md:pt-16 md:pb-20 lg:px-20 lg:pt-16 lg:pb-24 bg-[#FFF8E7]">
      <nav className="mb-12">
        <Link href="/projects" className="neo-btn bg-white px-6 py-2 text-base inline-flex items-center gap-2 transform transition hover:-translate-x-2">
          <span className="font-sans font-bold">←</span>
          <span>Kembali ke Daftar Project</span>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className={`w-full ${project.color} border-4 border-neo-black shadow-neo-md p-12 flex justify-center items-center mb-10 transform -rotate-1`}>
          <span className="text-[8rem] md:text-[10rem] animate-bounce">{project.emoji}</span>
        </div>

        <div className="bg-white border-4 border-neo-black p-8 md:p-12 shadow-neo-hover transform rotate-1">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className={`neo-tag ${tag.color}`}>{tag.text}</span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="w-full h-2 bg-neo-black mb-8"></div>
          
          <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8">
            {project.desc}
          </p>
          
          <div className="bg-neo-cyan/10 p-6 border-l-8 border-neo-cyan italic text-lg md:text-xl font-medium mb-10">
            {project.fullDesc}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="neo-btn bg-neo-yellow px-10 py-4 font-black uppercase">Live Demo</a>
            <a href="#" className="neo-btn bg-white px-10 py-4 font-black uppercase">Source Code</a>
          </div>
        </div>
      </div>
    </main>
  );
}
