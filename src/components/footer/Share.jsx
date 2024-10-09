import { useTranslation } from 'react-i18next'
import CopyButton from '../copyButton/CopyButton'
import './Share.css'

const Share = () => {
  const { t } = useTranslation()
  return (
    <section className='share-section'>
      <div className='container'>
        <h3 className='share-title'>{t('share.title')}</h3>
        <div className='share-container'>
          <CopyButton text={'https://mc-skin-stealer.netlify.app/'} />
        </div>
      </div>
    </section>
  )
}

export default Share
