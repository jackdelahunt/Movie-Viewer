import React, { useContext, useEffect, useState } from "react";
import { Redirect, Router } from "react-router-dom";
import {AuthContext} from "../contexts/authContext";
import useForm from "react-hook-form";

const RegisterPage = (props) => {
    const context = useContext(AuthContext);
    const { register, handleSubmit, } = useForm();
    const {from} = props.location.state || {from: {pathname: "/"}};

    const onSubmit = (data) => {
        context.authenticate(data);
    }

    useEffect(() => {
        console.log("The eagle has landed")
        if(context.isAuthenticated) {
            console.log("light this candle")
            goBack();
        }
    }, [context.isAuthenticated]);

    const goBack = () => {
        console.log("i hear the train a comin")
        return <Redirect to={from} />;
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

export default RegisterPage;