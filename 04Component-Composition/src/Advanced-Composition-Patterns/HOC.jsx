import { Component } from "react";

function ButtonLogger(Componentt){
    return(props) =>  {
        console.log('Logs out', props.children);
   return <Componentt {...props}/>
};
}
const Button = () => {
    return(
        <><button>click</button>
        </>
    )
}
const LoggedBtn2 = ButtonLogger(Button);
function HOC2({name}){
    return(
        <>
        <LoggedBtn2>{name}</LoggedBtn2>
        </>
    )
}
export default HOC2;