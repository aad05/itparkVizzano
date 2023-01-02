import React from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>

    //   <Navbar />
  );
};

export default Root;

// Context - .Provider
// Redux - Provider
