import React, { useEffect, createContext, useReducer } from "react";
import {getUsers} from "../data/users";

export const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch(action.type) {

    case "load":
      return {
        users: action.payload.users,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      };
    case "addNewUser":
      let ret = {
        users: [...state.users, action.payload.user],
        user: state.user,
        isAuthenticated: state.isAuthenticated
      }
      return ret;
    case "authenticate":
      return {
        users: state.users, // TODO: add the authenticated user here JACK
        isAuthenticated: true,
        user: state.user
      }
    case "login":
      return state.isAuthenticated ? 
       {
        users: state.users,
        isAuthenticated: state.isAuthenticated,
        user: action.payload.user,
      }
      :
      {
        users: state.users,
        isAuthenticated: state.isAuthenticated,
        user: state.user
      }
    case "logout":
      return {
        users: state.users,
        isAuthenticated: false,
        user: {}
      }
      default:
        return {
          users: state.users,
          isAuthenticated: state.isAuthenticated,
          user: state.user
        };
  }
};

const AuthContextProvider = (props) => {

  let isAuthenticated = false;

  const [state, dispatch] = useReducer(reducer, { users: [], user: {}, isAuthenticated: false});

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

  const login = (user) => {
    dispatch({type: "login", payload: {user}});
  }

  const logout = () => {
    dispatch( {type: "logout", payload: {}} );
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        authenticate: authenticate,
        logout: logout,
        login: login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;