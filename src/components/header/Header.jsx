import './Header.css'
import ThemeButton from './ThemeButton'
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <a className='logo' href='#'>
          <h1 className='logo-text'>MC-Stealer</h1>
        </a>
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
