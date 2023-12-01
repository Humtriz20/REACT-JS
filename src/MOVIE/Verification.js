import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { sendEmailVerification, applyActionCode, checkActionCode } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Verification = () => {
  const { user } = useContext(AuthContext);
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [verificationError, setVerificationError] = useState(null);
  const navigate = useNavigate();

  const handleResendVerification = async () => {
    try {
      await sendEmailVerification(user);
      setVerificationSent(true);
    } catch (error) {
      console.error("Error resending verification email:", error.message);
    }
  };

  const handleVerifyCode = async () => {
    const joinedCode = verificationCode.join("");
    try {
      await checkActionCode(user, joinedCode);
      await applyActionCode(user, joinedCode);
      setVerificationError(null);

      // Redirect to the verification complete page after successful verification
      navigate("/");
    } catch (error) {
      console.error("Error verifying code:", error.message);
      setVerificationError("Invalid verification code");
    }
  };

  const handleDigitChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  if (user && !user.emailVerified) {
    return (
      <div className="bg-yellow-200 p-4 rounded-md mb-4">
        <div className="flex items-center">
          <div className="mr-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-lg text-yellow-800" />
          </div>
          <div>
            <p className="text-yellow-800">
              Please check your email for a verification link.
            </p>
          </div>
        </div>
        {!verificationSent && (
          <button
            onClick={handleResendVerification}
            className="mt-2 px-4 py-2 bg-yellow-500 text-yellow-100 rounded-md hover:bg-yellow-600"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Resend Verification Email
          </button>
        )}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Verification Code
          </label>
          <div className="flex mt-1 space-x-2">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleDigitChange(index, e.target.value)}
                maxLength={1}
                className="w-12 p-2 border border-gray-300 rounded-md text-center"
              />
            ))}
          </div>
          <button
            onClick={handleVerifyCode}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            Verify
          </button>
          {verificationError && (
            <p className="text-red-500 text-sm mt-2">{verificationError}</p>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default Verification;

