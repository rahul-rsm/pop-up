import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router-dom'
import Model from './model'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <nav className='flex justify-between px-4 py-4 shadow-md md:px-8'>
            <img src={viteLogo} alt="logo" />
            <ul className='flex gap-4'> 
                <li>
                    <NavLink className={({isActive})=> isActive ? 'underline text-blue-500 hover:text-blue-600' : ''}
                         
                     to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'underline text-blue-500 hover:text-blue-600' : ''} to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'underline text-blue-500 hover:text-blue-600' : ''} to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <button onClick={()=> setIsOpen(true)}>Sign In</button>
                   <Model header={<div className='font-bold text-xl'>Sing In</div>}
                   footer={<div className='flex justify-end gap-4'>
                    <button onClick={() => setIsOpen(false)} className='rounded-md bg-gray-300 py-2 px-6 font-semibold md:bg-gray-400/80 active:bg-blue-400/60'>
                      Cancle
                    </button>
                    <button onClick={() => setIsOpen(false)} className='rounded-md bg-gray-300 py-2 px-6 font-semibold md:bg-gray-400/80 active:bg-blue-400/60'>
                      Sign In
                    </button>
                  </div>}
                   isOpen= {isOpen} setIsOpen={setIsOpen}>
                     <input
            className='grow rounded border border-gray-600 px-2 py-1'
            placeholder='username'
            type='text'
          />
          <input
            className='grow rounded border border-gray-600 px-2 py-1'
            placeholder='password'
            type='password'
          />
                   </Model>
                </li>
            </ul>
        </nav>
    </div>
  )
}
