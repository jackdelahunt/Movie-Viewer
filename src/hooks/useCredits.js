import { useEffect, useState } from "react";
import {getCredits} from '../api/tmdb-api'

const useCredits = (id) => {
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    getCredits(id)
    .then(credits => {
      setCredits(credits);
      console.log(credits);
    });
  }, [id]);
  return [credits, setCredits];
};

export default useCredits