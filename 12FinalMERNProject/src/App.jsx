import {Routes, Route} from 'react-router-dom'
import Counter from './Components/Counter'

function App() {

  return (
    <>
    <Routes>
      {/* <Route path ='/regsiter' element = {<RegisterFrom/>} /> */}
      <Route path = '/counter' element = {<Counter/>}/>
    </Routes>
    </>
  )
}

export default App
