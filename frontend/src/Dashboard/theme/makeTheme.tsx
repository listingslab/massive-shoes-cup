import { PaletteMode, lighten } from "@mui/material"

export function makeTheme(
  mode: PaletteMode,
  primary: string,
  secondary: string,
) {
  return {
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? primary : secondary,
      },
      secondary: {
        main: mode === "dark" ? secondary : primary,
      },
      action: {
        active: mode === "light" ? secondary : primary,
      },
      background: {
        default:  mode === "dark" ? lighten("#000", 0.25) : "#FFF",
        paper: mode === "dark" ? "#000" : secondary,
      },
    },
  }
}
