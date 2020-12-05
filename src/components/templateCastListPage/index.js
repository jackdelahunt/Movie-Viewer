import React, { useContext, useState } from "react";
import Castlist from "../castList"

const CastListPageTemplate = (props) => {

  return (
    <>
      <Castlist cast={props.cast}/>
    </>
  );
};

export default CastListPageTemplate;