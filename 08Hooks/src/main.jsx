import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IntervalCounter from './IntervalCounter.jsx'
import PasswordGenrator from './PasswordGenerator/PasswordGenrate.jsx'
import Counter from './useState/Counter.jsx'
import Card from './ListnKey/Card.jsx'
import MyForm from './CustomHooks/MyForm.jsx'
import IntervalCount from './Interval.jsx'
import TableData from './CustomHooks/Table.jsx'
import ShowUser from './CustomHooks/Users.jsx'
import Form from './CustomHooks/MainFrom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordGenrator/>
    <App />
    <h2>Next file</h2>
    <Counter Mycount = {5}/>
    <Card/>
    <MyForm/>
    <IntervalCount/>
    <TableData/>
    <ShowUser/>
    <Form/>
    {/* <IntervalCounter/> */}
  </StrictMode>,
)
