import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare,faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  

  // Render user's profile information
  return (
    <div>
      <div className="">
      <div>
      <FontAwesomeIcon icon={faArrowLeft} onClick={()=> navigate('/')} className='text-xl ml-4 md:ml-0 md:w-28 mt-4' />
    </div>
        <div className="flex items-center justify-center ml-2 md:ml-0">
          <div>
          <div className='w-20 rounded-full bg-theme-10 overflow-hidden ' >
            <img
              src='Images/PROFILE PICTURE.png'
              alt='Profile'
              className="object-cover w-full h-full"
            
            />
            </div>
          <h2 className="text-lg  mt-5">Name</h2>
            <h3 className="md:text-lg text-md font-bold">{user?.displayName}</h3><span></span>
            <h2 className="text-lg  mt-5">Email</h2>
            <p className="md:text-lg text-md font-bold">{user?.email}</p>
            <h1 className="mt-4 md:text-md font-semibold ">About Us </h1>
            <h1 className="mt-4 md:text-md font-semibold">Help Center </h1>
            <h1 className="mt-4 md:text-md font-semibold">Contact Us </h1>

            <button className="text-theme-200 text-lg ml-24 font-bold md:ml-16 mt-10 " onClick={()=> navigate('/login')}>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;