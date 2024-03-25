import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
document.body.style.overflow = 'hidden'

const preventDefault = (e: any) => e.preventDefault()
// When rendering our container
window.addEventListener('touchmove', preventDefault, {
  passive: false,
})
// Remember to clean up when removing it
window.removeEventListener('touchmove', preventDefault)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
