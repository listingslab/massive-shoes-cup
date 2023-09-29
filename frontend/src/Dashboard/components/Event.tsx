import React from "react"
import {
    Chip,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from "@mui/material"
import {
    Font,
    useGoldlabelDispatch,
    // selectEvent,
    toggleBetslip,
} from "../../Dashboard"

export default function Event(props: any) {
  const {event} = props
  const dispatch = useGoldlabelDispatch()
  const {
    event_name, 
    odds,
  } = event

  const onSelect = () => {
    dispatch(toggleBetslip(event))
    return true
  }

  return (<>
            <ListItemButton onClick={onSelect}>
              <ListItemText 
                primary={<Font variant="title">
                  {event_name}
                </Font>}
              />
              <ListItemIcon>
                <Chip 
                  label={<Font>
                    {odds}
                  </Font>} 
                  color="primary"
                />
              </ListItemIcon>
            </ListItemButton>
          </>)
}
