'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Cog6ToothIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function AdminButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isAdmin = pathname === '/admin';

  if (isAdmin) {
    return (
      <Link 
        href="/"
        className="flex items-center gap-2 p-3 text-gray-600 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
      >
        <ShoppingBagIcon className="h-5 w-5" />
        <span>Back to Shop</span>
      </Link>
    );
  }

  return (
    <Link
      href="/admin/auth"
      className="w-full flex items-center gap-2 p-3 text-gray-600 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
    >
      <Cog6ToothIcon className="h-5 w-5" />
      <span>Admin Panel</span>
    </Link>
  );
}