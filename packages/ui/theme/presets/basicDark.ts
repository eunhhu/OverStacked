import type { ThemeType } from "@overstacked/shared";
import { FontWeight } from "../util/fontWeight";

export const basicDark: ThemeType = {
  colors: {
    primary: "#F6516C",
    onPrimary: "#FFFFFF",
    primaryContainer: "#462B2F",
    background: "#26282B",
    onBackground: "#FFFFFF",
    surface: "#2E2F33",
    onSurface: "#6C707A",
    onSurfaceVariant: "#9B9FA6",
    outline: "#3E4146",
    tint: "#38393E",
    error: "#FF0000",
  },
  spacing: {
    none: "0",
    xs: "4px",
    sm: "6px",
    md: "10px",
    lg: "14px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "40px",
    "6xl": "48px",
  },
  font: {
    displayLarge: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.ExtraBold,
      fontSize: "40px",
      lineHeight: "46px",
      letterSpacing: "0%"
    },
    displayMedium: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.ExtraBold,
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "0%"
    },
    displaySmall: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.ExtraBold,
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "0%"
    },
    headlineLarge: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.SemiBold,
      fontSize: "28px",
      lineHeight: "34px",
      letterSpacing: "0%"
    },
    headlineMedium: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.Bold,
      fontSize: "24px",
      lineHeight: "28px",
      letterSpacing: "0%"
    },
    headlineSmall: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.Bold,
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0%"
    },
    titleLarge: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.SemiBold,
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "0%"
    },
    titleMedium: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.SemiBold,
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0%"
    },
    titleSmall: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.SemiBold,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0%"
    },
    bodyLarge: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.Medium,
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0%"
    },
    bodyMedium: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.Medium,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0%"
    },
    bodySmall: {
      fontFamily: "Pretendard",
      fontWeight: FontWeight.Medium,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0%"
    }
  }
}