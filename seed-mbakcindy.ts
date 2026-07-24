require('dotenv').config();
const { prisma } = require('./src/lib/prisma');

async function main() {
  console.log('Seeding new portfolio item: Mbak Cindy...');

  let catPOS = await prisma.category.findUnique({ where: { slug: 'point-of-sale-pos-restaurant-management' } });
  if (!catPOS) {
    catPOS = await prisma.category.create({
      data: { name: 'Point of Sale (POS) & Restaurant Management', slug: 'point-of-sale-pos-restaurant-management' }
    });
  }

  await prisma.portfolio.upsert({
    where: { slug: 'sego-sambel-mbak-cindy' },
    update: {
      title: 'Sego Sambel Mbak Cindy',
      description: 'Sistem Point of Sale (POS) yang dirancang khusus untuk membantu operasional bisnis kuliner. Dilengkapi dengan pengelolaan menu, kategori makanan dan minuman, transaksi penjualan, dashboard analitik, manajemen pesanan, serta autentikasi pengguna dalam antarmuka yang modern, responsif, dan mudah digunakan.',
      imageUrl: '/portfolio/mbakcindy.png',
      desktopUrl: 'https://dulcet-strudel-4e6ab7.netlify.app/',
      techStack: ['Point of Sale', 'Restaurant Management', 'Dashboard', 'Responsive', 'Modern UI', 'Full Stack'],
      isFeatured: false,
      categoryId: catPOS.id
    },
    create: {
      title: 'Sego Sambel Mbak Cindy',
      slug: 'sego-sambel-mbak-cindy',
      description: 'Sistem Point of Sale (POS) yang dirancang khusus untuk membantu operasional bisnis kuliner. Dilengkapi dengan pengelolaan menu, kategori makanan dan minuman, transaksi penjualan, dashboard analitik, manajemen pesanan, serta autentikasi pengguna dalam antarmuka yang modern, responsif, dan mudah digunakan.',
      imageUrl: '/portfolio/mbakcindy.png',
      desktopUrl: 'https://dulcet-strudel-4e6ab7.netlify.app/',
      techStack: ['Point of Sale', 'Restaurant Management', 'Dashboard', 'Responsive', 'Modern UI', 'Full Stack'],
      isFeatured: false,
      categoryId: catPOS.id
    }
  });

  console.log('Portfolio seeding complete!');
}

main().catch(console.error);
