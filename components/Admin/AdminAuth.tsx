'use client';

import React, { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

interface AdminAuthProps {
  onSuccess?: () => void;
}

export default function AdminAuth({ onSuccess }: AdminAuthProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = login(password);
    if (isValid) {
      onSuccess?.();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="space-y-6 pt-6">
      <div>
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-zinc-100">
          Admin Access
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-zinc-300">
          Please enter the admin password to continue
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            required
            className={error ? 'border-red-500' : ''}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}