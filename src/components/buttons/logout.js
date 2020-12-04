import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import "./styles/buttons.css"

const LogoutButton = ({action}) => {
    const context = useContext(MoviesContext);

    return (
      <button
        type="button"
        size="small"
        className="logout"
        onClick={action}
      >
        Logout
      </button>
    );
};

export default LogoutButton;