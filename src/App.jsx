import { useState } from 'react'
import './App.css'
import click from './assets/click.wav'

function App() {
  const [count, setCount] = useState(0)
  const [audio, setAudio] = useState(new Audio(click));
  return (
    <>
       <div className="center">
        <button
          type="button"
          className="center"
          onClick={() => {
            setCount((count) => count + 1);
            setAudio(new Audio(click));
            audio.play();
          }}
        >
          Satisfying Mouse Sound Number: {count}
        </button>
        </div>


    </>
  )
}

export default App
