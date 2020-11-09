import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import {getUpcomingMovies} from "../api/tmdb-api"
import {useEffect, useState} from "react";

const UpcomingListPage = () => {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
      getUpcomingMovies().then(movies => {
        setMovies(movies);
      });
    }, []);
    
  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingListPage;