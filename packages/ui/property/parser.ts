import type { ThemeType } from "@overstacked/shared";
import { globalThemeManager } from "../theme/core";

export const presets = {
    "full": "100%",
    "1/2": "50%",
    "1/4": "25%",
} as const;

export const parseValue = (value: string, theme: ThemeType = globalThemeManager.currentTheme): string => {
    // Color
    if (value in theme.colors) {
        return theme.colors[value as keyof typeof theme.colors];
    }
    
    // Spacing
    if (value in theme.spacing) {
        return theme.spacing[value as keyof typeof theme.spacing];
    }
    
    // Font (format: "bodyLarge-fontSize")
    const parts = value.split("-");
    if (parts.length === 2) {
        const [fontKey, fontProp] = parts;
        if (fontKey && fontProp && fontKey in theme.font) {
            const fontStyle = theme.font[fontKey as keyof typeof theme.font];
            if (fontProp in fontStyle) {
                return fontStyle[fontProp as keyof typeof fontStyle];
            }
        }
    }
    
    // Presets
    if (value in presets) {
        return presets[value as keyof typeof presets];
    }
    
    return value;
};
