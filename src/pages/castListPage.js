import React, { useContext } from "react";
import CastListPageTemplate from "../components/templateCastListPage";
import useCredits from "../hooks/useCredits"

const CastListPage = (props) => {

  const { id } = props.match.params;
  const [cast] = useCredits(id);


  return (
    <CastListPageTemplate cast={cast} />
  );
};

export default CastListPage;