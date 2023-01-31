import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import UseWrapper from "./hooks/useWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UseWrapper>
    <Root />
  </UseWrapper>
);
