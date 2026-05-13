import { useState } from 'react'
import useSound from 'use-sound';
import whitenoisesound from '.././assets/sounds/whitenoise.ogg'
import whitenoiseimg from '.././assets/hero.png'

function Mouseclick() {
      const [Playing, setIsPlaying] = useState(false);
  const [play,  { stop } ] = useSound(whitenoisesound, {
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
          <img src={whitenoiseimg} alt="White Noise" />
        </button>
)
}

export default Mouseclick
