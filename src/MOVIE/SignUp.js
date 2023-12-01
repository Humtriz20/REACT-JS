import React, { useEffect,useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faArrowLeft,faHeart,faXmark } from '@fortawesome/free-solid-svg-icons';
import VerificationCode from "./VerificationCode"; // Import the VerificationCode component

const SignUp = () => {
  const { createUser, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  


  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");

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
        updateProfile(result.user, {
          displayName: name,
        });
        navigate("/verificationCode");
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
