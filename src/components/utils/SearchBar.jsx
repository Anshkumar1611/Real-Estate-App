import React from 'react'

function SearchBar() {
  return (
    <div class="form-control w-full max-w-s">
      <select class="select select-bordered">
        <option disabled selected>Search with SearchBar</option>
        <option>Location</option>
        <option>Price</option>
        <option>Property Type</option>
        <option>Select Move-in Date</option>
      </select>
    </div>
  )
}

export default SearchBar