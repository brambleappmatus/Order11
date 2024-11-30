'use client';

import React, { useState } from 'react';
import { useStore } from '@/store/useStore';
import { Product } from '@/types/product';
import ProductGrid from '@/components/Products/ProductGrid';
import ProductModal from '@/components/Products/ProductModal';
import ThemeToggle from '@/components/Layout/ThemeToggle';

export default function ProductsPage() {
  const { products } = useStore();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="p-4 sm:p-8 relative z-0">
      <div className="max-w-7xl mx-auto">
        <ThemeToggle />
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 dark:text-zinc-100 mt-12">
          Our Products
        </h1>
        
        <ProductGrid
          products={products}
          onProductClick={setSelectedProduct}
        />

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </main>
  );
}