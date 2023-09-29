import React from "react"
import {
  // Box,
  IconButton,
  // Button,
} from "@mui/material"
import {
    Icon,
    // Font,
    useGoldlabelSelect,
    useGoldlabelDispatch,
    selectMode,
    toggleMode,
} from "../../Dashboard"

export default function ModeToggle() {
  const dispatch = useGoldlabelDispatch()
  const mode = useGoldlabelSelect(selectMode)
  const onToggle = () => {
    dispatch(toggleMode(mode === "light" ? "dark" : "light"))
  }

  return (<>
            <IconButton
              onClick={onToggle}
            >
              <Icon icon={mode === "dark" ? "light" : "dark"} color="secondary"/>
              
            </IconButton>
          </>)
}

/*
<Box sx={{mx:1.5}}>
                <Font>
                  {mode === "dark" ? "Light" : "Dark"}
                </Font>
              </Box>
*/