import type { ThemeType } from '@overstacked/shared';
import { basicLight } from './presets/basicLight';
import { basicDark } from './presets/basicDark';

export interface ThemeState {
  current: ThemeType;
  availableThemes: Record<string, ThemeType>;
  currentThemeKey: string;
  setTheme: (theme: ThemeType | string) => void;
  setThemeByKey: (key: string) => void;
  toggleTheme: (...themes: (ThemeType | string)[]) => void;
  cycleThemes: (...themes: (ThemeType | string)[]) => void;
  registerTheme: (key: string, theme: ThemeType) => void;
  getTheme: (key: string) => ThemeType | undefined;
}

export class ThemeManager {
  private listeners: Set<(theme: ThemeType, key: string) => void> = new Set();
  private _currentTheme: ThemeType = basicLight;
  private _currentThemeKey: string = 'basicLight';
  private _availableThemes: Record<string, ThemeType> = {};

  constructor() {
    this.registerTheme('basicLight', basicLight);
    this.registerTheme('basicDark', basicDark);
  }

  get currentTheme(): ThemeType {
    return this._currentTheme;
  }

  get currentThemeKey(): string {
    return this._currentThemeKey;
  }

  get availableThemes(): Record<string, ThemeType> {
    return { ...this._availableThemes };
  }

  setTheme(theme: ThemeType | string, key?: string): void {
    if (typeof theme === 'string') {
      const registeredTheme = this._availableThemes[theme];
      if (!registeredTheme) {
        console.warn(`Theme "${theme}" not found. Available themes: ${Object.keys(this._availableThemes).join(', ')}`);
        return;
      }
      this._currentTheme = registeredTheme;
      this._currentThemeKey = theme;
    } else {
      this._currentTheme = theme;
      this._currentThemeKey = key || `custom-${Date.now()}`;
      if (key) {
        this._availableThemes[key] = theme;
      }
    }
    this.notifyListeners();
  }

  setThemeByKey(key: string): void {
    this.setTheme(key);
  }

  registerTheme(key: string, theme: ThemeType): void {
    this._availableThemes[key] = theme;
  }

  getTheme(key: string): ThemeType | undefined {
    return this._availableThemes[key];
  }

  subscribe(listener: (theme: ThemeType, key: string) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this._currentTheme, this._currentThemeKey));
  }

  toggleTheme(...themes: (ThemeType | string)[]): void {
    if (themes.length < 2) {
      console.warn('toggleTheme requires at least 2 themes');
      return;
    }

    const resolvedThemes = themes.map(theme => {
      if (typeof theme === 'string') {
        const found = this._availableThemes[theme];
        if (!found) {
          console.warn(`Theme "${theme}" not found`);
          return null;
        }
        return { theme: found, key: theme };
      }
      return { theme, key: `custom-${Date.now()}` };
    }).filter(Boolean) as Array<{ theme: ThemeType; key: string }>;

    if (resolvedThemes.length < 2) return;

    const currentIndex = resolvedThemes.findIndex(t => t.theme === this._currentTheme);
    const nextIndex = currentIndex === -1 ? 1 : (currentIndex + 1) % resolvedThemes.length;
    const next = resolvedThemes[nextIndex];
    
    if (next) {
      this.setTheme(next.theme, next.key);
    }
  }

  cycleThemes(...themes: (ThemeType | string)[]): void {
    this.toggleTheme(...themes);
  }
}

export const globalThemeManager = new ThemeManager();