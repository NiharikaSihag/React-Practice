import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import store from './app/store.js';
import { configureStore } from '@reduxjs/toolkit';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store= {store}>
       <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)


// 
// Optimization 
// const LazyComponent = lazy(() => import('./MyComponent'))
// <Suspense fallback=" {<div>Loading...</div>}"
// <LazyComponent/>
// </Suspense>

// const [isPending, startTransiiton ] = useTransition()
// const handleChange= (e) => {
//     const value  = e.target.value;
//     startTransiiton(() => {
//         const result = items.filter(item => item.includes(value));
        
//     })
// }