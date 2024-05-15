import React from "react";
import Home from "./router/home/Home";
import { Route, Routes } from "react-router-dom";
import SingleRoute from "./router/single-route/SingleRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./sass/index.scss";
import Login from "./router/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product/:id"} element={<SingleRoute />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
