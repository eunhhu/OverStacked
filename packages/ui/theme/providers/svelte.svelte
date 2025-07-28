<script lang="ts">
  import { createThemeContext } from '../contexts/svelte';
  import type { ThemeType } from '@overstacked/shared';
  
  interface Props {
    initialTheme?: ThemeType | string;
    themes?: Record<string, ThemeType>;
  }
  
  let { initialTheme, themes }: Props = $props();
  
  const themeContext = createThemeContext(initialTheme, themes);

  $effect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      const current = themeContext.current;
      
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
  });
</script>

<slot />