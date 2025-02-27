'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { Product } from '@/types/product';
import { generateId } from '@/utils/storage';

interface AdminProductFormProps {
  editingProduct: Product | null;
  onComplete: () => void;
  onCancel: () => void;
}

export default function AdminProductForm({
  editingProduct,
  onComplete,
  onCancel
}: AdminProductFormProps) {
  const { addProduct, editProduct } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        price: editingProduct.price.toString(),
        description: editingProduct.description,
        imageUrl: editingProduct.imageUrl
      });
    }
  }, [editingProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productData: Product = {
      id: editingProduct?.id || generateId(),
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      imageUrl: formData.imageUrl
    };

    if (editingProduct) {
      editProduct(productData);
    } else {
      addProduct(productData);
    }

    setFormData({ name: '', price: '', description: '', imageUrl: '' });
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onComplete();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-200">Product Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-100"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-200">Price (€)</label>
        <input
          type="number"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-100"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-200">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-100"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-200">Image URL</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-100"
          required
        />
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-zinc-800 dark:bg-zinc-700 text-white rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-600"
        >
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </div>
      {showSuccess && (
        <div className="text-green-600 dark:text-green-400 text-center">
          {editingProduct ? 'Product updated successfully!' : 'Product added successfully!'}
        </div>
      )}
    </form>
  );
}