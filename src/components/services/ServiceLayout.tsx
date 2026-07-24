"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './ServiceLayout.module.css';

// 1. Hero
export function ServiceHero({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className={styles.heroTitle}
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className={styles.heroSubtitle}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className={styles.heroActions}
        >
          <Button size="lg" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}>
            Konsultasi Gratis
          </Button>
          <Button variant="ghost" size="lg" style={{ color: 'var(--color-secondary)' }}>
            Lihat Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// 2. Problem
export function ServiceProblem({ problems }: { problems: { icon: React.ReactNode, title: string, desc: string }[] }) {
  return (
    <section className={`${styles.section} ${styles.problem}`}>
      <div className="container">
        <h2 className={styles.problemTitle}>Masalah yang Sering Anda Alami</h2>
        <div className={styles.problemGrid}>
          {problems.map((p, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={styles.problemCard}
            >
              <div className={styles.problemIcon}>{p.icon}</div>
              <h3 style={{ fontSize: '1.125rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Solution & 4. Benefits
export function ServiceSolution({ title, desc, benefits }: { title: string, desc: string, benefits: string[] }) {
  return (
    <section className={`${styles.section} ${styles.solution}`}>
      <div className="container">
        <div className={styles.solutionCard}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{desc}</p>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <div key={i} className={styles.benefitItem}>
                <Check size={20} className={styles.benefitIcon} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Features
export function ServiceFeatures({ features }: { features: { icon: React.ReactNode, title: string, desc: string }[] }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>Fitur Unggulan</h2>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>{f.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Target Audience
export function ServiceTarget({ targets }: { targets: string[] }) {
  return (
    <section className={styles.section} style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Sangat Cocok Untuk</h2>
        <div className={styles.targetGrid}>
          {targets.map((t, i) => (
            <div key={i} className={styles.targetPill}>{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. Timeline
export function ServiceTimeline({ steps }: { steps: { title: string, desc: string }[] }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>Cara Kerja Kami</h2>
        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineNumber}>{i + 1}</div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 10. FAQ
export function ServiceFaq({ faqs }: { faqs: { q: string, a: string }[] }) {
  return (
    <section className={styles.section} style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>Pertanyaan Umum</h2>
        <div>
          {faqs.map((faq, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div key={i} className={styles.faqItem}>
                <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 11. Final CTA
export function ServiceCTA() {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Siap Meningkatkan Skala Bisnis Anda?</h2>
        <p style={{ color: 'var(--text-tertiary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
          Konsultasikan kebutuhan bisnis Anda sekarang. Gratis tanpa biaya tersembunyi.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button size="lg" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}>
            Hubungi WhatsApp
          </Button>
          <Button variant="ghost" size="lg" style={{ color: 'var(--color-secondary)', border: '1px solid var(--border-strong)' }}>
            Minta Penawaran
          </Button>
        </div>
      </div>
    </section>
  );
}
