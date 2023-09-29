import React from 'react'
import ReactDOM from 'react-dom/client'
import {MassiveShoes} from './MassiveShoes/'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <MassiveShoes />
  </React.StrictMode>
)

