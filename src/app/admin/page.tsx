import React from 'react';
import { Users, Eye, TrendingUp, Briefcase } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Pengunjung', value: '12,450', increase: '+15%', icon: <Eye size={24} color="#d4af37" /> },
    { label: 'Total Leads (WA)', value: '342', increase: '+8%', icon: <Users size={24} color="#10b981" /> },
    { label: 'Portfolio Klien', value: '45', increase: '+2', icon: <Briefcase size={24} color="#3b82f6" /> },
    { label: 'Konversi', value: '2.7%', increase: '+0.5%', icon: <TrendingUp size={24} color="#8b5cf6" /> },
  ];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>{stat.label}</p>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>{stat.value}</h3>
              </div>
              <div style={{ padding: '0.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
                {stat.icon}
              </div>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>{stat.increase} <span style={{ color: '#6b7280', fontWeight: 400 }}>dari bulan lalu</span></p>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', border: '1px solid #e5e7eb', padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Leads Terbaru</h3>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Daftar prospek yang menghubungi via Formulir atau WhatsApp akan muncul di sini.</p>
        
        {/* Placeholder Table */}
        <div style={{ marginTop: '1.5rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500, color: '#6b7280' }}>Nama</th>
                <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500, color: '#6b7280' }}>Layanan Diminati</th>
                <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500, color: '#6b7280' }}>Tanggal</th>
                <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500, color: '#6b7280' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {['Budi Santoso', 'Rina Wijaya', 'Ahmad Reza'].map((name, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500 }}>{name}</td>
                  <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4b5563' }}>Website UMKM E-Commerce</td>
                  <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4b5563' }}>Hari ini, 10:30</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ padding: '4px 8px', backgroundColor: '#ecfdf5', color: '#10b981', fontSize: '0.75rem', borderRadius: '999px', fontWeight: 500 }}>Follow Up</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
