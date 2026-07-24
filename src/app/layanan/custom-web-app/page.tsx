import React from 'react';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { 
  ServiceHero, ServiceProblem, ServiceSolution, 
  ServiceFeatures, ServiceTarget, ServiceTimeline, 
  ServiceFaq, ServiceCTA 
} from '@/components/services/ServiceLayout';
import { Laptop, Cpu, Network, ShieldCheck, Code, Settings, Blocks, Users } from 'lucide-react';

export const metadata = {
  title: "Jasa Pembuatan Custom Web App (ERP/SaaS) - NaikOmzet",
  description: "Pengembangan perangkat lunak skala enterprise (ERP, HRIS, LMS) yang dirancang secara spesifik mengikuti alur bisnis unik perusahaan Anda.",
};

export default function CustomWebAppPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <ServiceHero 
          title="Sistem Khusus yang Ngikutin Cara Kerja Anda, Bukan Sebaliknya"
          subtitle="Punya alur kerja yang beda dari toko lain? Aplikasi yang ada di pasaran malah bikin pusing karena kaku? Kami buatkan alat bantu yang dirancang persis dengan kebiasaan bisnis Anda sehari-hari."
        />

        <ServiceProblem 
          problems={[
            { icon: <Blocks size={24} />, title: "Aplikasi Terasa Kaku", desc: "Anda terpaksa mengubah cara kerja karyawan hanya supaya cocok dengan aplikasi kasir atau stok yang Anda beli." },
            { icon: <Network size={24} />, title: "Kerja Dua Kali", desc: "Bagian gudang mencatat di buku, kasir pakai aplikasi, bos ngecek lewat Excel. Pekerjaan jadi dobel dan rawan salah." },
            { icon: <Settings size={24} />, title: "Bayar Bulanan Bikin Rugi", desc: "Semakin banyak cabang atau karyawan yang pakai sistem, tagihan aplikasi semakin mencekik pengeluaran tiap bulan." }
          ]}
        />

        <ServiceSolution 
          title="Alat Bantu Khusus untuk Bisnis Anda"
          desc="Kami tidak sekadar menjual aplikasi jadi. Kami membuat sistem dari nol yang 100% mengikuti cara Anda bekerja, bukan memaksa Anda belajar sistem baru."
          benefits={[
            "Disesuaikan dengan Kebiasaan Karyawan",
            "Milik Anda Sepenuhnya Selamanya",
            "Tanpa Biaya Langganan Bulanan Per-Akun",
            "Data Aman dan Tidak Campur Adukan",
            "Bisa Disambungkan dengan WhatsApp",
            "Sangat Ringan Dibuka dari HP"
          ]}
        />

        <ServiceFeatures 
          features={[
            { icon: <Laptop size={24} />, title: "Keuangan & Catatan Stok Menyatu", desc: "Semua urusan dari barang masuk gudang sampai terjual di kasir otomatis tersambung tanpa perlu dihitung ulang." },
            { icon: <Users size={24} />, title: "Sistem Absensi & Gaji Otomatis", desc: "Tidak perlu lagi pusing merekap jam lembur karyawan secara manual tiap akhir bulan." },
            { icon: <Code size={24} />, title: "Pemesanan Khusus Agen / Distributor", desc: "Bikin sistem sendiri buat agen atau reseller agar bisa langsung pesan barang tanpa harus antre lewat chat WA." },
            { icon: <Cpu size={24} />, title: "Alat Khusus Jasa & Rental", desc: "Sistem penjadwalan sewa barang atau jam layanan klinik yang otomatis bebas bentrok." },
            { icon: <ShieldCheck size={24} />, title: "Data Aman dan Tidak Bocor", desc: "Data pelanggan dan keuangan Anda tersimpan rapat, hanya Anda yang bisa melihatnya." }
          ]}
        />

        <ServiceTarget 
          targets={["Bengkel & Cuci Mobil", "Gudang & Distributor", "Usaha Rental & Jasa", "Klinik & Apotek", "Pabrik & Produsen Lokal"]}
        />

        <ServiceTimeline 
          steps={[
            { title: "Ceritakan Kebutuhan Bisnis Anda", desc: "Kita ngobrol santai. Anda ceritakan di mana bagian kerjaan operasional yang paling bikin repot setiap harinya." },
            { title: "Kami Pelajari Proses Kerja Saat Ini", desc: "Kami amati bagaimana karyawan Anda bekerja setiap hari agar sistemnya nanti tidak membingungkan mereka." },
            { title: "Kami Rancang Solusi Sederhana", desc: "Kami buatkan gambaran awal bentuk sistemnya seperti apa biar Anda terbayang hasilnya." },
            { title: "Sistem Mulai Dibuatkan", desc: "Tim kami mulai merakit alat bantu sesuai kesepakatan tanpa Anda perlu pusing urusan teknis." },
            { title: "Anda Coba dan Beri Masukan", desc: "Anda coba pakai langsung. Kalau ada yang masih kurang pas dengan kebiasaan, kita sesuaikan lagi." },
            { title: "Sistem Siap Dipakai & Kami Dampingi", desc: "Alat siap digunakan! Kami akan bantu ajari karyawan Anda sampai benar-benar lancar memakainya." }
          ]}
        />

        <ServiceFaq 
          faqs={[
            { q: "Siapa yang memiliki sistem ini nantinya?", a: "Sistem ini murni milik Anda selamanya. Tidak ada lagi tagihan langganan bulanan per pengguna atau per toko." },
            { q: "Berapa lama waktu untuk membuatnya?", a: "Tergantung kebutuhan. Alat bantu yang sederhana bisa beres dalam 1-2 bulan, kalau fiturnya cukup banyak dan lengkap bisa sedikit lebih lama." },
            { q: "Karyawan saya tidak paham komputer (gaptek), apa bisa pakai?", a: "Sangat bisa. Justru sistem ini dibuat sangat gampang (tinggal klik) karena dirancang khusus mengikuti kebiasaan mereka, bukan memaksa mereka belajar bahasa rumit." },
            { q: "Bagaimana kalau suatu saat bisnis saya bertambah cabang?", a: "Sistem bisa dengan mudah diperluas tanpa Anda harus membeli sistem baru dari nol." }
          ]}
        />

        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
