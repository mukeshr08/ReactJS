import React from 'react'

const SearchItem = ({searchItem,SetsearchItem}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
          type="text"
          id='search'
          role='searchbox'
          aria-label='Search Items'
          value={searchItem}
          onChange={(e)=>SetsearchItem(e.target.value)}         
         />
    </form>
  )
}

export default SearchItem
