import React from "react"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"
import {
  makeTheme,
  useGoldlabelSelect,
  selectMode,
  selectPrimary,
  selectSecondary,
} from "../../MassiveShoes"

export default function MuiTheme(props: any) {
  const {children} = props
  const mode = useGoldlabelSelect(selectMode)
  const primary = useGoldlabelSelect(selectPrimary)
  const secondary = useGoldlabelSelect(selectSecondary)
  const customTheme = makeTheme(mode, primary, secondary)

  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>
        {children}
      </ThemeProvider>
    </>
  )
}
