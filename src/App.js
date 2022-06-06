import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import UpdateUser from "./UpdateUser";
import Main from "./Main";
import Add_Article from "./Add_Article";

function App() {
  //const [authLogin, setAuthLogin] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/main" element={<Main />}>
          <Route path="" element={<Home />}></Route>
          <Route path="updateUser" element={<UpdateUser />}></Route>
          <Route path="add_article" element={<Add_Article />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
