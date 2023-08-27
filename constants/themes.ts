import tokens from "./tokens";
import { lightColors, darkColors } from "./colors";

export const lightTheme = {
  text: tokens.color.textLight,
  background: tokens.color.backgroundLight,
  tint: tokens.color.tintLight,
  tabIconDefault: tokens.color.tabIconDefaultLight,
  tabIconSelected: tokens.color.tintLight,
  icon: tokens.color.iconLight,
  shadow: tokens.color.shadowLight,
  primaryButton: tokens.color.primaryButtonLight,
  primaryButtonText: tokens.color.primaryButtonTextLight,
  secondaryButton: tokens.color.secondaryButtonLight,
  secondaryButtonText: tokens.color.secondaryButtonTextLight,
  dangerButton: tokens.color.dangerButtonLight,
  dangerButtonText: tokens.color.dangerButtonTextLight,
  glassBackground: tokens.color.glassBackgroundLight,
  headerBackground: tokens.color.headerBackgroundLight,
};

export const darkTheme = {
  text: tokens.color.textDark,
  background: tokens.color.backgroundDark,
  tint: tokens.color.tintDark,
  tabIconDefault: tokens.color.tabIconDefaultDark,
  tabIconSelected: tokens.color.tintDark,
  icon: tokens.color.iconDark,
  shadow: tokens.color.shadowDark,
  primaryButton: tokens.color.primaryButtonDark,
  primaryButtonText: tokens.color.primaryButtonTextDark,
  secondaryButton: tokens.color.secondaryButtonDark,
  secondaryButtonText: tokens.color.secondaryButtonTextDark,
  dangerButton: tokens.color.dangerButtonDark,
  dangerButtonText: tokens.color.dangerButtonTextDark,
  glassBackground: tokens.color.glassBackgroundDark,
  headerBackground: tokens.color.headerBackgroundDark,
};

const themes = {
  light: {
    colors: {
      ...lightColors,
    },
  },

  dark: {
    colors: {
      ...darkColors,
    },
  },
};

export default themes;
