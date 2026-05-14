"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const fullName = "Zulfahmi";
  const [nameText, setNameText] = useState(fullName);

  useEffect(() => {
    let i = fullName.length;
    let isDeleting = true;
    let timer: any;

    const type = () => {
      setNameText(fullName.slice(0, i));

      if (isDeleting && i > 0) {
        i--;
        timer = setTimeout(type, 100);
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        timer = setTimeout(type, 500);
      } else if (!isDeleting && i < fullName.length) {
        i++;
        timer = setTimeout(type, 250);
      } else if (!isDeleting && i === fullName.length) {
        isDeleting = true;
        timer = setTimeout(type, 2000);
      }
    };

    timer = setTimeout(type, 2000); // Jeda awal sebelum mulai menghapus
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="min-h-screen px-6 pt-2 pb-12 md:px-12 md:pt-4 md:pb-20 lg:px-20 lg:pt-4 lg:pb-24 overflow-hidden">
      {/* HEADER SECTION */}
      <nav className="sticky top-2 z-50 flex justify-between items-center mb-16 px-6 py-2 border-3 border-neo-black bg-white shadow-neo-sm">
        <a href="/" className="flex items-center">
          <Image 
            src="/image/zflogo.png" 
            alt="Logo Fahmi" 
            width={120} 
            height={40} 
            className="h-10 w-auto object-contain"
          />
        </a>
        
        {/* Nav Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 font-black text-base md:text-lg uppercase items-center bg-white">
          <a href="#" className="hover:text-neo-pink transition-colors hover:underline decoration-4 underline-offset-8">Home</a>
          <a href="#skills" className="hover:text-neo-cyan transition-colors hover:underline decoration-4 underline-offset-8">About</a>
          <a href="#contact" className="hover:text-neo-yellow transition-colors hover:underline decoration-4 underline-offset-8">Contact</a>
        </div>

        <a href="#contact" className="hidden lg:inline-block px-4 py-1.5 bg-neo-pink text-white border-2 border-neo-black shadow-neo-sm font-bold text-sm transition-transform hover:-translate-y-1 hover:shadow-neo-md active:translate-y-1 active:shadow-none">
          Hubungi Saya
        </a>
      </nav>

      {/* HERO & BIO SECTION */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between min-h-[calc(100vh-200px)] mb-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-4 right-1/3 w-16 h-16 bg-neo-yellow rounded-full border-2 border-neo-black shadow-neo-sm -z-10 hidden sm:block"></div>
        <div className="absolute bottom-0 left-4 w-12 h-12 bg-neo-cyan border-2 border-neo-black shadow-neo-sm -z-10 rotate-12 hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neo-pink rounded-full border-2 border-neo-black shadow-neo-sm -z-10 -translate-x-1/2 -translate-y-1/2 blur-xl opacity-20 hidden md:block"></div>

        <div className="w-full md:w-[50%] space-y-3 z-10">
          <div className="inline-block px-2 py-1 bg-neo-cyan border-2 border-neo-black shadow-neo-sm font-bold uppercase tracking-widest text-xs transform -rotate-1">
            Halo, Selamat Datang! 👋
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-black leading-tight uppercase">
            Saya <span className="text-neo-pink underline decoration-8 underline-offset-8">
              {nameText}
              <span className="animate-pulse">|</span>
            </span>,
            <br />
            Full Stack Web Developer.
          </h2>
          <p className="text-base sm:text-lg font-medium w-full max-w-lg mt-2 p-4 bg-white border-2 border-neo-black shadow-neo-sm transform rotate-1">
            Saya adalah seorang web developer yang bersemangat membangun antarmuka digital yang interaktif, berani, dan fungsional. Memadukan desain unik dengan kode bersih.
          </p>
          <div className="pt-3 flex flex-wrap gap-3">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="neo-btn bg-neo-yellow text-xs sm:text-sm px-4 sm:px-5 py-2">
              Unduh CV
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="neo-btn bg-white text-xs sm:text-sm px-4 sm:px-5 py-2">
              GitHub
            </a>
          </div>
        </div>

        <div className="w-full md:w-[45%] relative mt-10 md:mt-0 z-10 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px]">
            <div className="absolute inset-0 bg-neo-pink border-4 border-neo-black translate-x-6 translate-y-6 shadow-neo-md w-full"></div>
            <div className="relative bg-neo-cyan border-4 border-neo-black aspect-square w-full flex items-center justify-center overflow-hidden">
               <Image 
                 src="/image/profile.png" 
                 alt="Foto Profil Fahmi" 
                 fill 
                 className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
               />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="mb-32 pt-8">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-neo-pink p-8 border-4 border-neo-black shadow-neo-hover transform rotate-1">
          <div className="w-full md:w-1/3">
            <div className="bg-white border-4 border-neo-black p-6 transform -rotate-2 flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-center">Tentang Saya</h2>
              <div className="w-20 h-2 bg-neo-black mb-6"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-neo-black shadow-neo-sm overflow-hidden bg-neo-cyan rotate-3 hover:-rotate-1 transition-transform">
                <Image 
                  src="/image/profile.png" 
                  alt="Foto Zulfahmi" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 bg-white p-6 md:p-8 border-4 border-neo-black shadow-neo-sm transform -rotate-1">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              Halo! Saya adalah seorang web developer yang fokus pada pembuatan antarmuka pengguna yang menarik, interaktif, dan responsif. Dengan gaya desain <span className="font-bold bg-neo-yellow px-2 py-1 border-2 border-neo-black shadow-neo-sm inline-block transform -rotate-2">Neubrutalism</span> yang khas, saya memadukan estetika yang berani dengan kode yang efisien dan fungsional.
            </p>
            <p className="text-lg md:text-xl font-medium leading-relaxed mt-4">
              Saya memiliki pengalaman membangun berbagai macam aplikasi web modern, mulai dari e-commerce mandiri (kiosk) hingga eksperimen interaktif menggunakan kontrol gestur. Jika Anda mencari developer yang berani tampil beda, Anda berada di tempat yang tepat.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase bg-neo-black text-white p-4 border-3 border-neo-black shadow-neo-hover transform -rotate-2 inline-block">
            Keahlian Saya
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React / Next.js", color: "bg-neo-cyan" },
            { name: "TypeScript", color: "bg-neo-yellow" },
            { name: "Tailwind CSS", color: "bg-neo-pink text-white" },
            { name: "Node.js", color: "bg-white" },
            { name: "UI/UX Design", color: "bg-neo-yellow" },
            { name: "Figma", color: "bg-neo-cyan" },
            { name: "Git / GitHub", color: "bg-neo-black text-white" },
            { name: "RESTful API", color: "bg-neo-pink text-white" },
          ].map((skill, i) => (
            <div 
              key={i} 
              className={`p-6 border-3 border-neo-black shadow-neo-md text-center font-bold text-xl md:text-2xl transition-transform hover:-translate-y-2 hover:shadow-neo-hover cursor-default ${skill.color} ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="mb-32">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 inline-block bg-neo-yellow p-4 border-3 border-neo-black shadow-neo-md transform rotate-1">
          Project Terpilih
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/projects" className="neo-btn bg-neo-yellow text-xl px-10 py-4 inline-flex items-center gap-3 transform -rotate-1 hover:rotate-0 transition-transform hover:-translate-y-2">
            <span>Lihat Semua Project</span>
            <span className="text-3xl">→</span>
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-neo-cyan border-3 border-neo-black shadow-neo-hover p-8 md:p-16 text-center transform -rotate-1">
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-6">Mari Bekerja Sama!</h2>
        <p className="text-2xl font-bold mb-10 max-w-3xl mx-auto bg-white p-4 border-3 border-neo-black inline-block transform rotate-1">
          Apakah Anda memiliki ide menarik atau sedang mencari pengembang untuk tim Anda? Jangan ragu untuk menyapa.
        </p>
        <br />
        <a href="mailto:hello@example.com" className="neo-btn bg-neo-yellow text-2xl px-12 py-6 transform transition hover:scale-105 inline-block">
          Kirim Email
        </a>
      </section>
      
      {/* FOOTER */}
      <footer className="mt-20 border-t-3 border-neo-black pt-8 text-center font-bold text-lg">
        <p>© {new Date().getFullYear()} Fahmi. Dibangun dengan <span className="text-neo-pink">❤</span> & Neubrutalism.</p>
      </footer>
    </main>
  );
}
