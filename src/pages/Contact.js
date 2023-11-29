import { Link, Outlet } from "react-router-dom"
export const Contact = () => {
  return (
    <>
    <section className="bg-theme-700 shadow-2xl ">
    <div className=" flex flex-col md:flex-row py-16 w-10/12  gap-5 mx-auto  ">
      <div className=" bg-theme-700 w-12/12 md:w-4/12  flex flex-col md:gap-9 gap-4 rounded outline-theme-500">

      <div className="bg-theme-700  ml-0 mt-3 md:ml-5  text-theme-100">
        <h3 className="md:text-2xl text-xl">Email</h3>
        <p>humphreyighomaria424@gmail.com</p>
        <p>ricchvux424@gmail.com</p>
      </div>


      <div className="bg-theme-700 ml-0 md:ml-5 text-theme-100 ">
        <h3 className="md:text-2xl text-xl">Address</h3>
        <p> After Otogor Health center</p>
        <p> Delta State Nigeria</p>
      </div>

      <div className="bg-theme-700 text-theme-100 md:ml-5 ml-0">
        <h3 className="md:text-2xl text-xl">Phone</h3>
        <p>+2348160852918</p>
      </div>

      </div>

    {/* sectiom 2 */}

      <div className=" shadow-2xl w-12/12 md:w-7/12 rounded">
        <h1 className="md:ml-7  text-2xl text-theme-100 font-bold">Get In Touch</h1>

        <div className="w-12/12 flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-4 px-1 mt-4 ">
          <input className="p-2 w-full rounded-md md:px-3 md:w-full  sm:w-full lg:w-6/12" type="text" placeholder="Your Name" id="" />
          <input className="p-2 w-full rounded-md md:px-3 md:w-full  sm:w-full lg:w-6/12" type="text" placeholder="Your Email" id="" />
        </div>

        <div className="flex flex-col md:flex-col gap-10 w-12/12 px-1 py-5 ">
          <input className="rounded-md w-full md:p-2 p-2 md:w-full sm:w-full lg:w-full " type="text" placeholder="Your subject" id="" />
          <input className="rounded-md w-full p-4 px-2 md:w-full  sm:w-full lg:w-full" type="text" placeholder="Your Message" id="" />
        </div>
        <button className="bg-theme-900 text-theme-100 px-3 py-2 ml-1 md:ml-1 rounded-md mb-2 md:mb-2  sm:w-4/12 sm:ml-36">Contact Me</button>
      </div>

      
  
    </div>

  </section>
    </>
  )
}
/* <div className="div"> inside the contact Page</div>
    <nav className="n">
      <Link className="n1" to='feature'>Feature</Link>
      <Link className="n1" to='new'>New</Link>
    </nav> */
  // <Outlet />