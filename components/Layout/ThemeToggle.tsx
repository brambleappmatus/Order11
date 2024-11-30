'use client';

import { useAtom } from 'jotai';
import { darkModeAtom } from '@/store/atoms';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`fixed top-4 right-4 p-2 rounded-lg transition-colors z-50 
        ${isDarkMode 
          ? 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700' 
          : 'bg-white text-zinc-700 hover:bg-gray-100 shadow-sm border border-gray-200'
        }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
}