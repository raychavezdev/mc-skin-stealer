import { useState } from 'react'
import './Card.css'
import ModalRender from '../render/ModalRender'

const Card = ({ name }) => {
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModal(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      {modal && <ModalRender player={name} closeModal={closeModal} />}
      <article className='card-container' onClick={handleClick}>
        <div className='card-img'>
          <img
            src={`https://mc-heads.net/body/${name}`}
            alt={`Skin de ${name}`}
          />
        </div>
        <h2>{name}</h2>
      </article>
    </>
  )
}
export default Card
