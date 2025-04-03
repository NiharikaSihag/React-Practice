import ParentComponent from "./withoutLifiting"
import ParentComponent2 from "./WithLifting"
import Accordion from "./Accordian"
function App() {

  return (
    <>
    <h1>Without Lifting</h1>
    <ParentComponent/>
    <br />
    <h1>With Lifting</h1>
    <ParentComponent2/>
    <h1>Accordian</h1>
    <Accordion/>
    </>
  )
}

export default App
