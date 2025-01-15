import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import { api } from './service/api.ts'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </StrictMode>,
)
