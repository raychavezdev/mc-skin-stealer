import './Render.css'
import { renderView } from '../../utils/skinview3d'
import { useEffect, useRef } from 'react'

const Render = ({ skin }) => {
  const canvasRef = useRef()

  useEffect(() => {
    renderView(skin, canvasRef.current)
  }, [skin])

  return (
    <div className='render-container'>
      <canvas ref={canvasRef} id='canvas'></canvas>
      <div className='render-multimedia'>
        <button>play</button>
        <button>stop</button>
      </div>
    </div>
  )
}

export default Render
