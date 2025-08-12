// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token'); // cek login
    const visited = localStorage.getItem('visited'); // cek kunjungan pertama

    if (token || visited) {
      router.replace('/dashboard'); // user lama
    } else {
      localStorage.setItem('visited', 'true');
      router.replace('/landing'); // user baru
    }
  }, [router]);

  return null; // Tidak render apapun saat proses redirect
}
