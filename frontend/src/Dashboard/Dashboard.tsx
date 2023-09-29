import React from "react"
import {
  Container,
  CssBaseline,
} from "@mui/material"
import {
  WrapRedux,
  MuiTheme,
  Events,
  Notify,
} from "../Dashboard"

export default function Dashboard() {

  return (<>
            <WrapRedux>
              <MuiTheme>
                <CssBaseline />
                <Notify />
                <Container maxWidth={"sm"}>
                  <Events />
                </Container>
              </MuiTheme>
            </WrapRedux>
          </>)
}
