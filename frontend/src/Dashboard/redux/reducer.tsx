import {
  GoldlabelShape,
  KeyValueShape,
} from "../../../../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../redux/store"

const initialState: GoldlabelShape = {
  mode: "dark",
  primary: "#dc1325",
  secondary: "#fff552",
  error: null,
  notify: null,
  loading: false,
  loaded: false,
  events: [],
}

export const goldlabelSlice = createSlice({
  name: "goldlabel",
  initialState,
  reducers: {
    setGoldlabelKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectError = (state: RootState) => state.error
export const selectMode = (state: RootState) => state.mode
export const selectNotify = (state: RootState) => state.notify
export const selectLoading = (state: RootState) => state.loading
export const selectLoaded = (state: RootState) => state.loaded
export const selectEvents = (state: RootState) => state.events
export const selectPrimary = (state: RootState) => state.primary
export const selectSecondary = (state: RootState) => state.secondary

export const { setGoldlabelKey } = goldlabelSlice.actions
export default goldlabelSlice.reducer
