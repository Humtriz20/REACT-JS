import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav className=" bg-theme-200 w-full lg:p-5 sm:max">
        <div className=" mx-auto px-7 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <h1 className="font-bold ml-4 mr-72 lg:text-3xl">Hum<span className="text-theme-600">triz.</span></h1>
              <div className="hidden md:block">
                
                <ul className="ml-10 flex gap-12 items-baseline space-x-4 ">
                  <li  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium lg:text-2xl">
                  <Link className='navLink' to="/">Home</Link>
                  </li>
                  
                  <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium lg:text-2xl" >
                    <Link className='navLink' to="/about">About</Link>
                  </li>

                  <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium lg:text-2xl">
                    <Link className='navLink' to="/contact">Skills</Link>
                  </li>

                  <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium lg:text-2xl">
                    <Link className='navLink' to="/profile">Contact</Link>
                  </li>

                  <div className=" flex gap-24">
                   <button className="bg-blue-700  h-9 w-44 text-theme-100 bg-theme-300 p-1 text-center font-bold  rounded-3xl  md:block lg:text-xl  ">Contact Me</button>
                  </div>
                </ul>
              </div>
            </div>
            <div className=" flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md 
              text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 
              focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg className="block h-6 w-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor" aria-hidden="true" >
                    <path strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className="hover:bg-theme-100 rounded-full block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}


              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen} 
          
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <ul ref={ref} className="px-48 pb-3 space-y-1 sm:px-3">
                <li className="hover:bg-theme-100 text-white block px-3 py-2 rounded-md text-base font-medium" >
                <Link className='navLink' to="/">Home</Link>
                </li>

                <li className=" hover:bg-theme-100 text-gray-300  block px-3 py-2 rounded-md text-base font-medium" >
                <Link className='navLink' to="/about">About</Link>
                </li>

                <li className="hover:bg-theme-100 text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                <Link className='navLink' to="/contact">Skills</Link>
                </li>

                <li className=" hover:bg-theme-100 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                <Link className='navLink' to="/profile">Contact</Link>
                </li>
                
              </ul>
              <div className="flex px-24 py-1 ml-2 mb-2">
                 <button className="bg-blue-700  h-9 w-64 text-theme-100 bg-theme-300 p-1 text-center font-bold  rounded-3xl md:block ">Contact Me</button>
                </div>
            </div>
          )}
        </Transition>
      </nav>

    
    
  )
}

export default Nav;
