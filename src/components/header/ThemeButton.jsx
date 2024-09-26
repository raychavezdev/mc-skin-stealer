import { useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import './ThemeButton.css'

const ThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    document.body.classList.toggle('light')
  }

  return (
    <button className='btn-theme' onClick={changeTheme}>
      {isDarkTheme ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  )
}

export default ThemeButton
