'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { formatPrice } from '@/utils/formatters';

export default function CartSummary() {
  const { cart, removeFromCart, updateCartItemQuantity } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-zinc-400">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800 dark:text-zinc-100">
                  {item.name}
                </p>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value, 10))}
                    className="w-16 p-1 text-sm border rounded dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  />
                  <p className="text-sm text-gray-500 dark:text-zinc-400">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="pt-4 border-t dark:border-gray-700">
            <p className="font-semibold text-gray-800 dark:text-white">
              Total: {formatPrice(total)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}