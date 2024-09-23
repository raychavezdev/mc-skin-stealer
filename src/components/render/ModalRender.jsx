import Render from './Render'
import './ModalRender.css'
import { getUuid } from '../../utils/getUuid'
import { useEffect, useState } from 'react'

const ModalRender = ({ player, closeModal }) => {
  const [uuid, setUuid] = useState()

  useEffect(() => {
    const fetchUuid = async () => {
      const playerUuid = await getUuid(player)
      setUuid(playerUuid)
    }
    if (player) {
      fetchUuid()
    }
  }, [player])

  const handleClick = () => {
    closeModal()
  }
  return (
    <div className='render-modal'>
      <div className='modal-container'>
        <Render skin={`https://mc-heads.net/skin/${player}`} />
        <div className='render-info'>
          <h2 className='render-name'>{player}</h2>
          <p className='render-uuid'>UUID: {uuid}</p>
        </div>
        <div className='render-close' onClick={handleClick}>
          <span>X</span>
        </div>
      </div>
    </div>
  )
}

export default ModalRender
