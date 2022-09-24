import React from 'react'

import BoraBora1 from '../assets/borabora1.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives1 from '../assets/maldives1.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={BoraBora1} text='Hawaii' />
    <SelectsCard bg={BoraBora2} text='Maldives' />
    <SelectsCard bg={Maldives1} text='Antigua' />
    <SelectsCard bg={Maldives2} text='Tokat' />
    <SelectsCard bg={Maldives3} text='Mardin' />
    <SelectsCard bg={KeyWest} text='Key West' />
    
        
    </div>
  )
}

export default Selects