import { getCategories, getPortfolioById } from '@/lib/actions/portfolio';
import PortfolioForm from '../../PortfolioForm';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditPortfolioPage({ params }: { params: { id: string } }) {
  const categories = await getCategories();
  const portfolio = await getPortfolioById(params.id);

  if (!portfolio) {
    notFound();
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>Edit Portfolio</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Perbarui detail data portfolio.</p>
      </div>

      <PortfolioForm initialData={portfolio} categories={categories} />
    </div>
  );
}
