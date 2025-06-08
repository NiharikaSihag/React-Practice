import Card from "./Inheritance/InheritComponent"
import ProfileCard from "./Composition/ComposeComponent"
import MyDeatils from "./Advanced-Composition-Patterns/JSXasChild"
import HOC from "./Advanced-Composition-Patterns/HigherOrderFunc"
import MyTracker from "./Advanced-Composition-Patterns/RenderProps"
import Profile from "./Composition/Example"
import HOC2 from "./Advanced-Composition-Patterns/HOC"
// import LoadThePage from "./spinnerrr/LoadThePage"
import MyPage from "./spinnerrr/LoadThePage"
import LoadThePage from "./spinnerrr/LoadThePage"
function App() {
  return (
    <>
      {/* <ProfileCard section = '11'/> */}
    <Card name = "Niharika  " age='20'/> 
  
    <MyDeatils/>
    <HOC text= ' Click here chjb '/>
    <MyTracker/>
    <Profile/>
    <HOC2 name= 'Niharika'/>
    <LoadThePage />
    </>
  )
}

export default App
