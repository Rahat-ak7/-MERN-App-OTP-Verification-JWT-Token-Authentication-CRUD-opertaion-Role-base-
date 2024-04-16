import React, { useState } from "react";
import foodies from "../assets/foodies.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })

      .then((res) => {
        if (res.data.Status === "Sucessful") {
          if (res.data.role === "admin") {
            navigate("/dashboard");
            toast.success('Admin has been Logedin', {
              position: "top-center",
              theme: "colored",
              });

            
          } else {
            navigate("/visiter");
            toast.warn('warning....')
          }
        }
        // navigate("/");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen items-center bg-gradient-to-r from-blue-500 to-purple-500 justify-center">
      <div className="w-full max-w-md bg-gray-700 p-5 rounded-md shadow-md">
        <div className="text-center">
          <img
            src={foodies}
            alt="Logo"
            className="mx-auto h-20 rounded-full mb-4"
          />
          <p className="text-white font-bold text-xl">Login for ADMIN</p>
        </div>
        <form onSubmit={HandleSubmit} className="mt-6">
          {/* Add your form fields here */}

          <div className="mb-4">
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
          <div className="mb-6">
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
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            if you don't have already an account?{" "}
            <a href="/register" className="text-purple-500">
              Create here.
            </a>
          </p>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <span className="mr-4">Or log in with</span>
          <a href="#" className="text-blue-500 hover:underline">
            Facebook
          </a>
          <span className="mx-2 text-gray-500">•</span>
          <a href="#" className="text-red-500 hover:underline">
            Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
