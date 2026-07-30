"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import { Globe, Store, Laptop, BarChart, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: "Tampil Lebih Profesional & Mudah Ditemukan Pelanggan",
    description: "Biar pelanggan gampang cari info produk di Google tanpa harus selalu ditanya lewat chat. Orang otomatis lebih percaya kalau bisnis Anda jelas terlihat.",
    icon: <Store size={22} />,
    href: "/layanan/website-umkm",
    featured: true,
    benefits: [
      "Pelanggan gampang nemuin toko",
      "Kelihatan lebih profesional",
      "Langsung nyambung ke WA"
    ]
  },
  {
    title: "Jadwal Sewa Bebas Bentrok & Tagihan Selalu Pas",
    description: "Tidak perlu lagi coret-coret kalender. Semua jadwal, ketersediaan barang, dan denda terlambat terhitung otomatis.",
    icon: <ShoppingBag size={22} />,
    href: "/layanan/sistem-rental",
    featured: false,
    benefits: [
      "Jadwal sewa selalu rapi",
      "Ketahuan sisa barang berapa",
      "Tagihan terhitung otomatis"
    ]
  },
  {
    title: "Etalase Usaha yang Buka 24 Jam Non-Stop",
    description: "Kumpulan menu, karya, atau portofolio yang rapi bikin calon pembeli langsung yakin buat transaksi tanpa banyak mikir.",
    icon: <Globe size={22} />,
    href: "/layanan/company-profile",
    featured: false,
    benefits: [
      "Desain rapi dan elegan",
      "Gampang dibaca lewat HP",
      "Cocok buat narik klien besar"
    ]
  },
  {
    title: "Kelola Penjualan & Stok Barang Tanpa Ribet",
    description: "Catat pesanan lebih cepat, stok otomatis berkurang, dan sore harinya Anda tinggal lihat grafik keuntungan.",
    icon: <BarChart size={22} />,
    href: "/layanan/crm-pos",
    featured: false,
    benefits: [
      "Catat jualan tinggal klik",
      "Stok barang selalu update",
      "Bisa cek omzet dari HP"
    ]
  },
  {
    title: "Sistem Khusus yang Ngikutin Cara Kerja Anda",
    description: "Punya alur kerja yang beda dari bisnis lain? Kami buatkan alat bantu yang 100% pas sama kebiasaan harian Anda.",
    icon: <Laptop size={22} />,
    href: "/layanan/custom-web-app",
    featured: false,
    benefits: [
      "Dibuat pas sama maunya Anda",
      "Data dijamin aman",
      "Gampang dipakai karyawan"
    ]
  }
];

export function Services() {
  return (
    <section id="layanan" className={styles.section}>
      <div className={`container ${styles.servicesContainer}`}>
        <div className={styles.sectionHeaderLeft}>
          <span className={styles.subtitle}>Solusi Praktis</span>
          <h2 className={styles.title}>Biar Usaha Anda <br /><span className="text-gold">Makin Lancar</span></h2>
          <p className={styles.description}>
            Gak perlu bingung urusan teknis. Kami buatin sistem yang gampang dipakai biar kerjaan Anda cepat beres dan gak capek lagi.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const isFeatured = service.featured;
            
            return (
              <Reveal as="div"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.cardWrapper} ${isFeatured ? styles.wrapperFeatured : ''}`}
              >
                <Link href={service.href} className={`${styles.serviceCard} ${isFeatured ? styles.cardFeatured : ''}`}>
                  {isFeatured ? (
                    <div className={styles.featuredContentGrid}>
                      <div className={styles.featuredLeft}>
                        <div className={styles.iconWrapper}>
                          {service.icon}
                        </div>
                        <div>
                          <div className={styles.featuredSubtextGold}>⭐ Paling Banyak Dipilih</div>
                          <h3 className={styles.itemTitle}>{service.title}</h3>
                          <p className={styles.itemDesc}>{service.description}</p>
                        </div>
                      </div>
                      
                      <div className={styles.featuredRight}>
                        <div className={styles.cardBody}>
                          <ul className={styles.benefitList}>
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className={styles.featuredDivider}></div>

                        <div className={styles.itemFooter}>
                          <span>Pelajari lebih lanjut</span>
                          <ArrowRight size={18} className={styles.arrowIcon} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className={styles.itemTitle}>{service.title}</h3>
                          <p className={styles.itemDesc}>{service.description}</p>
                        </div>
                      </div>
                      
                      <div className={styles.cardBody}>
                        <ul className={styles.benefitList}>
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx}>
                              <CheckCircle2 size={16} className={styles.checkIcon} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.itemFooter}>
                        <span>Pelajari lebih lanjut</span>
                        <ArrowRight size={18} className={styles.arrowIcon} />
                      </div>
                    </>
                  )}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
