import React from 'react'


const Navbar = () => {
  return (
   <nav className='flex justify-evenly items-center shadow-md py-3 mb-5'>
    <h2 className='font-black text-2xl'>Product</h2>
    <div className='sm:items-center'>
        <input className='outline-none border-2 py-2 px-2 rounded-md placeholder-black text-xl font-semibold font-sans w-[40vw] hover:border-purple-300' type="search" name="" id="" placeholder='Search Here' />
        <button className='bg-orange-500 py-2 px-3 rounded-lg font-semibold text-white text-lg mx-1 hover:bg-orange-400 duration-200 ease-in-out'>Search</button>
    </div>

    <ul className='flex gap-5 text-lg font-bold'>
        <li>HOME</li>
        <li>CARD</li>
    </ul>




   </nav>
  )
}

export default Navbar