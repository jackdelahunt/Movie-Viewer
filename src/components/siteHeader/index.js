import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import {AuthContext} from "../../contexts/authContext";

const SiteHeader = () => {

  const authContext = useContext(AuthContext);

  let userLink = <></>

  let headerText = authContext.isAuthenticated ? authContext.user.username : "For the movie enthusiast !!";

  if(authContext.isAuthenticated) {
    userLink = (
      <li>
        <Link className="nav-link text-white" to="/">
          Log Out
        </Link>
      </li>
    );
  } else {
    userLink = (
      <li>
        <Link className="nav-link text-white" to="/register">
          Log In
        </Link>
      </li>
    );
  }

  const header = (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        {headerText}
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchList">
              Watch List
            </Link>
          </li>
          {userLink}
        </ul>
      </nav>
    </nav>
  );

  return header;
};

export default SiteHeader;