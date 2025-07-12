import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// Register the service worker if supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
