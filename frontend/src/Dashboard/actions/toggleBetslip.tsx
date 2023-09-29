import {EventShape} from "../../../../types"
import { 
  setGoldlabelKey,
  notification,
} from "../../Dashboard"

export const toggleBetslip =
  (selectedEvent: EventShape | null): any =>
  async (dispatch: any) => {
    try {
      dispatch(setGoldlabelKey({ key: "betslip", value: selectedEvent}))
    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
