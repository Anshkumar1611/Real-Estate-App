import React from 'react'

function Filter() {
    return (
        <div class=' flex flex-col justify-center bg-base-100 p-10 mx-10 md:flex-row'>
            <div class="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span class='text-gray-400'>Location</span>
                <br></br>
                <span class='font-bold'>New York,USA</span>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span class='text-gray-400'>When</span>
                <br></br>
                <span class='font-bold'>Select Move-in Date</span>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span class='text-gray-400'>Price</span>
                <br></br>
                <span class='font-bold'>$500-$2500</span>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span class='text-gray-400'>Property Type</span>
                <br></br>
                <span class='font-bold'>Houses</span>
            </div>
            <div class="divider divider-horizontal"></div>
            <button class="btn bg-violet-500 mb-4 hover:bg-violet-600">Search</button>

        </div>
    )
}

export default Filter