import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {AuthContext} from "../../contexts/authContext"
import { Redirect } from "react-router-dom";

export default function({movie}) {
    const moviesContext = useContext(MoviesContext);

    const handleAddToWatchList = e => {
        e.preventDefault();
        moviesContext.addToWatchList(movie.id);
    };

    return (
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleAddToWatchList}
      >
        Add to Watch List
      </button>
    );
};