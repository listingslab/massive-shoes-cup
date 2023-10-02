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
  let stake = 1
  if (betslip) stake = betslip.stake
  if(!betslip) return null
  return (
    <Box sx={{mt:2}}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
                autoFocus
                fullWidth
                id="stake"
                label="Stake"
                type="number"
                variant="filled"
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
                min={1}
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
