import { useEffect, useState } from 'react'
import './Card.css'
import ModalRender from '../render/ModalRender'
import { getUuid } from '../../utils/getUuid'

const Card = ({ name }) => {
  const [modal, setModal] = useState(false)
  const [uuid, setUuid] = useState()

  const handleClick = () => {
    if (uuid != 'NF') {
      setModal(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    setModal(false)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const fetchUuid = async () => {
      const playerUuid = await getUuid(name)
      setUuid(playerUuid)
    }
    if (name) {
      fetchUuid()
    }
  }, [name])

  return (
    <>
      {modal && <ModalRender player={name} closeModal={closeModal} />}
      <article className='card-container' onClick={handleClick}>
        <div className='card-img'>
          {uuid == null ? (
            <p>Loading skin ...</p>
          ) : uuid == 'NF' ? (
            <p>Player does not exist</p>
          ) : (
            <img
              src={`https://mc-heads.net/body/${name}`}
              alt={`Skin de ${name}`}
            />
          )}
        </div>
        <h2>{name}</h2>
      </article>
    </>
  )
}
export default Card
