import React from "react"
import {
    Box,
    Button,
} from "@mui/material"
import {
    Icon,
    Font,
    useGoldlabelDispatch,
    resetRedux,
} from "../../Dashboard"

export default function Reset() {
  const dispatch = useGoldlabelDispatch()

  return (<>
            <Button
              variant="text"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                dispatch(resetRedux())
              }}>
              <Icon icon="refresh" color="secondary"/>
              <Box sx={{mx:1.5}}>
                <Font>
                  Reset
                </Font>
              </Box>
            </Button>
          </>)
}
