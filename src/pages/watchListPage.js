import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return ("watchList" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      pageFilter= {false}
      action={(movie) => {
        return <></>; /* no button needed for the watch list page */
      }}
    />
  );
};

export default WatchListPage;