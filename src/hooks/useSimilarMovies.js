import { useEffect, useState } from "react";
import {getSimilarMovies} from '../api/tmdb-api'

const useSimilarMovies = id => {
  const [similar, setMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id)
    .then(movies => {
      setMovies(movies);
    });
  }, [id]);

  return [similar, setMovies];
};

export default useSimilarMovies;