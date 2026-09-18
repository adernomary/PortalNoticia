import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/Home'
import Home from './components/Home'
import Rodape from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Rodape />
    <App />
  </StrictMode>,
)
