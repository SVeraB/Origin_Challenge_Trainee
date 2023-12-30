import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import Rutas from './routes/Rutas'
import { TarjetaProvider } from './context/TarjetaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TarjetaProvider>
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>,
  </TarjetaProvider>
)
