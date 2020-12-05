import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";
import {Link} from 'react-router-dom'
import {useParams} from 'react-router' 

const TemplateMoviePage = ({ movie, children }) => {

  const {id} = useParams();

  return (
    <>
      <MovieHeader movie={movie} />
      <div className="row">
        <div className="col-3">
        <Link className="btn btn-primary btn-block active" to={`/movies/${id}/cast`}>
          See {movie.title} Cast
        </Link>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={movie.title}
          />
        <Link className="btn btn-primary btn-block active" to={`/movies/${id}/similar`}>
          See Similar Movies To {movie.title}
        </Link>
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateMoviePage;