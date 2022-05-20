import { Container, Text, Heading, Box, Image, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Movie from "../models/Movie.model";
import MovieService from "../services/Movie.service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function MainPage() {
    const movieService: MovieService = new MovieService();

    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [moviesLoading, setMoviesLoading] = useState(true);

    useEffect(() => {
        const abortion = new AbortController();
        
        movieService.getMovies().then(movies => {
            setMovieList(movies);
            setMoviesLoading(false);
        });

        return () => abortion.abort();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <Container maxW='container.xl' >
            <Heading fontSize="6xl" fontWeight="black" mb="20" textAlign="center">
                Featured movies
            </Heading>

            <Slider {...settings} >
                {moviesLoading ?
                    Array(2).fill('').map((array, i) => (
                        <Skeleton key={i}>
                            <Box position="relative" rounded="md" >
                                <Image height={600} />
                                <Box className={'featured-box'} px="4">

                                    <Text mt="8">
                                        Movie name
                                    </Text>

                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Text fontSize="2xl" color="grey" fontWeight="medium">
                                            year
                                        </Text>
                                    </Box>

                                </Box>
                            </Box>
                        </Skeleton>))
                    :
                    movieList.map(movie => (
                        <Link key={movie.movieId} to={`/movie/${movie.movieId}`} style={{ textDecoration: "none" }} className={'featured-link'} >
                            <Box position="relative" rounded="md" >
                                <Image src={movie.moviePoster} height={600} />
                                <Box className={'featured-box'} px="4">

                                    <Text mt="8">
                                        {movie.movieName}
                                    </Text>

                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Text fontSize="2xl" color="grey" fontWeight="medium">
                                            {movie.year}
                                        </Text>
                                    </Box>

                                </Box>
                            </Box>
                        </Link>
                    ))
                }



            </Slider>
        </Container>
    );
}

export default MainPage;