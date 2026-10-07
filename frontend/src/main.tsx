import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { queryClient } from './lib/queryClient'
import { startMotion } from './motion'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

if (typeof window !== 'undefined') window.addEventListener('load', () => setTimeout(startMotion, 600))
