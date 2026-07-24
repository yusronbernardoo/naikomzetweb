import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    await prisma.category.createMany({
      data: [
        { name: 'Katalog Produk & Company Profile', slug: 'katalog-produk-company-profile' },
        { name: 'Platform Layanan Digital', slug: 'platform-layanan-digital' }
      ],
      skipDuplicates: true
    });
    return NextResponse.json({ message: 'Categories seeded!' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
