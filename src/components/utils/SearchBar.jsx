import React from 'react'
import data from './Data/data'
function SearchBar({filterItems}) {

  return (
    <div class="form-control w-full max-w-s" onClick={()=>filterItems(data.propertyType)}>
      <select defaultValue={Option} class="select select-bordered" >
        <option>Categories of Houses</option>
        <option>All</option>
        <option>Single-family</option>
        <option>Multi-family</option>
        <option>Apartment</option>
        <option>Bungalow</option>
      </select>
    </div>
  )
}

export default SearchBar