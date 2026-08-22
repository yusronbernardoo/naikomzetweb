"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import { 
  ArrowRight, ChevronDown, CheckCircle2, Zap, Search, Shield, 
  Smartphone, HeadphonesIcon, Award, Star, Building2, Check,
  LineChart, Users, TrendingUp, BarChart, CircleDot, Quote, XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './HomeSections.module.css';

// -// ----------------------------------------------------------------------
// NARRATIVE SCROLL (Masalah & Solusi/Why Us)
// ----------------------------------------------------------------------
const problems = [
  { 
    title: "Administrasi Pembukuan", 
    manual: "3+ jam hilang tiap malam cuma buat ngitung ulang tumpukan nota.", 
    auto: "Rekap penjualan & untung-rugi otomatis selesai dalam 1 detik. Tinggal pantau dari HP." 
  },
  { 
    title: "Manajemen Order", 
    manual: "Sering telat balas chat WA, pembeli keburu kabur ke toko sebelah.", 
    auto: "100 chat pesanan masuk berbarengan pun, semua terlayani detik itu juga." 
  },
  { 
    title: "Kontrol Stok Gudang", 
    manual: "Di buku stok masih ada, pas dicek di gudang ternyata ludes. Ujung-ujungnya nombok selisih.", 
    auto: "Tiap pesanan masuk, stok otomatis kepotong. Data dan fisik akurat 100%, bye-bye nombok." 
  },
];

const whyUsData = [
  { icon: <Zap size={32} />, title: "Dibuat Pas Sama Kebiasaan Anda", desc: "Kami yang menyesuaikan dengan cara Anda kerja, bukan sebaliknya. Gak perlu bingung belajar aplikasi baru yang ribet." },
  { icon: <Search size={32} />, title: "Gak Gampang Error Saat Ramai", desc: "Sistem tetap lancar biarpun pesanan lagi banyak-banyaknya, jadi pelanggan gak perlu nunggu lama." },
  { icon: <Smartphone size={32} />, title: "Pantau Toko Lewat HP", desc: "Lagi di luar kota? Anda tetap bisa cek penjualan dan ketersediaan barang hari ini langsung dari layar HP." },
  { icon: <HeadphonesIcon size={32} />, title: "Dibantu Terus Sampai Bisa", desc: "Gak perlu takut gaptek. Kami ajarin sampai lancar, dan kalau ada kendala tinggal WA kami aja." },
  { icon: <Shield size={32} />, title: "Gak Repot Ngetik Ulang", desc: "Hemat waktu dan tenaga admin Anda. Gak perlu lagi mindahin data dari nota ke buku laporan satu per satu." },
  { icon: <Award size={32} />, title: "Data Aman, Gak Bakal Ilang", desc: "Buku bisa basah atau hilang, tapi kalau pakai sistem, data penjualan Anda tersimpan aman dan rapi." }
];

