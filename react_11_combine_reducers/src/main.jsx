import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider as ReduxProvider} from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
)
