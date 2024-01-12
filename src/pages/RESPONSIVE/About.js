import React from 'react'

export const About = () => {
  return (  
    <section className='bg-theme-700  text-theme-100'>
    <div className='py-16 flex flex-col md:flex-row w-10/12 mx-auto md:gap-28 md:w-10/12 '>
      <div className='md:w-1/2  md:mt-3 z-10 '> 
        <img className="  rounded md:w-96 md:h-64 mix-blend-multiply" src="Images/h68x0up43hmknl5tjcww.webp" alt="" />
      </div>

      <div className='md:w-11/12'>
        <h3 className='text-2xl mt-5 font-bold md:h-10 text-theme-900 '>About Me</h3>
        <p className='md:w-4/5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, esse, ut, id officia ea incidunt nesciunt consequatur voluptatum dolores debitis quasi! Nihil quod consequatur sit quasi laborum animi delectus velit.</p>
        <button className="bg-theme-900 mt-3 p-3 w-44  text-theme-100 md:mt-6">Hire Me</button>
      </div>
    </div>
    </section>
  
  )
}
