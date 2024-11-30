'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { useAuthStore } from '@/store/useAuthStore';
import AdminProductList from '@/components/Admin/AdminProductList';
import AdminProductForm from '@/components/Admin/AdminProductForm';

export default function AdminPage() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/auth');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="p-8 bg-white dark:bg-zinc-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-zinc-100">
            Admin Panel
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-zinc-800 dark:bg-zinc-700 text-white rounded-lg"
          >
            Add New Product
          </button>
        </div>

        {showForm && (
          <AdminProductForm
            editingProduct={editingProduct}
            onComplete={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
            onCancel={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
          />
        )}

        <AdminProductList
          onEdit={(product) => {
            setEditingProduct(product);
            setShowForm(true);
          }}
        />
      </div>
    </div>
  );
}