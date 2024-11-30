'use client';

import { useEffect } from 'react';
import { Provider } from 'jotai';
import { useAtom } from 'jotai';
import { darkModeAtom } from '@/store/atoms';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}