import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.comp'

function App() {


  return (
    <div className="parallax_wrapper">
      <div className="parallax_group intro_screen" id="intro">
        TOP
      </div>

      <div className="parallax_group section-2">
        <div className="parallax_layer base_layer"></div>
        <div className="parallax_layer mid_layer"> MID LAYER</div>
      </div>

      <div className="parallax_group section-3">
        <div className="parallax_layer mid_layer"> MID LAYER</div>
        <div className="parallax_layer top_layer"> TOP LAYER</div>
      </div>

      <div className="parallax_group outro_screen" id="intro">
        BOTTOM
      </div>
    </div>
  )
}

export default App
