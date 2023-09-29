import {PaletteMode} from "@mui/material"
import { 
  setGoldlabelKey,
  notification,
} from "../../MassiveShoes"

export const toggleMode =
  (value: PaletteMode): any =>
  async (dispatch: any) => {
    try {
      dispatch(setGoldlabelKey({ key: "mode", value}))
    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
