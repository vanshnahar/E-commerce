import React from 'react'
import {Navlink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-center justify-center py-5 font-medium'>

      
  
      <img src='/images/logo.png' alt='logo' className='h-10'/>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
       
       <Navlink to='/' className='flex flex-col items-center gap-1
       '>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
        </Navlink>
       <Navlink to='/' className='flex flex-col items-center gap-1
       '>
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
        </Navlink>
       <Navlink to='/' className='flex flex-col items-center gap-1
       '>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
        </Navlink>
       <Navlink to='/' className='flex flex-col items-center gap-1
       '>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
        </Navlink>

      </ul>
      
    </div>
  )
}

export default Navbar
