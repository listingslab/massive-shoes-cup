import * as React from 'react'
import {
  Box,
  Slider,
  TextField,
  Grid,
} from "@mui/material"
import {  
  useGoldlabelSelect,
  useGoldlabelDispatch,
  selectBetslip,
  updateStake,
} from "../../Dashboard"

export default function Stake() {
  const dispatch = useGoldlabelDispatch()
  const betslip = useGoldlabelSelect(selectBetslip)
  
  if(!betslip) return null
  const {stake} = betslip
  return (
    <Box sx={{}}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
                helperText="Stake"
                autoFocus
                fullWidth
                id="stake"
                type="number"
                value={stake}
                onChange={(e: any) => {
                  dispatch(updateStake(parseFloat(e.target.value)))
                }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{mx:2}}>
              <Box sx={{mb:4}}/>
              <Slider
                color="secondary"
                valueLabelDisplay="on"
                aria-label="Stake slider"
                value={stake}
                onChange={(e: Event) => {
                  // @ts-ignore
                  dispatch(updateStake(e.target.value))
                }}
              />
            </Box>
          </Grid>
        </Grid>
    </Box>
  )
}
