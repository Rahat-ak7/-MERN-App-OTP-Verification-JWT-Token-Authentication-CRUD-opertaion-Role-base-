import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";

import { FaEdit } from "react-icons/fa";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  //DELETE CLIENT
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex ]">
        <div className=" border w-full bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2 className="text-[#4e73df] text-xl leading-[19px] font-bold">
              CLIENTS DETAIL
            </h2>
          </div>
          <div className="flex justify-between">
            {/* //BUTTON */}
            <button>
              <Link to="/create">
                {" "}
                <FaUserPlus className="text-4xl mx-4" />
              </Link>
              <p className="mx-2 font-extrabold">Add New</p>
            </button>

            {/* //TOGGLE */}
            <label className="relative  cursor-pointer  items-end">
              <input type="checkbox" value="" class="sr-only peer" />
              <div className="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95"></div>
              <p className="font-bold text-blue-500 text-sm ">
                Enable | Disable
              </p>
            </label>
          </div>
          {/* //TABLE */}

          <div className=" shadow-md sm:rounded-lg">
            <table className="w-full     text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ResturantName
                  </th>
                  <th scope="col" className="px-6 py-3">
                    OwnerName
                  </th>
                  <th scope="col" className="px-6 py-3">
                    contact_no
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr className="bg-blue-500 border-b border-blue-400">
                      {/* <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Apple MacBook Pro 17"
                  </th> */}
                      <td className="px-6 py-4">{user.resturantname}</td>
                      <td className="px-6 py-4">{user.ownername}</td>
                      <td className="px-6 py-4">{user.contactno}</td>
                      <td className="px-6 py-4">{user.address}</td>
                      <td className="px-1 py-4">
                        <div className="flex gap-1">
                          <button className="bg-violet-700 h-8  mx-1 rounded-[3px] text-white  px-2">
                            <Link to={`/update/${user._id}`}>
                              <FaEdit className="text-xl" />{" "}
                            </Link>
                          </button>
                          <button
                            className="bg-red-600  h-8  rounded-[3px] text-white  px-2"
                            onClick={(e) => handleDelete(user._id)}
                          >
                            <MdDeleteSweep className="text-xl" />
                          </button>
                          <label className="relative  cursor-pointer  items-end">
                            <input
                              type="checkbox"
                              value=""
                              class="sr-only peer"
                            />
                            <div className="  group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-16  h-9  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-7 after:w-7 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-checked:after:content-['✔️'] peer-hover:after:scale-95"></div>
                            <p className="font-bold text-blue-500 text-sm ">
                              Enable | Disable
                            </p>
                          </label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
