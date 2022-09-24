import React from 'react'

import BoraBora1 from "../assets/borabora1.jpg"
import BoraBora2 from "../assets/borabora2.jpg"
import Maldives1 from "../assets/maldives1.jpg"
import Maldives2 from "../assets/maldives2.jpg"
import Keywest from "../assets/keywest.jpg"







function Destinations() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora1} alt="" />
            <img className='w-full h-full object-cover' src={BoraBora2} alt="" />
            <img className='w-full h-full object-cover' src={Maldives1} alt="" />
            <img className='w-full h-full object-cover' src={Maldives2} alt="" />
            <img className='w-full h-full object-cover' src={Keywest} alt="" />
        </div>
    </div>
  )
}

export default Destinations