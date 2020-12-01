import React, { useEffect, createContext, useReducer } from "react";
import {getUsers} from "../data/users";

export const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch(action.type) {

    case "load":
      return {
        users: action.payload.users,
        isAuthenticated: state.isAuthenticated
      };
    case "addNewUser":
      let ret = {
        users: [...state.users, action.payload.user],
        isAuthenticated: state.isAuthenticated
      }
      return ret;
    case "authenticate":
      return {
        users: state.users,
        isAuthenticated: true
      }
      default:
        return {
          users: state.users,
          isAuthenticated: state.isAuthenticated,
        };
  }
};

const signout = () => {

}

const AuthContextProvider = (props) => {

  let isAuthenticated = false;

  const [state, dispatch] = useReducer(reducer, { users: [], isAuthenticated: false});

  useEffect(() => {
    const users = getUsers();
    dispatch( {type: "load", payload: {users}} );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticate = (user) => {
    if(!user.username && !user.password) return;

    // does user already exist?
    const index = state.users.map((element) => {
      if(element.username === user.username) {
        return user;
      } else {
        return {};
      }
    }).indexOf(user);

    if(index < 0) {
      dispatch({ type: "addNewUser", payload: { user } });
    }

    dispatch({type: "authenticate", payload: {}})
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        authenticate: authenticate,
        signout: signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;