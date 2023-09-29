import axios from "axios"
import { 
  setGoldlabelKey,
  notification,
} from "../../Dashboard"

export const fetchEvents = (): any =>
  async (dispatch: any) => {
    try {
      const endpoint = "http://localhost:4000/api/events"
      dispatch(setGoldlabelKey({ key: "loading", value: true}))

      axios.get(endpoint)
        .then(function (response) {
          
          const {code, severity, message} = response.data

          if (code !== 200){
            dispatch(setGoldlabelKey({ key: "error", value: {
              severity,
              message,
            }}))
          }
          if (code === 200){
            dispatch(setGoldlabelKey({ key: "events", value: response.data.data}))
          }
          // 
          dispatch(setGoldlabelKey({ key: "loading", value: false}))
          dispatch(setGoldlabelKey({ key: "loaded", value: true}))
        })
        .catch(function (error) {
          if (error.response) {
            dispatch(notification("error", `Server responded with a status code ${error.response.status}`))
          } else if (error.request) {
            dispatch(setGoldlabelKey({ key: "error", value: {
              severity: "info",
              message: "Start API and click RESET"
            }}))
            dispatch(notification("error", `No API @ ${endpoint}`))
          }
        })
    } catch (error: any) {
      dispatch(notification("error", error))
    }
}
