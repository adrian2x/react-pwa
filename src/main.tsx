import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)

// Register the service worker if supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
