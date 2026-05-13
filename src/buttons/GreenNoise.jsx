import { useState } from 'react'
import useSound from 'use-sound';
import pinknoisesound from '.././assets/sounds/pinknoise.ogg'
import pinknoiseimg from '.././assets/hero.png'

function PinkNoise() {
      const [Playing, setIsPlaying] = useState(false);
  const [play,  { stop } ] = useSound(pinknoisesound, {
    onplay: () => setIsPlaying(true),
  loop: true, volume: 0.25});


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
          <img src={pinknoiseimg} alt="Pink Noise" />
        </button>
)
}

export default PinkNoise
