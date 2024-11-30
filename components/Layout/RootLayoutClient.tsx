'use client';

import React from 'react';
import MobileMenu from './MobileMenu';
import SideMenu from './SideMenu';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:block">
        <SideMenu />
      </div>
      <main className="min-h-screen md:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}