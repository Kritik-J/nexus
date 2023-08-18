import tokens from "./tokens";
import { lightColors, darkColors } from "./colors";

export const lightTheme = {
  text: tokens.color.textColorLight,
  background: tokens.color.backgroundColorLight,
  tint: tokens.color.tintColorLight,
  tabIconDefault: tokens.color.tabIconDefaultLight,
  tabIconSelected: tokens.color.tintColorLight,
  icon: tokens.color.iconColorLight,
  shadow: tokens.color.shadowColorLight,
  primaryButtonColor: tokens.color.primaryButtonColorLight,
  primaryButtonTextColor: tokens.color.primaryButtonTextColorLight,
  secondaryButtonColor: tokens.color.secondaryButtonColorLight,
  secondaryButtonTextColor: tokens.color.secondaryButtonTextColorLight,
  dangerButtonColor: tokens.color.dangerButtonColorLight,
  dangerButtonTextColor: tokens.color.dangerButtonTextColorLight,
  glassBackground: tokens.color.glassBackgroundLight,
};

export const darkTheme = {
  text: tokens.color.textColorDark,
  background: tokens.color.backgroundColorDark,
  tint: tokens.color.tintColorDark,
  tabIconDefault: tokens.color.tabIconDefaultDark,
  tabIconSelected: tokens.color.tintColorDark,
  icon: tokens.color.iconColorDark,
  shadow: tokens.color.shadowColorDark,
  primaryButtonColor: tokens.color.primaryButtonColorDark,
  primaryButtonTextColor: tokens.color.primaryButtonTextColorDark,
  secondaryButtonColor: tokens.color.secondaryButtonColorDark,
  secondaryButtonTextColor: tokens.color.secondaryButtonTextColorDark,
  dangerButtonColor: tokens.color.dangerButtonColorDark,
  dangerButtonTextColor: tokens.color.dangerButtonTextColorDark,
  glassBackground: tokens.color.glassBackgroundDark,
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
