import React from 'react'


function SearchBar() {

  return (
    <div className="form-control w-full max-w-s" >
      <select defaultValue={Option} className="select select-bordered" >
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

