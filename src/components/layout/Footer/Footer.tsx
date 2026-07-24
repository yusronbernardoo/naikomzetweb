import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import styles from './Footer.module.css';

// Inline SVG Icons for Social Media
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487 2.982 1.285 2.982.858 3.529.808.545-.05 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.985-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  return (
    <footer id="kontak" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo/logonaikomzet.png" 
              alt="NaikOmzet Logo" 
              width={250} 
              height={80} 
              style={{ width: 'auto', height: '56px', objectFit: 'contain' }}
            />
          </Link>
          <p className={styles.description}>
            Kami membantu pemilik usaha merapikan bisnis yang berantakan. Tidak perlu lagi capek mencatat manual atau pusing mengatur stok. Mari buat kerjaan sehari-hari jadi jauh lebih ringan.
          </p>
          <div className={styles.socials}>
            <a href="https://instagram.com/naik.omzet" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className={styles.heading}>Layanan Kami</h4>
          <ul className={styles.linkList}>
            <li><Link href="/layanan/company-profile" className={styles.link}>Profil Usaha Online</Link></li>
            <li><Link href="/layanan/website-umkm" className={styles.link}>Toko Online</Link></li>
            <li><Link href="/layanan/sistem-rental" className={styles.link}>Sistem Jadwal Sewa</Link></li>
            <li><Link href="/layanan/crm-pos" className={styles.link}>Aplikasi Kasir Warung & Toko</Link></li>
            <li><Link href="/layanan/custom-web-app" className={styles.link}>Sistem Khusus Sesuai Pesanan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Perusahaan</h4>
          <ul className={styles.linkList}>
            <li><Link href="/#portfolio" className={styles.link}>Portfolio Pekerjaan</Link></li>
            <li><Link href="/#paket" className={styles.link}>Paket Harga</Link></li>
            <li><Link href="/#tentang" className={styles.link}>Tentang Kami</Link></li>
            <li><Link href="/#faq" className={styles.link}>Pusat Bantuan (FAQ)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Hubungi Kami</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <a href="https://wa.me/6282336756037?text=Halo%20NaikOmzet%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20dengan%20sistem%20yang%20Anda%20buat.%0A%0ASaya%20ingin%20konsultasi%20mengenai%20kebutuhan%20bisnis%20saya." className={styles.link} target="_blank" rel="noopener noreferrer">082336756037 (WA)</a>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a href="mailto:naikomzet.id@gmail.com" className={styles.link}>naikomzet.id@gmail.com</a>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <span className={styles.contactText}>Jl. Mertojoyo Selatan C7, Lowokwaru, Malang</span>
            </li>
            <li className={styles.contactItem}>
              <Clock size={16} className={styles.contactIcon} />
              <span className={styles.contactText}>Senin – Sabtu: 08.00 – 21.00 WIB</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} NaikOmzet.id. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Kebijakan Privasi</Link>
            <span className={styles.legalDivider}>|</span>
            <Link href="/terms" className={styles.legalLink}>Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
