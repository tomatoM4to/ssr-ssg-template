import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'

// @ts-ignore
const initialData = window.__INITIAL_DATA__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <App markdown={initialData} />
    </BrowserRouter>
  </StrictMode>,
)
