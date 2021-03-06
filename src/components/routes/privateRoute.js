import React from "react";
const { useContext } = require("react");
const { Redirect, Router, Route} = require("react-router-dom");
const { AuthContext } = require("../../contexts/authContext");

const PrivateRoute = (props) => {
    const context = useContext(AuthContext);

    const {component:Component, ...rest} = props;

    return context.isAuthenticated === true ? (
        <Route {...rest} render={props => <Component {...props} />} />
    ) : (
        <Redirect 
            to={{
                pathname: "/register",
                state: { from: props.location }
            }}
        />
    );
}

export default PrivateRoute;