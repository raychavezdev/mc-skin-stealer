import { useRef, useState } from 'react'
import './Search.css'
import { MdClear } from 'react-icons/md'

const Search = ({ search, reset }) => {
  const searchRef = useRef()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    search(searchRef.current.value)
  }
  const handleReset = () => {
    reset()
    setSearchValue('')
  }

  const handleChange = () => {
    let search = searchRef.current.value
    search = search.replace(/[^a-zA-Z0-9]/g, '')
    setSearchValue(search)
    if (!search) {
      reset()
    }
  }

  return (
    <div className='search-container container'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          ref={searchRef}
          className='search-input'
          type='text'
          placeholder='Player name'
          onChange={handleChange}
          value={searchValue}
        />
        {searchValue && (
          <button onClick={handleReset} type='button'>
            <MdClear />
          </button>
        )}
        <button className='search-btn' type='submit'>
          Search
        </button>
      </form>
    </div>
  )
}
export default Search
