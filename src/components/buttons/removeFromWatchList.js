import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const RemoveFromWatchList = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToWatchList = e => {
      e.preventDefault();
      context.addToWatchList(movie.id);
    };
    return (
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleAddToWatchList}
      >
        Remove From Watch List
      </button>
    );
};

export default RemoveFromWatchList;