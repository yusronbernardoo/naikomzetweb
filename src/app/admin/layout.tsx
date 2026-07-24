"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  Settings, 
  Users, 
  LogOut,
  Tag
} from 'lucide-react';
import styles from './AdminLayout.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Portfolio', href: '/admin/portfolio', icon: <FolderKanban size={20} /> },
    { name: 'Blog & Edukasi', href: '/admin/blog', icon: <FileText size={20} /> },
    { name: 'Layanan & Harga', href: '/admin/services', icon: <Tag size={20} /> },
    { name: 'Pengguna', href: '/admin/users', icon: <Users size={20} /> },
    { name: 'Pengaturan', href: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            Naik<span className={styles.logoAccent}>Omzet</span> <span style={{fontSize: '0.75rem', fontWeight: 'normal', color: '#666'}}>Admin</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div style={{ padding: '1rem' }}>
          <button className={styles.navItem} style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer' }}>
            <LogOut size={20} />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.main}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <h1 className={styles.topbarTitle}>Dashboard Overview</h1>
          <div className={styles.userProfile}>
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Admin NaikOmzet</span>
            <div className={styles.avatar}>A</div>
          </div>
        </header>

        {/* Page Content */}
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
