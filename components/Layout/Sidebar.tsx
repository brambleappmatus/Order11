'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCartIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import CartSummary from '../Cart/CartSummary';

export default function Sidebar() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-50 dark:bg-zinc-900 shadow-sm border-r border-gray-100 dark:border-zinc-800">
      <div className="p-4 flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex items-center mb-8">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-zinc-300" />
            <span className="ml-2 font-semibold text-gray-800 dark:text-zinc-100">
              Shopping Cart
            </span>
          </div>
          <CartSummary />
        </div>
        <div className="border-t border-gray-200 dark:border-zinc-800 pt-4">
          <Link
            href={isAdmin ? '/' : '/admin/auth'}
            className="flex items-center gap-2 p-2 text-gray-600 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
          >
            <Cog6ToothIcon className="h-5 w-5" />
            <span>{isAdmin ? 'Back to Shop' : 'Admin Panel'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}