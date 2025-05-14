import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DigitalClock from './DigitalClock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DigitalClock />
  </StrictMode>,
)
