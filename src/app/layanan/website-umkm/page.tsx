import React from 'react';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { 
  ServiceHero, ServiceProblem, ServiceSolution, 
  ServiceFeatures, ServiceTarget, ServiceTimeline, 
  ServiceFaq, ServiceCTA 
} from '@/components/services/ServiceLayout';
import { AlertCircle, Zap, Smartphone, Shield, Search } from 'lucide-react';

export const metadata = {
  title: "Jasa Pembuatan Website UMKM Premium - NaikOmzet",
  description: "Bantu bisnis UMKM Anda mendapatkan lebih banyak pelanggan secara online dengan website e-commerce yang cepat, aman, dan mudah digunakan.",
  openGraph: {
    title: 'Jasa Pembuatan Website UMKM Premium - NaikOmzet',
    description: 'Bantu bisnis UMKM Anda mendapatkan lebih banyak pelanggan secara online dengan website e-commerce yang cepat, aman, dan mudah digunakan.',
  }
};

export default function WebsiteUMKMPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <ServiceHero 
          title="Tingkatkan Penjualan UMKM Anda dengan Website Profesional"
          subtitle="Jangan mau kalah dari kompetitor. Kami bantu UMKM Anda go-digital dengan website canggih, cepat, dan berfokus pada peningkatan konversi."
        />

        <ServiceProblem 
          problems={[
            { icon: <AlertCircle size={24} />, title: "Masih Mengandalkan WhatsApp", desc: "Pemesanan berantakan dan rawan salah rekap jika semua hanya lewat chat." },
            { icon: <AlertCircle size={24} />, title: "Sulit Dipercaya Pelanggan", desc: "Pelanggan ragu berbelanja jika bisnis Anda tidak memiliki identitas digital yang profesional." },
            { icon: <AlertCircle size={24} />, title: "Operasional Tidak Efisien", desc: "Menjawab pertanyaan harga dan ongkir satu per satu membuang banyak waktu berharga Anda." }
          ]}
        />

        <ServiceSolution 
          title="Solusi E-Commerce dari NaikOmzet"
          desc="Kami membangun sistem katalog pintar yang bekerja untuk Anda 24/7. Pelanggan bisa memilih produk, mengecek ongkir, dan checkout langsung ke WhatsApp Anda tanpa drama."
          benefits={[
            "Desain Premium (Non Template)",
            "Optimasi SEO Google",
            "Sangat Cepat & Responsif",
            "Gratis Domain & Hosting",
            "Bebas Revisi Desain",
            "Aman dari Hacker & Spam"
          ]}
        />

        <ServiceFeatures 
          features={[
            { icon: <Smartphone size={24} />, title: "Mobile Friendly", desc: "Sempurna di layar sekecil apapun, karena 90% pelanggan Anda berbelanja dari HP." },
            { icon: <Zap size={24} />, title: "Loading Super Cepat", desc: "Tidak ada lagi pelanggan kabur karena website lambat (PageSpeed > 95)." },
            { icon: <Search size={24} />, title: "SEO Friendly", desc: "Mudah ditemukan di halaman pertama Google saat orang mencari produk Anda." },
            { icon: <Shield size={24} />, title: "Sistem Keamanan Tinggi", desc: "Dilengkapi SSL dan proteksi Anti-DDoS tingkat enterprise." }
          ]}
        />

        <ServiceTarget 
          targets={["Cafe & Resto", "Laundry", "Frozen Food", "Salon & Barbershop", "Bengkel", "Klinik Kecantikan", "Toko Baju / Thrift", "Travel Agent"]}
        />

        <ServiceTimeline 
          steps={[
            { title: "Konsultasi Gratis", desc: "Ceritakan kendala dan impian bisnis Anda kepada tim ahli kami." },
            { title: "Analisis & Riset", desc: "Kami melakukan riset kompetitor untuk menentukan strategi desain terbaik." },
            { title: "Proses Desain", desc: "UI/UX Designer kami merancang antarmuka premium untuk brand Anda." },
            { title: "Development", desc: "Tim engineer mulai merakit website dengan teknologi paling mutakhir (Next.js)." },
            { title: "Revisi", desc: "Anda meninjau hasilnya. Kami lakukan revisi hingga Anda 100% puas." },
            { title: "Go Live & Support", desc: "Website dirilis. Kami siap sedia mendukung operasional digital Anda 24/7." }
          ]}
        />

        <ServiceFaq 
          faqs={[
            { q: "Apakah saya harus bisa coding untuk mengelola web?", a: "Sama sekali tidak. Kami menyediakan Custom Admin Panel yang semudah menggunakan Instagram." },
            { q: "Berapa lama proses pembuatannya?", a: "Tergantung kompleksitas, namun rata-rata memakan waktu 7 hingga 14 hari kerja." },
            { q: "Apakah ada biaya bulanan?", a: "Tidak ada biaya bulanan. Anda hanya membayar biaya perpanjangan server dan domain per tahun." },
            { q: "Apakah saya bisa menambahkan produk sendiri?", a: "Tentu. Anda memiliki kendali penuh untuk menambah, mengedit, atau menghapus produk tanpa batas." }
          ]}
        />

        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
