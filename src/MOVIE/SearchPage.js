import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

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
        setError('No Internet Connection. Please try again later.');
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

  return (
    <>
      <div className='flex  '>
      <FontAwesomeIcon icon={faArrowLeft} onClick={()=> navigate('/')} className='text-2xl ml-4 md:w-28 mt-6 md:block' />
        <div className='relative md:ml-96 sm:ml-36 ml-10 mt-5'>
            <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 md:text-theme-700 text-sm text-theme-700 block md:hidden'
            
          />
          <input
            type='text'
            id='search'
            placeholder='Search movies...'
            className='pl-10 pr-10 py-1 block md:hidden w-52 md:w-96 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500'
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {error && <p className='text-red-500 mt-2'>{error}</p>}
          {searchTerm && (
            <button
              type='button'
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500  block md:hidden'
              onClick={handleCancelSearch}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>
      </div>
      {searchTerm && filteredMovies.length === 0 ? (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <p className='text-gray-500 md:text-2xl ml-10 mt-4'>
            Result Not found.
          </p>
        </div>
      ) : (
        searchTerm && (
          <div className='py-8 w-11/12 bg-theme-100 mx-auto'>
            <ul className='w-12/12 md:w-12/12 md:flex-row flex-row gap-5 flex-wrap flex md:gap-6 md:flex-wrap cursor-pointer'>
              {filteredMovies.map((movie) => (
                <li key={movie.imdbID}>
                  <div>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <strong>Rating:</strong>{' '}
                      {movie.Ratings && movie.Ratings.length > 0
                        ? movie.Ratings[0].Value
                        : 'N/A'}
                      <img
                        src={movie.Poster}
                        alt={`${movie.Title} Poster`}
                        className='rounded-lg w-32 sm:w-40 md:w-64'
                      />
                    </Link>
                    <div className='w-32 md:w-64'>
                      <strong>{movie.Title}</strong>
                    </div>
                    <p>{movie.Year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </>
  );
};

export default SearchPage;
