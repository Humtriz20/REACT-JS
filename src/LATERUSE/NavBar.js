import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ searchTerm, handleSearchChange, handleCancelSearch, navigate }) => {
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <div>
        <div className='py-3 md:py-2 bg-theme-700 '>
          <div className='w-11/12 mx-auto flex items-center justify-normal '>
            <div className=''>
    
              <div className='relative md:hidden'>
            <FontAwesomeIcon
                  icon={faBars}
                  className='absolute top-0 left-0  bottom-2 text-theme-100 text-xl cursor-pointer'
                  onClick={() => setSidebarVisible(true)}
                />
                
                </div>
               
              <h1 className=' font-bold text-theme-100 ml-28 sm:ml-56 md:ml-0 md:mb-0 mt-0'>
                Hum<span className='text-theme-900'>triz.</span>
              </h1>
              
            </div>
            <div className='flex gap-6   '>
              <div className='relative md:ml-96 sm:ml-52 ml-20'>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 block md:block md:text-theme-700 text-xl text-theme-100'
                  onClick={() => navigate('/searchPage')}
                />
                <input
                  type='text'
                  id='search'
                  placeholder='Search movies...'
                  className='pl-10 pr-10 py-2  hidden md:block w-52  md:w-96 rounded-full  border border-gray-300 focus:outline-none focus:border-blue-500'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

                {error && <p className='text-red-500 mt-2'>{error}</p>}
                {searchTerm && (
                  <button
                    type='button'
                    className='md:absolute md:right-4 top-1/2 transform -translate-y-1/2 text-gray-500'
                    onClick={handleCancelSearch}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                )}
                
              </div>
              <ul className='flex gap-9 text-l '>
                <li className='hover:text-theme-900 text-theme-100 font-bold mt-2 hidden md:block'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-theme-900 text-theme-100 font-bold mt-2 hidden md:block'>
                  <Link to='/favorite'>Favorite</Link>
                </li>

                <button
                  onClick={() => navigate('/register')}
                  className='bg-theme-300 text-theme-100 w-28 h-8 mt-1 font-bold rounded-full hidden text-lg text-center md:block'
                >
                  Sign Up
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className='bg-theme-300 text-theme-100 w-28 h-8 mt-1 font-bold rounded-full hidden text-lg text-center md:block'
                >
                  Login
                </button>
              </ul>
            </div>
          </div>
        </div>

        {isSidebarVisible && (
          <div className='fixed top-0 left-0 h-full w-64  bg-theme-700 z-50'>
            <div className='relative '>
            <button type="button" className="ml-56 mt-2 text-theme-100 text-2xl md:hidden block "
                onClick={() =>{  
                console.log('Button clicked');
                setSidebarVisible(false)}} >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <ul className='text-theme-100 p-4   space-y-5 relative '>
                <div className=' bg-theme-600 text-theme-500 rounded-full p-1 px-3   w-44 mr-4 '>
                  <button onClick={()=> navigate('/searchPage')}><FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className='absolute transform -translate-y-1/2 top-8 right-20  md:hidden font-extrabold  text-md  text-theme-500'
                
                />Search Movies</button>
                </div>
                <li className='hover:text-theme-900 font-bold mt-2 ml-1'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-theme-900 font-bold mt-2 ml-1'>
                  <Link to='/favorite'>Favorite</Link>
                </li>
                <div className='space-y-4 ml-1'>
                <button  onClick={() => navigate('/login')} className='bg-theme-300 text-theme-100 w-28 h-8 font-bold rounded-full text-lg text-center md:block'>
                  Login
                </button>
                <button  onClick={() => navigate('/register')} className='bg-theme-300 text-theme-100 w-28 h-8 font-bold rounded-full text-lg text-center md:block'>
                  Sign up
                </button>
              </div>
              </ul>
             
            </div>
          </div>
        )}
        {message && (
          <div className='bg-theme-900 w-56 h-8 mt-4 ml-10 text-green-500 text-theme-100 rounded-md'>
            <p className='ml-3 text-xl '>{message}</p>
          </div>
        )}
        {filteredMovies.length === 0 ? (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img
              src='Images/6134065.png'
              alt=''
              className='md:w-48 w-36 md:ml-10 ml-16 mt-12'
            />
            <div className='w-72'>
              <p className='mt-4 text-gray-500 text-2xl ml-10  '>
                Result Not found.
              </p>
            </div>
          </div>
        ) : (
          <div className='py-8 w-11/12 bg-theme-100 mx-auto'>
            <ul className='w-12/12 md:w-12/12 md:flex-row flex-row gap-5 flex-wrap flex md:gap-6 md:flex-wrap cursor-pointer'>
              {filteredMovies.map((movie) => (
                <li key={movie.imdbID}>
                  <MovieItem movie={movie} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;