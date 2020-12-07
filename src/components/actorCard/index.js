import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./actorCard.css";

const ActorCard = ({actor}) => {
  
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      
        <div className="card-body">
        <Link to={`/actors/${actor.id}`}>
          <img
          className="card-img-tag center"
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : require(`./film-poster-placeholder.png`)
          }
          />
        </Link>
        </div>
        <div className="card-body">
          <h4 className="card-title ">{actor.name}</h4>
          <span className="as"><p>as</p></span>
          <span className="character-name"><p>{actor.character}</p></span>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {actor.popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;