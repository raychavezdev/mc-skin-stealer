import './Hero.css'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <div className='hero-container '>
      <div className='container'>
        <h1 className='hero-title'>{t('hero.title')}</h1>
        <div className='hero-desc'>
          <p>{t('hero.text')}</p>
          <p>{t('hero.phrase')}</p>
        </div>
      </div>
    </div>
  )
}
export default Hero
