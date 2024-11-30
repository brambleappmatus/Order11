'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { darkModeAtom } from '@/store/atoms';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useAtom(darkModeAtom);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-zinc-900">
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="min-h-screen md:ml-64 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}