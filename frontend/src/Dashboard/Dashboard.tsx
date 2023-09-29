import React from "react"
import {
  Container,
  CssBaseline,
} from "@mui/material"
import {
  WrapRedux,
  MuiTheme,
  Events,
  Betslip,
  Notify,
} from "../Dashboard"

export default function Dashboard() {

  return (<>
            <WrapRedux>
              <MuiTheme>
                <CssBaseline />
                <Betslip />
                <Notify />
                <Container maxWidth={"sm"}>
                  <Events />
                </Container>
              </MuiTheme>
            </WrapRedux>
          </>)
}
