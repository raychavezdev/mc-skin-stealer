import './Search.css'

const Search = () => {
  return (
    <div className='search-container container'>
      <form className='search-form'>
        <input className='search-input' type='text' placeholder='Player name' />
        <button className='search-btn' type='submit'>
          Search
        </button>
      </form>
    </div>
  )
}
export default Search
