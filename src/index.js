import React from "react"
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'


const container = document.getElementById('root')
const root = createRoot(container)


root.render(<StrictMode> <App /> </StrictMode>)
