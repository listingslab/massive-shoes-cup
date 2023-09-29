import {PaletteMode} from "@mui/material"
import { 
  setGoldlabelKey,
  notification,
} from "../../Dashboard"

export const toggleMode =
  (value: PaletteMode): any =>
  async (dispatch: any) => {
    try {
      dispatch(setGoldlabelKey({ key: "mode", value}))
    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
