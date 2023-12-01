import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import Verification from "./Verification";

const Login = () => {
  const { loginUser, loading, user, loginWithGoogle, sendEmailVerification } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error('Google Login Error:', error.message);
    }
  };

  
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const result = await loginUser(email, password);
  
      console.log("Login Result:", result);
  
      if (result && result.user && !result.user.emailVerified) {
        console.log("User not verified. Sending verification email.");
        await sendEmailVerification(result.user);
        navigate("/verification");
      } else {
        console.log("User verified. Navigating to homepage.");
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };
    
  
  
    
  

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-80 border border-theme-500 rounded">
      <div className="card-body">
        {loading && <span className="loading">Loading...</span>}

        {!loading && !user && (
          <form onSubmit={handleFormSubmit}>
            <div className="mt-12">
              <label>
                <span className="label-text md:ml-8 text-xl">Email</span>
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
              <Link to="/forgotten-password">Forgot your password?</Link>
              {passwordError && (
                <p className="text-sm text-theme-200 mt-1 md:ml-8">{passwordError}</p>
              )}
            </div>
            <div className="flex items-center justify-between mt-6">
              <button className="bg-theme-300 text-theme-100 w-16 h-9 text-center rounded md:ml-8 text-xl">
                Login
              </button>
              <button onClick={handleGoogleLogin}>Sign in with Google</button>
              <button
                className="bg-theme-300 text-theme-100 w-24 h-9 rounded text-lg mr-6"
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
  );
};

export default Login;
