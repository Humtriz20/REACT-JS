// import React from 'react'
// import { useNavigate } from 'react-router-dom'

export const Skills = () => {
  // const navigate = useNavigate()

  //   const handleLogin =()=>{
  //       navigate('/login')
  //   }
  //   const handleSignUp =()=>{
  //     navigate('/signUp')
  //   }
  return (
    <>
    <section className="bg-theme-100">
    <div className=" flex flex-col md:flex-row py-9 w-10/12  mx-auto">
      <div className="  md:w-10/12  md:mx-auto rounded-lg  ">
        <h1 className=" text-theme-900 text-2xl font-bold ml-20 md:mt-1 sm:ml-44 md:ml-96 "> My Skills</h1>
        <p className="text-theme-700 text-xl md:mt-3 sm:mt-3 md:ml-16 justify-center">As you can see in this section below, i have skills in HTML, CSS, JS, React Js, Tailwind and SQL</p>

        <div className="flex md:w-12/12 md:items-center justify-between flex-wrap gap-6 md:gap-1 md:h-64 mt-4 md:mt-0 sm:mt-8">
       
          <div >
           <img className="w-28 mix-blend-multiply " src="Images/HTML.png" alt="" />
           {/* <h1>HTML</h1> */}
          </div>


          <div>
           <img className="w-20  mix-blend-multiply" src="Images/CSS.png" alt="" />
           {/* <h1>CSS</h1> */}
          </div>


          <div>
           <img className="w-32 md:w-32 mix-blend-multiply" src="Images/JS.png" alt="" />
           {/* <h1>CSS</h1> */}
          </div>

          <div>
           <img className="w-28 md:w-24  mix-blend-multiply" src="Images/React js.png" alt="" />
           {/* <h1>React Js</h1> */}
          </div>


          <div >
           <img className="w-24 md:w-28  mix-blend-multiply" src="Images/Taiwlind.png" alt="" />
           {/* <h1>TailWind css</h1> */}
          </div>
          

          <div>
           <img className="w-28 mix-blend-multiply" src="Images/SQL.png" alt="" />
           {/* <h1>SQL</h1> */}
          </div>

          

          </div>
      </div>

      

      
    </div>
    </section>
    {/* <button onClick={handleLogin} >Login</button>
    <button onClick={handleSignUp}>Sign Up</button>
     */}

{/* <div className=" w-12 md:w-12">
            <img  src="Images/HTML.png" alt="" />
          </div>
          
          <div className="md:w-26   ">
           <img  src="Images/CSS.png" alt="" />
          </div>

          <div className=" md:w-26 ">
            <img  src="Images/JS.png" alt="" />
          </div>

          <div className=" md:w-32  ">
            <img  src="Images/React js.png" alt="" />
          </div>

          <div className=" md:w-28  ">
            <img  src="Images/Taiwlind.png" alt="" />
          </div>

          <div className=" md:w-40  ">
            <img   src="Images/SQL.png" alt="" />
          </div> */}
    </>
  )
}
