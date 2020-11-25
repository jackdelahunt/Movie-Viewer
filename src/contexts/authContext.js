import React, { useEffect, createContext, useReducer } from "react";
import {getUsers} from "../data/users";

export const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch(action.type) {

    case "load":
      return {users: action.payload.users}
    case "addNewUser":
      return {
        users: [...state.users, action.payload.user]
      }
      default:
        return {users: state.users};
  }
};

const signout = () => {

}

const AuthContextProvider = (props) => {

  let isAuthenticated = false;

  const [state, dispatch] = useReducer(reducer, { users: [], });

  const addUser = (user) => {
    dispatch({ type: "addNewUser", payload: { user } });
  }

  useEffect(() => {
    const users = getUsers();
    dispatch( {type: "load", payload: {users}} );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticate = (data) => {
    if(!data.username && !data.password) return;

    // does user already exist?
    const index = state.users.map((element) => {
      if(element.username === data.username) {
        return data;
      } else {
        return {};
      }
    }).indexOf(data);

    if(index > 0) {
      dispatch({type: "addNewUser", payload: {data}});
    }
    isAuthenticated = true;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        authenticate: authenticate,
        signout: signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;