import React from "react"
import {
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogActions,
} from "@mui/material"
import {
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
  if (betslip) {
    open = true
    title = betslip.event_name
  }
  // console.log("betslip", betslip)
  const onCancel = () => {
    dispatch(toggleBetslip(null))
    return true
  }

  const onBet = () => {
    dispatch(placeBet(betslip))
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
                <Font variant="title">
                  {title}
                </Font>
              </DialogTitle>

              <DialogContent>
                <Stake />
              </DialogContent>
              
              <DialogActions>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={onBet}
                >
                 <Font>
                  Place bet
                </Font>
                </Button>
              </DialogActions>

            </Dialog>
          </>)
}

/*
<pre>betslip: {JSON.stringify(betslip, null, 2)}</pre>
*/