import { colors } from "./colors";
import { radius } from "./radius";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const lightTheme = {
  colors: {
    ...colors,

    background: "#F8FAFC",
    card: "#FFFFFF",

    text: "#0F172A",
    textSecondary: "#64748B",

    border: "#E2E8F0",
  },

  spacing,
  radius,
  typography,
};

export const darkTheme = {
  colors: {
    ...colors,

    background: "#0F172A",
    card: "#1E293B",

    text: "#FFFFFF",
    textSecondary: "#CBD5E1",

    border: "#334155",
  },

  spacing,
  radius,
  typography,
};
