import { Component } from "react";

class ConstructorComp extends Component{
  constructor(props){
    super(props);
    this.state = {myColor: 'blue'}
    console.log("Props in constructor:", props);
  }
  render(){
  return(
          <h1>My Favourite color: {this.state.myColor} <br /> </h1>
  )
    
  }
}

export default ConstructorComp;