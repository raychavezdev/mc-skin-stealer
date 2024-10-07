import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Search from './components/search/Search'
import CardGrid from './components/card/CardGrid'
import { playersArray } from './utils/playersArray'
import { useState } from 'react'
import Footer from './components/footer/Footer'
import Share from './components/footer/Share'

function App() {
  const [gridPlayers, setGridPlayers] = useState(playersArray)

  const resetGridPlayers = () => {
    setGridPlayers(playersArray)
    console.log(playersArray)
  }

  const searchSubmit = nameSearch => {
    setGridPlayers([nameSearch])
  }

  return (
    <>
      <Header />
      <Hero />
      <Search search={searchSubmit} reset={resetGridPlayers} />
      <CardGrid players={gridPlayers} />
      <Share />
      <Footer />
    </>
  )
}

export default App
