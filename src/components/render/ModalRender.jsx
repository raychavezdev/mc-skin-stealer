import Render from './Render'
import './ModalRender.css'
import { getUuid } from '../../utils/getUuid'
import { useEffect, useState } from 'react'
import CopyButton from '../copyButton/CopyButton'

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
          <div className='render-info-card'>
            <h2 className='render-name'>{player}</h2>
            <p className='render-uuid'>
              <b>UUID:</b>
              {uuid ? (
                <CopyButton text={uuid} />
              ) : (
                <span className='uuid'>Loading uuid...</span>
              )}
            </p>
          </div>
          <a
            href={`https://mc-heads.net/download/${player}`}
            className='down-btn'
          >
            Download Skin
          </a>
        </div>
        <div className='render-close' onClick={handleClick}>
          <span>X</span>
        </div>
      </div>
    </div>
  )
}

export default ModalRender
