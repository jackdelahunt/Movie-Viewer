import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import {AuthContext} from "../contexts/authContext";
import useForm from "react-hook-form";

const RegisterPage = (props) => {
    const context = useContext(AuthContext);
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    if(context.isAuthenticated) {
        return <Redirect to="/" />;
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
            <button
                type="reset"
                className="btn btn-primary reset"
                onClick={() => {
                reset({
                    username: "",
                    password: ""
                });
                }}
            >
                Reset
            </button>
        </form>
      );
};

export default RegisterPage;