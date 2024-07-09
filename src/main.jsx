import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MediaProvider } from './context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MediaProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MediaProvider>
)
