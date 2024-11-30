'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import AdminAuthForm from '@/components/Admin/AdminAuthForm';

export default function AdminAuthPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <AdminAuthForm
          onSuccess={() => router.push('/admin')}
          onCancel={() => router.push('/')}
        />
      </div>
    </div>
  );
}