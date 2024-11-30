'use client';

import React from 'react';
import DesktopNav from './Navigation/DesktopNav';

export default function SideMenu() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-50 dark:bg-zinc-900 shadow-sm transition-all duration-300 border-r border-gray-100 dark:border-zinc-800">
      <DesktopNav />
    </div>
  );
}