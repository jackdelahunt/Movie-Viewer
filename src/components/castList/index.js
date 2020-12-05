import React from "react";
import ActorCard from "../actorCard"

const CastList = (props) => {
  
  const castCards = props.cast.map(c => (
    <ActorCard actor={c} />
  ));

  return <div className="row movies bg-info">{castCards}</div>;
};

export default CastList;