import {
  notification,
} from "../../MassiveShoes"
export const resetRedux = (): any => async (dispatch: any) => {
  try {
      localStorage.removeItem("persist:goldlabel")
      setTimeout(() => {
        window.location.reload()
      }, 200)
  } catch (error: any) {
    dispatch(notification("error", error))
  }
}
