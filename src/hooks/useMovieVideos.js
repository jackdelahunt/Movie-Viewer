import { useEffect, useState } from "react";
import {getMovieVideos} from '../api/tmdb-api'

const useMovieVideos = id => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getMovieVideos(id).then(videos => {
      setVideos(videos);
    });
  }, [id]);
  return [videos, setVideos];
};

export default useMovieVideos