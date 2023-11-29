 import React from 'react'
//  import { Link } from 'react-router-dom'
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


 export const Navbar = () => {
  
 const [isOpen, setIsOpen] = useState(false);
   return (
     <nav className=" bg-theme-700 ">
      <div className='w-10/12 mx-auto h-20 text-theme-100 flex items-center'>
        <div className="w-1/4">
          {/* logo */}
         <h1 className="font-bold text-theme-100 ">Hum<span className="text-theme-900">triz.</span></h1>
        </div>
      
          
          <div className='w-2/3'>
          <ul className="flex gap-14 justify-end text-l"> 
            <li  className="hover:text-theme-900 font-bold hidden md:block "><Link smooth to="#home">Home</Link></li> 
            <li  className="hover:text-theme-900 font-bold hidden md:block "><Link smooth to="#about">About</Link></li> 
            <li  className="hover:text-theme-900 font-bold hidden md:block " ><Link smooth to='#skills'>Skills</Link></li>
            <li  className="hover:text-theme-900 font-bold hidden md:block "><Link smooth to="#contact">Contact</Link></li> 
            <li  className=" font-bold hidden md:block w-32 text-center p-1  bg-theme-900 text-theme-100 rounded-full" ><Link className='navLink' to='/profile'>Install App</Link></li>
          </ul>      
            
        </div>
        {/* hamburgerIcon and close Icon */}
        <div className=" flex md:hidden ">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className=" inline-flex items-center justify-center rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg className="block h-6 w-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor" aria-hidden="true" >
                    <path strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className=" rounded-full block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}
              </button>
          </div>

      </div>
     </nav>
  )
 }

