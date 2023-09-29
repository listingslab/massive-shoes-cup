import {
    AlertColor,
} from "@mui/material"
import {setGoldlabelKey} from "../../Dashboard"

export const notification =
  (severity: AlertColor, message: string): any =>
  async (dispatch: any) => {
    try {
        const notifyObj: any = {
            severity, 
            message,
        }
        dispatch(setGoldlabelKey({ key: "notify", value: notifyObj }))
    } catch (error: any) {
      dispatch(setGoldlabelKey({ key: "notify", value: error.toString() }))
    }
  }
