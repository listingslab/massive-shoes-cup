import { 
  setGoldlabelKey,
  notification,
  store,
} from "../../Dashboard"

export const updateStake =
  (stake: number): any =>
  async (dispatch: any) => {
    try {
        const betslip = store.getState().betslip
        dispatch(setGoldlabelKey({ key: "betslip", value: {
            ...betslip,
            stake,
        }}))
    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
