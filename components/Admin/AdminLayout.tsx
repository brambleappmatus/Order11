'use client';

import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import AdminAuth from './AdminAuth';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-zinc-900 z-50">
        <AdminAuth />
      </div>
    );
  }

  return <>{children}</>;
}