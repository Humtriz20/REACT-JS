import React from 'react';
import NavBar from './NavBar';
import MovieItem from './MovieItem';

const MovieList = ({
  movies,
  searchTerm,
  error,
  favorites,
  message,
  addToFavorites,
}) => {
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <NavBar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleCancelSearch={handleCancelSearch}
      />
      {message && (
        <div className='bg-theme-900 w-56 h-8 mt-4 ml-10 text-green-500 text-theme-100 rounded-md'>
          <p className='ml-3 text-xl '>{message}</p>
        </div>
      )}
      {filteredMovies.length === 0 ? (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {/* ... (your existing code for no result found) */}
        </div>
      ) : (
        <div className='py-8 w-11/12 bg-theme-100 mx-auto'>
          <ul className='w-12/12 md:w-12/12 md:flex-row flex-row gap-5 flex md:gap-6 md:flex-wrap cursor-pointer'>
            {filteredMovies.map((movie) => (
              <li key={movie.imdbID}>
                <MovieItem movie={movie} addToFavorites={addToFavorites} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieList;
