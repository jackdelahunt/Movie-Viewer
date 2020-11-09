import React, { useEffect, createContext, useReducer } from "react";

export const AuthContext = createContext(null);

const reducer = (state, action) => {
  
};

const authenticate = () => {

}

const signout = () => {

}

const AuthContextProvider = (props) => {
  

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        authenticate: authenticate,
        signout: signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;