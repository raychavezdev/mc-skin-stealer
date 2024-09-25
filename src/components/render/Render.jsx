import './Render.css'
import {
  renderView,
  startAnimation,
  pauseAnimation,
  stopAnimation,
} from '../../utils/skinview3d'
import { useEffect, useRef, useState } from 'react'
import { PiPlayPauseBold } from 'react-icons/pi'
import { TiMediaStopOutline } from 'react-icons/ti'

const Render = ({ skin }) => {
  let play = true
  const canvasRef = useRef()
  const [render, setRender] = useState()

  useEffect(() => {
    if (canvasRef.current) {
      setRender(renderView(skin, canvasRef.current))
    }
  }, [skin])

  const playPause = () => {
    if (play) {
      startAnimation(render)
    } else {
      pauseAnimation(render)
    }
    play = !play
  }

  const stop = () => {
    play = true
    stopAnimation(render)
  }

  return (
    <div className='render-container'>
      <canvas ref={canvasRef} id='canvas'></canvas>
      <div className='render-multimedia'>
        <button onClick={playPause}>
          <PiPlayPauseBold />
        </button>
        <button onClick={stop}>
          <TiMediaStopOutline />
        </button>
      </div>
    </div>
  )
}

export default Render
