import Card from './Card'
import './CardGrid.css'

const GridCards = ({ players }) => {
  return (
    <div className='container'>
      <div className='grid-cards'>
        {players.map((player, i) => (
          <Card key={i} name={player} url={'https://mc-heads.net/body/'} />
        ))}
      </div>
    </div>
  )
}

export default GridCards
