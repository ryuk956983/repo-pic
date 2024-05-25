import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='h-20 border-b-2 border-[black]  shadow-xl flex justify-between px-10 items-center'>
            <h1 className='text-4xl font-bold text-red-500'>Pics.</h1>
            <div className='lg:hidden w-10  flex flex-col gap-3'>
                <div className='h-3 w-full bg-white'></div>
                <div className='h-3 w-full bg-white'></div>
                <div className='h-3 w-full bg-white'></div>
            </div>
            
        </nav>
    </div>
  )
}

export default Header