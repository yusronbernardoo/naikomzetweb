"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'Paket', id: 'paket' },
  { name: 'Layanan', id: 'layanan' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Tentang', id: 'tentang' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Kontak', id: 'kontak' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  // Handle Navbar Background Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Scroll Spy (Active Menu Indicator)
  useEffect(() => {
    if (pathname !== '/') return;

    const observers: IntersectionObserver[] = [];
    
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              // If the section is intersecting significantly, mark it active
              if (entry.isIntersecting) {
                setActiveSection(item.id);
              }
            });
          },
          { rootMargin: '-20% 0px -60% 0px' } // Trigger when element is near top
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [pathname]);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.container}`}>
          <Link href="/#hero" className={styles.logo}>
            <Image src="/logo/logonaikomzet.png" alt="NaikOmzet Logo" width={150} height={40} className={styles.logoImage} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navItems.map((item) => {
              const isActive = pathname === '/' && activeSection === item.id;
              return (
                <div key={item.id} className={styles.navItem}>
                  <Link 
                    href={`/#${item.id}`} 
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <motion.div 
                      layoutId="activePill"
                      className={styles.activeBackground}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <div className="hidden lg:block">
              <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="sm" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}>
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
            
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full Screen) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.mobileOverlay}
          >
            <nav className={styles.mobileNav}>
              {navItems.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/#${item.id}`} 
                  onClick={handleMobileNavClick}
                  className={`${styles.mobileNavLink} ${pathname === '/' && activeSection === item.id ? styles.active : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" onClick={handleMobileNavClick} style={{ textDecoration: 'none' }}>
                  <Button size="lg" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}>
                    Konsultasi Gratis
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
