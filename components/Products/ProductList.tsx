'use client';

import React from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

export default function ProductList({ products, onProductSelect }: ProductListProps) {
  if (!products.length) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-zinc-400">
        No products available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductSelect(product)}
        />
      ))}
    </div>
  );
}
