'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortfolio, updatePortfolio } from '@/lib/actions/portfolio';

export default function PortfolioForm({ 
  initialData, 
  categories 
}: { 
  initialData?: any; 
  categories: any[]; 
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    categoryId: initialData?.categoryId || categories[0]?.id || '',
    clientName: initialData?.clientName || '',
    description: initialData?.description || '',
    imageUrl: initialData?.imageUrl || '/portfolio/placeholder.png',
    desktopUrl: initialData?.desktopUrl || '',
    mobileUrl: initialData?.mobileUrl || '',
    techStack: initialData?.techStack?.join(', ') || '',
    isFeatured: initialData?.isFeatured || false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert techStack string back to array
      const techStackArray = formData.techStack.split(',').map((t: string) => t.trim()).filter(Boolean);
      
      const payload = {
        ...formData,
        techStack: techStackArray,
      };

      if (initialData?.id) {
        await updatePortfolio(initialData.id, payload);
      } else {
        await createPortfolio(payload);
      }
      
      router.push('/admin/portfolio');
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat menyimpan data.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Judul Project *</label>
          <input required name="title" value={formData.title} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Slug</label>
          <input name="slug" value={formData.slug} onChange={handleChange} placeholder="Biarkan kosong agar di-generate otomatis" style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Kategori *</label>
          <select required name="categoryId" value={formData.categoryId} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Nama Klien</label>
          <input name="clientName" value={formData.clientName} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Deskripsi *</label>
        <textarea required name="description" value={formData.description} onChange={handleChange} rows={4} style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Tech Stack (pisahkan dengan koma)</label>
        <input name="techStack" value={formData.techStack} onChange={handleChange} placeholder="Contoh: React, Next.js, Tailwind" style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Thumbnail URL *</label>
          <input required name="imageUrl" value={formData.imageUrl} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Live Desktop URL</label>
          <input name="desktopUrl" value={formData.desktopUrl} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Live Mobile URL</label>
          <input name="mobileUrl" value={formData.mobileUrl} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input type="checkbox" id="isFeatured" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} style={{ width: '1rem', height: '1rem' }} />
        <label htmlFor="isFeatured" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Jadikan Featured (Muncul besar di homepage)</label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
        <button type="button" onClick={() => router.push('/admin/portfolio')} style={{ padding: '0.5rem 1.5rem', backgroundColor: '#f3f4f6', color: '#374151', borderRadius: '0.375rem', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
          Batal
        </button>
        <button type="submit" disabled={isSubmitting} style={{ padding: '0.5rem 1.5rem', backgroundColor: '#111827', color: '#fff', borderRadius: '0.375rem', fontWeight: 500, border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
          {isSubmitting ? 'Menyimpan...' : 'Simpan Data'}
        </button>
      </div>
    </form>
  );
}
