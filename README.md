# BestMovies

### Technologies and packages
- Website is written in react.js in TypeScript
- chakra-ui is used as an UI package
- axios is used for accessing API endpoints
- react-router-dom enables implementation of dynamic routing
- react-cookie is used for cookies for saving user token
- react-slick is used on main page for displaying newest movies

### Azure
- Website is running on Azure as a WebApp node.js service [a link](https://bestmovies-group-31.azurewebsites.net/)

### Github Actions
- With each push to main app is built and uploaded to AZURE and app is refreshed

### Web Routes
- [a link](https://bestmovies-group-31.azurewebsites.net/login) for Login as a user
- [a link](https://bestmovies-group-31.azurewebsites.net/register) for Register and become user
- [a link](https://bestmovies-group-31.azurewebsites.net/movie:movieId) for Movie Detail with movieId parameter
- [a link](https://bestmovies-group-31.azurewebsites.net/person:personId) for Person Detail with personId parameter
- [a link](https://bestmovies-group-31.azurewebsites.net/search:movieName) for Search with movieName parameter
- [a link](https://bestmovies-group-31.azurewebsites.net/favorite) for Favorite movies (token in cookie required)
- any other as a 404 page