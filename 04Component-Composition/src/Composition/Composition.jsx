// function Image(){
//     return(<>
//     <h1>Heyy</h1>
//     </>)
// }
// function ProfileCard(){
//     return(
//         <Image/>
//     )
// }
// export default ProfileCard;

import { Component } from "react";
class Image extends Component{
    render(){
        return(
            <>
            <h1>Heyy</h1>
            </>
        )
    }
}

class ProfileCard extends Image{
    render(){
        return(
            <>
            <h1>Name</h1>
            {super.render()}
            </>
        )
    }
}