
import './App.css'
import FunctionalComp from './components/FunctionalComp'
import nameConvention from './components/myconvention'
import nameConvention2 from './components/MyConvention2'
import NameConvention3 from './components/myConvention3'
import WithLifeCycle from './FunctionalLifecycle/BeforeHooks/Hoc'
import MyComponent from './MyComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MyComponentWithLifecycle = WithLifeCycle(MyComponent)
function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<h1>Hii root page</h1>}></Route>
      <Route path='/register' element={<FunctionalComp/>}></Route>
    </Routes>
    </BrowserRouter>
    

      
    </>
  )
}

export default App
