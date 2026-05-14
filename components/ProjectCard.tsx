"use client";

export default function ProjectCard({ id, title, desc, emoji, color, tags, btnColor, btnTextClass }: any) {
  return (
    <article className="neo-card flex flex-col group h-full">
      <div className={`h-40 md:h-48 ${color} border-3 border-neo-black mb-6 flex items-center justify-center overflow-hidden relative`}>
         <div className="text-6xl group-hover:scale-125 transition-transform duration-300">{emoji}</div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: any, i: number) => (
          <span key={i} className={`neo-tag ${tag.color}`}>{tag.text}</span>
        ))}
      </div>
      <h3 className="text-2xl font-black uppercase mb-3">{title}</h3>
      <p className="text-base font-medium mb-6 flex-1 line-clamp-2">
        {desc}
      </p>
      <a 
        href={`/projects/${id}`} 
        className={`neo-btn ${btnColor} ${btnTextClass} text-center w-full !py-2 !text-lg mt-auto cursor-pointer`}
      >
        Detail Project
      </a>
    </article>
  );
}
