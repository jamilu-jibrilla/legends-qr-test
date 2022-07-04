import { BrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import Render from './Render'
import './styles/App.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Render />
      </BrowserRouter>
  </React.StrictMode>
)
