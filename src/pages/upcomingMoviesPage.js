import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import WatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'

const UpcomingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });
    
  return (
    <PageTemplate
      title={'Upcoming Movies'}
      movies={movies}
      action={(movie) => {
        return <WatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovieListPage;