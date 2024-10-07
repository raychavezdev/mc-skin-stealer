import CopyButton from '../copyButton/CopyButton'
import './Share.css'

const Share = () => {
  return (
    <section className='share-section'>
      <div className='container'>
        <h3 className='share-title'>Share this website</h3>
        <div className='share-container'>
          <CopyButton text={'https://mc-skin-stealer.netlify.app/'} />
        </div>
      </div>
    </section>
  )
}

export default Share
