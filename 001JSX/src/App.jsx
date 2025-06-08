import React from "react";

function App() {
  const userInput = "<img src='x' onerror='alert(\"Hacked!\")'>";

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h2>🛡️ Safe Rendering with JSX</h2>
      <div style={{ border: "1px solid green", padding: "1rem" }}>
        {userInput}
      </div>

      <h2>⚠️ Dangerous Rendering with dangerouslySetInnerHTML</h2>
      {/* <div
        style={{ border: "1px solid red", padding: "1rem", marginTop: "1rem" }}
        dangerouslySetInnerHTML={{ __html: userInput }}
      /> */}
      <div dangerouslySetInnerHTML={{__html : userInput}}>

      </div>
    </div>
  );
}

export default App;
