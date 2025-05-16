import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CounterProgram from './CounterProgram.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProgram />
  </StrictMode>,
)
