import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { BiBed, BiBath } from 'react-icons/bi'
import { TbSquareRotated } from 'react-icons/tb'
import { AiOutlineHome } from 'react-icons/ai'
import data from '../../utils/Data/data'


function Card() {
    return (
        <div className='flex flex-wrap items-center justify-center'>
            {data.map((items) => {
                const { id, price, url, city, formattedAddress, bedrooms, propertyType, bathrooms, squareFootage } = items;
                return (
                    
                    <div key={id} className="card w-80 m-5 justify-between bg-base-100 shadow-xl cursor-pointer">
                        <figure><img src={url} alt={city} /></figure>
                        <div className="card-body">
                            <h2 className='card-title text-violet-500 font-semibold'>${price}
                                <p className='text-sm text-gray-500'>/month</p>
                                <FaRegHeart /></h2>

                            <h2 className="card-title">{city}</h2>
                            <p className='text-sm text-gray-500 font-semibold'>{formattedAddress}</p>
                            <div className="divider"></div>
                            <div className='flex justify-between flex-wrap'>
                                <div className='flex items-center text-violet-500 '><BiBed /><p className='text-sm text-gray-500 font-semibold mx-1'>  {bedrooms}</p></div>
                                <div className='flex items-center text-violet-500'><BiBath /> <p className='text-sm text-gray-500 font-semibold mx-1'>  {bathrooms}</p></div>
                                <div className='flex items-center text-violet-500'><TbSquareRotated /> <p className='text-sm text-gray-500 font-semibold mx-1'>  {squareFootage}</p></div>
                                <div className='flex items-center text-violet-500'><AiOutlineHome /> <p className='text-sm text-gray-500 font-semibold mx-1'>  {propertyType}</p></div>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card