import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import CreateUser from "../components/CRUD/CreateUser";
import UpdateUser from "../components/CRUD/UpdateUser";
import DeleteUser from "../components/CRUD/DeleteUser";
import RegisterForm from "../components/Register";
import LoginForm from "../components/Login";
import Visiter from "../components/Visiter";
import ClientProfile from "../components/SidebarItems/ClientProfile";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/dashboard" element={<App />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
          <Route path="/create" element={<DeleteUser />}></Route>
          <Route path="/visiter" element={<Visiter />} />
          <Route path="/clientprofile" element={<ClientProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
