import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { api } from './service/api.ts'
import { ApiProvider } from '@reduxjs/toolkit/query/react'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={api}>
    <App />

    </ApiProvider>
  </StrictMode>,
)
