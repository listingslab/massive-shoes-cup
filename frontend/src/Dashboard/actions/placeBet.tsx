import { 
  toggleBetslip,
  notification,
} from "../../Dashboard"

export const placeBet =
  (win: any): any =>
  async (dispatch: any) => {
    try {
        dispatch(toggleBetslip(null))
        dispatch(notification("success", `Nice one, you bet ${win}. Be Lucky`))

    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
