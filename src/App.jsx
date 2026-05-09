import { useState } from 'react'
import './App.css'
import useSound from 'use-sound';
import click from './assets/click.wav'

function App() {
  const [audio, setAudio] = useState(new Audio(click));
  audio.loop = true;
  return (
    <>
        <button
          type="button"
          className="audbutton"
          onClick={() => {
            setAudio(new Audio(click));
            audio.play();
          }}
        >
          <img src={click} alt="Click" />
        </button>


    </>
  )
}

export default App
