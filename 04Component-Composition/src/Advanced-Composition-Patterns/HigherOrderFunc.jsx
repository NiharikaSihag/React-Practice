const withLogger = (Component) => {
    return (props) => {
      console.log("Logging props:", props);
      return <Component {...props} />;
    };
  };
  
const Button = (props) => <button className="bg-blue-300">{props.children}</button>;
  
const LoggedButton = withLogger(Button);


function HOC({text}) {
    return (
        <LoggedButton>{text}</LoggedButton>
    )
}
  
export default HOC;