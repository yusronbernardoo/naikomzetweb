import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { Hero } from '@/components/home/Hero/Hero';
import { Services } from '@/components/home/Services/Services';
import { 
  HomePricing, HomePortfolio, HomeProcess, 
  HomeSocialProof, HomeAbout, HomeFaq, HomeBottomCTA,
  HomeStats, HomeNarrative
} from '@/components/home/HomeSections/HomeSections';
import { HomeTeam } from '@/components/home/HomeTeam/HomeTeam';

export const metadata: Metadata = {
  title: 'NaikOmzet | Digital Agency Premium untuk UMKM',
  description: 'NaikOmzet adalah mitra pertumbuhan UMKM. Kami menyediakan jasa pembuatan website company profile, sistem POS, CRM, dan custom web apps berkualitas internasional.',
  openGraph: {
    title: 'NaikOmzet | Digital Agency Premium',
    description: 'Transformasi digital untuk bisnis Anda dengan website profesional dan sistem operasional canggih.',
    url: 'https://naikomzet.web.id',
    siteName: 'NaikOmzet',
    images: [
      {
        url: 'https://naikomzet.web.id/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NaikOmzet",
    "image": "https://naikomzet.web.id/logo.png",
    "description": "Digital Agency Premium spesialis UMKM dan Perusahaan",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SCBD",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12190",
      "addressCountry": "ID"
    },
    "telephone": "+6281234567890",
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="cerita-bisnis"><HomeNarrative /></section>
        <section id="paket"><HomePricing /></section>
        <section id="layanan"><Services /></section>
        <section id="portfolio"><HomePortfolio /></section>
        <section id="statistik"><HomeStats /></section>
        <section id="tentang"><HomeAbout /></section>
        <section id="tim"><HomeTeam /></section>
        <section id="testimoni"><HomeSocialProof /></section>
        <section id="proses-kerja"><HomeProcess /></section>
        <section id="faq"><HomeFaq /></section>
        <section id="cta"><HomeBottomCTA /></section>
      </main>
      <Footer />
    </>
  );
}
