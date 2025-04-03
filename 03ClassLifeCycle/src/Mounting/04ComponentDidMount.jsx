import { Component } from "react";

class ComponentDidMountPhase extends Component{
    constructor(props){
        super(props);
        this.state = {myColor: 'Blue'}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({myColor: 'Yellow'})
        }, 1000)
    }
    render(){
        return (
            <>
            <h1>My  mounting color is : {this.state.myColor}</h1>
            </>
        )
    }
}

export default ComponentDidMountPhase;