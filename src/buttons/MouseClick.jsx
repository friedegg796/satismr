import { useState } from 'react'
import useSound from 'use-sound';
import click from '.././assets/sounds/click.wav'
import clickimg from '/mouseclick.svg'

function Mouseclick() {
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


 <button
          type="button"

      onClick={togglePlay}
        >
          <img src={clickimg} alt="Click" />
        </button>
)
}

export default Mouseclick
