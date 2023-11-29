import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export const MusicDetail = ({ musicTrack }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [volume, setVolume] = useState(0.5);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(parseInt(id, 10));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCurrentTrackIndex(parseInt(id, 10));
  }, [id]);

  const handleProgressChange=(e)=>{
    //updating the array 
    const newProgress =(e.target.value); //e.target.value means the selected range of the user
   setProgress(newProgress)
   audioRef.current.currentTime = (audioRef.current.duration * newProgress) / 100;
     }

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration > 0) {
        const newProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(newProgress);
      }
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);

    // return () => {
    //   audioRef.current.removeEventListener('timeupdate', updateProgress);
    // };
  }, []);

  const currentTrack = musicTrack[currentTrackIndex - 1] || {}; // Using empty object as a fallback if currentTrack is undefined
  const trackTitle = currentTrack.title || 'Unknown Title';
  const trackUrl = currentTrack.url || '';
  const trackPosterUrl = currentTrack.poster || '';

  
  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % musicTrack.length;
    if (nextIndex >= 0 && nextIndex < musicTrack.length) {
      navigate(`/tracks/${nextIndex}`);
    }
    // navigate(`/tracks/${nextIndex}`);
    console.log(nextIndex)
  };

  const playPreviousTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + musicTrack.length) % musicTrack.length;
    if (prevIndex >= 0 && prevIndex < musicTrack.length) {
      navigate(`/tracks/${prevIndex}`);
    }
    console.log(prevIndex)
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleCanPlayThrough = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="px-12 py-10 border-theme-300">
      <button onClick={goBack}>Back</button>
      <p>{trackPosterUrl}</p>
      <p className="px-10 text-xl mt-5">{trackTitle}</p>
     
      
      <audio
        ref={audioRef}
        src={trackUrl}
        onEnded={playNextTrack}
        onCanPlayThrough={handleCanPlayThrough}
      >
         <source src={trackUrl} type="audio/mpeg" /> {/* MP3 format */}
         <source src={trackUrl} type="audio/ogg" /> {/* OGG format */}
      </audio>
      <input
        type="range"
        value={progress}
        min="0"
        max="100"
        step="0.1"
        onChange={handleProgressChange}
        className="appearance-none w-60 h-1 ml-4 bg-theme-300 rounded-full outline-none thumb:w-8 thumb:h-8 thumb:bg-theme-400"
      />
      <div className="flex gap-6 mt-2 px-12">
        <FontAwesomeIcon className="cursor-pointer h-8 mt-3" onClick={playPreviousTrack} icon={faBackward} />
        <div className="rounded-full w-14 h-14 md:w-14 md:h-14 text-center bg-theme-900">
          <button onClick={handlePlayPause}>
            {isPlaying ? <FontAwesomeIcon className="h-8 mt-3" icon={faPause} /> : <FontAwesomeIcon className="h-6 mt-4 ml-1" icon={faPlay} />}
          </button>
        </div>
        <FontAwesomeIcon onClick={playNextTrack} className="cursor-pointer h-8 mt-3" icon={faForward} />
      </div>
    </div>
  );
};

export default MusicDetail;
