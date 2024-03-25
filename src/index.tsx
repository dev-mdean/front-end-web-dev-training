import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
document.body.style.overflow = 'hidden'

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
