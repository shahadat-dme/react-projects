import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
const Navbar = () => {
    return (
        <div className='w-screen h-[75px] bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>SONAIMURI.</h1>
                </div>
            </div>
            <MenuIcon className='w-7' />
        </div>
    )
}

export default Navbar