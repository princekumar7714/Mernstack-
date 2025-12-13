import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between text-black'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> Developers👋</span> </h1>
        <button className='bg-red-600 text-white rounded-2xl text-lg font-medium  py-3 px-5'>Log out</button>
    </div>
  )
}

export default Header