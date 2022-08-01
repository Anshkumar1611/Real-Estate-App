import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { BiBed, BiBath } from 'react-icons/bi'
import { TbSquareRotated } from 'react-icons/tb'
function Card() {
    return (
        <div class="card w-80 m-5 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class='card-title text-violet-500 font-semibold'>$2,095
                    <p class='text-sm text-gray-500'>/month</p>
                    <FaRegHeart /></h2>

                <h2 class="card-title">Shoes!</h2>
                <p class='text-sm text-gray-500 font-semibold'>If a dog chews shoes whose shoes does he choose?</p>
                <div class="divider"></div>
                <div class='flex justify-between flex-wrap'>
                    <div class='flex items-center text-violet-500 '><BiBed /><p class='text-sm text-gray-500 font-semibold mx-1'>  3Beds</p></div>
                    <div class='flex items-center text-violet-500'><BiBath /> <p class='text-sm text-gray-500 font-semibold mx-1'>  3Bathrooms</p></div>
                    <div class='flex items-center text-violet-500'><TbSquareRotated /> <p class='text-sm text-gray-500 font-semibold mx-1'>  5*7ms</p></div>
                </div>
            </div>
        </div>
    )
}

export default Card