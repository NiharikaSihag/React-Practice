// MyComponent.js
import React, { useEffect } from "react";

function MyComponent(props) {
    useEffect(() => {console.log('Updatee Hot')})
  return <div>Hello, {props.name}!</div>;
}

export default MyComponent;
