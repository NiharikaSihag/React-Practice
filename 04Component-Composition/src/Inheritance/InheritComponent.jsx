import { Component } from "react";
class Card extends Component{
    render(){
        return(
            <>
            <div className=" p-5">
                
            {this.props.children}
            </div>
            </>
        )
    }
}
class Profile extends Card{
    render(){
        return(
           
            <Card >
                  <h3>Name: {this.props.name}</h3>
                  <h3>Age: {this.props.age}</h3> 
            </Card>
        )
    }
}

export default Profile;