import './Header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <a className='logo' href='#'>
          <h1 className='logo-text'>MC-Stealer</h1>
        </a>
        <button className='btn_theme'>Dark</button>
      </div>
    </header>
  )
}

export default Header
