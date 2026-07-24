import React from 'react';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { Check } from 'lucide-react';
import styles from './Harga.module.css';

const pricingTiers = [
  {
    name: "Website Company Profile",
    price: "4.9",
    isPopular: false,
    features: [
      "Desain Eksklusif (Non-Template)",
      "Responsif di Semua Perangkat",
      "Hingga 5 Halaman Utama",
      "Optimasi Kecepatan (PageSpeed > 90)",
      "Tombol Floating WhatsApp",
      "Gratis Hosting & Domain 1 Tahun"
    ],
    buttonText: "Pilih Paket Ini",
    buttonStyle: styles.actionSecondary
  },
  {
    name: "Website UMKM E-Commerce",
    price: "8.5",
    isPopular: true,
    features: [
      "Semua Fitur Company Profile",
      "Katalog Produk Dinamis",
      "Sistem Checkout ke WhatsApp",
      "Admin Panel Custom",
      "Integrasi Payment Gateway (Opsional)",
      "Optimasi SEO Basic",
      "Dukungan Prioritas 24/7"
    ],
    buttonText: "Tingkatkan Omzet Sekarang",
    buttonStyle: styles.actionPrimary
  },
  {
    name: "Custom Web App / ERP",
    price: "25+",
    isPopular: false,
    features: [
      "Sistem Kasir (POS) / Inventory / Rental",
      "Database Relasional (PostgreSQL)",
      "Dashboard Analitik Lengkap",
      "Manajemen Akses Multi-User",
      "Automasi WhatsApp",
      "Keamanan Setara Perbankan",
      "Dedicated Server"
    ],
    buttonText: "Hubungi Penjualan",
    buttonStyle: styles.actionSecondary
  }
];

export const metadata = {
  title: "Harga & Paket Layanan - NaikOmzet Digital Agency",
  description: "Investasi digital terbaik untuk mengembangkan bisnis Anda. Bandingkan paket layanan kami.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>Investasi Cerdas Untuk Bisnis</h1>
            <p className={styles.subtitle}>Tidak ada biaya tersembunyi. Semua paket dirancang khusus untuk memberikan Return on Investment (ROI) terbaik bagi bisnis Anda.</p>
          </div>
        </section>

        <section className="container">
          <div className={styles.grid}>
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`${styles.card} ${tier.isPopular ? styles.cardPopular : ''}`}>
                {tier.isPopular && <div className={styles.badge}>Paling Diminati</div>}
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>Rp</span>
                  <span className={styles.price}>{tier.price}</span>
                  <span className={styles.currency}>Juta</span>
                </div>
                
                <ul className={styles.features}>
                  {tier.features.map((feature, i) => (
                    <li key={i} className={styles.feature}>
                      <Check size={18} className={styles.iconCheck} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`${styles.action} ${tier.buttonStyle}`}>
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
