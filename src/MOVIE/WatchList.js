import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export const WatchList = () => {
  const navigate = useNavigate();
  return (
    <div>
    <FontAwesomeIcon icon={faArrowLeft} onClick={()=> navigate('/')} className='text-2xl ml-3 md:w-28 mt-4' />
    WatchList
    <p>This is my watchlist page</p>
  </div>
   
  )
}
