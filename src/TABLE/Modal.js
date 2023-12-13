import React from 'react'
import { useState } from 'react';

//the best way to create a modal in reactjs

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const Open=()=>{
        //this is to toggle
        setIsOpen(!isOpen)
    }
    const Close=()=>{
        setIsOpen(false)
    }
  return (
    
    <div>
        <button onClick={Open}>OPEN</button>
        
    {
        isOpen && (
            <div className='bg-theme-600 border w-64'>
                <button onClick={Close}>Close</button>
                <p>my modal content inside here </p>
                <button>MODAL button</button>
            </div>
        )

    }
    </div>
  )
}
