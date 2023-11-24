import { lightness, themeColors } from "./colors";

export const themes = (color: ColorsName, mode: ThemeMode): AppTheme => {
  const primaryHue = themeColors[color];
  const modeColors = (color: number) => (mode === "DARK" ? 100 - color : color);
  return {
    colorPrimary: `hsl(${primaryHue}, 89%, 41%)`,
    colorPrimaryLight: `hsl(${primaryHue}, 89%, ${
      mode === "DARK" ? "40" : "60"
    }%,50%)`,
    colorPrimaryExtraLight: `hsl(${primaryHue}, 89%, ${
      mode === "DARK" ? "40" : "60"
    }%,10%)`,
    colorWhite: `hsl(0, 5%, ${modeColors(lightness.whiteLightness)}%)`,
    colorLight: `hsl(${primaryHue}, 5%, ${modeColors(
      lightness.lightLightness
    )}%)`,
    colorBlack: `hsl(${primaryHue}, 5%, ${modeColors(
      lightness.blackLightness
    )}%)`,
    colorDark: `hsl(${primaryHue}, 5%, ${modeColors(
      lightness.darkLightness
    )}%)`,
  };
};
