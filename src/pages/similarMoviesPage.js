import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import useSimilarMovies from '../hooks/useSimilarMovies'

const SimilarMoviesPage = (props) => {
  const { id } = props.match.params;
  const [similar] = useSimilarMovies(id); // similar movies is the first element in the array, not sure how to get aruond this square syntax
  

  return (
    <PageTemplate
      title="Similar Movies"
      movies={similar}  /* Changed */
      pageFilter= {false}
      action={(movie) => {
        return (<> </>);
      }}
    />
  );
};

export default SimilarMoviesPage;