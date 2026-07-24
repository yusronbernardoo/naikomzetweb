'use client';

import { Trash2 } from 'lucide-react';
import { useTransition } from 'react';
import { deletePortfolio } from '@/lib/actions/portfolio';

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm('Apakah Anda yakin ingin menghapus portfolio ini?')) {
      startTransition(async () => {
        await deletePortfolio(id);
      });
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isPending}
      style={{ 
        padding: '0.25rem', 
        color: isPending ? '#9ca3af' : '#ef4444',
        cursor: isPending ? 'not-allowed' : 'pointer',
        background: 'none',
        border: 'none'
      }}
      title="Hapus"
    >
      <Trash2 size={18} />
    </button>
  );
}
