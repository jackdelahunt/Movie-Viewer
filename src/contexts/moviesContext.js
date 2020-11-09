import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "changePage":
      console.log(state.pageNumber);
      return {
        movies: [...state.movies],
        upcoming: [...state.upcoming],
        pageNumber: action.payload.delta,
      };
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        pageNumber: state.pageNumber,
      };
    case "add-watch-list":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
        ),
        movies: [...state.movies],
        pageNumber: state.pageNumber,
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], pageNumber: state.pageNumber};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], pageNumber: state.pageNumber };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        pageNumber: state.pageNumber,
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], pageNumber: 1});

  const changePage = (diff) => {
    dispatch({ type: "changePage", payload: { delta: diff } });
  }

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watch-list", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies(state.pageNumber).then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.pageNumber]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.pageNumber]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        pageNumber: 1,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
        changePage: changePage,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;