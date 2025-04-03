import { Component } from "react";

class shouldComponentUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {myFavColor: 'Black'}
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    };
    render(){
        return (
            <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
        )
    }
}

export default shouldComponentUpdate;