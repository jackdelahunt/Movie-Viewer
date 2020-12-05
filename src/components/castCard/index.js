import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./castCard.css";

const CastCard = ({castMember}) => {
  
  

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      
        <div className="card-body">
        <Link to={`/actors/${castMember.id}`}>
          <img
          className="card-img-tag center"
          src={
            castMember.profile_path
              ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}`
              : `./film-poster-placeholder.png`
          }
          />
        </Link>
        </div>
        <div className="card-body">
          <h4 className="card-title ">{castMember.name}</h4>
          <span className="as"><p>as</p></span>
          <span className="character-name"><p>{castMember.character}</p></span>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {castMember.popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default CastCard;