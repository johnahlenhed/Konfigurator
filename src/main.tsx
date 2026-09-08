import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ConfiguratorCanvas } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfiguratorCanvas />
  </StrictMode>,
)
