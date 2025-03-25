import { useState, useEffect, useRef } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    const handleButtonClick = (event) => {
      const target = event.target;
      if (target.tagName === 'BUTTON') {
        const colorValue = target.textContent.toLowerCase();
        setColor(colorValue);
      }
    };
    const container = buttonContainerRef.current;
    if (container) {
      container.addEventListener('click', handleButtonClick);
    }
    return () => {
      if (container) {
        container.removeEventListener('click', handleButtonClick);
      }
    };
  },[]); 

  return (
    <>
     <div className="w-full h-screen "
     style={{backgroundColor: color}}
     >
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
        <div ref={buttonContainerRef}  className="flex flex-wrap bg-white rounded-full shadow-xl gap-3 px-3 py-2">

        <button  className='outline-none px-3 py-2 rounded-full shadow text-white' style={{backgroundColor: "red"}}>Red</button>

        <button className='outline-none px-3 py-2 rounded-full shadow text-white' style={{backgroundColor: "green"}}>Green</button>

        <button className='outline-none px-3 py-2 rounded-full shadow text-white' style={{backgroundColor: "blue"}}>Blue</button>

        <button className='outline-none px-3 py-2 rounded-full shadow text-white' style={{backgroundColor: "black"}}>Black</button>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
