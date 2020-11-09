import React from "react";
import { Link } from "react-router-dom";

const WatchListButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: "/movies/upcoming",
        state: {
          movie: movie
        }
      }}
    >
      Add to Watch List
    </Link>
  );
};

export default WatchListButton;