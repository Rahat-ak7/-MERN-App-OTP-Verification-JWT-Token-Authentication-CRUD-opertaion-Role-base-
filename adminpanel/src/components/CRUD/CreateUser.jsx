import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [resturantname, setResturantName] = useState();
  const [ownername, setOwnerName] = useState();
  const [contactno, setContactNo] = useState();
  const [address, setAddress] = useState();

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/createUser", {
        resturantname,
        ownername,
        contactno,
        address,
      })

      .then((result) => {
        console.log(result);
        navigate("/dashboard");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-slate-700 h-screen ">
      <form onSubmit={Submit} className="max-w-sm mx-auto  py-10">
        <div className="bg-slate-900  rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
          <div>
            <p className="text-3xl font-bold text-gray-300 text-center mt-8">
              ADD NEW CLIENT
            </p>
          </div>
          <div className="mt-6">
            <div className="mb-2">
              <label className="block mx-3 text-sm font-medium text-gray-900 dark:text-white">
                ResturantName
              </label>
              <input
                type="text"
                name="resturantname"
                className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder=""
                required
                onChange={(e) => setResturantName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block mx-3 text-sm font-medium text-gray-900 dark:text-white">
                OwnerName
              </label>
              <input
                type="text"
                name="ownername"
                className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block mx-3 text-sm font-medium text-gray-900 dark:text-white">
                Contact_no
              </label>
              <input
                type="number"
                name="contactno"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block mx-3 text-sm font-medium text-gray-900 dark:text-white">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={Submit}
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ADD CLIENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
