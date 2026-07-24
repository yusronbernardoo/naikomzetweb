import React from 'react';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { 
  ServiceHero, ServiceProblem, ServiceSolution, 
  ServiceFeatures, ServiceTarget, ServiceTimeline, 
  ServiceFaq, ServiceCTA 
} from '@/components/services/ServiceLayout';
import { Briefcase, Globe, Award, Target, TrendingUp, Users, PenTool, Search } from 'lucide-react';

export const metadata = {
  title: "Jasa Pembuatan Website Company Profile Premium - NaikOmzet",
  description: "Tingkatkan kredibilitas dan profesionalitas perusahaan Anda di mata calon investor dan klien B2B dengan desain website berkelas.",
};

export default function CompanyProfilePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <ServiceHero 
          title="Wajah Profesional Perusahaan Anda di Dunia Digital"
          subtitle="Calon klien dan mitra bisnis selalu mencari tahu tentang Anda di internet sebelum mengambil keputusan. Kami bantu bangun profil perusahaan yang meyakinkan, elegan, dan siap memenangkan kerja sama besar."
        />

        <ServiceProblem 
          problems={[
            { icon: <Briefcase size={24} />, title: "Kehilangan Kepercayaan", desc: "Calon mitra bisnis ragu bekerja sama karena perusahaan Anda sulit ditemukan atau tidak memiliki profil yang jelas di internet." },
            { icon: <PenTool size={24} />, title: "Kalah Saing Sebelum Bertemu", desc: "Profil digital yang berantakan membuat perusahaan Anda terlihat kurang kompeten dibandingkan kompetitor di mata calon klien." },
            { icon: <Target size={24} />, title: "Presentasi Kurang Meyakinkan", desc: "Sering gagal memenangkan proyek besar karena portofolio dan pencapaian perusahaan tidak ditampilkan secara profesional." }
          ]}
        />

        <ServiceSolution 
          title="Membangun Citra Perusahaan Skala Besar"
          desc="Kami memastikan setiap pengunjung website langsung memahami kelas, visi, dan kapasitas perusahaan Anda sejak detik pertama mereka melihatnya."
          benefits={[
            "Desain Eksklusif yang Mewakili Identitas Anda",
            "Penyajian Data Pencapaian yang Menarik",
            "Informasi Perusahaan Lebih Mudah Dipahami",
            "Sistem Manajemen Berita yang Rapi",
            "Website Sangat Cepat Diakses Kapan Pun",
            "Mudah Ditemukan oleh Calon Klien di Google"
          ]}
        />

        <ServiceFeatures 
          features={[
            { icon: <Globe size={24} />, title: "Profil Jajaran Manajemen & Tim", desc: "Tingkatkan rasa percaya calon mitra dengan menampilkan sosok di balik perusahaan Anda secara profesional." },
            { icon: <Award size={24} />, title: "Pajangan Pencapaian & Portofolio", desc: "Tampilkan sertifikasi, penghargaan, dan proyek-proyek sukses yang pernah Anda kerjakan." },
            { icon: <TrendingUp size={24} />, title: "Laporan Perusahaan Transparan", desc: "Halaman khusus untuk menaruh laporan tahunan dan berita terbaru agar investor merasa aman." },
            { icon: <Search size={24} />, title: "Tampil di Halaman Pertama Pencarian", desc: "Pastikan nama perusahaan Anda langsung muncul saat orang mencari jasa yang Anda tawarkan di internet." },
            { icon: <Users size={24} />, title: "Jalur Komunikasi Cepat", desc: "Calon klien bisa langsung mengirim pesan penawaran kerja sama yang otomatis masuk ke email staf Anda." },
            { icon: <PenTool size={24} />, title: "Tersedia dalam Berbagai Bahasa", desc: "Siap melayani klien luar negeri? Website bisa dibuatkan versi bahasa Inggris atau bahasa lainnya." }
          ]}
        />

        <ServiceTarget 
          targets={["Korporasi Besar", "Firma Hukum & Konsultan", "Perusahaan Kontraktor", "Manufaktur & Pabrik", "Agensi Kreatif", "Yayasan / NGO", "Distributor Utama"]}
        />

        <ServiceTimeline 
          steps={[
            { title: "Diskusi Kebutuhan Citra", desc: "Kita bahas bersama tentang nilai perusahaan dan siapa target klien yang ingin Anda yakinkan." },
            { title: "Penyusunan Profil & Konten", desc: "Kami bantu menyusun urutan informasi layanan dan keunggulan perusahaan Anda agar mudah dipahami." },
            { title: "Presentasi Desain Awal", desc: "Kami tunjukkan rancangan visualnya kepada direksi sebelum mulai dibangun sepenuhnya." },
            { title: "Pembuatan Website", desc: "Tim kami mengerjakan seluruh proses teknisnya dengan rapi dan aman hingga siap rilis." },
            { title: "Pengecekan Bersama", desc: "Anda dan tim meninjau kembali apakah semua informasi, gelar, dan nama sudah akurat." },
            { title: "Peluncuran & Penyerahan Akses", desc: "Website siap diakses publik dan kami berikan panduan cara memperbarui isinya nanti." }
          ]}
        />

        <ServiceFaq 
          faqs={[
            { q: "Apakah saya perlu menulis semua isi websitenya sendiri?", a: "Tidak perlu repot. Anda cukup memberikan poin-poin dasar perusahaan, dan tim kami akan merapikan kata-katanya agar terdengar lebih profesional dan meyakinkan." },
            { q: "Berapa banyak pengunjung yang bisa ditampung website ini?", a: "Kami menyediakan ruang penyimpanan khusus yang besar agar website Anda selalu lancar dan tidak down, meskipun sedang diakses oleh banyak klien sekaligus." },
            { q: "Bagaimana jika ada pergantian direksi atau alamat kantor?", a: "Sangat mudah. Anda atau staf Anda akan diberi akses khusus untuk mengganti foto, nama, atau alamat kapan saja tanpa perlu bantuan ahli." },
            { q: "Apakah email perusahaan (@namapt.com) sudah termasuk?", a: "Tentu. Kami akan bantu buatkan email resmi perusahaan agar komunikasi Anda dengan klien terlihat jauh lebih terpercaya dibanding menggunakan email biasa." }
          ]}
        />

        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
