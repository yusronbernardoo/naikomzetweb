import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { ArrowRight, Monitor, Smartphone } from 'lucide-react';
import styles from './Portfolio.module.css';

import { prisma } from '@/lib/prisma';

export const metadata = {
  title: "Portfolio Klien - NaikOmzet Digital Agency",
  description: "Lihat hasil karya premium kami yang telah membantu ratusan UMKM meningkatkan omzetnya.",
};

export const dynamic = 'force-dynamic';

export default async function PortfolioPage() {
  const portfolios = await prisma.portfolio.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  });
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className="container">
            <h1 className={styles.title}>Karya Terbaik Kami</h1>
            <p className={styles.subtitle}>Bukti nyata bagaimana desain premium dan sistem terintegrasi mampu meningkatkan konversi klien kami hingga 300%.</p>
            
            <div className={styles.filters}>
              <button className={`${styles.filterBtn} ${styles.active}`}>Semua</button>
              <button className={styles.filterBtn}>Company Profile</button>
              <button className={styles.filterBtn}>Website UMKM</button>
              <button className={styles.filterBtn}>Sistem Rental</button>
            </div>
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={`container ${styles.grid}`}>
            {portfolios.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  {item.desktopUrl ? (
                    <a href={item.desktopUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                      <Image src={item.imageUrl} alt={item.title} fill className={styles.image} />
                    </a>
                  ) : (
                    <Image src={item.imageUrl} alt={item.title} fill className={styles.image} />
                  )}
                  <div className={styles.deviceIcons}>
                    <Monitor size={18} />
                    <Smartphone size={18} />
                  </div>
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{item.category?.name || 'Uncategorized'}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  
                  <div className={styles.techStack}>
                    {item.techStack?.map((tech: string) => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>

                  {item.slug === 'sekawan-putri-frozen-food' && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem', padding: '0.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '0.375rem', border: '1px solid var(--border-subtle)' }}>
                      <strong>Demo Account:</strong><br/>
                      Username: admin | Password: admin
                    </div>
                  )}

                  {item.slug === 'sego-sambel-mbak-cindy' && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem', padding: '0.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '0.375rem', border: '1px solid var(--border-subtle)' }}>
                      <strong>Demo Account:</strong><br/>
                      Role: Admin | Password: 1234
                    </div>
                  )}
                  
                  {item.desktopUrl ? (
                    <a href={item.desktopUrl} target="_blank" rel="noopener noreferrer" className={styles.viewBtn} style={{ textDecoration: 'none' }}>
                      Live Website <ArrowRight size={16} />
                    </a>
                  ) : (
                    <button className={styles.viewBtn}>
                      Lihat Case Study <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
