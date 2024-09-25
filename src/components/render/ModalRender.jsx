import Render from './Render'
import './ModalRender.css'
import { getUuid } from '../../utils/getUuid'
import { useEffect, useState } from 'react'
import { CiMedicalClipboard } from 'react-icons/ci'
import { BsClipboardCheck } from 'react-icons/bs'

const ModalRender = ({ player, closeModal }) => {
  const [uuid, setUuid] = useState()
  const [isCopied, setIsCopied] = useState(false)

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

  const copyUuid = () => {
    navigator.clipboard
      .writeText(uuid)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
      })
      .catch(() => {
        setIsCopied(false)
      })
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
                <span className='uuid' onClick={copyUuid}>
                  {uuid}{' '}
                  {!isCopied ? (
                    <CiMedicalClipboard className='clip-icon' />
                  ) : (
                    <BsClipboardCheck className='clip-icon' />
                  )}
                </span>
              ) : (
                <p>Loading uuid...</p>
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
