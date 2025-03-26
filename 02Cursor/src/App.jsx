import { useState } from 'react'
function App() {
  const [position, setPosition] = useState({
    x:0,
    y:0
  })
  return (
    <>
      <div onPointerMove={
        e =>{
          setPosition({
            x: e.clientX,
            y: e.clientY
          })
        }
      } className='relative h-screen w-full bg-white'>
        <div style={
          {
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
          }
        } className='rounded-full absolute bg-red-600 w-8 h-8  '>

        </div>
      </div>
    </>
  )
}

export default App
