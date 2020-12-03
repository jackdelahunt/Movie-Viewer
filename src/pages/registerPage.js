import React, { useContext, useEffect, useState } from "react";
import { Redirect, Router, withRouter } from "react-router-dom";
import {AuthContext} from "../contexts/authContext";
import useForm from "react-hook-form";

export default function(props) {
    const context = useContext(AuthContext);
    const { register, handleSubmit, } = useForm();
    const {from} = props.location.state || {from: {pathname: "/"}};

    const onSubmit = (data) => {
        context.authenticate(data);
        context.login(data);
    }

    if(context.isAuthenticated) {
        return <Redirect to={from.pathname} />;
    }


    return (
        <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
            <h3>Register</h3>
            <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              ref={register({ required: "Username required" })}
            />
            </div>
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    ref={register({ required: "Password name required" })}
                />
            </div>    
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};