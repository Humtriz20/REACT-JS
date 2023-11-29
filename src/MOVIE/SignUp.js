import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare,faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const SignUp = () => {
  const { createUser, user, loading } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // If authentication is still loading, display a loading indicator
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  // If the user is already authenticated, redirect to the home page
  if (user) {
    navigate("/");
  }

  // Handle form submission for user registration with validation
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setNameError("");
    setEmailError("");
    setPasswordError("");

    // Validate name, email, and password
    if (!name) {
      setNameError("Name is required");
      return;
    }

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    createUser(email, password)
      .then((result) => {
        // Update user profile with display name
        updateProfile(result.user, {
          displayName: name,
        });
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
  };

  return (
    <>
    <div>
    <FontAwesomeIcon icon={faArrowLeft} onClick={()=> navigate('/login')} className='text-2xl ml-3 md:w-28 mt-4' />
  </div>
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card flex-shrink-0 h-80 w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <div className="ml-8">
              <label className="label">
                <span className="label-text">Name</span><br />
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={` p-3 w-96 rounded h-12 border border-theme-500 input input-bordered ${
                  nameError ? "border-theme-700" : "border-theme-500"
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <p className="text-sm text-theme-200 mt-1">{nameError}</p>
              )}
            </div>
            <div className="ml-8">
              <label className="label">
                <span className="label-text">Email</span><br />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`p-3 w-96  h-12 rounded  border border-theme-500 input input-bordered ${
                  emailError ? "border-theme-700" : "border-theme-500"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-sm text-theme-200 mt-1">{emailError}</p>
              )}
            </div>
            <div className="ml-8">
              <label className="label">
                <span className="label-text">Password</span><br />
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`p-3 w-96  h-12 rounded  border border-theme-500 input input-bordered ${
                  passwordError ? "border-theme-700" : "border-theme-500"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-sm text-theme-200 mt-1 ">{passwordError}</p>
              )}
            </div>
            <div className="ml-20 mt-6">
              <button className="bg-theme-300 text-theme-100 w-72 h-9  rounded">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
