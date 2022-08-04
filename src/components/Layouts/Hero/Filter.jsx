import React from 'react'

function Filter() {
    return (
        <div className=' flex flex-col justify-center bg-base-100 p-10 mx-10 rounded-xl md:flex-row'>
            <div className="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span className='text-gray-400'>Location</span>
                <br></br>
                <span className='font-bold'>New York,USA</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span className='text-gray-400'>When</span>
                <br></br>
                <span className='font-bold'>Select Move-in Date</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span className='text-gray-400'>Price</span>
                <br></br>
                <span className='font-bold'>$500-$2500</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1 flex-basis-1/5 mb-4 md:mb-1">
                <span className='text-gray-400'>Property Type</span>
                <br></br>
                <span className='font-bold'>Houses</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <button className="btn bg-violet-500 mb-4 hover:bg-violet-600">Search</button>

        </div>
    )
}

export default Filter