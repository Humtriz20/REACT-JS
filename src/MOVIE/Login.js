import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // Handle form submission for user login with validation
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };

  return (

    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-80 border border-theme-500 rounded">
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <div className="mt-12">
              <label className="">
                <span className="label-text md:ml-8  text-xl">Email</span>
              </label><br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={`input input-bordered w-80 p-2 md:ml-8 mt-2 border ${
                  emailError ? "border-theme-700" : "border-theme-500"
                } rounded`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-sm text-theme-200 mt-1 md:ml-8">{emailError}</p>
              )}
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text md:ml-8 text-xl">Password</span>
              </label><br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`input input-bordered w-80 p-2 md:ml-8 border ${
                  passwordError ? "border-theme-700" : "border-theme-500"
                } rounded`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-sm text-theme-200 mt-1 md:ml-8">{passwordError}</p>
              )}
            </div>
            <div className="flex items-center justify-between mt-6">
              <button className="bg-theme-300 text-theme-100 w-16 h-9 text-center rounded md:ml-8 text-xl">
                Login
              </button>
              <button
                className="bg-theme-300 text-theme-100 w-24 h-9 rounded text-lg mr-6"
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
