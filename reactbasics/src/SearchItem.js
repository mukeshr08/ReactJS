import React from 'react'

const SearchItem = ({searchItem,setsearchItem}) => {
  return (
    <form action="" className='searchForm' onSubmit={(e)=> {e.preventDefault()
        setsearchItem('')}
    }>
        <label htmlFor="Search">Search</label>
        <input
        id='Search' 
        type="text"
        placeholder='Search Item'
        role='searchbox'
        value={searchItem}
        onChange={(e)=>setsearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem