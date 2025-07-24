import { Type, type Static } from "@sinclair/typebox";

export const Theme = Type.Object({
    colors: Type.Object({
        primary: Type.String(),
        onPrimary: Type.String(),
        background: Type.String(),
        onBackground: Type.String(),
        surface: Type.String(),
        onSurface: Type.String(),
        onSurfaceVariant: Type.String(),
        outline: Type.String(),
        error: Type.String(),
    }),
    spacing: Type.Object({
        xs: Type.String(),
        sm: Type.String(),
        md: Type.String(),
        lg: Type.String(),
        xl: Type.String(),
        xxl: Type.String(),
    }),
    font: Type.Object({
        
    })
});

export type ThemeType = Static<typeof Theme>;
