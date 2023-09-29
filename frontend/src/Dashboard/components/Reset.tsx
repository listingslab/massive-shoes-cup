import React from "react"
import {
  IconButton,
} from "@mui/material"
import {
    Icon,
    // Font,
    useGoldlabelDispatch,
    resetRedux,
} from "../../Dashboard"

export default function Reset() {
  const dispatch = useGoldlabelDispatch()

  return (<>
            <IconButton
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                dispatch(resetRedux())
              }}>
              <Icon icon="refresh" color="secondary"/>
            </IconButton>
          </>)
}

/*
<Box sx={{mx:1.5}}>
                <Font>
                  Reset
                </Font>
              </Box>
*/