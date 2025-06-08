// You could wrap a functional component in a class-based HOC to inject lifecycle methods.
import React from "react";
function WithLifeCycle(WrappedComponent){
    return class extends React.Component{
        componentDidMount(){
            console.log('Mounted');
        }
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
}
export default WithLifeCycle;