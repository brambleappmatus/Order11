'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Bars3Icon, 
  XMarkIcon,
  ShoppingCartIcon,
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';
import CartSummary from '../Cart/CartSummary';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-2 rounded-lg bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors z-30"
        aria-label="Open menu"
      >
        <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-zinc-300" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-50 dark:bg-zinc-900 shadow-sm transform transition-transform duration-300 ease-in-out z-50 border-r border-gray-100 dark:border-zinc-800 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-zinc-300" />
        </button>

        <div className="p-4 flex flex-col h-full">
          <div className="mt-12 flex-grow">
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
              onClick={() => setIsOpen(false)}
            >
              <Cog6ToothIcon className="h-5 w-5" />
              <span>{isAdmin ? 'Back to Shop' : 'Admin Panel'}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}