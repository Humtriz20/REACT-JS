import React from 'react'
import { Link } from 'react-router-dom'

export const Navba = () => {
  return (
    <nav className=" bg-theme-700 ">
      <div className='w-10/12 mx-auto h-16 text-theme-100 flex items-center'>
        <div className="w-1/4">
          {/* logo */}
         <h1 className="font-bold text-theme-100 ">Hum<span className="text-theme-900">triz.</span></h1>
        </div>  
         <div className='w-2/3'>
          <ul className="flex gap-14 justify-end text-l"> 
            <li  className="hover:text-theme-900 font-bold hidden md:block mt-1 "><Link smooth to="/">Home</Link></li> 
            <li  className="hover:text-theme-900 font-bold hidden md:block mt-1"><Link to="/favorite">Favorite</Link></li> 
            {/* <li  className="hover:text-theme-900 font-bold hidden md:block " ><Link smooth to='#skills'>Skills</Link></li>
            <li  className="hover:text-theme-900 font-bold hidden md:block "><Link smooth to="#contact">Contact</Link></li>  */}
            <button className='bg-theme-300 w-32 h-8 hidden rounded-lg text-lg md:block text-center'>Install App</button>
            {/* <li  className=" font-bold hidden md:block w-32 text-center py-1  bg-theme-900 text-theme-100 rounded-full" ><Link className='navLink' to='/profile'>Install App</Link></li> */}
          </ul>      
       </div>
      </div>
      </nav>
  )
}
