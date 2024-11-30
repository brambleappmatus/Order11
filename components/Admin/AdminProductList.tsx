'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatters';
import { PencilIcon, TrashIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

interface AdminProductListProps {
  onEdit: (product: Product) => void;
}

export default function AdminProductList({ onEdit }: AdminProductListProps) {
  const { products, deleteProduct, duplicateProduct } = useStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48 w-full">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 dark:text-zinc-100">
              {product.name}
            </h3>
            <p className="text-gray-600 dark:text-zinc-300">
              {formatPrice(product.price)}
            </p>
            <p className="text-gray-500 dark:text-zinc-400 text-sm mt-2">
              {product.description}
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => duplicateProduct(product.id)}
                className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-700 rounded-lg"
                title="Duplicate product"
              >
                <DocumentDuplicateIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => onEdit(product)}
                className="p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-zinc-700 rounded-lg"
                title="Edit product"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-zinc-700 rounded-lg"
                title="Delete product"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}