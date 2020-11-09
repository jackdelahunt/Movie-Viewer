import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import RemoveFromWatchList from '../components/buttons/removeFromWatchList'

const WatchListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return ("watchList" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <RemoveFromWatchList movie={movie} />;
      }}
    />
  );
};

export default WatchListPage;