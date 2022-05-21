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
  Divider,
  CircularProgress,
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
import Review from "../models/Review.model";
import ReviewService from "../services/Review.service";
import UserService from "../services/User.service";

function MoviePage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieLoading, setMovieLoading] = useState(true);

  const [movieRating, setMovieRating] = useState<Rating | null>(null);
  const [movieRatingLoading, setMovieRatingLoadng] = useState(true);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const [favoriteMovie, setFavoriteMovie] = useState(false);
  const [favoriteMovieLoading, setFavoriteMovieLoading] = useState(true);

  const movieService: MovieService = new MovieService();
  const ratingService: RatingService = new RatingService();
  const reviewService: ReviewService = new ReviewService();
  const userService: UserService = new UserService();

  useEffect(() => {
    let mounted: boolean = true;

    movieService.getMoviesByMovieId(Number(movieId)).then((movie) => {
      if (mounted && movie !== null) {
        setMovie(movie);
        setMovieLoading(false);
      }
    });

    ratingService.getRatingByMovieId(Number(movieId)).then((rating) => {
      if (mounted && rating !== null) {
        setMovieRating(rating);
        setMovieRatingLoadng(false);
      }
    });

    reviewService.getReviewsByMovieId(Number(movieId)).then((reviews) => {
      if (mounted) {
        setReviews(reviews);
        setReviewsLoading(false);
      }
    });

    userService.getFavoriteMovie(cookie.token, Number(movieId)).then((res) => {
      console.log(res);
      
      if (mounted) {
        setFavoriteMovie(res);
        setFavoriteMovieLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  const toggleFavorite = () => {
    setFavoriteMovieLoading(true);
    if (favoriteMovie) {
      console.log("Here I sit");

      userService.deleteFromFavorites(cookie.token, Number(movieId)).then(() => {
        setFavoriteMovieLoading(false);
        setFavoriteMovie(false);
      });
    } 
    else {
      console.log("Here I stand");
      
      userService.addToFavorites(cookie.token, Number(movieId)).then(() => {
        setFavoriteMovieLoading(false);
        setFavoriteMovie(true);
      });
    }
  };

  return movieLoading ? (
    <LoadingDetail />
  ) : (
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
              src={
                movie?.moviePoster === "N/A"
                  ? `${process.env.PUBLIC_URL}/assets/images.jpg`
                  : movie?.moviePoster
              }
              alt="Dan Abramov"
              rounded="md"
              height="400px"
              width="100%"
              maxH="400px"
              objectFit="cover"
            />
            {movieRatingLoading ? null : (
              <Center
                bg={
                  movieRating!.rating >= 7
                    ? "#ba0305"
                    : movieRating!.rating >= 3
                    ? "#658db4"
                    : "#535353"
                }
                h={20}
                borderRadius={5}
              >
                <Text fontSize="3xl" fontWeight="bold">
                  {isNaN(Number(Math.floor(movieRating!.rating * 10)))
                    ? 0
                    : Math.floor(movieRating!.rating * 10)}
                  %
                </Text>
              </Center>
            )}
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
              {movie?.directors.map((director) => (
                <Link
                  key={director.personId}
                  style={{ textDecoration: "underline", fontWeight: "bold" }}
                  to={`/person/${director.personId}`}
                >
                  {" "}
                  {director.personName + " "}{" "}
                </Link>
              ))}
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
               favoriteMovieLoading ? (
                <CircularProgress size={5} isIndeterminate color="green.300" />
              ) : (
                <Box
                  color="skyBlue"
                  fontWeight="semibold"
                  onClick={toggleFavorite}
                  className={favoriteMovie ? "star-active" : ""}
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
              )
            ) : null}
          </Box>
          {/* actors  */}

          <Box>
            <Heading mb="6">Actors</Heading>
            <Box display="flex" gap="4">
              <SimpleGrid columns={4} spacing={5}>
                {movie?.stars.map((star) => (
                  <Box key={star.personId}>
                    <Link to={"/person/" + star.personId}>
                      {star.personName}
                    </Link>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>

          {/* Reviews */}
          <Box display="flex" alignItems="baseline" mt="10">
            <Heading mb="6" mr="4">
              Reviews
            </Heading>
            <Text fontWeight="light" color="lightgrey">
              {reviewsLoading ? (
                <CircularProgress size={5} isIndeterminate color="green.300" />
              ) : (
                `(${reviews.length} reviews)`
              )}
            </Text>
          </Box>

          <Box>
            {reviews.map((review) => (
              <Box
                key={review.reviewId}
                p={3}
                mt="3"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor="grey"
              >
                <Text mb={2}>{review.userModel?.userEmail}</Text>
                <Divider mb={5} />
                <Text>{review.reviewContent}</Text>
              </Box>
            ))}
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default MoviePage;
