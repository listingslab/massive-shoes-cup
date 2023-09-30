import {EventShape} from "../../../../types"
import { 
  setGoldlabelKey,
  notification,
} from "../../Dashboard"

export const toggleBetslip =
  (selectedEvent: EventShape | null): any =>
  async (dispatch: any) => {
    try {
      let betslip: any = null
      if (selectedEvent) betslip = {
        ...selectedEvent,
        stake: 10,
      }
      dispatch(setGoldlabelKey({ key: "betslip", value: betslip}))
    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
