'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatters';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 transition-transform duration-200 hover:shadow-xl hover:scale-[1.02] overflow-hidden"
    >
      <div className="aspect-square relative bg-gray-100 dark:bg-zinc-700">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 dark:text-zinc-500 text-sm italic">
              No Image
            </span>
          </div>
        ) : (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-zinc-100">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-zinc-300">
          {formatPrice(product.price)}
        </p>
      </div>
    </button>
  );
}