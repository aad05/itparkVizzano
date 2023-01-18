import React from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import { navigationData } from "../utils/navigationData";
import NotFound from "../components/404";

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
        {navigationData.map(({ Element, id, path }) => (
          <Route path={path} key={id} element={<Element />} />
        ))}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
