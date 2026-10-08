import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './arc-polish.css'
import './arc-redesign.css'
import './arc-showcase.css'
import './arc-motion.css'
import './arc-brand.css'
import './arc-mobile.css'
import './arc-pages.css'
import './arc-shapes.css'
import './arc-nocut.css'
import App from './App.tsx'
import { queryClient } from './lib/queryClient'
import { startMotion } from './motion'
import { startPolish } from './polish'

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

if (typeof window !== 'undefined') window.addEventListener('load', () => setTimeout(() => { startMotion(); startPolish() }, 600))
