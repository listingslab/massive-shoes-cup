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
} from "../MassiveShoes"

export default function MassiveShoes() {

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
