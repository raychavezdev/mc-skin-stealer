import './App.css'
import Header from './components/header/Header'
import Search from './components/search/Search'
import CardGrid from './components/card/CardGrid'
import { playersArray } from './utils/playersArray'
import { useState } from 'react'

function App() {
  const [gridPlayers, setGridPlayers] = useState(playersArray)

  const resetGridPlayers = () => {
    setGridPlayers(playersArray)
    console.log(playersArray)
    console.log('reset')
  }

  const searchSubmit = nameSearch => {
    console.log('submit')
    setGridPlayers([nameSearch])
  }

  return (
    <>
      <Header />
      <Search search={searchSubmit} reset={resetGridPlayers} />
      <CardGrid players={gridPlayers} />
    </>
  )
}

export default App
