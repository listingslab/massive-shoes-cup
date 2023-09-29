import React from "react"
import {
  Box,
    Button,
} from "@mui/material"
import {
    Icon,
    Font,
    useGoldlabelSelect,
    useGoldlabelDispatch,
    selectMode,
    toggleMode,
} from "../../MassiveShoes"

export default function ModeToggle() {
  const dispatch = useGoldlabelDispatch()
  const mode = useGoldlabelSelect(selectMode)
  const onToggle = () => {
    dispatch(toggleMode(mode === "light" ? "dark" : "light"))
  }

  return (<>
            <Button
              onClick={onToggle}
              variant="text"
            >
              <Icon icon={mode === "dark" ? "light" : "dark"} color="secondary"/>
              <Box sx={{mx:1.5}}>
                <Font>
                  {mode === "dark" ? "Light" : "Dark"}
                </Font>
              </Box>
            </Button>
          </>)
}
