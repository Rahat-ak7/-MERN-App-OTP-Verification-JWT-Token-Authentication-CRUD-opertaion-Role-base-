import React, { useState } from "react";
import foodies from "../../assets/foodies.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileTable from "./ProfileTable";

function ClientProfile() {
  //STATES
  const [image, setImage] = useState(null);
  const [selImg, setSelImg] = useState({});
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [update, setUpdate] = useState(false);

  //FUNCTIONS
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelImg(e.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpload = () => {
    setImage(image);
    // Add your upload logic here (e.g., send the image to a server).
    // For demonstration purposes, we'll simply log the image data.
    console.log(`IMAGE UPLOADED .........: ${image}`);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profileImage", selImg);
    for (const param of formData.entries()) {
      const [key, value] = param;
      console.log(`${key} ${value}`);
    }
    axios
      .post("http://192.168.1.13:5000/user/create", formData)
      .then((result) => {
        setUpdate(!update);
        toast.success("Data SEND SUCCESSFULLY!", {
          position: "top-right",
          theme: "colored",
        });
      })

      .catch(
        (err) => toast.error("something went wrong...")
        //   console.log(err)
      );
  };

  return (
    <div>
      <div className="flex h-screen items-center bg-gradient-to-r from-blue-500 to-purple-500 justify-center">
        <div className="w-full max-w-md bg-gray-700 p-5 rounded-md shadow-md">
          <div className="text-center">
            <p className="text-white font-bold text-xl">User profile</p>

            {image && (
              <img
                src={image}
                alt="Profile"
                className="mx-auto w-20 h-20 rounded-full mb-4"
                // style={{ width: "120px", height: "120px", borderRadius: "50%",}}
              />
            )}
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <br />
            <button onClick={handleUpload}>Upload</button>
          </div>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-200 text-sm font-bold mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                placeholder="enter your name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              Submit
            </button>
          </form>
        </div>
      </div>
      <ProfileTable update={update} />
    </div>
  );
}

export default ClientProfile;
