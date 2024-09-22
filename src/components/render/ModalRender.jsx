import Render from './Render'
import './ModalRender.css'

const ModalRender = ({ player, closeModal }) => {
  const handleClick = () => {
    closeModal()
  }
  return (
    <div className='render-modal'>
      <div className='modal-container'>
        <Render skin={`https://mc-heads.net/skin/${player}`} />
        <div className='render-info'>
          <h2 className='render-name'>{player}</h2>
          <p className='render-uuid'>{'asdasd-asd-asd-as'}</p>
        </div>
        <div className='render-close' onClick={handleClick}>
          <span>X</span>
        </div>
      </div>
    </div>
  )
}

export default ModalRender
