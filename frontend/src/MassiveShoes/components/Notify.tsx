import * as React from 'react'
import {
  Snackbar,
  Alert,
} from "@mui/material"
import {
  Font,
  useGoldlabelDispatch,
  useGoldlabelSelect,
  selectNotify,
  setGoldlabelKey,
} from "../../MassiveShoes"

export default function Notifyer() {
  const dispatch = useGoldlabelDispatch()
  const notify = useGoldlabelSelect(selectNotify)
  if( !notify ) return null

  let {severity, message} = notify
  if ( typeof message !== "string") return null
  
  const closeSnackbar = () =>  dispatch(setGoldlabelKey({
    key: "notify", 
    value: null 
  }))

  return (
    <Snackbar
      open
      anchorOrigin={{ 
        vertical:"bottom", 
        horizontal:"center" 
      }}
      autoHideDuration={3500}
      onClose={closeSnackbar}
    >
      <Alert 
        variant="filled"
        onClose={closeSnackbar}
        // @ts-ignore
        severity={severity}>
          <Font color="white">{ message }</Font>
      </Alert>
    </Snackbar>
  )
}
