import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { Toast } from 'react-toastify/dist/components';

const OtpBox = ({ name, email, password }) => {
  const navigate = useNavigate();

  const [fisrtOtp, setFisrtOtp] = useState("");
  const [secOtp, setSecOtp] = useState("");
  const [thirdOtp, settTirdOtp] = useState("");
  const [forthOtp, setForthOtp] = useState("");

  const fn_submit = () => {
    const otp = `${fisrtOtp}${secOtp}${thirdOtp}${forthOtp}`;
    const params = {
      name,
      email,
      password,
      otp,
    };
    axios
      .post("http://localhost:3001/register", params)
      .then((result) => {
        alert(result?.data?.message);
        navigate("/login");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white p-1 rounded-md shadow-md max-w-md mx-auto mt-1">
      <h2 className="text-xl font-bold mb-2 text-center">OTP Verification</h2>
      <div className="mb-2">
        <p className="text-gray-600 text-sm font-bold text-center">
          We have sent a verification code on your email
        </p>
      </div>
      <div className="grid grid-cols-4  mb-1 mx-10">
        <input
          type="text"
          maxLength="1"
          className="w-6 h-6 text-center border-b-1.5 border-solid border-gray-300 bg-slate-400"
          onChange={(e) => setFisrtOtp(e.target.value)}
        />
        <input
          type="text"
          maxLength="1"
          className="w-6 h-6 text-center  border-b-1.5 border-solid border-gray-300 bg-slate-400 "
          onChange={(e) => setSecOtp(e.target.value)}
        />
        <input
          type="text"
          maxLength="1"
          className="w-6 h-6 text-center border-b-1.5 border-solid border-gray-300 bg-slate-400"
          onChange={(e) => settTirdOtp(e.target.value)}
        />
        <input
          type="text"
          maxLength="1"
          className="w-6 h-6 text-center  border-b-1.5 border-solid border-gray-300 bg-slate-400"
          onChange={(e) => setForthOtp(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white py-2 px-10   rounded-full    "
          onClick={fn_submit}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OtpBox;
