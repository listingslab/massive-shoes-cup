import { PaletteMode } from "@mui/material"

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

      success: {
        main: mode === "dark" ? secondary : primary,
      },

      action: {
        active: mode === "light" ? secondary : primary,
      },

      background: {
        default:  mode === "dark" ? "#000" : "#FFF",
        paper: mode === "dark" ? primary : secondary,
      },
    },
  }
}
