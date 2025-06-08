import { useState } from 'react'
import './App.css'
import ControlledInput from './controlled/controlledForm'
import Counter from './controlled/ControlledComp'
import ParentCount from './uncontrolled/UncontrolledComp'

function App() {
  return (
    <>
      {/* <ControlledInput/> */}
      <ParentCount/>
      <br />
      <Counter/>
    </>
  )
}

export default App
