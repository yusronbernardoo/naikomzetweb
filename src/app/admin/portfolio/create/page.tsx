import { getCategories } from '@/lib/actions/portfolio';
import PortfolioForm from '../PortfolioForm';

export const dynamic = 'force-dynamic';

export default async function CreatePortfolioPage() {
  const categories = await getCategories();

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>Tambah Portfolio Baru</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Masukkan detail project portfolio yang telah Anda kerjakan.</p>
      </div>

      <PortfolioForm categories={categories} />
    </div>
  );
}
