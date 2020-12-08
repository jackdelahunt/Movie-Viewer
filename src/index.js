import React from "react";
import PrivateRoute from "./components/routes/privateRoute";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MovieDetialsPage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import WatchListPage from "./pages/watchListPage"
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AuthContext from "./contexts/authContext";
import Register from "./pages/registerPage";
import SimilarMoviesPage from './pages/similarMoviesPage';
import CastListPage from "./pages/castListPage";
import ActorPage from "./pages/actorDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <div className="container-fluid">
        <AuthContext>
          <MoviesContextProvider>
              <GenresContextProvider>
                <SiteHeader />
                <Switch>
                  <Route path="/register" component={Register} />
                  <Route exact path="/actors/:id" component={ActorPage} />
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                  <PrivateRoute path="/movies/watchList" component={WatchListPage} />
                  <Route exact path="/movies/:id" component={MovieDetialsPage} />
                  <Route exact path="/movies/:id/reviews" component={MovieReviewPage} />
                  <Route path="/movies/:id/similar" component={SimilarMoviesPage} />
                  <Route path="/movies/:id/cast" component={CastListPage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>
            </MoviesContextProvider>
          </AuthContext>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));