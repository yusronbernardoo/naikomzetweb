"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, TrendingUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bgElements}>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          className={styles.textContent}
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <Sparkles size={16} />
            Bikin Bisnis Anda Jauh Lebih Rapi
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Bisnis Makin Ramai, Tapi Operasional Malah <span className={styles.highlight}>Makin Berantakan?</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={`${styles.description} hideOnMobile`}>
            Dari urusan stok hilang, jadwal sewa bentrok, sampai pelanggan komplain karena pelayanan lambat. Kami bantu buatkan sistem yang bikin kerjaan Anda jauh lebih rapi, cepat beres, dan gak bikin pusing.
          </motion.p>
          <motion.p variants={itemVariants} className={`${styles.description} showOnMobile`}>
            Kami buatkan sistem cerdas agar operasional bisnis Anda lebih rapi, cepat, dan anti pusing.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button size="lg" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}>
                Ceritakan Kesusahan Bisnis Anda <ArrowRight size={18} />
              </Button>
            </a>
            <Link href="#portfolio" scroll={true}>
              <Button variant="outline" size="lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--color-secondary)' }}>
                Lihat Contoh Sistem
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup - The Wow Factor */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className={styles.mockupContainer}
        >
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDot} />
              <div className={styles.mockupDot} />
              <div className={styles.mockupDot} />
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupSidebar}>
                {['75%', '60%', '45%', '80%', '55%'].map((width, i) => (
                  <div key={i} className={styles.mockupSkeletonLine} style={{ width }} />
                ))}
              </div>
              <div className={styles.mockupMain}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className={styles.mockupSkeletonLine} style={{ width: '30%', height: '80px', borderRadius: '8px' }} />
                  <div className={styles.mockupSkeletonLine} style={{ width: '30%', height: '80px', borderRadius: '8px' }} />
                  <div className={styles.mockupSkeletonLine} style={{ width: '30%', height: '80px', borderRadius: '8px' }} />
                </div>
                <div className={styles.mockupChart}>
                  <div className={styles.mockupChartLine} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className={`${styles.floatingCard} ${styles.floatingCard1}`}>
            <div className={`${styles.iconCircle} ${styles.gold}`}>
              <TrendingUp size={20} />
            </div>
            <div className={styles.floatText}>
              <h4>Laporan Siap</h4>
              <p>Gak perlu hitung lagi</p>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.floatingCard2}`}>
            <div className={`${styles.iconCircle} ${styles.green}`}>
              <MessageCircle size={20} />
            </div>
            <div className={styles.floatText}>
              <h4>Stok Aman</h4>
              <p>Otomatis berkurang</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
