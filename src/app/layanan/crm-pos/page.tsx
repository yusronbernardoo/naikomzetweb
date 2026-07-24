import React from 'react';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { 
  ServiceHero, ServiceProblem, ServiceSolution, 
  ServiceFeatures, ServiceTarget, ServiceTimeline, 
  ServiceFaq, ServiceCTA 
} from '@/components/services/ServiceLayout';
import { ShoppingCart, Users, Database, FileBarChart, Layers, Truck, ShieldAlert, BadgeDollarSign } from 'lucide-react';

export const metadata = {
  title: "Sistem CRM & POS Berbasis Web - NaikOmzet",
  description: "Kelola data pelanggan, kasir, inventaris, dan laporan penjualan dalam satu platform cloud yang tersinkronisasi.",
};

export default function CRMPosPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <ServiceHero 
          title="Aplikasi Kasir Warung & Toko yang Bikin Kerja Makin Gampang"
          subtitle="Tinggalkan mesin kasir kuno dan buku catatan manual yang bikin pusing. Pantau penjualan tiap hari, atur stok barang, dan kenali pelanggan setia Anda dengan satu alat yang super gampang dipakai."
        />

        <ServiceProblem 
          problems={[
            { icon: <ShieldAlert size={24} />, title: "Uang Kasir Sering Selisih", desc: "Susah melacak uang kembalian atau uang hilang karena semua masih dicatat pakai kertas secara manual." },
            { icon: <Layers size={24} />, title: "Sering Kehabisan Barang Laris", desc: "Catatan buku dan barang di gudang sering beda, tahu-tahu barang yang paling dicari pembeli sudah habis." },
            { icon: <Users size={24} />, title: "Pelanggan Jarang Balik Lagi", desc: "Karena tidak punya nomor kontak pelanggan, Anda tidak bisa mengabari mereka kalau ada barang baru atau promo." }
          ]}
        />

        <ServiceSolution 
          title="Semua Urusan Toko Beres di Satu Tempat"
          desc="Anda tidak perlu lagi mencocokkan nota kasir dengan catatan gudang secara manual. Begitu kasir menerima pembayaran, jumlah barang di gudang langsung berkurang saat itu juga."
          benefits={[
            "Bisa Dibuka dari Laptop, Tablet, atau HP",
            "Perubahan Transaksi Langsung Terlihat Saat Itu Juga",
            "Pantau Banyak Toko Sekaligus Tanpa Harus Datang",
            "Akses Berbeda untuk Kasir, Manajer, dan Pemilik",
            "Data Tetap Aman Meskipun Perangkat Rusak",
            "Mendukung Alat Scan Barcode & Cetak Struk"
          ]}
        />

        <ServiceFeatures 
          features={[
            { icon: <ShoppingCart size={24} />, title: "Alat Kasir Super Cepat", desc: "Catat belanjaan pembeli dengan cepat tanpa ribet, antrean panjang di kasir bisa langsung terurai." },
            { icon: <Database size={24} />, title: "Pengatur Stok Pintar", desc: "Stok lebih mudah dipantau. Sistem akan memberi tahu Anda jika ada barang yang jumlahnya sudah mau habis." },
            { icon: <Users size={24} />, title: "Pencatat Pelanggan Setia", desc: "Semua data pelanggan tersimpan rapi. Sangat gampang kalau mau bagi-bagi kupon diskon via WhatsApp." },
            { icon: <FileBarChart size={24} />, title: "Buku Laporan Otomatis", desc: "Tinggal buka HP sambil ngopi, Anda langsung tahu hari ini untung berapa dan barang apa yang paling laku." },
            { icon: <Truck size={24} />, title: "Catatan Kulakan Barang", desc: "Pemesanan barang ke supplier lebih rapi, hutang piutang ke agen besar tercatat jelas tanpa ada yang terlewat." },
            { icon: <BadgeDollarSign size={24} />, title: "Pengatur Harga & Diskon", desc: "Gampang bikin promo 'Beli 2 Gratis 1' atau harga coret, kasir tidak perlu menghitung manual lagi." }
          ]}
        />

        <ServiceTarget 
          targets={["Toko Kelontong & Minimarket", "Cafe & Restoran", "Toko Elektronik", "Distributor & Grosir Agen", "Toko Baju & Butik", "Apotek & Klinik", "Toko Bahan Bangunan"]}
        />

        <ServiceTimeline 
          steps={[
            { title: "Cerita Kondisi Toko", desc: "Kita ngobrol dulu tentang apa yang paling sering bikin pusing atau hilang di toko Anda sekarang." },
            { title: "Penyusunan Alat", desc: "Kami siapkan tombol-tombol pada alat kasir agar pas dan gampang dipencet sesuai cara jualan Anda." },
            { title: "Pemasangan Alat", desc: "Kami bantu sambungkan sistem ke printer struk, laci uang, atau alat scan barcode yang Anda punya." },
            { title: "Latihan Pemakaian", desc: "Kami ajari kasir dan penjaga toko Anda pelan-pelan sampai mereka benar-benar lancar memakainya." },
            { title: "Coba Langsung di Toko", desc: "Mulai dipakai untuk melayani pembeli asli. Tim kami akan mendampingi kalau ada yang masih bingung." },
            { title: "Toko Jalan Lebih Rapi", desc: "Kasir jalan lancar, antrean cepat beres, Anda tinggal memantau keuntungan dari rumah." }
          ]}
        />

        <ServiceFaq 
          faqs={[
            { q: "Bagaimana kalau pas jualan tiba-tiba lampu atau internet mati?", a: "Sistem kasir tetap bisa dipakai untuk melayani pembeli seperti biasa. Nanti saat internet nyala lagi, datanya otomatis disetorkan ke laporan Anda." },
            { q: "Berapa banyak jumlah barang yang bisa saya masukkan?", a: "Sebanyak-banyaknya. Toko grosir dengan puluhan ribu barang pun tidak akan membuat sistem ini menjadi lambat." },
            { q: "Apakah data keuntungan toko saya bisa bocor ke orang lain?", a: "Sama sekali tidak. Data toko Anda dikunci sangat rapat, dan kami terikat surat perjanjian rahasia untuk tidak melihat isi dompet bisnis Anda." },
            { q: "Bisa gak laporannya dicetak buat dikasih ke bagian keuangan?", a: "Sangat bisa. Anda bisa mengunduh rekap jualan harian dalam bentuk Excel kapan saja untuk diserahkan ke bagian keuangan." }
          ]}
        />

        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
