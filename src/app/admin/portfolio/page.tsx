import React from 'react';
import { Plus, Edit } from 'lucide-react';
import Link from 'next/link';
import { getPortfolios } from '@/lib/actions/portfolio';
import DeleteButton from './DeleteButton';

export const dynamic = 'force-dynamic';

export default async function PortfolioAdmin() {
  const portfolios = await getPortfolios();

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e5e7eb', padding: '1.5rem', minHeight: '80vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>Manajemen Portfolio</h2>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Kelola daftar karya dan studi kasus klien Anda.</p>
        </div>
        <Link 
          href="/admin/portfolio/create"
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            backgroundColor: '#d4af37', color: '#111', 
            padding: '0.5rem 1rem', borderRadius: '0.5rem', 
            fontWeight: 600, fontSize: '0.875rem',
            textDecoration: 'none'
          }}
        >
          <Plus size={18} />
          Tambah Data
        </Link>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600, color: '#4b5563' }}>Judul Project</th>
              <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600, color: '#4b5563' }}>Kategori</th>
              <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600, color: '#4b5563' }}>Status</th>
              <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600, color: '#4b5563', textAlign: 'right' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  Belum ada data portfolio.
                </td>
              </tr>
            ) : null}
            
            {portfolios.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500 }}>{item.title}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4b5563' }}>
                  {item.category?.name || 'Tidak ada kategori'}
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: item.isFeatured ? '#fef3c7' : '#ecfdf5', 
                    color: item.isFeatured ? '#d97706' : '#10b981', 
                    fontSize: '0.75rem', borderRadius: '999px', fontWeight: 500 
                  }}>
                    {item.isFeatured ? 'Featured' : 'Published'}
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <Link href={`/admin/portfolio/edit/${item.id}`} style={{ padding: '0.25rem', color: '#3b82f6', marginRight: '0.5rem', display: 'inline-block' }}>
                    <Edit size={18} />
                  </Link>
                  <DeleteButton id={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
