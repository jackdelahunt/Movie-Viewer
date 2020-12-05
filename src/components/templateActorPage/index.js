import React from "react";
import DetailsHeader from '../detailsHeader'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router' 
import "./actorPage.css";

const TemplateActorPage = ({ actor, children}) => {
  return (
    <>
      <DetailsHeader title={actor.name} link={`https://www.imdb.com/name/${actor.imdb_id}`} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : "./film-poster-placeholder.png"
            }
            alt={actor.name}
            className="actor"
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateActorPage;