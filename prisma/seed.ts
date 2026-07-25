import { prisma } from '../src/lib/prisma'



async function main() {
  const cat1 = await prisma.category.upsert({
    where: { slug: 'profil-usaha-online' },
    update: {},
    create: { name: 'Profil Usaha Online', slug: 'profil-usaha-online' }
  })
  
  const cat2 = await prisma.category.upsert({
    where: { slug: 'sistem-pemesanan-online' },
    update: {},
    create: { name: 'Sistem Pemesanan Online', slug: 'sistem-pemesanan-online' }
  })

  const cat3 = await prisma.category.upsert({
    where: { slug: 'sistem-kasir-catatan-stok' },
    update: {},
    create: { name: 'Sistem Kasir & Catatan Stok', slug: 'sistem-kasir-catatan-stok' }
  })

  const cat4 = await prisma.category.upsert({
    where: { slug: 'sistem-kasir-pesanan-dapur' },
    update: {},
    create: { name: 'Sistem Kasir & Pesanan Dapur', slug: 'sistem-kasir-pesanan-dapur' }
  })

  await prisma.portfolio.upsert({
    where: { slug: 'sahabat-motor' },
    update: {},
    create: {
   title: 'Sahabat Motor',
      slug: 'sahabat-motor',
      description: 'Toko sparepart online dengan balas pesan otomatis.',
      imageUrl: '/portfolio/sahabatmotor.png',
      desktopUrl: 'https://sahabatmotor.web.id/',
      techStack: ['Katalog Sparepart', 'Pesan Langsung', 'Admin Pintar (AI)'],
      categoryId: cat1.id
    }
  })

  await prisma.portfolio.upsert({
    where: { slug: 'najey' },
    update: {},
    create: {
      title: 'Najey',
      slug: 'najey',
      description: 'Terima pesanan & pembayaran otomatis 24 jam.',
      imageUrl: '/portfolio/najey.png',
      desktopUrl: 'https://spectacular-valkyrie-7a996c.netlify.app/',
      techStack: ['Terima Pesanan', 'Barar Otomatis', 'Rekap Harian'],
      categoryId: cat2.id
    }
  })

  await prisma.portfolio.upsert({
    where: { slug: 'sekawan-putri-frozen-food' },
    update: {},
    create: {
      title: 'Sekawan Putri Frozen Food',
      slug: 'sekawan-putri-frozen-food',
      description: 'Kasir otomatis potong stok & laporan harian.',
      imageUrl: '/portfolio/nafafrozenfood.png',
      desktopUrl: 'https://gleaming-biscochitos-a7a230.netlify.app/',
      techStack: ['Alat Kasir', 'Cek Stok', 'Laporan Keuntungan'],
      categoryId: cat3.id
    }
  })

  await prisma.portfolio.upsert({
    where: { slug: 'sego-sambel-mbak-cindy' },
    update: {},
    create: {
      title: 'Sego Sambel Mbak Cindy',
      slug: 'sego-sambel-mbak-cindy',
      description: 'Kasir pintar terhubung langsung ke layar dapur.',
      imageUrl: '/portfolio/mbakcindy.png',
      desktopUrl: 'https://dulcet-strudel-4e6ab7.netlify.app/',
      techStack: ['Kasir Warung', 'Layar Dapur', 'Menu Digital'],
      categoryId: cat4.id
    }
  })
}

main().catch(console.error).finally(() => prisma.$disconnect())
