import Card from "./Inheritance/InheritComponent"
import ProfileCard from "./Composition/ComposeComponent"
import MyDeatils from "./Advanced-Composition-Patterns/JSXasChild"
import HOC from "./Advanced-Composition-Patterns/HigherOrderFunc"
import MyTracker from "./Advanced-Composition-Patterns/RenderProps"
function App() {
  return (
    <>
    <Card name = "Niharika" age='20'/> 
    <ProfileCard section = '11'/>
    <MyDeatils/>
    <HOC text= ' Click'/>
    <MyTracker/>
    </>
  )
}

export default App
