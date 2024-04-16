import React ,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'


function UpdateUser() {
const {id } = useParams()    //it will destruct id from url and store into id
const [resturantname, setResturantName] = useState();
const [ownername, setOwnerName] = useState();
const [contactno, setContactNo] = useState();
const [address, setAddress] = useState();

const navigate =useNavigate()



useEffect(() => {
  axios
    .get("http://localhost:3001/getUser/"+id)
    .then((result) => {console.log(result)
  setResturantName(result.data.resturantname)
  setOwnerName(result.data.ownername)
  setContactNo(result.data.contactno)
  setAddress(result.data.address  )
      
    })
    .catch((err) => console.log(err));
}, []);


const Update = (e) => {

  e.preventDefault();
 
  
  axios
    .put("http://localhost:3001/updateUser/"+id, {
      resturantname,
        ownername,
        contactno,
        address
    })
  
    .then((result) =>{ 
      
      console.log(result)
      navigate('/dashboard ')
    })
     
    .catch(err => console.log(err));
};


  return (
    <div>
        <div className="bg-slate-800 h-screen ">
      <form onSubmit={Update} className="max-w-sm mx-auto  py-10">
        <div>
          <p className="text-3xl font-bold text-gray-300">Update CLIENT</p>
        </div>
        <div className="mt-10">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ResturantName
            </label>
            <input
              type="resturantname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder=""
              required
              value={resturantname}
              onChange={(e) => setResturantName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              OwnerName
            </label>
            <input
              type="ownername"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={ownername}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contact_no
            </label>
            <input
              type="contactno"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={contactno}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <input
              type="address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={address}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
        </div>

        <button
        onClick={Update}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          update CLIENT 
        </button>
      </form>
    </div>
    </div>
 
  )
}

export default UpdateUser