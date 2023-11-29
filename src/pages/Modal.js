import React, { useState, useRef} from 'react';
// import './Modal.css'; // Import your CSS file for modal styles


export const Modal = ({isOpen,volumeChange,volume}) => {
  const audioRef = useRef(null);
  // const [volume, setVolume] = useState(0); // State to manage the volume value

  
  if (!isOpen) {
    return null;
  }


    //   const handleVolumeChange = (e) => {
    //     //updating the array 
    //   const newVolume =(e.target.value);
    //   setVolume(newVolume);
    //   audioRef.current.volume = newVolume;
    // };
  
  return (
    <div className="bg-theme-700 w-48 h-8 rounded cursor-pointer hidden mt-1 md:block">
     {/* <span className="cursor-pointer " onClick={onClose}>&times;</span> */}
     <div className="ml-6">
      
     <input
        type="range"
        value={volume}
        min="0"
        max="1"
        step="0.01"
        onChange={volumeChange}
       className='appearance-none w-36 h-1 bg-theme-100 rounded-full outline-none '
      />
     
    </div>
  </div>
  )
}
