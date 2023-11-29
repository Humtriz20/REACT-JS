import React from 'react'
import { useState,useRef,useEffect } from 'react';
// import {FaStepBackward} from '@react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faForwardStep, faBackwardStep, faPlay, faPause,faVolumeHigh,faRedo,faUndo,faForward,faBackward,faRepeat  } from '@fortawesome/free-solid-svg-icons'
import {Modal} from './Modal' // Import your Modal component

// FaStepBackward
// FaStepForward

export const Music = ({ volumeChange }) => {
    const [audio, setAudio] = useState(new Audio());
    const [volume, setVolume] = useState(0.5); //for volume of the music
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0) //index of the music 
    const [isPlaying, setIsPlaying] = useState(false); //to toogle the pause and play function
    const audioRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [startTime, setStartTime] = useState('0:00');
    const [endTime, setEndTime] = useState('0:00');
    const [trackDuration, setTrackDuration] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRepeatOne, setIsRepeatOne] = useState(false);



    const tracks = [
        {
          id: 1,
          title: 'Ayra Starr - Sability-(TrendyBeatz.com)',
          url: 'music/Ayra-Starr-Sability-(TrendyBeatz.com).mp3',
          posterUrl: 'download (10).jfif'
        },
        {
          id: 2,
          title: 'Bella Shmurda - NewBorn Fela',
          url: 'music/Bella-Shmurda-New-Born-Fela-New-Song-(TrendyBeatz.com).mp3',
          posterUrl: 'download (11).jfif'
        },
        {
          id: 3,
          title: 'Central Cee - one Up', 
          url: 'music/Central_Cee_-_One_Up.mp3',
          posterUrl: 'download (12).jfif'

        },
        {
          id: 4,
          title: 'Roddy Ricch - Die Young',
          url: 'music/Roddy-Ricch-Die-Young-(HipHopKit.com).mp3',
          posterUrl: 'download (15).jfif'
        }
        // Add more tracks as needed
      ];

 

  

      const currentTrack = tracks[currentTrackIndex]; //to get the currentTrack

      const playPreviousTrack=()=>{
        // setCurrentTrackIndex(currentTrackIndex - 1)//go to the previous track
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
        
        
      }

      const playNextTrack =()=>{
        // setCurrentTrackIndex(currentTrackIndex + 1)//go to the next track
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length)
      }
      
     const handleProgressChange=(e)=>{
       //updating the array 
       const newProgress =(e.target.value); //e.target.value means the selected range of the user
      setProgress(newProgress)
      audioRef.current.currentTime = (audioRef.current.duration * newProgress) / 100;
        }

        
    useEffect(() => {
      const updateProgress = () => {
        if (audioRef.current) {
          
          const newProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setProgress(newProgress);
        }
      };
      //to clear the previous progress of the previous track
      if (audioRef.current) {
        audioRef.current.addEventListener('timeupdate', updateProgress);
        return () => {
          audioRef.current.removeEventListener('timeupdate', updateProgress);
        };
      }
    }, [audioRef.current]);

    useEffect(() => {
      // const trackDuration = 180;
      
      const minutes = Math.floor(audioRef.current.currentTime / 60);
      const seconds = Math.floor(audioRef.current.currentTime % 60);
      setStartTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    }, [audioRef.current?.currentTime]);
  
    

    const formatDuration = (durationInSeconds) => {
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = Math.floor(durationInSeconds % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    const handleLoadedMetadata = () => {
      // Get the duration of the loaded track in seconds
      const duration = audioRef.current.duration;
      // Update the state with the track duration in minutes and seconds format
      setTrackDuration(formatDuration(duration));
    };

    const handleVolumeChange = (e) => {
      //updating the array 
    const newVolume =(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

    const handlePlayPause =()=>{
        if (isPlaying) {
        audioRef.current.pause();//pause the audio element which is the current element when you want to stop
        } else {
        audioRef.current.play(); //play the audio element which is the current element
        }
        setIsPlaying(!isPlaying); //toggle the pause and play icons
    };
        
    const handleCanPlayThrough = () => { 
      //play the next track automatically when the previous one is finished
      //and we are going to pass the function into the audio element
      if (isPlaying) {
        audioRef.current.play();
      }
    };

    
    const openModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    

    
    const handleSkipBack = () => {
      audioRef.current.currentTime -= 10;
    };
  
    const handleSkipForward = () => {
      audioRef.current.currentTime += 10;
    };
  
    // <FontAwesomeIcon icon={faMoon} />
    // <FontAwesomeIcon icon={faSun} />
  return (
    
<div className="py-10 bg-theme-700 w-full">
  <div className='md:w-10/12  md:ml-10 '>
      {/* <h2 className='px-6'>Music Player</h2> */}
      <img className=' w-11/12 h-48 ml-3 md:w-72 md:h-64 md:ml-48  rounded-md ' src={currentTrack.posterUrl} alt="Poster"  />
      <p className='md:px-10 text-lg md:ml-40 ml-4 w-96 md:w-full text-theme-100 md:text-xl mt-5'>{currentTrack.title}</p>
      {/*onEnded Automatically play next track when the current track ends  */}
      {/* the audio element is the one we can use to acess the ref */}
      
        <audio ref={audioRef} src={currentTrack.url} onEnded={playNextTrack} onLoadedMetadata={handleLoadedMetadata} onCanPlayThrough={handleCanPlayThrough}>  
            <source src={currentTrack.url} type="audio/mpeg" /> {/* MP3 format */}
          </audio>
      
     
      <span className='ml-3  md:ml-4 text-theme-100'>{startTime}</span>
       <input
          type="range"
          value={progress}
          min="0"
          max="100"
          step="0.1"
          onChange={handleProgressChange}
          class='appearance-none w-56 md:w-6/12 h-1 md: ml-1 m mr-2 mt-8 bg-theme-100 rounded-full outline-none thumb:w-8 thumb:h-8 thumb:bg-theme-400 '
          
        />
      <span className='text-theme-100'>{trackDuration}</span>

      
      <div className="flex gap-4 md:gap-16 md:ml-32 mt-6 px-16 md:px-2">
        {/* function to repeat song */}
      {/* <FontAwesomeIcon
          icon={isRepeatOne ? faRedo : faUndo}
          className="cursor-pointer h-5 mt-5 text-theme-100  "
          onClick={() => setIsRepeatOne(!isRepeatOne)}
        /> */}
     
      <FontAwesomeIcon className='cursor-pointer h-8 mt-3 text-theme-100' onClick={playPreviousTrack} icon={faBackwardStep} />
      
       {/* Skip Back button */}
       <FontAwesomeIcon
          icon={faBackward}
          className="cursor-pointer h-5 mt-5 text-theme-100"
          onClick={handleSkipBack}
        />
       
      {/* pause and play  */}
      <div className='rounded-full px-4 h-14 md:w-14 md:h-14  text-center bg-theme-100 '
      ><button onClick={handlePlayPause}>{isPlaying ?  <FontAwesomeIcon className='h-8 mt-3' icon={faPause}  />
       : <FontAwesomeIcon className='h-6 mt-4 ml-1'  icon={faPlay} />}</button></div>
      {/* Skip Forward button */}
      <FontAwesomeIcon
        icon={faForward}
        className="cursor-pointer h-5 mt-5 text-theme-100"
        onClick={handleSkipForward}
       />
      <FontAwesomeIcon onClick={playNextTrack} className='cursor-pointer h-8 mt-3 text-theme-100' icon={faForwardStep} />
          
      
          {/* to toggle the volume */}
        <FontAwesomeIcon className='cursor-pointer hidden mt-5 md:block text-theme-100' onClick={openModal} icon={faVolumeHigh}   />
        <Modal isOpen={isModalOpen} volumeChange={handleVolumeChange} volume={volume} />
      </div>
      </div>
    </div>
  );
};

export default Music;

  

