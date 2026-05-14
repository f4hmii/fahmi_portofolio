export const projectsData = [
  {
    id: "kiosk-app",
    title: "E-Commerce Kiosk App",
    desc: "Aplikasi mandiri untuk pemesanan restoran (Kiosk) dengan antarmuka yang interaktif dan responsif. Terintegrasi dengan backend API untuk manajemen pesanan secara real-time.",
    fullDesc: "Aplikasi ini dirancang untuk meningkatkan efisiensi pemesanan di restoran cepat saji. Fitur utamanya mencakup pemilihan menu berbasis kategori, manajemen keranjang belanja, integrasi sistem pembayaran QRIS, dan pencetakan struk otomatis. Dibangun menggunakan React untuk frontend yang cepat dan Node.js untuk pemrosesan data di backend.",
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
    id: "gesture-ui",
    title: "Gesture Control UI",
    desc: "Eksperimen interaksi menggunakan pelacakan tangan (hand-tracking) untuk mengontrol kursor dan memberikan perintah tanpa sentuhan pada layar.",
    fullDesc: "Proyek inovatif ini memanfaatkan library MediaPipe untuk mengenali koordinat tangan melalui webcam secara real-time. Pengguna dapat menggerakkan kursor, melakukan 'klik' dengan gestur mengepalkan tangan, dan menjalankan perintah tertentu melalui gestur jari. Sangat berguna untuk implementasi layar publik higienis atau aksesibilitas bagi penyandang disabilitas.",
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
    id: "neubrutalism-web",
    title: "Neubrutalism Web",
    desc: "Website portofolio personal interaktif dengan gaya desain Neubrutalism yang fokus pada estetika berani, bayangan tajam, dan performa tinggi.",
    fullDesc: "Website portofolio ini adalah implementasi nyata dari tren desain Neubrutalism. Menggunakan warna-warna kontras tinggi, border hitam yang tebal, dan tipografi sans-serif yang kuat. Dibangun dengan Next.js 14 untuk optimasi SEO dan performa load yang instan.",
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
    id: "admin-dashboard",
    title: "Admin Dashboard",
    desc: "Sistem manajemen admin komprehensif untuk memantau data transaksi, mengelola inventaris produk, dan memvisualisasikan laporan penjualan bulanan.",
    fullDesc: "Dashboard ini menyediakan wawasan mendalam bagi pemilik bisnis. Dengan grafik interaktif menggunakan Recharts, pengguna dapat menganalisis tren penjualan, memantau stok barang yang menipis secara real-time, dan mengelola hak akses staf admin dengan aman.",
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
    id: "mobile-pos",
    title: "Mobile POS System",
    desc: "Aplikasi kasir mobile (Point of Sale) yang memudahkan pelacakan stok barang secara offline dan sinkronisasi data instan saat online.",
    fullDesc: "Didesain khusus untuk UMKM, aplikasi ini memungkinkan pencatatan transaksi meskipun tanpa koneksi internet. Menggunakan SQLite untuk penyimpanan lokal dan secara otomatis menyinkronkan data ke cloud saat perangkat terhubung ke internet.",
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
    id: "social-media",
    title: "Social Media Clone",
    desc: "Prototipe aplikasi media sosial dengan fitur upload foto, komentar real-time, dan sistem notifikasi web socket.",
    fullDesc: "Platform sosial sederhana yang mengimplementasikan fitur inti media sosial modern. Pengguna dapat membuat profil, mengikuti teman, dan berinteraksi secara instan melalui sistem komentar berbasis Socket.io yang sangat responsif.",
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
