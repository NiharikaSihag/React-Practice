import { Component } from "react";

class GetDerivedUpdating extends Component{
    constructor(props){
        super(props);
        this.state = {favColor: 'Black'}
    }
    static getDerivedStateFromProps(props, state){
        if(props.favCol !== state.favColor){
            return  {favColor : props.favCol};
        }
        return {favColor : state.favColor};
    }
    render(){
        return(
            <>
            <h1>MY FAV color in derived state while updating phase: {this.state.favColor}</h1>
            </>
        )
    }
}
export default GetDerivedUpdating;