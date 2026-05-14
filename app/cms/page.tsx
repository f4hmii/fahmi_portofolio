"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function CMSPage() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    color: "bg-neo-pink",
    btnColor: "bg-neo-yellow",
    btnTextClass: "text-neo-black",
    tags: [{ text: "React", color: "bg-neo-cyan" }]
  });

  const [tagInput, setTagInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (tagInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, { text: tagInput, color: "bg-white" }]
      }));
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  return (
    <main className="min-h-screen bg-[#F5F5F5] p-4 md:p-10 font-pixel-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black uppercase bg-neo-black text-white p-4 border-4 border-neo-black shadow-neo-md transform -rotate-1 inline-block">
            Project CMS
          </h1>
          <Link href="/" className="neo-btn bg-white px-6 py-2 font-bold">
            ← Beranda
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM SECTION */}
          <div className="neo-card bg-white p-6 md:p-8 space-y-6">
            <h2 className="text-2xl font-black uppercase border-b-4 border-neo-black pb-2 mb-6">Tambah Project Baru</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block font-black uppercase mb-1">Judul Project</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Contoh: E-Commerce App"
                  className="w-full p-3 border-3 border-neo-black shadow-neo-sm focus:outline-none focus:bg-neo-yellow/10"
                />
              </div>

              <div>
                <label className="block font-black uppercase mb-1">Deskripsi Singkat</label>
                <textarea 
                  name="desc"
                  value={formData.desc}
                  onChange={handleInputChange}
                  placeholder="Jelaskan secara singkat..."
                  rows={3}
                  className="w-full p-3 border-3 border-neo-black shadow-neo-sm focus:outline-none focus:bg-neo-yellow/10"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block font-black uppercase mb-1">Project Image URL</label>
                  <input 
                    type="text" 
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.png"
                    className="w-full p-3 border-3 border-neo-black shadow-neo-sm focus:outline-none focus:bg-neo-yellow/10"
                  />
                </div>
                <div>
                  <label className="block font-black uppercase mb-1">Warna Header Card</label>
                  <select 
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="w-full p-3 border-3 border-neo-black shadow-neo-sm focus:outline-none"
                  >
                    <option value="bg-neo-pink">Pink (#ff4900)</option>
                    <option value="bg-neo-cyan">Cyan</option>
                    <option value="bg-neo-yellow">Yellow</option>
                    <option value="bg-white">White</option>
                    <option value="bg-neo-black">Black</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-black uppercase mb-1">Tags (Keahlian)</label>
                <div className="flex gap-2 mb-2">
                  <input 
                    type="text" 
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Contoh: Next.js"
                    className="flex-1 p-3 border-3 border-neo-black shadow-neo-sm focus:outline-none"
                  />
                  <button 
                    onClick={addTag}
                    className="neo-btn bg-neo-cyan px-6 py-2 font-black"
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, i) => (
                    <span key={i} className="neo-tag bg-white flex items-center gap-2">
                      {tag.text}
                      <button onClick={() => removeTag(i)} className="text-red-500 font-bold hover:scale-125 transition-transform">×</button>
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full neo-btn bg-neo-pink text-white text-xl py-4 mt-8 uppercase font-black tracking-widest hover:bg-neo-black transition-colors">
                Simpan Project
              </button>
            </div>
          </div>

          {/* PREVIEW SECTION */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase inline-block bg-neo-yellow px-4 py-1 border-3 border-neo-black transform -rotate-2">
              Live Preview
            </h2>
            <div className="max-w-[400px] mx-auto md:mx-0 sticky top-10">
              <ProjectCard 
                id="preview"
                title={formData.title || "Judul Project"}
                desc={formData.desc || "Deskripsi project akan muncul di sini..."}
                image={formData.image}
                color={formData.color}
                tags={formData.tags}
                btnColor={formData.btnColor}
                btnTextClass={formData.btnTextClass}
              />
              <p className="mt-6 text-sm font-bold bg-neo-cyan/20 p-4 border-2 border-dashed border-neo-black italic">
                * Ini adalah tampilan bagaimana project Anda akan muncul di halaman depan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
