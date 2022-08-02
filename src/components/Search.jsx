import React from 'react'
import SearchBar from './utils/SearchBar'

function Search({filterItems}) {
  return (
    <div class='md:flex justify-between p-10 '>
    <div class="basis-2/3 font-bold mb-10 text-2xl md:text-3xl lg:text-5xl">Search properties to rent</div>
    <div class="basis-1/3"><SearchBar filterItems={filterItems}/></div>
    </div>
  )
}

export default Search