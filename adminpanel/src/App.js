import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Dashboardview from "./components/Dashboardview";
import Sidebar from "./components/Sidebar";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from 'axios'
   

function App() {
  const [suc, setSuc] = useState();
  const navigate = useNavigate()


  axios.defaults.withCredentials=true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard")

      .then((res) => {
        if (res.data === "Success") {

          setSuc("successed....done")
        
        }else{
        navigate("/login");

        }
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
