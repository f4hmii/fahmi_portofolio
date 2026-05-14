import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen px-6 pt-12 pb-12 md:px-12 md:pt-16 md:pb-20 lg:px-20 lg:pt-16 lg:pb-24 bg-[#FFF8E7]">
      <nav className="mb-16">
        <a href="/" className="neo-btn bg-white px-6 py-2 text-base inline-flex items-center gap-2 transform transition hover:-translate-x-2">
          <span className="font-sans font-bold">←</span>
          <span>Kembali ke Beranda</span>
        </a>
      </nav>

      <section className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 inline-block bg-neo-pink text-white p-4 border-4 border-neo-black shadow-neo-hover transform -rotate-1">
          Semua Project
        </h1>
        <br />
        <p className="text-xl md:text-2xl font-bold bg-white p-4 border-3 border-neo-black shadow-neo-sm inline-block transform rotate-1 mt-4">
          Kumpulan hasil karya, eksplorasi, dan proyek yang pernah saya kerjakan.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
