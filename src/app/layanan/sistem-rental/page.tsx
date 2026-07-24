import React from 'react';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { 
  ServiceHero, ServiceProblem, ServiceSolution, 
  ServiceFeatures, ServiceTarget, ServiceTimeline, 
  ServiceFaq, ServiceCTA 
} from '@/components/services/ServiceLayout';
import { Calendar, PackageSearch, FileText, Bell, AlertCircle, Database, QrCode, FileCheck } from 'lucide-react';

export const metadata = {
  title: "Sistem Manajemen Bisnis Rental - NaikOmzet",
  description: "Digitalisasi bisnis rental Anda dengan fitur booking online, manajemen stok otomatis, dan notifikasi WhatsApp realtime.",
};

export default function SistemRentalPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <ServiceHero 
          title="Otomatisasi Bisnis Rental Anda, Tinggalkan Cara Manual"
          subtitle="Manajemen stok berantakan? Jadwal bentrok? Saatnya beralih ke Sistem Rental Pintar dari NaikOmzet yang mengurus semuanya secara otomatis 24/7."
        />

        <ServiceProblem 
          problems={[
            { icon: <AlertCircle size={24} />, title: "Jadwal Sering Bentrok", desc: "Mencatat booking di buku tulis sering menyebabkan double-booking yang merugikan pelanggan." },
            { icon: <AlertCircle size={24} />, title: "Stok Barang Hilang", desc: "Tidak tahu siapa yang sedang meminjam barang A dan kapan harus dikembalikan." },
            { icon: <AlertCircle size={24} />, title: "Pembayaran & Deposit Sulit Dilacak", desc: "Sering lupa menagih denda keterlambatan atau mengembalikan uang deposit pelanggan." }
          ]}
        />

        <ServiceSolution 
          title="Platform Manajemen Rental Lengkap"
          desc="Kami membangun sistem terpusat di mana pelanggan dapat melihat ketersediaan barang secara realtime, membooking, dan mengelola invoice tanpa Anda harus campur tangan."
          benefits={[
            "Mencegah Double Booking 100%",
            "Pelacakan Aset Realtime",
            "Notifikasi Pengingat Otomatis",
            "Pembayaran Digital & Deposit",
            "Database Pelanggan Aman",
            "Laporan Keuangan Instan"
          ]}
        />

        <ServiceFeatures 
          features={[
            { icon: <Calendar size={24} />, title: "Kalender Booking Pintar", desc: "Blokir tanggal secara otomatis jika barang sudah tersewa." },
            { icon: <PackageSearch size={24} />, title: "Inventory Tracking", desc: "Pantau status barang (Tersedia, Disewa, Dicuci, Rusak) secara live." },
            { icon: <Bell size={24} />, title: "WhatsApp Notifier", desc: "Kirim tagihan dan pengingat pengembalian otomatis ke WA pelanggan." },
            { icon: <QrCode size={24} />, title: "Scan QR Code", desc: "Proses pengambilan dan pengembalian barang super cepat dengan scan QR barcode." },
            { icon: <Database size={24} />, title: "Manajemen Deposit", desc: "Sistem otomatis menahan dan melacak uang jaminan (deposit) per transaksi." },
            { icon: <FileCheck size={24} />, title: "Invoice Generator", desc: "Buat tagihan PDF profesional hanya dengan satu klik." }
          ]}
        />

        <ServiceTarget 
          targets={["Rental Mobil & Motor", "Penyewaan Alat Berat", "Rental Kamera & Lensa", "Persewaan Gaun & Jas", "Rental Alat Camping", "Penyewaan Studio", "Penyewaan Mainan Anak"]}
        />

        <ServiceTimeline 
          steps={[
            { title: "Pemetaan Alur Bisnis", desc: "Kami mendiskusikan bagaimana SOP rental Anda berjalan saat ini." },
            { title: "Pembuatan Skema Database", desc: "Merancang relasi data antara barang, pelanggan, dan transaksi." },
            { title: "Desain UI/UX", desc: "Membuat antarmuka aplikasi yang mudah digunakan oleh kasir maupun pelanggan." },
            { title: "Development & Integrasi WA", desc: "Tim engineer merakit logika sistem dan menyambungkannya dengan API WhatsApp." },
            { title: "User Acceptance Test (UAT)", desc: "Anda dan tim mencoba aplikasi secara langsung untuk mencari bug." },
            { title: "Deployment & Training", desc: "Aplikasi diunggah ke server cloud dan kami melatih staf Anda cara menggunakannya." }
          ]}
        />

        <ServiceFaq 
          faqs={[
            { q: "Apakah sistem ini bisa menagih denda otomatis?", a: "Ya, sistem akan menghitung denda berdasarkan tarif keterlambatan per jam/hari yang Anda tentukan." },
            { q: "Bisakah diakses oleh banyak karyawan?", a: "Tentu, Anda bisa menambahkan multi-user dengan hak akses berbeda (misal: Kasir tidak bisa menghapus data)." },
            { q: "Apakah data saya aman?", a: "Sangat aman. Kami menggunakan enkripsi standar industri dan melakukan backup harian ke server terpisah." },
            { q: "Berapa kapasitas barang yang bisa dimasukkan?", a: "Unlimited (Tidak terbatas). Database dirancang untuk menangani jutaan baris data tanpa melambat." }
          ]}
        />

        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
