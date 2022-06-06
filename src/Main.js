import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Main;
