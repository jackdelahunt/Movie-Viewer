import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PageTemplate from "../components/templateActorPage";
import useActor from "../hooks/useActor"
import ActorDetails from "../components/actorDetails"
import GridList from "../components/gridList";
import useMovieCredits from "../hooks/useMovieCredits";

const ActorPage = (props) => {
  const { id } = props.match.params;
  const actor = useActor(id)[0];
  const movies = useMovieCredits(id)[0];

  return (
    <>
        <PageTemplate actor={actor} >
            <ActorDetails actor={actor} />
        </PageTemplate>
        <GridList movies={movies}/>
    </>
  );
};

export default withRouter(ActorPage);