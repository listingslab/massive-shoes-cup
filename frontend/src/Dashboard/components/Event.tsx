import React from "react"
import {
    // Box,
    Chip,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from "@mui/material"
import {
    // Icon,
    Font,
    useGoldlabelDispatch,
    // selectEvent,
} from "../../Dashboard"

export default function Event(props: any) {
  const {event} = props
  const dispatch = useGoldlabelDispatch()
  const {
    event_name, 
    odds,
  } = event

  const onSelect = () => {
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

/*
<pre>event: {JSON.stringify(event, null, 2)}</pre>
*/