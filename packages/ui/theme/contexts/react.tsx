import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { ThemeType } from '@overstacked/shared';
import { globalThemeManager, type ThemeState } from '../core';

const ThemeContext = createContext<ThemeState | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeType | string;
  themes?: Record<string, ThemeType>;
}

export function ThemeProvider({ children, initialTheme, themes }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(() => 
    globalThemeManager.currentTheme
  );
  const [currentThemeKey, setCurrentThemeKey] = useState<string>(() =>
    globalThemeManager.currentThemeKey
  );

  useEffect(() => {
    if (themes) {
      Object.entries(themes).forEach(([key, theme]) => {
        globalThemeManager.registerTheme(key, theme);
      });
    }

    if (initialTheme) {
      globalThemeManager.setTheme(initialTheme);
    }

    const unsubscribe = globalThemeManager.subscribe((theme, key) => {
      setCurrentTheme(theme);
      setCurrentThemeKey(key);
    });
    return unsubscribe;
  }, [initialTheme, themes]);

  const themeState: ThemeState = {
    current: currentTheme,
    currentThemeKey,
    availableThemes: globalThemeManager.availableThemes,
    setTheme: (theme: ThemeType | string) => globalThemeManager.setTheme(theme),
    setThemeByKey: (key: string) => globalThemeManager.setThemeByKey(key),
    toggleTheme: (...themes: (ThemeType | string)[]) => 
      globalThemeManager.toggleTheme(...themes),
    cycleThemes: (...themes: (ThemeType | string)[]) => 
      globalThemeManager.cycleThemes(...themes),
    registerTheme: (key: string, theme: ThemeType) => 
      globalThemeManager.registerTheme(key, theme),
    getTheme: (key: string) => globalThemeManager.getTheme(key),
  };

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeState {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}