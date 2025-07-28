import { writable, derived, type Readable } from 'svelte/store';
import { setContext, getContext } from 'svelte';
import type { ThemeType } from '@overstacked/shared';
import { globalThemeManager, type ThemeState } from '../core';

const THEME_CONTEXT_KEY = Symbol('theme');

export function createThemeContext(
  initialTheme?: ThemeType | string, 
  themes?: Record<string, ThemeType>
): ThemeState {
  const themeStore = writable<ThemeType>(globalThemeManager.currentTheme);
  const themeKeyStore = writable<string>(globalThemeManager.currentThemeKey);

  if (themes) {
    Object.entries(themes).forEach(([key, theme]) => {
      globalThemeManager.registerTheme(key, theme);
    });
  }

  if (initialTheme) {
    globalThemeManager.setTheme(initialTheme);
  }

  globalThemeManager.subscribe((theme, key) => {
    themeStore.set(theme);
    themeKeyStore.set(key);
  });

  const themeState: ThemeState = {
    current: globalThemeManager.currentTheme,
    currentThemeKey: globalThemeManager.currentThemeKey,
    availableThemes: globalThemeManager.availableThemes,
    setTheme: (theme: ThemeType | string) => {
      globalThemeManager.setTheme(theme);
    },
    setThemeByKey: (key: string) => {
      globalThemeManager.setThemeByKey(key);
    },
    toggleTheme: (...themes: (ThemeType | string)[]) => {
      globalThemeManager.toggleTheme(...themes);
    },
    cycleThemes: (...themes: (ThemeType | string)[]) => {
      globalThemeManager.cycleThemes(...themes);
    },
    registerTheme: (key: string, theme: ThemeType) => {
      globalThemeManager.registerTheme(key, theme);
    },
    getTheme: (key: string) => {
      return globalThemeManager.getTheme(key);
    },
  };

  setContext(THEME_CONTEXT_KEY, {
    theme: themeStore,
    themeKey: themeKeyStore,
    ...themeState
  });

  return themeState;
}

export function getThemeContext(): ThemeState & { 
  theme: Readable<ThemeType>; 
  themeKey: Readable<string>; 
} {
  const context = getContext<ThemeState & { 
    theme: Readable<ThemeType>; 
    themeKey: Readable<string>; 
  }>(THEME_CONTEXT_KEY);
  if (!context) {
    throw new Error('Theme context not found. Make sure to call createThemeContext in a parent component.');
  }
  return context;
}

export const theme = derived(
  [],
  () => globalThemeManager.currentTheme,
  globalThemeManager.currentTheme
);