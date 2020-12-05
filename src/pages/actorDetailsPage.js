import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PageTemplate from "../components/templateActorPage";
import useActor from "../hooks/useActor"
import ActorDetails from "../components/actorDetails"

const ActorPage = (props) => {
  const { id } = props.match.params;
  const result = useActor(id);
  const actor = result[0];

  return (
    <>
        <PageTemplate actor={actor} >
            <ActorDetails actor={actor} />
        </PageTemplate>
    </>
  );
};

export default withRouter(ActorPage);