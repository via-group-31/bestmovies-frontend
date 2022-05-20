import {
  Box,
  GridItem,
  Text,
  Image,
  Grid,
  Container,
  Heading,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "../assets/StarIcon.component";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import MovieDetailSkeleton from "../components/MovieDetail";
import MovieService from "../services/Movie.service";
import Movie from "../models/Movie.model";

type MovieProps = {
  loggedIn: boolean
};

function MoviePage(props: MovieProps) {
  const { movieId } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieLoading, setMovieLoading] = useState(true);

  const movieService: MovieService = new MovieService();

  useEffect(() => {
    movieService.getMoviesByMovieId(Number(movieId)).then(movie => {
      if(movie !== null){
        setMovie(movie);
        setMovieLoading(false);
      }
    });
  }, []);

  const [isFavorite, setFavorite] = useState(false);
  const [rating, setRating] = useState(5);

  const [cookie, setCookie, remvoeCookie] = useCookies(["token"]);

  console.log(cookie)

  const toggleFavorite = () => [setFavorite(!isFavorite)];

  return  (movieLoading ? <MovieDetailSkeleton /> :
    <Container maxW="container.xl">
      <Grid
        templateColumns="300px 1fr"
        templateRows="auto"
        gap="8"
        alignItems="start"
        position="relative"
      >
        <GridItem position="sticky" top="8">
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            rounded="md"
            height="400px"
            width="100%"
            maxH="400px"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          {/* headline */}

          <Heading fontWeight="black" fontSize="5xl">
            { movie?.movieName }
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
                { movie?.year }
              </Text>
              <Text mr="2" color="lightgrey" fontWeight="medium">
                Directed by
              </Text>
                { movie?.directors.map(director => 
                  <Link style={{ textDecoration: "underline", fontWeight: "bold" }} to={`/person/${director.personId}`}> {director.personName + " "} </Link>) 
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
                onClick={toggleFavorite}
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
              { movie?.stars.map(star => <Link to={ "/person/" + star.personId }>{ star.personName + " " }</Link> )}
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
