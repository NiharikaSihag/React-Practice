import { useEffect } from "react";

const withLogger = (Component) => {
    return (props) => {
          console.log("Logging props:", props);
      return <Component {...props} />;
    };
  };
  
const Button = (props) => <button className="bg-blue-300" onClick={()=> {console.log(props.children)}}>Click over here</button>;
const LoggedButton = withLogger(Button);
function HOC({text}) {
    return (
        <LoggedButton>{text}</LoggedButton>
    )
}
  
export default HOC;