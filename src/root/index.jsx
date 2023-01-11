import React from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { RequireAuth } from "react-auth-kit";
import Flow from "../components/FlowByParams";
import FlowSection from "../components/FlowSections";

const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath={"/login"}>
            <Navbar />
          </RequireAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path="flow/:flowID" element={<Flow />} />
        <Route
          path="flow/:flowID/:flowSection/:flowDate"
          element={<FlowSection />}
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
