'use client';

import React, { useState } from 'react';
import { useStore } from '@/store/useStore';
import { Product } from '@/types/product';
import ProductList from '@/components/Products/ProductList';
import ProductModal from '@/components/Products/ProductModal';

export default function ProductsPage() {
  const { products } = useStore();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-zinc-100">
          Our Products
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div 
                className="h-48 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              />
              <h2 className="font-semibold text-gray-800 dark:text-zinc-100">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-zinc-300">
                €{product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div 
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="mb-4">€{selectedProduct.price.toFixed(2)}</p>
              <p className="mb-6">{selectedProduct.description}</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 text-gray-600 dark:text-zinc-300"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    useStore.getState().addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="px-4 py-2 bg-zinc-800 text-white rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}