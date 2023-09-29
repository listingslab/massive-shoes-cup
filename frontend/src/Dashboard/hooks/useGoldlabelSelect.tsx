import { TypedUseSelectorHook, useSelector } from "react-redux"
import type { RootState } from "../redux/store"
export const useGoldlabelSelect: TypedUseSelectorHook<RootState> = useSelector
