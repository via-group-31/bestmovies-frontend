# BestMovies

### Technologies and packages
- Website is written in react.js in TypeScript
- chakra-ui is used as an UI package
- axios is used for accessing API endpoints
- react-router-dom enables implementation of dynamic routing
- react-cookie is used for cookies for saving user token
- react-slick is used on main page for displaying newest movies

### Azure
- Website is running on [Azure](https://bestmovies-group-31.azurewebsites.net/) as a WebApp node.js service 

### Github Actions
- With each push to main app is built and uploaded to AZURE and app is refreshed

### Web Routes
- [/login](https://bestmovies-group-31.azurewebsites.net/login) for Login as a user
- [/register](https://bestmovies-group-31.azurewebsites.net/register) for Register and become user
- [/movie:movieId](https://bestmovies-group-31.azurewebsites.net/movie:movieId) for Movie Detail with movieId parameter
- [/person:personId](https://bestmovies-group-31.azurewebsites.net/person:personId) for Person Detail with personId parameter
- [/search:movieName](https://bestmovies-group-31.azurewebsites.net/search:movieName) for Search with movieName parameter
- [/favorite](https://bestmovies-group-31.azurewebsites.net/favorite) for Favorite movies (token in cookie required)
- [/404](https://bestmovies-group-31.azurewebsites.net/404) any other as a 404 page