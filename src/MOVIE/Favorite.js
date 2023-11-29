import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faArrowLeft,faHeart,faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

 
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    // Retrieve favorites from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (movie) => {
    // Remove the movie from favorites
    const updatedFavorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavorites(updatedFavorites);

    // Save updated favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    // Display message
    setMessage(`Removed from Favorites`);
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div>
    <div>
      <FontAwesomeIcon icon={faArrowLeft} onClick={()=> navigate('/')} className='text-2xl ml-3 md:w-28 mt-4' />
    </div>
      <h2 className="text-2xl font-bold mb-4  ml-2 mt-4 md:ml-24">Favorites</h2>
      {message &&
      <div className='bg-theme-200 md:w-72 w-56 text-sm md:text-sm h-10 text-center mt-6 ml-4 md:ml-10 text-green-500 rounded-lg text-theme-100 flex items-center justify-center'>
      <FontAwesomeIcon icon={faXmark} className='text-lg mr-6' /><p className="ml-1">{message}</p>
    </div> }
      {favorites.length === 0 ? (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
           <FontAwesomeIcon icon={faHeart} className="text-9xl ml-16  text-theme-600"/>
            <p className=" text-gray-500 ml-14 sm:ml-16 md:ml-0  md:text-3xl mt-10 ">No Favorites added yet.</p>
            <button className='bg-theme-300 text-theme-100 w-48 ml-8 mt-5 h-10 rounded-3xl' onClick={()=> navigate('/')}>Add To Favorite</button>
        </div>
        
      ) : (
        <div className="py-1 md:py-10 w-11/12 mx-auto ">
          <ul className="w-10/12 md:w-11/12 md:flex-row flex-col gap-4 flex-wrap flex md:gap-6 md:flex-wrap cursor-pointer">
            {favorites.map((favorite) => (
              <li key={favorite.imdbID}>
                <Link to={`/movie/${favorite.imdbID}`}>
                <img
                      className="rounded-lg"
                      src={favorite.Poster}
                      alt={`${favorite.Title} Poster`}
                      
                    />
                </Link>
                <strong>{favorite.Title}</strong>
                  <p>{favorite.Year}</p>
                <button
                  type="button"
                  onClick={() => removeFromFavorites(favorite)}
                  className="text-gray-500 hover:text-red-500"
                >
                 <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Favorites;
