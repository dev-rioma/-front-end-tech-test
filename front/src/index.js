import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApicontextProvider } from "./Context/Contex"

ReactDOM.render(
  <React.StrictMode>
    <ApicontextProvider>
      <App />
    </ApicontextProvider> 
  </React.StrictMode>,
  document.getElementById('root')
)
