import { Component } from "react";
import ConstructorComp from "./Mounting/01ConstructorComp";
import GetDerivedState from "./Mounting/02GetDerivedState"
import MyRender from "./Mounting/03Render";
import ComponentDidMountPhase from "./Mounting/04ComponentDidMount";
import GetDerivedUpdating from "./Updating/01GetDerivedState";
import ShouldComponentUpdate from "./Updating/02ShouldComponentUpdate";
class App extends Component{
  render(){
    return(
      <>
      <h2 className="font-bold">Mounting Phases</h2>
      <ConstructorComp favoriteFood="Pizza" hobby="Coding" />
      <GetDerivedState favCol ="Blue"/>
      <MyRender/>
      <ComponentDidMountPhase/>
      <br />
      <h2 className="font-bold">Update Phases</h2>
      <GetDerivedUpdating favCol='Lime'/>
      <ShouldComponentUpdate/>
      </>
    )
  }
}

export default App;