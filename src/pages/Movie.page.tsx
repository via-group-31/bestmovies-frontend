import {
  Box,
  GridItem,
  Text,
  Image,
  Grid,
  Container,
  Heading,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "../assets/StarIcon.component";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import MovieService from "../services/Movie.service";
import Movie from "../models/Movie.model";
import LoadingDetail from "../components/LoadingDetail.component";
import Rating from "../models/Rating.model";
import RatingService from "../services/Rating.service";


function MoviePage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieLoading, setMovieLoading] = useState(true);

  const [movieRating, setMovieRating] = useState<Rating | null>(null);
  const [movieRatingLoading, setMovieRatingLoadng] = useState(true);

  const movieService: MovieService = new MovieService();
  const ratingService: RatingService = new RatingService();

  const [movieList, setMovieList] = useState<Movie[]>([]);



  useEffect(() => {
    movieService.getMoviesByMovieId(Number(movieId)).then(movie => {
      if (movie !== null) {
        console.log(movie)
        setMovie(movie);
        setMovieLoading(false);

        ratingService.getRatingByMovieId(movie?.movieId).then(rating => {
          if (rating !== null) {
            setMovieRating(rating);
            setMovieRatingLoadng(false);
          }
        });
      }
    });
  }, []);

  const [isFavorite, setFavorite] = useState(false);

  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  const toggleFavorite = () => [setFavorite(!isFavorite)];

  
  
  //let array: (Movie | null)[] = []
  const addToFavorites = (movie : Movie | null) =>{
    console.log(movie)
    let list= JSON.parse(localStorage.getItem('movie') || '[]')

    list.push(movie)
    localStorage.setItem("movie", JSON.stringify(movie))
    // // let array = localStorage.getItem("movie") || "[]";
    // var movie ={
    //   movieId: movieId
    // }
    // list.push(movie)
    
    //   // array.push(movie)
    //   console.log('retrievedObject: ', JSON.parse(list));

  
  }

  return (movieLoading ? <LoadingDetail /> :
    <Container maxW="container.xl">
      <Grid
        templateColumns="300px 1fr"
        templateRows="auto"
        gap="8"
        alignItems="start"
        position="relative"
      >
        <GridItem position="sticky" top="8">
          <Box>
            <Image
              src={movie?.moviePoster === "N/A" ? `${process.env.PUBLIC_URL}/assets/images.jpg` : movie?.moviePoster}
              alt="Dan Abramov"
              rounded="md"
              height="400px"
              width="100%"
              maxH="400px"
              objectFit="cover"
            />
            {movieRatingLoading ?
              null
              :
              <Center bg={movieRating!.rating <= 3 ? "#535353" : movieRating!.rating <= 7 ? "#658db4" : "#ba0305"}
                h={20} borderRadius={5}>
                <Text fontSize="3xl" fontWeight="bold">{Math.floor(movieRating!.rating * 10)}%</Text>
              </Center>
            }

          </Box>
        </GridItem>
        <GridItem>
          {/* headline */}

          <Heading fontWeight="black" fontSize="5xl">
            {movie?.movieName}
          </Heading>

          {/* year, directors */}

          <Box
            display="flex"
            justifyContent="space-between"
            mt="4"
            fontSize="xl"
            alignItems="center"
          >
            <Box display="flex">
              <Text textDecoration="underline" mr="4" fontWeight="medium">
                {movie?.year}
              </Text>
              <Text mr="2" color="lightgrey" fontWeight="medium">
                Directed by
              </Text>
              {movie?.directors.map(director =>
                <Link key={director.personId} style={{ textDecoration: "underline", fontWeight: "bold" }} to={`/person/${director.personId}`}> {director.personName + " "} </Link>)
              }
            </Box>
          </Box>

          {/* category, duration, add to-favorites  */}

          <Box
            display="flex"
            justifyContent="space-between"
            mt="4"
            fontSize="xl"
            alignItems="center"
          >
            {cookie.token !== undefined ? (
              <Box
                color="skyBlue"
                fontWeight="semibold"
                onClick={function() {toggleFavorite(); addToFavorites(movie);}}
                className={isFavorite ? "star-active" : ""}
              >
                <Link
                  to="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  color="skyBlue"
                >
                  Add to favorites
                  <StarIcon />
                </Link>
              </Box>
            ) : null}
          </Box>
          {/* actors  */}

          <Box>
            <Heading mb="6">Actors</Heading>
            <Box display="flex" gap="4">
              <SimpleGrid columns={4} spacing={5}>
                {movie?.stars.map(star => <Box><Link to={"/person/" + star.personId}>{star.personName}</Link></Box>)}
              </SimpleGrid>
            </Box>
          </Box>

          {/* Reviews */}
          <Box display="flex" alignItems="baseline" mt="10">
            <Heading mb="6" mr="4">
              Reviews
            </Heading>
            <Text fontWeight="light" color="lightgrey">
              (57 reviews)
            </Text>

          </Box>

          <Box display="flex" alignItems="center" mt="10">

          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default MoviePage;
