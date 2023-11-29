import React from 'react';
import { Link } from 'react-router-dom';
// import { musicTrack } from './musicTrack';


const MusicList = ({ musicTrack}) => {
  
  return (
    <div>
      <h1>List of Music Tracks</h1>
      <ul className='bg-theme-700 text-theme-100'>
        {musicTrack.map(track => (
          <li key={track.id}><hr  className='bg-theme-100'/>
            <Link to={`/tracks/${track.id}`}>{track.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MusicList;




