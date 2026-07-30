"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import { 
  ArrowRight, ChevronDown, CheckCircle2, Zap, Search, Shield, 
  Smartphone, HeadphonesIcon, Award, Star, Building2, Check,
  LineChart, Users, TrendingUp, BarChart, CircleDot, Quote
} from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './HomeSections.module.css';

// ----------------------------------------------------------------------
// BUSINESS PROBLEMS SECTION (New)
// ----------------------------------------------------------------------
const problems = [
  { manual: "Order masih dicatat manual", auto: "Pesanan langsung tercatat sehingga tidak perlu menulis ulang." },
  { manual: "Chat pelanggan berantakan", auto: "Semua riwayat pelanggan tersimpan lebih rapi." },
  { manual: "Sulit mengecek sisa stok", auto: "Stok selalu terlihat sehingga tidak lagi bingung saat melayani pelanggan." },
  { manual: "Laporan lama dibuat", auto: "Laporan harian siap kapan saja tanpa menghitung satu per satu." }
];

export function HomeProblems() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={`container ${styles.splitLayout}`}>
        <div className={`${styles.splitHeader} ${styles.splitHeaderSticky}`}>
          <Reveal as="h2" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={styles.sectionTitle}
            style={{ textAlign: 'left', maxWidth: '100%', margin: '0 0 var(--space-4) 0' }}
          >
            Biar Anda Gak Pusing Lagi Urusan Operasional
          </Reveal>
          <Reveal as="p" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={styles.sectionDesc}
            style={{ textAlign: 'left' }}
          >
            Kami bantu merapikan hal-hal yang selama ini sering bikin repot, supaya Anda bisa lebih fokus melayani pembeli dan mengembangkan usaha.
          </Reveal>
        </div>

        <div className={styles.problemsGrid}>
          {problems.map((prob, i) => (
            <Reveal as="div" 
              key={i}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.problemCard}
            >
              <div className={styles.problemManual}>
                <span className={styles.problemIconFail}>❌</span>
                <span className={styles.problemTextFail}>{prob.manual}</span>
              </div>
              <div className={styles.problemDivider}>
                <ArrowRight size={18} className={styles.problemArrow} />
              </div>
              <div className={styles.problemAuto}>
                <span className={styles.problemIconSuccess}>✅</span>
                <span className={styles.problemTextSuccess}>{prob.auto}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// STATS SECTION (NEW - Phase 4)
// ----------------------------------------------------------------------
export function HomeStats() {
  const statsData = [
    { value: "500+", label: "Pemilik Usaha Terbantu", icon: <Users size={32} /> },
    { value: "98%", label: "Merasa Kerja Lebih Gampang", icon: <TrendingUp size={32} /> },
    { value: "24/7", label: "Siap Bantu Kalau Ada Masalah", icon: <Star size={32} /> },
    { value: "5x", label: "Lebih Cepat Dibanding Manual", icon: <BarChart size={32} /> }
  ];

  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className="container">
        <div className={styles.statsGrid}>
          {statsData.map((stat, i) => (
            <Reveal as="div" 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={styles.statBox}
            >
              <div className={styles.statIconWrapper}>{stat.icon}</div>
              <div className={styles.statContent}>
                <span className={styles.statBigValue}>{stat.value}</span>
                <span className={styles.statLabelText}>{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// WHY CHOOSE US
// ----------------------------------------------------------------------
const whyUsData = [
  { icon: <Zap size={32} />, title: "Dibuat Pas Sama Kebiasaan Anda", desc: "Kami yang menyesuaikan dengan cara Anda kerja, bukan sebaliknya. Gak perlu bingung belajar aplikasi baru yang ribet." },
  { icon: <Search size={32} />, title: "Gak Gampang Error Saat Ramai", desc: "Sistem tetap lancar biarpun pesanan lagi banyak-banyaknya, jadi pelanggan gak perlu nunggu lama." },
  { icon: <Smartphone size={32} />, title: "Pantau Toko Lewat HP", desc: "Lagi di luar kota? Anda tetap bisa cek penjualan dan ketersediaan barang hari ini langsung dari layar HP." },
  { icon: <HeadphonesIcon size={32} />, title: "Dibantu Terus Sampai Bisa", desc: "Gak perlu takut gaptek. Kami ajarin sampai lancar, dan kalau ada kendala tinggal WA kami aja." },
  { icon: <Shield size={32} />, title: "Gak Repot Ngetik Ulang", desc: "Hemat waktu dan tenaga admin Anda. Gak perlu lagi mindahin data dari nota ke buku laporan satu per satu." },
  { icon: <Award size={32} />, title: "Data Aman, Gak Bakal Ilang", desc: "Buku bisa basah atau hilang, tapi kalau pakai sistem, data penjualan Anda tersimpan aman dan rapi." }
];

export function HomeWhyUs() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <div className={styles.sectionHeaderLeft}>
          <Reveal as="h2" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={styles.sectionTitle}
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
          >
            Kenapa Ratusan Pemilik Usaha Percaya NaikOmzet?
          </Reveal>
          <Reveal as="p" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={styles.sectionDesc}
            style={{ maxWidth: '600px' }}
          >
            Karena kami mengerti, yang Anda butuhkan adalah kemudahan, bukan sistem yang malah bikin tambah repot.
          </Reveal>
        </div>

        <div className={styles.whyUsGrid}>
          {whyUsData.map((item, index) => (
            <Reveal as="div" 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.whyUsCard}
            >
              <div className={styles.whyUsIcon}>{item.icon}</div>
              <h3 className={styles.whyUsTitle}>{item.title}</h3>
              <p className={styles.whyUsDesc}>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// PRICING SECTION
// ----------------------------------------------------------------------
const pricingData = [
  {
    name: "Launch",
    prefix: "Mulai Dari",
    originalPrice: "999.000",
    price: "699.000",
    desc: "Pas buat Anda yang baru mau merapikan tampilan usaha di internet biar pelanggan lebih percaya.",
    shortDesc: "Tampil profesional di internet agar pelanggan percaya.",
    popular: false,
    cta: "Pilih Paket Ini",
    features: [
      "Profil Usaha Lengkap (5 Halaman)",
      "Bagus Dibuka di HP & Laptop",
      "Tombol Langsung Chat WA",
      "Gampang Dicari di Google Maps",
      "Sudah Termasuk Domain & Aman",
      "Gratis 2x Revisi Tampilan"
    ]
  },
  {
    name: "Starter",
    prefix: "Mulai Dari",
    originalPrice: "1.799.000",
    price: "1.299.000",
    desc: "Pas buat bisnis yang mulai ramai dan butuh sistem awal untuk terima pesanan online dengan rapi.",
    shortDesc: "Siap terima pesanan online dengan rapi.",
    popular: true,
    cta: "Tanya Dulu Boleh",
    features: [
      "Semua fitur di paket Launch",
      "Desain Spesifik Buat Bisnis Anda",
      "Bisa Tampil Katalog & Testimoni",
      "Mudah Masuk Halaman 1 Google",
      "Dibantu Setup Profil Bisnis Google",
      "Diajarin Cara Pakainya Sampai Bisa",
      "Gratis 5x Revisi Tampilan"
    ]
  },
  {
    name: "Business",
    prefix: "Mulai Dari",
    originalPrice: "2.699.000",
    price: "1.999.000",
    desc: "Pilihan tepat kalau usaha sudah jalan kencang dan butuh fitur kasir, absen, dan laporan otomatis.",
    shortDesc: "Otomatisasi laporan, kasir, & admin bisnis Anda.",
    popular: false,
    cta: "Lihat Detailnya",
    features: [
      "Semua yang ada di paket Starter",
      "Sistem Admin Buat Banyak Karyawan",
      "Bisa Terima Booking Online Sendiri",
      "Laporan Penjualan Keluar Otomatis",
      "Kirim Bukti Bayar Otomatis ke WA",
      "Keamanan Extra Biar Data Gak Ilang",
      "Bisa Tanya Kapan Aja (Support 24/7)"
    ]
  },
  {
    name: "Custom Solution",
    prefix: "Mulai",
    price: "Hubungi Kami",
    desc: "Khusus buat Anda yang punya pabrik, gudang, atau cara kerja usaha yang sangat spesifik.",
    shortDesc: "Sistem khusus untuk pabrik/gudang berskala besar.",
    popular: false,
    customPackage: true,
    cta: "Ceritain Kebutuhan Anda",
    features: [
      "Aplikasi Dibuat Sesuai Request",
      "Sistem Stok Barang Besar & Kasir",
      "Kerjaan Admin Jadi Otomatis",
      "Bisa Dilihat Jelas Sama Pelanggan",
      "Bisa Nyambung ke Sistem Lain",
      "Siap Tampung Ribuan Data Tiap Hari",
      "Ada 1 Orang Khusus Bantu Anda"
    ]
  }
];

export function HomePricing() {
  return (
    <section className={`${styles.section} ${styles.sectionPricing}`}>
      <div className={styles.pricingContainer}>
        <div className={styles.sectionHeader}>
          <Reveal as="h2" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Pilih Paket Sesuai Kebutuhan Usaha Anda
          </Reveal>
          <Reveal as="p" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`${styles.sectionDesc} hideOnMobile`}
          >
            Harga jelas di depan, gak ada biaya tersembunyi yang bikin kaget. Sesuaikan sama ukuran bisnis Anda sekarang.
          </Reveal>
          <Reveal as="p" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`${styles.sectionDesc} showOnMobile`}
          >
            Harga transparan, sesuaikan dengan ukuran bisnis Anda.
          </Reveal>
        </div>

        <div className={styles.pricingGrid}>
          {pricingData.map((plan, i) => (
            <Reveal as="div" 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
            >
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>{plan.name}</h3>
                
                {plan.popular && (
                  <div className={styles.pricingSubtextGold}>
                    ⭐ Paling Banyak Dipilih
                  </div>
                )}
                
                {plan.customPackage && (
                  <div className={styles.pricingSubtextCustom}>
                    Dibangun sesuai kebutuhan operasional bisnis Anda.
                  </div>
                )}

                <p className={`${styles.pricingDesc} hideOnMobile`}>{plan.desc}</p>
                {plan.shortDesc && (
                  <p className={`${styles.pricingDesc} showOnMobile`}>{plan.shortDesc}</p>
                )}
                <div className={styles.pricingPrice}>
                  <span className={styles.prefixText}>{plan.prefix}</span>
                  {plan.originalPrice && (
                    <div className={styles.originalPriceWrapper}>
                      <span className={styles.originalCurrency}>Rp</span>
                      <span className={styles.originalAmount}>{plan.originalPrice}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                    {plan.price !== "Hubungi Kami" && <span className={styles.currency}>Rp</span>}
                    <span className={plan.price === "Hubungi Kami" ? styles.amountCustom : styles.amount}>{plan.price}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className={styles.launchBadge}>Harga Launching</div>
                  )}
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.featureList}>
                  {plan.features.map(feat => (
                    <li key={feat}><Check size={20} className={styles.checkIcon} /> {feat}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.pricingFooter}>
                <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" style={{ width: '100%', textDecoration: 'none' }}>
                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    size="lg" 
                    style={{ 
                      width: '100%', 
                      ...(plan.popular ? { backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' } : {}) 
                    }}
                  >
                    {plan.cta} <ArrowRight size={16} />
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className={styles.pricingSocialProof}
        >
          <span><Shield size={16} className={styles.checkIcon} /> Konsultasi Awal 100% Gratis</span>
          <span className={styles.spDivider}>•</span>
          <span><CheckCircle2 size={16} className={styles.checkIcon} /> Tanpa Biaya Tersembunyi</span>
          <span className={styles.spDivider}>•</span>
          <span><HeadphonesIcon size={16} className={styles.checkIcon} /> Pendampingan Pasca-Peluncuran</span>
        </Reveal>

        <Reveal as="p" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className={styles.pricingDisclaimer}
        >
          Seluruh harga merupakan patokan awal. Biaya akhir akan disesuaikan dengan seberapa banyak fitur yang Anda butuhkan dan seberapa rumit sistemnya setelah kita ngobrol-ngobrol.
        </Reveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// PORTFOLIO SECTION (Upgraded 1 + 5 Grid)
// ----------------------------------------------------------------------
const portfolioData = [
  {
    id: 1,
    title: "Sahabat Motor",
    client: "Sahabat Motor",
    category: "Profil Usaha Online",
    desc: "Masalah: Pelanggan sulit mencari suku cadang dan bengkel kewalahan membalas pertanyaan satu per satu.\nSolusi: Dibuatkan tempat jualan sparepart online di mana pembeli bisa mencari barang, memesan, dan dijawab otomatis oleh Admin Pintar.\nManfaat: Pelanggan tidak perlu datang hanya untuk tanya stok, dan karyawan bengkel bisa fokus melayani perbaikan.",
    shortDesc: "Toko sparepart online dengan balas pesan otomatis.",
    tech: ["Katalog Sparepart", "Pesan Langsung", "Admin Pintar (AI)"],
    year: "2026",
    color: "#dc2626",
    featured: true,
    imageUrl: "/portfolio/sahabatmotor.png",
    liveUrl: "https://sahabatmotor.web.id/",
    buttonText: "Lihat Web"
  },
  {
    id: 2,
    title: "Najey",
    client: "Najey",
    category: "Sistem Pemesanan Online",
    desc: "Masalah: Bingung mengatur pesanan pelanggan yang masuk dari banyak chat.\nSolusi: Dibuatkan tempat khusus satu pintu untuk menerima pesanan dan pembayaran.\nManfaat: Tidak perlu begadang membalas chat. Semua pesanan dan pembayaran masuk otomatis 24 jam.",
    shortDesc: "Terima pesanan & pembayaran otomatis 24 jam.",
    tech: ["Terima Pesanan", "Bayar Otomatis", "Rekap Harian"],
    role: "Digital Partner",
    year: "2024",
    color: "#2563eb",
    featured: false,
    imageUrl: "/portfolio/najey.png",
    liveUrl: "https://spectacular-valkyrie-7a996c.netlify.app/",
    buttonText: "Lihat Contoh"
  },
  {
    id: 3,
    title: "Sekawan Putri Frozen Food",
    client: "Sekawan Putri",
    category: "Sistem Kasir & Catatan Stok",
    desc: "Masalah: Sering rugi karena stok barang beku selisih antara buku dan gudang.\nSolusi: Dibuatkan alat kasir yang langsung memotong stok tiap ada barang yang laku.\nManfaat: Laporan jualan harian beres dalam 5 menit, dan stok selalu pas tanpa dihitung manual.",
    shortDesc: "Kasir otomatis potong stok & laporan harian.",
    tech: ["Alat Kasir", "Cek Stok", "Laporan Keuntungan"],
    role: "Digital Partner",
    year: "2026",
    color: "#10b981",
    featured: false,
    imageUrl: "/portfolio/nafafrozenfood.png",
    liveUrl: "https://gleaming-biscochitos-a7a230.netlify.app/",
    buttonText: "Coba Sistem"
  },
  {
    id: 4,
    title: "Sego Sambel Mbak Cindy",
    client: "Mbak Cindy",
    category: "Sistem Kasir & Pesanan Dapur",
    desc: "Masalah: Dapur kewalahan dan pesanan sering salah saat warung lagi ramai.\nSolusi: Dibuatkan alat kasir yang langsung mengirim pesanan ke layar di dapur.\nManfaat: Pelayanan jadi jauh lebih cepat, tidak ada lagi pelanggan marah karena pesanannya tertukar.",
    shortDesc: "Kasir pintar terhubung langsung ke layar dapur.",
    tech: ["Kasir Warung", "Layar Dapur", "Menu Digital"],
    role: "Digital Partner",
    year: "2026",
    color: "#f59e0b",
    featured: false,
    imageUrl: "/portfolio/mbakcindy.png",
    liveUrl: "https://dulcet-strudel-4e6ab7.netlify.app/",
    buttonText: "Coba Sistem"
  }
];

const categories = ["Semua", "Profil Usaha Online", "Sistem Pemesanan Online", "Sistem Kasir & Catatan Stok", "Sistem Kasir & Pesanan Dapur"];

export function HomePortfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredData = activeFilter === "Semua" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);
    
  // Separate featured and regular for the 1 + 5 layout
  // If a category is selected, just show them as regular grid for simplicity
  const featuredItem = activeFilter === "Semua" ? filteredData.find(i => i.featured) : null;
  const gridItems = activeFilter === "Semua" ? filteredData.filter(i => !i.featured).slice(0, 3) : filteredData;

  // Reusable Mockup Component
  const PortfolioMockup = ({ item, isLarge = false }: { item: any, isLarge?: boolean }) => {
    if (item.imageUrl) {
      return (
        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.thumbnailWrapper}>
          <div className={styles.thumbnailImageContainer}>
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              fill 
              className={styles.thumbnailImage} 
              sizes="(max-width: 991px) 100vw, 50vw"
            />
            <div className={styles.thumbnailOverlay} />
          </div>
          <div className={styles.portfolioOverlayBadge} style={{ backgroundColor: item.color }}>{item.category}</div>
        </a>
      );
    }
    
    return (
    <div className={styles.portfolioImageWrap} style={{ backgroundColor: item.color + '15', paddingTop: isLarge ? 'var(--space-12)' : 'var(--space-8)' }}>
      <div className={`${styles.mockupDesktop} ${isLarge ? styles.mockupDesktopLg : ''}`} style={{ borderColor: item.color + '40' }}>
        <div className={styles.mockupBrowserBar}>
          <div className={styles.mockupDot} style={{ background: '#ff5f56' }}/>
          <div className={styles.mockupDot} style={{ background: '#ffbd2e' }}/>
          <div className={styles.mockupDot} style={{ background: '#27c93f' }}/>
        </div>
        <div className={styles.mockupContent} style={{ background: `linear-gradient(180deg, ${item.color}20 0%, var(--bg-primary) 100%)` }}>
          <div className={styles.mockupSkeletonHeader} style={{ background: item.color + '50', width: isLarge ? '40%' : '60%' }} />
          <div className={styles.mockupSkeletonBody} style={{ background: item.color + '10' }} />
        </div>
      </div>
      <div className={`${styles.mockupMobile} ${isLarge ? styles.mockupMobileLg : ''}`} style={{ borderColor: item.color + '40' }}>
         <div className={styles.mockupNotch} />
         <div className={styles.mockupContent} style={{ background: `linear-gradient(180deg, ${item.color}30 0%, var(--bg-primary) 100%)` }}>
           <div className={styles.mockupSkeletonHeader} style={{ background: item.color + '60' }} />
           <div className={styles.mockupSkeletonBody} style={{ background: item.color + '20' }} />
         </div>
      </div>
      <div className={styles.portfolioOverlayBadge} style={{ backgroundColor: item.color }}>{item.category}</div>
    </div>
    );
  };

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Reveal as="h2" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Contoh Bisnis yang Udah Go Digital
          </Reveal>
          <Reveal as="p" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={styles.sectionDesc}
          >
            Mulai dari toko grosir sampai penyewaan mobil, ini beberapa contoh sistem yang udah jalan dan ngebantu banget keseharian mereka.
          </Reveal>
        </div>

        <Reveal as="div" 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className={styles.filterContainer}
        >
          {categories.map(cat => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* FEATURED PROJECT */}
        <AnimatePresence mode="wait">
          {featuredItem && (
            <Reveal as="div" 
              key="featured"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, height: 0 }}
              className={`${styles.portfolioCard} ${styles.portfolioFeatured}`}
            >
              <PortfolioMockup item={featuredItem} isLarge={true} />
              <div className={styles.portfolioContentLg}>
                <div className={styles.portfolioHeaderLg}>
                  <h3 className={styles.portfolioTitleLg}>{featuredItem.title}</h3>
                  <p className={styles.portfolioClient}>
                    <Building2 size={16} style={{ display: 'inline', marginRight: '6px' }} />
                    {featuredItem.client} • {featuredItem.year}
                  </p>
                </div>
                <p className={`${styles.portfolioDescLg} hideOnMobile`}>{featuredItem.desc}</p>
                {featuredItem.shortDesc && <p className={`${styles.portfolioDescLg} showOnMobile`}>{featuredItem.shortDesc}</p>}
                
                <div className={`${styles.portfolioTech} hideOnMobile`}>
                  {featuredItem.tech.map(t => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  {featuredItem.title === 'Sekawan Putri Frozen Food' && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem', padding: '0.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '0.375rem', border: '1px solid var(--border-subtle)' }}>
                      <strong>Demo Account:</strong><br/>
                      Username: admin | Password: admin
                    </div>
                  )}
                  {featuredItem.title === 'Sego Sambel Mbak Cindy' && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem', padding: '0.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '0.375rem', border: '1px solid var(--border-subtle)' }}>
                      <strong>Demo Account:</strong><br/>
                      Role: Admin | Password: 1234
                    </div>
                  )}
                  {featuredItem.liveUrl ? (
                    <a href={featuredItem.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <Button size="lg" style={{ width: '100%' }}>{featuredItem.buttonText || 'Live Website'} <ArrowRight size={18} /></Button>
                    </a>
                  ) : (
                    <Button size="lg" style={{ width: '100%' }}>Lihat Studi Kasus <ArrowRight size={18} /></Button>
                  )}
                </div>
              </div>
            </Reveal>
          )}
        </AnimatePresence>

        {/* GRID PROJECTS */}
        <div className={styles.portfolioGrid}>
          <AnimatePresence mode="wait">
            {gridItems.map((item) => (
              <Reveal as="div" 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={styles.portfolioCard}
              >
                <PortfolioMockup item={item} />
                <div className={styles.portfolioContent}>
                  <h3 className={styles.portfolioTitle}>{item.title}</h3>
                  <p className={`${styles.portfolioClient} hideOnMobile`}>
                    {item.client}
                  </p>
                  <p className={`${styles.portfolioDesc} hideOnMobile`}>{item.desc}</p>
                  {item.shortDesc && <p className={`${styles.portfolioDesc} showOnMobile`}>{item.shortDesc}</p>}
                  
                  <div className={`${styles.portfolioTech} hideOnMobile`}>
                    {item.tech.map(t => (
                      <span key={t} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>

                  {item.title === 'Sekawan Putri Frozen Food' && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '1rem', padding: '0.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '0.375rem', border: '1px solid var(--border-subtle)' }}>
                      <strong>Demo Account:</strong><br/>
                      Username: admin | Password: admin
                    </div>
                  )}
                  
                  {item.title === 'Sego Sambel Mbak Cindy' && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '1rem', padding: '0.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '0.375rem', border: '1px solid var(--border-subtle)' }}>
                      <strong>Demo Account:</strong><br/>
                      Role: Admin | Password: 1234
                    </div>
                  )}

                  {item.liveUrl && (
                    <div style={{ marginTop: 'var(--space-6)' }}>
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="outline" size="sm" style={{ width: '100%', borderColor: 'var(--border-strong)', color: 'var(--text-secondary)' }}>
                          {item.buttonText || 'Live Website'} <ArrowRight size={14} />
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// TIMELINE / PROCESS SECTION (Modern)
// ----------------------------------------------------------------------
const processData = [
  { step: "01", title: "Ngobrol Santai", desc: "Ceritain aja repotnya di mana. Kita diskusi bareng buat cari solusi gampangnya.", icon: CircleDot },
  { step: "02", title: "Kami Buatin Contohnya", desc: "Biar ada bayangan, kami gambarin dulu tampilannya kira-kira nanti seperti apa.", icon: CircleDot },
  { step: "03", title: "Cek Bareng-Bareng", desc: "Anda cek hasilnya. Kalau udah pas dan setuju, baru kita lanjut.", icon: CircleDot },
  { step: "04", title: "Mulai Dikerjakan", desc: "Tim kami rakit aplikasinya. Anda tinggal tunggu beres aja.", icon: CircleDot },
  { step: "05", title: "Dicoba Sampai Lancar", desc: "Kita tes bareng buat pastiin gak ada yang macet atau error pas dipakai.", icon: CircleDot },
  { step: "06", title: "Siap Dipakai Jualan", desc: "Selesai! Kami bantu ajarin cara pakainya ke karyawan sampai pada mahir.", icon: CircleDot }
];

export function HomeProcess() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.splitLayout}`}>
        <div className={styles.splitHeaderSticky}>
          <Reveal as="h2" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Gimana Cara <br/><span className="text-gold">Mulainya?</span>
          </Reveal>
          <Reveal as="p" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={styles.sectionDesc}
            style={{ maxWidth: '400px' }}
          >
            Gak usah pusing mikirin teknisnya. Urutan kerjanya jelas, simpel, dan kami yang akan bantu nuntun dari awal sampai sistemnya nyala.
          </Reveal>
        </div>

        <div className={styles.timelineList}>
          {processData.map((step, index) => (
            <Reveal as="div" 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineDot}>
                <step.icon size={20} />
              </div>
              <div className={styles.timelineContentBox}>
                <div className={styles.timelineStepBadge}>Langkah {index + 1}</div>
                <h3 className={styles.timelineHeading}>{step.title}</h3>
                <p className={styles.timelineText}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// SOCIAL PROOF
// ----------------------------------------------------------------------
export function HomeSocialProof() {
  const reviews = [
    { text: "Dulu rekap pesanan pas rame sering kacau, banyak yang nggak ke-input. Sejak pakai sistem ini, semua pesanan dapur langsung rapi, kasir juga nggak bingung lagi nyocokin duit.", author: "Susianti Ayu", role: "Sego Sambel Mbak Cindy", img: "SA" },
    { text: "Dulu stok sering beda sama barang yang ada di toko. Sekarang tinggal buka sistem, semuanya langsung kelihatan. Nggak perlu rekap manual lagi akhir bulan.", author: "Nafa Az Zahra", role: "Sekawan Putri", img: "NA" },
    { text: "Kerjaan yang biasanya bikin pusing nyari sparepart sekarang jadi cepet. Pelanggan juga gampang kalau mau cek barang, jadi mekanik bisa lebih fokus ngerjain motor.", author: "Erson", role: "Sahabat Motor", img: "E" }
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Reveal as="h2" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Sudah Dipercaya Berbagai Bisnis di Indonesia
          </Reveal>
          <Reveal as="p"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={styles.sectionSubtitle}
            style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--text-secondary)' }}
          >
            Kami membantu berbagai jenis bisnis merapikan operasional, menghemat waktu, dan meningkatkan produktivitas.
          </Reveal>
        </div>

        <div className={styles.clientLogos}>
          <div className={styles.clientLogosTrack}>
            {[
              { src: "/logo/HUIZEJON.png", alt: "Huize Jon", scale: 2.1 },
              { src: "/logo/NAJEYAPP.png", alt: "Najey", scale: 1.9 },
              { src: "/logo/mbakcindy.png", alt: "Mbak Cindy", scale: 1.15 },
              { src: "/logo/sp.png", alt: "Sekawan Putri", scale: 1.35 },
              { src: "/logo/sm.png", alt: "Sahabat Motor", scale: 1.35 },
              { src: "/logo/mbc.png", alt: "MBC", scale: 1.4 },
              // Duplicate for infinite marquee effect on mobile
              { src: "/logo/HUIZEJON.png", alt: "Huize Jon 2", scale: 2.1, isClone: true },
              { src: "/logo/NAJEYAPP.png", alt: "Najey 2", scale: 1.9, isClone: true },
              { src: "/logo/mbakcindy.png", alt: "Mbak Cindy 2", scale: 1.15, isClone: true },
              { src: "/logo/sp.png", alt: "Sekawan Putri 2", scale: 1.35, isClone: true },
              { src: "/logo/sm.png", alt: "Sahabat Motor 2", scale: 1.35, isClone: true },
              { src: "/logo/mbc.png", alt: "MBC 2", scale: 1.4, isClone: true }
            ].map((client, i) => (
               <Reveal as="div" 
                 key={client.alt}
                 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.1 }}
                 className={`${styles.clientLogoImageWrapper} ${client.isClone ? styles.logoClone : ''}`}
               style={{ '--optical-scale': client.scale } as React.CSSProperties}
             >
               <Image 
                 src={client.src} 
                 alt={client.alt} 
                 fill 
                 className={styles.clientLogoImage} 
                 sizes="(max-width: 768px) 150px, 200px"
                 style={{ objectFit: 'contain' }}
               />
             </Reveal>
            ))}
          </div>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((rev, i) => (
            <Reveal as="div" 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
              className={styles.reviewCard}
            >
              <div className={styles.reviewHeader}>
                <div className={styles.avatarPremium}>{rev.img}</div>
                <div className={styles.reviewAuthorInfo}>
                  <h4 className={styles.authorName}>{rev.author}</h4>
                  <span className={styles.authorRole}>{rev.role}</span>
                </div>
                <div style={{ marginLeft: 'auto', alignSelf: 'flex-start' }}>
                  <Quote size={24} className={styles.quoteIcon} />
                </div>
              </div>
              <p className={styles.reviewText}>"{rev.text}"</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// ABOUT SECTION
// ----------------------------------------------------------------------
export function HomeAbout() {
  const values = ["Dengerin keluhan dulu", "Sistem ngikutin cara Anda", "Bikin kerjaan cepat beres", "Dibantu sampai bisa"];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <Reveal as="div" 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className={styles.aboutImageWrapper}
          >
             <div className={styles.aboutImageBlock}>
                <div className={styles.aboutImageDecor1} />
                <div className={styles.aboutImageDecor2} />
                <div className={styles.aboutImageInner}>
                  <h3>NaikOmzet.id</h3>
                  <p>Digital Agency Premium Indonesia</p>
                </div>
             </div>
          </Reveal>

          <Reveal as="div" 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className={styles.aboutContent}
          >
            <h2 className={styles.aboutTitle}>Banyak Orang Jualan Aplikasi, <span className="text-gold">Tapi Lupa Masalah Aslinya.</span></h2>
            <p className={styles.aboutDesc}>
              Banyak pemilik usaha yang kami temui mengeluh capek mengurus semuanya serba manual. Beli aplikasi yang sudah jadi, fiturnya malah bikin pusing. NaikOmzet hadir bukan untuk jualan website. Kami di sini untuk mendengarkan repotnya Anda di mana, lalu merakitkan alat bantu biar kerjaan itu lebih ringan. Gak perlu jago IT buat pakai sistem kami.
            </p>
            
            <div className={styles.valuesGrid}>
              {values.map((val, i) => (
                <div key={i} className={styles.valueItem}>
                  <div className={styles.valueIcon}><CheckCircle2 size={20} /></div>
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button size="lg">
                  Hubungi Tim Kami <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// FAQ SECTION (Upgraded)
// ----------------------------------------------------------------------
const faqs = [
  { q: "Saya gaptek dan gak paham IT, apa bisa pakai?", a: "Pasti bisa! Tampilannya kami buat sesederhana mungkin kayak Anda main HP biasa, dan kami ajarin sampai Anda dan karyawan benar-benar lancar." },
  { q: "Nanti kalau ada yang error gimana dong?", a: "Gak perlu khawatir. Tinggal chat WA tim kami. Kami siap bantu benerin tanpa biaya tambahan selama masa garansi." },
  { q: "Apa saya harus beli komputer baru yang mahal?", a: "Sama sekali nggak. Sistem kami bisa dibuka dari HP, tablet, atau laptop lama yang biasa Anda pakai di toko. Asal ada internet, langsung jalan." },
  { q: "Berapa lama selesainya?", a: "Kalau untuk website toko biasa sekitar 5-7 hari. Tapi kalau aplikasinya lumayan lengkap kayak kasir atau absensi, biasanya butuh 1-3 bulan biar hasilnya benar-benar pas." },
  { q: "Apa bedanya pakai NaikOmzet sama beli aplikasi yang udah jadi?", a: "Kalau aplikasi jadi, Anda yang harus ngikutin cara kerja aplikasinya. Kalau di NaikOmzet, aplikasinya kami buatin khusus ngikutin cara kerja warung atau toko Anda." }
];

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={`container ${styles.splitLayout}`}>
        <div className={`${styles.splitHeader} ${styles.splitHeaderSticky}`}>
          <Reveal as="h2" 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={styles.sectionTitle}
            style={{ textAlign: 'left', maxWidth: '100%', margin: '0 0 var(--space-4) 0' }}
          >
            Pertanyaan yang Sering Diajukan
          </Reveal>
          
          <div className={styles.searchContainer} style={{ margin: '0' }}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              type="text" 
              placeholder="Cari pertanyaan Anda..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <Reveal as="div" 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className={styles.faqWrapper}
        >
          {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => {
            const isActive = openIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ''}`}
                onClick={() => setOpenIndex(isActive ? null : index)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  <div className={`${styles.faqIconBox} ${isActive ? styles.active : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <Reveal as="div"
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.faqAnswer}
                    >
                      <div className={styles.faqAnswerInner}>{faq.a}</div>
                    </Reveal>
                  )}
                </AnimatePresence>
              </div>
            );
          }) : (
            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>Tidak ada pertanyaan yang cocok dengan pencarian Anda.</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// BOTTOM CTA (Upgraded Premium)
// ----------------------------------------------------------------------
export function HomeBottomCTA() {
  return (
    <section className={styles.bottomCtaSection}>
      <div className="container">
        <Reveal as="div" 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.bottomCtaWrapper}
        >
          {/* Background Effects */}
          <div className={styles.ctaPattern} />
          <div className={styles.ctaGlowLarge} />
          <div className={styles.ctaGlowSmall} />
          
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Yuk, Obrolin Repotnya Bisnis Anda!</h2>
            <p className={styles.ctaDesc}>Masih bingung harus mulai dari mana? Santai aja. Ceritain kesusahan operasional Anda ke tim kami, nanti kita cari bareng-bareng alat bantu yang paling pas buat ngeringanin kerjaan tiap hari.</p>
            <div className={styles.ctaActions}>
              <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button size="lg" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)', padding: '0 2.5rem' }}>
                  Ceritakan Kesusahan Bisnis Anda <ArrowRight size={18} />
                </Button>
              </a>
              <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--color-secondary)' }}>
                  Ngobrol Dulu via WA
                </Button>
              </a>
            </div>
          </div>
          
          {/* Mini Dashboard Illustration Decoration */}
          <div className={styles.ctaIllustration}>
            <div className={styles.ctaDashBar} />
            <div className={styles.ctaDashBody}>
               <div className={styles.ctaDashCard} />
               <div className={styles.ctaDashCard} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
