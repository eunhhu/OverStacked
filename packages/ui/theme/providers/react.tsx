import React, { useEffect } from 'react';
import type { ThemeType } from '@overstacked/shared';
import { ThemeProvider as ReactThemeProvider, useTheme } from '../contexts/react';

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeType | string;
  themes?: Record<string, ThemeType>;
}

function ThemeStyleInjector() {
  const { current } = useTheme();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      
      Object.entries(current.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });
      
      Object.entries(current.spacing).forEach(([key, value]) => {
        root.style.setProperty(`--spacing-${key}`, value);
      });

      Object.entries(current.font).forEach(([key, value]) => {
        root.style.setProperty(`--font-${key}-family`, value.fontFamily);
        root.style.setProperty(`--font-${key}-weight`, value.fontWeight);
        root.style.setProperty(`--font-${key}-size`, value.fontSize);
        root.style.setProperty(`--font-${key}-line-height`, value.lineHeight);
        root.style.setProperty(`--font-${key}-letter-spacing`, value.letterSpacing);
      });
    }
  }, [current]);

  return null;
}

export function ThemeProvider({ children, initialTheme, themes }: ThemeProviderProps) {
  return (
    <ReactThemeProvider initialTheme={initialTheme} themes={themes}>
      <ThemeStyleInjector />
      {children}
    </ReactThemeProvider>
  );
}

// Export with consistent naming for React
export default ThemeProvider;