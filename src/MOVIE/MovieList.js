import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faHeart, faCirclePlay,faBookmark,
  faSun, faMoon, faBars,faGear,
  faRightFromBracket,faUser,faHouse,faCheck }
from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate();
  // Access the user, logOut, and loading state from the AuthContext
  const { user, logOut, loading } = useContext(AuthContext);

  // Handle user logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        setMessage(`User logged out successfully`);
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => console.error(error));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '5cf66a07'; // Replace with your OMDb API key
        const response = await axios.get(
          `http://www.omdbapi.com/?s=batman&apikey=${apiKey}`
        );

        if (response.data.Search) {
          setMovies(response.data.Search);
          setError(null);
        } else {
          setMovies([]);
          setFilteredMovies([]);
          setError('No movies found.');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
        setFilteredMovies([]);
        setError('No Internet Connection Please try again later.');
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    // Update filteredMovies when movies or searchTerm changes
    setFilteredMovies(
      movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, movies]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCancelSearch = () => {
    setSearchTerm('');
  };

  const addToFavorites = (movie) => {
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setMessage(`Already in Favorites`);
      setTimeout(() => setMessage(''), 3000);
    } else {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setMessage(`Added to Favorites`);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const MovieItem = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
   

    return (
      <>
        <div className='flex gap-1 '>
          <div>
            <Link to={`/movie/${movie.imdbID}`}>
              <strong>Rating:</strong>{' '}
              {movie.Ratings && movie.Ratings.length > 0
                ? movie.Ratings[0].Value
                : 'N/A'}
              <img
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
                className='rounded-lg w-32 sm:w-40 md:w-64 hover:scale-110 '
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Link>
            <button
              type='button'
              onClick={() => addToFavorites(movie)}
              className={`text-gray-500 mr-2 ${
                favorites.some((fav) => fav.imdbID === movie.imdbID)
                  ? 'text-red-500'
                  : ''
              }`}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`${
                  favorites.some((fav) => fav.imdbID === movie.imdbID)
                    ? 'text-theme-200'
                    : ''
                }`}
              />
            </button>

            <div className='w-32 md:w-64'>
            <strong>{truncateString(movie.Title, 20)}</strong>
            </div>
            <p>{movie.Year}</p>
            <br />
           
          </div>
        </div>
      </>
    );
  };

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
            <div className='flex gap-32   '>
              <div className='relative md:ml-72 sm:ml-52 ml-20'>
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
                    className='md:absolute text-theme-500 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-500'
                    onClick={handleCancelSearch}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                )}
                
              </div>
              <ul className='flex gap-8 '>
                <li className='hover:text-theme-900 text-theme-100 font-bold mt-2 hidden md:block'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-theme-900 text-theme-100 font-bold mt-2 hidden md:block'>
                  <Link to='/favorite'>Favorite</Link>
                </li>
                <li className='hover:text-theme-900 text-theme-100 font-bold mt-2 hidden md:block'>
                  <Link to='/WatchList'>WatchList</Link>
                </li>
                
                
                {user ? (
                  <div className='flex items-center'>
                    <h2 className='cursor-pointer hidden md:block' >
                      {user.displayName}
                    </h2>
                    <div className=''>
                     <div className='w-10 rounded-full bg-theme-100 md:block hidden  overflow-hidden ' >
                          <img
                            src='Images/PROFILE PICTURE.png'
                            alt='Profile'
                            className="object-cover w-full h-full"
                            onClick={toggleModal}
                          />
                        </div>
                      {isModalOpen && (
                        <div className='hidden md:block'>
                          
                        <div className='fixed  top-16 rounded-lg w-72 h-52 right-32   bg-theme-100 shadow-lg  flex items-center'>
                          <div className=' rounded-md ml-5'>
                            <h2 className='text-xl font-bold mb-4 gap-3'> Hi, {user.displayName}</h2>
                            <ul className='text-lg space-y-3 '>
                              <li className=' space-x-2'>
                              <FontAwesomeIcon icon={faUser} /> <Link to='/profile'>Profile</Link>
                              </li>
                              {/* <li  className=' space-x-2'>
                                <button onClick={()=> navigate("/login")}>Add an Existing Account</button>
                              </li> */}
                              <li  className=' space-x-2'>
                              <FontAwesomeIcon icon={faGear} /> <button onClick={()=> navigate("/profile")}>Settings</button>
                              </li>
                              
                              <li  className=' space-x-2'>
                              <FontAwesomeIcon icon={faRightFromBracket} /> <button onClick={handleSignOut}>Logout</button>
                              </li>
                            </ul>
                           
                          </div>
                        </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Display sign up and login buttons if user is not authenticated
                  <>
                    <button
                      onClick={() => navigate('/signUp')}
                      className='bg-theme-300 text-theme-100 w-28 h-8 mt-1 font-bold rounded-xl hidden text-lg text-center md:block'
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => navigate('/login')}
                      className='bg-theme-100 border-theme-300 text-theme-300 w-28 h-8 mt-1  rounded-xl hidden text-lg text-center md:block'
                    >
                      Login
                    </button>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>


        
        {isSidebarVisible && (
  <div className='fixed top-0 left-0 h-full w-64  bg-theme-700 z-50'>
    <div className='relative '>
      <button
        type="button"
        className="ml-56 mt-2 text-theme-100 text-2xl md:hidden block"
        onClick={() => {  
          console.log('Button clicked');
          setSidebarVisible(false);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <ul className='text-theme-100 p-4 space-y-5 relative'>
        <div className='bg-theme-600 text-theme-500 rounded-full p-1 px-3 w-44 mr-4'>
          <button onClick={() => navigate('/searchPage')}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='absolute transform -translate-y-1/2 top-8 right-20 md:hidden font-extrabold text-md text-theme-500'
            />
            Search Movies
          </button>
        </div>
        <li className='hover:text-theme-900 font-bold mt-2 ml-1 space-x-2'>
          <FontAwesomeIcon icon={faHouse} /> <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-theme-900 font-bold mt-2 ml-1 space-x-2'>
          <FontAwesomeIcon icon={faHeart} /> <Link to='/favorite'>Favorite</Link>
        </li>
        <li className='hover:text-theme-900 font-bold mt-2 ml-1 space-x-2'>
        <FontAwesomeIcon icon={faBookmark} /> <Link to='/watchList'>WatchList</Link>
        </li>
        <li className='hover:text-theme-900 font-bold mt-2 ml-1 space-x-2'>
        <FontAwesomeIcon icon={faUser} /> <Link to='/profile'>Profile</Link>
        </li>
        <li  className='hover:text-theme-900 font-bold mt-2 ml-1 space-x-2'>
          <FontAwesomeIcon icon={faGear} /> <button onClick={()=> navigate("/profile")}>Settings</button>
          </li>
        <div className='space-y-4 fixed '>
          {user ? (
            <>
            <div className='mt-72 flex gap-4 '>
            <div className='w-10  rounded-full bg-theme-100 md:hidden overflow-hidden'>
                <img
                  src='Images/PROFILE PICTURE.png'
                  alt='Profile'
                  className="object-cover w-full h-full"
                  onClick={()=> navigate('/profile')}
                />
              </div>
              <h2 className='cursor-pointer mt-2 font-semibold md:hidden'>{user.displayName}</h2>
              
              </div>
            </>
          ) : (
            <>
            <div className='flex flex-col md:flex-none'>
              <button
                onClick={() => navigate('/login')}
                className='bg-theme-300 text-theme-100 w-28 h-8 font-bold rounded-xl text-lg text-center md:block'
              >
                Login
              </button><br />
              <button
                onClick={() => navigate('/register')}
                className='bg-theme-300 text-theme-100 w-28 h-8 font-bold rounded-xl text-lg text-center md:block'
              >
                Sign up
              </button>
              </div>
            </>
          )}
        </div>
      </ul>
    </div>
  </div>
)}

        {message && (
          <div className='flex bg-theme-900 w-56 h-8 mt-4 ml-10 text-green-500 text-theme-100 rounded-md'>
           <FontAwesomeIcon icon={faCheck} className='mt-1 ml-2 text-2xl' /> <p className='ml-3 text-sm mt-1 sm:text-lg md:text-xl '>{message}</p>
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

export default MovieList;

