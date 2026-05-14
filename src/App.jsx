// import { useState } from 'react'
import './App.css'
// import useSound from 'use-sound';
import MouseClick from './buttons/MouseClick.jsx'
import WhiteNoise from './buttons/WhiteNoise.jsx'
import PinkNoise from './buttons/PinkNoise.jsx'
import GreenNoise from './buttons/GreenNoise.jsx'



function App() {

  return (
    <>
    <div className="audbuttons">
      <MouseClick />
      <WhiteNoise />
      <PinkNoise />
      <GreenNoise />

        </div>
    </>
  )
}

export default App
