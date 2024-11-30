'use client';

import React, { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

interface AdminAuthFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function AdminAuthForm({ onSuccess, onCancel }: AdminAuthFormProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = login(password);
    if (isValid) {
      onSuccess();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-zinc-100">
          Admin Access
        </h2>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="w-full p-2 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
          required
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 border rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-zinc-800 text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </form>
  );
}