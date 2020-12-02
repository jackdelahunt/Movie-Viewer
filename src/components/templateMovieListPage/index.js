import React, { useContext, useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import FilterControls from "../filterControls";
import {MoviesContext} from '../../contexts/moviesContext';

const MovieListPageTemplate = ({movies, title, action, pageFilter}) => {

  const context = useContext(MoviesContext);

  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") {
      setNameFilter(value);
    } else if(type === "genre"){ 
       setGenreFilter(value);
    } else if(type === "page") {
      context.changePage(value);
    }
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length} pageFilter={pageFilter}/>

      {/*action is the button we pass in based on the page*/}
      <MovieList
        action={action}
        movies={displayedMovies}
      ></MovieList>
    </>
  );
};

export default MovieListPageTemplate ;