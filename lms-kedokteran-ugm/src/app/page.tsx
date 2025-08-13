'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const visited = localStorage.getItem('visited');

    if (visited) {
      // Sudah pernah lihat landing page
      router.replace('/login');
    } else {
      // Pertama kali
      localStorage.setItem('visited', 'true');
      router.replace('/landing');
    }
  }, [router]);

  return null; // Tidak render apapun
}
