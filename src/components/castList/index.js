import React from "react";
import CastCard from "../castCard"

const CastList = (props) => {
  
  const castCards = props.cast.map(c => (
    <CastCard castMember={c} />
  ));

  return <div className="row movies bg-info">{castCards}</div>;
};

export default CastList;