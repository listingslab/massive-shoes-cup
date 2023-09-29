import {EventShape} from "../../../../types"
import { 
  setGoldlabelKey,
  notification,
} from "../../Dashboard"

export const placeBet =
  (bet: any): any =>
  async (dispatch: any) => {
    try {
        console.log("bet", bet)
        //   dispatch(setGoldlabelKey({ key: "betslip", value: selectedEvent}))
    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
