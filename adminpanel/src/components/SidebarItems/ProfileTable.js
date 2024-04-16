import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";

import { FaEdit } from "react-icons/fa";

function ProfileTable({ update }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get("http://192.168.1.13:5000/user/getAll")
      .then((res) => setUsers(res.data?.data?.reverse()))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, [update]);

  //DELETE CLIENT
  //   const handleDelete = (id) => {
  //     axios
  //       .delete("http://localhost:3001/deleteUser/" + id)
  //       .then((res) => {
  //         console.log(res);
  //         window.location.reload();
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div>
      <div className="flex ]">
        <div className=" border w-full bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2 className="text-[#4e73df] text-xl leading-[19px] font-bold">
              USER DETAIL
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
          </div>
          {/* //TABLE */}

          <div className=" shadow-md sm:rounded-lg">
            <table className="w-full     text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) && users.length > 0 ? (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-blue-500 border-b border-blue-400"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <img
                            className="rounded-full"
                            src={`http://192.168.1.13:5000/image/${user?.profileImage}`}
                            width={"70px"}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No users available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTable;
