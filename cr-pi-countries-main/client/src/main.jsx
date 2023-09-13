import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Components/Redux/Store/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    </BrowserRouter>
  </Provider>
)
