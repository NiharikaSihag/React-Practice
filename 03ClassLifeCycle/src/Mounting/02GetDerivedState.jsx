import { Component } from "react";

class GetDerivedState extends Component{
    constructor(props){
        super(props),
        this.state = {myColor: 'Blue'}
    }
    static getDerivedStateFromProps(props, state){
        if(props.favCol !== state.myColor){
            return {
                myColor: props.favCol
            }
        }
        return null;
        
    }
    render(){
        return(
            <>
            <h1>My fav color from derived state: {this.state.myColor} </h1>
            </>
        )
    }
}

export default GetDerivedState;