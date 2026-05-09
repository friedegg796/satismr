import { useState } from 'react'
import './App.css'
import useSound from 'use-sound';
import click from './assets/click.wav'

function App() {
  const [Playing, setIsPlaying] = useState(false);
  const [play,  { stop } ] = useSound(click, {
    onplay: () => setIsPlaying(true),
  loop: true, volume: 0.5});

  const togglePlay = () => {
    if (Playing) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!Playing);
  }
  return (
    <>
        <button
          type="button"
          className="audbutton"

      onClick={togglePlay}
        >
          <img src={click} alt="Click" />
        </button>


    </>
  )
}

export default App
