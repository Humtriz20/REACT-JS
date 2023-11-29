import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const MovieItem = ({ movie, addToFavorites }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='flex gap-1'>
      <div>
        <Link to={`/movie/${movie.imdbID}`}>
          {/* ... (your existing code for movie details) */}
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
          {/* ... (your existing code for movie title and year) */}
        </div>
        {isHovered && (
          <div className='absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <FontAwesomeIcon
              icon={faCirclePlay}
              className='text-theme-100 text-6xl'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
