import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { store } from './Counter/store.js'
import {Provider} from 'react-redux'
import store from './ToDo/store.js'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
    
  </StrictMode>,
)
