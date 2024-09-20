import './App.css'
import Header from './components/header/Header'
import Search from './components/search/Search'
import CardGrid from './components/card/CardGrid'
import { playersArray } from './utils/playersArray'

function App() {
  return (
    <>
      <Header />
      <Search />
      <CardGrid players={playersArray} />
    </>
  )
}

export default App
