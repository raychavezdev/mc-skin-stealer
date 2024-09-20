import './Card.css'

const Card = ({ name }) => {
  return (
    <article className='card-container'>
      <div className='card-img'>
        <img
          src={`https://mc-heads.net/body/${name}`}
          alt={`Skin de ${name}`}
        />
      </div>
      <h2>{name}</h2>
    </article>
  )
}
export default Card
