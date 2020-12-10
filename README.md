# Assignment 1 - ReactJS app

Name: Jack Delahunt

## Features

 + Feature 1 - A similar movies page was added that displays similar movies to a movie the user is viewing
 + Feature 2 - A cast page was added that displays all of the cast in a movie that the user is viewing
 + Feature 3 - Cast members now have they're own details page which gives information about them and movies they have also been in
+ Feature 4 - The movie details page now displays videos relating to the movie the user is viewing
+ Feature 5 - The user is now required to log in to add movies to the watch list
+ Feature 6 - The user can now access a actor's/movie's IMDB page from the details page
+ Feature 7 - Homepage now has more than just one page to view movies

## Setup requirements

Clone the repository and use ```npm install```

## API Data Model


+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - get reviews about a movie 
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies
+ https://api.themoviedb.org/3/movie/${id}/similar - get a list of movies that are similar to a given movie
+ https://api.themoviedb.org/3/movie/${id}/credits - get's the cast and crew of a specific movie
+ https://api.themoviedb.org/3/person/${id} - get detail about a specific actor
+ https://api.themoviedb.org/3/person/${id}/movie_credits - get movie that the actor is credited in
+ https://api.themoviedb.org/3/movie/${id}/videos - get data about videos that relate to a specific movie

## App Design

### Component catalogue

![][stories]

### UI Design

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'See Upside-Down Magic Cast' button will move the user to the cast page to see all of the cast members in the movie

>Clicking the 'See Similar Movies To Upside-Down Magic' will move the user to the similar movies page and will display all movies that are similar to Upside-Down Magic

> Embeded videos let the user watch videos about the movie

> The home button will send the user to the movies home page

![][castPage]
> Lists all of the cast in a given movie, the user can select which actor look at for more detailsby click the card

![][actorDetail]
> Displays detail about a specific actor, this page also displays other credits that the actor has in a grid list

![][registerPage]
> Allows the user to login, the user adds a username and password, once authentication is complete then they are routed to where they were going

## Routing

+ /register/ (public) - allows the user to log in
+ /movies/:id/cast (public) - displays all actors in a movie
+ /movies/:id/similar (public) - displays similar movies of a given movie
+ /actors/:id (public) - displays the details of a actor
+ /movies/watchList (protected) - displays all the movies the user has saved to their watch list

### Data hyperlinking

![][castLink]
> Clicking the button displays the cast page for the movie

![][similarLink]
>Clicking the button will send the user to see a list of similar movies

![][actorLink]
>Click on the actor card will send the user to the actor's detail page

![][gridlistLink]
>Clicking on the movie card on the bottom of the actors details page will send the user to that movie's detail page

## Independent learning

+ Material UI - The GridList component was used for the movie cards in the actor detail page.
>https://material-ui.com/api/grid-list/

+ YouTube Videos - Embeded YouTube videos were added in the movie details page
> https://developers.google.com/youtube/player_parameters
---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[castPage]: ./public/castPage.png
[actorDetail]: ./public/actorDetail.png
[registerPage]: ./public/registerPage.png
[castLink]: ./public/castLink.png
[similarLink]: ./public/similarLink.png
[actorLink]: ./public/actorLink.png
[gridListLink]: ./public/gridListLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png