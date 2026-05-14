import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const allProjects = [
    {
      title: "E-Commerce Kiosk App",
      desc: "Aplikasi mandiri untuk pemesanan restoran (Kiosk) dengan antarmuka yang interaktif dan responsif. Terintegrasi dengan backend API untuk manajemen pesanan secara real-time.",
      emoji: "🛒",
      color: "bg-neo-cyan",
      btnColor: "bg-neo-pink",
      btnTextClass: "text-white",
      tags: [
        { text: "React", color: "bg-neo-yellow" },
        { text: "Tailwind", color: "bg-white" },
        { text: "API", color: "bg-neo-cyan" }
      ]
    },
    {
      title: "Gesture Control UI",
      desc: "Eksperimen interaksi menggunakan pelacakan tangan (hand-tracking) untuk mengontrol kursor dan memberikan perintah tanpa sentuhan pada layar.",
      emoji: "👋",
      color: "bg-neo-yellow",
      btnColor: "bg-neo-black",
      btnTextClass: "text-white",
      tags: [
        { text: "MediaPipe", color: "bg-neo-cyan" },
        { text: "React", color: "bg-white" }
      ]
    },
    {
      title: "Neubrutalism Web",
      desc: "Website portofolio personal interaktif dengan gaya desain Neubrutalism yang fokus pada estetika berani, bayangan tajam, dan performa tinggi.",
      emoji: "🚀",
      color: "bg-neo-pink",
      btnColor: "bg-white",
      btnTextClass: "text-black",
      tags: [
        { text: "Next.js", color: "bg-white" },
        { text: "Tailwind", color: "bg-neo-yellow" }
      ]
    },
    {
      title: "Admin Dashboard",
      desc: "Sistem manajemen admin komprehensif untuk memantau data transaksi, mengelola inventaris produk, dan memvisualisasikan laporan penjualan bulanan.",
      emoji: "📊",
      color: "bg-white",
      btnColor: "bg-neo-cyan",
      btnTextClass: "text-black",
      tags: [
        { text: "Vue.js", color: "bg-neo-yellow" },
        { text: "Firebase", color: "bg-neo-pink" }
      ]
    },
    {
      title: "Mobile POS System",
      desc: "Aplikasi kasir mobile (Point of Sale) yang memudahkan pelacakan stok barang secara offline dan sinkronisasi data instan saat online.",
      emoji: "📱",
      color: "bg-neo-cyan",
      btnColor: "bg-neo-yellow",
      btnTextClass: "text-black",
      tags: [
        { text: "Flutter", color: "bg-white" },
        { text: "SQLite", color: "bg-neo-pink" }
      ]
    },
    {
      title: "Social Media Clone",
      desc: "Prototipe aplikasi media sosial dengan fitur upload foto, komentar real-time, dan sistem notifikasi web socket.",
      emoji: "💬",
      color: "bg-neo-yellow",
      btnColor: "bg-neo-black",
      btnTextClass: "text-white",
      tags: [
        { text: "Node.js", color: "bg-neo-cyan" },
        { text: "Socket.io", color: "bg-white" },
        { text: "MongoDB", color: "bg-neo-pink" }
      ]
    }
  ];

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
        {allProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
