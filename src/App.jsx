// import { useState } from 'react'
import './App.css'
// import useSound from 'use-sound';
import MouseClick from './buttons/MouseClick.jsx'
import WhiteNoise from './buttons/WhiteNoise.jsx'
import PinkNoise from './buttons/PinkNoise.jsx'



function App() {

  return (
    <>
    <div className="audbuttons">
      <MouseClick />
      <WhiteNoise />
      <PinkNoise />

        </div>
    </>
  )
}

export default App
