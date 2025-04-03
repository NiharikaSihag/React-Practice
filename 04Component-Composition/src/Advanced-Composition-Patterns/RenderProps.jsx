import React from "react";
const MouseTracker = ({ render }) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
    React.useEffect(() => {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return render(position);
  };
function MyTracker(){
    return(
        <>
        <MouseTracker render={({ x, y }) =>
            <>
             <h1>Mouse position: {x}, {y}</h1>
             <div className="bg-black absolute rounded-full p-1 " style={{left : x ,top :y} } >
            </div>
             </>
             } />
       
        </>
        
    )
}

export default MyTracker;
  