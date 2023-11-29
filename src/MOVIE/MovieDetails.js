import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {faArrowLeft,faCalendarDays,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '5cf66a07'; // Replace with your OMDb API key
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
    <div>
      <FontAwesomeIcon icon={faArrowLeft} onClick={()=> navigate('/')} className='text-xl ml-4 md:ml-0 md:w-28 mt-4' />
    </div>
    <div>
      {movieDetails ? (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row md:gap-8 mt-10'>
        <img className='rounded-lg mt-3 sm:w-64 ' src={movieDetails.Poster} alt={`${movieDetails.Title} Poster`} />
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        <div >
          <div className='bg-theme-700 w-20 h-10 rounded-b-2xl rounded-e-2xl rounded-r-sm '>
            <p className=' w-12 md:mt-64  h-7 text-center rounded-lg text-2xl text-theme-100 mt-8 sm:mt-4 ml-2'>{movieDetails.Ratings && movieDetails.Ratings.length > 0 ? movieDetails.Ratings[0].Value : 'N/A'}</p>
         </div>
          <h2 className='mt-3 text-3xl'>{movieDetails.Title}</h2>
          <span><FontAwesomeIcon className='text-2xl ml-1' icon={faCalendarDays} /></span><span><p>{movieDetails.Year}</p></span>
          <p className='mt-2 md:w-6/12'>{movieDetails.Plot}</p>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default MovieDetails;
