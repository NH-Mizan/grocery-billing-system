import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import Root from './layout/Root.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Root/>
</BrowserRouter>
)
