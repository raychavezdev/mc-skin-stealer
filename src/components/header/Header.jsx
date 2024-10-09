import { useTranslation } from 'react-i18next'
import './Header.css'
import ThemeButton from './ThemeButton'

const Header = () => {
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    const lang = i18n.language === 'en' ? 'es' : 'en'
    localStorage.setItem('language', lang)
    i18n.changeLanguage(lang)
  }

  return (
    <header className='header'>
      <div className='container'>
        <a className='logo' href='/'>
          <h1 className='logo-text'>MC-Stealer</h1>
          <img src='icon.png' alt='logo' />
        </a>
        <div className='media'>
          <button className='btn-lang' onClick={() => changeLanguage('en')}>
            EN/ES
          </button>
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}

export default Header
