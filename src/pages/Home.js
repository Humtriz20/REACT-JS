import React from 'react'



// import { Quiz } from './Quiz'
// import { Users } from './Users'
// import { useNavigate } from 'react-router-dom'
export const Home = () => {
  // const navigate = useNavigate()
  
  return (<> 
  
     <section className='bg-theme-700'>
     <div className="  text-theme-100 py-16 flex flex-col-reverse  md:flex-row mx-auto w-10/12 "> 
      <div className='md:w-5/12 mt-7   '>
        <h1 className="text-3xl font-bold ">Hi, I am <span className='text-theme-900  '>Humphrey</span> </h1>
        <h2 className='font-bold text-theme-900'>DESIGNER - <span className='text-theme-100'>DEVELOPER</span>  </h2>
        <p className=" mt-2  md:w-96 ">I am a web developer with experience in HTML, CSS, Javascript, React and Tailwind CSS and I love to learn new things</p>
        <button className="bg-theme-900 mt-4 p-3 w-44 text-theme-100 md:mt-6">Contact Me</button>
      </div>
 
 
 
      <div className='md:w-1/2 z-10 '>
       <img className="rounded-lg   mix-blend-multiply md:mt-0  z-10  " src="Images/how-to-become-a-web-developer.jpg" alt="" />
      </div>
      
    </div>  
    </section>
  
    
 
     

  </>
  
  )
}
//if we use order-confirmed it will direct us to the not found page
/* <div className="relative bg-theme-300  flex flex-col ml-20 md:ml-1 space-y-3 lg:space-y-6 md:flex-row "> 
<h1 className=" absolute font-bold  font-serif  text-2xl top-72 sm:text-3xl left-1 md:left-44 md:top-16 lg:text-4xl  lg:font-extrabold ">Hi, I am Humphrey</h1>
<p className="absolute top-96  md:top-24 left-1 md:left-48  lg:text-2xl lg:top-30"> I am into webDevelopment</p>
<p className="absolute -bottom-96  md:top-32 left-1 md:left-48  lg:text-2xl lg:top-36"> And a Frontend Developer  </p>
<button className=" font-bold md:left-48 absolute top-96 md:top-48 left-1 lg:w-72 lg:h-14 lg:text-2xl lg:top-64 bg-theme-300 text-theme-100 w-56 rounded-full h-10 text-center ">Contact Me</button>
<img className=" w-56  rounded-full absolute right-22 top-6 md:top-12 md:right-96  lg:w-96 lg:h-96 lg:top-1 lg:right-40  " src="Images/IMG_8htbvg.jpg" alt="" />
</div>
  */
