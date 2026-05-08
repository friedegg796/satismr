import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const audio = new Audio("/click.mp3");
  return (
    <>
       <div className="center">
        <button
          type="button"
          className="center"
          onClick={() => {
            setCount((count) => count + 1);
            audio.play();
          }}
        >
          Count is {count}
        </button>
        </div>


    </>
  )
}

export default App
