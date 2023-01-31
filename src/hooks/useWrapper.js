import React from "react";
import { AuthProvider } from "react-auth-kit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux";

const useWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default useWrapper;
