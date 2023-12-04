import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword,fetchSignInMethodsForEmail,onAuthStateChanged,sendEmailVerification  } from "firebase/auth";
import Verification from "./Verification";
import { faEye, faEyeSlash,faTimes} from '@fortawesome/free-solid-svg-icons';
import { loginUser, loginWithGoogle} from "./AuthProvider"; // Make sure AuthService is imported correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {auth} from './FirebaseConfig'


const Login = () => {
  const { loginUser, loading, user, setUser, loginWithGoogle, sendEmailVerification} = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [WrongDetailsError, setWrongDetailsError] = useState("");


  
  
   

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error('Google Login Error:', error.message);
    }
  };

   // If authentication is still loading, display a loading indicator
   if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

 
  
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Reset previous messages
    setEmailError("");
    setPasswordError("");
    setWrongDetailsError("");

    // Validate email and password
    if (!email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }

    try {
      // Attempt login
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);

      // Successful login
      setUser(result.user);
      navigate("/");
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error.message);

      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setWrongDetailsError("Incorrect email or password. Please try again.");
        return;
      } else {
        // Handle other login errors
        setWrongDetailsError("Incorrect email or password. Please try again.");
      }
    }

    // Reset form fields
    setEmail("");
    setPassword("");
  };
  
 
 
  
  
 
  
    
  
  return (
<>


    <div className="min-h-screen bg-base-200 flex items-center justify-center bg-theme-700 font-bold">
    <div className="card flex-shrink-0 w-11/12 max-w-sm shadow-2xl bg-theme-100 bg-base-100 h-80 rounded-xl">
      <div className="card-body">
      
          {WrongDetailsError && (
            <>
          <p className="text-sm text-theme-200 md:ml-10 mt-4">{WrongDetailsError}</p>
            </>
          )}
        
        {!loading && !user && (
          <form onSubmit={handleFormSubmit}>
            <div className="mt-2 md:ml-0 ml-4">
              <label>
                <span className="label-text md:ml-4 text-xl">Email</span>
              </label><br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={`input input-bordered w-64 sm:w-80 md:w-80 p-2 md:ml-4 mt-2 border ${
                  emailError ? "border-theme-700" : "border-theme-500"
                } rounded`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-sm text-theme-200 mt-1 md:ml-5">{emailError}</p>
              )}
            </div>
            <div className=" mt-4  md:ml-0  ml-4 relative">
              <label className="label">
                <span className="label-text md:ml-4 text-xl">Password</span>
              </label><br />
             
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={`input input-bordered w-64 sm:w-80 md:w-80 p-2 md:ml-4 border ${
                  passwordError ? "border-theme-700" : "border-theme-500"
                } rounded`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                  type="button"
                  className="absolute top-12 transform -translate-y-1/2 right-16 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="text-theme-500"
                  />
                </button>
              <p className="md:ml-44 ml-28 text-sm sm:ml-44 w-64 text-theme-300"><Link to="/forgotten-password">Forgot your password?</Link></p>
              {passwordError && (
                <p className="text-sm text-theme-200 mt-1 md:ml-8">{passwordError}</p>
              )}
               
            </div>
            <div className="flex items-center justify-between mt-6 md:ml-0 ml-2 sm:ml-2">
              <button className="bg-theme-300 text-theme-100 w-16 h-9 text-center rounded-md sm:ml-2 md:ml-4 text-xl">
                Login
              </button>
              <button onClick={handleGoogleLogin}>Sign in with Google</button>
              <button
                className="bg-theme-300 text-theme-100 w-24 h-9 rounded text-lg  mr-3"
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  </div>
  </>
  );
};

export default Login;
