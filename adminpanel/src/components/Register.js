import React, { useState } from "react";
import foodies from "../assets/foodies.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OtpBox from "./OtpBox";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  //STATES
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showOtpBox, setShowOtpBox] = useState(false);

  //MIDDLEWIRES
  const navigate = useNavigate();

  //FUNCTIONS
  const handleCloseOtpBox = () => {
    setShowOtpBox(false);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/send-otp", { email })
      .then((result) => {
        setShowOtpBox(true);
        // alert(result?.data);
        toast.success(' OPT SEND SUCCESSFULLY!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
      .catch((err) => {
        // If there is an error, log it to the console
        console.log(err);
   toast.error('Error sending OTP. Please try again.');
      });
      
  };

  return (
    <div className="flex h-screen items-center bg-gradient-to-r from-blue-500 to-purple-500 justify-center">
      <div className="w-full max-w-md bg-gray-700 p-6 rounded-md shadow-md">
        <div className="text-center">
          <img
            src={foodies}
            alt="Logo"
            className="mx-auto h-20 rounded-full mb-2"
          />
          <p className="text-white font-bold text-xl">Register for ADMIN</p>
        </div>
        <form className="mt-2">
          {/* Add your form fields here */}
          <div className="mb-2">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="HOME@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={HandleSubmit}
            type="submit"
            className="w-full bg-purple-500 text-white p-3 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Sign up
          </button>
        </form>
        {showOtpBox && (
          <OtpBox
            name={name}
            email={email}
            password={password}
          />
        )}
        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            If you already have an account?{" "}
            <a href="/login" className="text-purple-500">
              Login here.
            </a>
          </p>
        </div>
        {/* <div className="mt-4 flex justify-center items-center">
          <span className="mr-4">Or log in with</span>
          <a href="#" className="text-blue-500 hover:underline">
            Facebook
          </a>
          <span className="mx-2 text-gray-500">•</span>
          <a href="#" className="text-red-500 hover:underline">
            Google
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default RegisterForm;
