import React from "react"
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react"

//redux packages
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'
import reducers from './reducers'

const container = document.getElementById('root')
const root = createRoot(container)
const store = createStore(reducers, compose(applyMiddleware(thunk)))

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)

