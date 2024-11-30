'use client';

import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import CartSummary from '@/components/Cart/CartSummary';
import AdminButton from '@/components/Admin/AdminButton';

export default function MobileNav() {
  return (
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
      <div className="mt-4">
        <AdminButton />
      </div>
    </div>
  );
}