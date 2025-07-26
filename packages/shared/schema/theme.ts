import { Type, type Static } from "@sinclair/typebox";

export const FontStyle = Type.Object({
    fontFamily: Type.String(),
    fontWeight: Type.String(),
    fontSize: Type.String(),
    lineHeight: Type.String(),
    letterSpacing: Type.String()
});

export const Theme = Type.Object({
    colors: Type.Object({
        primary: Type.String(),
        onPrimary: Type.String(),
        primaryContainer: Type.String(),
        background: Type.String(),
        onBackground: Type.String(),
        surface: Type.String(),
        onSurface: Type.String(),
        onSurfaceVariant: Type.String(),
        outline: Type.String(),
        tint: Type.String(),
        error: Type.String(),
    }),
    spacing: Type.Object({
        none: Type.String(),
        xs: Type.String(),
        sm: Type.String(),
        md: Type.String(),
        lg: Type.String(),
        'xl': Type.String(),
        '2xl': Type.String(),
        '3xl': Type.String(),
        '4xl': Type.String(),
        '5xl': Type.String(),
        '6xl': Type.String(),
    }),
    font: Type.Object({
        displayLarge: FontStyle,
        displayMedium: FontStyle,
        displaySmall: FontStyle,
        headlineLarge: FontStyle,
        headlineMedium: FontStyle,
        headlineSmall: FontStyle,
        titleLarge: FontStyle,
        titleMedium: FontStyle,
        titleSmall: FontStyle,
        bodyLarge: FontStyle,
        bodyMedium: FontStyle,
        bodySmall: FontStyle
    })
});

export type ThemeType = Static<typeof Theme>;
