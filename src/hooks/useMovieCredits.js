import { useEffect, useState } from "react";
import {getActorCredits} from '../api/tmdb-api'

const useMovieCredits = id => {
  const [movieCredits, setMovieCredits] = useState([]);
  useEffect(() => {
    getActorCredits(id).then(movie => {
      setMovieCredits(movie);
    });
  }, [id]);
  return [movieCredits, setMovieCredits];
};

export default useMovieCredits