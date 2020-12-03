import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext'; 
import {MoviesContext} from '../../contexts/moviesContext';

const FilterControls = (props) => {
  const genreContext = useContext(GenresContext);
  const movieContext = useContext(MoviesContext)

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  const handlePageChange = (e) => {
    handleChange(e, "page", e.target.value);
  }

  const pageNumberSelect = props.pageFilter ? 
  <>
  <span>Page:</span>
  <select id="page" onChange={handlePageChange} value={movieContext.pageNumber}>
    <option>1</option> 
    <option>2</option> {/* clean this up at some point */}
    <option>3</option>
    <option>4</option>
  </select>
  </>
  :
  <> </>;

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
          <span>Genre:</span>
          <select id="genre" onChange={handleGenreChange}>
            {genreContext.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
          {pageNumberSelect}
        </h4>
      </div>
    </div>
  );
};

export default FilterControls;