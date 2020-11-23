import React, { useContext } from "react";
import Header from "../components/siteHeader"
import { Redirect } from "react-router-dom";
import {AuthContext} from "../contexts/authContext";


const RegisterPage = () => {
    const context = useContext(AuthContext);
    if(context.isAuthenticated) {
        return <Redirect to="/" />;
    }

  return (
    <>
      
    </>
  );
};

export default RegisterPage;