export function HomeNarrative() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={`container ${styles.splitLayout}`} style={{ marginBottom: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className={styles.splitHeader}>
          <div className={styles.splitHeaderSticky}>
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
              style={{ textAlign: 'left', marginBottom: 'var(--space-4)' }}
            >
              Kami bantu merapikan hal-hal yang selama ini sering bikin repot, supaya Anda bisa lebih fokus melayani pembeli dan mengembangkan usaha.
            </Reveal>
            <Reveal as="div"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="hideOnMobile"
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                <span className={styles.pulseDot} style={{ width: '8px', height: '8px', background: 'var(--color-accent)', borderRadius: '50%' }}></span>
                Scroll untuk melihat solusi kami
              </div>
            </Reveal>
          </div>
        </div>

        <div className={styles.narrativeScrollArea} style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Bagian Masalah -> Solusi */}
          <div className={styles.problemsGrid}>
            {problems.map((prob, i) => (
              <Reveal as="div" 
                key={i}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={styles.problemCard}
              >
                <div className={styles.problemManual}>
                  <span className={styles.problemLabel}>Cara Lama</span>
                  <span className={styles.problemTextFail}>{prob.manual}</span>
                </div>
                <div className={styles.problemDivider}>
                  {/* Arrow removed per user request */}
                </div>
                <div className={styles.problemAuto}>
                  <span className={styles.problemLabelAccent}>Naik Omzet</span>
                  <span className={styles.problemTextSuccess}>{prob.auto}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className={`container ${styles.splitLayout}`}>
        <div className={styles.splitHeader}>
          <div className={styles.splitHeaderSticky}>
            <Reveal as="h2"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={styles.sectionTitle}
              style={{ textAlign: 'left', maxWidth: '100%', margin: '0 0 var(--space-4) 0' }}
            >
              Kenapa Ratusan Pemilik Usaha Percaya NaikOmzet?
            </Reveal>
            <Reveal as="p" 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className={styles.sectionDesc}
              style={{ textAlign: 'left', marginBottom: 'var(--space-4)' }}
            >
              Sistem yang kami buat dirancang khusus untuk memahami kebutuhan bisnis Anda di lapangan.
            </Reveal>
          </div>
        </div>

        <div className={styles.narrativeScrollArea}>
          {/* Bagian Kenapa Kami */}
          <div className={`${styles.whyUsGrid} ${styles.narrativeWhyUsGrid}`}>
            {whyUsData.map((item, index) => (
              <Reveal as="div" 
                key={index}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`${styles.whyUsCard} ${styles.narrativeWhyUsCard}`}
              >
                <div className={styles.whyUsIcon}>{item.icon}</div>
                <div>
                  <h4 className={styles.whyUsTitle}>{item.title}</h4>
                  <p className={styles.whyUsDesc}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
            { value: "37+", label: "Klien & Bisnis Terbantu", icon: <Users size={32} /> },
    { value: "98%", label: "Tingkat Kepuasan Klien", icon: <TrendingUp size={32} /> },
    { value: "24/7", label: "Dukungan Tim Support", icon: <Star size={32} /> },
    { value: "5x", label: "Lebih Cepat Dari Manual", icon: <BarChart size={32} /> }
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
// PRICING SECTION
// ----------------------------------------------------------------------
const pricingData = [
          {
    name: "Web Profil Bisnis",
    prefix: "Mulai Dari",
    originalPrice: "1.199.000",
    price: "799.000",
    desc: "Target: Usaha yang belum ada di Google dan butuh wajah profesional agar lebih dipercaya pelanggan.",
    shortDesc: "Tampil profesional di internet agar pelanggan percaya.",
    popular: false,
    cta: "Pilih Paket Ini",
    features: [
      "1-2 Halaman Profil Usaha",
      "Setup Google Maps (Biar gampang dicari)",
      "Desain Responsif (Bagus di HP & Laptop)",
      "Tombol Link Chat ke WhatsApp",
      "Sudah Termasuk Domain & Keamanan"
    ]
  },
    {
    name: "Katalog Digital",
    prefix: "Mulai Dari",
    originalPrice: "3.500.000",
    price: "1.999.000",
    desc: "Target: Bisnis yang punya banyak produk tapi capek rekap orderan dan balas chat nanya harga manual.",
    shortDesc: "Katalog online untuk mempermudah pesanan.",
    popular: false,
    cta: "Tanya Dulu Boleh",
    features: [
      "Sistem Katalog Digital Lengkap",
      "Website Profil 5 Halaman (SEO Friendly)",
      "Tampilan Simpel & Siap Pakai",
      "Formulir Order (Pembeli Tinggal Isi)",
      "Pesanan Direkap Otomatis ke WhatsApp"
    ]
  },
      {
    name: "Sistem Otomatis",
    prefix: "Mulai Dari",
    originalPrice: "4.500.000",
    price: "2.999.000",
    desc: "Target: Usaha fisik/jasa yang operasionalnya berantakan, stok sering selisih, dan butuh otomatisasi penuh.",
    shortDesc: "Otomatisasi bisnis dari kasir sampai laporan.",
    popular: true,
    cta: "Ambil Paket Ini",
    features: [
      "Semua fitur di paket Katalog Digital PLUS:",
      "Sistem Kasir (POS) & Laporan Otomatis",
      "Hak Akses Multi-User (Admin & Bos)",
      "Notifikasi Transaksi Real-time",
      "Diajari Cara Pakai Sampai Bisa (Online)",
      "Grup WA Khusus (Prioritas Bantuan Teknis)"
    ]
  },
      {
    name: "Solusi Khusus",
    prefix: "Mulai",
    price: "Hubungi Kami",
    desc: "Khusus buat Anda yang butuh sistem kasir, manajemen stok gudang, pembukuan, atau aplikasi operasional yang rumit.",
    shortDesc: "Sistem khusus untuk bantu operasional bisnis skala besar.",
    popular: false,
    customPackage: true,
    cta: "Ceritain Kebutuhan Anda",
    features: [
      "Aplikasi Dibuat Khusus Sesuai Mau Anda",
      "Sistem Manajemen Bisnis (Kasir, Stok, dll)",
      "Kerjaan Rutin (SOP) Jadi Serba Otomatis",
      "Bisa Nyambung ke Aplikasi Lain (WA, Bank)",
      "Sistem Anti Lemot Walau Data Super Banyak",
      "Rahasia Data Bisnis Dijamin Aman (NDA)",
      "Ada 1 Tim Khusus yang Siap Bantu Anda"
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
    liveUrl: "https://najeypremium.netlify.app/",
    buttonText: "Lihat Contoh"
  },
  {
    id: 3,
    title: "Sekawan Putri Frozen Food",
    client: "Sekawan Putri",
    category: "Sistem Kasir & Catatan Stok",
    desc: "Masalah: Sering rugi karena stok barang beku selisih antara buku dan gudang.\nSolusi: Dibuatkan alat kasir yang langsung memotong stok tiap ada barang yang laku.\nManfaat: Laporan jualan harian beres dalam hitungan detik, dan stok selalu pas tanpa dihitung manual.",
    shortDesc: "Kasir otomatis potong stok & laporan harian.",
    tech: ["Alat Kasir", "Cek Stok", "Laporan Keuntungan"],
    role: "Digital Partner",
    year: "2026",
    color: "#10b981",
    featured: false,
    imageUrl: "/portfolio/nafafrozenfood.png",
    liveUrl: "https://frontend-liard-delta-56.vercel.app/",
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
    liveUrl: "https://segosambelmbakcindy.netlify.app/",
    buttonText: "Coba Sistem"
  },
  {
    id: 5,
    title: "Huize Jon Coffee",
    client: "Huize Jon",
    category: "Sistem Kasir & Pesanan Dapur",
    desc: "Masalah: Pencatatan pesanan kedai kopi sering salah dan antrean menjadi panjang.\nSolusi: Sistem Point of Sales (Kasir) khusus untuk memproses pesanan dengan cepat dan akurat.\nManfaat: Transaksi pelanggan dalam hitungan detik, dan rekap jualan harian langsung jadi otomatis.",
    shortDesc: "Sistem kasir super cepat khusus kedai kopi.",
    tech: ["Kasir Kedai Kopi", "Rekap Harian", "Menu Custom"],
    role: "Digital Partner",
    year: "2026",
    color: "#ea580c",
    featured: false,
    imageUrl: "/portfolio/huizejon.png",
    liveUrl: "https://huizejoncoffee.netlify.app/",
    buttonText: "Coba Sistem"
  },
  {
    id: 6,
    title: "Army Trans Malang",
    client: "Army Trans",
    category: "Profil Usaha Online",
    desc: "Masalah: Sulit menjangkau pelanggan baru secara online untuk jasa sewa mobil.\nSolusi: Dibuatkan website profil usaha yang profesional, lengkap dengan katalog armada.\nManfaat: Pelanggan lebih percaya dan mudah melakukan pemesanan sewa mobil.",
    shortDesc: "Website rental mobil profesional agar pelanggan lebih percaya.",
    tech: ["Web Profil", "SEO Basic", "Pesan via WA"],
    year: "2024",
    color: "#43953a",
    featured: false,
    imageUrl: "/portfolio/malangarmy.webp",
    liveUrl: "https://malangarmy.com/",
    buttonText: "Lihat Web"
  }
];

const categories = ["Semua", "Profil Usaha Online", "Sistem Pemesanan Online", "Sistem Kasir & Catatan Stok", "Sistem Kasir & Pesanan Dapur"];

export function HomePortfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredData = activeFilter === "Semua" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);
    
  // We just render everything in the grid
  const gridItems = filteredData;

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



        {/* GRID PROJECTS */}
        <div className={styles.portfolioGrid}>
          <AnimatePresence mode="popLayout">
            {gridItems.map((item) => (
              <motion.div 
                layout
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
                  <div className={`${styles.portfolioDesc} hideOnMobile`} style={{ textAlign: 'left' }}>
                    {item.desc.split('\n').map((line, i) => {
                      const colonIdx = line.indexOf(': ');
                      if (colonIdx !== -1 && ['Masalah', 'Solusi', 'Manfaat'].includes(line.substring(0, colonIdx))) {
                        return (
                          <div key={i} style={{ marginBottom: '0.25rem' }}>
                            <strong>{line.substring(0, colonIdx)}:</strong> {line.substring(colonIdx + 2)}
                          </div>
                        );
                      }
                      return <div key={i} style={{ marginBottom: '0.25rem' }}>{line}</div>;
                    })}
                  </div>
                  {item.shortDesc && <p className={`${styles.portfolioDesc} showOnMobile`}>{item.shortDesc}</p>}
                  
                  <div className={`${styles.portfolioTech} hideOnMobile`}>
                    {item.tech.map(t => (
                      <span key={t} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>

                  {item.title === 'Sekawan Putri Frozen Food' && (
                    <div className={styles.demoAccountBox}>
                      <strong>Cobain Sistemnya Langsung</strong><br/>
                      Username: admin | Password: admin
                    </div>
                  )}
                  
                  {item.title === 'Sego Sambel Mbak Cindy' && (
                    <div className={styles.demoAccountBox}>
                      <strong>Cobain Sistemnya Langsung</strong><br/>
                      Role: Admin | Password: 1234
                    </div>
                  )}
                  
                  {item.title === 'Huize Jon Coffee' && (
                    <div className={styles.demoAccountBox}>
                      <strong>Cobain Sistemnya Langsung</strong><br/>
                      Role: Owner | Password: 1234
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
              </motion.div>
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
    { 
      headline: "Rekap Pesanan Dapur Langsung Rapi",
      text: "Dulu rekap pesanan pas rame sering kacau, banyak yang nggak ke-input. Sejak pakai sistem ini, semua pesanan dapur langsung rapi, kasir juga nggak bingung lagi nyocokin duit.", 
            author: "Susianti Ayu", 
      role: "Sego Sambel Mbak Cindy", 
      logoSrc: "/logo/mbakcindy.png" 
    },
    { 
      headline: "Nggak Perlu Rekap Manual Lagi",
      text: "Dulu stok sering beda sama barang yang ada di toko. Sekarang tinggal buka sistem, semuanya langsung kelihatan. Nggak perlu rekap manual lagi akhir bulan.", 
      author: "Nafa Az Zahra", 
      role: "Sekawan Putri", 
      logoSrc: "/logo/sp.png" 
    },
    { 
      headline: "Mekanik Lebih Fokus Ngerjain Motor",
      text: "Kerjaan yang biasanya bikin pusing nyari sparepart sekarang jadi cepet. Pelanggan juga gampang kalau mau cek barang, jadi mekanik bisa lebih fokus ngerjain motor.", 
      author: "Erson", 
      role: "Sahabat Motor", 
      logoSrc: "/logo/sm.png" 
    }
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
                <div className={styles.avatarPremium}>
                  <Image src={rev.logoSrc} alt={rev.author} fill style={{ objectFit: 'contain', padding: '4px' }} />
                </div>
                <div className={styles.reviewAuthorInfo}>
                  <h4 className={styles.authorName}>{rev.author}</h4>
                  <span className={styles.authorRole}>{rev.role}</span>
                                    <div className={styles.reviewStars}>
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={14} className={styles.starIcon} />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.reviewContentWrapper}>
                <h5 className={styles.reviewHeadline}>&quot;{rev.headline}&quot;</h5>
                <p className={styles.reviewText}>{rev.text}</p>
              </div>
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
                                    <h3 className={styles.footerLogo}>naikomzet.web.id</h3>
                  <p>Spesialis Sistem Bisnis Otomatis</p>
                </div>
             </div>
          </Reveal>

          <Reveal as="div" 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className={styles.aboutContent}
          >
            <h2 className={styles.aboutTitle}>Banyak Orang Jualan Aplikasi, <span className="text-gold">Tapi Lupa Masalah Aslinya.</span></h2>
            <p className={styles.aboutDesc}>
              Banyak pengusaha capek ngurus bisnis serba manual, tapi beli aplikasi jadi malah bikin pusing. NaikOmzet hadir untuk merakit sistem yang pas dengan masalah Anda. Gak perlu jago IT, kami buat seringan mungkin.
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
            <p className={styles.ctaDesc}>Bingung mulai dari mana? Ceritain aja masalah bisnis Anda, biar kami bantu carikan solusi sistem yang paling pas.</p>
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
