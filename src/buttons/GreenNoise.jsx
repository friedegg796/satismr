import { useState } from 'react'
import useSound from 'use-sound';
import greennoisesound from '.././assets/sounds/greennoise.ogg'
import greennoiseimg from '.././assets/hero.png'

function GreenNoise() {
      const [Playing, setIsPlaying] = useState(false);
  const [play,  { stop } ] = useSound(greennoisesound, {
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
          <img src={greennoiseimg} alt="Green Noise" />
        </button>
)
}

export default GreenNoise
