import React from "react"
import {
  Box,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogActions,
} from "@mui/material"
import {
    Icon,
    Font,
    useGoldlabelDispatch,
    useGoldlabelSelect,
    selectBetslip,
    toggleBetslip,
    placeBet,
    Stake,
} from "../../Dashboard"

export default function Betslip() {
  const betslip = useGoldlabelSelect(selectBetslip)
  const dispatch = useGoldlabelDispatch()
  let open = false
  let title: string= "Bet Slip"
  let cta: string = "Bet Now"
  let win: number = 0
  let odds: number = 0
  if (betslip) {
    const {stake, event_name} = betslip
    odds = betslip.odds
    win = Math.floor(stake*odds*100)/100
    open = true
    title = event_name
    cta = `Bet Now to win ${win}`
  }

  
  const onCancel = () => {
    dispatch(toggleBetslip(null))
    return true
  }

  const onBet = () => {
    dispatch(placeBet(win))
    return true
  }

  return (<>
            <Dialog 
              open={open}
              fullWidth
              maxWidth="xs"
              onClose={onCancel}
            >
              <DialogTitle>
                <Box sx={{}}>
                  <Font variant="title">
                    Bet on {title} at odds of {odds}
                  </Font>
                </Box>
              </DialogTitle>

              <DialogContent>
                <Stake />
              </DialogContent>
              
              <DialogActions>
                <Button
                  sx={{m:1}}
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={onBet}>
                  <Box sx={{mr:2, mt:0.5}}>
                    <Icon icon="rocket" />
                  </Box>
                    <Font>
                      {cta}
                    </Font>
                </Button>
              </DialogActions>

            </Dialog>
          </>)
}

/*
<pre>betslip: {JSON.stringify(betslip, null, 2)}</pre>
*/