import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { BiBed, BiBath } from 'react-icons/bi'
import { TbSquareRotated } from 'react-icons/tb'
import { AiOutlineHome } from 'react-icons/ai'
import data from './utils/Data/data'

function Card() {
    return (
        <div class='flex flex-wrap items-center justify-center'>
            {data.map((items) => {
                const { id, price, url, city, formattedAddress, bedrooms, propertyType, bathrooms, squareFootage } = items;
                return (
                    <div key={id} class="card w-80 m-5 justify-between bg-base-100 shadow-xl">
                        <figure><img src={url} alt={city} /></figure>
                        <div class="card-body">
                            <h2 class='card-title text-violet-500 font-semibold'>${price}
                                <p class='text-sm text-gray-500'>/month</p>
                                <FaRegHeart /></h2>

                            <h2 class="card-title">{city}</h2>
                            <p class='text-sm text-gray-500 font-semibold'>{formattedAddress}</p>
                            <div class="divider"></div>
                            <div class='flex justify-between flex-wrap'>
                                <div class='flex items-center text-violet-500 '><BiBed /><p class='text-sm text-gray-500 font-semibold mx-1'>  {bedrooms}</p></div>
                                <div class='flex items-center text-violet-500'><BiBath /> <p class='text-sm text-gray-500 font-semibold mx-1'>  {bathrooms}</p></div>
                                <div class='flex items-center text-violet-500'><TbSquareRotated /> <p class='text-sm text-gray-500 font-semibold mx-1'>  {squareFootage}</p></div>
                                <div class='flex items-center text-violet-500'><AiOutlineHome /> <p class='text-sm text-gray-500 font-semibold mx-1'>  {propertyType}</p></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card