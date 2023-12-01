// ForgottenPassword.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from "./FirebaseConfig"; // Make sure to import auth from FirebaseConfig
import { sendPasswordResetEmail } from "firebase/auth";

// ... rest of the code
const ForgottenPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error('Password Reset Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Forgotten Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {resetSent && <p>Password reset email sent. Check your inbox.</p>}
      {/* Link back to login */}
      <Link to="/login">Remember your password? Login</Link>
    </div>
  );
};


export default ForgottenPassword;
